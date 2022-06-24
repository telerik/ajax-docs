---
title: Client Event triggered on multiple timeslot selected
description: A client-side event triggered when the selection of multiple timeslots by dragging is finished
type: how-to
page_title: Multiple timeslot selected client event
slug: scheduler-client-event-on-multiple-timeslots-selected
position: 
tags: 
ticketid: 1570017
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadScheduler for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
How to execute some logic after the selection of multiple timeslots by dragging is finished.

## Suggested Workarounds
The OnClientTimeSlotClick is not triggered when multiple slots are selected by dragging. To workaround this, you can override the internal functionality of the Scheduler and move your logic in this event instead. 

To do that, you can place/load this script somewhere under the script manager:

````ASP.NET
<telerik:RadCodeBlock runat="server">
    <script>
        if (Telerik && Telerik.Web.UI.RadScheduler) {
            Telerik.Web.UI.RadScheduler.prototype._onRowSelectionMouseUp = function (e) {
                this._abortRowSelection();
                var scheduler = this;

                console.log("row selection mouse up");
            }
        }
    </script>
</telerik:RadCodeBlock>
````

## See Also

* [RadScheduler documentation]({%slug scheduler/overview%})

* [RadScheduler online demos](https://demos.telerik.com/aspnet-ajax/scheduler/examples/overview/defaultcs.aspx)
