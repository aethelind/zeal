import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  constructor() {}

  async revealSocials() {
    console.log("reveal now");
    var s = document.getElementById("socials");
    var l = document.getElementById("like");
    s.style.display = "block";
    l.style.display = "none";
    //hide like
    // reveal socials
  }

  async remove() {
    console.log("remove dan");
    var d = document.getElementById("dan");
    d.style.display = "none";
    //hide dan
  }

  async remove2() {
    console.log("remove girl");
    var d = document.getElementById("girl");
    d.style.display = "none";
    //hide dan
  }
}
