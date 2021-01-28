---
title: Distinguish Edit or Insert Mode
page_title: Distinguish Edit or Insert Mode - RadGrid
description: Check our Web Forms article about Distinguish Edit or Insert Mode.
slug: grid/data-editing/distinguish-edit-or-insert-mode
tags: distinguish,edit,or,insert,mode
published: True
position: 8
---

# Distinguish Edit or Insert Mode



## 

In various situations you may want to detect whether the user is currently editing grid item or performs an insert operation. This is useful if you would like to have different appearance for the edit form on item insertion than that on item editing (suitable for **WebUserControl** or **FormTemplate** custom edit form). For example, you may want to hide primary key field from the form or change **update** button text to **insert** on initial insert. These online example demonstrates the second functionality:

[https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx)

[https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultVB.aspx](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultVB.aspx)

And the code extractions are:

````ASP.NET
<asp:Button ID="btnUpdate" Text='<%# ((bool)DataBinder.Eval(Container, "OwnerTableView.IsItemInserted")) ? "Insert" : "Update" %>'
runat="server" CommandName='<%# ((bool)DataBinder.Eval(Container, "OwnerTableView.IsItemInserted")) ? "PerformInsert" : "Update" %>'>
````



````ASP.NET
<asp:Button ID="Button1" Text='<%# IIf( DataBinder.Eval(Container, "OwnerTableView.IsItemInserted"), "Insert", "Update") %>'
runat="server" CommandName='<%# IIf( DataBinder.Eval(Container, "OwnerTableView.IsItemInserted"), "PerformInsert", "Update") %>'>
````



You can check the type of the editable item in the **ItemCreated/ItemDataBound** handlers of the grid to verifywhether the item is in edit or insert mode. Then you can modify the edit form appearance(on **ItemCreated**) or edit form controls values (on **ItemDataBound**) if needed. Below are sample code snippets:



````C#
private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if(e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
        {
            // insert item
        }
        else
        {
            // edit item
        }
    }
}

private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
    {
        // insert item
    }
    else
    {
        // edit item
    }
}          
````
````VB
Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then

        If TypeOf e.Item Is GridEditFormInsertItem OrElse TypeOf e.Item Is GridDataInsertItem Then
            ' insert item
        Else
            ' edit item
        End If
    End If
End Sub 'RadGrid1_ItemCreated

Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then

        If TypeOf e.Item Is GridEditFormInsertItem OrElse TypeOf e.Item Is GridDataInsertItem Then
            ' insert item
        Else
            ' edit item
        End If
    End If
End Sub 'RadGrid1_ItemDataBound
````


For more information concerning the major differences between **ItemCreated** and **ItemDataBound** events please read [this article]({%slug grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-%}). You can also learn how to control the edit/insert/regular modes in the grid (to prevent unexpected results when both edit and insert form is opened) from [this topic]( https://www.telerik.com/help/aspnet-ajax/grid-switching-insert-add-modes.html ).
