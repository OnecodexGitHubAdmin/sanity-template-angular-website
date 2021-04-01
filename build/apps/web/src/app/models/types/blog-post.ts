import { Block } from './block';
import { SanityType } from './sanity-type';
import { Slug } from './slug';
import { Tag } from './tag';

export interface BlogPost extends SanityType {
  _updatedAt: Date;
  content: Block[];
  title: string;
  introduction: string;
  tags: Tag[];
  route: Slug;
}
