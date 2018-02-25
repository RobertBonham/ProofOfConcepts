var ModuleNamespace;
(function (ModuleNamespace) {
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    ModuleNamespace.Greeter = Greeter;
})(ModuleNamespace || (ModuleNamespace = {}));
//# sourceMappingURL=ModuleNamespace.js.map