new Vue({
  el: '#exercise',
  data: {
      effect: true,
      colorClass: 'class1',
      borderClass: 'class2',
      inputClass1: 'class1',
      inputClass2: 'class2',
      inputClass3: false,
      inputClass4: 'backgroundColor: green; color: red',
      progress: 100
  },
  methods: {
    startEffect() {
      var vm = this;
      setInterval(() => {
        vm.effect = !vm.effect;
      }, 1000);
    },
    startProgress() {
      var vm = this;
      setInterval(() => {
        vm.progress += 50;
      }, 1000);
    }
  },
  computed: {
    divClasses() {
      return {
          highlight: this.effect,
          shrink: !this.effect
      }
    },
  }
});
