const app= Vue.createApp({
    data(){
        return{
            alertMessage: 'Learn with Vue',
            first:'',
            firstInput: '',
            secondInput:'',
        }
    },
    methods:{
        showAlert(){
            alert(this.alertMessage);
        },
        setFirst(event){
            this.first = event.target.value;
        },
        changeFirstPhrase(){
            this.firstInput = this.first;
        },
        changeSecondInput(event){
            this.secondInput=event.target.value;
        }
    }
});

app.mount('#assignment')