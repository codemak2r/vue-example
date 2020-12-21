<template>
  <div id="app">
      <h2 class="title has-text-centered dividing-header">upvote!</h2>    
      <div class="section">
        <article class="media" v-for="submission in submissions" :key="submission.id" :class="{'blue-border': submission.votes >=20 }">
          <Submission :submission="submission" />
        </article>
    </div>    
  </div>
</template>

<script>
import { submissions } from "./seed.js"
import Submission from "./components/Submission.vue"

export default {
  name: 'App',
  data() {
    return {
      submissions: submissions
    }
  },
  components: {
    Submission
  }
}
</script>

<style>
/* Miscellaneous Styles */

.dividing-header {
  margin-top: 1em;
  margin-bottom: 2em;
}

.section {
  padding: 2rem 1.5rem;
}

.media {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e6e7e9;
  padding: 1em 1.5em 0.5em 1.5em;
  border-radius: 0.3em;
}

.media + .media {
  margin-top: 1.5rem;
}

.blue-border {
  border: 1px solid #3373dc !important;
}

.tag {
  font-size: 0.6rem !important;
}

.icon {
  cursor: pointer;
}

.image.is-24x24 {
  display: inline;
  position: relative;
  top: 5px;
  border-radius: 20px;
}
</style>
