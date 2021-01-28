---
title: OnEntryAdded
page_title: OnEntryAdded - RadAutoCompleteBox
description: Check our Web Forms article about OnEntryAdded.
slug: autocompletebox/server-side-programming/events/onentryadded
tags: onentryadded
published: True
position: 0
---

# OnEntryAdded



## 

The **EntryAdded** event occurs when an entry is added and InputType="Token" is set for RadAutoCompleteBox.

The **EntryAdded** event handler receives two arguments:

1. The **RadAutoCompleteBox** object. This argument is of type object, but can be cast to the **RadAutoCompleteBox** type.

1. An AutoCompleteEntryEventArgs object. This object has an **Entry** property of type AutoCompleteBoxEntry.



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


# See Also

 * [OnDropDownTemplateNeeded]({%slug autocompletebox/server-side-programming/events/ondropdowntemplateneeded%})

 * [OnEntryRemoved]({%slug autocompletebox/server-side-programming/events/onentryremoved%})

 * [OnTextChanged]({%slug autocompletebox/server-side-programming/events/ontextchanged%})
