import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[] = [];

  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit(): void {
    this.categories = this.dataHandlerService.getCategories();
  }

}
