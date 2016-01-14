---
title: Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider
page_title: Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider
description: Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider
---

# Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider

Provides a pivot grouping access to local source such as an IList of instances of user defined classes.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.DataProviders.DataProviderBase : IDataProvider, INotifyPropertyChanged, ISupportInitialize
* Telerik.Web.UI.PivotGrid.Core.LocalDataSourceProvider

## Properties

###  AggregateDescriptions `Collection`1`

Gets a list of  that specify how pivot should aggregate data.

###  AggregatesLevel `Int32`

###  AggregatesPosition `PivotAxis`

###  CalculatedFields `Collection`1`

Gets a list of s that can be used as a calculated aggregate values.

###  ColumnGroupDescriptions `Collection`1`

Gets a list of  that specify how pivot should group columns.

###  Culture `CultureInfo`

Gets or sets the CultureInfo used for grouping and formatting.

###  DeferUpdates `Boolean`

Gets or sets a value that indicates if changes to this  will trigger automatic .

###  FieldDescriptionsProvider `IFieldDescriptionProvider`

###  FieldInfos `IFieldInfoData`

###  FilterDescriptions `Collection`1`

Gets a list of  that specified how pivot should filter items.

###  HasPendingChanges `Boolean`

###  ItemsSource `Object`

The item source for the grouping.

###  Results `IPivotResults`

###  Results `IPivotResults`

###  RowGroupDescriptions `Collection`1`

Gets a list of  that specified how pivot should group rows.

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

