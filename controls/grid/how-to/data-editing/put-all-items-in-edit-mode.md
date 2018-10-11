---
title: Put All Items in Edit Mode
page_title: Put All Items in Edit Mode | RadGrid for ASP.NET AJAX Documentation
description: Put All Items in Edit Mode
slug: grid/how-to/data-editing/put-all-items-in-edit-mode
previous_url: controls/grid/data-editing/how-to/put-all-items-in-edit-mode
tags: put,all,items,in,edit,mode
published: True
position: 3
---

# Put All Items in Edit Mode



##

There are cases in which you may want to force the grid items in edit mode when the grid displays initially on the page.This is a straightforward task. You simply need to attach to the **PreRender** event of the control, traverse the items in the grid, detect those which are editable and set their **Edit** property to **true**. After traversing all items and performing this operation, you have to rebind the grid (calling explicitly its **Rebind()** method) to reflect the changes.

>tip Keep in mind you need to enable multi row editing by setting RadGrid's **AllowMultiRowEdit** property to **true**.
>

In the code-behind:



````C#
protected void RadGrid1_PreRender(object sender, System.EventArgs e)
{
    if (!IsPostBack)
    {
        foreach (GridItem item in RadGrid1.MasterTableView.Items)
        {
            if (item is GridEditableItem)
            {
                GridEditableItem editableItem = item as GridDataItem;
                editableItem.Edit = true;
            }
        }
        RadGrid1.Rebind();
    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadGrid1.PreRender
    If Not IsPostBack Then
        For Each item As GridItem In RadGrid1.MasterTableView.Items
            If TypeOf item Is GridEditableItem Then
                Dim editableItem As GridEditableItem = CType(item, GridDataItem)
                editableItem.Edit = True
            End If
        Next
        RadGrid1.Rebind()
    End If
End Sub
````


Another option (which is applicable only with in-forms edit mode (**EditForms**, **WebUserControl** or **FormTemplate** custom edit form) is to set the *Edit* property of all grid rows to true on initial load hooking the **ItemCreated** event:



````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
    If (Not Page.IsPostBack AndAlso TypeOf e.Item Is GridEditableItem) Then
        e.Item.Edit = True
    End If
End Sub
````
````C#
protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (!Page.IsPostBack && e.Item is GridEditableItem)
    {
        e.Item.Edit = true;
    }
}
````


Thus you will avoid the grid rebinding on PreRender.
