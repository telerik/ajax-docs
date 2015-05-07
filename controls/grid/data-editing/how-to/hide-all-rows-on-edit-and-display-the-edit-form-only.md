---
title: Hide All Rows on Edit and Display the Edit Form Only
page_title: Hide All Rows on Edit and Display the Edit Form Only | RadGrid for ASP.NET AJAX Documentation
description: Hide All Rows on Edit and Display the Edit Form Only
slug: grid/data-editing/how-to/hide-all-rows-on-edit-and-display-the-edit-form-only
tags: hide,all,rows,on,edit,and,display,the,edit,form,only
published: True
position: 8
---

# Hide All Rows on Edit and Display the Edit Form Only



## 

When the grid presentation area is restricted on your page you may not want to display the rest of the grid items on item editing (as thus the control will expand its height). To hide all rows in Telerik RadGrid on item editing and display merely the edit form for the editing item (along with that item), you need to:

1. Subscribe to the **PreRender** event of Telerik RadGrid

1. Verify whether **RadGrid1.EditItems.Count** is greater than 0

1. Traverse all grid items which differ from the item in the **RadGrid1.EditItems** collection and set their **Visible** attribute to **False**

After update/cancel operation, the rest of the grid records will show up on the page.



````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
  <MasterTableView AutoGenerateColumns="True">
    <Columns>
      <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
````
````C#
private void RadGrid1_PreRender(object sender, System.EventArgs e)
{
    if (RadGrid1.EditItems.Count > 0)
    {
        foreach (GridDataItem item in RadGrid1.MasterTableView.Items)
        {
            if (item != RadGrid1.EditItems[0])
            {
                item.Visible = false;
            }
        }
    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadGrid1.PreRender
    If (RadGrid1.EditItems.Count > 0) Then
        For Each item As GridDataItem In RadGrid1.MasterTableView.Items
            If (Not item Is RadGrid1.EditItems(0)) Then
                item.Visible = False
            End If
        Next
    End If
End Sub
````

