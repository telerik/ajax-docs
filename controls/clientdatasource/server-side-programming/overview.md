---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: clientdatasource/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



Following is a table of the most important properties you should be aware of when working with __RadClientDataSource__.

## General properties


| Property | Description |
| ------ | ------ |
| __AllowBatchOperations__ |Gets or sets a value indicating whether batch operations in the __RadClientDataSource__ are enabled. Default is __false__ . Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-batch)kendo setting.|
| __AllowPaging__ |Gets or sets value indicating whether paging is enabled or not. This is unique to the __RadClientDataSource__ so it has not kendo counterpart!|
| __EnableServerAggregates__ |Gets or sets value indicating whether server-side aggregates are enabled. Default is __false__ .Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverAggregates)kendo setting.|
| __EnableServerFiltering__ |Gets or sets value indicating whether server-side filtering is enabled. Default is __false__ .Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverAggregates)kendo setting.|
| __EnableServerSorting__ |Gets or sets value indicating whether server-side sorting is enabled. Default is __false__ .Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverSorting)kendo setting.|
| __EnableServerGrouping__ |Gets or sets value indicating whether server-side grouping is enabled. Default is __false__ .Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverGrouping)kendo setting.|
| __EnableServerPaging__ |Gets or sets value indicating whether server-side paging is enabled. Default is __false__ .Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-serverPaging)kendo setting.|
| __PageSize__ |Gets or sets the maximum number of items that would appear on a page. Default is 10.Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-pageSize)kendo setting.|

## DataSource settings

This represents the client-side "[transport](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport)	" setting of the __kendoDataSource__ and should allow the same type of server configuration to be serialized on theclient in the form of transport settings for the __kendoDataSource__.

__WebServiceDataSourceSettings__ – holds all the transport settings for update/delete/insert operations. The following table represents	the properties that __WebServiceDataSourceSettings__ exposes.


| Property | Description |
| ------ | ------ |
| __BaseUrl__ |Serves to hold the common, repeating part of the Url of the CRUD operations which is then combined with their separate Url property.|
| __BaseUrl__ |Serves to hold the common, repeating part of the Url of the CRUD operations which is then combined with their separate Url property.|
| __ServiceType__ |Gets or sets a value indicating the type of service the __DataSource__ is binding to. Enumeration with four values: __Default__ , __GeoJSON__ , __OData__ and __XML__ . Serialized on theclient-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-type)kendo setting. Currently only OData v.2 is supported!|
| __Select__ |Corresponds to the[read](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.read)setting in the __kendoDataSource__ |
| __Delete__ |Corresponds to the[destroy](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.destroy)setting in the __kendoDataSource__ |
| __Update__ |Corresponds to the[update](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.update)setting in the __kendoDataSource__ |
| __Insert__ |Corresponds to the[create](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create)setting in the __kendoDataSource__ |

All of the above CRUD operations share the following common settings


| Property | Description |
| ------ | ------ |
| __Url__ |Holds the __URL__ at which the request for the operation will be sent. If the __BaseUrl__ propertyis specified – __Url__ will hold only the distinct part specific to the operation. Corresponds to kendo[url](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.url)setting in the __kendoDataSource.__ 

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
| __DataType__ |Gets or sets the data type that is expected from the data service. Currently enumeration of three options: __XML__ , __JSON(default)__ , __JSONP__ . Corresponds to kendo[dataType](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.dataType)setting in the __kendoDataSource.__ |
| __EnableCaching__ |Enables or disables client-side data caching in __RadClientDataSource__ . Caching is disabled by default.Corresponds to kendo[cache](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.cache)setting in the __kendoDataSource.__ |
| __ContentType__ |Gets or sets the content type that is expected from the data service. String value such as *application/json* .Corresponds to kendo[contentType](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.contentType)setting in the __kendoDataSource.__ |
| __RequestType__ |Gets or sets the HTTP method that will be used to send the data to the service. The default is __GET__ . Other possibleverbs are __POST__ , __PUT__ , __DELETE__ . Corresponds to kendo[type](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-transport.create.type)setting in the __kendoDataSource.__ |

## Schema

This represents the client-side "[schema](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema)" setting of the __kendoDataSource__. It serves to provide metadata for the underlying types of objects returned from theservice. User can specify property names, their types and other configuration. The following table represents the properties that exposes.


| Property | Description |
| ------ | ------ |
| __ResponseType__ |Gets or sets the data type of the server response. Only __XML__ and __JSON__ (default) are supported.Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.type)kendo setting.|
| __DataName__ |Gets or sets the name of the collection that holds the data items. Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.data)kendo setting.|
| __AggregateResultsName__ |Gets or sets the name of the field from the response which contains the aggregate results. Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.aggregates)kendo setting.|
| __GroupsName__ |Gets or sets the name of the field from the server response which contains the groups. Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.groups)kendo setting.|
| __ErrorsName__ |Gets or sets the name of the field from the server response which contains server-side errors. Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.errors)kendo setting.|
| __TotalName__ |Gets or sets the name of the field from the server response which contains the total number of data items. Serialized on the client-side to[this](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.total)kendo setting.|
| __Model__ |Gets or sets the model of the schema which holds the structure of the entity and various other settings.|
| __Model-ID__ |Gets or sets the field serving as ID of the model. Necessary for CRUD operations.|
| __Model-Fields__ |A collection of __ClientDataSourceModelFields__ representing the settings for each field.Kendo equivalent[here](http://docs.telerik.com/kendo-ui/api/framework/model).Each __ClientDataSourceModelField__ exposes the following properties.

*  __FieldName__ - Gets or sets the name of the field from the model.

*  __OriginalFieldName__ – Gets or sets the name of the orginal field from the data.

*  __ParseFunctionName__ – Gets or sets the name of function which will parse the field value. If not set default parsers will be used.

*  __Editable__ – Gets or sets field from the Model is editable. Default is __true__ .

*  __Nullable__ – Gets or sets field from the Model is nullable. Default is __true__ .

*  __DefaultValue__ – Gets or sets the default value of the field from the model.

*  __DataType__ – Gets or sets the corresponding client-side type of the field from the model. Currently enumeration ( __ClientDataSourceModelFieldType__ ) of 4 types: ( __String__ , __Number__ , __Boolean__ , __Data__ ).|

## Expressions and aggregates

__RadClientDataSource__ provides various API for controlling the different expressions that can be applied to the data such	as __filter__, __sort__, __group expressions__ and __aggregates__.

__FilterExpression__

FilterExpression - Hierarchical recursive structure that allows defining of nested complex filter expressions.	Consists of two types derived from a common abstract base class:


| Property | Description |
| ------ | ------ |
| __ClientDataSourceFilterEntry__ |The main class that defines one filter entry with the following properties: __ClientDataSourceFilterEntry__ and __ClientDataSourceFilterExpression__ . The table below describes their properties.

*  __FieldName__ - Gets or sets the field name for the operation. Kendo counterpart[here](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.field).

*  __Operator__ - Gets or sets the filtering operator. Lengthy enumeration containing the following values: __EqualTo__ , __NotEqualTo__ , __GreaterThan__ , __GreaterThanOrEqualTo__ , __LessThan__ , __LessThenOrEqualTo__ , __Contains__ , __EndsWith__ , __StartsWith__ . Kendo counterpart[here](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.operator).

*  __Value__ - Property containing the value on which to filter the data. The value is of type __string__ .|
| __ClientDataSourceFilterExpression__ |Special type of object that allows recursive nesting of the filter expressions. Has the following properties:

*  __LogicOperator__ - Gets or sets the filter logic, __AND__ or __OR__ . Default is __AND__ . Kendo counterpart[here](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.logic)

*  __Filters__ - A collection that can hold both __ClientDataSourceFilterEntry__ and __ClientDataSourceFilterExpression__ types. Allows unlimited nesting of filters. And the kendo counterpart[here](http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-filter.filters)|

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



>tabbedCode

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


>end

>note The filter value on the server is always __string__ (if the value property is not string it cannot be set through markup and thewhole filter expressions setting in the markup becomes useless). Consider the following filter expression:
>


````ASPNET
	        <FilterExpression>
	            <telerik:ClientDataSourceFilterEntry FieldName="Discontinued" Operator="EqualTo" Value="true" />
	        </FilterExpression>
````



By default this will filter the field __Discontinued__ by the value "__true__" as string, but if the field is of other type (e.g. boolean) this will cause a client-side error from the __kendoDataSource__. To filter by other types different than __string__ please specify the type of the field in the __Schema__ settings of the control. This will make the __RadClientSideDataSource__ try to parse the value as the specified type! (currently the parsing is done only client-side) Here is what settings are needed in order to filter the __Discontinued__ field by __Boolean__ value instead of string.

````ASPNET
	        <Schema>
	            <Model>
	                <telerik:ClientDataSourceModelField FieldName="Discontinued" DataType="Boolean" />
	            </Model>
	        </Schema>
````



The above is valid only for server-side settings. When you apply filter expressions through the client-side API no such issues exist because you set the __value__ property to the same javascript value that you wish to filter on, and there’s no need to specify types in this case.

__SortExpressions__

SortExpressions - Gets a collection holding the __ClientDataSourceSortExpression__ expressions of the	data source. __ClientDataSourceSortExpression__ is the main object of the collection defining one sort expression. Each group expressionprovides the following properties.

* __FieldName__ - Gets or sets the field name for the sort operation.

* __SortOrder__ - Gets or sets the sort order. Enumeration of three values: __Asc__,__Desc__ and __None__. Default is __None__ and the setting is not serialized tothe client.

````ASPNET
	        <SortExpressions>
	            <telerik:ClientDataSourceSortExpression FieldName="ProductID" SortOrder="Asc"  />
	        </SortExpressions>
````



__Aggregates__

Aggregates – Gets a collection holding aggregates settings applied to the whole data of the dataSource.	__ClientDataSourceAggregate__ is the main object of the collection defining on aggregate. Each aggregate setting	provides the following properties.

* __Field__ - Gets or sets the field name of the aggregate.

* __Aggregate__ - Gets or sets the aggregate function. An enumeration of the following values: __Sum__,__Min__, __Max__, __Count__, __Average__. Default is__Sum__.

````ASPNET
	        <Aggregates>
	            <telerik:ClientDataSourceAggregate Aggregate="Sum" Field="UnitPrice" />
	        </Aggregates>
````



__GroupExpressions__

GroupExpressions - Get a collection holding the __ClientDataSourceGroupExpression__ expressions of thedata source. __ClientDataSourceGroupExpression__ is the main object of the collection defining one group expression. Each sort expressionprovides the following properties.

* __FieldName__ - Gets or sets the field name for the group operation.

* __SortOrder__ - Gets or sets the sort order. Enumeration of three values: __Asc__, __Desc__ and __None__. Default is __None__ and the setting is not serialized to theclient.

* __Aggregates__ - Get a collection of the aggregates settings applied to the current group.

````ASPNET
	        <GroupExpressions>
	            <telerik:ClientDataSourceGroupExpression FieldName="ProductName" SortOrder="Asc">
	            </telerik:ClientDataSourceGroupExpression>
	        </GroupExpressions>
````


