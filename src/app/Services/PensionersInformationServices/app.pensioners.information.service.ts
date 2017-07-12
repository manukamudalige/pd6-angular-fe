/**
 * Created by Amila on 7/4/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseService } from '../app.base.service';

@Injectable()
export class PensionersInformationService {
  constructor(private baseService: BaseService) {

  }

  getPendingInformation() {
    const params = {
      state: 'pending'
    }
    this.baseService.get('pensioners', 'liveApi', params, (result, error) => {
      console.log(result);
    });
  }
}
