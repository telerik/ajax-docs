---
title: OnEntryAdded
page_title: OnEntryAdded | UI for ASP.NET AJAX Documentation
description: OnEntryAdded
slug: autocompletebox/server-side-programming/events/onentryadded
tags: onentryadded
published: True
position: 0
---

# OnEntryAdded



## 

The __EntryAdded__ event occurs when an entry is added and InputType="Token" is set for RadAutoCompleteBox.

The __EntryAdded__ event handler receives two arguments:

1. The __RadAutoCompleteBox__ object. This argument is of type object, but can be cast to the __RadAutoCompleteBox__ type.

1. An AutoCompleteEntryEventArgs object. This object has an __Entry__ property of type AutoCompleteBoxEntry.

>tabbedCode

````C#
	
		protected void RadAutoCompleteBox1_EntryAdded(object sender, AutoCompleteEntryEventArgs e)
		{
			Label1.Text = e.Entry.Text + " was added.";
		}
	
````



````VB.NET
	
	    Protected Sub RadAutoCompleteBox1_EntryAdded(sender As Object, e As AutoCompleteEntryEventArgs)
	        Label1.Text = e.Entry.Text + " was added."
	    End Sub
	
````


>end

# See Also

 * [OnDropDownTemplateNeeded]({%slug autocompletebox/server-side-programming/events/ondropdowntemplateneeded%})

 * [OnEntryRemoved]({%slug autocompletebox/server-side-programming/events/onentryremoved%})

 * [OnTextChanged]({%slug autocompletebox/server-side-programming/events/ontextchanged%})
