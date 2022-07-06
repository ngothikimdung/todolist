import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/todos.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() card: any;

  @Output() emitCard: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
