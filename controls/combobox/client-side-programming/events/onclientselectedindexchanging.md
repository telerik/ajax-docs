---
title: OnClientSelectedIndexChanging
page_title: OnClientSelectedIndexChanging | RadComboBox for ASP.NET AJAX Documentation
description: OnClientSelectedIndexChanging
slug: combobox/client-side-programming/events/onclientselectedindexchanging
tags: onclientselectedindexchanging
published: True
position: 15
---

# OnClientSelectedIndexChanging



## 

The **OnClientSelectedIndexChanging** client-side event occurs when the selected item is being changed. This event is fired before the combobox selection has changed to a new item.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns the item that is about to be selected.

* **set_cancel** lets you prevent the selection from changing.

* **get_domEvent()** returns the DOM event object.

This example prompts the user to confirm the selection change:

````ASPNET
<script language="javascript" type="text/javascript">  
function AllowSelectionChange(sender, eventArgs) 
 {
	 if (radprompt("Change "
					+ sender.get_selectedItem().get_text() +
					" to " + 
					eventArgs.get_item().get_text() + "?"))
	 eventArgs.set_cancel(false)
 else
	 eventArgs.set_cancel(true);
}
 </script>

<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	onclientselectedindexchanging="AllowSelectionChange">
</telerik:radcombobox>
````



You can also use the **OnClientSelectedIndexChanging** event when you deploy dependant comboboxes on your page:

````ASPNET
<script type="text/javascript">        
function LoadCountries(combo, eventarqs) {
		var countriesCombo = $find("<%= RadComboBox2.ClientID %>");
		var item = eventarqs.get_item(); 
		countriesCombo.set_text("Loading...");
		if (item.get_index() > 0) {
			countriesCombo.requestItems(item.get_value(), false);
		}
		else {
			countriesCombo.set_text(" ");
			countriesCombo.clearItems();
		 }
	}
	function ItemsLoaded(combo, eventarqs) {
		var countriesCombo = $find("<%=RadComboBox2.ClientID%>");
		if (combo.get_items().get_count() > 0) {
			combo.set_text(combo.get_items().getItem(0).get_text());
			combo.get_items().getItem(0).highlight();
		}
		combo.showDropDown(); 
	 }
</script>
<telerik:radcombobox id="RadComboBox1" runat="server" onclientselectedindexchanging="LoadCountries" />
<telerik:radcombobox id="RadComboBox2" runat="server" onclientitemsrequested="ItemsLoaded"
	onitemsrequested="RadComboBox2_ItemsRequested" />
````



You can see a live example at [Multiple Comboboxes](https://demos.telerik.com/aspnet-ajax/ComboBox/Examples/Functionality/MultipleComboBoxes/DefaultCS.aspx)

# See Also

 * [OnClientSelectedIndexChanged]({%slug combobox/client-side-programming/events/onclientselectedindexchanged%})

 * [SelectedIndexChanged]({%slug combobox/server-side-programming/selectedindexchanged%})
