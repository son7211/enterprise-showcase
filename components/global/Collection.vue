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
      default: () => []
    },
    topic: {
      type: String,
      required: false,
      default: () => null
    }
  },
  computed: {
    computedRepositories () {
      const computed = [...this.repositories]
      const topics = this.$store.getters.getTopicRepositories(this.topic) || {}

      return [...new Set([...Object.keys(topics), ...computed])]
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
