import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  onNotificationReceived(notification: { message: string, title: string, customProperties: {} }) {
    console.log(`notification received: ${notification.title} and ${notification.message}`);
  }

  constructor() {
    this.webView.AppCenter.Push.addEventListener("notificationReceived", this.onNotificationReceived);
  }

  webView: any = window;
}
