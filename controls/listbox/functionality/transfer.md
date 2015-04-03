---
title: Transfer
page_title: Transfer | UI for ASP.NET AJAX Documentation
description: Transfer
slug: listbox/functionality/transfer
tags: transfer
published: True
position: 2
---

# Transfer



## 

__RadListBox__ supports item transfer to another (related) __RadListBox__. By default, the selected item is __moved__ from the source to the destination listbox. You can change that behavior by setting the __TransferMode="Copy"__ property - in this way the item will be __copied__ to the destination listbox.



![RadListBox Transfer](images/listbox_transfer.png)



To enable item transferring you need to:

1. Set the __AllowTransfer="True"__ property. This will show the *move left* and *move right* buttons next to the listbox. You can control the look and feel of the transfer buttons by adjusting the [ButtonSettings properties]({%slug listbox/functionality/button-settings%}).

2. Set the __TransferToID__ property to the ID of the destination (second, right) __RadListBox__. You can use the [Smart Tag]({%slug listbox/design-time/smart-tag%}) to add that additional listbox - this will set the TransferToID property automatically.

3. [*Optional*] Set the __TransferMode__ property to __Copy__ if you want to copy instead of move the selected item/items from one listbox to the other. By default it is __Move__.

4. [*Optional*] Set the __AutoPostBackOnTransfer="True"__ to fire a postback on transfer.

5. [*Optional*] Set the __AllowTransferOnDoubleClick="True"__ to transfer the item when you double click it.

Please check [this help topic]({%slug listbox/data-binding/automatic-database-updates%}) on how to __automatically update the database on transfer__.

# See Also

 * [Reorder]({%slug listbox/functionality/reorder%})

 * [Drag and Drop]({%slug listbox/functionality/drag-and-drop%})

 * [Button Settings]({%slug listbox/functionality/button-settings%})

 * [Localization]({%slug listbox/accessibility-and-internationalization-/localization%})

 * [Transfer Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/transfer/defaultcs.aspx)
