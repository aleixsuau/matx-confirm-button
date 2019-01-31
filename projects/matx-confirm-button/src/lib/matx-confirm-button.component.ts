import { Component, OnInit, OnChanges, Input, EventEmitter, ViewChild, TemplateRef, ContentChild, OnDestroy, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { MatxConfirmButtonService } from './matx-confirm-button.service';


@Component({
  selector: 'matx-confirm-button',
  templateUrl: './matx-confirm-button.component.html',
  styles: ['button { margin-right: 10px;}']
})
export class MatxConfirmButtonComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  color: 'primary' | 'accent' | 'warn';
  @Input()
  question: string;
  @Input()
  confirmButtonText: string;
  @Input()
  cancelButtonText: string;
  @Input()
  dialogConfig: MatDialogConfig;
  @Input()
  set confirmSave (confirmSave: string | boolean) {
    this._confirmSave = confirmSave != null && confirmSave !== false;
  }
  @Input()
  set confirmDelete (confirmDelete: string | boolean) {
    this._confirmDelete = confirmDelete != null && confirmDelete !== false;
  }
  @Input()
  set disabled(disabled: string | boolean) {
    this._disabled = disabled != null && disabled !== false;
  }
  @Input()
  set buttonType(buttonType: string) {
    const buttonTypeLowercased = buttonType && buttonType.toLowerCase();

    if (buttonTypeLowercased.includes('basic')) {
      this.buttonToShow = 'matButton';
    } else if (buttonTypeLowercased.includes('raised')) {
      this.buttonToShow = 'matRaisedButton';
    } else if (buttonTypeLowercased.includes('stroked')) {
      this.buttonToShow = 'matStrokedButton';
    } else if (buttonTypeLowercased.includes('flat')) {
      this.buttonToShow = 'matFlatButton';
    } else if (buttonTypeLowercased.includes('icon')) {
      this.buttonToShow = 'matIconButton';
    } else if (buttonTypeLowercased.includes('minifab')) {
      this.buttonToShow = 'matMiniFab';
    } else if (buttonTypeLowercased.includes('fab')) {
      this.buttonToShow = 'matFab';
    } else {
      this.buttonToShow = 'matButton';
    }
  }

  @Output()
  confirmed = new EventEmitter<any>();
  @Output()
  canceled = new EventEmitter<any>();
  @Output()
  backDropClick = new EventEmitter<boolean>();

  @ViewChild('defaultDialogTemplate')
  defaultDialogTemplate: TemplateRef<any>;
  @ContentChild(TemplateRef)
  customDialogTemplate: TemplateRef<any>;

  _disabled: boolean;
  _confirmSave: boolean;
  _confirmDelete: boolean;
  questionToShow: string;
  dialogRef: MatDialogRef<TemplateRef<any>>;
  dialogRefSubscription: Subscription;
  buttonToShow: string;

  constructor(
    private dialog: MatDialog,
    private matxConfirmButtonService: MatxConfirmButtonService,
  ) { }

  ngOnChanges(changes) {
    // TODO: Implement OnChanges
  }

  ngOnInit() {
    this.confirmButtonText = this.matxConfirmButtonService.confirmButtonText;
    this.cancelButtonText = this.matxConfirmButtonService.cancelButtonText;

    if (this.question) {
      this.questionToShow = this.question;
    } else if (this._confirmDelete) {
      this.questionToShow = this.matxConfirmButtonService.confirmDeleteQuestion;
    } else if (this._confirmSave) {
      this.questionToShow = this.matxConfirmButtonService.confirmSaveQuestion;
    } else {
      this.questionToShow = this.matxConfirmButtonService.defaultQuestion;
    }
  }

  ngOnDestroy() {
    if (this.dialogRefSubscription) {
      this.dialogRefSubscription.unsubscribe();
    }
  }

  onConfirmButtonClick() {
    const template = this.customDialogTemplate || this.defaultDialogTemplate;

    this.dialogRef = this.dialog.open(template, this.dialogConfig);
    this.dialogRefSubscription = this.dialogRef.backdropClick().subscribe(() => this.backDropClick.emit());
  }

  onConfirm() {
    this.confirmed.emit(true);
  }

  onCancel() {
    this.canceled.emit(true);
  }
}

