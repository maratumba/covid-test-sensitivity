<template>
  <v-row justify="center" align="start" class="mt-5 mb-5">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-text>
          <nuxt-content :document="disclaimer" />
          <ResultsTable :items="tests" />
          <div class="text-right d-flex flex-row justify-end align-center mt-4">
          <div>Made by <a href="https://gulyamani.com">gulyamani</a> (2021)</div>
           <div class="ml-2">
             <a target="_blank" href="https://github.com/maratumba/covid-test-sensitivity"><img style="height: 2rem" :src="require('~/assets/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png')"/></a>
          </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const results = await $content('testSensitivity').fetch()
    const disclaimer = await $content('disclaimer').fetch()
    return { tests: results.body, disclaimer }
  },
  data: () => ({
    tests: [],
    disclaimer: '',
  })
}
</script>
