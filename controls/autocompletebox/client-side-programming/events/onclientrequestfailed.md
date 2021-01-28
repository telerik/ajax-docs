---
title: OnClientRequestFailed
page_title: OnClientRequestFailed - RadAutoCompleteBox
description: Check our Web Forms article about OnClientRequestFailed.
slug: autocompletebox/client-side-programming/events/onclientrequestfailed
tags: onclientrequestfailed
published: True
position: 11
---

# OnClientRequestFailed



## 

The **OnClientRequestFailed** client-side event occurs in case of error while loading the drop-down items from the data source.

The event handler receives two parameters:

1. An instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_errorMessage** - returns the error message which contains information about the error that has occured.

* **set_cancel** - prevents the default error from displaying to the user, depending on the value passed as an argument.

This event is used in scenarios when the default error message need to be hidden and a custom message need to be shown instead.

````JavaScript
<script type="text/javascript">
	function requestFailed(sender, eventArgs) {
		alert("There has been an error with the request.");
		//Cancel the event to hide the default message. 
		eventArgs.set_cancel(true);
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoComplete1" OnClientRequestFailed="requestFailed"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
