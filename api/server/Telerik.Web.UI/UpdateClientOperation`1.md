---
title: Telerik.Web.UI.UpdateClientOperation`1
page_title: Telerik.Web.UI.UpdateClientOperation`1
description: Telerik.Web.UI.UpdateClientOperation`1
---

# Telerik.Web.UI.UpdateClientOperation`1

Used in case of update client operations.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ClientOperation`1
* Telerik.Web.UI.UpdateClientOperation`1

## Properties

###  Item `T`

Returns the item (, ,
            , , , )
            associated with this client operation.

#### Remarks
When the  of the operation is  the Item property will
            return null (Nothing in VB.NET) in case the items of the control have been cleared.

###  PropertyName `String`

Gets the name of the property which has been changed on the client side.

###  Type `ClientOperationType`

Gets the type of the client operation

#### Remarks
If the Type property is equal to  the  type will be used.

