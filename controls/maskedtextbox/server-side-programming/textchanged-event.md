---
title: TextChanged Event
page_title: TextChanged Event | RadMaksedTextBox for ASP.NET AJAX Documentation
description: TextChanged Event
slug: radmaskedtextbox/server-side-programming/textchanged-event
tags: textchanged,event
published: True
position: 1
---

# TextChanged Event



All **RadInput** controls provide the **TextChanged** server event,which is raised when the **AutoPostBack** property is set to **true**, the user types valid entry, and the input loses focus.

The **TextChanged** event only occurs if the value of the input control actually changes. If the user changes the string in the input control but does not actually change the value, the **TextChanged** event does not occur.




The **TextChanged** event handler receives two arguments:

1. The **RadInput** control whose value was just changed. This argument is of type object, but can be cast to the appropriate type.

1. An **EventArgs** object.

Use the **TextChanged** event handler to respond to changes in the control's text:



````C#
protected void RadInput_TextChanged(object sender, EventArgs e)
{
	 if (sender is RadMaskedTextBox)
	{
		RadMaskedTextBox mtb = (RadMaskedTextBox)sender;
		HttpCookie = Response.Cookies.Get(mtb.TextWithLiterals);
		Button1.Enabled = (HttpCookie != null);
	}

}
````
````VB.NET
Protected Sub RadInput_TextChanged(ByVal sender As Object, ByVal e As EventArgs) Handles RadMaskedTextBox1.TextChanged, RadNumericTextBox1.TextChanged, RadMaskedTextBox1.TextChanged, RadDateInput.TextChanged
	If TypeOf sender Is RadMaskedTextBox Then
		Dim mtb As RadMaskedTextBox = DirectCast(sender, RadMaskedTextBox)
		HttpCookie = Response.Cookies.[Get](mtb.TextWithLiterals)
		Button1.Enabled = (HttpCookie <> Nothing)
	End If
End Sub
````


# See Also

 * [Getting and Setting Values]({%slug radmaskedtextbox/features/getting-and-setting-values%})

 * [Client-side programming Overview]({%slug radmaskedtextbox/client-side-programming/events/overview%})

