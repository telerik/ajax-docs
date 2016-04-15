---
title: OnClientItemClicking
page_title: OnClientItemClicking | RadMenu for ASP.NET AJAX Documentation
description: OnClientItemClicking
slug: menu/client-side-programming/events/onclientitemclicking
tags: onclientitemclicking
published: True
position: 3
---

# OnClientItemClicking


## 

The **OnClientItemClicking** client-side event occurs when the user clicks on a menu item, before the menu responds to the mouse click.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadMenuItem** that was clicked.

* **set_cancel** lets you prevent the menu from responding to the mouse click.

* **get_cancel** returns a boolean value indicating whether the mouse click was cancelled.

* **get_targetElement** (**RadContextMenu** only) returns a reference to the target element attached to the context menu that is responsible for the context menu showing.

* **get_domEvent** returns a reference to the DOM event that caused the clicking.

You can use this event to pre-process an item click or to cancel the default response:

````ASP.NET	
<script type="text/javascript">
function onClicking(sender, eventArgs) {
    var item = eventArgs.get_item();
    var navigateUrl = item.get_navigateUrl();
    if (navigateUrl && navigateUrl != "#") {
        var proceed = confirm("Navigate to " + navigateUrl + " ?");
        if (!proceed) {
            eventArgs.set_cancel(true);
        }
        else {
            eventArgs.set_cancel(false);
        }
    }
}
</script>

<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" OnClientItemClicking="onClicking">
    ...
</telerik:RadMenu>
````



# See Also

 * [OnClientItemClicked]({%slug menu/client-side-programming/events/onclientitemclicked%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})

 * [ItemClick]({%slug menu/server-side-programming/itemclick%})

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})
