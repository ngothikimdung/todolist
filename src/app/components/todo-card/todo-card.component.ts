import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FromtaskComponent } from 'src/app/fromtask/fromtask.component';
import { Card, Task } from 'src/app/models/todos.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  taskForm!: FormGroup;

  tasks: Task[] = [];
  constructor(private formb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.formb.group({
      item: ['', Validators.required],
    });
  }

  todo: Card[] = [
    { nameCard: 'Todo', list: [{ nameTask: 'AAAA' }, { nameTask: 'BBBBB' }] },
    {
      nameCard: 'InProgress',
      list: [{ nameTask: 'AAAA' }, { nameTask: 'BBBBB' }],
    },
  ];

  addTask() {
    this.tasks.push({
      nameTask: this.taskForm.value.item,
    });
    this.taskForm.reset();
  }
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
