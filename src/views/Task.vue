<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        type="text"
        :value="task.name"
        class="p-2 w-full mr-2 block text-lg font-bold border-none outline-none"
        @change="updateTask($event, `name`)"
        @keyup.enter="updateTask($event, `name`)"
      />
      <textarea
        name="task-desc"
        :value="task.description"
        class="relative w-full bg-transparant px-2 border-none mt-2 h-64 leading-normal border-none outline-none"
        @change="updateTask($event, `description`)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getTask']),
    task () {
      return this.getTask(this.$route.params.id)
    }
  },
  methods: {
    updateTask (e, key) {
      this.$store.commit('UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value
      })
    }
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
