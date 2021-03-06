<p align="center">
  <a href="https://next.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's blog starter with contentful and TypeScript
</h1>

Kick off your blog with this boilerplate. This barebones starter ships with the main Gatsby configuration files you might need. 

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://next.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    yarn global add gatsby-cli
    ```

2.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter's repository.

    ```sh
    # create a new Gatsby site using this starter
    gatsby new my-gatsby-site https://github.com/abhnvkmr/gatsby-blog-contentful-ts
    ```

3.  **Install TypeScript and TSLint.**

    I prefer having TypeScript/TSLint installed globally.

    ```sh
    yarn global add typescript tslint
    ```

    If you don't, add the packages to the project.

    ```sh
    yarn add typescript tslint
    ```
    
3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-gatsby-site/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `my-gatsby-site` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!
    
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.tsx
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.tsx
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json
    └── yarn.lock

  1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
  
  3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  4.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.
  
  5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
  
  9.  **`LICENSE`**: Gatsby is licensed under the MIT license.
  
  10.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how yarn knows which packages to install for your project.
  
  11.  **`README.md`**: A text file containing useful reference information about your project.

  12.  **`tsconfig.json`**: This is the onfiguration for TypeScript compiler.

  13.  **`tslint.json`**: This is configuration file for TSLint. It has recommended, react and prettier rules added by default.
  
  14.  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) This is an automatically generated file based on the exact versions of your node dependencies that were installed for your project. (You won’t change this file directly).

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.
