---
title: Events Overview
page_title: Overview | RadMenu for ASP.NET AJAX Documentation
description: Overview
slug: menu/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



**RadMenu** and **RadContextMenu** support a number of client-side events that let you customize the behavior of the menu:

* [OnClientLoad]({%slug menu/client-side-programming/events/onclientload%}) occurs when the menu is first loaded.

* [OnClientItemClicking]({%slug menu/client-side-programming/events/onclientitemclicking%}) occurs when the user clicks on an item before the menu responds to the click.

* [OnClientItemClicked]({%slug menu/client-side-programming/events/onclientitemclicked%}) occurs immediately after the menu responds to an item click.

* [OnClientMouseOver]({%slug menu/client-side-programming/events/onclientmouseover%}) occurs when the mouse moves over the menu.

* [OnClientMouseOut]({%slug menu/client-side-programming/events/onclientmouseout%}) occurs when the mouse moves off of the menu.

* [OnClientItemOpening]({%slug menu/client-side-programming/events/onclientitemopening%}) occurs immediately before an item expands to show its child items.

* [OnClientItemOpened]({%slug menu/client-side-programming/events/onclientitemopened%}) occurs immediately after an item expands to show its child items.

* [OnClientItemClosing]({%slug menu/client-side-programming/events/onclientitemclosing%}) occurs immediately before an item contracts, hiding its child items.

* [OnClientItemClosed]({%slug menu/client-side-programming/events/onclientitemclosed%}) occurs immediately after an item contracts to hide its child items.

* [OnClientItemFocus]({%slug menu/client-side-programming/events/onclientitemfocus%}) occurs when focus moves to an item.

* [OnClientItemBlur]({%slug menu/client-side-programming/events/onclientitemblur%}) occurs when focus leaves an item.

* [OnClientItemPopulating]({%slug menu/client-side-programming/events/onclientitempopulating%}) occurs when an item with **ExpandMode** set to "WebService" is opened, immediately before the menu calls the Web service to populate the list of child items.

* [OnClientItemPopulated]({%slug menu/client-side-programming/events/onclientitempopulated%}) occurs immediately after the list of child items for an item with **ExpandMode** set to "WebService" has been populated by a Web service.

* [OnClientItemPopulationFailed]({%slug menu/client-side-programming/events/onclientitempopulationfailed%}) occurs when an attempt to populate a list of child items using a Web service fails.

* [OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%}) (**RadContextMenu** only) occurs immediately before the context menu appears.

* [OnClientShown]({%slug menu/client-side-programming/events/onclientshown%}) (**RadContextMenu** only) occurs immediately after the context menu appears.

* [OnClientHidden]({%slug menu/client-side-programming/events/onclienthidden%}) (**RadContextMenu** only) occurs when the context menu disappears.

* [OnClientHiding]({%slug menu/client-side-programming/events/onclienthiding%}) (**RadContextMenu** only) occurs immediately before the context menu disappears.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding **RadMenu** or **RadContextMenu** property.

````ASP.NET
<script type="text/javascript">
    function onClicking(sender, eventArgs) {
        var item = eventArgs.get_item();
        var navigateUrl = item.get_navigateUrl();
        if (navigateUrl && navigateUrl != "#") {
            var proceed = confirm("Navigate to " + navigateUrl + " ?");     
            if (!proceed)     
            {       
                eventArgs.set_cancel(true);     
            }   
        } 
    }
</script>
<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" OnClientItemClicking="onClicking">
...
</telerik:RadMenu>
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
function onClickedHandler1() {
    alert("First handler called");
}

function onClickedHandler2() {
    alert("Second handler called");
}

function pageLoad() {
    var menu = $find("<%=RadMenu1.ClientID%>");
    menu.add_itemClicked(onClickedHandler1);
    menu.add_itemClicked(onClickedHandler2);
}			
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
function removeOnClicked2() {
    var menu = $find("<%=RadMenu1.ClientID%>");
    menu.remove_itemClicked(removeOnClicked2);
}			
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondance between client-side and server-side names:


>caption  

| Server-Side Name | Client-Side Name | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientLoad|load|add_load, remove_load|
|OnClientItemClicking|itemClicking|add_itemClicking, remove_itemClicking|
|OnClientItemClicked|itemClicked|add_itemClicked, remove_itemClicked|
|OnClientMouseOver|mouseOver|add_mouseOver, remove_mouseOver|
|OnClientMouseOut|mouseOut|add_mouseOut, remove_mouseOut|
|OnClientItemOpening|itemOpening|add_itemOpening, remove_itemOpening|
|OnClientItemOpened|itemOpened|add_itemOpened, remove_itemOpened|
|OnClientItemClosing|itemClosing|add_itemClosing, remove_itemClosing|
|OnClientItemClosed|itemClosed|add_itemClosed, remove_itemClosed|
|OnClientItemFocus|itemFocus|add_itemFocus, remove_itemFocus|
|OnClientItemBlur|itemBlur|add_itemBlur, remove_itemBlur|
|OnClientItemPopulating|itemPopulating|add_itemPopulating, remove_itemPopulating|
|OnClientItemPopulated|itemPopulated|add_itemPopulated, remove_itemPopulated|
|OnClientItemPopulationFailed|itemPopulationFailed|add_itemPopulationFailed, remove_itemPopulationFailed|
|OnClientShowing|showing|add_showing, remove_showing|
|OnClientShown|shown|add_shown, remove_shown|
|OnClientHidden|hidden|add_hidden, remove_hidden|

## Enabling and disabling events

If you want for some reason to temporarily "mute" the control event emitting (or, respectively, to "unmute" the events again), you may use the **disableEvents()** and **enableEvents()** methods. Unlike adding and removing individual event handlers, **enableEvents()** and **disableEvents()** affect all events at once.


For a live example illustrating the RadMenu client-side events, see [Client-side events](https://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/ClientEvents/DefaultCS.aspx).

# See Also

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})

 * [Events]({%slug menu/server-side-programming/events%})
