---
title: Telerik.Web.UI.RadHiddenFieldPageStatePersister
page_title: Telerik.Web.UI.RadHiddenFieldPageStatePersister
description: Telerik.Web.UI.RadHiddenFieldPageStatePersister
---

# Telerik.Web.UI.RadHiddenFieldPageStatePersister

A class based on System.Web.UI.HiddenFieldPageStatePersister that supports viewstate and controlstate manipulation even if they are compressed.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.PageStatePersister
* System.Web.UI.HiddenFieldPageStatePersister
* Telerik.Web.UI.RadHiddenFieldPageStatePersister

## Properties

###  ShouldApplyCompressionOnAjax `Boolean`

If return true ViewState data will be compressed even the
            HTTPCompression is applied.Default is false.

## Methods

###  IsResponseCompressed

Determines whether the response is already compressed.

#### Returns

`System.Boolean` 

###  Load

Loads viewstate and controlstate even if they are previously compressed.

#### Returns

`System.Void` 

###  Save

If needed compresses viewstate and controlstate and saves them in hidden fields. Only state greater than 8 KB is compressed.

#### Returns

`System.Void` 

