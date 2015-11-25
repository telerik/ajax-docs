---
title: Telerik.Web.UI.EditorTool
page_title: Telerik.Web.UI.EditorTool
description: Telerik.Web.UI.EditorTool
---

# Telerik.Web.UI.EditorTool

Represents a single RadEditor tool.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.EditorToolBase : IAttributeAccessor
* Telerik.Web.UI.EditorTool

## Properties

###  Enabled `Boolean`

Gets or sets a value indicating whether this  is enabled.

###  Name `String`

Gets or sets the  name. It will be used by RadEditor to find
            the command which should be executed when the user clicks this tool.

###  Text `String`

Gets or sets the title of the . The default ToolAdapter will 
            render the value of this property as a tooltip or static text near the
            tool icon.

###  ShortCut `String`

Gets or sets the keyboard shortcut which will invoke the associated
            RadEditor command.

###  ImageUrl `String`

This property sets the tool's small icon for RibbonBar mode.

###  ImageUrlLarge `String`

This property sets the tool's large icon for RibbonBar mode.

###  ShowIcon `Boolean`

Gets or sets a value indicating whether the tool icon should be displayed.

###  ShowText `String`

Gets or sets a value indicating whether the tool text should be displayed.

###  Type `EditorToolType`

Gets or sets the type of the tool - by default it is a button

###  Type `EditorToolType`

###  Visible `Boolean`

Gets or sets a value indicating whether this  is visible.

###  Attributes `AttributeCollection`

Gets the custom attributes which will be serialized on the client.

###  PopUpWidth `String`

###  PopUpHeight `String`

###  PopUpClassName `String`

###  SizeToFit `String`

###  ItemsPerRow `String`

## Methods

###  EnsureName

Throws an exception if the EditorTool has no name.

#### Returns

`System.Void` 

###  SaveViewState

#### Returns

`System.Object` 

###  LoadViewState

#### Returns

`System.Void` 

###  TrackViewState

#### Returns

`System.Void` 

###  System.Web.UI.IAttributeAccessor.GetAttribute

#### Returns

`System.String` 

###  System.Web.UI.IAttributeAccessor.SetAttribute

#### Returns

`System.Void` 

