import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  ok;

  constructor(private githubService: GithubService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.ok = this.appComponent.user;
  }
}
