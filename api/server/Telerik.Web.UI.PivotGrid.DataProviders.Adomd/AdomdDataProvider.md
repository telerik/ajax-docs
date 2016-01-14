---
title: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdDataProvider
page_title: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdDataProvider
description: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdDataProvider
---

# Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdDataProvider

Provides Cube data access and operations using Adomd.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.DataProviders.DataProviderBase : IDataProvider, INotifyPropertyChanged, ISupportInitialize
* Telerik.Web.UI.PivotGrid.Core.Olap.OlapDataProvider
* Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdDataProvider

## Properties

###  AggregateDescriptions `Collection`1`

A list of  that specified how the pivot should be aggregated for the groups.

###  AggregatesLevel `Int32`

###  AggregatesPosition `PivotAxis`

###  ColumnGroupDescriptions `Collection`1`

A list of  that specified how the pivot should be grouped by columns.

###  ConnectionSettings `AdomdConnectionSettings`

Gets or sets the connection settings that are used for establishing connection to the data server.

###  DeferUpdates `Boolean`

Gets or sets a value that indicates if changes to this  will trigger automatic .

###  FieldDescriptionsProvider `IFieldDescriptionProvider`

###  FieldInfos `IFieldInfoData`

###  FilterDescriptions `Collection`1`

A list of  that specified how the pivot items should be filtered.

###  HasPendingChanges `Boolean`

###  Results `IPivotResults`

###  Results `IPivotResults`

###  RowGroupDescriptions `Collection`1`

A list of  that specified how the pivot should be grouped by rows.

###  SetConditionListCapacity `Int32`

###  Settings `IPivotSettings`

###  State `Object`

###  State `Object`

###  Status `DataProviderStatus`

## Methods

###  BeginInit

#### Returns

`System.Void` 

###  BlockUntilRefreshCompletes

#### Returns

`System.Void` 

###  BlockUntilRefreshCompletes

#### Returns

`System.Void` 

###  CreateFieldDescriptionsProvider

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Fields.IFieldDescriptionProvider` 

###  CreateFieldDescriptionsProvider

Creates an instance of  for this .

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Fields.IFieldDescriptionProvider` 

###  DeferRefresh

Enters a defer cycle that you can use to merge changes to the provider and delay automatic refresh.

#### Returns

`System.IDisposable` An  object that you can use to dispose of the calling object.

###  EndInit

#### Returns

`System.Void` 

###  GetAggregateDescriptionForFieldDescription

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IAggregateDescription` 

###  GetAggregateDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IAggregateDescription` 

###  GetAggregateDescriptionForFieldDescriptionCore

Creates and returns an aggregate description suitable for the supplied field description.

#### Parameters

#### description `Telerik.Web.UI.PivotGrid.Core.Fields.IPivotFieldInfo`

A  instance.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IAggregateDescription` An  instance.

###  GetAggregateFunctionsForAggregateDescription

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetAggregateFunctionsForAggregateDescription

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetFilterDescriptionForFieldDescription

#### Returns

`Telerik.Web.UI.PivotGrid.Core.FilterDescription` 

###  GetFilterDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.FilterDescription` 

###  GetFilterDescriptionForFieldDescriptionCore

Returns a filter description suitable for the supplied field description.

#### Parameters

#### description `Telerik.Web.UI.PivotGrid.Core.Fields.IPivotFieldInfo`

A  instance.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.FilterDescription` An  instance.

###  GetGroupDescriptionForFieldDescription

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IGroupDescription` 

###  GetGroupDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IGroupDescription` 

###  GetGroupDescriptionForFieldDescriptionCore

Creates and returns a group description suitable for the supplied field description.

#### Parameters

#### description `Telerik.Web.UI.PivotGrid.Core.Fields.IPivotFieldInfo`

A  instance.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IGroupDescription` An  instance.

###  Invalidate

Notify that changes were applied that would alter the pivot results.
            Queues an automatic .

#### Returns

`System.Void` 

###  OnFieldDescriptionsProviderChanged

Called when FieldDescriptionsProvider is changed.

#### Returns

`System.Void` 

###  OnPrepareDescriptionForField

Raises the  event.

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.PrepareDescriptionForFieldEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnPropertyChanged

Raises PropertyChanged event.

#### Returns

`System.Void` 

###  OnStatusChanged

Raises the  event.

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.DataProviderStatusChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  Refresh

#### Returns

`System.Void` 

###  RefreshOverride

#### Returns

`System.Void` 

###  RefreshOverride

Recreates the .

#### Returns

`System.Void` 

###  SetAggregateFunctionToAggregateDescription

#### Returns

`System.Void` 

###  SetAggregateFunctionToAggregateDescription

#### Returns

`System.Void` 

###  Telerik.Web.UI.PivotGrid.Core.IDataProvider.Refresh

#### Returns

`System.Void` 

