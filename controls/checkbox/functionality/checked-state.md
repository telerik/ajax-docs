---
title: Checked State
page_title: Checked State - RadCheckBox
description: Check our Web Forms article about Checked State.
slug: checkbox/functionality/checked-state
tags: checked,state
published: True
position: 0
---

# Checked State

This help article showcases how to check/uncheck the **RadCheckBox** control on the server-side/client-side.

* [Get/Set Checked State Server-Side](#getset-checked-state-server-side)

* [Get/Set Checked State Client-Side](#getset-checked-state-client-side)

## Get/Set Checked State Server-Side

You can get/set the checked state of the **RadCheckBox** control on the server-side through the `Checked` property. 

>tip The `Checked` property takes a nullable boolean. When a null value is set, the `Checked` value will default to false. This is useful for data-binding scenarios when the `Checked` property is bound to a data source field of nullable boolean type.

>caption Example 1: Check RadCheckBox in the markup. 

````ASP.NET
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" Text="I agree" Checked="true"></telerik:RadCheckBox>
```` 

>caption Example 2: Get/Set the **Checked** property from the server-side.

````C#
protected void Page_Init(object sender, EventArgs e)
{
	bool isChecked = RadCheckBox1.Checked;
	RadCheckBox1.Checked = !isChecked;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	Dim isChecked As Boolean = RadCheckBox1.Checked
	RadCheckBox1.Checked = Not isChecked
End Sub

````

## Get/Set Checked State Client-Side

To get/set the checked state of the **RadCheckBox** control on the client-side you can use the `get_checked()` and `set_checked()` properties of the control.

>caption Example 3: Toggle the initial checked state of RadCheckBox. 

````JavaScript
function pageLoad() {
	var checkBox = $find("<%=RadCheckBox1.ClientID%>");
	var isChecked = checkBox.get_checked();
	checkBox.set_checked(!isChecked);
}
````

````ASP.NET
<telerik:RadCheckBox ID="RadCheckBox1" runat="server" Text="I agree" Checked="true"></telerik:RadCheckBox>
```` 


## See Also
 
 * [Getting Started]({%slug checkbox/getting-started%})

 * [Server-Side API]({%slug checkbox/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug checkbox/client-side-programming/overview%})
