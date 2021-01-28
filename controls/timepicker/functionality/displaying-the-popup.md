---
title: Displaying the Popup
page_title: Displaying the Popup - RadTimePicker
description: Check our Web Forms article about Displaying the Popup.
slug: timepicker/functionality/displaying-the-popup
tags: displaying,the,popup
published: True
position: 2
---

# Displaying the Popup



By default **RadTimePicker** controls display buttons to the right of the input area. When the user clicks on a button, the embedded **RadTimeView** control pops up to aid in selecting a value. This behavior happens automatically, without any programming on your part.

You can alter this behavior, hiding the **TimePopupButton** of the **RadTimePicker** control, and displaying the popup control from client-side code. The client-side **showTimePopup()** method displays the popup time view control.

The following example illustrates how to hide the popup buttons and use client-side code to display the popup. The **RadDatePicker** control displays its popup when the input area gets focus. The **RadTimePicker** control displays its popup when the user clicks in the input area. The **RadDateTimePicker** control displays its popup in response to a user key press.

````ASPNET
<asp:Label ID="Label2" runat="server"
    AssociatedControlID="RadTimePicker1" Text="Time" />
<telerik:RadTimePicker RenderMode="Lightweight" ID="RadTimePicker1" runat="server">
    <DateInput onclick="ShowTimePopup()"></DateInput>
    <TimePopupButton Visible="False" />
</telerik:RadTimePicker>
````
````JavaScript
function ShowTimePopup() {
    $find("<%= RadTimePicker1.ClientID %>").showTimePopup();
}
````


