---
title: Transfer
page_title: Transfer - RadListBox
description: Check our Web Forms article about Transfer.
slug: listbox/functionality/transfer
tags: transfer
published: True
position: 2
---

# Transfer

## 

**RadListBox** supports item transfer to another (related) **RadListBox**. By default, the selected item is **moved** from the source to the destination listbox. You can change that behavior by setting the **TransferMode="Copy"** property - in this way the item will be **copied** to the destination listbox.

![RadListBox Transfer](images/listbox_transfer.png)

To enable item transferring you need to:

1. Set the **AllowTransfer="True"** property. This will show the *move left* and *move right* buttons next to the listbox. You can control the look and feel of the transfer buttons by adjusting the [ButtonSettings properties]({%slug listbox/functionality/button-settings%}).

2. Set the **TransferToID** property to the ID of the destination (second, right) **RadListBox**. You can use the [Smart Tag]({%slug listbox/design-time/smart-tag%}) to add that additional listbox - this will set the TransferToID property automatically.

3. [*Optional*] Set the **TransferMode** property to **Copy** if you want to copy instead of move the selected item/items from one listbox to the other. By default it is **Move**.

4. [*Optional*] Set the **AutoPostBackOnTransfer="True"** to fire a postback on transfer. Required when using `ItemTemplate`. In such a case you must also call the `DataBind()` method of each item in the [Transferred event]({%slug listbox/server-side-programming/server-events/transferred%}) of the source listbox.

5. [*Optional*] Set the **AllowTransferOnDoubleClick="True"** to transfer the item when you double click it.

Please check [this help topic]({%slug listbox/data-binding/automatic-database-updates%}) on how to **automatically update the database on transfer**.



# See Also

 * [Reorder]({%slug listbox/functionality/reorder%})

 * [Drag and Drop]({%slug listbox/functionality/drag-and-drop%})

 * [Button Settings]({%slug listbox/functionality/button-settings%})

 * [Localization]({%slug listbox/accessibility-and-internationalization/localization%})

 * [Transfer Demo](https://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/transfer/defaultcs.aspx)
