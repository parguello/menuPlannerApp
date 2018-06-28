import { Component, OnInit } from '@angular/core';
import {AngularIndexedDB} from 'angular2-indexeddb';
import * as moment from 'moment';
import {MenuService} from "./services/menu.service";
import {Menu} from "./interfaces/menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app works!';

  dateSelection: Date;
  dateSelectionIso: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  menu: Menu;
  foodItems: {item: string}[] = [{item: 'bread'}, {item: 'fruit'}];

  isEditVisible = false;

  constructor(public menuService: MenuService){
    
  }

  ngOnInit() {

    if (!this.dateSelection) {
      this.dateSelection = new Date();
    }

    this.menuService.getDb().getByIndex('menu', 'date', this.displayFormattedDate(this.dateSelection)).then((menu) => {
      console.log(menu);
          this.breakfast = menu.breakfast;
          this.lunch = menu.lunch;
          this.dinner = menu.dinner;
    
    });
  }

  public changeDateSelection() {
    this.clearDay();

    this.menuService.getDb().getByIndex('menu', 'date', this.displayFormattedDate(this.dateSelection)).then((menu) => {
        console.log(menu);
        this.breakfast = menu.breakfast;
        this.lunch = menu.lunch;
        this.dinner = menu.dinner;

    });
  }

  public addFood() {

    const menu = <Menu> {'date': this.displayFormattedDate(this.dateSelection), 'breakfast': this.breakfast, 'lunch': this.lunch, 'dinner': this.dinner};
    this.menuService.addMenu(menu);

  }

  public deleteFood() {
    //this.menuService.deleteMenu();
  }

  public onPrint() {
      let popupWinindow;
      let innerContents = document.getElementById('printSectionId').innerHTML;
      popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWinindow.document.open();
      popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
      popupWinindow.document.close();
  }

  public onEdit() {
    this.isEditVisible = !this.isEditVisible;
  }

  public displayFormattedDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  public onDelete(id: number) {
    this.menuService.deleteMenu(id);
  }

  clearDay() {
    this.breakfast = '';
    this.lunch = '';
    this.dinner = '';
  }
}
