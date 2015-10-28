---
title: Displaying the Popup
page_title: Displaying the Popup | RadMonthYearPicker for ASP.NET AJAX Documentation
description: Displaying the Popup
slug: monthyearpicker/functionality/displaying-the-popup
tags: displaying,the,popup
published: True
position: 1
---

# Displaying the Popup



By default, **RadMonthYearPicker** control displays popup button to the left of the input area. When the user clicks on the button, the embedded **MonthYearView** pops up to aid in selecting a value. This behavior happens automatically, without any programming on your part.

To alter this behavior, you can hide the **DatePopupButton** of the **RadMonthYearPicker** control and display the popup control when the user interacts with the **DateInput**. You need to set the **DatePopupButton.Visible** property to **false** and **ShowPopupOnFocus** to **true**.


````ASPNET
<telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server" ShowPopupOnFocus="true">
   <DatePopupButton Visible="false" />
</telerik:RadMonthYearPicker>
````


Alternatively you can use client-side code. The client-side **showPopup()** method displays the popup **MonthYearView** control. The following example illustrates how to hide the popup buttons and use client-side code to display the popup. 


````ASPNET
<telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server" DatePopupButton-Visible="false">
    <DateInput>
        <ClientEvents OnFocus="showMontYearPopup" />
    </DateInput>
</telerik:RadMonthYearPicker>
````
````JavaScript
function showMontYearPopup(sender, args) {
    var picker = $find("<%= RadMonthYearPicker1.ClientID %>");
    picker.showPopup();
}
````



# See Also

 * [Displaying The Popup Above The Input Area]({%slug monthyearpicker/how-to/displaying-the-popup-above-the-input-area%})


