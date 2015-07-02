---
title: Telerik.Charting.Styles.Dimensions
page_title: Telerik.Charting.Styles.Dimensions
description: Telerik.Charting.Styles.Dimensions
---

# Telerik.Charting.Styles.Dimensions

Dimensions base class

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject
* Telerik.Charting.Styles.Dimensions

## Properties

###  AutoSize `Boolean`

Gets and sets Auto sizing mode

###  Height `Unit`

Specifies the height property

###  Width `Unit`

Specifies the width property

###  Margins `ChartMargins`

Specifies the margins properties

###  Paddings `ChartPaddings`

Specifies the paddings properties

###  Item `Object`

Gets property value by name.

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  ShouldSerializeHeight

Gets if Height property should be serializable.

#### Returns

`System.Boolean` If Height property should be serializable.

###  ResetHeight

Reset Height to default value.

#### Returns

`System.Void` 

###  ShouldSerializeWidth

Gets if Width property should be serializable.

#### Returns

`System.Boolean` If Width property should be serializable.

###  ResetWidth

Gets if Width property should be serializable.

#### Returns

`System.Void` If Width property should be serializable.

###  Reset

Resets to default values

#### Returns

`System.Void` 

###  EqualsWithoutMarginsPaddings

Checks if objects are equal without margins and paddings.

#### Parameters

#### obj `System.Object`

Object to compare

#### Returns

`System.Boolean` If objects are equal without margins and paddings

###  SetDimensions

Sets the new Width and Height values

#### Parameters

#### width `System.Single`

Width of element

#### height `System.Single`

Height of element

#### Returns

`System.Void` 

###  SetDimensions

Sets the new Width and Height values

#### Parameters

#### width `Telerik.Charting.Styles.Unit`

Width of element

#### height `Telerik.Charting.Styles.Unit`

Height of element

#### Returns

`System.Void` 

###  SetDimensions

Copy dimensions from the object.

#### Parameters

#### source `Telerik.Charting.Styles.Dimensions`

Object tot copy from.

#### Returns

`System.Void` 

###  Equals

Comparing of two objects.

#### Parameters

#### obj `System.Object`

Object to compare with.

#### Returns

`System.Boolean` Whether objects are equal.

###  GetHashCode

Gets hash code.

#### Returns

`System.Int32` Hash code.

###  IsZero

Returns True if dimensions width and height are zero values

#### Returns

`System.Boolean` True if dimensions width and height are zero values

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  Clone

Clone this object.

#### Returns

`System.Object` New instance of Dimensions class with the same fields as this object.

###  TrackViewState

Track ViewState.

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState.

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  SaveViewState

Save data to ViewState.

#### Returns

`System.Object` Saved data

###  Telerik.Charting.IChartingStateManager.LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  Telerik.Charting.IChartingStateManager.SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  Telerik.Charting.IChartingStateManager.TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  SetDirty

Sets the item dirty state

#### Returns

`System.Void` 

###  ToString

ToString() override. Used in the properties grid to avoid object type showing.

#### Returns

`System.String` Empty string

