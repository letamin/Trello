import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'coding',
      tasks: [
        {
          description: 'vuemastery',
          name: 'learn vue from web',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'more more more',
          name: 'more coding',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'relax',
      tasks: [
        {
          description: 'some music',
          name: 'youtube',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'some movies',
          name: 'cgv',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'some manga',
          name: 'tokyo ghoul',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'sports',
      tasks: [
        {
          description: 'get stronger',
          name: 'gym',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
