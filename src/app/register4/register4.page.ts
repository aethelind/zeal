import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register4',
  templateUrl: './register4.page.html',
  styleUrls: ['./register4.page.scss'],
})
export class Register4Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  async next() {
    this.router.navigate(["/register5"]);
  }

}
