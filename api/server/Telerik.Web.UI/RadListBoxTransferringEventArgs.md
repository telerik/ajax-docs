---
title: Telerik.Web.UI.RadListBoxTransferringEventArgs
page_title: Telerik.Web.UI.RadListBoxTransferringEventArgs
description: Telerik.Web.UI.RadListBoxTransferringEventArgs
---

# Telerik.Web.UI.RadListBoxTransferringEventArgs

Provides data for the E:Telerik.Web.UI.RadListBox.Transferring event of the Telerik.Web.UI.RadListBox control.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.RadListBoxTransferringEventArgs

## Properties

###  SourceListBox `RadListBox`

Gets or sets the source listbox of the transfer operation.

###  DestinationListBox `RadListBox`

Gets or sets the destination listbox of the transfer operation.

###  Cancel `Boolean`

Gets or sets a value indicating whether the  event is canceled.

#### Remarks
If the  is canceled the item will not be transferred.

###  Items `IList`1`

Gets or sets the referenced items in the  control when the event is raised.

