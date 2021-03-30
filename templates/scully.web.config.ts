import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { Routes } from './scully/plugins/routesPlugin';

export const config: ScullyConfig = {
  projectRoot: "./apps/web/src",
  projectName: "web",
  outDir: './dist/static',
  routes: {
    '': {
      type: Routes,
      projectId: 'vxqbsuag',
      dataset: 'production',
      useCdn: true
    }
  }
};