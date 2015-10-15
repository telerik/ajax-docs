---
title: TextChanged Event
page_title: TextChanged Event | RadInput for ASP.NET AJAX Documentation
description: TextChanged Event
slug: input/server-side-programming/textchanged-event
tags: textchanged,event
published: True
position: 1
---

# TextChanged Event



## 

All **RadInput** controls provide the **TextChanged** server event,which is raised when the **AutoPostBack** property is set to **true**, the user types valid entry, and the input loses focus.

The **TextChanged** event only occurs if the value of the input control actually changes. If the user changes the string in the input control but does not actually change the value (for example, entering a date into **RadDateInput** using a different format or entering an out-of-range number that is automatically corrected to the old value by **RadNumericTextBox**), the **TextChanged** event does not occur.

>note Note that when using **RadNumericTextBox** , if a value is passed from the server with more digits after the decimal point than you have specified through the **NumberFormat.DecimalDigits** property, on postback the **TextChanged** event will fire, as the rounding done on the client by the RadNumericTextBox in fact changes the initial value. This would happen even when there was no user action on the textbox.
>


>note The postback request can be controlled for **RadDateInput** , **RadNumericTextBox** and **RadTextBox** by using the [OnValueChanged]({%slug input/client-side-programming/events/onvaluechanged%}) client event of the control.
>


The **TextChanged** event handler receives two arguments:

1. The **RadInput** control whose value was just changed. This argument is of type object, but can be cast to the appropriate type.

1. An **EventArgs** object.

Use the **TextChanged** event handler to respond to changes in the control's text:



````C#
protected void RadInput_TextChanged(object sender, EventArgs e)
{
	if (sender is RadTextBox)
	{
		RadTextBox tb = (RadTextBox)sender;
		Image1.ImageUrl = @"~/Images/" + tb.Text + ".gif";
	}
	else if (sender is RadNumericTextBox)
	{
		RadNumericTextBox ntb = (RadNumericTextBox)sender;
		RadComboBox1.SelectedIndex = ntb.Value;
	}
	else if (sender is RadMaskedTextBox)
	{
		RadMaskedTextBox mtb = (RadMaskedTextBox)sender;
		HttpCookie = Response.Cookies.Get(mtb.TextWithLiterals);
		Button1.Enabled = (HttpCookie != null);
	}
	else if (sender is RadDateInput)
	{
		RadDateInput di = (RadDateInput)sender;
		RadCalendar1.SelectedDate = di.SelectedDate;
	}
}
````
````VB.NET
Protected Sub RadInput_TextChanged(ByVal sender As Object, ByVal e As EventArgs) Handles RadTextBox1.TextChanged, RadNumericTextBox1.TextChanged, RadMaskedTextBox1.TextChanged, RadDateInput.TextChanged
	If TypeOf sender Is RadTextBox Then
		Dim tb As RadTextBox = DirectCast(sender, RadTextBox)
		Image1.ImageUrl = "~/Images/" + tb.Text + ".gif"
	ElseIf TypeOf sender Is RadNumericTextBox Then
		Dim ntb As RadNumericTextBox = DirectCast(sender, RadNumericTextBox)
		RadComboBox1.SelectedIndex = ntb.Value
	ElseIf TypeOf sender Is RadMaskedTextBox Then
		Dim mtb As RadMaskedTextBox = DirectCast(sender, RadMaskedTextBox)
		HttpCookie = Response.Cookies.[Get](mtb.TextWithLiterals)
		Button1.Enabled = (HttpCookie <> Nothing)
	ElseIf TypeOf sender Is RadDateInput Then
		Dim di As RadDateInput = DirectCast(sender, RadDateInput)
		RadCalendar1.SelectedDate = di.SelectedDate
	End If
End Sub
````


# See Also

 * [Getting and Setting Values]({%slug input/getting-started/getting-and-setting-values%})

 * [Client-side programming Overview]({%slug input/client-side-programming/events/overview%})

 * [OnValueChanging]({%slug input/client-side-programming/events/onvaluechanging%})
