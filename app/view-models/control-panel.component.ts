import { Component } from '@angular/core';

@Component({
  selector: 'control-panel',
  templateUrl: 'app/views/control-panel.component.html'
})
export class ControlPanelComponent { 
    controls: string[];

    constructor() {
        this.controls = ['ff','ggg'];
    }
}