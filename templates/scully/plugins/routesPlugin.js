const {registerPlugin} = require('@scullyio/scully');
const sanityClient = require('@sanity/client');


const Routes = 'routes';

const routesPlugin = async (route, config) => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
  const client = sanityClient({
    projectId: config.projectId,
    dataset: config.dataset,
    useCdn: false
  });

  return Promise.resolve(client.fetch('*[_type == "route"]'))
    .then(json => {
      const handledRoutes = [];

      for (let item of json) {
        let slug = item.slug.current.toString();
        if (slug[0] !== '/') {
          slug = '/' + slug;
        }
        handledRoutes.push({
          route: slug
        });
      }

      return handledRoutes;
    });

  
};

// no validation implemented
const routesPluginValidator =  async conf => [];
registerPlugin('router', Routes, routesPlugin);
exports.Routes = Routes;