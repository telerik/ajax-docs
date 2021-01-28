---
title: GroupsChanging
page_title: GroupsChanging Event - RadGrid
description: Check our Web Forms article about GroupsChanging Event.
slug: grid/server-side-programming/events/groupschanging
published: True
position: 50
---

# GroupsChanging Event

Fired when Telerik RadGrid tries to group its data (e.g. when a column header is dragged to the Group Panel).

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridGroupsChangingEventArgs)` **e**

    * Event arguments 

        * `(boolean)` **e.Canceled**
            
            If set to True the event will be canceled.

        * `(GridGroupsChangingAction)` **e.Action**

            Gets a reference to `GridGroupsChangingAction` enumeration, which holds information about what action did fire the event. (Group, Ungroup, Swap or ChangeSortOrder)

        * `(GridGroupByExpression)` **e.Expression**

            Gets or sets the `GridGroupByExpression` that will be used for grouping.

        * `(GridGroupByField)` **e.SortedField**

            Gets a reference to the currently used `GridGroupByField`

        * `(GridGroupByExpression)` **e.SwapExpression**

            Gets the swap expression which represents the GridGroupByExpression with which the `GridGroupsChangingEventArgs`.Expression will be swapped.
            The only case the value is not null is when the Action property is set to Swap

        * `(GridTableView)` **e.TableView**

            Gets a reference to the `GridTableView` object where the grouping is performed.

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnGroupsChanging="RadGrid1_GroupsChanging">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.GroupsChanging += RadGrid1_GroupsChanging;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.GroupsChanging, AddressOf RadGrid1_GroupsChanging
End Sub
````

The event handler

````C#
protected void RadGrid1_GroupsChanging(object sender, GridGroupsChangingEventArgs e)
{
    GridGroupsChangingAction action = e.Action;
    bool canceled = e.Canceled;
    GridGroupByExpression expression = e.Expression;
    GridGroupByField sortedFiled = e.SortedField;
    GridGroupByExpression swapExpression = e.SwapExpression;
    GridTableView tableView = e.TableView;
}
````
````VB
Protected Sub RadGrid1_GroupsChanging(ByVal sender As Object, ByVal e As GridGroupsChangingEventArgs)
    Dim action As GridGroupsChangingAction = e.Action
    Dim canceled As Boolean = e.Canceled
    Dim expression As GridGroupByExpression = e.Expression
    Dim sortedFiled As GridGroupByField = e.SortedField
    Dim swapExpression As GridGroupByExpression = e.SwapExpression
    Dim tableView As GridTableView = e.TableView
End Sub
````

  
