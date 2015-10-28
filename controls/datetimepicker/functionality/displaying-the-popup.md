---
title: Displaying the Popup
page_title: Displaying the Popup | RadDateTimePicker for ASP.NET AJAX Documentation
description: Displaying the Popup
slug: datetimepicker/displaying-the-popup
tags: displaying,the,popup
published: True
position: 3
---

# Displaying the Popup



By default the **RadDateTimePicker** control displays buttons to the right of the input area. When the user clicks on a button, the embedded **RadCalendar** or **RadTimeView** control pops up to aid in selecting a value. This behavior happens automatically, without the need of any programming.

You can alter this behavior by hiding the **DatePopupButton** or **TimePopupButton** on the **RadDateTimePicker** control, and displaying the popup control using client-side code. The client-side **showPopup()** method displays the popup calendar control, while the client-side **showTimePopup()** method displays the popup time view control.

The following example illustrates how to hide the popup buttons and use client-side code to display the popup. The **RadDatePicker** control displays its popup when the input area gets focus. The **RadTimePicker** control displays its popup when the user clicks in the input area. The **RadDateTimePicker** control displays its popup in response to a user key press.

````ASPNET
<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
    <DateInput>
        <ClientEvents OnKeyPress="ShowDateTimePopup" />
    </DateInput>
    <DatePopupButton Visible="False" />
    <Calendar DayNameFormat="FirstLetter" FirstDayOfWeek="Default"
        UseColumnHeadersAsSelectors="False"
        UseRowHeadersAsSelectors="False">
    </Calendar>
    <TimePopupButton Visible="False" />
</telerik:RadDateTimePicker>	
````
````JavaScript
function ShowDateTimePopup(sender, eventArgs) {
    var picker = $find("<%= RadDateTimePicker1.ClientID %>");
    var userChar = eventArgs.get_keyCharacter();
    if (userChar == '@') {
        picker.showPopup();
        eventArgs.set_cancel(true);
    }
    else if (userChar == '#') {
        picker.showTimePopup();
        eventArgs.set_cancel(true);
    }
}
````


Note that the embedded **DatePopupButton** and **TimePopupButton** controls have their **Visible** property set to **False**. This hides the buttons that appear by default. 

# See Also

 * [Displaying The Popup Above The Input Area]({%slug datetimepicker/how-to/displaying-the-popup-above-the-input-area%})
