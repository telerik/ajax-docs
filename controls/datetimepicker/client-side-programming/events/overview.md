---
title: Overview
page_title: Overview | RadDateTimePicker for ASP.NET AJAX Documentation
description: Overview
slug: datetimepicker/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



The **RadCalendar** controls support a number of client-side events that let you respond to user actions without a postback. The following table lists the various client events, and which controls they apply to:


| Event | Description |
| ------ | ------ |
|[OnDateSelected]({%slug datetimepicker/client-side-programming/events/ondateselected%}) | Occurs immediately after the value of the control's selection has been changed. |
|[OnPopupOpening]({%slug datetimepicker/client-side-programming/events/onpopupopening%}) | Occurs immediately before a popup is displayed, before the selection in the popup is synchronized with the input area. |
|[OnPopupClosing]({%slug datetimepicker/client-side-programming/events/onpopupclosing%}) | Occurs immediately before the a popup is closed. |



>note The embedded **RadDateInput** object that is used by **RadDateTimePicker** also has a number of client events. See the **RadInput** documentation for details.
>


To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.

````ASPNET
<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDateTimePicker>
````
````JavaScript
function popupOpening(sender, args) {
    alert("popup is opening");
}
````




# See Also

 * [Overview]({%slug datetimepicker/client-side-programming/raddatetimepicker-object%})


