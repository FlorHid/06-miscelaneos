import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      New-user route!
    </p>
  `,
  styles: [
  ]
})
export class NewUserComponent implements OnInit {

  constructor( private router:ActivatedRoute) {

    this.router.parent.params.subscribe( parameters =>{

      console.log("son route new user");
      console.log(parameters);

    })

   }

  ngOnInit(): void {
  }

}
