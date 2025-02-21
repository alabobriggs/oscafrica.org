import { configure, addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import "../src/css/style.css";

configure(require.context("../src", true, /\.stories\.js$/), module);

addParameters({
  options: {
    name: "OS Festival",
    url: "https://festival.oscafrica.org/",
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};