---
title: Optimizing the Combobox
page_title: Optimizing the Combobox | RadComboBox for ASP.NET AJAX Documentation
description: Optimizing the Combobox
slug: combobox/troubleshooting/optimizing-the-combobox
tags: optimizing,the,combobox
published: True
position: 1
---

# Optimizing the Combobox



## 

The best approach to optimize the performance speed of Telerik RadComboBox when using huge amount of items is using the **load-on-demand** feature. The **load-on-demand** mechanism loads the items only when the user types or clicks in the field or the drop-arrow image. You can also load the items only upon clicking on the drop arrow. To do this you should set the **ShowDropDownOnTextboxClick** property to false. For even faster load of the page, you can leave the combobox empty when it is first rendered on the page. Items will be added as soon as the user clicks in the input field, the drop-arrow image or types some text into the input field. In other words, you can add the items only in the **ItemsRequested** event handler or via **WebService**.

When using the load-on-demand mechanism with **ItemsRequested** event you should:

1. Set the **EnableLoadOnDemand** property to true.

2. Subscribe to the **ItemsRequested** event and add the items there.

````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" 
	id="RadComboBox1" 
	runat="server" 
	EnableLoadOnDemand="true" 
	OnItemsRequested="RadComboBox1_ItemsRequested">
</telerik:RadComboBox>
````





````C#
		
protected void RadComboBox1_ItemsRequested(object o, Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs e)
{
	RadComboBox1.Items.Add(new RadComboBoxItem("item 1", "1"));
	RadComboBox1.Items.Add(new RadComboBoxItem("item 2", "2"));
}
	
````
````VB.NET
		
Protected Sub RadComboBox1_ItemsRequested(ByVal o As Object, ByVal e As Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs) Handles RadComboBox1.ItemsRequested
	RadComboBox1.Items.Add(New RadComboBoxItem("item 1", "1"))
	RadComboBox1.Items.Add(New RadComboBoxItem("item 2", "2"))
End Sub

````


**ShowMoreResultsBox** and **EnableVirtualScrolling**

When you load the combobox items from heavy database, you can cache the data source so that additional calls are avoided. This will make the combobox even faster.

A sample project can be seen here: [Load On Demand](https://demos.telerik.com/aspnet-ajax/ComboBox/Examples/PopulatingWithData/AutoCompleteSql/DefaultCS.aspx)

# See Also

 * [Load-on-Demand Overview]({%slug combobox/load-on-demand/overview%})

 * [Loading Items from a Web Service]({%slug combobox/load-on-demand/loading-items-from-a-web-service%})
