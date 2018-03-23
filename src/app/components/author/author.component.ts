import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';


//import { AuthorService } from '../../services/author/author.service';

import { AuthorModel } from '../../models/author.model';
import { EditService } from '../../services/author/author.edit.service';


@Component({
  selector:'app-author',
  templateUrl: './author.component.html',
  providers: [
   // AuthorService,
   // EditService
  ]
})

export class AuthorComponent implements OnInit {
  public authors: Array<AuthorModel>;
  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public formGroup: FormGroup;

  private _editService: EditService;
  private _editedRowIndex: number;

  constructor( @Inject(EditService) editServiceFactory: any) {
    this._editService = editServiceFactory();
  }

  public ngOnInit(): void {
    this._editService.getAll()
      .subscribe(data => this.authors = data);

    this.view = this
      ._editService
      .pipe(map(data => process(data, this.gridState)));

    this._editService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;
    this._editService.read();
  }

  protected addHandler({ sender }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl('', Validators.required),
      'surname': new FormControl('', Validators.required)
    });
    sender.addRow(this.formGroup);
  }


  protected editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      'id': new FormControl(dataItem.Id),
      'name': new FormControl(dataItem.Name, Validators.required),
      'surname': new FormControl(dataItem.Surname)
    });
    this._editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  protected saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const author: AuthorModel = formGroup.value;
    this._editService.save(author, isNew);
    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    this._editService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this._editedRowIndex) {
    grid.closeRow(rowIndex);
    this._editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
