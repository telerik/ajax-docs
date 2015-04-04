---
title: OnEntryRemoved
page_title: OnEntryRemoved | UI for ASP.NET AJAX Documentation
description: OnEntryRemoved
slug: autocompletebox/server-side-programming/events/onentryremoved
tags: onentryremoved
published: True
position: 1
---

# OnEntryRemoved



## 

The __EntryRemoved__ event occurs when an entry is removed and InputType="Token" is set for RadAutoCompleteBox.

The __EntryRemoved__ event handler receives two arguments:

1. The __RadAutoCompleteBox__ object. This argument is of type object, but can be cast to the __RadAutoCompleteBox__ type.

1. An AutoCompleteEntryEventArgs object. This object has an __Entry__ property of type AutoCompleteBoxEntry.

>tabbedCode

````C#
	
		protected void RadAutoCompleteBox1_EntryRemoved(object sender, AutoCompleteEntryEventArgs e)
		{
			Label1.Text = e.Entry.Text + " was removed.";
		}
	
````
````VB.NET
	
	    Protected Sub RadAutoCompleteBox1_EntryRemoved(sender As Object, e As AutoCompleteEntryEventArgs)
	        Label1.Text = e.Entry.Text + " was removed."
	    End Sub
	
````
>end

# See Also

 * [OnEntryAdded]({%slug autocompletebox/server-side-programming/events/onentryadded%})

 * [OnDropDownTemplateNeeded]({%slug autocompletebox/server-side-programming/events/ondropdowntemplateneeded%})

 * [OnTextChanged]({%slug autocompletebox/server-side-programming/events/ontextchanged%})
