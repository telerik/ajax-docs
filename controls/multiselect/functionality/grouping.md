---
title: Grouping
page_title: Grouping | RadMultiSelect for ASP.NET AJAX Documentation
description: Grouping
slug: multiselect/functionality/grouping
tags: Grouping
published: True
position: 4
---


# Grouping

**RadMultiSelect** can group its data source based on the `GroupExpression` settings in the `WebServiceClientDataSource` tag. The `ClientDataSourceGroupExpression.FieldName` property holds the name of the field from the dataSource which will be used for the gruping.

The popup will show a header with the value of the field for each group, and a static header for the current group just below the column headers, so the user can see which group they are scrolling through regardless of the number of items in the control.

![multiselect-grouping](../images/multiselect-grouping.jpg)


## Configuration

You can customize the headers through their [templates]({%slug multiselect/functionality/templates%}).

Grouping requires binding the control to a web service, and grouping is performed on the client over the returned flat data.



>caption Example 1: Grouping in RadMultiSelect

````ASP.NET
        <telerik:RadMultiSelect runat="server" Width="300px" ID="RadMultiSelect1"
            DataTextField="ContactName"
            DataValueField="CustomerID"
            DropDownHeight="400"
            Placeholder="Select customers...">
            <WebServiceClientDataSource>
                <WebServiceSettings ServiceType="OData">
                    <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers" />
                </WebServiceSettings>
                <GroupExpressions>
                    <telerik:ClientDataSourceGroupExpression FieldName="Country" />
                </GroupExpressions>
            </WebServiceClientDataSource>
        </telerik:RadMultiSelect>
````

Web service binding creates a [Kendo DataSource](https://docs.telerik.com/kendo-ui/framework/datasource/overview) and applies the grouping settings to it automatically. 


## See Also

* [Live Demo - Grouping](http://demos.telerik.com/aspnet-ajax/multiselect/grouping/defaultcs.aspx)

* [Templates]({%slug multiselect/functionality/templates%})

* [Kendo Data Source Grouping Configuration](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/configuration/group)

