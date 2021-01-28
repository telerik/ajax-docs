---
title: Getting and Setting Values
page_title: Getting and Setting Values - RadTextBox
description: Check our Web Forms article about Getting and Setting Values.
slug: radtextbox/features/getting-and-setting-values
tags: getting,and,setting,values
published: True
position: 3
---

# Getting and Setting Values



On the server-side, each **RadInput** control uses a different property to represent its value. The following table lists the property to use to get or set the value of a **RadInput** control:


>caption  

| RadInput Control | Property | Type |
| ------ | ------ | ------ |
|RadTextBox|Text|String|

## Common Value Properties

All of the four RadInput controls ( **RadTextBox, RadMaskedTextBox, RadDateInput, and RadNumericTextBox**)have the following common properties:

* The **DisplayText** property allows you to set the display value from the Server to a different value from the actual value. Similar to the empty message, but shown even if the input is not empty. This text will be cleared once the user changes the input value.

* The **ValidationText** is a read-only property which returns the value used to validate the entered data. For the four types it returns respectively:

	* **RadTextBox** - the text itself

	* **RadMaskedTextBox** - **TextWithLiterals** value( the text the user entered, plus any literal characters in the mask, but no prompt characters. )

	* **RadNumericTextBox** - the number with the specific decimal mark corresponding to currently active culture

	* **RadDateInput** – the date in universal format ( “yyyy-MM-dd-HH-mm-ss” )

## RadTextBox

On the server side, the **RadTextBox** control uses the **Text** property to get or set its value. On the client-side, it uses the **value** property instead. The following code examples show how to read the text of one **RadTextBox** control called "RadTextBox2" and use it to set the text of another, "RadTextBox1".

## Server-side



````C#

protected void Page_Load(object sender, EventArgs e)
{
	RadTextBox1.Text = RadTextBox2.Text;
}

````
````VB.NET

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	RadTextBox1.Text = RadTextBox2.Text
End Sub

````


## Client-side

````JavaScript
function CopyValue()
{
	var radTextBox1 = $find("<%= RadTextBox1.ClientID %>");
	var radTextBox2 = $find("<%= RadTextBox2.ClientID %>");
	radTextBox1.set_value(radTextBox2.get_value());
}

````





# See Also

 * [Using Input Controls Inside Data-Bound Controls]({%slug radtextbox/how-to/using-input-controls-inside-data-bound-controls%})
