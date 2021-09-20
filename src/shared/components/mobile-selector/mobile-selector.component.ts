import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { MobileSelectorService } from 'src/shared/services/mobile-selector.service';
import { Mobile } from 'src/shared/types/types';

@Component({
  selector: 'mobile-selector',
  templateUrl: './mobile-selector.component.html',
  styleUrls: ['./mobile-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileSelectorComponent implements OnInit {

  @HostBinding('class.mobile-selector')
  defaultClass = true;

  mobiles: Mobile[];

  constructor(
    private mobileSelectorService: MobileSelectorService
  ) { }

  ngOnInit(): void {
    this.mobileSelectorService.getMobileList()
      .subscribe(data => {
        this.mobiles = data;
    });
  }


  selectedMobile(mobile: any) {
    console.log(mobile);
  }

}
