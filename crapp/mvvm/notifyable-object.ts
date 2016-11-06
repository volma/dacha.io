import { ReflectiveInjector, ChangeDetectorRef} from '@angular/core';

///
///Base class for inheriting view models from
///
export abstract class NotifyableObject {

    protected NotifyPropertyChanged() : void {
        this.EnsureChangeDetectorExists();
        this.cd.markForCheck();
    }

    private EnsureChangeDetectorExists() : void {
        if(!this.cd){
            let injector = ReflectiveInjector.resolveAndCreate([ChangeDetectorRef]);
            this.cd = injector.get(ChangeDetectorRef);
        }
    }

    private cd: ChangeDetectorRef;
    
}