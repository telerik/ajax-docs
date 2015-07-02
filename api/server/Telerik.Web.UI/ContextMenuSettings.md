---
title: Telerik.Web.UI.ContextMenuSettings
page_title: Telerik.Web.UI.ContextMenuSettings
description: Telerik.Web.UI.ContextMenuSettings
---

# Telerik.Web.UI.ContextMenuSettings

This Class defines the ContextMenuSettings object that inherits ObjectWithState.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.ContextMenuSettings

## Properties

###  EnableDefault `Boolean`

Gets or sets a value indicating whether to use the integrated context menu.

###  Skin `String`

Gets or sets the skin name for the context menu.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

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

