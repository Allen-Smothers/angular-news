export interface Article {
    id: number;
    headline: string;
    snippet: string;
    fullStory: string;
    location: string;
    nsfw: boolean;
    hasVideoPlaceholder: boolean;
    numberOfImages: number;
    categoryId: number;
    relatedArticleIds: [Article];
  }