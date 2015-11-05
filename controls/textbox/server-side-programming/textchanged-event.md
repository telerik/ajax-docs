---
title: TextChanged Event
page_title: TextChanged Event | RadTextBox for ASP.NET AJAX Documentation
description: TextChanged Event
slug: radtextbox/server-side-programming/textchanged-event
tags: textchanged,event
published: True
position: 1
---

# TextChanged Event



##

The **radtextbox** control provides the **TextChanged** server event,which is raised when the **AutoPostBack** property is set to **true**, the user types valid entry, and the input loses focus.

The **TextChanged** event only occurs if the value of the input control actually changes. If the user changes the string in the input control but does not actually change the value, the **TextChanged** event does not occur.



>note The postback request can be controlled for **RadTextBox** by using the [OnValueChanged]({%slug radtextbox/client-side-programming/events/onvaluechanged%}) client event of the control.
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
}
````
````VB.NET
Protected Sub RadInput_TextChanged(ByVal sender As Object, ByVal e As EventArgs) Handles RadTextBox1.TextChanged, RadNumericTextBox1.TextChanged, RadMaskedTextBox1.TextChanged, RadDateInput.TextChanged
	If TypeOf sender Is RadTextBox Then
		Dim tb As RadTextBox = DirectCast(sender, RadTextBox)
		Image1.ImageUrl = "~/Images/" + tb.Text + ".gif"
	End If
End Sub
````


# See Also

 * [Getting and Setting Values]({%slug radtextbox/features/getting-and-setting-values%})

 * [OnValueChanging]({%slug radtextbox/client-side-programming/events/onvaluechanging%})
