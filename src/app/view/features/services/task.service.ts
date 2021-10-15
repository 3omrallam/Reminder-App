import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  allTasks: any = [];

  taskControllers = [
    {
      id: 1,
      controllerName: 'reminders',
      iconName: (task: any) => {
        return task.trash ? 'reminders' : 'reminders'
      },
      toggleValue: (e: Event, task: any) => {
        console.log(e)
      }
    },
    {
      id: 2,
      controllerName: 'pin',
      iconName: (task: any) => {
        return task.trash ? 'Pinwhite' : 'Pinwhite'
      },
      toggleValue: (e: Event, task: any) => {
        console.log(e)
      }
    },
    {
      id: 3,
      controllerName: 'Paintwhite',
      iconName: (task: any) => {
        return task.trash ? 'Paintwhite' : 'Paintwhite'
      },
      toggleValue: (e: Event, task: any) => {
        console.log(e)
      }
    },
    {
      id: 4,
      controllerName: 'archive',
      iconName: (task: any) => {
        return task.trash ? 'archive' : 'archive'
      },
      toggleValue: (e: Event, task: any) => {
        console.log(e)
      }
    },
    {
      id: 5,
      controllerName: 'trash',
      iconName: (task: any) => {
        return task.trash ? 'Trashred' : 'trash'
      },
      toggleValue: (e: Event, task: any) => {
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
  todoTasks() {
    let todoTasks: any = []
    this.allTasks.map((task: any) => {
      if (!task.pocket && !task.trash) {
        todoTasks.push(task)
      }
    })
    return todoTasks
  }
}
