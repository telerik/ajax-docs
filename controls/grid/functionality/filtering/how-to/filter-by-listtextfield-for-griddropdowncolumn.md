---
title: Filter By ListTextField for GridDropDownColumn
page_title: Filter By ListTextField for GridDropDownColumn | RadGrid for ASP.NET AJAX Documentation
description: Filter By ListTextField for GridDropDownColumn
slug: grid/functionality/filtering/how-to/filter-by-listtextfield-for-griddropdowncolumn
tags: filter,by,listtextfield,for,griddropdowncolumn
published: True
position: 6
---

# Filter By ListTextField for GridDropDownColumn



## 

The built-in **GridDropDownColumn** is filtered by its **ListValueField** when the default filtering feature of the control is used. **RadGrid** does not include any support for filtering by **ListTextField** instead.

This limitation is because the filtering mechanism relies on the **DataField** of the filtered column and for **GridDropDownColumn** this property specifies the mapping field in the drop-down source. (For more information about the properties of **GridDropDownColumn**, see [Customize/Configure GridDropDownColumn]({%slug grid/how-to/customize-griddropdowncolumn%})).If you want to filter by **ListTextField**, your current options are:

* use a hidden **GridBoundColumn** (with **Display = false**). Add an **ItemCommand** event handler that catches filter commands from the dropdown column and substitutes a filter command from the **GridBoundColumn** instead:



````ASP.NET
<telerik:GridDropDownColumn UniqueName="CategoryddColumn" ListTextField="CategoryName"
  HeaderText="Category name" ListValueField="CategoryID" DataField="CategoryID" DataSourceID="dataSourceCategories">
</telerik:GridDropDownColumn>
<telerik:GridBoundColumn DataField="CategoryName" HeaderText="CategoryName" SortExpression="CategoryName"
  UniqueName="CategoryName" Display="false">
</telerik:GridBoundColumn>
````
````C#
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.FilterCommandName)
    {
        Pair command = (Pair)e.CommandArgument;
        if (command.Second.ToString() == "CategoryddColumn")
        {
            e.Canceled = true;
            GridFilteringItem filter = (GridFilteringItem)e.Item;
            ((filter["CategoryName"].Controls[0]) as TextBox).Text = ((filter["CategoryddColumn"].Controls[0]) as TextBox).Text;
            command.Second = "CategoryName";
            filter.FireCommandEvent("Filter", new Pair(command.First, "CategoryName"));
        }
    }
}
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{  
    if (e.Item is GridFilteringItem) 
    {  
        GridFilteringItem item = e.Item as GridFilteringItem; 
        ((item["CategoryddColumn"].Controls[0]) as TextBox).Text = ((item["CategoryName"].Controls[0]) as TextBox).Text; 
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
    If e.CommandName = RadGrid.FilterCommandName Then
        Dim command As Pair = CType(e.CommandArgument, Pair)
        If command.Second.ToString = "CategoryddColumn" Then
            e.Canceled = True
            Dim filter As GridFilteringItem = CType(e.Item, GridFilteringItem)
 CType(filter("CategoryName").Controls(0), TextBox).Text = CType(filter("CategoryddColumn").Controls(0)), TextBox).Text   
            command.Second = "CategoryName"
            filter.FireCommandEvent("Filter", New Pair(command.First, "CategoryName"))
        End If
    End If
End Sub
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridFilteringItem Then
        Dim item As GridFilteringItem = TryCast(e.Item, GridFilteringItem)
        TryCast(item("CategoryddColumn").Controls(0), TextBox).Text = TryCast(item("CategoryName").Controls(0), TextBox).Text
    End If
End Sub
````


* Use **GridTemplateColumn** instead of **GridDropDownColumn**. You can add a **DropDownList** in its **EditItemTemplate** to simulate the **GridDropDownColumn**.

>note As RadGrid can only be filtered by fields in its DataSource, these work arounds are only valid when the ListTextField of the GridDropDownColumn is a field from the control's assigned data source.
>

