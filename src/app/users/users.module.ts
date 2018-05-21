import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users.routing';

@NgModule({
	imports: [ CommonModule, UsersRoutingModule, HttpClientModule ],
	declarations: [ UsersComponent, UserComponent ]
})
export class UsersModule {}
