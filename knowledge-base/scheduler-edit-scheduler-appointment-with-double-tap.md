---
title: Edit scheduler appointment with double tap
description: Edit scheduler appointment with double tap. Check it now!
type: how-to
page_title: Edit scheduler appointment with double tap - Telerik UI for ASP.NET AJAX - KB
slug: scheduler-edit-scheduler-appointment-with-double-tap
res_type: kb
---


### PROBLEM

Double tapping an appointment on a mobile device does not open the AdvancedEditForm.

### DESCRIPTION

Usually the double tap zooms in and out on a mobile device and there is no built-in event for the double tap action.

### SOLUTION

To simulate the double tap event, we can use the touchstart event with a setTimeout as suggested in this StackOverflow forum post: [Touch device, Single and Double Tap Events handler jQuery/Javascript?](https://stackoverflow.com/questions/24058241/touch-device-single-and-double-tap-events-handler-jquery-javascript).

Once we know how to subscribe to the double tap event, we can hook the event to the elements with class *rsApt* in the *Sys.Application.load* event for example. In the event handler we can open the AdvancedEditForm with the *scheduler.editAppointmentWithConfirmation(apt);* method similar to the explanation in [Edit an appointment with single click](https://docs.telerik.com/devtools/aspnet-ajax/controls/scheduler/how-to/edit-and-insert-appointment-with-single-click#edit-an-appointment-with-single-click).

````ASP.NET
<telerik:RadCodeBlock runat="server">
    <script>
        var tapped;
        function pageLoadHandler() {
            var $ = $ || $telerik.$;
            $(".rsApt").on("touchstart", function (e) {
                if (!tapped) { //if tap is not set, set up single tap
                    tapped = setTimeout(function () {
                        tapped = null
                        //insert things you want to do when single tapped
                    }, 300);   //wait 300ms then run single click code
                } else {    //tapped within 300ms of last tap. double tap
                    clearTimeout(tapped); //stop single tap callback
                    tapped = null;
                    console.log("doubletap");
                    var scheduler = $find("<%= RadScheduler1.ClientID %>");
                    var apt = scheduler.getAppointmentFromDomElement(this);
                    scheduler.editAppointmentWithConfirmation(apt);
                     
                }
                e.preventDefault()
            });
        }
        Sys.Application.add_load(pageLoadHandler);
    </script>
</telerik:RadCodeBlock>
````

### See Also

* [Touch device, Single and Double Tap Events handler jQuery/Javascript?](https://stackoverflow.com/questions/24058241/touch-device-single-and-double-tap-events-handler-jquery-javascript)
* [Edit an appointment with single click](https://docs.telerik.com/devtools/aspnet-ajax/controls/scheduler/how-to/edit-and-insert-appointment-with-single-click#edit-an-appointment-with-single-click)



