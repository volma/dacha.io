"use strict";
var core_1 = require('@angular/core');
///
///Base class for inheriting view models from
///
var NotifyableObject = (function () {
    function NotifyableObject() {
    }
    NotifyableObject.prototype.NotifyPropertyChanged = function () {
        this.EnsureChangeDetectorExists();
        this.cd.markForCheck();
    };
    NotifyableObject.prototype.EnsureChangeDetectorExists = function () {
        if (!this.cd) {
            var injector = core_1.ReflectiveInjector.resolveAndCreate([core_1.ChangeDetectorRef]);
            this.cd = injector.get(core_1.ChangeDetectorRef);
        }
    };
    return NotifyableObject;
}());
exports.NotifyableObject = NotifyableObject;
//# sourceMappingURL=notifyable-object.js.map