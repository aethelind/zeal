import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register2",
  templateUrl: "./register2.page.html",
  styleUrls: ["./register2.page.scss"]
})
export class Register2Page implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  async next() {
    this.router.navigate(["/register4"]);
  }
}
