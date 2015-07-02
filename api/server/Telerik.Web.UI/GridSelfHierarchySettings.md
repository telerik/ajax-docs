---
title: Telerik.Web.UI.GridSelfHierarchySettings
page_title: Telerik.Web.UI.GridSelfHierarchySettings
description: Telerik.Web.UI.GridSelfHierarchySettings
---

# Telerik.Web.UI.GridSelfHierarchySettings

Holds the column names presenting the self-referencing relations in the source
            table.

#### Remarks
Meaningful in cases of self-referenced grid.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridSelfHierarchySettings

## Properties

###  ParentKeyName `String`

Gets or sets a value representing the parent ID field when building the
            self-referencing hierarchy.

#### Remarks
The value property must be included in the DataKeyNames array
            for the MasterTableView.

###  KeyName `String`

Gets or sets a value, representing the ID of the current table level in
            self-referencing hierarchy structure.

#### Remarks
The value property must be included in the DataKeyNames array
            for the MasterTableView.

###  MaximumDepth `Int32`

Gets or sets a value indicating the level-depth limit of the nested
            tables.

#### Remarks
This property can be set only once when the grid is initialized
            and can not be modified.

## Methods

###  IsSet

Checks if a self-hierarchy settings property value was changed and differs from its
            default.

#### Remarks
This method is for Telerik RadGrid internal usage.

#### Returns

`System.Boolean` 

