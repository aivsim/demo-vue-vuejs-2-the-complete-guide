new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: 'Max'
    },
    computed: {
        output() {
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    },
    methods: {
        sayHello() {
            this.title = 'Hello!';
            return this.title;
        },
        increase(step, event) {
            this.counter += step;
        },
        updateCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe() {
            alert('Alert!');
        }
    }
});