---
title: OnClientCheckAllChecked
page_title: OnClientCheckAllChecked | RadComboBox for ASP.NET AJAX Documentation
description: OnClientCheckAllChecked
slug: combobox/client-side-programming/events/onclientcheckallchecked
tags: onclientcheckallchecked
published: True
position: 18
---

# OnClientCheckAllChecked



## 

The **OnClientCheckAllChecked** client-side event occurs after the user click on the Check All check box. This event is added in 2013 Q3 release (Telerik.Web.UI.dll v.2013.3.1015).

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_domEvent()** returns the DOM event object of the drop-down opening.

* **get_checked()** returns the value of the Check All check box after it is checked.

The example below shows how to cancel the event if the check all check box is unchecked:

````ASPNET
<telerik:RadComboBox ID="RadComboBox1" runat="server" OnClientCheckAllChecked="OnClientCheckAllChecked"
	CheckBoxes="true" EnableCheckAllItemsCheckBox="true">
	<items>
	<telerik:RadComboBoxItem Text="Item1" />
	<telerik:RadComboBoxItem Text="Item2" />
	<telerik:RadComboBoxItem Text="Item3" />
</items>
</telerik:RadComboBox>
````



````JavaScript
function OnClientCheckAllChecked(sender, args) {
	if (args.get_checked()) {
		alert('All items are checked.');
	}
	else {
		alert('All items are unchecked.');
	}
}
````


