---
title: Telerik.Web.UI.EditorToolGroup
page_title: Telerik.Web.UI.EditorToolGroup
description: Telerik.Web.UI.EditorToolGroup
---

# Telerik.Web.UI.EditorToolGroup

Represents logical group of EditorTool objects. The default ToolAdapter will
            render the EditorToolGroup object as a toolbar.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.EditorToolGroup

## Properties

###  Attributes `AttributeCollection`

Gets the custom attributes which will be serialized on the client.

###  Tag `String`

Gets or sets a string which will be used by the ToolAdapter to associate
            the group with the adapter's virtual structure. In the default adapter this 
            is the name of the docking zone where the toolbar should be placed.

###  Tools `EditorToolBaseCollection`

Gets the children of the EditorToolGroup.

###  Tab `String`

Specifies the Tab to which the corresponding tool group belongs

###  Context `String`

The Context specifies the DOM elements to which the corresponding group of tools will be available.

## Methods

###  System.Web.UI.IAttributeAccessor.GetAttribute

#### Returns

`System.String` 

###  System.Web.UI.IAttributeAccessor.SetAttribute

#### Returns

`System.Void` 

###  GetAllTools

Gets all tools inside the group.

#### Returns

`System.Collections.Generic.List`1` 

###  FindTool

Finds the tool with the given name.

#### Returns

`Telerik.Web.UI.EditorTool` 

###  Contains

Determines whether the group a tool with the specified name.

#### Returns

`System.Boolean` 

###  LoadViewState

#### Returns

`System.Void` 

###  SaveViewState

#### Returns

`System.Object` 

###  TrackViewState

#### Returns

`System.Void` 

###  SetDirty

#### Returns

`System.Void` 

