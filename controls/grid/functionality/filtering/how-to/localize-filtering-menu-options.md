---
title: Localize Filtering Menu Options
page_title: Localize Filtering Menu Options | UI for ASP.NET AJAX Documentation
description: Localize Filtering Menu Options
slug: grid/functionality/filtering/how-to/localize-filtering-menu-options
tags: localize,filtering,menu,options
published: True
position: 1
---

# Localize Filtering Menu Options



## 

You can change the text of the items in the filter menu in the code-behind. This is useful if you want to localize the filter function names or change them to display your own custom text.

To change the text of the items in the filter menu, add code to the __Page_Load__ event handler for your page:

1. Use the __FilterMenu__ property of the grid to access the filtering menu. There is a single filtering menu server-side, which is cloned for each of the separate filter menus that appear client-side.

1. Use the __Items__ property of the filtering menu to access the individual menu items. Each item in the filter menu server-side object is of type __RadMenuItem__.

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
````VB.NET
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

