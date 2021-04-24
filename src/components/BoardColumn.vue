<template>
  <BaseDrop @drop="moveTaskOrColumn">
    <BaseDrag
      class="column"
      :transferData="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <div class="flex items-center mb-2 font-bold">
        {{ column.name }}
      </div>
      <div class="list-reset">
        <BoardTask
          v-for="(task, $taskIndex) in column.tasks"
          :key="task.id"
          :column="column"
          :task="task"
          :taskIndex="$taskIndex"
          :columnIndex="columnIndex"
          :board="board"
        />
        <input
          type="text"
          class="block p-2 w-full bg-transparent"
          placeholder="+ Enter new task"
          @keyup.enter="createTask($event, column.tasks)"
        />
      </div>
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import BoardTask from './BoardTask'
import BaseDrag from './BaseDrag'
import BaseDrop from './BaseDrop'
import movingTasksAndColumns from '../mixins/movingTasksAndColumn'

export default {
  components: { BoardTask, BaseDrag, BaseDrop },
  mixins: [movingTasksAndColumns],
  methods: {
    pickUpColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllow = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', { tasks, name: e.target.value })
      e.target.value = ''
    }
  }
}
</script>

<style>
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
