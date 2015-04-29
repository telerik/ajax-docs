---
title: Displaying the Popup
page_title: Displaying the Popup | RadCalendar for ASP.NET AJAX Documentation
description: Displaying the Popup
slug: calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/displaying-the-popup
tags: displaying,the,popup
published: True
position: 3
---

# Displaying the Popup



By default, **RadDatePicker**, **RadTimePicker** and **RadDateTimePicker** controls display buttons to the left of the input area. When the user clicks on a button, the embedded **RadCalendar** or **RadTimeView** control pops up to aid in selecting a value. This behavior happens automatically, without any programming on your part.

You can alter this behavior, hiding the **DatePopupButton** and/or **TimePopupButton** on the **RadDatePicker**, **RadTimePicker** or **RadDateTimePicker** control, and displaying the popup control from client-side code. The client-side **showPopup()** method displays the popup calendar control, while the client-side **showTimePopup()** method displays the popup time view control.

The following example illustrates how to hide the popup buttons and use client-side code to display the popup. The **RadDatePicker** control displays its popup when the input area gets focus. The **RadTimePicker** control displays its popup when the user clicks in the input area. The **RadDateTimePicker** control displays its popup in response to a user key press.

````ASPNET
<script type="text/javascript">
    function ShowDatePopup() {
        $find("<%= RadDatePicker1.ClientID %>").showPopup();
    }
    function ShowTimePopup() {
        $find("<%= RadTimePicker1.ClientID %>").showTimePopup();
    }
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
</script>
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
</telerik:RadDatePicker><br/>
<asp:Label ID="Label2" runat="server"
    AssociatedControlID="RadTimePicker1" Text="Time" />
<telerik:RadTimePicker ID="RadTimePicker1" runat="server">
    <DateInput onclick="ShowTimePopup()"></DateInput>
    <TimePopupButton Visible="False" />
</telerik:RadTimePicker><br/>
<asp:Label ID="Label3" runat="server"
    AssociatedControlID="RadDateTimePicker1" Text="DateTime" />
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



Note that the embedded **DatePopupButton** and **TimePopupButton** controls have their **Visible** property set to **False**. This hides the buttons that appear by default. Each control uses a different event on the embedded **RadDateInput** control to display the popup:

* On **RadDatePicker**, the **OnFocus** client event is used.

* On **RadTimePicker**, the **onclick** event is used.

* On **RadDateTimePicker**, the **OnKeyPress** client event is used.

# See Also

 * [Displaying The Popup Above The Input Area]({%slug calendar/how-to/displaying-the-popup-above-the-input-area%})
