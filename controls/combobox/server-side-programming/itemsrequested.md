---
title: ItemsRequested
page_title: ItemsRequested | RadComboBox for ASP.NET AJAX Documentation
description: ItemsRequested
slug: combobox/server-side-programming/itemsrequested
tags: itemsrequested
published: True
position: 1
---

# ItemsRequested



## 

The **ItemsRequested** event occurs when the **EnabledLoadOnDemand** property is **True** and the user types text into the input field or clicks on the drop-down toggle image when the list is empty.

>note Items added in the **ItemsRequested** event handler are cleared when the next **ItemsRequested** event fires. If you, however, use the **ShowMoreResultsBox** mechanism or **Virtual Scrolling** the items will not be cleared upon clicking the **ShowMoreResultsBox** arrow or **scrolling down.** 
>


The **ItemsRequested** event handler receives two arguments:

1. The **RadComboBox** that is loading items. This argument is of type object, but can be cast to the **RadComboBox** type.

1. An EventArgs object. This object has a number of properties for handling the request for new items:

* **Text** is the text in the input area of the combobox. This value can be used to filter the items that are added.

* **Value** is the value of the currently selected item.

* **Message** is the message that appears in the [ShowMoreResults box]({%slug combobox/load-on-demand/showmoreresultsbox-virtual-scrolling%}). This is only used when the **ShowMoreResultsBox** property is **True**.

* **NumberOfItems** is the number of items that have been added by all previous calls to the **ItemsRequested** event handler when the **ShowMoreResultsBox** property is **True**.

* **EndOfItems** is boolean property indicating the end of the items.

Use the **ItemsRequested** event handler to dynamically create the requested items and add them to the **Items** collection of the combobox:

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	enableloadondemand="True"
	onitemsrequested="RadComboBox1_ItemsRequested">
</telerik:radcombobox>
````





````C#
	
protected void RadComboBox1_ItemsRequested(object o, Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs e)
{  
	RadComboBox1.Items.Add(new RadComboBoxItem("Item1", "1"));  
	RadComboBox1.Items.Add(new RadComboBoxItem("Item2", "2"));  
	RadComboBox1.Items.Add(new RadComboBoxItem("Item3", "3"));
}
	
````
````VB.NET
		
Protected Sub RadComboBox1_ItemsRequested(ByVal o As Object, ByVal e As Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs)

	RadComboBox1.Items.Add(New RadComboBoxItem("Item1", "1"))
	RadComboBox1.Items.Add(New RadComboBoxItem("Item2", "2"))
	RadComboBox1.Items.Add(New RadComboBoxItem("Item3", "3"))

End Sub 'RadComboBox1_ItemsRequested
	
````


# See Also

 * [Overview]({%slug combobox/load-on-demand/overview%})

 * [OnClientItemRequesting]({%slug combobox/client-side-programming/events/onclientitemrequesting%})

 * [OnClientItemRequested]({%slug combobox/client-side-programming/events/onclientitemrequested%})

 * [OnClientItemRequestFailed]({%slug combobox/client-side-programming/events/onclientitemrequestfailed%})
