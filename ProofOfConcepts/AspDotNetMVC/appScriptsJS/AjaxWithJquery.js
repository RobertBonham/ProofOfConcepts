/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var CustomerModule;
(function (CustomerModule) {
    var Customer = /** @class */ (function () {
        function Customer() {
        }
        Customer.prototype.SelectAll = function (callback) {
            $.getJSON("api/customers", callback);
        };
        Customer.prototype.Insert = function (callback) {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName +
                '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';
            $.ajax({
                type: 'POST',
                url: '/api/customers/',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function () { alert('Error'); }
            });
            return 0;
        };
        return Customer;
    }());
    CustomerModule.Customer = Customer;
})(CustomerModule || (CustomerModule = {}));
//# sourceMappingURL=AjaxWithJquery.js.map