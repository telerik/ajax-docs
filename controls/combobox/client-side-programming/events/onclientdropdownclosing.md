---
title: OnClientDropDownClosing
page_title: OnClientDropDownClosing | UI for ASP.NET AJAX Documentation
description: OnClientDropDownClosing
slug: combobox/client-side-programming/events/onclientdropdownclosing
tags: onclientdropdownclosing
published: True
position: 2
---

# OnClientDropDownClosing



## 

The **OnClientDropDownClosing** client-side event occurs before the drop-down list closes.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **set_cancel** lets you prevent the drop-down from closing.

* **get_domEvent()** returns the DOM event object of the drop-down closing.

The following example uses the **OnClientDropDownClosing** event to prevent the drop-down list from closing if the prompt item is selected:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientDropDownClosing(sender, eventArgs) {
		if (sender.get_text() == "Select An Item") {
			eventArgs.set_cancel(true);
		}
		else {
			eventArgs.set_cancel(false);
		}
	}
</script>
<telerik:radcombobox 
id="RadComboBox1" 
runat="server" 
onclientdropdownclosing="OnClientDropDownClosing">   
<Items>      
	<telerik:RadComboBoxItem runat="server" Text="Select An Item">      
	</telerik:RadComboBoxItem>     
	<telerik:RadComboBoxItem runat="server" Text="Item1">      
	</telerik:RadComboBoxItem>      
	<telerik:RadComboBoxItem  runat="server" Text="Item 2">      
	</telerik:RadComboBoxItem>     
	<telerik:RadComboBoxItem  runat="server" Text="Item 3">      
	</telerik:RadComboBoxItem>   
</Items>
</telerik:radcombobox>
````



# See Also

 * [OnClientDropDownOpening]({%slug combobox/client-side-programming/events/onclientdropdownopening%})
