---
title: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdFieldDescriptionProvider
page_title: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdFieldDescriptionProvider
description: Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdFieldDescriptionProvider
---

# Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdFieldDescriptionProvider

An Telerik.Web.UI.PivotGrid.Core.Fields.IFieldDescriptionProvider implementation for Adomd sources.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.Fields.FieldDescriptionProviderBase : IFieldDescriptionProvider
* Telerik.Web.UI.PivotGrid.Core.Olap.OlapFieldDescriptionsProviderBase
* Telerik.Web.UI.PivotGrid.DataProviders.Adomd.AdomdFieldDescriptionProvider

## Properties

###  CurrentRequestInfo `DescriptionsDataRequestInfo`

Gets the object for which FieldDescriptions are generated.

###  Data `IFieldInfoData`

Gets the loaded data.

###  IsBusy `Boolean`

## Methods

###  GetLoader

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Olap.OlapMetadataLoader` 

###  GetDescriptionsDataAsync

#### Returns

`System.Void` 

###  GetDescriptionsDataAsync

#### Returns

`System.Void` 

###  OnDescriptionsDataCompleted

Raise GetDescriptionsDataAsyncCompleted event.

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.Fields.GetDescriptionsDataCompletedEventArgs`

The event args used to invoke the event.

#### Returns

`System.Void` 

