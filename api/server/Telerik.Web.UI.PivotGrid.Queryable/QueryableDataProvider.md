---
title: Telerik.Web.UI.PivotGrid.Queryable.QueryableDataProvider
page_title: Telerik.Web.UI.PivotGrid.Queryable.QueryableDataProvider
description: Telerik.Web.UI.PivotGrid.Queryable.QueryableDataProvider
---

# Telerik.Web.UI.PivotGrid.Queryable.QueryableDataProvider

Represents an Telerik.Web.UI.PivotGrid.Core.IDataProvider that works with IQueryable sources.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.DataProviders.DataProviderBase : IDataProvider, INotifyPropertyChanged, ISupportInitialize
* Telerik.Web.UI.PivotGrid.Queryable.QueryableDataProvider

## Properties

###  FilterDescriptions `Collection`1`

A list of  that specified how the pivot items should be filtered.

###  RowGroupDescriptions `Collection`1`

A list of  that specified how the pivot should be grouped by rows.

###  ColumnGroupDescriptions `Collection`1`

A list of  that specified how the pivot should be grouped by columns.

###  AggregateDescriptions `Collection`1`

A list of  that specified how the pivot should be aggregated for the groups.

###  CalculatedFields `Collection`1`

Gets a list of s that can be used as a calculated aggregate values.

###  Source `IQueryable`

Gets or sets the IQueryable data source.

###  Results `IPivotResults`

###  State `Object`

###  FieldInfos `IFieldInfoData`

###  DeferUpdates `Boolean`

Gets or sets a value that indicates if changes to this  will trigger automatic .

###  Status `DataProviderStatus`

###  AggregatesPosition `PivotAxis`

###  AggregatesLevel `Int32`

###  FieldDescriptionsProvider `IFieldDescriptionProvider`

###  HasPendingChanges `Boolean`

###  Results `IPivotResults`

###  Settings `IPivotSettings`

###  State `Object`

## Methods

###  RefreshOverride

#### Returns

`System.Void` 

###  BlockUntilRefreshCompletes

#### Returns

`System.Void` 

###  CreateFieldDescriptionsProvider

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Fields.IFieldDescriptionProvider` 

###  GetAggregateDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IAggregateDescription` 

###  GetGroupDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IGroupDescription` 

###  GetFilterDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.FilterDescription` 

###  GetAggregateFunctionsForAggregateDescription

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  SetAggregateFunctionToAggregateDescription

#### Returns

`System.Void` 

###  Telerik.Web.UI.PivotGrid.Core.IDataProvider.Refresh

#### Returns

`System.Void` 

###  BeginInit

#### Returns

`System.Void` 

###  EndInit

#### Returns

`System.Void` 

###  Refresh

#### Returns

`System.Void` 

###  BlockUntilRefreshCompletes

#### Returns

`System.Void` 

###  DeferRefresh

Enters a defer cycle that you can use to merge changes to the provider and delay automatic refresh.

#### Returns

`System.IDisposable` An  object that you can use to dispose of the calling object.

###  Invalidate

Notify that changes were applied that would alter the pivot results.
            Queues an automatic .

#### Returns

`System.Void` 

###  RefreshOverride

Recreates the .

#### Returns

`System.Void` 

###  OnStatusChanged

Raises the  event.

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.DataProviderStatusChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnPrepareDescriptionForField

Raises the  event.

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.PrepareDescriptionForFieldEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnFieldDescriptionsProviderChanged

Called when FieldDescriptionsProvider is changed.

#### Returns

`System.Void` 

###  CreateFieldDescriptionsProvider

Creates an instance of  for this .

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Fields.IFieldDescriptionProvider` 

###  OnPropertyChanged

Raises PropertyChanged event.

#### Returns

`System.Void` 

###  GetAggregateDescriptionForFieldDescriptionCore

Creates and returns an aggregate description suitable for the supplied field description.

#### Parameters

#### description `Telerik.Web.UI.PivotGrid.Core.Fields.IPivotFieldInfo`

A  instance.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IAggregateDescription` An  instance.

###  GetGroupDescriptionForFieldDescriptionCore

Creates and returns a group description suitable for the supplied field description.

#### Parameters

#### description `Telerik.Web.UI.PivotGrid.Core.Fields.IPivotFieldInfo`

A  instance.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IGroupDescription` An  instance.

###  GetFilterDescriptionForFieldDescriptionCore

Returns a filter description suitable for the supplied field description.

#### Parameters

#### description `Telerik.Web.UI.PivotGrid.Core.Fields.IPivotFieldInfo`

A  instance.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.FilterDescription` An  instance.

###  GetAggregateDescriptionForFieldDescription

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IAggregateDescription` 

###  GetGroupDescriptionForFieldDescription

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IGroupDescription` 

###  GetFilterDescriptionForFieldDescription

#### Returns

`Telerik.Web.UI.PivotGrid.Core.FilterDescription` 

###  GetAggregateFunctionsForAggregateDescription

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  SetAggregateFunctionToAggregateDescription

#### Returns

`System.Void` 

