---
title: Telerik.Web.UI.RotatorControlButtonsConfiguration
page_title: Telerik.Web.UI.RotatorControlButtonsConfiguration
description: Telerik.Web.UI.RotatorControlButtonsConfiguration
---

# Telerik.Web.UI.RotatorControlButtonsConfiguration

Encapsulates the properties used for the RadRotator control buttons management.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RotatorControlButtonsConfiguration

## Properties

###  OnClientButtonClick `String`

The name of the javascript function called when the user clicks one of the control buttons.

#### Remarks
This event is raised only when the rotator is in Buttons mode!

###  OnClientButtonOut `String`

The name of the javascript function called when the mouse leaves one of the control buttons.

#### Remarks
This event is raised only when the rotator is in ButtonsOver mode!

###  OnClientButtonOver `String`

The name of the javascript function called when the mouse is over one of the control buttons.

#### Remarks
This event is raised only when the rotator is in ButtonsOver mode!

## Methods

###  getClientID

this function tries to get the client id of a control in the same naming container

#### Parameters

#### p `System.Web.UI.Control`

the control id

#### namingContainer `System.String`

the control to search in

#### Returns

`System.String` the client id if the control is found, or the input parameter if the control does not exist

