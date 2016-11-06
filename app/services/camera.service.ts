import {CameraToken} from './camera-token';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class CameraService {

    constructor(@Inject(Http) private http:Http) {
    }
    
    public startStream(name:string, address:string) : CameraToken {
        return new CameraToken(name, address);        
    }

    public configure(quality:number):Promise<any> {
        return this.http
                .get(this.hubUrl + 'config?quality=' + quality)
                .toPromise();
    }


    public stopStream(token:CameraToken) : void {
        this.http.get(this.hubUrl + 'stop/')
    }

    public getFrame() : Promise<any> {
        return this.http
            .get(this.hubUrl + 'pic.jpg')
            .toPromise();
    }

    private hubUrl : string = 'http://raspa:1337/';
}