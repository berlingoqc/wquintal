import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const matModule = [
  MatListModule,
  MatDividerModule,
  MatToolbarModule,
  MatChipsModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: matModule,
  exports: matModule
})
export class MatModule { }
