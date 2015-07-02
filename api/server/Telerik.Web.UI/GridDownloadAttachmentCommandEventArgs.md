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
* Telerik.Web.UI.GridCommandEventArgs
* Telerik.Web.UI.GridDownloadAttachmentCommandEventArgs

## Properties

###  AttachmentColumn `GridAttachmentColumn`

Gets the attachment column from which the event was fired.

###  FileName `String`

Gets or sets the file name which was uploaded.

###  AttachmentKeyValues `IDictionary`

Gets the associated attachment key values.

###  CommandSource `Object`

Gets the source of the command

###  Item `GridItem`

Gets the item containing the command source

###  Canceled `Boolean`

Gets or sets a value, defining whether the command should be canceled.

## Methods

###  ExecuteCommand

#### Returns

`System.Void` 

###  ExecuteCommand

Fires the command stored in 
                property

#### Returns

`System.Void` 

