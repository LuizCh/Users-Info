import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanLoad {
	constructor() {}

	canLoad(route: Route) {
		return true;
	}
}
