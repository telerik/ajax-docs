---
title: ItemsRequested
page_title: ItemsRequested | UI for ASP.NET AJAX Documentation
description: ItemsRequested
slug: listbox/server-side-programming/server-events/itemsrequested
tags: itemsrequested
published: True
position: 16
---

# ItemsRequested


The following article demonstrates the usage of the **ItemsRequested** event of the **RadListBox**

## 

The **ItemsRequested** event is triggered when the EnabledLoadOnDemand property is True or when the scroll bar is used to request additional portion of items. The event will be also fired, if you explicitly call the **requestItems** client-side method of the **RadListBox**.

ItemsRequested event handler receives two arguments:

1. The **RadListBox** that is loading the items. This argument is of type **object**, but can be cast to the **RadListBox** type.

1. The **RadListBoxItemsRequestedEventArgs** object, which has the following properties: 

* **StartIndex** - should be passed from the **requestItems()** client-side method to specify the current number of Items, loaded in the RadListBox. 

* **Count** - should be passed from the **requestItems()** client-side method to specify the desired number of Items per request. 

````ASPNET
<telerik:radlistbox runat="server"
	id="RadListBox1"
	height="200px"
	onitemsrequested="RadListBox1_ItemsRequested">
	<FooterTemplate>
		<telerik:RadButton
			runat="server"
			Width="97%"
			Text="Load Next Portion"
			ID="Button"
			OnClientClicked="OnClientClicked"
			AutoPostBack="false">
		</telerik:RadButton>
	</FooterTemplate>
</telerik:radlistbox>
````

````JavaScript
<script type="text/javascript">
	function OnClientClicked(sender, eventArgs) {
		var listBox = $find("RadListBox1");
		var loadedItemsCount = listBox.get_items().get_count();
		var itemsPerRequest = 10;
		listBox.requestItems(loadedItemsCount, itemsPerRequest);
	}
</script>
````

````C#
protected void RadListBox1_ItemsRequested(object sender, RadListBoxItemsRequestedEventArgs e)
{
	int maxItemsToLoad = 100;

	int endOffset = Math.Min(e.StartIndex + e.Count, maxItemsToLoad);

	for (int i = e.StartIndex; i < endOffset; i++)
	{
		RadListBox1.Items.Add(new RadListBoxItem("RadListBoxItem" + i.ToString(), "Value" + i.ToString()));
	}
}
````
````VB
Protected Sub RadListBox1_ItemsRequested(sender As Object, e As RadListBoxItemsRequestedEventArgs)
	Dim maxItemsToLoad As Integer = 100

	Dim endOffset As Integer = Math.Min(e.StartIndex + e.Count, maxItemsToLoad)

	For i As Integer = e.StartIndex To endOffset - 1
		RadListBox1.Items.Add(New RadListBoxItem("RadListBoxItem" + i.ToString(), "Value" + i.ToString()))
	Next
End Sub
````

