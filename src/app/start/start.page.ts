import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-start",
  templateUrl: "./start.page.html",
  styleUrls: ["./start.page.scss"]
})
export class StartPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    public router: Router,
    public alert: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

  // logs you in ie. navigates you to the main tabs screen
  async login() {
    const { username, password } = this;
    if (username == "" || password == "") {
      this.showAlert("Username or password incorrect.", "Please try again.");
      console.log("must input username and password fields");
      // display error
    } else {
      console.log("successful log in");
      const loading = await this.loadingController.create({
        message: "Please Wait...",
        duration: 1000
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();

      this.router.navigate(["/tabs/tab3"]);
      this.username = "";
      this.password = "";
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header: header,
      message: message,
      buttons: ["OK"]
    });

    await alert.present();
    this.username = "";
    this.password = "";
  }
}
