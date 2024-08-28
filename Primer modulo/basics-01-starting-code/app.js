const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn',
            courseGoalB: '<h2>Master Vue and build!</h2>',
            vueLink: 'https://google.com'
        };
    },
    methods:{
        outputGoal: function(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal'); // aca solo aplicamos a esa clase 

