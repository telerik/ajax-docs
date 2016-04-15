---
title: Hide All Rows on Insert and Display the Edit Form Only
page_title: Hide All Rows on Insert and Display the Edit Form Only | RadGrid for ASP.NET AJAX Documentation
description: Hide All Rows on Insert and Display the Edit Form Only
slug: grid/how-to/data-editing/hide-all-rows-on-insert-and-display-the-edit-form-only
previous_url: grid/data-editing/how-to/hide-all-rows-on-insert-and-display-the-edit-form-only
tags: hide,all,rows,on,insert,and,display,the,edit,form,only
published: True
position: 7
---

# Hide All Rows on Insert and Display the Edit Form Only



##

When the grid presentation area is restricted on your page you may not want to display the grid items on item insertion (as thus the control will expand its height). To hide all rows in Telerik RadGrid on item insertion and display merely the edit form for the inserted item, you need to:

1. Subscribe to the **PreRender** event of Telerik RadGrid

1. Verify whether **RadGrid1.MasterTableView.IsItemInserted** is set to **True**

1. Traverse the grid items and set their **Visible** attribute to **False**



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
  <MasterTableView CommandItemDisplay="Top" AutoGenerateColumns="True" />
</telerik:RadGrid>
````
````C#
private void RadGrid1_PreRender(object sender, System.EventArgs e)
{
    if (RadGrid1.MasterTableView.IsItemInserted)
    {
        foreach (GridItem item in RadGrid1.Items)
        {
            item.Visible = false;
        }
    }
}
````
````VB
Private Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs)
    If RadGrid1.MasterTableView.IsItemInserted Then
        For Each item As GridItem In RadGrid1.Items
            item.Visible = False
        Next
    End If
End Sub
````

