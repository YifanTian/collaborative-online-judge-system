import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = 'ooolj!';
  username: string = 'yft'
  constructor(@Inject('auth') private auth) {
    if (this.auth.authenticated()) {
      this.username = this.auth.getProfile().nickname;
    }
  }

  ngOnInit() {
  }

  login(): void {
    this.auth.login()
      .then(profile => this.username = profile.nickname);
  }

  logout(): void {
    this.auth.logout();
  }
}