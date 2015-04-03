---
title: OnClientEntryAdding
page_title: OnClientEntryAdding | UI for ASP.NET AJAX Documentation
description: OnClientEntryAdding
slug: autocompletebox/client-side-programming/events/oncliententryadding
tags: oncliententryadding
published: True
position: 4
---

# OnClientEntryAdding



## 

The __OnClientEntryAdding__ client-side event occurs right before an entry is added to theEntry collection of RadAutoCompleteBox.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following three methods:

* __get_cancel()__ - returns a boolean value indicating whether the event has been canceled.

* __set_cancel(boolean)__ - cancels the event depending on the value passed as an argument.

* __get_entry()__ - returns the entry which is about to be added into the Entry collection.

>important The __OnClientEntryAdding__ client-side event is fired only when the input type of RadAutoCompleteBox is set to " __Token__ ".
>


This event is used in scenarios when operations need to be performed to RadAutoCompleteBox before an entry is added to the Entry collection, or when the entry's adding needs to be canceled.

````JavaScript
		<script type="text/javascript">
			function entryAdding(sender, eventArgs) {
				alert("An item with Text='" + eventArgs.get_entry().get_text() + "' is about to be selected.");
			}
		</script>
````



````ASPNET
		<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" OnClientEntryAdding="entryAdding"
			DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID" InputType="Token">
		</telerik:RadAutoCompleteBox>
		<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
			SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
