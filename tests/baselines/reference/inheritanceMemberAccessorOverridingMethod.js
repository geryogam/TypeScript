//// [tests/cases/compiler/inheritanceMemberAccessorOverridingMethod.ts] ////

//// [inheritanceMemberAccessorOverridingMethod.ts]
class a {
    x() {
        return "20";
    }
}

class b extends a {
    get x() {
        return () => "20";
    }
    set x(aValue) {
        
    }
}

//// [inheritanceMemberAccessorOverridingMethod.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = /** @class */ (function () {
    function a() {
    }
    a.prototype.x = function () {
        return "20";
    };
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(b.prototype, "x", {
        get: function () {
            return function () { return "20"; };
        },
        set: function (aValue) {
        },
        enumerable: false,
        configurable: true
    });
    return b;
}(a));
