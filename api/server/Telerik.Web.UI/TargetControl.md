---
title: Telerik.Web.UI.TargetControl
page_title: Telerik.Web.UI.TargetControl
description: Telerik.Web.UI.TargetControl
---

# Telerik.Web.UI.TargetControl

Represents the target control to which Telerik.Web.UI.RadSkinManager applies a skin.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TargetControl

## Properties

###  ControlID `String`

Gets or sets a string value representing the server ID of the target control.

###  Skin `String`

Gets or sets a string value representing the skin which will be applied to the target control(s).

###  Enabled `Boolean`

Gets or sets a value indicating whether skinning should be enabled or not.

###  ControlsToApplySkin `String`

Gets or sets a ControlTypeToApplySkin value representing the type of RadControls which will be
            targetted by the Skin setting.

## Methods

###  ShouldApplySkinToControlType

Returns a string value representing the Skin that should be applied to the passed skinnable control.

#### Parameters

#### control `Telerik.Web.ISkinnableControl`

An ISkinnableControl object to which the resolved skin would be applied.

#### Returns

`System.String` A string value representing the resolved Skin.

