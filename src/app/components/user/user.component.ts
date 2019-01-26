import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';
import { AppComponent } from 'src/app/app.component';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  localStorage: boolean = false;
  fieldObservations: string = '';
  
  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  getLocalStorage(name: string) {
    return localStorage.getItem(name);
  }

  setLocalStorage(name: string, text: string) {
    localStorage.setItem(name, text)
  }
}
