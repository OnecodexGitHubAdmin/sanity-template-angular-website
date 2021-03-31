import { Slug } from './slug';

export interface Route {
  slug: Slug;
  title: string,
  order: number
}
