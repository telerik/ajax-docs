---
title: Getting and Setting Values
page_title: Getting and Setting Values | RadDateInput for ASP.NET AJAX Documentation
description: Getting and Setting Values
slug: raddateinput/features/getting-and-setting-values
tags: getting,and,setting,values
published: True
position: 3
---

# Getting and Setting Values



On the server-side, each **RadInput** control uses a different property to represent its value. The following table lists the property to use to get or set the value of a **RadDateInput** control:


>caption  

| RadInput Control | Property | Type |
| ------ | ------ | ------ |

|RadDateInput|SelectedDate, DbSelectedDate (in data-bound context)|Nullable DateTime object|

## Common Value Properties

All of the four RadInput controls including the RadDateInput have the following common properties:

* The **DisplayText** property allows you to set the display value from the Server to a different value from the actual value. Similar to the empty message, but shown even if the input is not empty. This text will be cleared once the user changes the input value.

* The **ValidationText** is a read-only property which returns the the date in universal format ( “yyyy-MM-dd-HH-mm-ss” )


## RadDateInput

The **RadDateInput** control uses the **SelectedDate** property to get or set its value. The following code examples show how to read the value of one **RadDateInput** control called "RadDateInput2" and use it to set the value of another, "RadDateInput1".

## Server-side



````C#

protected void Page_Load(object sender, EventArgs e)
{
	RadDateInput1.SelectedDate = RadDateInput2.SelectedDate;
}
	
````
````VB.NET
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	RadDateInput1.SelectedDate = RadDateInput2.SelectedDate
End Sub
	
````


## Client-side

````JavaScript
	
function CopyDateValue()
{
	var radDateInput1 = $find("<%= RadDateInput1.ClientID %>");
	var radDateInput2 = $find("<%= RadDateInput2.ClientID %>");
	radDateInput1.set_selectedDate(radDateInput2.get_selectedDate());
}
	
````


# See Also

 * [Using Input Controls Inside Data-Bound Controls]({%slug raddateinput/how-to/using-input-controls-inside-data-bound-controls%})
