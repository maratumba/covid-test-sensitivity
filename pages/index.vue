<template>
  <v-row justify="center" align="start" class="mt-5 mb-5">
    <v-col cols="12" sm="10" md="8">
      <v-card>
        <v-card-text>
          <nuxt-content :document="disclaimer" />
          <ResultsTable :items="tests" />
          Made by [gulyamani](gulyamani.com). [Source code](https://github.com/maratumba/covid-test-sensitivity).
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
