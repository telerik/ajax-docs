---
title: Telerik.Web.UI.Resource
page_title: Telerik.Web.UI.Resource
description: Telerik.Web.UI.Resource
---

# Telerik.Web.UI.Resource

This Class defines the Resource object in Telerik.Web.UI.RadScheduler control.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Resource : ICustomTypeDescriptor, IEquatable`1

## Properties

###  Key `Object`

Gets or sets a value indicating the resource primary key value.

###  Text `String`

Gets or sets a value indicating the user-friendly description of the resource.

###  Type `String`

Gets or sets a value indicating the resource type.

#### Remarks
The type must be one of the described resource types in
            ResourceTypes collection.

###  Available `Boolean`

Gets or sets a value indicating if the resource is a available.

#### Remarks
Resources marked as unavailable will not be visible
            in the drop-down lists in the advanced form (if applicable).

###  CssClass `String`

Gets or sets the cascading style sheet (CSS) class rendered for appointments that use this resource.

#### Remarks
You can define your own CSS class name or use some of the predefined class names:
            rsCategoryRedrsCategoryBluersCategoryOrangersCategoryGreen

###  Attributes `AttributeCollection`

Gets the collection of arbitrary attributes that do not correspond to properties on the resource.

###  HeaderControls `IList`1`

Gets the header controls.

###  DataItem `Object`

Gets or sets the data item represented by the
            Resource object in the
            RadScheduler control.

#### Remarks
This property is available only during data binding.

## Methods

###  Equals

Determines whether the specified  is equal
            to the current .

#### Parameters

#### obj `System.Object`

The  to compare with the current
            .

#### Returns

`System.Boolean` true if the specified  is equal to the
            current ; otherwise, false.

###  Equals

Equalses the specified res.

#### Parameters

#### res `Telerik.Web.UI.Resource`

The res.

#### Returns

`System.Boolean` 

###  GetHashCode

Serves as a hash function for a particular type.

#### Returns

`System.Int32` A hash code for the current .

