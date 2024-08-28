const app= Vue.createApp({
    data(){
        return{
            task:'',
            taskList: [],
            taskListIsVisible: true
        }
    },
    methods:{
        addTask(){
            for(i=0;i<this.taskList.length;i++){
                if(this.taskList[i]==this.task){
                    alert("Ya ingresó esa tarea");
                    return;
                }  
            }
            this.taskList.push(this.task);
        },
        toggleTaskList(){
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
    computed:{
        buttonCaption(){
            return this.taskListIsVisible ? 'Hide List' : 'Show List';
        }
    }
}).mount('#assignment');