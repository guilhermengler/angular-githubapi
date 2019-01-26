import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getGitHubUser(name: string): Observable <User> {
    const urlGet = 'https://api.github.com/users/'+name+'/repos';
    return this.http.get <User> (urlGet);
  }
}
