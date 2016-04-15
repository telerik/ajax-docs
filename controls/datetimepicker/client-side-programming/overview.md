---
title: Overview
page_title: Client-side Programming Overview | RadDateTimePicker for ASP.NET AJAX Documentation
description: RadDateTimePicker Client-side Events Overview
slug: datetimepicker/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Overview



The **RadDateTimePicker** control provides a flexible client-side API. In addition to a variety of [client-side events]({%slug datetimepicker/client-side-programming/events/overview%}), the client-side object model lets you achieve various tasks while avoiding unnecessary postbacks.

## Getting the client-side object

All the API methods are accessible via the registered JavaScript objects for the **RadDateTimePicker** control. The following code snippet illustrates how you can get the client-side object of **RadDateTimePicker**:

````JavaScript
<script type="text/javascript">
    var datetimepicker = $find("<%= RadDateTimePicker1.ClientID %>");
</script>
````
````ASPNET
<telerik:RadDateTimePicker RenderMode="Lightweight" runat="server" ID="RadDateTimePicker1">
</telerik:RadDateTimePicker>
````


## Getting a reference to child elements

For the **RadDateTimePicker** you can access client-side objects for the child elements using the methods listed below:


| Object Type | Method |
| ------ | ------ |
|RadInput|get_dateInput()|
|RadCalendar|get_calendar()|
|RadTimeView|get_timeView()|

In addition, you can access the DOM elements for various parts of the controls using the methods listed below:


| Element | Method |
| ------ | ------ |
|Entire control|get_element()|
|CalendarPopupButton|get_popupButton()|
|TimePopupButton|get_timePopupButton()|
|TextBox of input area|get_textBox()|
|DIV for popup calendar|get_popupContainer()|
|DIV for popup time view|get_timePopupContainer()|


## Getting and setting the selected date

To get the selected date for a **RadDateTimePicker** control, use the **get_selectedDate** method. This method returns a Date object. To set the selected date, use the **set_selectedDate** method:

````JavaScript
function incrementDate(picker) {
    var date = picker.get_selectedDate();
    date.setDate(date.getDate() + 1);
    picker.set_selectedDate(date);
}
````



You can also use the **getTime** and **setTime** methods of the embedded **RadTimeView**:

````JavaScript
function getTime() {
    var picker = $find("<%=RadDateTimePicker1.ClientID%>");
    var view = picker.get_timeView();
    alert(view.getTime());
}		
````



## Getting and setting minimum and maximum values

The following methods get or set the minimum and maximum values:


| Method | Description |
| ------ | ------ |
|get_minDate()|Returns the minimum date as a Date object.|
|set_minDate(date)|If the date is valid, sets the minimum date.|
|get_maxDate()|Returns the maximum date as a Date object.|
|set_maxDate(date)|If the date is valid, sets the maximum date.|

## Clearing selected values

On **RadDateTimePicker**  you can use the **clear()** method:

````JavaScript
function clearPickers() {
    var datetimepicker = $find("<%= RadDateTimePicker1.ClientID %>");
    datetimePicker.clear();
}
````



## Enabling and disabling the RadDateTimePicker control

To enable or disable the **RadDateTimePicker** control, you need to call the **set_enabled(bool)** client-side method of the Picker client-side object:



````JavaScript
function disable() {
	var picker = $find("<%= RadDateTimePicker1.ClientID %>");
    picker.set_enabled(false);
}
function enable() {
    var picker = $find("<%= RadDateTimePicker1.ClientID %>");
    picker.set_enabled(true);
}    
````
````ASPNET
<telerik:RadScriptManager id="RadScriptManager1" runat="server"></telerik:RadScriptManager>
<telerik:RadDateTimePicker RenderMode="Lightweight" ID="RadDateTimePicker1" runat="server"></telerik:RadDateTimePicker>


<input type="button" value="disable" onclick="disable()" />
<input type="button" value="enable" onclick="enable()" />
````


## Showing and hiding the popup

The **RadDateTimePicker** objects include a number of methods for showing and hiding the popup controls:


| Method | Description |
| ------ | ------ | ------ |
|showPopup()|Displays the popup calendar. Optionally you can specify a position for the popup.|
|hidePopup()|Hides the popup calendar if it is visible.|
|togglePopup()|Hides the popup calendar if it is visible and shows the popup if it is not.|
|showTimePopup()|Displays the popup time view. Optionally you can specify a position for the popup.|
|hideTimePopup()|Hides the popup time view if it is visible.|
|toggleTimePopup()|Hides the popup time view if it is visible and shows the popup if it is not.|

# See Also

 * [RadDateTimePicker Object]({%slug datetimepicker/client-side-programming/raddatetimepicker-object%})

 * [RadTimeView Object]({%slug datetimepicker/client-side-programming/radtimeview-object%})
 
 
