import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
	url = 'http://jsonplaceholder.typicode.com/users';
	data$;

	constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
		this.data$ = this.http.get<any>(this.url);
	}

	ngOnInit() {}
}
