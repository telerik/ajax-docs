---
title: Telerik.Web.UI.ClientOperation`1
page_title: Telerik.Web.UI.ClientOperation`1
description: Telerik.Web.UI.ClientOperation`1
---

# Telerik.Web.UI.ClientOperation`1

Represents an client-side operation (e.g. adding an item, removing an item, updating an item etc.)

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ClientOperation`1

## Properties

###  Item `T`

Returns the item (, ,
            , , , )
            associated with this client operation.

#### Remarks
When the  of the operation is  the Item property will
            return null (Nothing in VB.NET) in case the items of the control have been cleared.

###  Type `ClientOperationType`

Gets the type of the client operation

#### Remarks
If the Type property is equal to  the  type will be used.

