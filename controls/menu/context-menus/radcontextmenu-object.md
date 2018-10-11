---
title: RadContextMenu Object
page_title: RadContextMenu Object | RadMenu for ASP.NET AJAX Documentation
description: RadContextMenu Object
slug: menu/context-menus/radcontextmenu-object
tags: radcontextmenu,object
published: True
position: 0
---

# RadContextMenu Object



The **RadContextMenu** control represents a context menu or popup menu. It is similar to **RadMenu**, having the same properties, methods, and events. The difference is that **RadContextMenu** does not appear automatically when the Web page loads the way **RadMenu** does. Instead, it is launched by a client-side action. You can attach the context menu to one or more targets so that it is launched automatically as a context menu when the user right-clicks on a target, or you can display the menu as a popup by calling its **show()** or **showAt()** method from client-side code.

## Attaching the context menu to targets

* Add a **\<Targets\>** tag to the RadContextMenu declaration.

* For each target, add a target tag between the **\<Targets\>** tag and is closing **\</Targets\>** tag. There are four types of target tags:

* **\<telerik:ContextMenuControlTarget\>** identifies a target that is an ASP.NET control. This tag takes a single attribute, **ControlID**, which specifies the server-side ID of the target control.

* **\<telerik:ContextMenuDocumentTarget\>** identifies the document element of the Web page as a target. That is, the context menu appears wherever the user right-clicks on the page. This tag uses no additional attributes.

* **\<telerik:ContextMenuElementTarget\>** identifies a target that is an HTML element. This tag takes a single attribute, **ElementID**, which is the client-side ID of the target element.

* **\<telerik:ContextMenuTagNameTarget\>** identifies as a target all HTML elements on the page with a specified tag name.This tag takes a single attribute, **TagName**, which is the tag name of the target elements.

The following example shows a context menu that is attached to all **<img>** elements on the Web page:

````ASP.NET
<telerik:RadContextMenu ID="SetAsDesktop" runat="server" Skin="Vista" OnClientShowing="showingSetAsDesktop"
    OnClientItemClicked="setAsDesktopItemClicked">
    <Targets>
        <telerik:ContextMenuTagNameTarget TagName="img" />
    </Targets>
    <Items>
        <telerik:RadMenuItem Text="Set as desktop" Value="D" />
        <telerik:RadMenuItem Text="Open in a new window" Value="W" />
    </Items>
</telerik:RadContextMenu>
````

>tip For the targets to work in the Opera Browser, **RadContextMenu** needs right-clicks allowed. This is done by using *"Tools -> Preferences -> Advanced -> JavaScript options -> Allow script to receive right clicks"* . In addition, because of browser limitations, on right-click both **RadContextMenu** and the standard browser context menu are displayed. A workaround to the latter problem is using the ESC key to hide the default browser context menu.
>


For a live example of assigning targets to a context menu, see [Context Menu](http://demos.telerik.com/aspnet-ajax/Menu/Examples/ContextMenu/Default/DefaultCS.aspx).

## Client-side events

Because **RadContextMenu** is launched by a client-side action, it has a few extra client-side events not present in **RadMenu**. These are

* **[OnClientHiding]({%slug menu/client-side-programming/events/onclienthiding%})**, which occurs when the context menu is hiding after having been shown.

* **[OnClientHidden]({%slug menu/client-side-programming/events/onclienthidden%})**, which occurs when the context menu is hidden after having been shown.

* **[OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%})**, which occurs when the user right-clicks on a target but before the context menu is shown. An **OnClientShowing** event handler can block the context menu from showing.

* **[OnClientShown]({%slug menu/client-side-programming/events/onclientshown%})**, which occurs immediately after the context menu first appears.

## Using RadContextMenu as a popup

To use **RadContextMenu** as a popup menu, simply omit the **<Targets>** section of the **RadContextMenu** declaration. Without any targets, the context menu does not appear automatically for any user clicks. Then, to cause the menu to pop up from client-side script, call the **show()** or **showAt()** method of the **RadContextMenu** client-side object.

The following example uses the **show()** method to display a context menu when the mouse hovers over an image by using the **onmouseover** event of the **<img>** element:

````ASP.NET
<telerik:RadContextMenu ID="RadContextMenu1" runat="server" Skin="Vista">
    <Items>
        <telerik:RadMenuItem Text="Trees" />
        <telerik:RadMenuItem Text="Sunset" />
        <telerik:RadMenuItem Text="Mountains" />
    </Items>
</telerik:RadContextMenu>
<span class="legend">Hover this image to display the popup menu</span>
<img src="Images/landscape.gif" onmouseover="showMenu(event)" />

<script type="text/javascript">
    function showMenu(e) {
        var contextMenu = $find("<%= RadContextMenu1.ClientID %>");
        if ((!e.relatedTarget) || (!$telerik.isDescendantOrSelf(contextMenu.get_element(), e.relatedTarget))) {
            contextMenu.show(e);
        }
        $telerik.cancelRawEvent(e);
    }
</script>
````

For a live example of using **RadContextMenu** as a popup menu, see [Popup menu](http://demos.telerik.com/aspnet-ajax/Menu/Examples/ContextMenu/PopupMenu/DefaultCS.aspx).

# See Also

 * [Creating a Simple Context Menu]({%slug menu/getting-started/creating-a-simple-context-menu%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
