---
title: Telerik.Web.UI.PivotGrid.Core.Fields.LocalFieldDescriptionsProviderBase
page_title: Telerik.Web.UI.PivotGrid.Core.Fields.LocalFieldDescriptionsProviderBase
description: Telerik.Web.UI.PivotGrid.Core.Fields.LocalFieldDescriptionsProviderBase
---

# Telerik.Web.UI.PivotGrid.Core.Fields.LocalFieldDescriptionsProviderBase

A base class for various FieldInfo classes presenting local sources. An implementation of Telerik.Web.UI.PivotGrid.Core.Fields.IFieldDescriptionProvider .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.Fields.FieldDescriptionProviderBase : IFieldDescriptionProvider
* Telerik.Web.UI.PivotGrid.Core.Fields.LocalFieldDescriptionsProviderBase

## Properties

###  CurrentState `Object`

Gets the object which FieldDescriptions are generated.

###  IsBusy `Boolean`

## Methods

###  GenerateDescriptionsData

Retrieves the DescriptionsData for data source.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Fields.IFieldInfoData` DescriptionsData instance.

###  GetDescriptionsDataAsync

#### Returns

`System.Void` 

###  GetDescriptionsDataAsync

#### Returns

`System.Void` 

###  GetFieldDescriptionHierarchy

Gets the field description hierarchy.

#### Parameters

#### fieldInfos `System.Collections.Generic.IEnumerable{Telerik.Web.UI.PivotGrid.Core.Fields.IPivotFieldInfo}`

Collection of  instances.

#### Returns

`Telerik.Web.UI.PivotGrid.Core.Fields.ContainerNode` 

###  OnDescriptionsDataCompleted

#### Returns

`System.Void` 

###  OnDescriptionsDataCompleted

Raise GetDescriptionsDataAsyncCompleted event.

#### Parameters

#### args `Telerik.Web.UI.PivotGrid.Core.Fields.GetDescriptionsDataCompletedEventArgs`

The event args used to invoke the event.

#### Returns

`System.Void` 

