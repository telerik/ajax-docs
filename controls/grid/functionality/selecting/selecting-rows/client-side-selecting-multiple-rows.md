---
title: Client-side Selecting Multiple Rows
page_title: Client-side Selecting Multiple Rows | UI for ASP.NET AJAX Documentation
description: Client-side Selecting Multiple Rows
slug: grid/functionality/selecting/selecting-rows/client-side-selecting-multiple-rows
tags: client-side,selecting,multiple,rows
published: True
position: 3
---

# Client-side Selecting Multiple Rows



## 

__RadGrid__ allows users to select several rows at a time. By default, only one row can be selected at a time. To enable multi-row selection, set the grid's __AllowMultiRowSelection__ property to __True__.

When multi-row selection is enabled, clicking on a row still de-selects any other selected rows. Users can select multiple rows by holding the __Ctrl__ key down while clicking on a row:

![Selection of Rows client-side](images/grd_SelectRows.png)

By holding the __Shift__ key down while clicking, the grid selects all rows between the last selected row and the current click:

![](images/ShiftSelect.PNG)

Another way users can select multiple rows is by dragging around a set of rows. To enable this option, set the __ClientSettings.Selecting.EnableDragToSelectRows__ property to __True:__

![Area Selection](images/grd_AreaSelect.png)

>caution When using the drag functionality to select multiple RadGrid rows, it is highly recommended to set the __margin__ style of the < __form__ > HTML element to __zero__ . Otherwise a scrollbar flicker occurs during the selection in IE7 due to a browser-specific behavior.
> __CSS__ 
>form{ margin: 0;}
>


When multi-row selection is enabled, if you add a __GridClientSelectColumn__ to the grid, the header for the column contains a check box that selects or de-selects all items in the grid:

![](images/GridClientSelectColumn.PNG)

The selected items can be accessed by calling the __get_selectedItems()__ method of the __GridTableView__ client-side object (see the __Client-side API Reference__ section for more information).

You can set the properties for enabling client-side multi-row selection declaratively:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AllowMultiRowSelection="True">
	    <ClientSettings>
	      <Selecting AllowRowSelect="true" EnableDragToSelectRows="true" />
	    </ClientSettings>
	  </telerik:RadGrid>
````



You can also set these properties at runtime in the code-behind:



````C#
	    RadGrid1.AllowMultiRowSelection = true;
	    RadGrid1.ClientSettings.Selecting.AllowRowSelect = true;
	    RadGrid1.ClientSettings.Selecting.EnableDragToSelectRows = true;			
````
````VB.NET
	RadGrid1.AllowMultiRowSelection = true
	RadGrid1.ClientSettings.Selecting.AllowRowSelect = true
	RadGrid1.ClientSettings.Selecting.EnableDragToSelectRows = true
````


For a live example that demonstrates client-side multi-row selection, see [ Client-side row selection](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/Selecting/DefaultCS.aspx).
