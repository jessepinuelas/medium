import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@my-org-name/general-application",
  app: () =>
    System.import<LifeCycles>(
      "http://localhost:8600/my-org-name-general-application.js"
    ),
  activeWhen: ["/app"],
});

registerApplication({
  name: "@my-org-name/ecommerce-application",
  app: () =>
    System.import<LifeCycles>(
      "http://localhost:8800/my-org-name-ecommerce-application.js"
    ),
  activeWhen: ["/store"],
});

start({
  urlRerouteOnly: true,
});
