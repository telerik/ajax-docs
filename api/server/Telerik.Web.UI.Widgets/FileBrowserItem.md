---
title: Telerik.Web.UI.Widgets.FileBrowserItem
page_title: Telerik.Web.UI.Widgets.FileBrowserItem
description: Telerik.Web.UI.Widgets.FileBrowserItem
---

# Telerik.Web.UI.Widgets.FileBrowserItem

The base class of the FileItem and DirectoryItem classes. Contains the common functionality.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Widgets.FileBrowserItem

## Properties

###  Attributes `NameValueCollection`

Gets or sets a string array containing custom values which can be used on the client when 
            customizing the FileBrowser control.

###  Path `String`

Gets the full virtual path to the file/directory item.

###  Name `String`

Gets the name of the file item. The value of this property will be displayed in the FileBrowser control.

###  Permissions `PathPermissions`

Gets the permissions on the file item.

###  Tag `String`

Gets the tag of the file/directory item. Used in custom content providers (can store additional data).

## Methods

###  Serialize

Serializes the item into a javascript array. This method should be overridden only when developing 
            a custom FileBrowser control.

#### Parameters

#### writer `System.IO.StringWriter`

a StringWriter used as a target for the serialization.

#### Returns

`System.Void` 

###  WriteJavascriptString

Utility method used when serializing. Escapes a string for javascript.

#### Returns

`System.Void` 

###  WriteSeparator

Utility method used when serializing. Writes a javascript array separator.

#### Returns

`System.Void` 

###  RemoveLastSeparator

Utility method used when serializing. Removes the last javascript array separator from the underlying
            StringBuilder of writer.

#### Returns

`System.Void` 

###  SerializeAttributes

Serializes the Attributes array.

#### Parameters

#### writer `System.IO.StringWriter`

#### Returns

`System.Void` 

