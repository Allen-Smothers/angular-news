import { Article } from './article';

export interface Featured {
    id: number;
    description: string;
    articles: [Article];
  }