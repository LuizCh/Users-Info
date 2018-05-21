import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
	{
		// path: 'users', component: UsersComponent
		path: '',
		children: [ { path: 'users', component: UsersComponent } ]
	},
	{ path: 'users:id', component: UserComponent, pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class UsersRoutingModule {}
