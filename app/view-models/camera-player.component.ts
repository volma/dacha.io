import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { CameraToken } from '../services/camera-token';

@Component({
    selector: 'camera-player',
    moduleId: module.id,
    templateUrl: '../views/camera-player.component.html'
})
export class CameraPlayerComponent {

    constructor(private cameraService:CameraService) {
    }

    public Name : string = 'Дверь';

    public Address : string = 'http://raspa:1337/';

    public IsPlaying : boolean;

    public Quality : number = 5;

    public url : string;

    public play() : void{
        if(!this.Name || ! this.Address) throw new Error('The camera must have a name a token assigned.');
        this.cameraToken = this.cameraService.startStream(this.Name, this.Address);
        this.cameraService
        .configure(this.Quality)
        .then(_=>{
            this.IsPlaying = this.cameraToken!=null;
            this.startRefreshingImage();
        });
        
    }

    private timer: any;

    private startRefreshingImage() : void {
        this.timer = setInterval(() => {
            this.url = this.Address + 'pic.jpg?' + this.hash++;}, 1000);
    }

    private hash: number =0;

    private stopRefreshingImage(){
        clearInterval(this.timer);
    }

    public stop(){
        let token = this.cameraToken;
        if(!token) throw new Error('The camera is not started');
        this.cameraToken = null;
        this.IsPlaying = this.cameraToken!=null;
        this.cameraService.stopStream(token);     
        this.stopRefreshingImage();   
    }

    private cameraToken : CameraToken;
}
