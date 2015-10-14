---
title: Displaying the Popup
page_title: Displaying RadDatePicker Popup | RadDatePicker for ASP.NET AJAX Documentation
description: Displaying RadDatePicker Popup
slug: datepicker/displaying-the-popup
tags: displaying,the,popup
published: True
position: 5
---

# Displaying the Popup



By default the **RadDatePicker** control displays a button to the left of the input area. When the user clicks on the button, an embedded **RadCalendar** control pops up to aid in selecting a date. This behavior happens automatically, without any programming on your part.

You can alter this behavior, hiding the **DatePopupButton** on the **RadDatePicker** control and displaying the popup control via client-side code. The client-side **showPopup()** method displays the popup calendar control.

The following example illustrates how to hide the popup buttons and use client-side code to display the popup. The **RadDatePicker** control displays its popup when the input area gets focus. The **RadTimePicker** control displays its popup when the user clicks in the input area. The **RadDateTimePicker** control displays its popup in response to a user key press.


````ASPNET
<asp:Label ID="Label1" runat="server"
    AssociatedControlID="RadDatePicker1" Text="Date" />
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <DateInput>
        <ClientEvents OnFocus="ShowDatePopup" />
    </DateInput>
    <Calendar DayNameFormat="FirstLetter" FirstDayOfWeek="Default"
           UseColumnHeadersAsSelectors="False"
           UseRowHeadersAsSelectors="False">
    </Calendar>
    <DatePopupButton Visible="False" />
</telerik:RadDatePicker>
````
````JavaScript
function ShowDatePopup() {
    $find("<%= RadDatePicker1.ClientID %>").showPopup();
}
````



Note that the embedded **DatePopupButton** control has **Visible** property set to **False**. This hides the button that appears by default. On **RadDatePicker**, the **OnFocus** client event on the embedded **RadDateInput** control is used to display the popup.




