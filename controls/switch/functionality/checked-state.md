---
title: Checked State
page_title: Checked State - RadSwitch
description: Check our Web Forms article about Checked State.
slug: switch/functionality/checked-state
tags: checked,state
published: True
position: 0
---

# Checked State

This help article showcases how to check/uncheck the **RadSwitch** control on the server-side/client-side.

* [Get/Set Checked State Server-Side](#getset-checked-state-server-side)

* [Get/Set Checked State Client-Side](#getset-checked-state-client-side)

## Get/Set Checked State Server-Side

You can get/set the checked state of the **RadSwitch** control on the server-side through the `Checked` property. 

>tip The `Checked` property takes a nullable boolean. When a null value is set, the `Checked` value will default to false. This is useful for data-binding scenarios when the `Checked` property is bound to a data source field of nullable boolean type.

>caption Example 1: Check RadSwitch in the markup. 

````ASP.NET
<telerik:RadLabel ID="Label1" runat="server" AssociatedControlID="RadSwitch1" Text="I agree"></telerik:RadLabel>
<telerik:RadSwitch ID="RadSwitch1" runat="server" Checked="true"></telerik:RadSwitch>
```` 

>caption Example 2: Get/Set the **Checked** property from the server-side.

````C#
protected void Page_Init(object sender, EventArgs e)
{
	bool isChecked = RadSwitch1.Checked;
	RadSwitch1.Checked = !isChecked;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs)
	Dim isChecked As Boolean = RadSwitch1.Checked
	RadSwitch1.Checked = Not isChecked
End Sub

````

## Get/Set Checked State Client-Side

To get/set the checked state of the **RadSwitch** control on the client-side you can use the `get_checked()` and `set_checked()` properties of the control.

>caption Example 3: Toggle the initial checked state of RadSwitch. 

````JavaScript
function pageLoad() {
	var switchObj = $find("<%=RadSwitch1.ClientID%>");
	var isChecked = switchObj.get_checked();
	switchObj.set_checked(!isChecked);
}
````

````ASP.NET
<telerik:RadLabel ID="Label1" runat="server" AssociatedControlID="RadSwitch1" Text="I agree"></telerik:RadLabel>
<telerik:RadSwitch ID="RadSwitch1" runat="server" Checked="true"></telerik:RadSwitch>
```` 


## See Also
 
 * [Getting Started]({%slug switch/getting-started%})

 * [Server-Side API]({%slug switch/server-side-programming/properties-and-events%})
 
 * [Client-Side API]({%slug switch/client-side-programming/overview%})
