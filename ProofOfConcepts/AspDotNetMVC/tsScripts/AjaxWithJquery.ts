/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

module CustomerModule {
    export class Customer {
        CustomerID: string;
        CompanyName: string;
        ContactName: string;
        Country: string;

        SelectAll(callback: any) {
            $.getJSON("api/customers", callback);
        }

        Insert(callback: any): number {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName +
                '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';

            $.ajax({
                type: 'POST',
                url: '/api/customers/',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function () { alert('Error');}
            });
            return 0;

        }
    }
}