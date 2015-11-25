---
title: Telerik.Charting.Styles.StyleGridLine
page_title: Telerik.Charting.Styles.StyleGridLine
description: Telerik.Charting.Styles.StyleGridLine
---

# Telerik.Charting.Styles.StyleGridLine

Grid line specific style

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.StyleBorder : ICloneable
* Telerik.Charting.Styles.LineStyle
* Telerik.Charting.Styles.StyleGridLine

## Properties

###  HideWithAxis `Boolean`

Should grid lines be hidden with axis or not

#### Remarks
Default value is true

###  Width `Single`

Gets or sets the width of the grid line.

###  PenStyle `DashStyle`

Specifies the pen style used for grid lines' drawing.

###  Color `Color`

Specifies the color of the grid lines.

###  EndCap `LineCap`

Specifies the end cap property

###  StartCap `LineCap`

Specifies the start cap property

###  Item `Object`

Gets property value by name

###  Color `Color`

Specifies the line color property

###  PenStyle `DashStyle`

Specifies the pen style property

###  Width `Single`

Specifies the width property

###  Visible `Boolean`

Visibility

###  Item `Object`

Gets property value by name

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  ShouldRender

Checks whether grid line be rendered or not

#### Parameters

#### axisVisible `System.Boolean`

#### Returns

`System.Boolean` 

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  Equals

Compare two objects

#### Parameters

#### obj `System.Object`

Object tot compare

#### Returns

`System.Boolean` Result of comparing

###  GetHashCode

Gets hash code

#### Returns

`System.Int32` Hash code

###  Clone

Clone this object

#### Returns

`System.Object` Object with the same fields as this one

###  IsVisible

Determines whether this instance is visible.

#### Returns

`System.Boolean` true if this instance is visible; otherwise, false.

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  Equals

Compare two objects

#### Parameters

#### obj `System.Object`

Object tot compare

#### Returns

`System.Boolean` Result of comparing

###  GetHashCode

Gets hash code

#### Returns

`System.Int32` Hash code

###  Clone

Clone this object

#### Returns

`System.Object` Object with the same fields as this one

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

