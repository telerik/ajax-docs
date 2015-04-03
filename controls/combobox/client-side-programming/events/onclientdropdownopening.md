---
title: OnClientDropDownOpening
page_title: OnClientDropDownOpening | UI for ASP.NET AJAX Documentation
description: OnClientDropDownOpening
slug: combobox/client-side-programming/events/onclientdropdownopening
tags: onclientdropdownopening
published: True
position: 4
---

# OnClientDropDownOpening



## 

The __OnClientDropDownOpening__ client-side event occurs before the drop-down list opens.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* __set_cancel__ lets you prevent the drop-down from opening.

* __get_domEvent()__ returns the DOM event object of the drop-down opening.

The example below shows how to prevent the drop-down list from opening when there are no items to be displayed:

````ASPNET
	    <script language="javascript" type="text/javascript">
	        function OnClientDropDownOpening(sender, eventArgs) {
	            if (sender.get_items().get_count() == 0) 
	            eventArgs.set_cancel(true);
	        }
	    </script>
	    <telerik:radcombobox 
	        id="RadComboBox1" 
	        runat="server" 
	        onclientdropdownopening="OnClientDropDownOpening">
	    </telerik:radcombobox>
````



# See Also

 * [OnClientDropDownClosing]({%slug combobox/client-side-programming/events/onclientdropdownclosing%})
