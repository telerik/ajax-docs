---
title: Telerik.Charting.Styles.FillSettings
page_title: Telerik.Charting.Styles.FillSettings
description: Telerik.Charting.Styles.FillSettings
---

# Telerik.Charting.Styles.FillSettings

Fill settings

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.FillSettings : ICloneable

## Properties

###  GradientMode `GradientFillStyle`

Specifies the Linear gradient fill mode

###  GradientAngle `Single`

Specifies the Linear gradient fill angle

###  ComplexGradient `ColorBlend`

Specifies the blend colors for Gradient fill

###  HatchStyle `HatchStyle`

Specifies the style of hatch fill type

###  ImageDrawMode `ImageDrawMode`

Specifies how image should be drawing

###  BackgroundImage `String`

Specifies the URL of Image file

###  ImageAlign `ImageAlignModes`

Specifies the Image align mode

###  ImageFlip `ImageTileModes`

Specifies the image flip settings

###  Item `Object`

Gets property value by name

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  Reset

Reset to default values

#### Returns

`System.Void` 

###  GetImage

Get background image of chart

#### Parameters

#### chart `Telerik.Charting.Chart`

Chart to get image

#### Returns

`System.Drawing.Image` Image from resources

###  Clone

Clone this object

#### Returns

`System.Object` New instance of FillSettings class with the same fields as this object.

###  Equals

Comparing two objects.

#### Parameters

#### obj `System.Object`

Object for comparing

#### Returns

`System.Boolean` Whether objects are equal or not

###  GetHashCode

Gets hash code

#### Returns

`System.Int32` Hash code

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

