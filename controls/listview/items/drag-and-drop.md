---
title: Drag and Drop
page_title: Drag and Drop | RadListView for ASP.NET AJAX Documentation
description: Drag and Drop
slug: listview/items/drag-and-drop
tags: drag,and,drop
published: True
position: 0
---

# Drag and Drop


**RadListView** offers the Items Drag & Drop capability, allowing you to easily implement scenarios that require dragging and moving data items on the page. For an online sample project, please check the [RadListView Items Drag & Drop demo](http://demos.telerik.com/aspnet-ajax/listview/examples/itemdragdrop/defaultcs.aspx).

To enable Items Drag & Drop in RadListView:

1. Set **RadListView.ClientSettings.AllowItemsDragDrop="true"**.

1. Add a **RadListViewItemDragHandle** control to your `ItemTemplate` / `AlternatingItemTemplate`.

1. Add a CSS marker on a data item container element (**.rlvI** for `ItemTemplate`, **.rlvA** for `AlternatingItemTemplate`)

>tip When Items Drag & Drop is enabled, RadListView renders client scripts that facilitate the dragging of items on the page. To be able to grab and move items, you need to place a **RadListViewItemDragHandle** control inside your `ItemTemplate` / `AlternatingItemTemplate`. This control renders a visual drag handle that you can use to move the items.


````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" DataSourceID="SqlDataSource1"
    OnItemDrop="RadListView1_ItemDrop" ItemPlaceholderID="TrackContainer" DataKeyNames="TrackID"
    ClientDataKeyNames="TrackID" EnableEmbeddedSkins="false" Skin="">
    <ClientSettings AllowItemsDragDrop="true">
        <ClientEvents OnItemDropping="trackDropping" />
    </ClientSettings>
    <LayoutTemplate>
        <asp:PlaceHolder ID="TrackContainer" runat="server"></asp:PlaceHolder>
    </LayoutTemplate>

    <ItemTemplate>
        <div class="track rlvI">
            <telerik:RadListViewItemDragHandle ID="RadListViewItemDragHandle1" runat="server"
                ToolTip="Drag to organize" />
            <div class="info">
                <h3>
                    <%# Eval("Track") %>&nbsp;<%# Eval("Title") %>
                </h3>
                <div class="artist">
                    <%# Eval("Artist") %>
                </div>
                <div class="album">
                    <%# Eval("Album") %>
                    <%# Eval("Year").ToString() != "" ? "(" + Eval("Year").ToString() + ")" : "" %>
                </div>
            </div>
        </div>
    </ItemTemplate>
</telerik:RadListView>
````



>tip When you start moving your grabbed item, RadListView needs to create a dragged item HTML element that will be moved along with your mouse cursor. This dragged item is a replica of the HTML element representing your data item. Therefore, you need to specify the container element of your data items through the **.rlvI** and **.rlvA** CSS classes. These are the same CSS classes applied to RadListView's data items when using [built-in RadListView Skins](http://www.telerik.com/help/aspnet-ajax/listview-skins.html).

>tip Item drag-and-drop is supported only with server-side data binding. For workarounds that may enable you to work with client-side data binding, see the following KB article: [Item drag and drop with client data binding](https://www.telerik.com/support/kb/aspnet-ajax/listview/details/item-drag-and-drop-with-client-data-binding).

## Events

On the server, RadListView fires the **ItemDrop** event you can handle. The event argument passed to the handler is of type **RadListViewItemDragDropEventArgs** and it exposes the **DraggedItem** and **DestinationHtmlElement** properties. The former references the RadListViewDataItem that has been dropped, while the latter is the client ID of the target HTML element, if any.

On the client-side, RadListView provides 4 client events you can use:

* **OnItemDragStarted** - Fired when an item is about to be dragged (cancellable)

* **OnItemDragging** - Fired when an item is dragged (on mouse move)

* **OnItemDropping** - Fired when an item is dropping on a target element (cancellable)

* **OnItemDropped** - Fired after OnItemDropping, before RadListView postbacks

All client events, except for OnItemDragging, pass the dragged item display index as well as any client data key values to the event handler through the second (**args**) parameter. Additionally, the `OnItemDropping` and `OnItemDropped` events also pass the destination HTML element inside the event arguments object.

````JavaScript
function OnItemDroppingHandler(sender, args)
{
    var dest = args.get_destinationElement();
    if (!dest || !dest.id || dest.id.indexOf("GenreLink") < 0)
    {
        args.set_cancel(true);
    }
}
````

## Custom Drag Handle


As of version **Q2 2010 SP1** of Telerik controls, RadListView supports custom drag handles. To implement a custom drag handle for your listview items, you should:

1. Add the **.rlvDrag** CSS class to your drag handle element

1. Add the following **onmousedown** event handler to the drag handle element:

	**ASPX**

		Telerik.Web.UI.RadListView.HandleDrag(event, '[RadListViewClientID]', [ItemDisplayIndex])

	where **[RadListViewClientID]** is the ClientID of the RadListView instance, while **[ItemDisplayIndex]** is the ListViewDataItem.DisplayIndex of the current item.

For example, if you have a generic **`<div>`** container in your RadListView ItemTemplate that you want to turn into a drag handle, you can use the following markup:

````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server">
    <ItemTemplate>
        <div class="rlvI">
            <div class="rlvDrag" onmousedown="Telerik.Web.UI.RadListView.HandleDrag(event, '<%# Container.OwnerListView.ClientID %>', <%# Container.DisplayIndex%>)">
            </div>
            <div>
    </ItemTemplate>
</telerik:RadListView>
````



The above code demonstrates the usage of binding expressions to get the ClientID of the list view and `DisplayIndex` of the current item. The container with class name **.rlvDrag** now can be used to drag the list view item. It is also possible to combine the **.rlvI** and **.rlvDrag** CSS classes into the topmost container to make the entire list view item draggable by clicking anywhere inside.
