import { Component, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  onSubmit(): void {
    if(!this.text) {
      alert("Please add text");
      return;
    }

    this.emitEvent();
    this.clearForm();
  }

  emitEvent(): void {
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);
  }

  clearForm(): void {
    this.text = "";
    this.day = "";
    this.reminder = false;
  }
}
