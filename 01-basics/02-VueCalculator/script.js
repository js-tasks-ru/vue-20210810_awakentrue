import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    const mathSigns = [
      { sing: 'sum', calcFunc: (v1, v2) => v1 + v2, icon: '➕' },
      { sing: 'subtract', calcFunc: (v1, v2) => v1 - v2, icon: '➖' },
      { sing: 'multiply', calcFunc: (v1, v2) => v1 * v2, icon: '✖' },
      { sing: 'divide', calcFunc: (v1, v2) => v1 / v2, icon: '➗' },
    ];

    return {
      firstValue: 0,
      secondValue: 0,
      mathSigns: mathSigns,
      selectedMathSing: mathSigns[0],
    };
  },

  computed: {
    result() {
      const selectedCalcFunc = this.selectedMathSing.calcFunc;
      return selectedCalcFunc(this.firstValue, this.secondValue);
    },
  },
});

app.mount('#app');
