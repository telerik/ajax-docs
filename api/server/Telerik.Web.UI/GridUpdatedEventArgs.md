---
title: Telerik.Web.UI.GridUpdatedEventArgs
page_title: Telerik.Web.UI.GridUpdatedEventArgs
description: Telerik.Web.UI.GridUpdatedEventArgs
---

# Telerik.Web.UI.GridUpdatedEventArgs

Event arguments passed when Telerik.Web.UI.RadGrid updates a record.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridDataChangeEventArgs
* Telerik.Web.UI.GridUpdatedEventArgs

## Properties

###  KeepInEditMode `Boolean`

Gets or sets a value determining if the  which
            fired the event will stay in edit mode after the postback.

###  SuppressRebind `Boolean`

Gets or sets a value determining if the  method
            will be called after the event.

###  AffectedRows `Int32`

Gets the rows affected from the operation that changed the  data.

###  Exception `Exception`

Gets the exception related with the operation. The property value will be
            'null' if no exception occured during the operation.

###  Item `GridEditableItem`

Gets the  caused the event.

###  ExceptionHandled `Exception`

Gets or sets a value which if set to 'true' and exception was thrown
            will cause the  to skip throwing the exception
            and will let the user handle it.

