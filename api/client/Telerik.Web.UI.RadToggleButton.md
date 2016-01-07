---
title: Telerik.Web.UI.RadToggleButton
page_title: Client-side API Reference
description: Telerik.Web.UI.RadToggleButton
slug: Telerik.Web.UI.RadToggleButton
---

# Telerik.Web.UI.RadToggleButton : Telerik.Web.UI.ButtonBase.PostBackButtonBase

## Inheritance Hierarchy

* [Telerik.Web.UI.ButtonBase.PostBackButtonBase]({%slug Telerik.Web.UI.ButtonBase.PostBackButtonBase%})
* *[Telerik.Web.UI.RadToggleButton]({%slug Telerik.Web.UI.RadToggleButton%})*

## Methods

### get_toggleStates

Gets a collection of RadButtonToggleState objects that belong to the RadToggleButton control.

#### Parameters

#### Returns

`Array` A collection of RadButtonToggleState objects that belong to the RadToggleButton control.

### get_selectedToggleState

Gets the currently selected ToggleState of the RadToggleButton control when used as a custom toggle button.

#### Parameters

#### Returns

`Telerik.Web.UI.RadButtonToggleState` The currently selected ToggleState of the RadToggleButton control when used as a custom toggle button.

### get_selectedToggleStateIndex

Gets the index of the currently selected ToggleState of the RadToggleButton control, when used as a custom toggle button.

#### Parameters

#### Returns

`Number` The index of the currently selected ToggleState of the RadToggleButton control

### set_selectedToggleStateIndex

Sets the index of the currently selected ToggleState of the RadToggleButton control, when used as a custom toggle button.

#### Parameters

##### value `Number`

The index of the currently selected ToggleState of the RadToggleButton control

#### Returns

`None` 

### get_iconElement

Gets a reference to the HTML element that holds the icon.

#### Parameters

#### Returns

`Element` A reference to the HTML element that holds the icon.

## Events

### toggleStateChanging 

The toggleStateChanging event is fired before the SelectedToggleState and the SelectedToggleStateIndex properties of the RadToggleButton are changed.

#### Event Data

#####  sender `Telerik.Web.UI.RadToggleButton`

The instance of the RadToggleButton raised the event.

##### args `Telerik.Web.UI.ButtonToggleStateCancelEventArgs`

The event arguments.

### toggleStateChanged 

The toggleStateChanged event is fired after the SelectedToggleState and the SelectedToggleStateIndex properties of the RadToggleButton are changed. 

#### Event Data

#####  sender `Telerik.Web.UI.RadToggleButton`

The instance of the RadToggleButton raised the event.

##### args `Telerik.Web.UI.ButtonToggleStateEventArgs`

The event arguments.