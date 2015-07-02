---
title: Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider
page_title: Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider
description: Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider
---

# Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider

Provides a pivot grouping access to local source such as an IList of instances of user defined classes.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.DataProviders.DataProviderBase
* Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider

## Properties

###  Culture `CultureInfo`

Gets or sets the CultureInfo used for grouping and formatting.

###  FilterDescriptions `Collection`1`

Gets a list of  that specified how pivot should filter items.

###  RowGroupDescriptions `Collection`1`

Gets a list of  that specified how pivot should group rows.

###  ColumnGroupDescriptions `Collection`1`

Gets a list of  that specify how pivot should group columns.

###  AggregateDescriptions `Collection`1`

Gets a list of  that specify how pivot should aggregate data.

###  CalculatedFields `Collection`1`

Gets a list of s that can be used as a calculated aggregate values.

###  Results `IPivotResults`

###  State `Object`

###  ItemsSource `Object`

The item source for the grouping.

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

###  BlockUntilRefreshCompletes

#### Returns

`System.Void` 

###  SetAggregateFunctionToAggregateDescription

#### Returns

`System.Void` 

###  GetAggregateFunctionsForAggregateDescription

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  RefreshOverride

#### Returns

`System.Void` 

###  CreateFieldDescriptionsProvider

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Fields.IFieldDescriptionProvider` 

###  GetFilterDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.FilterDescription` 

###  GetAggregateDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IAggregateDescription` 

###  GetGroupDescriptionForFieldDescriptionCore

#### Returns

`Telerik.Web.UI.PivotGrid.Core.IGroupDescription` 

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

