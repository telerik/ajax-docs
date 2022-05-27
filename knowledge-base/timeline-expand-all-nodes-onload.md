---
title: Expand all nodes when the timeline is loaded
description: See how to expand all timeline events when the control loads - Timeline for ASP.NET AJAX
type: how-to
page_title: Expand all events when the control is loaded
slug: timeline-expand-all-nodes-onload
position: 
tags: 
ticketid: 1566879
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadTimeLine for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Check out the code solution below to learn how to expand all timeline nodes on load.

## Solution
The solution shows how to get reference to the underlying Kendo UI timeline object and use its expand method to expand the event-related nodes:

````ASP.NET
<script>
    function OnClientLoad(sender, args) {
        var timelineObject = $find("<%=RadTimeline1.ClientID %>"); //the standard script control object
        var kendoTimeline = timelineObject.get_kendoWidget(); //the Kendo widget
        var allEvents = kendoTimeline.element.find(".k-timeline-event");
        kendoTimeline.expand(allEvents);
    }
</script>
<telerik:RadTimeline runat="server" ID="RadTimeline1" 
    Orientation="Vertical" CollapsibleEvents="true"
    EventWidth="250" AlternatingMode="true">
    <ClientEvents OnLoad="OnClientLoad" />
    <Items>
        <telerik:TimelineItem Date="2020/3/14" Title="March Event" Subtitle="14 March 2020" Description="Meeting with John">
            <Actions>
                <telerik:TimelineItemAction Text="Action 1" Url="https://google.com/search?q=action1" />
            </Actions>
        </telerik:TimelineItem>

        <telerik:TimelineItem Date="2020/3/15" Title="March Event" Subtitle="15 March 2020" Description="Meeting with Amy">
            <Actions>
                <telerik:TimelineItemAction Text="Action 2" Url="https://google.com/search?q=action2" />
            </Actions>
        </telerik:TimelineItem>
    </Items>
</telerik:RadTimeline>
````


## See Also
* [RadTimeline Object]({%slug timeline/client-side-programming/overview%})
* [Kendo UI TimeLine expand method](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/methods/expand#expand)
   
   
    
