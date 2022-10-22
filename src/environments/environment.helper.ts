export interface Environment {
  production: boolean;
  flapoProductsURL: string;
}

export const baseEnvironment: Environment = {
  production: false,
  flapoProductsURL:
    'https://flapotest.blob.core.windows.net/test/ProductData.json',
};
