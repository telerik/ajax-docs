---
title: Checked State
page_title: Checked State | RadRadioButtonList for ASP.NET AJAX Documentation
description: Checked State
slug: radiobuttonlist/functionality/checked-state
tags: checked,state
published: True
position: 0
---

# Checked State

This help article showcases how to check/uncheck the **RadRadioButtonList** control on the server-side/client-side.

* [Get/Set Checked State Server-Side](#getset-checked-state-server-side)

* [Get/Set Checked State Client-Side](#getset-checked-state-client-side)

## Get/Set Checked State Server-Side

You can get/set the checked state of the **RadRadioButtonList** control on the server-side through the `Checked` property. 

>tip The `Checked` property takes a nullable boolean. When a null value is set, the `Checked` value will default to false. This is useful for data-binding scenarios when the `Checked` property is bound to a data source field of nullable boolean type.

>caption Example 1: Check RadRadioButtonList in the markup. 

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" Text="I agree" Checked="true"></telerik:RadRadioButtonList>
```` 

>caption Example 2: Get/Set the **Checked** property from the server-side.

````C#
protected void Page_Init(object sender, EventArgs e)
{
	bool isChecked = RadRadioButtonList1.Checked;
	RadRadioButtonList1.Checked = !isChecked;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	Dim isChecked As Boolean = RadRadioButtonList1.Checked
	RadRadioButtonList1.Checked = Not isChecked
End Sub

````

## Get/Set Checked State Client-Side

To get/set the checked state of the **RadRadioButtonList** control on the client-side you can use the `get_checked()` and `set_checked()` properties of the control.

>caption Example 3: Toggle the initial checked state of RadRadioButtonList. 

````JavaScript
function pageLoad() {
	var checkBox = $find("<%=RadRadioButtonList1.ClientID%>");
	var isChecked = checkBox.get_checked();
	checkBox.set_checked(!isChecked);
}
````

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" Text="I agree" Checked="true"></telerik:RadRadioButtonList>
```` 


## See Also
 
 * [Getting Started]({%slug radiobuttonlist/getting-started%})

 * [Server-Side API]({%slug radiobuttonlist/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug radiobuttonlist/client-side-programming/overview%})
