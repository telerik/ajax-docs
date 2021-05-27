---
title: Have different text in the GroupFooters and the GridFooter
description: Have different text in the GroupFooters and the GridFooter
type: how-to
page_title: Have different text in the GroupFooters and the GridFooter - RadGrid
slug: grid-have-different-text-in-the-groupfooters-and-the-gridfooter
res_type: kb
---

## DESCRIPTION

How do I show different descriptions for the Group Footer and Grid Footer in the RadGrid? When I set a FooterAggregateFormatString on a column, the same FormatString is used for both the Group Footer and Grid Footer.

## SOLUTION

The RadGrid uses a single format string for both the **GridFooterItem** and **GridGroupFooterItem**, so the same string will be used in both footers. In some situations it may be desirable to have different strings for those sections, such as a Subtotal and Grand Total configuration.

The [ItemDataBound event]({%slug grid/server-side-programming/events/itemdatabound%}) event can be used to override the text in the RadGrid column footer. The first step is to define the **FooterAggregateFormatString** so that it only contains the aggregate value, see below.

````XML
<telerik:GridBoundColumn DataField="SampleColumn" Aggregate="Sum" FooterAggregateFormatString="{0}" />
````

In the [ItemDataBound event]({%slug grid/server-side-programming/events/itemdatabound%}), you can distinguish whether the Bound item is a GridFooterItem or GridGroupFooterItem and modify the Cell Text accordingly.

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridFooterItem)
    {
        var valueFooterCell = (e.Item as GridFooterItem)["SampleColumn"];
        valueFooterCell.Text = "Grand Total: " + valueFooterCell.Text;
    }
    else if (e.Item is GridGroupFooterItem)
    {
        var valueFooterCell = (e.Item as GridGroupFooterItem)["SampleColumn"];
        valueFooterCell.Text = "Subtotal: " + valueFooterCell.Text;
    }
}
````
 
