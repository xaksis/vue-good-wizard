<template>
  <div>
    <button @click="enableSave">Enable</button>
    <button @click="go()">goto</button>
    <vue-good-wizard
      ref="wizard"
      :steps="steps"
      :onNext="nextClicked" 
      :onBack="backClicked"
      :completeStep="completeStepOptions"
      >
      <div slot="page1">
        <h4>Step 1</h4>
        <input
        id="step1"
        v-model="step1"
        rows="15"
        >
        </input>
      </div>
      <div slot="page2">
        <input
        id="step2"
        v-model="step2"
        rows="15"
        >
        </input>
      </div>
      <div slot="page3">
      </div>
      <div slot="pageDone">
        <h2>Congratulations!  You can leave now...</h2>
      </div>
    </vue-good-wizard>
  </div>
</template>

<script>
// import { GoodWizard } from '../dist/vue-good-wizard.es.js';

export default {
  name: 'demo',
  data(){
    return {
      step1: '',
      step2: '',
      cStep: 1,
      steps: [
        {
          label: 'Select Items',
          slot: 'page1',
        },
        {
          label: 'Add Constraints',
          slot: 'page2',
        },
        {
          label: 'Review',
          slot: 'page3',
        },
        {
          label: 'Apply',
          slot: 'page4',
          options: {
            nextDisabled: true,
          }
        },
        {
          label: 'Complete',
          slot: 'pageDone'
        }
      ],
      completeStepOptions: {has:true,showButton:false}
    };
  },
  methods: {
    nextClicked(currentPage) {
      console.log('next clicked', currentPage)
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    },
    enableSave() {
      this.steps[3].options.nextDisabled = false;
    },
    go() {
      this.$refs.wizard.goTo(this.cStep++);
    }
  },
  // components: {
  //   'vue-good-wizard': GoodWizard,
  // }
};
</script>


