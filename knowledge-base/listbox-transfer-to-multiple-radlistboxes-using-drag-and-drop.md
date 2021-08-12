---
title: Transfer to multiple RadListBoxes using Drag and Drop
description: Transfer to multiple RadListBoxes using Drag and Drop. Check it now!
type: how-to
page_title: Transfer to multiple RadListBoxes using Drag and Drop
slug: listbox-transfer-to-multiple-radlistboxes-using-drag-and-drop
res_type: kb
---


## HOW-TO  
Enable transfer to multiple RadListBoxes using drag and drop.  
  
## SOLUTION  
A little bit of client coding is required in order to accomplish this task. First of all, you will need to hook on the onClientDropped event on all RadListBoxes that you want to enable transfer from/to. The next thing to do is to paste the following code on your ASPX page:

**TIP**: At the end of the article you can find attached samples that showcase the scenario. There are two files - one with a generic setup and one that shows how you can use template by data binding the listboxes, tracking the changes and invoking a postback.  
  
````ASPX
<script>
(function($) {
            transferManager = function() { }
  
            transferManager.performTransfer = function(sender, args) {
                var destinationItemIndex = this._getDestinationIndex(args);
                var destinationListBox = this._getDestinationListBox(args);
  
                if (destinationListBox == null)
                    return;
  
                var reorderIndex = args.get_dropPosition() == 0 ?
                destinationItemIndex : destinationItemIndex + 1;
  
                var items = args.get_sourceItems();
  
                this._transfer(items, destinationListBox, reorderIndex);
  
            }
  
            transferManager._transfer = function(items, destination, reorderIndex) {
                $.each(items, function(index, item) {
                    item.unselect();
                    destination.get_items().insert(reorderIndex, item);
                });
            }
  
            transferManager._getDestinationIndex = function(args) {
                var destinationItem = args.get_destinationItem();
                if (destinationItem)
                    return destinationItem.get_index();
  
                return 0;
            }
  
            transferManager._getDestinationListBox = function(args) {
                var destinationItem = args.get_destinationItem();
  
                if (destinationItem) {
                    var id = destinationItem.get_listBox().get_id();
                    return $find(id);
                }
  
                var parent = $(args.get_htmlElement()).parent();
                if (parent.is(".RadListBox")) {
                    var id = parent[0].id;
                    return $find(id);
                }
                      else if (parent.is(".rlbGroup")) {
                          var id = parent[0].parentNode.id;
                          return $find(id);
                      }
                return null;
            }
        })($telerik.$);
</script>
````

  
This code provides client object with a single public method: **performTransfer**. The performTransfer should be used in the following way, suppose that sourceClientDropped is the event handler for the SourceRadListBox's onClientDropped event:  
  
````JavaScript
        function sourceClientDropped(sender, args) {
            transferManager.performTransfer(sender, args);
        }
````

  
The onClientDropped event handler for all other RadListBoxes should look the same, the only thing to do is to invoke the performTransfer method with the two params that the onClientDropped event provides.   
  

Working sample projects that demonstrate the approach can be found as an attachment [here](files/listbox-transfer-to-multiple-listboxes.zip) and [here](files/listbox-transfer-to-multiple-listboxes-with-templates.zip).  
  

    