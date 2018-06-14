import { Component } from "@angular/core";
export class User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/839897125655764994/GYd7zPsP_400x400.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/702185727262482432/n1JRsFeB_400x400.png'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/1002650095375077376/kDN_GFJg_400x400.jpg'
  }
];
@Component({
  selector: "about-page",
  styles:[
    `
    .profile-card   {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 30px;
      text-align: center;
    }
    .profile-card img  {
      max-width: 50%;
      margin: 15px auto;
    }
    `
  ],
  template: `
  <div class="row" *ngIf="users">
    <div class="col-sm-4" *ngFor="let user of users">
      <div class="profile-card">
        <img [src]="user.avatar" class="img-responsive img-circle">
        <h2>{{ user.name }}</h2>
        <p><a href="#">{{ user.username }}</a></p>
      </div>
    </div>
  </div>
  `
})
export class AboutComponent {
  users: User[] = users;
}
