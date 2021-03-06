import * as components from "./components";

export default {
  install: (Vue) => {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
  },
};
