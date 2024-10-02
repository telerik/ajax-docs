---
title: "RadGrid ClientDataSource binding and batch editing: page is reset to 1 after deleting a record"
description: "RadGrid ClientDataSource binding and batch editing: page is reset to 1 after deleting a record. Check it now!"
type: how-to
page_title: "RadGrid ClientDataSource binding and batch editing: page is reset to 1 after deleting a record"
slug: grid-clientdatasource-binding-and-batch-editing-page-is-reset-to-1-after-deleting-a-record
res_type: kb
---

## Problem

Client side bound Radgrid with batch editing: if you page the grid and do a client side delete. then save the changes, the active page in the pager goes to number 1 page.

## Solution

You can store the current page index when a row is deleted and in the next page command, .page() the grid to the previous page.

````ASPX
<script>
        var currPageWhenDeleting;
 
        function OnRowDeleted(sender, args) {
            currPageWhenDeleting = sender.get_masterTableView().get_currentPageIndex();
        }
 
        function OnCommand(sender, args) {
            if (currPageWhenDeleting && args.get_commandName() == "Page") {
                args.set_cancel(true);
                var restorePage = currPageWhenDeleting;
                currPageWhenDeleting = null; //clear the original flag to avoid an endless loop
                setTimeout(function () {
                    sender.get_masterTableView().page(restorePage + 1); //restore the previous page
                }, 100);
            }
        }
</script>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
   <MasterTableView EditMode="Batch">
    <ClientSettings>
        <ClientEvents OnCommand="OnCommand" OnRowDeleted="OnRowDeleted" />
    </ClientSettings>
</telerik:RadGrid>
````

## See Also

- [ClientDataSource binding: after filtering so no records are present and removing the filter there is no pager]({%slug grid-clientdatasource-binding-after-filtering-so-no-records-are-present-and-removing-the-filter-there-is-no-pager%})

