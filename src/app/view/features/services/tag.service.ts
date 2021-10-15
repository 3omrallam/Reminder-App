import { Injectable } from '@angular/core';
import { Tag } from './../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  tags: Tag[] = [
    {
      id: 1,
      tagName: 'task',
      tagIcon: 'tasks',
      tagBGColor: '#EEEFF0',
      tagTextColor: 'text-dark'
    },
    {
      id: 2,
      tagName: 'my pocket',
      tagIcon: 'Pocketgreen',
      tagBGColor: '#F0F5F1',
      tagTextColor: 'text-success'
    },
    {
      id: 3,
      tagName: 'trash',
      tagIcon: 'Trashred',
      tagBGColor: '#F5EFF0',
      tagTextColor: 'text-danger'
    },
  ]
  constructor() { }
}
