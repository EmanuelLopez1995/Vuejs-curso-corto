const app = Vue.createApp({
    data(){
        return{
            number: 0,
        }
    },
    computed:{
        result(){
            if(this.number<37){
                return 'Not there yet';
            }else if(this.number>37){
                return 'Too much!';
            }else{
                return this.number;
            }
        }
    },
    methods:{
        addnumber(value){
            this.number+=value;
        }
    },
    watch:{
        result(){
            const that = this;
            setTimeout(function(){
                that.number=0;
            },5000)
        }
    }
}).mount('#assignment');