---
title: Events Overview
page_title: Overview - RadTimeline
description: Check our Web Forms article about Overview.
slug: timeline/client-side-programming/events
tags: overview,events
published: True
position: 1
---

# Events Overview

This article lists the clients-side events of the **RadTimeline** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadTimeline]({%slug timeline/client-side-programming/overview%}) instance that raised the event
1. `event arguments` - event-specific data provided to the developer

RadTimeline is a wrapper over the Kendo UI Timeline widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are avaliable through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel an event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadTimeline

* [OnActionClick](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/events/actionclick)—Fired when an action for an event is clicked.

* [OnChange](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/events/change)—Fired when a new event is opened in horizontal mode. Cancellable.

* [OnCollapse](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/events/collapse)—Fired when an event is going to be collapsed in vertical mode. Cancellable.

* [OnDataBound](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/events/databound)—Fired when the widget is bound to data from its data source.

* [OnExpand](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/events/expand)—Fired when an event is going to be expanded in vertical mode. Cancellable.

* **OnInitialize**—Fired just before the RadTimeline client-side object is initialized.

* **OnLoad**—Fired when RadTimeline is initialized.

* [OnNavigate](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/events/open)—Fired when the left or right arrow is clicked, changing a range of events. Cancellable.


## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````JavaScript
<script>
    var timeline, kendoTimeline;
    function OnLoad(sender, args) {
        timeline = sender; //the RadTimeline
        kendoTimeline = sender.get_kendoWidget(); //the underlying Kendo Timeline
    }
</script>
<telerik:RadTimeline runat="server" ID="RadTimeline1">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadTimeline>
````

>caption Example 2: Get the data associated to the clicked action

````JavaScript
<script>
    function OnActionClick(timeline, args) {
        var clickedEl = args.get_element()
        alert("You have clicked the '" + clickedEl.text() + "' action");
    }
</script>
<telerik:RadTimeline runat="server" ID="RadTimeline1" EventWidth="250">
    <ClientEvents OnActionClick="OnActionClick" />
    <Items>
        <telerik:TimelineItem Date="2020/3/14" Title="March Event" Subtitle="14 March 2020" CustomProp="expandable"
            Description="Meeting with John">
            <Actions>
                <telerik:TimelineItemAction Text="Action 1" Url="https://google.com/search?q=action1" />
            </Actions>
        </telerik:TimelineItem>
    </Items>
</telerik:RadTimeline>
````

>caption Example 3: Cancel OnExpand event based on custom property value

````JavaScript
<script>
    function OnExpand(sender, args) {
        var item = args.get_dataItem();
        if (item.attributes && item.attributes.CustomProp && item.attributes.CustomProp == "expandable") {
            console.log("You have expanded " + item.title + "with description: " + item.description);
        }
        else {
            alert("This item has no details.");
            args.set_cancel(false);
        }
    }
</script>
<telerik:RadTimeline runat="server" ID="RadTimeline1" CollapsibleEvents="true" EventWidth="250">
    <ClientEvents OnExpand="OnExpand" />
    <Items>
        <telerik:TimelineItem Date="2020/3/14" Title="March Event" Subtitle="14 March 2020" CustomProp="expandable"
            Description="Meeting with John">
            <Actions>
                <telerik:TimelineItemAction Text="Action 1" Url="https://google.com/search?q=action1" />
            </Actions>
        </telerik:TimelineItem>
        <telerik:TimelineItem Date="2020/3/15" Title="March Event" Subtitle="15 March 2020"
            Description="Meeting with John">
            <Actions>
                <telerik:TimelineItemAction Text="Action 1" Url="https://google.com/search?q=action1" />
            </Actions>
        </telerik:TimelineItem>
    </Items>
</telerik:RadTimeline>
````


## See Also

* [Live Demo - Client-side Events](https://demos.telerik.com/aspnet-ajax/timeline/client-side-events/defaultcs.aspx)

* [RadTimeline Client-side Object]({%slug timeline/client-side-programming/overview%})











