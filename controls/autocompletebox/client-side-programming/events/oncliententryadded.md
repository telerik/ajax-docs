---
title: OnClientEntryAdded
page_title: OnClientEntryAdded | UI for ASP.NET AJAX Documentation
description: OnClientEntryAdded
slug: autocompletebox/client-side-programming/events/oncliententryadded
tags: oncliententryadded
published: True
position: 5
---

# OnClientEntryAdded



## 

The **OnClientEntryAdded** client-side event occurs immediately after an item from the drop-down containeris added to the Entry collection of RadAutoCompleteBox.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following method:

* **get_entry()** - returns the item added into the Entry collection.

>important The **OnClientEntryAdded** client-side event is fired only when the input type of RadAutoCompleteBox is set to " **Token** ".
>


This event is used in scenarios when operations need to be preformed to RadAutoCompleteBox right after an item is added to the Entry collection.

````JavaScript
<script type="text/javascript">
	function entryAdded(sender, eventArgs) {
		alert("An item with Text='" + eventArgs.get_entry().get_text() + "' has just been selected.");
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" OnClientEntryAdded="entryAdded"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID" InputType="Token">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
