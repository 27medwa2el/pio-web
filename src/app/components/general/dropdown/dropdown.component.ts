import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatOptionModule,FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownSelectorComponent implements OnInit, OnChanges {
  @Input() config: any = {};
  @Output() selectionChanged = new EventEmitter<any>();
  dropDownList: any[] = [];
  selectedValue: any = null;
  valueField: string;
  labelField: string;
  placeholder: string;
  heading: string;

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.config) {
      this.dropDownList = this.config.dropDownList || [];
      this.selectedValue = this.config.selectedValue ?? -1;
      this.valueField = this.config.valueField || 'value';
      this.labelField = this.config.labelField || 'label';
      this.placeholder = this.config.placeholder || 'placeholder';
      this.heading = this.config.heading;
    }
  }

  onSelectionChange() {
    this.selectionChanged.emit(this.selectedValue);
  }
}