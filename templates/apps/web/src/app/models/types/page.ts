import { SanityType } from './sanity-type';

export interface Page {
  _type: 'page';
  title: string;
  content: SanityType[];
}
