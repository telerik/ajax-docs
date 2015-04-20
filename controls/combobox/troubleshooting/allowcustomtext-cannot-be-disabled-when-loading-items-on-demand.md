---
title: AllowCustomText Cannot Be Disabled When Loading Items on Demand
page_title: AllowCustomText Cannot Be Disabled When Loading Items on Demand | UI for ASP.NET AJAX Documentation
description: AllowCustomText Cannot Be Disabled When Loading Items on Demand
slug: combobox/troubleshooting/allowcustomtext-cannot-be-disabled-when-loading-items-on-demand
tags: allowcustomtext,cannot,be,disabled,when,loading,items,on,demand
published: True
position: 5
---

# AllowCustomText Cannot Be Disabled When Loading Items on Demand



## 

When you load the combobox items on demand (in the **ItemsRequested** event) the **AllowCustomText** property is enabled by default. You cannot disable it as this would break the load-on-demand mechanism.

The **ItemsRequested** event is fired when the user types in the Telerik RadComboBox input field or clicks the drop-arrow image. Disabling the **AllowCustomText** property would prevent the user from typing in the input field and this would break the load-on-demand mechanism. Therefore we decided that the best approach is to hard-code the value of the **AllowCustomText** property and set it to true when the combobox is in a callback mode.

**WORKAROUND**

To work around the problem you could use the following approach:

* Do not enable the load on demand mechanism

* Subscribe to the **OnClientDropDownOpening** event and call the **requestItems()** method of the combobox to load the items from the **ItemsRequested** server-side event

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1" 
	allowcustomtext="false" 
	onclientdropdownopening="OnClientDropDownOpeningHandler"
	onitemsrequested="RadComboBox1_ItemsRequested" 
	runat="server">
</telerik:radcombobox>
````



````JavaScript
	
function OnClientDropDownOpeningHandler(sender, eventArgs) {
	sender.requestItems("", false);
}
		
````



````C#
		
protected void RadComboBox1_ItemsRequested(object o, Telerik.Web.UI.RadComboBoxItemsRequestedEventArgs e)
{
	RadComboBox1.Items.Add(new RadComboBoxItem("item 1", "1"));
	RadComboBox1.Items.Add(new RadComboBoxItem("item 2", "2"));
}
	
````


