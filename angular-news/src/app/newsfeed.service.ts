import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service'

import { Featured } from './featured';
import { Article } from './article';
import { Banner } from './banner';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private featuredUrl = 'http://challengenewsapi.azurewebsites.net/api/FeaturedSections';
  private articleUrl = 'http://challengenewsapi.azurewebsites.net/api/Articles/';
  private bannersUrl = 'http://challengenewsapi.azurewebsites.net/api/Banners';
  private categoriesUrl = 'http://challengenewsapi.azurewebsites.net/api/Categories'

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getFeatured(): Observable<Featured[]> {

    return this.http.get<Featured[]>(this.featuredUrl).pipe(
      tap(_ => this.log('fetched featured')),
      catchError(this.handleError<Featured[]>('getFeatured', []))
    ); 
  }

  getBanner(): Observable<Banner[]> {

    return this.http.get<Banner[]>(this.bannersUrl).pipe(
      tap(_ => this.log('fetched banner')),
      catchError(this.handleError<Banner[]>('getBanner', []))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      tap(_ => this.log('fetched categories')),
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  getArticle(id: number): Observable<Article> {
    //let url = this.articleUrl + id;
    const url = `${this.articleUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      tap(_ => this.log('fetched article')),
      catchError(this.handleError<Article>('getArticle'))
    );
  }

  getArticlesByCategory(id: number): Observable<Article[]> {
    let url = this.categoriesUrl + '/' + id + '/Articles';
    console.log(url);
    
    return this.http.get<Article[]>(url).pipe(
      tap(_ => this.log('fetched atricles by category')),
      catchError(this.handleError<Article[]>('getArticlesByCategory', []))
    );
  }



  private log(message: string) {
    this.messageService.add(`NewsfeedService: ${message}`);
    //console.log(`NewsfeedService: ${message}`);
  }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
