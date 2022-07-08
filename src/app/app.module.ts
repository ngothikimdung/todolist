import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbThemeModule,
  NbCardModule,
  NbListModule,
  NbIconModule,
  NbDialogModule,
  NbInputModule,
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoCardComponent } from './components/todo-card/todo-card.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TodoCardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    NbThemeModule.forRoot(),
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
    NbInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
