import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Card, Task } from 'src/app/models/todos.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  taskForm!: FormGroup;
  cardForm!: FormGroup;

  tasks: Task[] = [];
  card: Card[] = [];

  isaddCard: boolean = false;
  isaddTask: boolean = false;

  constructor(private formb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.formb.group({
      item: ['', Validators.required],
    });
    this.cardForm = this.formb.group({
      item: ['', Validators.required],
    });
  }

  openformCard() {
    this.isaddCard = !this.isaddCard;
  }

  addCard() {
    const newCard: Card = {
      id: Date.now(),
      nameCard: this.cardForm.value.item,
      list: [],
    };
    this.card = [...this.card, newCard];
    this.cardForm.reset();
    this.isaddCard = false;
  }

  openformTask() {
    this.isaddTask = !this.isaddTask;
  }

  addTask(cardId: number) {
    const newTask: Task = {
      id: Date.now(),
      nameTask: this.taskForm.value.item,
    };
    this.card = this.card.map((card: Card) => {
      if (card.id === cardId) {
        card.list = [newTask, ...card.list];
      }
      return card;
    });
    this.taskForm.reset();
    this.isaddTask = false;
  }

  removeTask(cardId: number, taskId: number) {
    this.card = this.card.map((card: Card) => {
      if (card.id === cardId) {
        card.list = card.list.filter((task: Task) => task.id !== taskId);
      }
      return card;
    });

    this.card.splice(taskId, 1);
  }

  removeCard(cardId: number) {
    this.card = this.card.filter((card: Card) => card.id !== cardId);
    this.card.splice(cardId, 1);
  }

  // onEdit(item: Task, taskId: number) {
  //   this.taskForm.controls['item'].setValue(item.nameTask);
  //   this.updateId = taskId;
  //   this.isEditEnabled = true;
  // }
  // updateTask(cardId : number) {
  //   this.card = this.card.map((card: Card) => {
  //     if (card.id === cardId) {
  //       this.tasks[this.updateId].nameTask = this.taskForm.value.item;
  //   this.taskForm.reset();
  //   this.updateId = undefined;
  //   this.isEditEnabled = false;
  //     }
  //     return card;
  //   });

  // }

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
