import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserValidatorService {
	user = 'Luis';
	password = '0000';

	constructor() {}

	validateUser(user, password) {
		if (user === this.user && this.password == this.password) {
			return true;
		} else {
			return false;
		}
	}
}
