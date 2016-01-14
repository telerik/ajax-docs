---
title: Telerik.Charting.Styles.TextProperties
page_title: Telerik.Charting.Styles.TextProperties
description: Telerik.Charting.Styles.TextProperties
---

# Telerik.Charting.Styles.TextProperties

Base text appearance settings class (Font, Color)

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.TextProperties : ICloneable

## Properties

###  Color `Color`

Specifies the text color property

###  Font `Font`

Specifies the text font properties

###  Item `Object`

Gets the property by its name

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

## Methods

###  Clone

Creates an object clone

#### Returns

`System.Object` object

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  Equals

Determines whether the specified System.Object is equal to the current System.Object.

#### Parameters

#### obj `System.Object`

The System.Object to compare with the current System.Object

#### Returns

`System.Boolean` true if the specified System.Object is equal to the current System.Object;
                otherwise, false.

###  GetHashCode

Serves as a hash function for a TextProperties type.

#### Returns

`System.Int32` A hash code for the current class instance

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  Reset

Sets the default values

#### Returns

`System.Void` 

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  SetDirty

Sets the item dirty state

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

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

