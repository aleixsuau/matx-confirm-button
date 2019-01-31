import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule} from '@angular/material';

import { CONFIG_SERVICE, IConfirmButtonConfig } from './matx-confirm-button.models';
import { MatxConfirmButtonComponent } from './matx-confirm-button.component';
import { MatxConfirmButtonService } from './matx-confirm-button.service';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ]
  ,
  declarations: [ MatxConfirmButtonComponent ],
  exports: [MatxConfirmButtonComponent],
})
export class MatxConfirmButtonModule {
  static forRoot(config: IConfirmButtonConfig): ModuleWithProviders {
    return {
      ngModule: MatxConfirmButtonModule,
      providers: [
        {
          provide: CONFIG_SERVICE,
          useValue: config,
        },
        MatxConfirmButtonService,
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: MatxConfirmButtonModule,
    };
  }
}
