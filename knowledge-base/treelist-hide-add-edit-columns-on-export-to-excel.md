---
title: Hide Add/Edit Columns in RadTreeList Export to Excel
description: Learn how to hide the add or edit column text in a RadTreeList export to Excel scenario.
type: how-to
page_title: Export to Excel in RadTreeList and Hide Add/Edit Columns
slug: treelist-hide-add-edit-columns-on-export-to-excel
position: 
tags: RadTreeList, Export, Excel, EditCommandColumn
ticketid: 1441511
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
		    <td>Version</td>
		    <td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadTreeList for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When exporting to Excel in a RadTreeList that contains an EditColumn, the Add and Edit text will also appear.

## Solution

To change this set the Visible property to false in the [ItemDataBound](https://docs.telerik.com/devtools/aspnet-ajax/controls/treelist/server-side-programming/treelist-object#server-side-events) event handler. Use the **IsExporting** flag to verify the Export Command is being executed. See the below code snippet for reference.

````C#
protected void rtlOrgChart_ItemDataBound(object sender, TreeListItemDataBoundEventArgs e)
{
    var tl = (RadTreeList)sender;
    if (tl.IsExporting)
    {
        foreach (var col in tl.Columns)
        {
            if (col is TreeListEditCommandColumn)
                col.Visible = false;
        }
    }
}
````
```` VB
Protected Sub rtlOrgChart_ItemDataBound(sender As Object, e As TreeListItemDataBoundEventArgs) Handles rtlOrgChart.ItemDataBound
    Dim tl = CType(sender, RadTreeList)
    If tl.IsExporting Then
        For Each col In tl.Columns
            If TypeOf col Is TreeListEditCommandColumn Then
                col.Visible = False
            End If
        Next
    End If
End Sub
````

## See Also

*   [TreeList Object Server Side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/treelist/server-side-programming/treelist-object)
