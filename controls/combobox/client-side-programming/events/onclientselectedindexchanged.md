---
title: OnClientSelectedIndexChanged
page_title: OnClientSelectedIndexChanged | RadComboBox for ASP.NET AJAX Documentation
description: OnClientSelectedIndexChanged
slug: combobox/client-side-programming/events/onclientselectedindexchanged
tags: onclientselectedindexchanged
published: True
position: 14
---

# OnClientSelectedIndexChanged



## 

The **OnClientSelectedIndexChanged** client-side event occurs immediately after the selected item has changed.

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following method:

* **get_item** returns the item that has just been selected.

* **get_domEvent()** returns the DOM event object.

Use this event to respond to the newly selected item:

````ASPNET
<script language="javascript" type="text/javascript">
	function OnClientSelectedIndexChanged(sender, eventArgs) {
		var item = eventArgs.get_item();
		sender.set_text("You selected " + item.get_text());
	}
</script>

<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	onclientselectedindexchanged="OnClientSelectedIndexChanged">
</telerik:radcombobox>
````

## Getting Old Value

The old selected item is available only in the [OnClientSelectedIndexChanging]({%slug combobox/client-side-programming/events/onclientselectedindexchanging%}) event via the `sender.get_selectedItem()` method. 

To have the old item in the OnClientSelectedChanged event, we can add a reference to the ComboBox client-side object in an expando property.

````ASPNET
<script lang="javascript" type="text/javascript">  
    function OnClientSelectedIndexChanging(sender, eventArgs) {
        var oldItem = sender.get_selectedItem();
        var newItem = eventArgs.get_item();

        sender.__oldSelectedItem = oldItem;
    }

    function OnClientSelectedIndexChanged(sender, eventArgs) {
        var oldItem = sender.__oldSelectedItem;
        var newItem = eventArgs.get_item();

        if (oldItem) {
            alert("Selection Changed from "
                + oldItem.get_text() +
                " to " +
                newItem.get_text());
        }
    }
</script>

<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" OnClientSelectedIndexChanged="OnClientSelectedIndexChanged"
    OnClientSelectedIndexChanging="OnClientSelectedIndexChanging">
    <Items>
        <telerik:RadComboBoxItem Text="Item 1" />
        <telerik:RadComboBoxItem Text="Item 2" />
        <telerik:RadComboBoxItem Text="Item 3" />
        <telerik:RadComboBoxItem Text="Item 4" />
    </Items>
</telerik:RadComboBox>

````

# See Also

 * [SelectedIndexChanged]({%slug combobox/server-side-programming/selectedindexchanged%})

 * [OnClientSelectedIndexChanging]({%slug combobox/client-side-programming/events/onclientselectedindexchanging%})
