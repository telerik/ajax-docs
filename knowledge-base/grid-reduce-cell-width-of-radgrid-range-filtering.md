---
title: Reduce cell width of RadGrid range filtering
description: Reduce cell width of RadGrid range filtering. Check it now!
type: how-to
page_title: Reduce cell width of RadGrid range filtering
slug: grid-reduce-cell-width-of-radgrid-range-filtering
res_type: kb
---


### DESCRIPTION  

 The `GridDateTimeColumn` of RadGrid provides convenient built-in range filtering functionality:


````ASP.NET
<telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
    FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
    SortExpression="OrderDate" UniqueName="OrderDate" EnableRangeFiltering="true"
    EnableTimeIndependentFiltering="true">
</telerik:GridDateTimeColumn>
````

Since this requires 2 picker controls to be generated, the width of the filtering cell may increase beyond its standard size.

### SOLUTION  

 To reduce this cell width, you can put the pickers in two lines:  

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridFilteringItem)
    {
        GridFilteringItem filterItem = e.Item as GridFilteringItem;
        (filterItem["OrderDate"].Controls[3] as LiteralControl).Text = "<br />To: ";
    }
}
````
````VB
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridFilteringItem Then
        Dim filterItem As GridFilteringItem = TryCast(e.Item, GridFilteringItem)
        (TryCast(filterItem("OrderDate").Controls(3), LiteralControl)).Text = "<br />To: "
    End If
End Sub
````




