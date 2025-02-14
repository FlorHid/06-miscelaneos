import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br><hr>

    <app-classes></app-classes>
    <br><hr>

    <h1>Change text closing the mouse with apphighlighted </h1>

    <p [appHighlighted]="'red'">
        Hello there
    </p>

    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("constructor");
    
  }

  ngOnInit(): void {
    console.log("ngOnInit");  
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");  
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");  
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");  
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");  
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");  
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");  
  }
  
  ngOnDestroy(): void {
    console.log("ngOnDestroy");  
  }



}
