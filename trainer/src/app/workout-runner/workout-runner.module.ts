import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';



@NgModule({
  declarations: [WorkoutRunnerComponent],
  exports: [WorkoutRunnerComponent],
  imports: [
    CommonModule
  ]
})
export class WorkoutRunnerModule { }
