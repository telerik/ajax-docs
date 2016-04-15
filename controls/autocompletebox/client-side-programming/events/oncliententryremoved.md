---
title: OnClientEntryRemoved
page_title: OnClientEntryRemoved | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: OnClientEntryRemoved
slug: autocompletebox/client-side-programming/events/oncliententryremoved
tags: oncliententryremoved
published: True
position: 7
---

# OnClientEntryRemoved



## 

The **OnClientEntryRemoved** client-side event occurs immediately after an item from the drop-down containerhas been removed from the Entry collection of RadAutoCompleteBox.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following method:

* **get_entry()** - returns the item removed from the Entry collection.

>important The **OnClientEntryRemoved** client-side event is fired only when the input type of RadAutoCompleteBox is set to " **Token** ".
>


This event is used in scenarios when operations need to be preformed to RadAutoCompleteBox right after an item is removed from the Entry collection.

````JavaScript
<script type="text/javascript">
	function entryRemoved(sender, eventArgs) {
		alert("An entry with Text='" + eventArgs.get_entry().get_text() + "' has just been removed.");
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" OnClientEntryRemoved="entryRemoved"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID" InputType="Token">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
