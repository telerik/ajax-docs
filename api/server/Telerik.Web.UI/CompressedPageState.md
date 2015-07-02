---
title: Telerik.Web.UI.CompressedPageState
page_title: Telerik.Web.UI.CompressedPageState
description: Telerik.Web.UI.CompressedPageState
---

# Telerik.Web.UI.CompressedPageState

The CompressedPageState class is used by Telerik.Web.UI.RadHiddenFieldPageStateCompression and Telerik.Web.UI.RadSessionPageStateCompression to compress / decompress page state.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.CompressedPageState

## Properties

###  CompressedData `Byte[]`

A property that holds the compressed state.

## Methods

###  Compress

Call this method to compress the state into object of type .

#### Parameters

#### state `System.String`

The state to be compressed as a  object.

#### Returns

`Telerik.Web.UI.CompressedPageState` .

###  Decompress

Call this method to decompress the state into  object.

#### Returns

`System.String` The state data as a  object.

