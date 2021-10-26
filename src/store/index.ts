import { defineStore } from 'pinia'
export default defineStore('app',{
    state:()=>({
        count:0,
        title:'Vue-Latest-Project'
    }),
    getters: {
        index:state=>state.count+1
    },
    actions:{
        increment() {
            this.count++
        }
    }
})
