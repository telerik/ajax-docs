---
title: Telerik.Web.UI.ToolTipTargetControl
page_title: Telerik.Web.UI.ToolTipTargetControl
description: Telerik.Web.UI.ToolTipTargetControl
---

# Telerik.Web.UI.ToolTipTargetControl

An object of this type can be added as a TargetControl of the RadToolTipManager.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.ToolTipTargetControl

## Properties

###  IsClientID `Boolean`

A flag that indicates what type of ID (server/client) was provided.

#### Remarks
Must be set according to the value of the  property.
            Must be set to true if ClientID has been passed, otherwise to false.

###  TargetControlID `String`

The target control's ID.

#### Remarks
According to the ID of the targeted control that you pass the  property must be set.
            If it is the server ID set it to false, if it is the ClientID - set it to true. In the case of dynamically created controls their ClientID is available only
            after they have been added to their container. In INaming container scenarios (e.g. grids) it is better to use the ClientID to avoid duplicates.

###  Value `String`

An arbitrary value that can be used to provide additional information when loading the content.

#### Remarks
It is passed as a field in the  object
            that is passed as event arguments to the OnAjaxUpdate event handler.

