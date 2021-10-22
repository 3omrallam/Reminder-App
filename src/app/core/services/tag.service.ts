import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';

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
      tagIcon: 'trashTrue',
      tagBGColor: '#F5EFF0',
      tagTextColor: 'text-danger'
    },
    {
      id: 4,
      tagName: 'archive',
      tagIcon: 'archiveTrue',
      tagBGColor: '#EEF2FA',
      tagTextColor: 'text-primary'
    },
    {
      id: 5,
      tagName: 'pin',
      tagIcon: 'pinTrue',
      tagBGColor: '#F8F6EF',
      tagTextColor: 'text-warning'
    }
  ]
  constructor() { }
}
