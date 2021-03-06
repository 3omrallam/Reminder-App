import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  allTasks: any = []; // all tasks
  // tasks controllers functions
  taskControllersName = ['reminders', 'pin', 'Paintwhite', 'archive', 'trash']
  taskControllers() {
    return this.taskControllersName.map((controller, index) => {
      return {
        id: index,
        controllerName: controller,
        iconName: (task: any) => {
          return task[controller] ? `${controller}True` : controller
        },
        controllerMethod: (task: any) => {
          task[controller] = !task[controller]
          this.getTaskFromLocalstorage(task.id)
        }
      }

    })
  }
  taskControllersX = [
    {
      id: 1,
      controllerName: 'reminders',
      iconName: (task: any) => {
        return task.trash ? 'reminders' : 'reminders'
      },
      toggleValue: (task: any) => {
      }
    },
    {
      id: 2,
      controllerName: 'pin',
      iconName: (task: any) => {
        return task.trash ? 'Pinwhite' : 'Pinwhite'
      },
      toggleValue: (task: any) => {
      }
    },
    {
      id: 3,
      controllerName: 'Paintwhite',
      iconName: (task: any) => {
        return task.trash ? 'Paintwhite' : 'Paintwhite'
      },
      toggleValue: (task: any) => {
      }
    },
    {
      id: 4,
      controllerName: 'archive',
      iconName: (task: any) => {
        return task.trash ? 'archive' : 'archive'
      },
      toggleValue: (task: any) => {
      }
    },
    {
      id: 5,
      controllerName: 'trash',
      iconName: (task: any) => {
        return task.trash ? 'Trashred' : 'trash'
      },
      toggleValue: (task: any) => {
        task.trash = !task.trash
        this.getTaskFromLocalstorage(task.id)
      }
    },
  ]

  constructor() { }

  createNewTask(data: any) {
    return localStorage.setItem('tasks', JSON.stringify(data))
  }
  runTimeUpdate(index: number, updatedTask: any) {
    return this.allTasks.splice(index, 1, updatedTask)
  }
  updateTasks(tasksArr: any) {
    return localStorage.setItem('tasks', JSON.stringify(tasksArr))
  }
  getTasks() {
    return JSON.parse(localStorage.getItem('tasks')!)
  }
  isLocalStorageEmpty() {
    return this.getTasks() == null ? this.createNewTask(this.allTasks) : this.allTasks = this.getTasks()
  }
  getTaskFromLocalstorage(taskID: number) {
    this.allTasks.map((task: any, index: any) => {
      if (task.id === taskID) {
        this.runTimeUpdate(index, task)
        this.updateTasks(this.allTasks)
      }
    })
  }
  filterdTasks(filter: any) {
    let filterdTasks: any = []
    this.allTasks.map((task: any) => {
      task[filter] && filterdTasks.push(task)
    })
    return filterdTasks
  }
  // Filter all Todos tasks onlie without any Active Task Controller Properties
  todoTasks() {
    let todoTasks: any = []
    this.allTasks.map((task: any) => {
      if (!task.pocket && !task.trash && !task.archive) { // TODO all the ! active properties as (Trash, pocket, archive, reminder, ...)
        todoTasks.push(task)
      }
    })
    return todoTasks
  }
}
