---
title: Overview
page_title: Client-side Programming Overview | RadTimePicker for ASP.NET AJAX Documentation
description: Client-side Programming Overview
slug: timepicker/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



The **RadTimePicker** control provides flexible client-side API. You can easily interact with the controls in the browser using their client-side objects. In addition to a variety of [client-side events]({%slug timepicker/client-side-programming/events/overview%}), the client-side object model enables you to achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadTimePicker client-side object

The API methods are accessible via the registered JavaScript object. A global variable with the same name as the **ClientID** of the control is available:

````JavaScript
<script type="text/javascript">
    var timepicker = $find("<%= RadTimePicker1.ClientID %>");
</script>
````
````ASPNET
<telerik:RadTimePicker runat="server" ID="RadTimePicker1">
</telerik:RadTimePicker>
````


## Getting a reference to child elements

For the **RadTimePicker** you can access client-side objects for the child elements using the methods listed below:


| Object Type | Method |
| ------ | ------ |
|RadTimeView|get_timeView()|

In addition, you can access the DOM objects for various parts of the controls using the methods listed below:


| Element | Method |
| ------ | ------ | ------ |
|Entire control|get_element()|
|TimePopupButton|get_timePopupButton()|
|TextBox of input area|get_textBox()|
|DIV for popup calendar|get_popupContainer()|
|DIV for popup time view|get_timePopupContainer()|

## Getting and setting the selected time

To get the selected time on a **RadTimePicker** control, use the **get_selectedDate** method. This method returns a Date object. To set the selected date, use the **set_selectedDate** method. The code snippet below illustrates how you can get the selected time and increment it by one hour.

````JavaScript
function incrementTime(picker) {
   var date = picker.get_selectedDate();
   date.setHours(date.getHours() + 1);
   picker.set_selectedDate(date);
}	
````


On **RadTimePicker**  you can also use the **getTime** and **setTime** methods of the embedded **RadTimeView**:

````JavaScript
<script type="text/javascript">
    function getTime() {
        var picker = $find("<%=RadDateTimePicker1.ClientID%>");
        var view = picker.get_timeView();
        alert(view.getTime());
    }
</script>			
````



## Getting and setting minimum and maximum values

The following methods get or set the minimum and maximum values:


| Method | Description |
| ------ | ------ | ------ |
|get_minDate()|Returns the minimum date as a Date object.|
|set_minDate(date)|If the date is valid, sets the minimum date.|
|get_maxDate()|Returns the maximum date as a Date object.|
|set_maxDate(date)|If the date is valid, sets the maximum date.|


## Clearing selected values

To clear the selected value you can use the **clear()** method:

````JavaScript
function clearPickers() {
    var timepicker = $find("<%= RadTimePicker1.ClientID %>");
    timepicker.clear();
}
````


## Enabling and disabling the RadTimePicker control

To enable or disable a **RadTimePicker** control, you need to call the **set_enabled(bool)** client-side method:



````JavaScript
function disable() {
	var picker = $find("<%= RadTimePicker1.ClientID %>");
    picker.set_enabled(false);
}
function enable() {
    var picker = $find("<%= RadTimePicker1.ClientID %>");
    picker.set_enabled(true);
}        
````
````ASPNET
<telerik:RadScriptManager id="RadScriptManager1" runat="server"></telerik:RadScriptManager>
<telerik:RadTimePicker ID="RadTimePicker1" runat="server"></telerik:RadTimePicker>
<br />
<input type="button" value="disable" onclick="disable()" />
<input type="button" value="enable" onclick="enable()" />
````


## Showing and hiding the popup

The **RadTimePicker** object includes a number of methods for showing and hiding the popup controls:


| Method | Description |
| ------ | ------ | ------ |
|showTimePopup()|Displays the popup time view. Optionally you can specify a position for the popup.|
|hideTimePopup()|Hides the popup time view if it is visible.|
|toggleTimePopup()|Hides the popup time view if it is visible and shows the popup if it is not.|

# See Also

 * [RadTimePicker object]({%slug timepicker/client-side-programming/radtimepicker-object%})

 * [RadTimeView object]({%slug timepicker/client-side-programming/radtimeview-object%})
