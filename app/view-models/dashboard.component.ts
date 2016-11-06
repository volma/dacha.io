import { Component } from '@angular/core';
import { UserStatusComponent } from './user-status.component';
import { ControlPanelComponent }  from './control-panel.component';
import { CameraPlayerComponent }  from './camera-player.component';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/views/dashboard.component.html',
  directives: [
    UserStatusComponent,
    ControlPanelComponent,
    CameraPlayerComponent
  ]
})
export class DashboardComponent { }
