---
title: Custom Filter Options with Handling
page_title: Custom Filter Options with Handling | RadGrid for ASP.NET AJAX Documentation
description: Custom Filter Options with Handling
slug: grid/how-to/filtering/custom-filter-options-with-handling
previous_url: grid/functionality/filtering/how-to/custom-filter-options-with-handling
tags: custom,filter,options,with,handling
published: True
position: 13
---

# Custom Filter Options with Handling



##

You can replace the items in the filtering menu with your own custom options, and add an event handler filter the records based on your custom filter functions. To accomplish this goal:

1. In the **Page_Init** event handler,
	1. Clear the **FilterMenu.Items** collection.
	2. Create your own menu items, setting their **Text** and **Value** properties to reflect your custom filtering options.
	3. Attach an **OnClick** event handler of the filtering menu (RadContextMenu).
2. In the **OnClick** event handler, filter the data based on your custom filter function. You can do this in two ways:
	* If the filter function is not one that is supported by the grid's built-in filtering mechanism, rebind the grid to a newly filtered data set.
	* If the filter function can be handled using the grid's built-in filtering mechanism,
		1. Get a reference to the current **GridFilteringItem**.
		2. Call its **FireComandEvent** method. The **FireCommandEvent** method takes two arguments, the event name ("Filter") and a pair containing the filter function name and column name.

The following example illustrates this technique by substituting a single filter item that uses one of the built-in filter functions:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AllowFilteringByColumn="True"
  Skin="WebBlue">
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
      SelectCommand="SELECT * FROM [Customers]" >
</asp:SqlDataSource>
````

In the code-behind:

````C#
protected void Page_Init(object sender, System.EventArgs e)
{
    RadGrid1.FilterMenu.Items.Clear();
    GridFilterMenu filterMenu = RadGrid1.FilterMenu;
    RadMenuItem menuItem = new RadMenuItem();
    RadGrid1.FilterMenu.Items.Add(menuItem);
    menuItem.Text = "Custom-Text (Contains)";
    menuItem.Value = "Contains";
    filterMenu.ItemClick += new RadMenuEventHandler(filterMenu_ItemClick);
}
protected void filterMenu_ItemClick(object sender, RadMenuEventArgs e)
{
    GridFilteringItem filterItem = RadGrid1.MasterTableView.GetItems(GridItemType.FilteringItem)[0] as GridFilteringItem;
    filterItem.FireCommandEvent("Filter", new Pair(e.Item.Value, e.Item.Attributes["columnUniqueName"]));
}
````
````VB
  Protected Sub Page_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Init
      RadGrid1.FilterMenu.Items.Clear()
      Dim filterMenu As GridFilterMenu = RadGrid1.FilterMenu
      Dim menuItem As RadMenuItem = New RadMenuItem()
      RadGrid1.FilterMenu.Items.Add(menuItem)
      menuItem.Text = "Custom-Text (Contains)"
      menuItem.Value = "Contains"
AddHandler filterMenu.ItemClick, Address Of filterMenu_ItemClick
  End Sub
  Private Sub filterMenu_ItemClick(ByVal sender As Object, ByVal e As RadMenuEventArgs)
      Dim filterItem As GridFilteringItem = CType(RadGrid1.MasterTableView.GetItems(GridItemType.FilteringItem)(0), GridFilteringItem)
      filterItem.FireCommandEvent("Filter", New Pair(e.Item.Value, e.Item.Attributes("columnUniqueName")))
  End Sub
````


