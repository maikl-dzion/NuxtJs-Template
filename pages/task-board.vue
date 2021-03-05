<template>
  <div >

    <header class="bg-white shadow">
      <div class="container mx-auto max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
           Доска задач
        </h1>
      </div>
    </header>

    <main class="container mx-auto" >
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
         <pre>{{taskItems}}</pre>
      </div>
    </main>

  </div>
</template>

<script>

import ApiService from '~/api/api.service';
const api = new ApiService();

export default {
  name: "TaskBoard",
  data() {
    return {
       taskItems : [],
    }
  },

  methods : {

    async getTasks() {
        const response = await api.get('/task-board/list');
        this.taskItems = response.data;
    },

    async fetchSomething() {
       this.taskItems = await this.$axios.$get('/task-board/list')

        // this.$axios.$get('/user/12345', {
        //   cancelToken: source.token
        // }).catch(error => {
        //   if (this.$axios.isCancel(error)) {
        //     console.log('Request canceled', error)
        //   } else {
        //     // handle error
        //   }
        // })
        //
        // this.$axios.$post('/user/12345', {
        //   name: 'new name'
        // }, {
        //   cancelToken: source.token
        // })

    }

  },

  mounted() {
     this.getTasks()
     // this.fetchSomething()
  },
}
</script>

<style scoped>

</style>
