---
title: Working With Items at the Client
page_title: Working With Items at the Client | RadPanelBar for ASP.NET AJAX Documentation
description: Working With Items at the Client
slug: panelbar/radpanelbar-items/working-with-items-at-the-client
tags: working,with,items,at,the,client
published: True
position: 4
---

# Working With Items at the Client



**RadPanelBar** provides a client-side API for adding, deleting and disabling items. By using the **trackChanges** and **commitChanges** methods of the client-side **RadPanelBar** object, these changes can persist after a postback.

## Adding Items

To add an item, use the **add** or **insert** method of the item collection:

````JavaScript
	     	
function AddNewItems()
{
    var panelBar = $find("<%= RadPanelBar1.ClientID %>");
    var rootItem = new Telerik.Web.UI.RadPanelItem();
    rootItem.set_text("New Root Item");
    var childItem = new Telerik.Web.UI.RadPanelItem();
    childItem.set_text("New Child Item");
    var firstChild = new Telerik.Web.UI.RadPanelItem();
    firstChild.set_text("New First Child");
    panelBar.trackChanges();
    panelBar.get_items().add(rootItem);
    rootItem.get_items().add(childItem);
    panelBar.get_items().getItem(0).get_items().insert(0, firstChild);
    panelBar.commitChanges();      
}
			
````



## Removing items

Use the **remove** or **removeAt** method of the item collection to remove items:

````JavaScript
	
function RemoveItem() {
    var panelBar = $find("<%= RadPanelBar1.ClientID %>");
    var panelItem = panelBar.findItemByText("delete me");
    if (panelItem) {
        var parentItem = panelItem.get_parent();
        panelBar.trackChanges();
        parentItem.get_items().remove(panelItem);
        // or parentItem.get_items().removeAt(panelItem.get_index());
        panelBar.commitChanges();
    }
}
				
````



## Enabling and Disabling items

Use the **disable** and **enable** methods of the item collection to disable or enable items:

````JavaScript
	
function DisableItem() {
    var panelBar = $find("<%= RadPanelBar1.ClientID %>");
    var panelItem = panelBar.findItemByText("disable me");
    if (panelItem) {
        panelBar.trackChanges();
        panelItem.disable();
        panelBar.commitChanges();
    }
}

function EnableItem() {
    var panelBar = $find("<%= RadPanelBar1.ClientID %>");
    var panelItem = panelBar.findItemByText("enable me");
    if (panelItem && !panelItem.get_isEnabled()) {
        panelBar.trackChanges();
        panelItem.enable();
        panelBar.commitChanges();
    }
}
				
````



# See Also

 * [Working With Items at the Server]({%slug panelbar/radpanelbar-items/working-with-items-at-the-server%})

 * [Overview]({%slug panelbar/radpanelbar-items/overview%})

 * [Overview]({%slug panelbar/client-side-programming/overview%})
