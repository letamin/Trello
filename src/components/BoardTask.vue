<template>
  <BaseDrop @drop="moveTaskOrColumn">
    <BaseDrag
      @click="goToTask(task)"
      class="task"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
    >
      <span class="w-full flex-no-shrink font-bold">
        {{ task.name }}
      </span>
      <p class="w-full flex-no-shrink mt-1 text-sm" v-if="task.description">
        {{ task.description }}
      </p>
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import movingTasksAndColumns from '../mixins/movingTasksAndColumn'
import BaseDrag from './BaseDrag'
import BaseDrop from './BaseDrop'

export default {
  props: {
    taskIndex: {
      type: Number,
      required: true
    },
    task: {
      type: Object,
      required: true
    }
  },
  mixins: [movingTasksAndColumns],
  components: {
    BaseDrag,
    BaseDrop
  },
  methods: {
    goToTask (task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    }
  }
}
</script>

<style>
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}
</style>
