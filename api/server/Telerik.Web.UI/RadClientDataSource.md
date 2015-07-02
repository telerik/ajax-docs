---
title: Telerik.Web.UI.RadClientDataSource
page_title: Telerik.Web.UI.RadClientDataSource
description: Telerik.Web.UI.RadClientDataSource
---

# Telerik.Web.UI.RadClientDataSource

This partial class defines RadClientDataSource control - a flexible and extensible server-side component 
            for retrieving and providing data on the client under various forms
            and from different source such web and rest service, page method, other datasource controls and other means

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadClientDataSource

## Properties

###  ScriptManager `ScriptManager`

###  Events `EventHandlerList`

###  ClientStateFieldID `String`

###  ClientEvents `EventHandlerList`

Gets a reference to  class.

###  RegisterWithScriptManager `ScriptManager`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  EnableServerPaging `Boolean`

Gets or sets value indicating whether server-side paging is enabled

###  EnableServerFiltering `Boolean`

Gets or sets value indicating whether server-side filtering is enabled

###  EnableServerSorting `Boolean`

Gets or sets value indicating whether server-side sorting is enabled

###  EnableServerGrouping `Boolean`

Gets or sets value indicating whether server-side grouping is enabled

###  EnableServerAggregates `Boolean`

Gets or sets value indicating whether server-side aggregates are enabled

###  PageSize `Int32`

Gets or sets the maximum number of items that would appear on a page.
             Default value is 10.

###  CurrentPageIndex `Int32`

Gets or sets a value indicating the index of the currente page

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the paging in  is enabled
            The default is false.

###  AllowBatchOperations `Boolean`

Gets or sets a value indicating whether batch operations in the  are enabled
            The default is false.

###  AutoSync `Boolean`

Gets or sets a value indicating whether the  would automatically save any changed data items by calling the sync method. By default changes are not automatically saved.
            The default is false.

###  FilterExpression `ClientDataSourceFilterExpression`

Gets a collection of filter expressions for

###  SortExpressions `ClientDataSourceSortExpressionCollection`

Gets a collection of sort expressions for

###  GroupExpressions `ClientDataSourceGroupExpressionCollection`

Gets a collection of group expressions for

###  Aggregates `ClientDataSourceAggregatesCollection`

Gets a collection of aggregates expressions for

###  DataSource `ClientDataSourceSettings`

Contains settings about the different types of data sources used in .

###  Schema `ClientDataSourceSchema`

Contains settings about the schema and model of the data used in .

## Methods

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  GetScriptDescriptors

Gets a collection of script descriptors that represent ECMAScript (JavaScript)
            client components.

#### Returns

`System.Collections.Generic.IEnumerable`1` An  collection of 
            objects.

###  GetScriptReferences

Gets a collection of  objects
            that define script resources that the control requires.

#### Returns

`System.Collections.Generic.IEnumerable`1` An  collection of 
            objects.

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Boolean` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a chagned event

#### Returns

`System.Void` 

