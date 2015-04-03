---
title: RadContextMenu Object
page_title: RadContextMenu Object | UI for ASP.NET AJAX Documentation
description: RadContextMenu Object
slug: menu/context-menus/radcontextmenu-object
tags: radcontextmenu,object
published: True
position: 0
---

# RadContextMenu Object



The __RadContextMenu__ control represents a context menu or popup menu. It is similar to __RadMenu__, having the same properties, methods, and events. The difference is that __RadContextMenu__ does not appear automatically when the Web page loads the way __RadMenu__ does. Instead, it is launched by a client-side action. You can attach the context menu to one or more targets so that it is launched automatically as a context menu when the user right-clicks on a target, or you can display the menu as a popup by calling its __show()__ or __showAt()__ method from client-side code.

## Attaching the context menu to targets

* Add a __<Targets>__ tag to the RadContextMenu declaration.

* For each target, add a target tag between the __<Targets>__ tag and is closing __</Targets>__ tag. There are four types of target tags:

* __<telerik:ContextMenuControlTarget>__ identifies a target that is an ASP.NET control. This tag takes a single attribute, __ControlID__, which specifies the server-side ID of the target control.

* __<telerik:ContextMenuDocumentTarget>__ identifies the document element of the Web page as a target. That is, the context menu appears wherever the user right-clicks on the page. This tag uses no additional attributes.

* __<telerik:ContextMenuElementTarget>__ identifies a target that is an HTML element. This tag takes a single attribute, __ElementID__, which is the client-side ID of the target element.

* __<telerik:ContextMenuTagNameTarget>__ identifies as a target all HTML elements on the page with a specified tag name.This tag takes a single attribute, __TagName__, which is the tag name of the target elements.

The following example shows a context menu that is attached to all __<img>__ elements on the Web page:

````ASPNET
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



>note For the targets to work in the Opera Browser, __RadContextMenu__ needs right-clicks allowed. This is done by using *"Tools -> Preferences -> Advanced -> JavaScript options -> Allow script to receive right clicks"* . In addition, because of browser limitations, on right-click both __RadContextMenu__ and the standard browser context menu are displayed. A workaround to the latter problem is using the ESC key to hide the default browser context menu.
>


For a live example of assigning targets to a context menu, see [Context Menu](http://demos.telerik.com/aspnet-ajax/Menu/Examples/ContextMenu/Default/DefaultCS.aspx).

## Client-side events

Because __RadContextMenu__ is launched by a client-side action, it has a few extra client-side events not present in __RadMenu__. These are

* __[OnClientHiding]({%slug menu/client-side-programming/events/onclienthiding%})__, which occurs when the context menu is hiding after having been shown.

* __[OnClientHidden]({%slug menu/client-side-programming/events/onclienthidden%})__, which occurs when the context menu is hidden after having been shown.

* __[OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%})__, which occurs when the user right-clicks on a target but before the context menu is shown. An __OnClientShowing__ event handler can block the context menu from showing.

* __[OnClientShown]({%slug menu/client-side-programming/events/onclientshown%})__, which occurs immediately after the context menu first appears.

## Using RadContextMenu as a popup

To use __RadContextMenu__ as a popup menu, simply omit the __<Targets>__ section of the __RadContextMenu__ declaration. Without any targets, the context menu does not appear automatically for any user clicks. Then, to cause the menu to pop up from client-side script, call the __show()__ or __showAt()__ method of the __RadContextMenu__ client-side object.

The following example uses the __show()__ method to display a context menu when the mouse hovers over an image by using the __onmouseover__ event of the __<img>__ element:

````ASPNET
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



For a live example of using __RadContextMenu__ as a popup menu, see [Popup menu](http://demos.telerik.com/aspnet-ajax/Menu/Examples/ContextMenu/PopupMenu/DefaultCS.aspx).

# See Also

 * [Creating a Simple Context Menu]({%slug menu/getting-started/creating-a-simple-context-menu%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
