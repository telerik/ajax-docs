---
title: Telerik.Web.UI.GridGroupsChangingEventArgs
page_title: Telerik.Web.UI.GridGroupsChangingEventArgs
description: Telerik.Web.UI.GridGroupsChangingEventArgs
---

# Telerik.Web.UI.GridGroupsChangingEventArgs

Holds properties specific for grouping mechanism such as performed action and
            reference to GridTableView where the action was performed.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridGroupsChangingEventArgs

## Properties

###  Action `GridGroupsChangingAction`

Gets a reference to  enumeration, which
                holds information about what action did fire the
                 event.

###  Canceled `Boolean`

Gets or sets a value indicating whether 
                event will be canceled.

###  Expression `GridGroupByExpression`

Gets or sets the  that will be used for
                grouping Telerik RadGrid.

###  SortedField `GridGroupByField`

Gets a reference to the currently used .

###  SwapExpression `GridGroupByExpression`

Gets the swap expression which represents the  with which the 
             will be swapped. The only case the value is not null is when 
             property is set to .

###  TableView `GridTableView`

Gets a reference to the GridTableView object where the grouping
            is performed.

