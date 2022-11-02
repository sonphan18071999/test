import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  functions = []
  constructor(private router: Router) {}

  ngOnInit(): void {}

  async navigate(url: string, id?: string): Promise<void> {
    if (id !== undefined) {
      this.router.navigateByUrl(url + 2);
    } else {
      this.router.navigateByUrl(url);
    }
  }
}
