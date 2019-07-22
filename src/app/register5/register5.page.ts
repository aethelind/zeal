import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register5',
  templateUrl: './register5.page.html',
  styleUrls: ['./register5.page.scss'],
})
export class Register5Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  async next() {
    this.router.navigate(["/tabs/tab1"]);
  }

}
