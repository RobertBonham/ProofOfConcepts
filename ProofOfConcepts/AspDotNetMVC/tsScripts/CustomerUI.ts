/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="ajaxwithjquery.ts" />

module CusterUIModule {
    export class CustomerUI {
        LoadCustomers(data) {
            $("#customerTable").find("tr:gt(1)").remove();
            $.each(data, function (key, val) {
                var tableRow = '<tr>' +
                    '<td>' + val.CustomerID + '</td>' +
                    '<td><input type="text" value="' + val.CompanyName + '"/></td>' +
                    '<td><input type="text" value="' + val.ContactName + '"/></td>' +
                    '<td><input type="text" value="' + val.Country + '"/></td>' +
                    '<td><input type="button" name="btnUpdate" value="Update" /> <input type="button" name="btnDelete" value="Delete" /></td>' +
                    '</tr>';
                $('#customerTable').append(tableRow);
            });

            $("input[name='btnInsert']").click(function () {
                var customerId = $("#txtCustomerId").val();
                var companyName = $("#txtCompanyName").val();
                var contactName = $("#txtContactName").val();
                var country = $("#txtCountry").val();
                var customer = new CustomerModule.Customer();
                customer.CustomerID = customerId;
                customer.CompanyName = companyName;
                customer.ContactName = contactName;
                customer.Country = country;
                customer.Insert(function () {
                    $("#txtCustomerId").val('');
                    $("#txtCompanyName").val('');
                    $("#txtContactName").val('');
                    $("#txtCountry").val('');
                    alert('Customer Added !');
                });
            });
    }
    }
}