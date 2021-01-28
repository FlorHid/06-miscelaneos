import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

  loading: boolean = false;

  
  dalert:string = "alert-danger"

  settings: any = {
    danger: false 
  }

  constructor() { }

  ngOnInit(): void {
  }

  start() {

    this.loading = true;

    setTimeout( ()=> this.loading = false, 3000 )

  }

}
