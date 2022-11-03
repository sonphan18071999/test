import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.scss'],
})
export class SSOComponent implements OnInit {
  constructor(private router: Router) {}

  localStorageToken(): string | undefined {
    return localStorage.getItem('token')?.toString();
  }

  ngOnInit(): void {}

  navigateSSO(): void {
    this.router.navigateByUrl('home/login');
  }
}
