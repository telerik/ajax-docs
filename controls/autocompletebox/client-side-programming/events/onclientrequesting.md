---
title: OnClientRequesting
page_title: OnClientRequesting | UI for ASP.NET AJAX Documentation
description: OnClientRequesting
slug: autocompletebox/client-side-programming/events/onclientrequesting
tags: onclientrequesting
published: True
position: 9
---

# OnClientRequesting



## 

The __OnClientRequesting__ client-side event occurs right before RadAutoCompleteBox sends a server-side request to load items into its drop-down container.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following methods:

* __get_cancel()__ - returns a boolean value indicating whether the event has been canceled.

* __set_cancel(boolean)__ - cancels the event depending on the value passed as an argument.

* __get_context()__ - returns an object representing the context of the request.The object returned by get_context() method has a propery named 'Text' which contains thetext currently present in the input area. This object is also used to pass context information to the server	when a request to the server is initiated by assigning a value to its 'Text' property.

>important get_context() method of the EventArgs parameter is used only when RadAutoCompleteBox is bound to Web service.
>


This event is used in scenarios when operations need to be preformed to RadAutoCompleteBox right before a request to the server is initialized, or when the request needs to be canceled.

````JavaScript
<script type="text/javascript">
	function requesting(sender, eventArgs) {
		if (sender.get_text().length < 3) {
			eventArgs.set_cancel(true);
		}
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoComplete1" OnClientRequesting="requesting"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID">
</telerik:RadAutoCompleteBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]">
</asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
