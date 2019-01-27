import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()
  user: User;
  localStorage: boolean = false;
  fieldObservations: string = '';
  tableInicitalize: boolean = false;
  optionsTable = {
    "pageLength": 50
  }
  
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    console.log(this.user)
  }

  ngOnChanges() {
    if(this.tableInicitalize) {
      console.log('aqui');
      $('#tabela').DataTable().destroy();
      this.tableInicitalize = true;

      setTimeout(function() {
        $('#tabela').DataTable();
      }, 10)
    }   
  }

  ngAfterViewInit() {
    $('#tabela').DataTable();
    this.tableInicitalize = true;
  }

  getLocalStorage(name: string) {
    return localStorage.getItem(name);
  }

  setLocalStorage(name: string, text: string) {
    localStorage.setItem(name, text)
  }
}

declare var $: any;