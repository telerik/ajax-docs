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



In various situations, you may want to detect whether the user is editing a grid item or performing an insert operation. This is useful when you want different appearances for the edit form during insertion and editing, such as with a **WebUserControl** or **FormTemplate** custom edit form. For example, you may want to hide the primary key field or change the **Update** button text to **Insert** during the initial insert. These online examples demonstrate the second functionality:

[C# edit and insert form demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultCS.aspx)

[VB.NET edit and insert form demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/TemplateFormUpdate/DefaultVB.aspx)

And the code extractions are:

````ASP.NET
<asp:Button ID="btnUpdate" Text='<%# ((bool)DataBinder.Eval(Container, "OwnerTableView.IsItemInserted")) ? "Insert" : "Update" %>'
runat="server" CommandName='<%# ((bool)DataBinder.Eval(Container, "OwnerTableView.IsItemInserted")) ? "PerformInsert" : "Update" %>'>
````



````ASP.NET
<asp:Button ID="Button1" Text='<%# IIf( DataBinder.Eval(Container, "OwnerTableView.IsItemInserted"), "Insert", "Update") %>'
runat="server" CommandName='<%# IIf( DataBinder.Eval(Container, "OwnerTableView.IsItemInserted"), "PerformInsert", "Update") %>'>
````



You can check the type of the editable item in the **ItemCreated** or **ItemDataBound** handlers of the grid to verify whether the item is in edit or insert mode. Then you can modify the edit form appearance in **ItemCreated** or the edit form control values in **ItemDataBound**. Below are sample code snippets:



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


For more information about the differences between the **ItemCreated** and **ItemDataBound** events, see [Differences between ItemCreated and ItemDataBound]({%slug grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-%}). You can also learn how to control the edit, insert, and regular modes in the grid from [Controlling insert and edit modes](https://www.telerik.com/help/aspnet-ajax/grid-switching-insert-add-modes.html).

## See Also

- [Inserting values using InPlace and EditForms modes]({%slug grid/data-editing/insert-records/inserting-values-using-inplace-and-editforms-modes%})
- [Updating values using InPlace and EditForms modes]({%slug grid/data-editing/update-records/updating-values-using-inplace-and-editforms-modes%})
