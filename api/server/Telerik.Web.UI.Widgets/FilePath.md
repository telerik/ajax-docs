---
title: Telerik.Web.UI.Widgets.FilePath
page_title: Telerik.Web.UI.Widgets.FilePath
description: Telerik.Web.UI.Widgets.FilePath
---

# Telerik.Web.UI.Widgets.FilePath

Handles modifications concerning the file paths in the content providers

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Widgets.FilePath

## Properties

###  Separator `Char`

A character that separates the different parts of the path items.

## Methods

###  NormalizeRelativePath

Normalizes paths that contain parent references - /..

#### Parameters

#### path `System.String`

The path that will be normalized

#### Returns

`System.String` The normalized path that now points directly to its target

###  AddTrailingSeparator

Adds a trailing path separator if such is missing

#### Parameters

#### path `System.String`

The path that will be checked

#### Returns

`System.String` The result path must end with a path separator

