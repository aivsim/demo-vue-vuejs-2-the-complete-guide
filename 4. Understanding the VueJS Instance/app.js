var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('hello', {
  template: '<h1>Hello</h1>'
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

setTimeout(() => {
  vm1.title = 'Changed by Timer';
}, 3000);

vm1.newProp = 'New!';
console.log(vm1);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange() {
      vm1.title = 'Changed!'
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});
 
// vm3.$mount('#app3');
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);

new Vue({
  el: '#app4',
  data: {
    title: 'The VueJS Instance'
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy()');
  },
  destroyed() {
    console.log('destroyed()');
  },
  methods: {
    destroy() {
      this.$destroy();
    }
  }
})