---
title: OnClientCheckAllChecking
page_title: OnClientCheckAllChecking | RadComboBox for ASP.NET AJAX Documentation
description: OnClientCheckAllChecking
slug: combobox/client-side-programming/events/onclientcheckallchecking
tags: onclientcheckallchecking
published: True
position: 19
---

# OnClientCheckAllChecking



## 

The **OnClientCheckAllChecking** client-side occurs before the check all items check box is checked. This event is added in 2013 Q3 release (Telerik.Web.UI.dll v.2013.3.1015).

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **set_cancel** lets you prevent the drop-down from opening.

* **get_domEvent()** returns the DOM event object of the drop-down opening.

* **get_checked()** returns the value of the Check All check box before it is checked.

The example below shows how to cancel the event if the check all check box is unchecked:

````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server" OnClientCheckAllChecking="OnClientCheckAllChecking"
	CheckBoxes="true" EnableCheckAllItemsCheckBox="true">
	<items>
	<telerik:RadComboBoxItem Text="Item1" />
	<telerik:RadComboBoxItem Text="Item2" />
	<telerik:RadComboBoxItem Text="Item3" />
</items>
</telerik:RadComboBox>
````



````JavaScript
function OnClientCheckAllChecking(sender, args) {
	if (args.get_checked()) {
		args.set_cancel(true);
	}
}
````


