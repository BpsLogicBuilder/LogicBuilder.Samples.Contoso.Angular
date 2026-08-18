import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CompositeFilterDescriptor, distinct, filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import { FilterService } from '@progress/kendo-angular-grid';
import { GenericService } from '../../http/generic.service';

@Component({
    selector: 'app-grid-column-multiselect-filter',
    templateUrl: './grid-column-multiselect-filter.component.html',
    styleUrls: ['./grid-column-multiselect-filter.component.css'],
    standalone: false
})
export class GridColumnMultiselectFilterComponent implements OnInit {
  @Input() public isPrimitive!: boolean;
  @Input() public currentFilter!: CompositeFilterDescriptor;
  @Input() public filterMenuTemplate: any;
  @Input() public textField!: string;
  @Input() public valueField: any;
  @Input() public filterService!: FilterService;
  @Input() public field!: string;
  @Output() public valueChange = new EventEmitter<number[]>();

  constructor(private readonly _genericService: GenericService) { }

  public data: any;
  public currentData: any;
  public showFilter = true;
  private value: any[] = [];

  ngOnInit() {
    this.getFilterData();
  }

  protected textAccessor = (dataItem: any) => this.isPrimitive ? dataItem : dataItem[this.textField];
  protected valueAccessor = (dataItem: any) => this.isPrimitive ? dataItem : dataItem[this.valueField];

  public isItemSelected(item : any) {
    return this.value.includes(this.valueAccessor(item));
  }

  public onSelectionChange(item : any) {
    if (this.value.includes(item)) {
      this.value = this.value.filter(x => x !== item);
    } else {
      this.value.push(item);
    }

    this.filterService.filter({
      filters: this.value.map(value => ({
        field: this.field,
        operator: 'eq',
        value
      })),
      logic: 'or'
    });
  }

  public onInput(e: any) {
    this.currentData = distinct([
      ...this.currentData.filter((dataItem : any) => this.value.includes(this.valueAccessor(dataItem))),
      ...filterBy(this.data, {
        operator: 'contains',
        field: this.textField,
        value: e.target.value
      })],
      this.textField
    );
  }

  getFilterData(): any {
    this._genericService.getList(this.filterMenuTemplate.requestDetails, this.filterMenuTemplate.textAndValueSelector).subscribe(r => {
      this.data = r;
      console.log("this.MultiSelect Returned:   " + JSON.stringify(this.data));

      this.currentData = this.data;
      this.value = (this.currentFilter?.filters ?? [])
        .filter((f): f is FilterDescriptor => 'operator' in f)//if the f item has an operator property then it is of type FilterDescriptor
        .map((f) => f.value);

      this.showFilter = typeof this.textAccessor(this.currentData[0]) === 'string';
    });
  }
}
