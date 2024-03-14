---
title: OnClientItemsRequested
page_title: OnClientItemsRequested - RadListBox
description: Check our Web Forms article about OnClientItemsRequested.
slug: listbox/client-side-programming/events/onclientitemsrequested
tags: onclientitemsrequested
published: True
position: 15
---

# OnClientItemsRequested

## 

The **OnClientItemsRequested** client-side event occurs after the load-on-demand mechanism has added new items to the listbox.

The event handler receives the following parameter:

1. The instance of the listbox firing the event.

You can use this event to get the number of items inside the ListBox.

````JavaScript
<script type="text/javascript">
    function OnClientItemsRequested(sender, eventArgs) { 
        var listBox = sender;
        var listBoxElement = listBox.get_element();

        var items = listBox.get_items();
        var count = items.get_count();

        alert(`There are ${count} items in the ListBox`);
    }
</script>
````

Or you could preselect the first item when the control loads initially.

````JavaScript
<script type="text/javascript">
    function OnClientLoad(sender, args) {
        sender.__preSelectFirst = sender.get_selectedItems().length === 0;
    }

    function OnClientItemsRequested(sender, eventArgs) {
        if (sender.__preSelectFirst) {
            sender.__preSelectFirst = false;
            sender.getItem(0).select();
        }
    }
</script>
````

# See Also

 * [Load On Demand Demo](https://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/loadondemand/defaultcs.aspx)
