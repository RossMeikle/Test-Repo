import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third party modules
import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'login'
            },
            {
                path: 'login', loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'register', loadChildren: './register/register.module#RegisterModule'
            }
        ]
    }
]

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCrsI9mtiGIITlaMVXoXTRwgjV-O4YoXN8",
  authDomain: "axn-fitness.firebaseapp.com",
  databaseURL: "https://axn-fitness.firebaseio.com",
  projectId: "axn-fitness",
  storageBucket: "axn-fitness.appspot.com",
  messagingSenderId: "195070805487"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule { }