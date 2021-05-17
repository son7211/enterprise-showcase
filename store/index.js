import Fuse from 'fuse.js'

export const state = () => ({
  repositories: [],
  repositoryMap: {},
  topicMap: {},
  searchEngine: null
})

export const mutations = {
  repositories (state, repositories) {
    state.repositories = repositories
  },
  repositoryMap (state, repositoryMap) {
    state.repositoryMap = repositoryMap
  },
  topicMap (state, topicMap) {
    state.topicMap = topicMap
  },
  searchEngine (state, searchEngine) {
    state.searchEngine = searchEngine
  }
}

export const actions = {
  loadRepositories ({ commit }, repositories) {
    const searchOptions = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      keys: [
        'full_name',
        'description',
        'topics'
      ]
    }
    const searchEngine = new Fuse(repositories, searchOptions)
    const map = {}
    const topicMap = {};
    for (const repo of repositories) {
      map[repo.full_name] = repo
      for (const topic of repo.topics) {
        if (!topicMap[topic]) {
          topicMap[topic] = {};
        }
        topicMap[topic][repo.full_name] = repo;
      }
    }

    commit('repositories', repositories)
    commit('repositoryMap', map)
    commit('topicMap', topicMap)
    commit('searchEngine', searchEngine)
  }
}

export const getters = {
  getRepositories: (state) => {
    return state.repositories
  },
  getRepositoryMap: (state) => {
    return state.repositoryMap
  },
  getTopicMap: (state) => {
    return state.topicMap
  },
  getTopicRepositories: (state) => (topic) => {
    return state.topicMap[topic]
  },
  getSearchEngine: (state) => {
    return state.searchEngine
  }
}
