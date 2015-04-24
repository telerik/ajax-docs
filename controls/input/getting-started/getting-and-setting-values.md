---
title: Getting and Setting Values
page_title: Getting and Setting Values | RadInput for ASP.NET AJAX Documentation
description: Getting and Setting Values
slug: input/getting-started/getting-and-setting-values
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
|RadNumericTextBox|Value, DbValue (in data-bound context)|Nullable Integer object|
|RadDateInput|SelectedDate, DbSelectedDate (in data-bound context)|Nullable DateTime object|
|RadMaskedTextBox|Text TextWithLiterals TextWithPrompt TextWithPromptAndLiterals|String|
|RadMaskedTextBox|TextWithLiterals TextWithPrompt TextWithPromptAndLiterals|String|
|RadMaskedTextBox|TextWithPrompt TextWithPromptAndLiterals|String|
|RadMaskedTextBox|TextWithPromptAndLiterals|String|
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



## RadNumericTextBox

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



## RadMaskedTextBox

The **RadMaskedTextBox** control uses several properties to represent its value, depending on whether you want to include the literal characters from the mask and whether you want to include prompt characters where the user has not yet entered any values. In addition, the property names differ, depending on whether you are using the server-side or client-side object.

On the server side, you can only set the properties that do not include prompt characters. The server-side properties are

* **Text**: the text the user entered into the control. This value does not include any literal characters in the mask or prompt characters.

* **TextWithLiterals**: the text the user entered, plus any literal characters in the mask, but no prompt characters.

* **TextWithPrompt**: the text the user entered, with prompt characters for any characters the user has not yet entered, but with none of the literal characters from the mask. This property is read only.

* **TextWithPromptAndLiterals**: The value as it appears in the control, including the text the user entered plus any prompt characters for characters the user has not yet entered and any literal characters that come from the mask. This property is read only.

On the client side, the properties for the **RadMaskedTextBox** value use the name "**value**" rather than "**Text**".There is no client-side analog to the **TextWithPrompt** property. Only the **value** property (unadorned with prompts or literals) can be set. The client-side properties are

* **get_value**, **set_value**: the text the user entered into the control. This value does not include any literal characters in the mask or prompt characters.

* **get_valueWithLiterals**: the text the user entered, plus any literal characters in the mask, but no prompt characters.

* **get_valueWithPromptAndLiterals**: the value as it appears in the control, including any prompt characters and literal characters from the mask.

The following code examples show how to read the value of one **RadMaskedTextBox** control called "RadMaskedTextBox2" and use it to set the value of another, "RadMaskedTextBox1".

## Server-side



````C#

protected void Page_Load(object sender, EventArgs e)
{
	RadMaskedTextBox1.Text = RadMaskedTextBox2.Text;
}
	
````
````VB.NET
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	RadMaskedTextBox1.Text = RadMaskedTextBox2.Text
End Sub
	
````


## Client-side

````JavaScript
	
function CopyUnMaskedValue()
{
	var radMaskedTextBox1 = $find("<%= RadMaskedTextBox1.ClientID %>");
	var radMaskedTextBox2 = $find("<%= RadMaskedTextBox2.ClientID %>");
	radMaskedTextBox1.set_value(radMaskedTextBox2.get_value());
}
	
````



# See Also

 * [Using Input Controls Inside Data-Bound Controls]({%slug input/how-to/using-input-controls-inside-data-bound-controls%})
