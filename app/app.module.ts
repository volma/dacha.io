import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent }  from './view-models/dashboard.component';
import { UserStatusComponent }  from './view-models/user-status.component';
import { ControlPanelComponent }  from './view-models/control-panel.component';
import { CameraService }  from './services/camera.service';
import { CrappModule} from '../crapp/crapp.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CrappModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent,
    UserStatusComponent,
    ControlPanelComponent
  ],
  providers: [CameraService],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
