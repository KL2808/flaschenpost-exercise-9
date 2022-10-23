import { Article } from './article';
import { Brand } from './brand';
export interface Beer {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  pricePerLiter: number;
}
