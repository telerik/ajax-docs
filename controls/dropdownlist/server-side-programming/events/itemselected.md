---
title: ItemSelected
page_title: ItemSelected | UI for ASP.NET AJAX Documentation
description: ItemSelected
slug: dropdownlist/server-side-programming/events/itemselected
tags: itemselected
published: True
position: 1
---

# ItemSelected



## 

The __ItemSelected__ event occurs when the user selects an item, even if the item is already selected.

>caution The __ItemSelected__ event does not fire unless the __AutoPostBack__ property is __True__ .
>


The __ItemSelected__ event handler receives two arguments:

1. The __RadDropDownList__ that is loading items. This argument is of type object, but can be cast to the __RadDropDownList__ type.

1. An EventArgs object. This object has the following properties for identifying what has changed:

* __Index__ is the index of the item that was just selected.

* __Text__ is the text of the item that was just selected.

* __Value__ is the value of the item that was just selected.

Use the __ItemSelected__ event handler to respond in server-side code when the user changes the current selection:

````ASPNET
	    <telerik:RadDropDownList ID="RadDropDownList1"
	         runat="server"
	         AutoPostBack="true"
	         OnItemSelected="RadDropDownList1_ItemSelected">
	    </telerik:RadDropDownList>
````



>tabbedCode

````C#
	    protected void RadDropDownList1_ItemSelected(object sender, DropDownListEventArgs e)
	    {
	        Label1.Text = "You selected " + e.Text + " item";
	    }
````
````VB.NET
	    Protected Sub RadDropDownList1_ItemSelected(sender As Object, e As DropDownListEventArgs)
	        Label1.Text = "You selected " + e.Text + " item"
	    End Sub
````
>end
