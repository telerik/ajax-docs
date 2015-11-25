---
title: Telerik.Web.UI.AsyncUpload.FilterFormatter
page_title: Telerik.Web.UI.AsyncUpload.FilterFormatter
description: Telerik.Web.UI.AsyncUpload.FilterFormatter
---

# Telerik.Web.UI.AsyncUpload.FilterFormatter

This Class formats the filter information and
            Serializes a FileFilterCollection in a form that
            can be directly used with the Flash and Silverlight file dialogs.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.AsyncUpload.FilterFormatter : IFilterFormatter

## Methods

###  Format

Accepts a FileFilterCollection, updates its description field, if the latter is not set,
            and returns string array containing the allowed extensions

#### Parameters

#### filters `Telerik.Web.UI.FileFilterCollection`

FileFilterCollection

#### Returns

`System.String[]` Array containing all allowed extensions

###  Serialize

Serializes a FileFilterCollection in a form that can be directly used with
            the Flash and Silverlight file dialogs.

#### Parameters

#### filters `Telerik.Web.UI.FileFilterCollection`

FileFilterCollection

#### format `System.Boolean`

Boolean value that specifies whether the FileFilterCollection should be formatted first

#### Returns

`System.String` Serialized representation of the FileFilterCollection passed as input.

