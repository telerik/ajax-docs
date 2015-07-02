---
title: Telerik.Web.UI.RadFilterableContainerLocator
page_title: Telerik.Web.UI.RadFilterableContainerLocator
description: Telerik.Web.UI.RadFilterableContainerLocator
---

# Telerik.Web.UI.RadFilterableContainerLocator

Represents a helper used to get a reference to the current filterable container.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterableContainerLocator

## Methods

###  RetrieveFilterableContainer

Search for IRadFilterableContainer control.

#### Parameters

#### control `System.Web.UI.Control`

instance of control from which search will start

#### controlId `System.String`

id of the IRadFilterableContainer container control

#### controlsToEscape `System.Collections.Generic.List{System.String}`

List of controls ID's not to be included in search result

#### Returns

`Telerik.Web.UI.IRadFilterableContainer` IRadFilterableContainer istance if found, otherwise null

###  RetrieveDataSourceControl

Search for IDataSource control.

#### Parameters

#### control `System.Web.UI.Control`

instance of control from which search will start

#### controlId `System.String`

id of the IDataSource control

#### controlsToEscape `System.Collections.Generic.List{System.String}`

List of controls ID's not to be included in search result

#### Returns

`System.Web.UI.IDataSource` IDataSource istance if found, otherwise null

