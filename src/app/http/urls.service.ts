import { Injectable } from '@angular/core';
import { EnvironmentConfigService } from '../common/environment-config.service';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor(_environmentConfigService: EnvironmentConfigService) {
    this.crudUrl = _environmentConfigService.get('CRUD_URL');
    this.gridUrl = _environmentConfigService.get('GRID_URL');
    this.workflowUrl = _environmentConfigService.get('WORKFLOW_URL');
    console.log("Environment is: " + _environmentConfigService.get('ENVIRONMENT_NAME'));
   }

  crudUrl: string;
  gridUrl: string;
  workflowUrl: string;
}
