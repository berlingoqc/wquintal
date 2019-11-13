import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NgModule } from '@angular/core';

const matModule = [
  MatListModule,
  MatDividerModule
];

@NgModule({
  imports: matModule,
  exports: matModule
})
export class MatModule {}
