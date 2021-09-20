import { Mobile } from './../../types/types';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileComponent implements OnInit {

  @Input() mobile: Mobile;
  @Output() selectedMobile = new EventEmitter();

  selectedItem: Mobile;

  isSelected = false;

  @HostBinding('class.mobile')
  defaultClass = true;

  constructor() { }

  ngOnInit(): void {}

  selectMobile(mobile: any) {
    this.selectedMobile.emit(mobile);
  }

}
