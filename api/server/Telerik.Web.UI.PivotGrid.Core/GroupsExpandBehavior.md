---
title: Telerik.Web.UI.PivotGrid.Core.GroupsExpandBehavior
page_title: Telerik.Web.UI.PivotGrid.Core.GroupsExpandBehavior
description: Telerik.Web.UI.PivotGrid.Core.GroupsExpandBehavior
---

# Telerik.Web.UI.PivotGrid.Core.GroupsExpandBehavior

Specify the expanded state of Telerik.Web.UI.PivotGrid.Core.IGroup s.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGrid.Core.GroupsExpandBehavior : IItemExpandBehavior`1

## Properties

###  Expanded `Boolean`

Specify the default state for s up to given  (excluding).
            The default is true.
            
            When true groups up to the set level are expanded, all groups with level greater than or equal are collapsed.
            When false groups up to the set level are collapsed, all groups with level greater than or equal are expanded.

###  UpToLevel `Int32`

Specify the default state for s up to given level (excluding).
            The default is

## Methods

###  IsExpanded

#### Returns

`System.Boolean` 

