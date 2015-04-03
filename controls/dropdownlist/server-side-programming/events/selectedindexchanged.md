---
title: SelectedIndexChanged
page_title: SelectedIndexChanged | UI for ASP.NET AJAX Documentation
description: SelectedIndexChanged
slug: dropdownlist/server-side-programming/events/selectedindexchanged
tags: selectedindexchanged
published: True
position: 2
---

# SelectedIndexChanged



## 

The __SelectedIndexChanged__ event occurs when the SelectedIndex has just changed.

>caution The __SelectedIndexChanged__ event does not fire unless the __AutoPostBack__ property is __True__ .
>


The __SelectedIndexChanged__ event handler receives two arguments:

1. The __RadDropDownList__ that is loading items. This argument is of type object, but can be cast to the __RadDropDownList__ type.

1. An EventArgs object. This object has the following properties for identifying what has changed:

* __Index__ is the index of the item that was just selected.

* __Text__ is the text of the item that was just selected.

* __Value__ is the value of the item that was just selected.

Use the __SelectedIndexChanged__ event handler to respond in server-side code when the user changes the current selection:

````ASPNET
	    <telerik:RadDropDownList ID="RadDropDownList1"
	         runat="server"
	         AutoPostBack="true"
	         OnSelectedIndexChanged="RadDropDownList1_SelectedIndexChanged">
	    </telerik:RadDropDownList>
````



>tabbedCode

````C#
	
	    protected void RadDropDownList1_SelectedIndexChanged(object sender, DropDownListEventArgs e)
	    {
	        Label1.Text = "You selected " + e.Text + " item";
	    }
	
````



````VB.NET
	
	    Private Sub RadDropDownList1_SelectedIndexChanged(ByVal o As Object, ByVal e As Telerik.Web.UI.DropDownListEventArgs)
	
	        Label1.Text = "You selected " + e.Text + " item"
	
	    End Sub
	
````


>end
