import { Article } from './article';

export interface Brand {
  id: number;
  brandName: string;
  name: string;
  descriptionText: string;
  articles: Article[];
}
