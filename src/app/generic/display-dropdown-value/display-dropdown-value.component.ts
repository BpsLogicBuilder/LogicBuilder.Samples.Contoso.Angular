import { Component, OnInit, Input } from '@angular/core';
import { GenericService } from '../../http/generic.service';
import { IDetailDropDownTemplate } from '../../stuctures/screens/detail/i-detail-form-settings';
import { SettingsService } from '../../http/settings.service';
import { ISelectorFlowResponse } from '../../stuctures/i-selector-flow-response';

@Component({
    selector: '[app-display-dropdown-value]',
    templateUrl: './display-dropdown-value.component.html',
    styleUrls: ['./display-dropdown-value.component.css'],
    standalone: false
})
export class DisplayDropdownValueComponent implements OnInit {

  @Input() public valueTextTemplate?: IDetailDropDownTemplate;
  @Input() public filterValueSourceItem?: any;
  @Input() public selectedValue: any;
  @Input() public modelType?: any;

  constructor(private readonly _genericService: GenericService, private readonly _settingsService: SettingsService) { }

  public selectedText?: string;
  public data: any;

  ngOnInit() {
    this.getDropDownData();
  }

  getDropDownData(): any
  {
    if (!(this.filterValueSourceItem && this.valueTextTemplate?.reloadItemsFlowName))
    {
      this.getList(this.valueTextTemplate?.textAndValueSelector);
      return;
    }

    this._settingsService.getSelector({ entity: {typeString: this.modelType, ...this.filterValueSourceItem}, reloadItemsFlowName: this.valueTextTemplate.reloadItemsFlowName}).subscribe((selectorResponse: ISelectorFlowResponse) => {
      if (selectorResponse.success)
      {
        this.getList(selectorResponse.selector);
      }
    });
  }

  getList(selector: any) : void{
    this._genericService.getList(this.valueTextTemplate?.requestDetails || {}, selector).subscribe(r =>
      {
        this.data = r;
        if(this.data?.length && this.valueTextTemplate)
        {
          const valueTextTemplate = this.valueTextTemplate;
          let selected = this.data.find((i: Record<string, any>) => i[valueTextTemplate.valueField] == this.selectedValue);
          this.selectedText = selected ? selected[valueTextTemplate.textField] : "";
        }
        console.log("this.filterCellTemplate Returned:   " + JSON.stringify(this.data));
      });
  }

}
