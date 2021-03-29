// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import navigationTreeItem from './documents/navigationTreeItem';
import siteConfig from './documents/siteConfig';

// Object types
import subNavigationItem from './objects/subNavigationItem';
import categoryCard from './objects/categoryCard';
import categoryCardGrid from './objects/categoryCardGrid';
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import socialMediaToolbar from './objects/socialMediaToolbar';
import hero from './objects/hero';
import person from './objects/person';
import personBanner from './objects/personBanner';
import imageSection from './objects/imageSection';
import imageCarousel from './objects/imageCarousel';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';
import textSectionLinkItem from './objects/textSectionLinkItem';
import navigatableTextSection from './objects/navigatableTextSection';
import divider from './objects/divider';
import customerFeedback from './objects/customerFeedback';
import instagramSection from './objects/instagramSection';
import pageNavigation from './objects/pageNavigation';
import pageNavigationItem from './objects/pageNavigationItem';
import table from './objects/table';
import tableRow from './objects/tableRow';
import tableRowItem from './objects/tableRowItem';
import trimmablePortableText from './objects/trimmablePortableText';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    categoryCard,
    categoryCardGrid,
    cta,
    embedHTML,
    figure,
    hero,
    person,
    personBanner,
    imageSection,
    imageCarousel,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    navigationTreeItem,
    subNavigationItem,
    siteConfig,
    textSection,
    textSectionLinkItem,
    navigatableTextSection,
    socialMediaToolbar,
    divider,
    customerFeedback,
    instagramSection,
    pageNavigation,
    pageNavigationItem,
    table,
    tableRow,
    tableRowItem,
    trimmablePortableText,
  ]),
});
