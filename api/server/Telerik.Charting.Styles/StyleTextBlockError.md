---
title: Telerik.Charting.Styles.StyleTextBlockError
page_title: Telerik.Charting.Styles.StyleTextBlockError
description: Telerik.Charting.Styles.StyleTextBlockError
---

# Telerik.Charting.Styles.StyleTextBlockError

Error text block's appearance

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.Style : ICloneable
* Telerik.Charting.Styles.LayoutStyle
* Telerik.Charting.Styles.StyleTextBlock
* Telerik.Charting.Styles.StyleTextBlockError

## Properties

###  MaxLength `Int32`

Max number of visible characters. Rest will be truncated
            Full string will be added to parent label's ActiveRegion.Tooltip

###  Corners `Corners`

Specifies the corners of background rectangle

###  FillStyle `FillStyle`

Specifies the FillStyle property

###  Figure `String`

Specifies the Figure property

###  TextProperties `TextProperties`

Specifies the Text properties

###  Item `Object`

Gets the property value by its name

###  AutoTextWrap `AutoTextWrap`

Gets or sets the automatic text wrapping functionality switch

###  StringFormat `StringFormat`

Gets the string format

###  Position `Position`

Specifies the elements Position property

###  Dimensions `Dimensions`

Specifies the elements Dimensions property

###  Border `StyleBorder`

Specifies the border style

###  Shadow `ShadowStyle`

Specifies the shadow settings

###  Visible `Boolean`

Specifies visibility

###  Item `Object`

Gets property value by name

###  Chart `Chart`

Specifies chart style related to

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  Reset

Sets the default values for a properties

#### Returns

`System.Void` 

###  ShouldSerializeMaxLength

Should the MaxLength property be serialized or not

#### Returns

`System.Boolean` True if should be serialized

###  ResetMaxLength

Sets the default value for a MaxLength property

#### Returns

`System.Void` 

###  SetStringFormat

Sets the text alignment accordingly to the AlignedPosition property value

#### Returns

`System.Void` 

###  Reset

Sets the default values for a properties

#### Returns

`System.Void` 

###  Clone

Creates the object's clone

#### Returns

`System.Object` Clone

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

###  LoadViewState

Loads class settings from a view state

#### Parameters

#### savedState `System.Object`

ViewState to load from

#### Returns

`System.Void` 

###  SaveViewState

Saves class data to a view state

#### Returns

`System.Object` Saved view state

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  SaveViewState

Save data to ViewState

#### Returns

`System.Object` Saved data

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  IsVisible

Gets element visibility

#### Parameters

#### element `System.Object`

Element visibility to check

#### Returns

`System.Boolean` Visibility of the specified element

###  Reset

Reset settings to default

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

###  GetRealBounds

Calculate bounds of element depend on its rotation and previous dimensions

#### Parameters

#### dimensions `Telerik.Charting.Styles.Dimensions`

Dimensions of element

#### rotation `System.Nullable{System.Single}`

Rotation angle

#### Returns

`System.Drawing.RectangleF` 

###  Clone

Clone this object

#### Returns

`System.Object` Cloned object

###  GetStyleProperty

Gets property value of element by name

#### Parameters

#### element `System.Object`

Element to get property

#### propertyName `Telerik.Charting.Styles.StyleProperties`

Property name

#### Returns

`System.Object` Property value of specified element

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState to load data

#### Returns

`System.Void` 

###  SaveViewState

Save data to ViewState

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

