---
title: Telerik.Web.UI.EditorDropDown
page_title: Telerik.Web.UI.EditorDropDown
description: Telerik.Web.UI.EditorDropDown
---

# Telerik.Web.UI.EditorDropDown

Represents a EditorDropDown tool that renders as a custom dropdown in the editor

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.EditorToolBase : IAttributeAccessor
* Telerik.Web.UI.EditorTool
* Telerik.Web.UI.EditorDropDown

## Properties

###  Attributes `AttributeCollection`

Gets the custom attributes which will be serialized on the client.

###  Enabled `Boolean`

Gets or sets a value indicating whether this  is enabled.

###  ImageUrl `String`

This property sets the tool's small icon for RibbonBar mode.

###  ImageUrlLarge `String`

This property sets the tool's large icon for RibbonBar mode.

###  Items `EditorDropDownItemCollection`

Gets the collection of EditorTool objects, inside the tool strip.

###  Name `String`

Gets or sets the  name. It will be used by RadEditor to find
            the command which should be executed when the user clicks this tool.

###  ShortCut `String`

Gets or sets the keyboard shortcut which will invoke the associated
            RadEditor command.

###  ShowIcon `Boolean`

Gets or sets a value indicating whether the tool icon should be displayed.

###  ShowText `String`

Gets or sets a value indicating whether the tool text should be displayed.

###  Text `String`

Gets or sets the title of the . The default ToolAdapter will 
            render the value of this property as a tooltip or static text near the
            tool icon.

###  Type `EditorToolType`

Gets or sets the type of the tool - by default it is a button

###  Visible `Boolean`

Gets or sets a value indicating whether this  is visible.

## Methods

###  EnsureName

Throws an exception if the EditorTool has no name.

#### Returns

`System.Void` 

