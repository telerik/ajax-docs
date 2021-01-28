---
title: Drag and Drop Appointment from RadScheduler to RadScheduler
page_title: Drag and Drop Appointment from RadScheduler to RadScheduler - RadScheduler
description: Check our Web Forms article about Drag and Drop Appointment from RadScheduler to RadScheduler.
slug: scheduler/how-to/drag-and-drop-appointment-from-RadScheduler-to-RadScheduler
tags: drag-drop,drag,drop,appointment
published: True
position: 11
---

# Drag and Drop Appointment from RadScheduler to RadScheduler


## 

The RadScheduler **client side API** offers the possibility to implement a custom drag and drop scenario between two instances of the control. In order to achieve the desired behavior, the **OnClientAppointmentMoveStart**, the **OnClientAppointmentMoving** and the **OnClientAppointmentMoveEnd** event handlers of the source RadScheduler should be implemented:

````JavaScript

var globalFlag = false;
var flag = false;

function OnClientAppointmentMoveStart(sender, args) {
    var $ = $telerik.$;
    var DroppedOnScheduler = $find("RadScheduler2");
    var dragZone = $(".dragZone");
    var clonedElement = $(args.get_appointment().get_element()).clone();

    flag = true;
    $(document)
        .on("mousemove", function (e) {
            if (flag) {
                if ($(e.target).closest(sender.get_element()).length > 0) {
                    clonedElement.hide();
                } else {
                    globalFlag = true;
                    clonedElement.show().css("position", "fixed").css("left", e.pageX + 5).css("top", e.pageY + 5);
                }
            }
        })
        .on("mouseup", function (e) {
            if (flag) {
                clonedElement.hide().removeAttr("style");
                if ($(e.target).closest("#" + DroppedOnScheduler.get_id()).length > 0) {
                    var apt = args.get_appointment();
                    var timeSlot = DroppedOnScheduler.get_activeModel().getTimeSlotFromDomElement(e.target);
                    var startTime = timeSlot.get_startTime();
                    var endTime = new Date(startTime);
                    var duration = apt.get_durationInMinutes();
                    var newAppointment = new Telerik.Web.UI.SchedulerAppointment();

                    endTime.setMinutes(endTime.getMinutes() + parseInt(duration));
                    newAppointment.set_start(startTime);
                    newAppointment.set_end(endTime);
                    newAppointment.set_subject(apt.get_subject());
                    DroppedOnScheduler.insertAppointment(newAppointment);
                }
            }

            flag = false;
            globalFlag = false;
            $(document).off();
            dragZone.empty();
        });

    if (dragZone.find(".rsApt").length == 0) {
        clonedElement.hide();
        dragZone.append(clonedElement);
    }
}

function OnClientAppointmentMoving(sender, args) {
    args.set_cancel(globalFlag);
}

function OnClientAppointmentMoveEnd(sender, args) {
    args.set_cancel(globalFlag);
}

````

Fully working example of the above implementation could be found in the following [**Code library**](https://www.telerik.com/support/code-library/drag-and-drop-appointment-from-radscheduler-to-radscheduler).

# See Also

 * [Client side events]({%slug scheduler/client-side-programming/events/overview%})

