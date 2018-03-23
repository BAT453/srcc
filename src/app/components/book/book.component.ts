import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent implements OnInit {
  constructor(private _httpService: HttpClient) { }
  public apiValues: any[] = [];

  ngOnInit() {
    this._httpService.get('api/book/getBook').subscribe(values => {
      
    });
  }
}
