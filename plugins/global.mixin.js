import Vue from 'vue'

Vue.mixin({
  methods: {

      getStore(namespace = null, field = null) {
          let state = this.$store.state;
          if(!namespace && !field)
             return state;

          if(namespace && !field) {
              if(state[namespace])
                return state[namespace]
              return state;
          }

          if(field && !namespace) {
            if(state[field])
              return state[field]
            return state;
          }

          if(namespace && field) {
            if(state[namespace] && state[namespace][field])
              return state[namespace][field]
            return state;
          }

          return state;
      },

  }, // --- Methods
})
