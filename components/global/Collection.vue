<template>
  <v-row>
    <v-col v-for="repo of computedRepositories" :key="repo" cols="6">
      <repository :repo="getRepository(repo)" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    repositories: {
      type: Array,
      required: false,
      default: []
    },
    topic: {
      type: String,
      required: false
    }
  }, 
  computed: {
    computedRepositories() {
      let computed = [...this.repositories];
      let topics = this.$store.getters.getTopicRepositories(this.topic);
      
      Object.keys(topics).forEach(key => {
        if (computed[key]) return;
        computed.push(key)
      })
      return [...new Set(computed)]
    },
    repositoryMap () {
      return this.$store.getters.getRepositoryMap
    }
    
  },
  methods: {
    getRepository (repo) {
      return this.repositoryMap[repo]
    }
  }
}
</script>
