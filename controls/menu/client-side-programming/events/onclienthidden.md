---
title: OnClientHidden
page_title: OnClientHidden - RadMenu
description: Check our Web Forms article about OnClientHidden.
slug: menu/client-side-programming/events/onclienthidden
tags: onclienthidden
published: True
position: 19
---

# OnClientHidden

## 

(**RadContextMenu** only) The **OnClientHidden** client-side event occurs when the context menu disappears.

The event handler receives a single parameter: a reference to the client-side object for the context menu.

You can use this event to respond when the context menu disappears:

````JavaScript
<script type="text/javascript">
    function Goodbye(menu) {    
    // reset all items to their initial state
        for (var i = 0; i < menu.get_allItems().length; i++) {
            menu.get_allItems()[i].enable();
        }
    }
</script>
````


````ASP.NET
<telerik:RadContextMenu ID="RadContextMenu1" runat="server" OnClientHidden="Goodbye">
    <Items>
        ...
    </Items>
</telerik:RadContextMenu>
````



# See Also

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})

 * [OnClientShown]({%slug menu/client-side-programming/events/onclientshown%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
