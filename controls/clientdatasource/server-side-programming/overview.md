---
title: Overview
page_title: Server-side Programming Overview | RadClientDataSource for ASP.NET AJAX
description: Overview
slug: clientdatasource/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



Following is a table of the most important properties you should be aware of when working with **RadClientDataSource**.

## General properties


| Property | Description |
| ------ | ------ |
| **AllowBatchOperations** |Gets or sets a value indicating whether batch operations in the **RadClientDataSource** are enabled. Default is **false** . Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-batch) kendo setting.|
| **AllowPaging** |Gets or sets value indicating whether paging is enabled or not. This is unique to the **RadClientDataSource** so it has not kendo counterpart!|
| **EnableServerAggregates** |Gets or sets value indicating whether server-side aggregates are enabled. Default is **false** .Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverAggregates) kendo setting.|
| **EnableServerFiltering** |Gets or sets value indicating whether server-side filtering is enabled. Default is **false** .Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverAggregates) kendo setting.|
| **EnableServerSorting** |Gets or sets value indicating whether server-side sorting is enabled. Default is **false** .Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverSorting) kendo setting.|
| **EnableServerGrouping** |Gets or sets value indicating whether server-side grouping is enabled. Default is **false** .Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverGrouping) kendo setting.|
| **EnableServerPaging** |Gets or sets value indicating whether server-side paging is enabled. Default is **false** .Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverPaging) kendo setting.|
| **PageSize** |Gets or sets the maximum number of items that would appear on a page. Default is 10.Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-pageSize) kendo setting.|

## DataSource settings

This represents the client-side "[transport](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport)" setting of the **kendoDataSource** and should allow the same type of server configuration to be serialized on theclient in the form of transport settings for the **kendoDataSource**.

**WebServiceDataSourceSettings** – holds all the transport settings for update/delete/insert operations. The following table represents	the properties that **WebServiceDataSourceSettings** exposes.


| Property | Description |
| ------ | ------ |
| **BaseUrl** |Serves to hold the common, repeating part of the Url of the CRUD operations which is then combined with their separate Url property.|
| **BaseUrl** |Serves to hold the common, repeating part of the Url of the CRUD operations which is then combined with their separate Url property.|
| **ServiceType** |Gets or sets a value indicating the type of service the **DataSource** is binding to. Enumeration with four values: **Default** , **GeoJSON** , **OData** and **XML** . Serialized on theclient-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-type) kendo setting. Currently only OData v.2 is supported!|
| **Select** |Corresponds to the [read](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.read) setting in the **kendoDataSource** |
| **Delete** |Corresponds to the [destroy](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.destroy) setting in the **kendoDataSource** |
| **Update** |Corresponds to the [update](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.update) setting in the **kendoDataSource** |
| **Insert** |Corresponds to the [create](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create) setting in the **kendoDataSource** |

All of the above CRUD operations share the following common settings


| Property | Description |
| ------ | ------ |
| **Url** |Holds the **URL** at which the request for the operation will be sent. If the **BaseUrl** propertyis specified – **Url** will hold only the distinct part specific to the operation. Corresponds to kendo [url](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.url) setting in the **kendoDataSource.** 

````ASPNET
<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <DataSource>
        <WebServiceDataSourceSettings BaseUrl="http://myservice/">
            <Select Url="update" DataType="JSONP" />
        </WebServiceDataSourceSettings>
    </DataSource>
</telerik:RadClientDataSource>
````

|
| **DataType** |Gets or sets the data type that is expected from the data service. Currently enumeration of three options: **XML** , **JSON(default)** , **JSONP** . Corresponds to kendo [dataType](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.dataType) setting in the **kendoDataSource.** |
| **EnableCaching** |Enables or disables client-side data caching in **RadClientDataSource** . Caching is disabled by default.Corresponds to kendo [cache](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.cache) setting in the **kendoDataSource.** |
| **ContentType** |Gets or sets the content type that is expected from the data service. String value such as *application/json* .Corresponds to kendo [contentType](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.contentType) setting in the **kendoDataSource.** |
| **RequestType** |Gets or sets the HTTP method that will be used to send the data to the service. The default is **GET** . Other possibleverbs are **POST** , **PUT** , **DELETE** . Corresponds to kendo [type](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.type) setting in the **kendoDataSource.** |

## Schema

This represents the client-side "[schema](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema)" setting of the **kendoDataSource**. It serves to provide metadata for the underlying types of objects returned from theservice. User can specify property names, their types and other configuration. The following table represents the properties that exposes.


| Property | Description |
| ------ | ------ |
| **ResponseType** |Gets or sets the data type of the server response. Only **XML** and **JSON** (default) are supported.Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.type) kendo setting.|
| **DataName** |Gets or sets the name of the collection that holds the data items. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.data) kendo setting.|
| **AggregateResultsName** |Gets or sets the name of the field from the response which contains the aggregate results. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.aggregates) kendo setting.|
| **GroupsName** |Gets or sets the name of the field from the server response which contains the groups. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.groups) kendo setting.|
| **ErrorsName** |Gets or sets the name of the field from the server response which contains server-side errors. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.errors) kendo setting.|
| **TotalName** |Gets or sets the name of the field from the server response which contains the total number of data items. Serialized on the client-side to [this](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.total) kendo setting.|
| **Model** |Gets or sets the model of the schema which holds the structure of the entity and various other settings.|
| **Model-ID** |Gets or sets the field serving as ID of the model. Necessary for CRUD operations.|
| **Model-Fields** |A collection of **ClientDataSourceModelFields** representing the settings for each field.Kendo equivalent [here](https://docs.telerik.com/kendo-ui/api/framework/model) .Each **ClientDataSourceModelField** exposes the following properties.

*  **FieldName** - Gets or sets the name of the field from the model.

*  **OriginalFieldName** – Gets or sets the name of the orginal field from the data.

*  **ParseFunctionName** – Gets or sets the name of function which will parse the field value. If not set default parsers will be used.

*  **Editable** – Gets or sets field from the Model is editable. Default is **true** .

*  **Nullable** – Gets or sets field from the Model is nullable. Default is **true** .

*  **DefaultValue** – Gets or sets the default value of the field from the model.

*  **DataType** – Gets or sets the corresponding client-side type of the field from the model. Currently enumeration ( **ClientDataSourceModelFieldType** ) of 4 types: ( **String** , **Number** , **Boolean** , **Data** ).|

## Expressions and aggregates

**RadClientDataSource** provides various API for controlling the different expressions that can be applied to the data such	as **filter**, **sort**, **group expressions** and **aggregates**.

**FilterExpression**

FilterExpression - Hierarchical recursive structure that allows defining of nested complex filter expressions.	Consists of two types derived from a common abstract base class:


| Property | Description |
| ------ | ------ |
| **ClientDataSourceFilterEntry** |The main class that defines one filter entry with the following properties: **ClientDataSourceFilterEntry** and **ClientDataSourceFilterExpression** . The table below describes their properties.

*  **FieldName** - Gets or sets the field name for the operation. Kendo counterpart [here](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.field).

*  **Operator** - Gets or sets the filtering operator. Lengthy enumeration containing the following values: **EqualTo** , **NotEqualTo** , **GreaterThan** , **GreaterThanOrEqualTo** , **LessThan** , **LessThenOrEqualTo** , **Contains** , **EndsWith** , **StartsWith** . Kendo counterpart [here](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.operator).

*  **Value** - Property containing the value on which to filter the data. The value is of type **string** .|
| **ClientDataSourceFilterExpression** |Special type of object that allows recursive nesting of the filter expressions. Has the following properties:

*  **LogicOperator** - Gets or sets the filter logic, **AND** or **OR** . Default is **AND** . Kendo counterpart [here](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.logic)

*  **Filters** - A collection that can hold both **ClientDataSourceFilterEntry** and **ClientDataSourceFilterExpression** types. Allows unlimited nesting of filters. And the kendo counterpart [here](https://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.filters)|

````ASPNET
<telerik:RadClientDataSource ID="RadClientDataSource2" runat="server">
    <FilterExpression>
        <telerik:ClientDataSourceFilterExpression LogicOperator="Or">
            <telerik:ClientDataSourceFilterEntry FieldName="A" Operator="EqualTo" Value="1" />
            <telerik:ClientDataSourceFilterEntry FieldName="B" Operator="EqualTo" Value="2" />
        </telerik:ClientDataSourceFilterExpression>
        <telerik:ClientDataSourceFilterEntry FieldName="C" Operator="EqualTo" Value="3" />
    </FilterExpression>
</telerik:RadClientDataSource>
````


````C#
var filter1 = new ClientDataSourceFilterExpression{ LogicOperator= ClientDataSourceFilterLogicOperator.Or};
filter1.Filters.Add(new ClientDataSourceFilterEntry { FieldName = "A", Operator = ClientDataSourceFilterOperator.EqualTo, Value = "1" });
filter1.Filters.Add(new ClientDataSourceFilterEntry { FieldName = "B", Operator = ClientDataSourceFilterOperator.EqualTo, Value = "2" });
RadClientDataSource1.FilterExpression.Filters.Add(filter1);
RadClientDataSource1.FilterExpression.Filters.Add(new ClientDataSourceFilterEntry { FieldName = "C", Operator = ClientDataSourceFilterOperator.EqualTo, Value = "3" });
````
````VB.NET
Dim filter1 = New ClientDataSourceFilterExpression() With { _
Key .LogicOperator = ClientDataSourceFilterLogicOperator.[Or] _
}
filter1.Filters.Add(New ClientDataSourceFilterEntry() With { _
    Key .FieldName = "A", _
    Key .[Operator] = ClientDataSourceFilterOperator.EqualTo, _
    Key .Value = "1" _
})
filter1.Filters.Add(New ClientDataSourceFilterEntry() With { _
    Key .FieldName = "B", _
    Key .[Operator] = ClientDataSourceFilterOperator.EqualTo, _
    Key .Value = "2" _
})
RadClientDataSource1.FilterExpression.Filters.Add(filter1)
RadClientDataSource1.FilterExpression.Filters.Add(New ClientDataSourceFilterEntry() With { _
    Key .FieldName = "C", _
    Key .[Operator] = ClientDataSourceFilterOperator.EqualTo, _
    Key .Value = "3" _
})
````


>note The filter value on the server is always **string** (if the value property is not string it cannot be set through markup and thewhole filter expressions setting in the markup becomes useless). Consider the following filter expression:
>


````ASPNET
<FilterExpression>
    <telerik:ClientDataSourceFilterEntry FieldName="Discontinued" Operator="EqualTo" Value="true" />
</FilterExpression>
````



By default this will filter the field **Discontinued** by the value "**true**" as string, but if the field is of other type (e.g. boolean) this will cause a client-side error from the **kendoDataSource**. To filter by other types different than **string** please specify the type of the field in the **Schema** settings of the control. This will make the **RadClientSideDataSource** try to parse the value as the specified type! (currently the parsing is done only client-side) Here is what settings are needed in order to filter the **Discontinued** field by **Boolean** value instead of string.

````ASPNET
<Schema>
    <Model>
        <telerik:ClientDataSourceModelField FieldName="Discontinued" DataType="Boolean" />
    </Model>
</Schema>
````



The above is valid only for server-side settings. When you apply filter expressions through the client-side API no such issues exist because you set the **value** property to the same javascript value that you wish to filter on, and there’s no need to specify types in this case.

**SortExpressions**

SortExpressions - Gets a collection holding the **ClientDataSourceSortExpression** expressions of the	data source. **ClientDataSourceSortExpression** is the main object of the collection defining one sort expression. Each group expressionprovides the following properties.

* **FieldName** - Gets or sets the field name for the sort operation.

* **SortOrder** - Gets or sets the sort order. Enumeration of three values: **Asc**, **Desc** and **None**. Default is **None** and the setting is not serialized tothe client.

````ASPNET
	        <SortExpressions>
	            <telerik:ClientDataSourceSortExpression FieldName="ProductID" SortOrder="Asc"  />
	        </SortExpressions>
````



**Aggregates**

Aggregates – Gets a collection holding aggregates settings applied to the whole data of the dataSource.	**ClientDataSourceAggregate** is the main object of the collection defining on aggregate. Each aggregate setting provides the following properties.

* **Field** - Gets or sets the field name of the aggregate.

* **Aggregate** - Gets or sets the aggregate function. An enumeration of the following values: **Sum**, **Min**, **Max**, **Count**, **Average**. Default is **Sum**.

````ASPNET
	        <Aggregates>
	            <telerik:ClientDataSourceAggregate Aggregate="Sum" Field="UnitPrice" />
	        </Aggregates>
````



**GroupExpressions**

GroupExpressions - Get a collection holding the **ClientDataSourceGroupExpression** expressions of thedata source. **ClientDataSourceGroupExpression** is the main object of the collection defining one group expression. Each sort expressionprovides the following properties.

* **FieldName** - Gets or sets the field name for the group operation.

* **SortOrder** - Gets or sets the sort order. Enumeration of three values: **Asc**, **Desc** and **None**. Default is **None** and the setting is not serialized to theclient.

* **Aggregates** - Get a collection of the aggregates settings applied to the current group.

````ASPNET
<GroupExpressions>
    <telerik:ClientDataSourceGroupExpression FieldName="ProductName" SortOrder="Asc">
    </telerik:ClientDataSourceGroupExpression>
</GroupExpressions>
````


