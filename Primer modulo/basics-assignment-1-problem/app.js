const app= Vue.createApp({
    data(){
        return {
            nombre: 'Ema',
            nombreNuevo: '',
            edad: 26,
            random: Math.random(),
            link: 'https://cdn-bnofo.nitrocdn.com/YCOqbulOWPTbigaUOflqfvBCmkFuxfWf/assets/static/optimized/rev-930fc8f/wp-content/uploads/2021/03/329711.2e21e54c385b266b767a64795617c9f2.1600-768x497.jpg',
        };
    },
    methods:{
        cambiarNombre: function(){
            this.nombre=nombreNuevo;
        }
    }
}).mount('#assignment');