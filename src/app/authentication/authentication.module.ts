import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule, HttpClientModule ],
	declarations: [ UsersComponent, LoginComponent ]
})
export class AuthenticationModule {}
