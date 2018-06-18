import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';

export const dbRoutes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component:  DashboardComponent
            },
            {
                path: 'users',
                component: DashboardUsersComponent,
                children: [
                    {
                        path: '',
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
];
export const dbRouting: ModuleWithProviders = RouterModule.forChild(dbRoutes);