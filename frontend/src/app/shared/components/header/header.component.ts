import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces';
import { AuthenticationService } from '../../../services';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	user: User

	toggleChat: boolean = true;
	toggleSingle: boolean = true;

	constructor(private authservice: AuthenticationService) {
		this.user = this.authservice.currentUser;
	}

	ngOnInit(): void {
	}


	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}
	logout() {
		this.authservice.logOut();
	}

}
