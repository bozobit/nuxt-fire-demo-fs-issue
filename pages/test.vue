<template>
  <!-- A TEST TO REPLICATE A FIRESTORE ISSUE WITH REFRESHING A PAGE. -->
  <div>
    <h1>TEST</h1>
    <p> When there are access rules in Cloud Firestore, 
        this will only work when linked from another page using a nuxt-link. 
        If you refresh this page, you will get an insufficient privileges error when this
        page executes a fetch operation. If you set the rules in Cloud Firestore to allow all access, this will work as before. 
        For some reason, the Firestore rule reads the request.auth as null. Not sure why!</p>
    <h2>Message retrieved from the database</h2>
    <p> {{ message.messageText }} </p>
    <p><nuxt-link to="/">NUXT LINK TO HOME</nuxt-link></p>
  </div>
</template>

<script>
/* eslint-disable no-debugger, no-console */

export default {


  async fetch ({ store }) {
      console.log('Calling fetch to get message')
      await store.dispatch('readMessage')
  },

  computed: {
    message () {
      return this.$store.getters.message
    }
  }

}
</script>