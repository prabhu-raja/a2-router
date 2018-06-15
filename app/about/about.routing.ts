import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';

export const abtRoutes: Routes =[
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: 'about/:username',
        component: AboutUserComponent
    }
];

export const abtRouting: ModuleWithProviders = RouterModule.forChild(abtRoutes);