import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
	{
		// path: 'users', component: UsersComponent
		path: '',
		children: [
			{ path: '', component: LoginComponent },
			{ path: 'users', component: UsersComponent },
			{ path: 'users/:id', component: UsersComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {}
