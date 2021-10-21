---
title: Determine insert or edit mode in RadGrid with Batch editing
description: Determine insert or edit mode in RadGrid with Batch editing. Check it now!
type: how-to
page_title: Determine insert or edit mode in RadGrid with Batch editing
slug: grid-determine-insert-or-edit-mode-batch-editing
res_type: kb
---

## DESCRIPTION  

There are scenarios where it might be helpful to know whether the currently opened grid cell in Batch editing is from a new row or already existing one. Here are some samples:  
  
 1. When you want your users to be able to insert but not to edit records, or vice versa.  
 1. When you want to save user changes to database explicitly and want to determine whether they are coming from new or already existing row.  
 1. When you want to prefill some values in insert mode depending on other field values.

## SOLUTION

 You can achieve this requirement using the approach demonstrated below. The provided snippet uses the following event handler for a sample:  
[OnBatchEditOpened]({%slug grid/client-side-programming/events/onbatcheditopened%}).
  
 Here is the logic:  

````ASP.NET
<ClientSettings>
    <ClientEvents OnBatchEditOpened="batchEditOpened" />
</ClientSettings>
````

````JavaScript
function batchEditOpened(sender, args) {
    args.get_tableView().get_dataItems();
    var item = args.get_row().control;
    if (item.get_itemIndex() < 0) { // new row
           // execute custom logic
    }
}
````

  


