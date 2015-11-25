---
title: Telerik.Charting.Styles.EmptyValue
page_title: Telerik.Charting.Styles.EmptyValue
description: Telerik.Charting.Styles.EmptyValue
---

# Telerik.Charting.Styles.EmptyValue

Empty value

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.EmptyValue : ICloneable

## Properties

###  Mode `EmtyValuesMode`

Gets and sets Empty values representation mode

###  Line `StyleEmptyLineSeries`

Gets and sets Empty line style

###  PointMark `StyleMarkerEmptyValue`

Gets and sets Empty value point mark

###  FillStyle `FillStyle`

Specifies an empty bar fill style

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  Reset

Reset all settings to default.

#### Returns

`System.Void` 

###  Clone

Clone this object.

#### Returns

`System.Object` New instance of the object EmptyValue with the same fields as this object has.

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

`System.Object` Saved data.

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

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

