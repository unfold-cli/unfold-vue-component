import Vue from 'vue';
import StubPackage from "./components/StubPackage";

const StubPackagePlugin = {
    install(Vue, options = {}) {
        Vue.component(options.componentName || 'StubPackage', StubPackage);
    }
};

if (typeof window !== undefined && window.Vue && window.Vue === Vue) {
    StubPackagePlugin.install(window.Vue);
}

export { StubPackage, StubPackagePlugin };

export default StubPackage;
