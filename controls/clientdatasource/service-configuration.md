---
title: Service Configuration
page_title: Service Configuration - RadClientDataSource
description: Check our Web Forms article about Service Configuration.
slug: clientdatasource/service-configuration
tags: service,configuration
published: True
position: 3
---

# Service Configuration


The **ClientDataSource** control's [schema](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema) serves to provide metadata for the underlying types of objects returned from the service. You can specify property names, their types and other configuration settings:

## Schema

|  Property  |  Description  |
| ------ | ------ |
| **ResponseType** |Gets or sets the data type of the server response. Only JSON and XML are supported. Only XML and JSON(default) are supported. Serialized on the client-side to[this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.type)kendo setting.|
| **DataName** |Gets or sets the name of the collection that holds the data items. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.data) Kendo setting.|
| **AggregateResultsName** |Gets or sets the name of the field from the response which contains the aggregate results. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.aggregates) Kendo setting.|
| **GroupsName** |Gets or sets the name of the field from the server response which contains the groups. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.groups) Kendo setting.|
| **ErrorsName** |Gets or sets the name of the field from the server response which contains server-side errors. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.errors) Kendo setting.|
|TotalName|Gets or sets the name of the field from the server response which contains the total number of data items. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.total) kendo setting|


## Model

The **ClientDataSource Model** actually demonstrates model of the schema which holds the structure of the entity and various other settings.(See **Example 1**)

These are the properties that you can use for configuring the **Model**:

* **ID** - Gets or sets the field serving as ID of the model. Necessary for CRUD operations!

* **Fields** - Represents a collection of **ClientDataSourceModelFields** configuring the settings for each field:

* **FieldName** - Gets or sets the name of the field from the model.

* **OriginalFieldName** - Gets or sets the name of the orginal field from the data.

* **ParseFunctionName** - Gets or sets the name of function which will parse the field value. If not set default parsers will be used.

* **Editable** – Gets or sets field from the Model is editable. Default is true.

* **Nullable** – Gets or sets field from the Model is nullable. Default is true.

* **DefaultValue** – Gets or sets the default value of the field from the model.

* **DataType** – Gets or sets the corresponding client-side type of the field from the model. Currently enumeration:

* Data

* String

* Number

* Boolean

## Create the Service

**MyService.asmx**

C#

````XML
<%@ WebService Language="C#" CodeBehind="~/App_Code/MyService.cs" Class="MyService" %>
````

VB

````XML
<%@ WebService Language="VB" CodeBehind="~/App_Code/MyService.vb" Class="MyService" %>
````


````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Script.Services;
using System.Web.Services;

[System.Web.Script.Services.ScriptService]
public class MyService : System.Web.Services.WebService
{
    [WebMethod]
    [ScriptMethod(UseHttpGet = true, ResponseFormat = ResponseFormat.Json)]
    public List<Order> GetOrders()
    {
        return Enumerable.Range(1, 10).Select(x => new Order()
        {
            OrderID = x,
            OrderDate = DateTime.Now.Date.AddDays(x),
            Freight = x + x * 0.1,
            ShipName = "ShipName " + x,
            ShipCountry = "ShipCountry " + x
        }).ToList();

    }

    public class Order
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        public double Freight { get; set; }
        public string ShipName { get; set; }
        public string ShipCountry { get; set; }

        protected internal Order() { }
    }
}
````
````VB
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web.Script.Services
Imports System.Web.Services

<System.Web.Script.Services.ScriptService>
Public Class MyService
    Inherits System.Web.Services.WebService

    <WebMethod>
    <ScriptMethod(UseHttpGet:=True, ResponseFormat:=ResponseFormat.Json)>
    Public Function GetOrders() As List(Of Order)
        Return Enumerable.Range(1, 10).[Select](Function(x) New Order() With {
            .OrderID = x,
            .OrderDate = DateTime.Now.Date.AddDays(x),
            .Freight = x + x * 0.1,
            .ShipName = "ShipName " & x,
            .ShipCountry = "ShipCountry " & x
        }).ToList()
    End Function

    Public Class Order
        Public Property OrderID As Integer
        Public Property OrderDate As DateTime
        Public Property Freight As Double
        Public Property ShipName As String
        Public Property ShipCountry As String

        Protected Friend Sub New()
        End Sub
    End Class
End Class
````


## Handle the Response

The data coming from the WebService must be an array of objects

````JavaScript
var arrayOfObjects = [
    { Freight: 1.1, OrderDate: "/Date(1624395600000)/", OrderID: 1, ShipName: "ShipName 1", ShipCountry: "ShipCountry 1" },
    { Freight: 2.2, OrderDate: "/Date(1624395600000)/", OrderID: 2, ShipName: "ShipName 2", ShipCountry: "ShipCountry 2" }
    { Freight: 3.3, OrderDate: "/Date(1624395600000)/", OrderID: 3, ShipName: "ShipName 3", ShipCountry: "ShipCountry 3" }
    { Freight: 4.4, OrderDate: "/Date(1624395600000)/", OrderID: 4, ShipName: "ShipName 4", ShipCountry: "ShipCountry 4" }
]
````

### Nested Objects

If the data is nested, you must specify in the `Schema-DataName` which nested property holds the data.

**Example 1**

Response

````JavaScript
var nestedObject = {
    d: [
        { Freight: 1.1, OrderDate: "/Date(1624395600000)/", OrderID: 1, ShipName: "ShipName 1", ShipCountry: "ShipCountry 1" },
        { Freight: 2.2, OrderDate: "/Date(1624395600000)/", OrderID: 2, ShipName: "ShipName 2", ShipCountry: "ShipCountry 2" }
        { Freight: 3.3, OrderDate: "/Date(1624395600000)/", OrderID: 3, ShipName: "ShipName 3", ShipCountry: "ShipCountry 3" }
        { Freight: 4.4, OrderDate: "/Date(1624395600000)/", OrderID: 4, ShipName: "ShipName 4", ShipCountry: "ShipCountry 4" }
    ],
    someprop: {
        someField: "hello world"
    }
}
````

Schema

````XML
<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <Schema DataName="d">
    </Schema>
</telerik:RadClientDataSource>
````

**Example 2**

Response

````JavaScript
var nestedObject = {
    one: {
        two: [
            { Freight: 1.1, OrderDate: "/Date(1624395600000)/", OrderID: 1, ShipName: "ShipName 1", ShipCountry: "ShipCountry 1" },
            { Freight: 2.2, OrderDate: "/Date(1624395600000)/", OrderID: 2, ShipName: "ShipName 2", ShipCountry: "ShipCountry 2" }
            { Freight: 3.3, OrderDate: "/Date(1624395600000)/", OrderID: 3, ShipName: "ShipName 3", ShipCountry: "ShipCountry 3" }
            { Freight: 4.4, OrderDate: "/Date(1624395600000)/", OrderID: 4, ShipName: "ShipName 4", ShipCountry: "ShipCountry 4" }
        ]
    },
    someprop: {
        someField: "hello world"
    }
}
````

**Schema**

````XML
<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <Schema DataName="one.two">
    </Schema>
</telerik:RadClientDataSource>
````

### Custom Data Parsing

Alternatively, you can parse and assign the data manually using the **OnDataParse** client-side event of the RadClientDataSource.

The response is a **nested object**.

````JavaScript
var nestedObject = {
    d: [
        { Freight: 1.1, OrderDate: "/Date(1624395600000)/", OrderID: 1, ShipName: "ShipName 1", ShipCountry: "ShipCountry 1" },
        { Freight: 2.2, OrderDate: "/Date(1624395600000)/", OrderID: 2, ShipName: "ShipName 2", ShipCountry: "ShipCountry 2" }
        { Freight: 3.3, OrderDate: "/Date(1624395600000)/", OrderID: 3, ShipName: "ShipName 3", ShipCountry: "ShipCountry 3" }
        { Freight: 4.4, OrderDate: "/Date(1624395600000)/", OrderID: 4, ShipName: "ShipName 4", ShipCountry: "ShipCountry 4" }
    ]
}
````

Attach the **OnDataParse** event handler of the RadClientDataSource

````XML
<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <ClientEvents OnDataParse="CustomDataParse" />
</telerik:RadClientDataSource>
````

In the CustomDataParse event handler, you can then **point to the array of objects**

````JavaScript
function CustomDataParse(sender, args) {
    var response = args.get_response();

    if (response) {
        args.set_parsedData(parsedData.d);
    }
}
````

The response is a **string**

````JavaScript
var stringData = '"{\"d\":[{\"OrderID\":1,\"OrderDate\":\"/Date(1624482000000)/\",\"Freight\":1.1,\"ShipName\":\"ShipName 1\",\"ShipCountry\":\"ShipCountry 1\"},{\"OrderID\":2,\"OrderDate\":\"/Date(1624568400000)/\",\"Freight\":2.2,\"ShipName\":\"ShipName 2\",\"ShipCountry\":\"ShipCountry 2\"},{\"OrderID\":3,\"OrderDate\":\"/Date(1624654800000)/\",\"Freight\":3.3,\"ShipName\":\"ShipName 3\",\"ShipCountry\":\"ShipCountry 3\"},{\"OrderID\":4,\"OrderDate\":\"/Date(1624741200000)/\",\"Freight\":4.4,\"ShipName\":\"ShipName 4\",\"ShipCountry\":\"ShipCountry 4\"},{\"OrderID\":5,\"OrderDate\":\"/Date(1624827600000)/\",\"Freight\":5.5,\"ShipName\":\"ShipName 5\",\"ShipCountry\":\"ShipCountry 5\"},{\"OrderID\":6,\"OrderDate\":\"/Date(1624914000000)/\",\"Freight\":6.6,\"ShipName\":\"ShipName 6\",\"ShipCountry\":\"ShipCountry 6\"},{\"OrderID\":7,\"OrderDate\":\"/Date(1625000400000)/\",\"Freight\":7.7,\"ShipName\":\"ShipName 7\",\"ShipCountry\":\"ShipCountry 7\"},{\"OrderID\":8,\"OrderDate\":\"/Date(1625086800000)/\",\"Freight\":8.8,\"ShipName\":\"ShipName 8\",\"ShipCountry\":\"ShipCountry 8\"},{\"OrderID\":9,\"OrderDate\":\"/Date(1625173200000)/\",\"Freight\":9.9,\"ShipName\":\"ShipName 9\",\"ShipCountry\":\"ShipCountry 9\"},{\"OrderID\":10,\"OrderDate\":\"/Date(1625259600000)/\",\"Freight\":11,\"ShipName\":\"ShipName 10\",\"ShipCountry\":\"ShipCountry 10\"}]}"';
````

In the CustomDataParse event handler, you can then access the response and **parse the string**

````JavaScript
function CustomDataParse(sender, args) {
    var response = args.get_response();

    if (response) {
        var parsedData = JSON.parse(response);
        args.set_parsedData(parsedData);
    }
}
````
 
