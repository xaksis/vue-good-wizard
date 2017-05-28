import GoodWizard from './components/Wizard.vue';

const GoodWizardPlugin = {
  install(Vue, options) {
    Vue.component(GoodWizard.name, GoodWizard);
  },
};

export default GoodWizardPlugin;

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GoodWizardPlugin);
}
