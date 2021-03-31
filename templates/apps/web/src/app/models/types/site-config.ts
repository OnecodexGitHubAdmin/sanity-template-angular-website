import { Route } from './route';
import { LoadedImage } from './loaded-image';
import { Tag } from './tag';

export interface SiteConfig {
  _type: 'site-config';
  mainNavigation: Route[];
  footerNavigation: Route[];
  footerText: any;
  title: string;
  logo: LoadedImage;
  url: string;
  socialMediaLinks: Tag[];
  copyrightDate: Date;
  copyrightText: string;
}
