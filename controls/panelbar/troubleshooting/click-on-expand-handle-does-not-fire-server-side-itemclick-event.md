---
title: Click on Expand Handle Does Not Fire Server-Side ItemClick Event
page_title: Click on Expand Handle Does Not Fire Server-Side ItemClick Event - RadPanelBar
description: Check our Web Forms article about Click on Expand Handle Does Not Fire Server-Side ItemClick Event.
slug: panelbar/troubleshooting/click-on-expand-handle-does-not-fire-server-side-itemclick-event
tags: click,on,expand,handle,does,not,fire,server-side,itemclick,event
published: True
position: 1
---

# Click on Expand/Collapse Handle Does Not Fire Server-Side ItemClick Event



## 

**PROBLEM**

If I click on the Expand/Collapse button of the RadPanelItem the ItemClick never fires.

**EXPLANATION**

In general expanding and collapsing RadPanelItems is entirely a client-side functionality. It is implemented for scenarios when **NavigateUrl** property of the item is set. The expand/collapse handle enables a user to expand and collapse the item without navigating to the assigned page. It is intended by design that clicking the handle neither performs a postback of the page, nor triggers any of the RadPanelBar events.

**WORKAROUND**

Below you can find several workarounds to enable the server side ItemClick event when expanding/collapsing a RadPanelItem.

* Hide the expand/collapse handle using css:

````CSS
.rpExpandHandle {
    display: none !important;
}
````



* Fire RadPanelItem's click event when expand/collapse handle is clicked:

````ASPNET
function OnClientLoad(sender) {
    var $ = $telerik.$
    $('span.rpExpandHandle').on('mouseup', function (e) {
        // if clicked with left mouse button 
        if (e.which == 1) {
            var itemText = $(this).parent().find(".rpText").text();
            var panelBar = $find("<%= RadPanelBar1.ClientID %>");

            var panelItem = panelBar.findItemByText(itemText);
            panelItem.click();
        }
    })
}
````


````ASPNET
<telerik:RadPanelBar runat="server" ID="RadPanelBar1"
    OnItemClick="RadPanelBar1_ItemClick"
    OnClientLoad="OnClientLoad">
    <Items>
        <telerik:RadPanelItem Text="Item1">
            <Items>
                <telerik:RadPanelItem Text="Item1">
                </telerik:RadPanelItem>
                <telerik:RadPanelItem Text="Item2">
                </telerik:RadPanelItem>
            </Items>
        </telerik:RadPanelItem>
        <telerik:RadPanelItem Text="Item2">
        </telerik:RadPanelItem>
        <telerik:RadPanelItem Text="Item3">
        </telerik:RadPanelItem>
    </Items>
</telerik:RadPanelBar>
````

>note Since a postback is needed for this approach to work, the PanelBar is subscribed to the OnItemClick server-side event.
>
