---
title: Telerik.Web.UI.ToolTipUpdateEventArgs
page_title: Telerik.Web.UI.ToolTipUpdateEventArgs
description: Telerik.Web.UI.ToolTipUpdateEventArgs
---

# Telerik.Web.UI.ToolTipUpdateEventArgs

The event arguments object that is passed to the OnAjaxUpdate event handler. Holds information about the target control and its associated tooltip.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.ToolTipUpdateEventArgs

## Properties

###  TargetControlID `String`

The ClientID of the target control for which the tooltip is currently being shown.

###  Value `String`

An optional parameter allowing arbitrary information to be passed from the client to the server to help determine what information to load in the tooltip in the AJAX request.

###  UpdatePanel `UpdatePanel`

Provides a reference to the UpdatePanel of RadToolTipManager. Allows content and controls to be set and displayed in the tooltip on the client.

