import { Component, ViewChild, Input, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';  

import {  GridComponent,  GridDataResult,  DataStateChangeEvent} from '@progress/kendo-angular-grid';  


//import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthorModel } from '../../models/author.model';
import { BaseUrl } from '../../../baseURL';

@Injectable()
export class AuthorService extends BaseUrl{
  private _getURL = this.get() + 'api/author/getAuthors';
  private _createURL = this.get() + 'api/author/create';
  private _updateURL = this.get() + 'api/author/edit';
  private _editURL = this.get() + 'api/author/delete';


  constructor(private _http: HttpClient) {
    super();
  }

  public read(): Observable<any> {
    return this._http.get(this._getURL)
  }  

  //public create(data): void {
  //  this._http.post(this._createURL);
  //}

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
