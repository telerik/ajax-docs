---
title: OnClientTextChanged
page_title: OnClientTextChanged | UI for ASP.NET AJAX Documentation
description: OnClientTextChanged
slug: autocompletebox/client-side-programming/events/onclienttextchanged
tags: onclienttextchanged
published: True
position: 8
---

# OnClientTextChanged



## 

The **OnClientTextChanged** client-side event occurs when the text currently present in the input area is changed and RadAutoComplete has lost its focus.

The event handler receives two parameters:

1. The instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following method:

* **get_text()** - returns the text currently present into the input area.

>important The **OnClientTextChanged** client-side event is fired only when the input type of RadAutoCompleteBox is set to " **Text** ".
>


This event is used in scenarios when operations need to be preformed to RadAutoCompleteBox right after the text in the input area has been changed.

````JavaScript
<script type="text/javascript">
	function textChanged(sender, eventArgs) {
		alert("The text currently present in the input area of RadAutoCompleteBox is: " + eventArgs.get_text());
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" OnClientTextChanged="textChanged"
	DataSourceID="SqlDataSource1" DataTextField="Name" DataValueField="ID" InputType="Text">
</telerik:RadAutoCompleteBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikVSXConnectionString %>"
	SelectCommand="SELECT [ID], [CountryID], [Name] FROM [Cities]"></asp:SqlDataSource>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
