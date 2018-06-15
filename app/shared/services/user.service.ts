import { Injectable } from "@angular/core";
import { User } from "../models/user";

const usersPromise: Promise<User[]> = Promise.resolve([
    {
      id      : 1,
      name    : 'Chris',
      username: 'sevilayha',
      avatar  : 'https://pbs.twimg.com/profile_images/839897125655764994/GYd7zPsP_400x400.jpg'
    },
    {
      id      : 2,
      name    : 'Nick',
      username: 'whatnicktweets',
      avatar  : 'https://pbs.twimg.com/profile_images/702185727262482432/n1JRsFeB_400x400.png'
    },
    {
      id      : 3,
      name    : 'Holly',
      username: 'hollylawly',
      avatar  : 'https://pbs.twimg.com/profile_images/1002650095375077376/kDN_GFJg_400x400.jpg'
    }
]);

@Injectable()
export class UserService {
    
    // get all users 👨‍👨‍
    getUsers() {
        return usersPromise;
    }

    // get specific user‍‍ ‍👨‍
    getUser(usrName) {
        return usersPromise.then(usrs => usrs.find(usr => usr.username === usrName));
    }
}