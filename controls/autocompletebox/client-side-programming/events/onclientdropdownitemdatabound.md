---
title: OnClientDropDownItemDataBound
page_title: OnClientDropDownItemDataBound | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: OnClientDropDownItemDataBound
slug: autocompletebox/client-side-programming/events/onclientdropdownitemdatabound
tags: onclientdropdownitemdatabound
published: True
position: 12
---

# OnClientDropDownItemDataBound



## 

The **OnClientDropDownItemDataBound** client-side event occurs for each item that is created during a request to a Web service.

The event handler receives two parameters:

1. An instance of RadAutoCompleteBox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item()** - returns the client object of the drop-down item.

* **get_dataItem()** - returns a reference to the **DataItem**(**AutoCompleteBoxItemData** or any other serializable custom object) that the current drop-down item is bound to.

````JavaScript
<script type="text/javascript">
	function dropDownItemDataBound(sender, args) {
		alert("Item with Text='" + args.get_item().get_text() + "' has just been bound.");
	}
</script>
````



````ASPNET
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1" OnClientDropDownItemDataBound="dropDownItemDataBound">
	<WebServiceSettings Path="ClientTemplates.aspx" Method="GetChildren" />
</telerik:RadAutoCompleteBox>
````



# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
