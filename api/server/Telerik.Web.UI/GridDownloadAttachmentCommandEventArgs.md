---
title: Telerik.Web.UI.GridDownloadAttachmentCommandEventArgs
page_title: Telerik.Web.UI.GridDownloadAttachmentCommandEventArgs
description: Telerik.Web.UI.GridDownloadAttachmentCommandEventArgs
---

# Telerik.Web.UI.GridDownloadAttachmentCommandEventArgs

For internal usage only.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* System.Web.UI.WebControls.CommandEventArgs
* Telerik.Web.UI.GridCommandEventArgs : IGridCommandEvent
* Telerik.Web.UI.GridDownloadAttachmentCommandEventArgs

## Properties

###  AttachmentColumn `GridAttachmentColumn`

Gets the attachment column from which the event was fired.

###  AttachmentKeyValues `IDictionary`

Gets the associated attachment key values.

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

###  CommandSource `Object`

Gets the source of the command

###  FileName `String`

Gets or sets the file name which was uploaded.

###  Item `GridItem`

Gets the item containing the command source

## Methods

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

