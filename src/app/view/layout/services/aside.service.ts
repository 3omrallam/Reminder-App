import { Injectable } from '@angular/core';
import { Navigators } from '../navigators';
@Injectable()
export class AsideService {
  navigators: Navigators[] = [
    {
      id: 1,
      iconName: 'prayer',
      route: 'prayer',
      title: 'prayer'
    },
    {
      id: 2,
      iconName: 'dashboard',
      route: 'dashboard',
      title: 'dashboard'
    },
    {
      id: 3,
      iconName: 'tasks',
      route: 'tasks',
      title: 'tasks'
    },
    {
      id: 4,
      iconName: 'reminders',
      route: 'reminders',
      title: 'reminders'
    },
    {
      id: 5,
      iconName: 'pockets',
      route: 'my-pocket',
      title: 'my pocket'
    },
    {
      id: 6,
      iconName: 'categories',
      route: 'categories',
      title: 'categories'
    },
    {
      id: 7,
      iconName: 'archive',
      route: 'archive',
      title: 'archive'
    },
    {
      id: 8,
      iconName: 'trash',
      route: 'trash',
      title: 'trash'
    }
  ]
  constructor() { }
}
