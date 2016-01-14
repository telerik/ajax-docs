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
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.EditorToolGroup : IAttributeAccessor

## Properties

###  Attributes `AttributeCollection`

Gets the custom attributes which will be serialized on the client.

###  Context `String`

The Context specifies the DOM elements to which the corresponding group of tools will be available.

###  Tab `String`

Specifies the Tab to which the corresponding tool group belongs

###  Tag `String`

Gets or sets a string which will be used by the ToolAdapter to associate
            the group with the adapter's virtual structure. In the default adapter this 
            is the name of the docking zone where the toolbar should be placed.

###  Tools `EditorToolBaseCollection`

Gets the children of the EditorToolGroup.

## Methods

###  Contains

Determines whether the group a tool with the specified name.

#### Returns

`System.Boolean` 

###  FindTool

Finds the tool with the given name.

#### Returns

`Telerik.Web.UI.EditorTool` 

###  GetAllTools

Gets all tools inside the group.

#### Returns

`System.Collections.Generic.List`1` 

