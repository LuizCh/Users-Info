import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authentication/authentication.routing';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationGuard } from './authentication-guard.service';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AuthenticationModule,
		RouterModule.forRoot([
			{
				path: '',
				component: AuthenticationModule
			},
			{
				path: 'authentication',
				loadChildren: './users/users.module#UsersModule'
				// canLoad: [ AuthenticationGuard ]
			}
		])
	],
	providers: [ AuthenticationGuard ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
