---
title: Server Events Overview
page_title: Overview | RadListBox for ASP.NET AJAX Documentation
description: Overview
slug: listbox/server-side-programming/server-events/overview
tags: overview
published: True
position: 0
---

# Server Events Overview



## 

**RadListBox** supports a number of server-side events that let you respond to complex actions at the server.

* [Dropping]({%slug listbox/server-side-programming/server-events/dropping%}) server-side event fires just before a RadListBoxItem is dropped over an HTML element which has and id attribute set.

* [Dropped]({%slug listbox/server-side-programming/server-events/dropped%}) server-side event is fired right after the **Dropping** event when a RadListBoxItem is dropped over an HTML element which has id attribute set.

* [Reordering]({%slug listbox/server-side-programming/server-events/reordering%}) server-side event fires when the **AutoPostBackOnReorder** property is set to **true**. It fires once for all selected items.

* [Reordered]({%slug listbox/server-side-programming/server-events/reordered%}) server-side event fires after the **Updated** event. The Items collection of the listbox is updated to reflect the reordering.

* [Updating]({%slug listbox/server-side-programming/server-events/updating%}) server event fires when the **AutoPostBackOnReorder** is set to **true** and the user tries to reorder an item. It fires after the **Reordering** server event (is not cancelled) once for all selected items.

* [Updated]({%slug listbox/server-side-programming/server-events/updated%}) server-side event fires after the **Updating** event (if not cancelled) and after the database has been updated (if AllowAutomaticUpdates="True").

* [SelectedIndexChanged]({%slug listbox/server-side-programming/server-events/selectedindexchanged%}) server-side event fires when you change the selected item.

* [TextChanged]({%slug listbox/server-side-programming/server-events/textchanged%}) server-side event fires when you change the selected item.

* [ItemCheck]({%slug listbox/server-side-programming/server-events/itemcheck%}) server-side event fires after a user checks or unchecks an item's checkbox.

* [OnCheckAllCheck]({%slug listbox/server-side-programming/server-events/checkallcheck%}) server-side event fires after a user checks or unchecks the CheckAll item.

* [Transferring]({%slug listbox/server-side-programming/server-events/transferring%}) server-side event fires when the **AutoPostBackOnTransfer** is set to **true** and the user tries to transfer an item.

* [Transferred]({%slug listbox/server-side-programming/server-events/transferred%}) server-side event fires after the **Deleted** event. The Items collection of the listbox is updated to reflect the transferring.

* [Deleting]({%slug listbox/server-side-programming/server-events/deleting%}) server-side event fires in two cases - on item delete and during transfer.

* [Deleted]({%slug listbox/server-side-programming/server-events/deleted%}) server-side event fires right after the **Deleting** event (in two cases - on item delete and during transfer).

* [ItemsRequested]({%slug listbox/server-side-programming/server-events/itemsrequested%}) server-side event fires when the load-on-demand mechanism needs to add items to the **RadListBox**.

# See Also

 * [Server-side Events Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/serverside/serverevents/defaultcs.aspx)
