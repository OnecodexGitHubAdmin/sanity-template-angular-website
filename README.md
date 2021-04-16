# sanity-template-angular-website

_Angular template for websites, blogs or web shops. Built with sanity, angular, scully.io, nrwl._

This template repo is used to easily create a website, blog or webshop through a web interface. You can also deploy and configure it through this interface. You can test it by [creating this project](https://www.sanity.io/create/?template=OneCodexGithubAdmin/sanity-template-angular-website).

The template contains both a Sanity Studio and a front-end in Angular. Both are packed inside an nx workspace for better tooling support and deployed on Netlify. So it's really easy to add whatever you want. For example you can easily add angular material or tailwind CSS and use it in your front-end.

The Angular front-end is using scully to generate static pages before being deployed. 

![The Sanity.io and Angular powered website](https://github.com/OnecodexGitHubAdmin/sanity-template-angular-website/blob/master/.sanity-template/assets/website.png?raw=true)

## Local development

You develop the templates in `/template`, and review your changes in `/build`.

1. **Install dependencies with `npm install` in the root folder.** This will install the template development tool that watches changes in the `/template` folder and output the template to `/build`.

2. **Run `npx sanity-template build --template-values template-values-development.json` in root folder.** This will build the template files to `/build`. This is how the code will look for those who install the project later.

3. **Run `npm install` in `./build/apps/web` and `sanity install` in `/build/apps/studio`** This will install the necessary dependencies for the Angular frontend and the Studio.

4. **Run `npm run serve:all` in `./build`**. This will start the development servers for the Angular frontend and Sanity Studio.

5. **Run `npm run build` in `./build/apps/web` and then `npm run scully`**. This will build the Angular frontend and generate a static site which can be deployed anywhere.

## Notes

When developing ProjectId and dataset name can be changed in `template-values-development.json`