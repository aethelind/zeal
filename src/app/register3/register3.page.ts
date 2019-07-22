import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  async next() {
    this.router.navigate(["/register"]);
  }

}
