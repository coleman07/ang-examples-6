import { Injectable } from '@angular/core';
import { ExercisePlan } from '../workout-runner/model';
import { CoreModule } from './core.module';


@Injectable({
  providedIn: 'root'
})
export class WorkoutHistoryTrackerService {
  private maxHistoryItems = 20;
  private currentWorkoutLog: WorkoutLogEntry = null;
  private workoutHistory: Array<WorkoutLogEntry> = [];
  private workoutTracked: boolean;

  constructor() { }

  get tracking(): boolean {
    return this.workoutTracked;
  }

  startTracking() {
    this.workoutTracked = true;
    this.currentWorkoutLog = new WorkoutLogEntry(new Date())
    if (this.workoutHistory.length >= this.maxHistoryItems) {
      this.workoutHistory.shift();
    }
    this.workoutHistory.push(this.currentWorkoutLog);
  }

  exerciseComplete(exercise: ExercisePlan) {
    this.currentWorkoutLog.lastExercise = exercise.exercise.title;
    ++this.currentWorkoutLog.exerciseDone;
  }

  endTracking(completed: boolean) {
    if(this.currentWorkoutLog) {
    this.currentWorkoutLog.completed = completed;
    this.currentWorkoutLog.endedOn = new Date();
    this.currentWorkoutLog = null;
    this.workoutTracked = false;
    }
  }

  getHistory(): Array<WorkoutLogEntry> {
    return this.workoutHistory;
  }
}

export class WorkoutLogEntry {
  constructor(
    public startedOn: Date,
    public completed: boolean = false,
    public exerciseDone: number = 0,
    public lastExercise?: string,
    public endedOn?: Date) {}
}
