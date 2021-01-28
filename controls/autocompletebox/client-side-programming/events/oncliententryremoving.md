---
title: OnClientEntryRemoving
page_title: OnClientEntryRemoving - RadAutoCompleteBox
description: Check our Web Forms article about OnClientEntryRemoving.
slug: autocompletebox/client-side-programming/events/oncliententryremoving
tags: oncliententryremoving
published: True
position: 6
---

# OnClientEntryRemoving



## 

The **OnClientEntryRemoving** client-side event occurs right before an entry is removed from the Entry collection of RadAutoCompleteBox.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following three methods:

* **get_cancel()** - returns a boolean value indicating whether the event has been canceled.

* **set_cancel(boolean)** - cancels the event depending on the value passed as an argument.

* **get_entry()** - returns the entry which is about to be removed from the Entry collection.

>important The **OnClientEntryRemoving** client-side event is fired only when the input type of RadAutoCompleteBox is set to " **Token** ".
>


This event is used in scenarios when operations need to be performed to RadAutoCompleteBox right before an entry is removed from the Entry collection, or when the entry's removing needs to be canceled.

````JavaScript
<script type="text/javascript">
	function entryRemoving(sender, eventArgs) {
		alert("An entry with Text='" + eventArgs.get_entry().get_text() + "' is about to be removed.");
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" OnClientEntryRemoving="entryRemoving"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID" InputType="Token">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
