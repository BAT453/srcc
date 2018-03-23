import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

const READ_ACTION = 'getAuthors';
const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'edit';
const REMOVE_ACTION = 'delete';

@Injectable()
export class EditService extends BehaviorSubject<any[]> {
  constructor(private http: HttpClient) {
    super([]);
  }

  private data: any[] = [];

  public getAll() {
    return this.fetch(READ_ACTION)
      .pipe(
      tap(data => {
        return data;
      })
      );
  }

  public read() {
    if (this.data.length) {
      return super.next(this.data);
    }

    this.fetch(READ_ACTION)
      .pipe(
      tap(data => {
        this.data = data;
      })
      )
      .subscribe(data => {
        super.next(data);
      });
  }

  public save(data: any, isNew?: boolean) {
    const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

    this.reset();

    this.fetch(action, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public remove(data: any) {
    this.reset();

    this.fetch(REMOVE_ACTION, data)
      .subscribe(() => this.read(), () => this.read());
  }

  public resetItem(dataItem: any) {
    if (!dataItem) { return; }

    // find orignal data item
    const originalDataItem = this.data.find(item => item.id === dataItem.id);

    // revert changes
    Object.assign(originalDataItem, dataItem);

    super.next(this.data);
  }

  private reset() {
    this.data = [];
  }


  private fetch(action: string = '', data?: any): Observable<any[]> {
    if (action === 'getAuthors')
      return this.http
        .get(`api/author/${action}`)
        .pipe(map(res => <any[]>res));

    if (action === 'delete')
      return this.http
        .delete(`api/author/${action}?id=${data.id}`)
        .pipe(map(res => <any[]>res));

    if (action === 'create')
      return this.http
        .post(`api/author/${action}`, this.serializeModels(data))
        .pipe(map(res => <any[]>res));

    if (action === 'edit')
      return this.http
        .put(`api/author/${action}`, this.serializeModels(data))
        .pipe(map(res => <any[]>res));
  }

  private serializeModels(data?: any): string {
    return data ? `&models=${JSON.stringify(data)}` : '';
  }
}
