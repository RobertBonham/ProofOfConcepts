/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var CustomerModule;
(function (CustomerModule) {
    var Customer = /** @class */ (function () {
        function Customer() {
        }
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
        Customer.prototype.Update = function (callback) {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName +
                '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';
            $.ajax({
                type: 'PUT',
                url: '/api/customers',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function (xhr, err) {
                    alert("readyState: " + xhr.readyState + "\nstatus: " + xhr.status);
                    alert("responseText: " + xhr.responseText);
                }
            });
            return 0;
        };
        Customer.prototype.Delete = function (callback) {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName +
                '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';
            $.ajax({
                type: 'DELETE',
                url: '/api/customers',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function (xhr, err) {
                    alert("readyState: " + xhr.readyState + "\nstatus: " + xhr.status);
                    alert("responseText: " + xhr.responseText);
                }
            });
            return 0;
        };
        Customer.prototype.SelectAll = function (callback) {
            $.getJSON("api/customers", callback);
        };
        return Customer;
    }());
    CustomerModule.Customer = Customer;
})(CustomerModule || (CustomerModule = {}));
//# sourceMappingURL=AjaxWithJquery.js.map