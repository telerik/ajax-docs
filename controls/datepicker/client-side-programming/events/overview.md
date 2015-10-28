---
title: Overview
page_title:  Client-side events Overview | RadDatePicker for ASP.NET AJAX Documentation
description: RadDatePicker Client-side events Overview
slug: datepicker/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



The **RadDatePicker** control supports a number of client-side events that let you respond to user actions without a postback. The following table lists the various client events, and which controls they apply to:


| Event | Applies to | Description |
| ------ | ------ | ------ |
|[OnDateSelected]({%slug datepicker/client-side-programming/events/ondateselected%})| **RadDatePicker** |Occurs immediately after the value of the control's selection has been changed.|
|[OnPopupOpening]({%slug datepicker/client-side-programming/events/onpopupopening%})| **RadDatePicker** |Occurs immediately before a popup is displayed, before the selection in the popup is synchronized with the input area.|
|[OnPopupClosing]({%slug datepicker/client-side-programming/events/onpopupclosing%})| **RadDatePicker** |Occurs immediately before the a popup is closed.|


>note The embedded **RadDateInput** object that is used by **RadDatePicker** also has number of client-side events. See the **RadInput** documentation for details.
>


To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.


````ASPNET
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDatePicker>
````
````JavaScript
function popupOpening(sender, args) {
	alert("popup is opening");
}
````


# See Also

 * [RadDatePicker Client-side Object]({%slug datepicker/client-side-programming/raddatepicker-object%})
 
 
