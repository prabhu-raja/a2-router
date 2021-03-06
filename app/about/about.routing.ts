import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from "./about-section.component";
import { AboutUsersResolve } from "./about-resolve.service";
import { AboutUserResolve } from "./about-user-resolve.service";

export const abtRoutes: Routes =[
    // for lazy loading - about
    {
        path: '',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent,
                // with resolve
                resolve: {
                    rUsers: AboutUsersResolve
                }
            },
            {
                path: ':username',
                component: AboutUserComponent,
                // with resolve
                resolve: {
                    rUser: AboutUserResolve
                }
            }
        ]
    }
    // with child
    /*
    {
        path: 'about',
        component: AboutSectionComponent,
        children: [
            {
                path: '',
                component: AboutComponent
            },
            {
                path: ':username',
                component: AboutUserComponent
            }
        ]
    }
    */
    // default
    /*
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: 'about/:username',
        component: AboutUserComponent
    }*/
];

export const abtRouting: ModuleWithProviders = RouterModule.forChild(abtRoutes);