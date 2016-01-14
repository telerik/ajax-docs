---
title: Telerik.Web.UI.GridDeletedEventArgs
page_title: Telerik.Web.UI.GridDeletedEventArgs
description: Telerik.Web.UI.GridDeletedEventArgs
---

# Telerik.Web.UI.GridDeletedEventArgs

Event arguments passed when Telerik.Web.UI.RadGrid deletes a record.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridDataChangeEventArgs
* Telerik.Web.UI.GridDeletedEventArgs

## Properties

###  AffectedRows `Int32`

Gets the rows affected from the operation that changed the  data.

###  Exception `Exception`

Gets the exception related with the operation. The property value will be
            'null' if no exception occured during the operation.

###  ExceptionHandled `Exception`

Gets or sets a value which if set to 'true' and exception was thrown
            will cause the  to skip throwing the exception
            and will let the user handle it.

###  Item `GridEditableItem`

Gets the  caused the event.

