---
title: OnClientRequested
page_title: OnClientRequested | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: OnClientRequested
slug: autocompletebox/client-side-programming/events/onclientrequested
tags: onclientrequested
published: True
position: 10
---

# OnClientRequested



## 

The **OnClientRequested** client-side event occurs right after the requested items are loaded into the drop-down container.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following method:

* **get_text()** - returns the text currently present in the input area.

* **get_data()** - returns an array of the entries in the dropdown.

	* length - returns the number of the elements in the dropdown.

This event is used in scenarios when operations need to be preformed to RadAutoCompleteBox right after the data source items are loaded into the drop-down container.

````JavaScript
<script type="text/javascript">
	function requested(sender, args) {
		alert(args.get_text());
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoComplete1" OnClientRequested="requested"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
