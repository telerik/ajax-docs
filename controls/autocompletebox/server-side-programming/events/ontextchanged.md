---
title: OnTextChanged
page_title: OnTextChanged | UI for ASP.NET AJAX Documentation
description: OnTextChanged
slug: autocompletebox/server-side-programming/events/ontextchanged
tags: ontextchanged
published: True
position: 2
---

# OnTextChanged



## 

The __TextChanged__ event occurs when the text is changed and InputType="Text" is set for RadAutoCompleteBox.

The __TextChanged__ event handler receives two arguments:

1. The __RadAutoCompleteBox__ object. This argument is of type object, but can be cast to the __RadAutoCompleteBox__ type.

1. An AutoCompleteTextEventArgs object. This object has a __Text__ property of type string.

>tabbedCode

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
>end

# See Also

 * [OnDropDownTemplateNeeded]({%slug autocompletebox/server-side-programming/events/ondropdowntemplateneeded%})

 * [OnEntryAdded]({%slug autocompletebox/server-side-programming/events/onentryadded%})

 * [OnEntryRemoved]({%slug autocompletebox/server-side-programming/events/onentryremoved%})
