import Vue from 'vue'

Vue.mixin({
  methods: {

      getStoreState(name = null, field = null) {
          let state = this.$store.state;
          if(!name)  return state;
          if(!field) return state[name];
          return state[name][field]
      },

  }, // --- Methods
})
