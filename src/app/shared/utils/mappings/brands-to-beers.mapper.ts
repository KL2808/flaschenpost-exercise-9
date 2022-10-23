import { Beer } from '../../models/beer';
import { Brand } from '../../models/brand';

export function brandToBeers(brand: Brand): Beer[] {
  let beers: Beer[] = [];
  brand.articles.forEach((article) => {
    let beer: Beer = {
      id: article.id,
      name: brand.name,
      description: article.shortDescription,
      image: article.image,
      price: article.price,
      pricePerLiter: +(article.pricePerUnitText.match(/(\d*,\d*)/g) ||
        [])[0].replace(',', '.'),
    };
    beers.push(beer);
  });
  return beers;
}
