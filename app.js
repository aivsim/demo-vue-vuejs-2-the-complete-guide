new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        sayHello() {
            this.title = 'Hello!';
            return this.title;
        },
        increase() {
            this.counter++;
        },
        updateCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});