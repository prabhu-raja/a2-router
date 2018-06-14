import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
    selector: 'about-user',
    styles: [`
    img {
        max-width: 300px;
        margin: 20px auto;
    }
  ` ],
    template: `
        I am About 👨🏻
        <div class="jumbotron text-center" *ngIf="objUser">
            <h1>{{objUser.name}} {{objUser.username}}</h1>
            <img [src]="objUser.avatar" class="img-responsive img-circle">
        </div>
    `
})
export class AboutUserComponent implements OnInit {
    objUser: User;
    constructor(private actRoute: ActivatedRoute) { }

    ngOnInit() {
        let userName  = this.actRoute.snapshot.params['username'];
        this.objUser = users.find(usr => usr.username === userName);
    }
}