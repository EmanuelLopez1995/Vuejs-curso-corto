const app= Vue.createApp({
    data(){
        return{
            inputClass: '',
            paragraphVisible: true,
            color: ''
        }
    },
    methods: {
        toggleParagraphVisibility(){
            this.paragraphVisible = !this.paragraphVisible;
        }
    },
    computed:{
        paraClasses(){
            return{ // los dos puntos aca funcionan como un if va a retornar user1 si el input es 'user1'
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            }
        }
    }
}).mount('#assignment');