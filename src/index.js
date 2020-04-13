import * as Components from "./components";

const install = (Vue) => {
    Object.keys(Components).forEach(name => Vue.component(name, Components[name]));
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
};
export * from "./components";