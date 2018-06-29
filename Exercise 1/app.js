new Vue({
    el: '#exercise',
    data: {
        name: 'Aivaras',
        age: 25,
        image: 'http://wp.patheos.com.s3.amazonaws.com/blogs/faithwalkers/files/2013/03/bigstock-Test-word-on-white-keyboard-27134336.jpg'
    },
    methods: {
        random() {
            return Math.random();
        }
    }
});