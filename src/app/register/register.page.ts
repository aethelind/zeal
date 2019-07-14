import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  school: string = "";
  constructor(public router: Router, public toastController: ToastController) {}

  ngOnInit() {}

  async next() {
    if (this.school == "") {
      console.log("must select a school");
      const toast = await this.toastController.create({
        message: "Please select a school.",
        duration: 2000,
        color: "danger"
      });
      toast.present();
      // display error
    } else {
      this.router.navigate(["/register2"]);
    }
  }
}
