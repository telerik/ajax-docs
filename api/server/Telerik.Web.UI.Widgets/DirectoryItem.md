---
title: Telerik.Web.UI.Widgets.DirectoryItem
page_title: Telerik.Web.UI.Widgets.DirectoryItem
description: Telerik.Web.UI.Widgets.DirectoryItem
---

# Telerik.Web.UI.Widgets.DirectoryItem

Represents a directory item in the FileBrowser control.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Widgets.FileBrowserItem
* Telerik.Web.UI.Widgets.DirectoryItem

## Properties

###  Path `String`

Gets the full virtual path to the directory item.

###  FullPath `String`

Gets the full virtual path to the directory item.

###  Location `String`

Gets the virtual location of the directory item. When the item is not root, the value
            of this property should be string.Empty. The FileBrowser control recursively combines the names 
            of all parent directory items in order to get the full virtual path of the item.

###  Directories `DirectoryItem[]`

Gets a DirectoryItem array containing all child directory items.

###  Files `FileItem[]`

Gets a FileItem array containing all child file items.

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

###  ClearDirectories

Clears the Directories array. Can be used when building the directory list in List mode.

#### Returns

`System.Void` 

###  Serialize

Serializes the directory item into a javascript array. This method should be overridden only when developing 
            a custom FileBrowser control.

#### Parameters

#### writer `System.IO.StringWriter`

a StringWriter used as a target for the serialization.

#### Returns

`System.Void` 

###  SerializeContent

Serializes the children of the directory item as a javascript array. 
            Recursively calls the Serialize methods of all child objects.

#### Parameters

#### writer `System.IO.StringWriter`

a StringWriter used as a target for the serialization.

#### Returns

`System.Void` 

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

