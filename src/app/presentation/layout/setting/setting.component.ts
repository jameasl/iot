import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SettingService} from '../../../service/inf/setting.service';
import { TextValue } from 'src/app/models/setting.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();



  constructor(
  ) { }

  ngOnInit(): void {
   
  }
  onCloseSetting(){
    this.closeEvent.emit();
  }

}
