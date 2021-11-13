import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  public dataSource: MatTableDataSource<Task>;

  public tasks: Task[] = [];

  constructor(private dataHandlerService: DataHandlerService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);

    this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  public getPriorityColor(task: Task) {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return '#fff';
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }

}
