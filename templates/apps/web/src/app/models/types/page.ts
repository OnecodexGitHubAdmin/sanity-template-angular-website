import { LoadedImage } from './loaded-image';
import { SanityType } from './sanity-type';

export interface Page {
  _type: 'page';
  title: string;
  description: string;
  openGraphImage: LoadedImage;
  content: SanityType[];
}
