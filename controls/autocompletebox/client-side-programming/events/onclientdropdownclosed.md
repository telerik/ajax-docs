---
title: OnClientDropDownClosed
page_title: OnClientDropDownClosed | UI for ASP.NET AJAX Documentation
description: OnClientDropDownClosed
slug: autocompletebox/client-side-programming/events/onclientdropdownclosed
tags: onclientdropdownclosed
published: True
position: 3
---

# OnClientDropDownClosed



## 

The __OnClientDropDownClosed__ client-side event occurs immediately after the drop-down container is closed.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter which does not have methods.

This event is used in scenarios when operations need to be performed to RadAutoCompleteBox right after the drop-down container is closed.

````JavaScript
		<script type="text/javascript">
			function dropDownClosed(sender, eventArgs) {
				alert("The drop-down container has been closed.");
			}
		</script>
````



````ASPNET
		<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" OnClientDropDownClosed="dropDownClosed"
			DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID">
		</telerik:RadAutoCompleteBox>
		<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
			SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
