---
title: Check/uncheck items on select in ListBox
description: Check/uncheck items on select in ListBox. Check it now!
type: how-to
page_title: Check/uncheck items on select in ListBox
slug: listbox-check-uncheck-items-on-select-in-listbox
res_type: kb
---

### Problem

Clicking on an item does not check/uncheck items.

### Description

When clicking an item, the SelectedIndexChanged event is fired and the click does not bubble up to the Checkbox element.

### Solution

To make the ListBox check/uncheck the checkbox when clicking anywhere on the item, we can prevent the selected index changed event and click the checkbox element programmatically.

```ASP.NET
<telerik:RadListBox runat="server" OnClientSelectedIndexChanging="OnClientSelectedIndexChanging"  CheckBoxes="true" ID="RadListBox1">
    <Items>
        <telerik:RadListBoxItem Text="Item 1" />
        <telerik:RadListBoxItem Text="Item 2" />
        <telerik:RadListBoxItem Text="Item 3" />
        <telerik:RadListBoxItem Text="Item 4" />
    </Items>
</telerik:RadListBox>
```

```JavaScript
<script>
    function OnClientSelectedIndexChanging(sender, args) {
        var item = args.get_item();
        item.get_checkBoxElement().click();
        args.set_cancel(true);
    }
</script>
```








  


