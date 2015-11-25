---
title: Telerik.Web.UI.RadSkinManager
page_title: Telerik.Web.UI.RadSkinManager
description: Telerik.Web.UI.RadSkinManager
---

# Telerik.Web.UI.RadSkinManager

A control used to define a global skin for the RadControls on the page as well as granular settings for particular controls.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadSkinManager : IControl, ISkinnableControl

## Properties

###  ShowChooser `Boolean`

Gets or sets a value indicating whether Skin chooser should be rendered in run-time.

###  Enabled `Boolean`

Gets or sets a value indicating whether skinning should be enabled or not.

###  Skin `String`

"Specifies the skin that will be used by the control"

###  PersistenceKey `String`

Specifies the persistance key that will be used by the control.

###  PersistenceMode `RadSkinManagerPersistenceMode`

Specifies the skin manager persistance mode.

###  TargetControls `TargetControlCollection`

Gets a collection of TargetControl objects that allows for specifying the objects for which tooltips will be created on the client-side.

#### Remarks
Use the TargetControls collection to programmatically control which objects should be tooltipified on the client-side.

###  Skins `String`

Gets a collection of all skins references available in the control.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

## Methods

###  ApplySkin

Applies a provided skin to a target control.

#### Parameters

#### target `System.Web.UI.Control`

The RadControl which will be skinned.

#### skin `System.String`

The string name of the skin.

#### Returns

`System.Void` 

###  ApplySkin

Applies the current skin on a target control.

#### Parameters

#### target `System.Web.UI.Control`

#### Returns

`System.Void` 

###  GetCurrent

A static method used to return a reference to the RadSkinManager on the current page.
            Usually used when the control needs to be used from an inner level of the page (user control,
            content page, etc.)

#### Parameters

#### page `System.Web.UI.Page`

The current Page object.

#### Returns

`Telerik.Web.UI.RadSkinManager` A reference to the currently avaialble RadSkinManager.

###  GetSkinChooser

Gets a reference to the  control representing
            the skin chooser.

#### Returns

`Telerik.Web.UI.RadComboBox` The RadComboBox which shows the options for skins to apply.

###  Telerik.Web.ISkinnableControl.GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

