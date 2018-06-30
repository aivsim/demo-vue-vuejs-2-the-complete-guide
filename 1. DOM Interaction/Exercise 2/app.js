new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert() {
            alert('Alert!');
        },
        store(event) {
            this.value = event.target.value;
        }
    }
});