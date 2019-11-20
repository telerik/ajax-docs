---
title: Align RadGrid Group Headers with Column Headers for Multiple Groups
description: Follow along to learn how to align multiple group headers and columns in a RadGrid
type: how-to
page_title: Align Columns and Headers with Multiple Groups in RadGrid
slug: grid-align-group-headers-with-column-headers-for-multiple-groups
position: 
tags: radgrid, grouping, group headers
ticketid: 1441736
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
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Elaborating on the [Aligning Items in Group](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Grouping/aligning-items-in-groupheader) which is specific to the example in the documentation. It would require different logic in most cases. See the below solution for how to do the same thing with multiple headers.

## Solution

In the below code snippet the location of the cell is specifically placed by the column index. It isn't dynamic but this will provide the desired result. Notice that each cell is specifically laid out and empty cells are added as placeholders for non-grouped columns.

````C#

protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupHeaderItem)
    {
        (e.Item as GridGroupHeaderItem).DataCell.Visible = false;   //  Hides the initial header text value
        e.Item.PreRender += new EventHandler(Item_PreRender);       //  delegates the PreRender event handler
    }
}
public void Item_PreRender(object sender, EventArgs e)
{
    string text = ((GridGroupHeaderItem)sender).DataCell.Text;  //  gets header text value
    string[] texts = text.Split(';');   //  splits the text value on character = ;
    GridColumn[] ColumnsArray = ((GridGroupHeaderItem)sender).OwnerTableView.RenderColumns; //  gets rendered columns array

    //  Iterates the grid columns array
    foreach (GridColumn Column in ColumnsArray)
    {
        using (TableCell cell = new TableCell())
        {
            switch (Column.UniqueName)
            {
                case "UnitPrice":
                    cell.Text = texts[0];
                    ((GridGroupHeaderItem)sender).Cells.Add(new TableCell()); //    skip column 1 by adding a blank column
                    ((GridGroupHeaderItem)sender).Cells.Add(new TableCell()); //    skip column 2 by adding a blank column
                    ((GridGroupHeaderItem)sender).Cells.Add(cell);            //    set column 3 by adding a specified group header text
                    Console.WriteLine();
                    break;
                case "SupplierName":
                    cell.Text = texts[1];
                    ((GridGroupHeaderItem)sender).Cells.Add(new TableCell()); //    skip column 4 by adding a blank column
                    ((GridGroupHeaderItem)sender).Cells.Add(cell);            //    set column 5 by adding a specified group header text  
                    Console.WriteLine();
                    break;
                case "CategoryName":
                    cell.Text = texts[2];
                    ((GridGroupHeaderItem)sender).Cells.Add(cell);            //    set column 6 by adding a specified group header text
                    Console.WriteLine();
                    break;
                default:
                    break;
            }
        }
    }
}
````

## See Also

*   [Aligning Items in Group](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Grouping/aligning-items-in-groupheader)
