---
title: Telerik.Web.UI.GridInsertedEventArgs
page_title: Telerik.Web.UI.GridInsertedEventArgs
description: Telerik.Web.UI.GridInsertedEventArgs
---

# Telerik.Web.UI.GridInsertedEventArgs

Event arguments passed when Telerik.Web.UI.RadGrid inserts a new record.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridDataChangeEventArgs
* Telerik.Web.UI.GridInsertedEventArgs

## Properties

###  KeepInInsertMode `Boolean`

Gets or sets a value determining if the  which
            fired the event will stay in insert mode after the postback.

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

