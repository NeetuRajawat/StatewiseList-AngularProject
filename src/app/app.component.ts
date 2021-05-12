import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'statewise-list';
  showAllList:boolean=false;
  showKarnatakList:boolean=false;
  showRajList:boolean=false;
  showGoaList:boolean=false;

  getAllList(){
    this.showAllList=true;
    this.showKarnatakList=false;
    this.showRajList=false;
    this.showGoaList=false;
  }
  getKarnaList(){
    this.showAllList=false;
    this.showKarnatakList=true;
    this.showRajList=false;
    this.showGoaList=false;
  }
  getRajList(){
    this.showAllList=false;
    this.showKarnatakList=false;
    this.showRajList=true;
    this.showGoaList=false;
  }
  getGoaList(){
    this.showAllList=false;
    this.showKarnatakList=false;
    this.showRajList=false;
    this.showGoaList=true;
  }
}

