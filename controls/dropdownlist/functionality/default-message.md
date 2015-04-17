---
title: Default Message
page_title: Default Message | UI for ASP.NET AJAX Documentation
description: Default Message
slug: dropdownlist/functionality/default-message
tags: default,message
published: True
position: 1
---

# Default Message



**Default Message** property of the RadDropDownList enables the ability to set control's text if no item is selected. The Default Message property could be very useful, when one needs to provide more information about the content of the RadDropDownList. This text is not visible when the control gets the focus and appears again on blur if no item is selected.

## Setting the Default Message in the markup code

````ASPNET
	    <telerik:RadDropDownList ID="RadDropDownList1"
	         runat="server"
	         AutoPostBack="true"
	         DefaultMessage="Select an item">
	    </telerik:RadDropDownList>
````



## Setting the Default Messagee server-side



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadDropDownList1.DefaultMessage = "Select an item";
	    }
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	
	        RadDropDownList1.DefaultMessage = "Select an item"
	
	    End Sub
	
	
````


## Setting the Default Message client-side

````JavaScript
	        var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
	        dropdownlist.set_defaultMessage("Select an item");
````



Additionally, you can get the **Default Message** property client-side by calling the **get_defaultMessage()** method of the dropdownlist.
