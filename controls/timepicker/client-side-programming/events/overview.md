---
title: Overview
page_title: Overview | RadTimePicker for ASP.NET AJAX Documentation
description: Overview
slug: timepicker/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



The **RadTimePicker** control supports a number of client-side events that let you respond to user actions without postback. The following table lists the available client-side events:


| Event | Description |
| ------ | ------ |
|[OnDateSelected]({%slug timepicker/client-side-programming/events/ondateselected%})| Occurs immediately after the value of the control's selection has been changed. |
|[OnPopupOpening]({%slug timepicker/client-side-programming/events/onpopupopening%})| Occurs immediately before a popup is displayed, before the selection in the popup is synchronized with the input area. |
|[OnPopupClosing]({%slug timepicker/client-side-programming/events/onpopupclosing%})| Occurs immediately before the a popup is closed. |


>note The embedded **RadDateInput** object that is used by **RadTimePicker** also has number of client events. See the **RadInput** documentation for details.
>


To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.

````ASPNET
<telerik:RadTimePicker ID="RadTimePicker1" runat="server">
    <TimeView OnClientTimeSelected="clientTimeSelected"></TimeView>
</telerik:RadTimePicker>
````
````JavaScript
function clientTimeSelected(sender, e) {
	var oldTime = e.get_oldTime() ? (e.get_oldTime().localeFormat("h:mm tt")) : "";
	var newTime = e.get_newTime() ? (e.get_newTime().localeFormat("h:mm tt")) : "";
	var info = "OnClientTimeSelected: " + "oldTime- " + oldTime + ", newTime- " + newTime;
	
	alert(info);
}
````



# See Also

 * [Overview]({%slug timepicker/client-side-programming/overview%})
 
 * [RadTimePicker Object]({%slug timepicker/client-side-programming/radtimepicker-object%})
 
 
