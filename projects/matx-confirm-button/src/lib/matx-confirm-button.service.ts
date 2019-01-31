import { CONFIG_SERVICE, IConfirmButtonConfig } from './matx-confirm-button.models';
import { Injectable, Optional, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatxConfirmButtonService {
  get defaultQuestion() {
    return this.config && this.config.defaultQuestion || 'Are you sure?';
  }

  get confirmSaveQuestion() {
    return this.config && this.config.confirmSaveQuestion || 'Are you sure you want to save this?';
  }

  get confirmDeleteQuestion() {
    return this.config && this.config.confirmDeleteQuestion || 'Are you sure you want to delete this?';
  }

  get confirmButtonText() {
    return this.config && this.config.confirmButtonText || 'Confirm';
  }

  get cancelButtonText() {
    return this.config && this.config.cancelButtonText || 'Cancel';
  }

  constructor(
    @Optional() @Inject(CONFIG_SERVICE) private config: IConfirmButtonConfig,
  ) {}
}
