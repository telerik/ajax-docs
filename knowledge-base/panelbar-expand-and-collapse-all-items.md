---
title: Expand and Collapse all Items of RadPanelBar Control with a Button
description: How to create a button, that expands and collapses all the items from RadPanelBar?
type: how-to
page_title: Expand and collapse all items in RadPanelBar
slug: panelbar-expand-and-collapse-all-items
position: 
tags: 
ticketid: 1581316
res_type: kb
---

## Description

Create a button, that expands and collapses all the items from RadPanelBar

## Solution

Using the client-side API of the RadPanelBar is getting the instance of a particular item, and call the expand()/ collapse() methods. 

* [Client-side API](https://demos.telerik.com/aspnet-ajax/panelbar/examples/clientside/clientsideapi/defaultcs.aspx?_gl=1*zfbr99*_ga*MTUyNTIyMjE0Mi4xNjYxOTU0MDI1*_ga_9JSNBCSF54*MTY2Njk2MTE3Ny4yMy4xLjE2NjY5NjI2NzUuMC4wLjA.)

Here is sample code demonstrating the approach:

````JavaScript
var shouldExpand = true;
function expandAllItems() {
    var panel = $find("<%=RadPanelBar1.ClientID%>");
    var items = panel.get_allItems();
    for (var i = 0; i < items.length;i++) {
        if (shouldExpand) {
            items[i].expand();
        }
        else {
            items[i].collapse();
        }
    }
    //The button will execute the opposite action every time when is pressed. 
    shouldExpand = !shouldExpand;
}
````

````ASPX
<telerik:RadButton RenderMode="Lightweight" ID="LoadButton" runat="server" Text="Expand" OnClientClicking="expandAllItems" AutoPostBack="false" />

<telerik:RadPanelBar RenderMode="Lightweight" runat="server" ID="RadPanelBar1" Width="200">
    <Items>
        <telerik:RadPanelItem Text="Mail">
            <Items>
                <telerik:RadPanelItem Text="Personal Folders" />
                <telerik:RadPanelItem Text="Deleted Items" />
                <telerik:RadPanelItem Text="Inbox" />
            </Items>
        </telerik:RadPanelItem>
        <telerik:RadPanelItem Text="Contacts">
            <Items>
                <telerik:RadPanelItem Text="My Contacts" />
                <telerik:RadPanelItem Text="Address Cards" />
            </Items>
        </telerik:RadPanelItem>
        <telerik:RadPanelItem Text="Folders List">
            <Items>
                <telerik:RadPanelItem Text="My Client.Net" />
                <telerik:RadPanelItem Text="My Profile" />
            </Items>
        </telerik:RadPanelItem>
    </Items>
</telerik:RadPanelBar>
````

 