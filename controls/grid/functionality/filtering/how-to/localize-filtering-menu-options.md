---
title: Localize Filtering Menu Options
page_title: Localize Filtering Menu Options | RadGrid for ASP.NET AJAX Documentation
description: Localize Filtering Menu Options
slug: grid/functionality/filtering/how-to/localize-filtering-menu-options
tags: localize,filtering,menu,options
published: True
position: 1
---

# Localize Filtering Menu Options



## Localize default filtering menu

You can change the text of the items in the filter menu in the code-behind. This is useful if you want to localize the filter function names or change them to display your own custom text.

To change the text of the items in the filter menu, add code to the **Page_Load** event handler for your page:

1. Use the **FilterMenu** property of the grid to access the filtering menu. There is a single filtering menu server-side, which is cloned for each of the separate filter menus that appear client-side.

1. Use the **Items** property of the filtering menu to access the individual menu items. Each item in the filter menu server-side object is of type **RadMenuItem**.

1. Use the Text property of the grid menu items to set the new text for the menu item.

The following example illustrates this process:



````C#
protected void Page_Load(object sender, System.EventArgs e)
{
    GridFilterMenu menu = RadGrid1.FilterMenu;
    foreach (RadMenuItem item in menu.Items)
    {    //change the text for the "StartsWith" menu item  
        if (item.Text == "StartsWith")
        {
            item.Text = "your_custom_localized_string";
        }
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    Dim Menu As GridFilterMenu = RadGrid1.FilterMenu
    Dim item As RadMenuItem
    For Each item In Menu.Items
        'change the text for the StartsWith menu item
        If item.Text = "StartsWith" Then
            item.Text = "your_custom_localized_string"
        End If
    Next
End Sub
````

## Localize Excel-like filtering menu

Localization of the Excel-like filtering is pretty much the same as [Localize HeaderContextMenu items]({%slug grid/columns/header-context-menu %}). For this purpose, you can hook **OnPreRenderComlete** event, loop through the menu items and change their text. The following code snippet demonstrates how to achieve that.

````C#
protected override void OnPreRenderComplete(EventArgs e)
{
	RadContextMenu menu = RadGrid1.HeaderContextMenu;

	foreach (RadMenuItem item in menu.Items)
	{
		switch (item.Value)
		{
			case "SortAsc":
				item.Text = "Sort ascending";
				break;
			case "SortDesc":
				item.Text = "Sort descending";
				break;
			case "SortNone":
				item.Text = "Clear sorting";
				break;
			case "GroupBy":
				item.Text = "Group by";
				break;
			case "UnGroupBy":
				item.Text = "Ungroup";
				break;
			case "ColumnsContainer":
				item.Text = "Show/Hide columns";
				break;
			case "FilterMenuParent":
				//first condition label
				LiteralControl lcShowRows = item.Controls[0] as LiteralControl;
				lcShowRows.Text = "<label class=\"rgHCMShow\">Show rows that:</label>";
				//first condition RadComboBox
				RadComboBox firstConditionCombo = item.FindControl("HCFMRCMBFirstCond") as RadComboBox;
				firstConditionCombo.Text = "No filter is selected";
				//second condition label
				LiteralControl lcAnd = item.Controls[3] as LiteralControl;
				lcAnd.Text = "<label class=\"rgHCMShow\">And also</label>";
				//second condition RadComboBox
				RadComboBox secondConditionCombo = item.FindControl("HCFMRCMBSecondCond") as RadComboBox;
				secondConditionCombo.Text = "No filter is selected";
				//filter button  
				Button btnFilter = item.FindControl("HCFMFilterButton") as Button;
				btnFilter.Text = "Apply filters";
				//clear filter button   
				Button btnClearFilter = item.FindControl("HCFMClearFilterButton") as Button;
				btnClearFilter.Text = "Clear filter";
				break;
		}
	}
	base.OnPreRenderComplete(e);
}
````
````VB
Protected Overrides Sub OnPreRenderComplete(e As EventArgs)
	Dim menu As RadContextMenu = RadGrid1.HeaderContextMenu

	For Each item As RadMenuItem In menu.Items
		Select Case item.Value
			Case "SortAsc"
				item.Text = "Sort ascending"
				Exit Select
			Case "SortDesc"
				item.Text = "Sort descending"
				Exit Select
			Case "SortNone"
				item.Text = "Clear sorting"
				Exit Select
			Case "GroupBy"
				item.Text = "Group by"
				Exit Select
			Case "UnGroupBy"
				item.Text = "Ungroup"
				Exit Select
			Case "ColumnsContainer"
				item.Text = "Show/Hide columns"
				Exit Select
			Case "FilterMenuParent"
				'first condition label
				Dim lcShowRows As LiteralControl = TryCast(item.Controls(0), LiteralControl)
				lcShowRows.Text = "<label class=""rgHCMShow"">Show rows that:</label>"
				'first condition RadComboBox
				Dim firstConditionCombo As RadComboBox = TryCast(item.FindControl("HCFMRCMBFirstCond"), RadComboBox)
				firstConditionCombo.Text = "No filter is selected"
				'second condition label
				Dim lcAnd As LiteralControl = TryCast(item.Controls(3), LiteralControl)
				lcAnd.Text = "<label class=""rgHCMShow"">And also</label>"
				'second condition RadComboBox
				Dim secondConditionCombo As RadComboBox = TryCast(item.FindControl("HCFMRCMBSecondCond"), RadComboBox)
				secondConditionCombo.Text = "No filter is selected"
				'filter button  
				Dim btnFilter As Button = TryCast(item.FindControl("HCFMFilterButton"), Button)
				btnFilter.Text = "Apply filters"
				'clear filter button   
				Dim btnClearFilter As Button = TryCast(item.FindControl("HCFMClearFilterButton"), Button)
				btnClearFilter.Text = "Clear filter"
				Exit Select
		End Select
	Next
	MyBase.OnPreRenderComplete(e)
End Sub
````



