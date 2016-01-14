---
title: Telerik.Web.UI.GridDataChangeEventArgs
page_title: Telerik.Web.UI.GridDataChangeEventArgs
description: Telerik.Web.UI.GridDataChangeEventArgs
---

# Telerik.Web.UI.GridDataChangeEventArgs

A base class holding properties for all event arguments related with changing the Telerik.Web.UI.RadGrid data. Examples: Telerik.Web.UI.GridUpdatedEventHandler , Telerik.Web.UI.GridInsertedEventHandler ,
            Telerik.Web.UI.GridDeletedEventHandler .

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridDataChangeEventArgs

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

