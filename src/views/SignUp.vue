<template lang="">
      <div>
          <div id="parent">
              <form  @submit.prevent="formSubmit">
                  <h1>Sign Up Form hehe</h1>
                  <!-- using v-model to save data in the properties -->
                   <label>Email:</label>
                   <input type="email" required v-model="email">
                   <label>Password:</label>
                   <input type="password" required v-model="password">
                   <label>Role:
                      <!-- select box -->
                  <select v-model="role">
                  <!-- default option -->
                   <option value="developer">Web Developer</option>
                   <option value="designer">Web Designer</option>
                   <option value="">Select a role: </option>
                  </select>
                   </label>
                   <label>Languages:</label>
                   <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage">
                   <button type="submit">submit</button>
                   <div v-for="lang,index in languages" :key="index+1">
                      <p id="para" @click='deleteLang(lang)'>
                          {{index+1}} : {{lang}}
                      </p>
                   </div>
                   <div class="terms">
                      <!-- isn't it insane? you can use -->
                       <input type="checkbox" required v-model="terms">
                       <label>Accept Terms and Conditions</label>
                   </div>
                   <h4>People wanted in your team:</h4>
              </form>
          </div>
      </div>
  </template>
  <script>
  export default {
      data(){
          return{
              form: {
                  name: '',
                  email: '',
                  role: '',
                  },
              }
          },
      methods(){
          console.log('The page has refreshed') ;
          this.email = ''
          this.password = ''
          this.terms = false
          this.currentLanguage = ''
          this.role = ''
      }
  }
  </script>
  <style>
  #parent{
    display:flex;
    justify-content: space-evenly;
  }
  </style>