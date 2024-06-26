import { createStore } from 'vuex'

export default createStore({
  //works as a variable
  state: {
    //data -> propertyName, null -> value
    education:null,
    about:null,
    workExp:null,
    projects:null,
    testimonials:null,
    skills:null
  },
  mutations: {
    //use to change the state/update the state
    // updateData(sate,payload){ //payload information passed in a function
    //   state.data = payload
    // }
    //committing a mutation
  },
  actions: { //dispatching an action
    //run all async code
    // fetchData(wholeStore, ){
      //   wholeStore.commit
      // }
    },
    modules: { //used to seperate code to make code cleaner/readable
    },
    getters: { //used to get things/ sorting 
      // filterData(){
      //   return Array.filter()
      // }
    }
})
