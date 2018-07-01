var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

var vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
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

console.log(vm1.$data === data);

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

