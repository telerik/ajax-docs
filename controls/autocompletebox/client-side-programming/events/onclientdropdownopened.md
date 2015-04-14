---
title: OnClientDropDownOpened
page_title: OnClientDropDownOpened | UI for ASP.NET AJAX Documentation
description: OnClientDropDownOpened
slug: autocompletebox/client-side-programming/events/onclientdropdownopened
tags: onclientdropdownopened
published: True
position: 1
---

# OnClientDropDownOpened



## 

The **OnClientDropDownOpened** client-side event occurs immediately after the drop-down container is opened.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter which does not have methods.

This event is used in scenarios when operations need to be performed to RadAutoCompleteBox right after the drop-down container is opened.

````JavaScript
<script type="text/javascript">
	function dropDownOpened(sender, eventArgs) {
		alert("The drop-down container has been opened.");
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" OnClientDropDownOpened="dropDownOpened"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
