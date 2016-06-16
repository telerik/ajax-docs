---
title: OnTextChanged
page_title: OnTextChanged | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: OnTextChanged
slug: autocompletebox/server-side-programming/events/ontextchanged
tags: ontextchanged
published: True
position: 2
---

# OnTextChanged



## 

The **TextChanged** event occurs when the following steps are followed:

1. The **InputType="Text"** is set for the **RadAutoCompleteBox**;

1. The text in the input field has been changed (either one of the previously available entries has been removed or new text has been typed in);

1. An item from the results drop-down list has been selected (necessary only when the **AllowCustomEntry** of the **RadAutoCompleteBox** is not set or it is set to **"false"**);

1. The focus has been removed from the control's input element.


The **TextChanged** event handler receives two arguments:

1. The **RadAutoCompleteBox** object. This argument is of type object, but can be cast to the **RadAutoCompleteBox** type.

1. An AutoCompleteTextEventArgs object. This object has a **Text** property of type string.



````C#
	
protected void RadAutoCompleteBox1_TextChanged(object sender, AutoCompleteTextEventArgs e)
{
	Label1.Text = "Text changed to: " + e.Text;
}
	
````
````VB.NET
	
Protected Sub RadAutoCompleteBox1_TextChanged(sender As Object, e As AutoCompleteTextEventArgs)
	Label1.Text = "Text changed to: " + e.Text
End Sub
	
````


# See Also

 * [OnDropDownTemplateNeeded]({%slug autocompletebox/server-side-programming/events/ondropdowntemplateneeded%})

 * [OnEntryAdded]({%slug autocompletebox/server-side-programming/events/onentryadded%})

 * [OnEntryRemoved]({%slug autocompletebox/server-side-programming/events/onentryremoved%})
