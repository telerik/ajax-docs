---
title: OnClientDropDownOpening
page_title: OnClientDropDownOpening | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: OnClientDropDownOpening
slug: autocompletebox/client-side-programming/events/onclientdropdownopening
tags: onclientdropdownopening
published: True
position: 0
---

# OnClientDropDownOpening



## 

The **OnClientDropDownOpening** client-side event occurs right before the drop-down containerof RadAutoCompleteBox is opened.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following two methods:

* **get_cancel()** - returns a boolean value indicating whether the event has been canceled.

* **set_cancel(boolean)** - cancels the event depending on the value passed as an argument.

This event is used in scenarios when operations need to be performed to RadAutoCompleteBox before opening the drop-down container, or when the opening need to be canceled.

````JavaScript
<script type="text/javascript">
	function dropDownOpening(sender, eventArgs) {
		eventArgs.set_cancel(true);
		alert(eventArgs.get_cancel());
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" OnClientDropDownOpening="dropDownOpening"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
