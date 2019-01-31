import { InjectionToken } from '@angular/core';


export const CONFIG_SERVICE = new InjectionToken<IConfirmButtonConfig>('Confirm Button Token');


export class IConfirmButtonConfig {
  defaultQuestion?: string;
  confirmDeleteQuestion?: string;
  confirmSaveQuestion?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

