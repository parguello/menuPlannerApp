import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app works!';

  dateSelection: Date;
  dateSelectionIso: string;
  food: string;
  foodItems: {item: string}[] = [{item: 'bread'}, {item: 'fruit'}];

  isEditVisible = false;


  ngOnInit() {
    if (!this.dateSelection) {
      this.dateSelection = new Date();
    }
    this.dateSelectionIso = this.dateSelection.toISOString().substring(0, 10);
  }

  public addFood() {
    this.foodItems.push({item: this.food});
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
    return date.toISOString().substring(0, 10);
  }
}
