---
title: Telerik.Charting.Styles.StyleAxisItemText
page_title: Telerik.Charting.Styles.StyleAxisItemText
description: Telerik.Charting.Styles.StyleAxisItemText
---

# Telerik.Charting.Styles.StyleAxisItemText

Axis item label text block's appearance

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.Style : ICloneable
* Telerik.Charting.Styles.LayoutStyle
* Telerik.Charting.Styles.StyleTextBlock
* Telerik.Charting.Styles.StyleAxisItemText

## Properties

###  AutoTextWrap `AutoTextWrap`

Gets or sets the automatic text wrapping functionality switch

###  Border `StyleBorder`

Specifies the border style

###  Chart `Chart`

Specifies chart style related to

###  Corners `Corners`

Specifies the corners of background rectangle

###  Dimensions `Dimensions`

Specifies the elements Dimensions property

###  Figure `String`

Specifies the Figure property

###  FillStyle `FillStyle`

Specifies the FillStyle property

###  Item `Object`

Gets the property value by its name

###  Item `Object`

Gets property value by name

###  MaxLength `Int32`

Max number of visible characters. Rest will be truncated
            Full string will be added to parent label's ActiveRegion.Tooltip

###  Position `Position`

Specifies the elements Position property

###  Shadow `ShadowStyle`

Specifies the shadow settings

###  StringFormat `StringFormat`

Gets the string format

###  TextProperties `TextProperties`

Specifies the Text properties

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  Visible `Boolean`

Specifies visibility

## Methods

###  Clone

Creates the object's clone

#### Returns

`System.Object` Clone

###  Clone

Clone this object

#### Returns

`System.Object` Cloned object

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  GetRealBounds

Calculate bounds of element depend on its rotation and previous dimensions

#### Parameters

#### dimensions `Telerik.Charting.Styles.Dimensions`

Dimensions of element

#### rotation `System.Nullable{System.Single}`

Rotation angle

#### Returns

`System.Drawing.RectangleF` 

###  GetStyleProperty

Gets property value of element by name

#### Parameters

#### element `System.Object`

Element to get property

#### propertyName `Telerik.Charting.Styles.StyleProperties`

Property name

#### Returns

`System.Object` Property value of specified element

###  IsVisible

Gets element visibility

#### Parameters

#### element `System.Object`

Element visibility to check

#### Returns

`System.Boolean` Visibility of the specified element

###  LoadViewState

Loads class settings from a view state

#### Parameters

#### savedState `System.Object`

ViewState to load from

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState to load data

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  Reset

Sets the default values for a properties

#### Returns

`System.Void` 

###  Reset

Sets the default values for a properties

#### Returns

`System.Void` 

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  Reset

Reset settings to default

#### Returns

`System.Void` 

###  ResetMaxLength

Sets the default value

#### Returns

`System.Void` 

###  ResetMaxLength

Sets the default value for a MaxLength property

#### Returns

`System.Void` 

###  SaveViewState

Saves class data to a view state

#### Returns

`System.Object` Saved view state

###  SaveViewState

Save data to ViewState

#### Returns

`System.Object` Saved data

###  SaveViewState

Save data to ViewState

#### Returns

`System.Object` Saved data

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  SetDirty

Sets the item dirty state

#### Returns

`System.Void` 

###  SetPixelValues

Set pixels value to width and height properties of element

#### Parameters

#### elem `Telerik.Charting.IOrdering`

Element to calculate pixel values

#### container `Telerik.Charting.IContainer`

Container of element

#### Returns

`System.Void` 

###  SetPixelValues

Set pixels value to width and height properties of element

#### Parameters

#### elem `Telerik.Charting.IOrdering`

Element to calculate pixel values

#### contWidth `System.Single`

Container's width

#### contHeight `System.Single`

Container's height

#### Returns

`System.Void` 

###  SetPixelValues

Set pixels value to width and height properties of element's dimensions

#### Parameters

#### objDims `Telerik.Charting.Styles.Dimensions`

Element's dimensions

#### contWidth `System.Single`

Container's width

#### contHeight `System.Single`

Container's height

#### Returns

`System.Void` 

###  SetStringFormat

Sets the text alignment accordingly to the AlignedPosition property value

#### Returns

`System.Void` 

###  ShouldSerializeMaxLength

Gets should the MaxLength value be serialized

#### Returns

`System.Boolean` True if can be serialized, overwise returns false

###  ShouldSerializeMaxLength

Should the MaxLength property be serialized or not

#### Returns

`System.Boolean` True if should be serialized

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

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

