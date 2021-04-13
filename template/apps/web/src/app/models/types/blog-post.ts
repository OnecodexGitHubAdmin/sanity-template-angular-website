import { Block } from './block';
import { EmbedHtml } from './embed-html';
import { Figure } from './figure';
import { SanityType } from './sanity-type';
import { Slug } from './slug';
import { Tag } from './tag';

export interface BlogPost extends SanityType {
  _updatedAt: Date;
  content: (Block|Figure|EmbedHtml)[];
  title: string;
  introduction: string;
  tags: Tag[];
  route: Slug;
}
