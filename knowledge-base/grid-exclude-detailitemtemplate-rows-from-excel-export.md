---
title: How to exclude from Excel export DetailItemTemplate rows and remove the empty rows
description: I'd like to export data from a grid, but the grid has a DetailItemTemplate and I'm not able to exclude it from the export. The problem is that the Excel file contains alternating empty rows - RadGrid for ASP.NET AJAX
type: troubleshooting
page_title: Exclude the DetailItemTemplate empty rows from excel export 
slug: grid-exclude-detailitemtemplate-rows-from-excel-export 
position: 
tags: 
ticketid: 1594832
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
I'd like to export data from a grid, but the grid has a DetailItemTemplate and I'm not able to exclude it from the export. The problem is that the Excel file contains alternating empty rows.

## Solution
The solution is to hide the DetailTemplateItemDataCell and their parent items:

````C#
private void GridPreRender(object sender, EventArgs e)
{
    if (RadGrid1.IsExporting)
    {
        var dataItems = RadGrid1.Items;
        foreach (GridDataItem item in dataItems) 
        {
            item.DetailTemplateItemDataCell.Visible = false;
            item.DetailTemplateItemDataCell.Parent.Visible = false;
        }
    }
}
````
````VB
Private Sub GridPreRender(ByVal sender As Object, ByVal e As EventArgs)
    If RadGrid1.IsExporting Then
        Dim dataItems = RadGrid1.Items

        For Each item As GridDataItem In dataItems
            item.DetailTemplateItemDataCell.Visible = False
            item.DetailTemplateItemDataCell.Parent.Visible = False
        Next

    End If
End Sub
````


The extra lines could also have something to do with settings like:


RadGrid1.ClientSettings.Scrolling.AllowScroll = false;
RadGrid1.ClientSettings.Scrolling.UseStaticHeaders = false;

   
 