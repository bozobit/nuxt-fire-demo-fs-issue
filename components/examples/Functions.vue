<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Functions
    </h3>
    <div class="links">
      <v-btn color="primary" outlined @click="callTestFunction()"
        >Call Test Function</v-btn
      >
      <p class="mt-1">Might take some seconds.</p>
      <pre>
async callTestFunction() {
  try {
    const res = await this.$fireFunc.httpsCallable('testFunction')()
    alert(res.data)
  } catch (e) {
    alert(e)
    return
  }
}</pre
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    async callTestFunction() {
      try {
        const res = await this.$fireFunc.httpsCallable('testFunction')()
        alert(res.data.message)
      } catch (e) {
        alert(e)
        return
      }
    }
  }
})
</script>
