---
title: Getting and Setting Values
page_title: Getting and Setting Values | RadNumericTextBox for ASP.NET AJAX Documentation
description: Getting and Setting Values
slug: numerictextbox/features/getting-and-setting-values
tags: getting,and,setting,values
published: True
position: 3
---

# Getting and Setting Values



On the server-side, each **RadInput** control uses a different property to represent its value. The following table lists the property to use to get or set the value of a **RadNumericTextBox** control:


>caption  

| RadInput Control | Property | Type |
| ------ | ------ | ------ |

|RadNumericTextBox|Value, DbValue (in data-bound context)|Nullable Integer object|

##Value Properties

The RadNumericTextBox** has the following properties:
* The **Value** property sets the control's value.

* The **DisplayText** property allows you to set the display value from the Server to a different value from the actual value. Similar to the empty message, but shown even if the input is not empty. This text will be cleared once the user changes the input value.

* The **ValidationText** is a read-only property which returns the value used to validate the entered data. This is the number with the specific decimal mark corresponding to currently active culture


## Server-side


The **RadNumericTextBox** control uses the **Value** property to get or set its value. The following code examples show how to read the value of one **RadNumericTextBox** control called "RadNumericTextBox2" and use it to set the value of another, "RadNumericTextBox1".

## Server-side



````C#

protected void Page_Load(object sender, EventArgs e)
{
	RadNumericTextBox1.Value = RadNumericTextBox2.Value + 1;
}
	
````
````VB.NET
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	RadNumericTextBox1.Value = RadNumericTextBox2.Value + 1
End Sub
	
````


## Client-side

````JavaScript
	
function CopyNumericValue()
{
	var radNumericTextBox1 = $find("<%= RadNumericTextBox1.ClientID %>");
	var radNumericTextBox2 = $find("<%= RadNumericTextBox2.ClientID %>");
	radNumericTextBox1.set_value(radNumericTextBox2.get_value() + 1);
}
	
````


