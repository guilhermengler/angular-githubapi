import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from './models/user.model';
import { GithubService } from './services/github.service';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  formUser = new FormControl();
  error: boolean = false;
  user: User = null;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.formUser.valueChanges.pipe(
      filter(value => value.length > 2),
      debounceTime(500),
      switchMap(value => 
        this.githubService.getGitHubUser(value).pipe(
          catchError(error => {
            this.user = null;
            this.error = true;
            return EMPTY
          })
        )
      )
    )
    .subscribe(user => {
      console.log(user);
      this.user = user;
      this.error = false;
    })
  }
}
