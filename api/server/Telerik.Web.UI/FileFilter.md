---
title: Telerik.Web.UI.FileFilter
page_title: Telerik.Web.UI.FileFilter
description: Telerik.Web.UI.FileFilter
---

# Telerik.Web.UI.FileFilter

This class accepts description and extensions and prepares the
             Filter that can be directly passed to Silverlight/Flash file dialog

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.FileFilter

## Properties

###  Description `String`

Gets or sets the description from or to the ViewState.

###  Extensions `String[]`

Gets or sets the extensions.

## Methods

###  GetFilter

Accepts string arraying containing the allowed extensions and produces 
            a filter mask in the form "*.extension;*.extension..."

#### Parameters

#### extensions `System.String`

Array containing allowed extensions

#### indentation `System.Boolean`

Specifies whether a white space should be put after extension declaration

#### Returns

`System.String` Filter that can be directly passed to Silverlight/Flash file dialog.

