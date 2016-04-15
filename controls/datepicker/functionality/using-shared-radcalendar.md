---
title: Using shared RadCalendar
page_title: Using shared RadCalendar | RadDatePicker for ASP.NET AJAX Documentation
description: Using shared RadCalendar
slug: datepicker/functionality/using-shared-radcalendar
tags: using,shared,radcalendar
published: True
position: 4
---

# Using a Shared RadCalendar



Having many date pickers on a page can render a lot of HTML and impact performance negatively. To avoid this problem, the **RadDatePicker** control can share a **RadCalendar** control so that the rendered page only needs a single client-side object for all the popups. You can define the shared popup control at design time or at runtime in the code-behind.

## Defining the shared popup control at design time

To define a shared popup control at design time,

1. Drag and drop a **RadCalendar** control onto the Web Page that contains your **RadDatePicker** controls.

2. Set the properties of the **RadCalendar** control to configure the popup. Unlike the embedded popup controls that are automatically created when you are not using a shared calendar, the external **RadCalendar** control does not inherit any properties (such as **Skin** or **RangeMaxDate** and **RangeMinDate**) from the parent control that uses it.
>caution 
Do not set the **AutoPostBack** property to **True** . A popup control cannot work properly if it causes postbacks.
>

3. Set the **SharedCalendarID** property of all **RadDatePicker** control to the **ID** property of the **RadCalendar** control.

````ASPNET
<telerik:RadDatePicker
    ID="RadDatePicker1"
    runat="server"
    SharedCalendarID="SharedCalendar">
</telerik:RadDatePicker>

<telerik:RadCalendar
    ID="SharedCalendar"
    runat="server"
    EnableMonthYearFastNavigation="False"
    EnableMultiSelect="False"
    UseColumnHeadersAsSelectors="False"
    UseRowHeadersAsSelectors="False"
    Skin="Inox">
</telerik:RadCalendar>
````



>note 
When you assign the ID of a **RadCalendar** control as the value of a **SharedCalendarID** property, it is automatically hidden from view in the rendered Web Page. You do not need to do anything additional to hide it.
>


## Defining a shared popup control at runtime

To define a shared popup control at runtime

1. Do not set the **Calendar** property of **RadDatePicker** at design time.

2. Add a **PlaceHolder** for holding the dynamically created popups.

3. In the code behind, create an instance of the shared **RadCalendar** object and set its properties as per your requirements. Remember that this instance does not inherit any properties from the **RadDatePicker** control that uses it.

4. Add the instance of the **RadCalendar** to the **PlaceHolder** you added at design time.

5. Assign the **RadCalendar** instance as the value of the **SharedCalendar** property.



````ASPNET
<telerik:RadDatePicker RenderMode="Lightweight" ID="RadDatePicker1" runat="server" />
<br />
<telerik:RadDateTimePicker RenderMode="Lightweight" ID="RadDateTimePicker1" runat="server" />
<br />
<telerik:RadTimePicker RenderMode="Lightweight" ID="RadTimePicker1" runat="server" />
<asp:PlaceHolder ID="sharedCalendarPlaceHolder" runat="server" />	
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadCalendar popupCal = new RadCalendar();
    popupCal.ID = "sharedDynamicCalendar";
    popupCal.EnableMultiSelect = false;
    popupCal.Skin = "Inox";
    popupCal.EnableMonthYearFastNavigation = false;
    popupCal.UseColumnHeadersAsSelectors = false;
    popupCal.UseRowHeadersAsSelectors = false;
    sharedPopupPlaceHolder.Controls.Add(popupCal);
    RadDatePicker1.SharedCalendar = popupCal;
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    Dim popupCal As New RadCalendar()
    popupCal.ID = "sharedDynamicCalendar"
    popupCal.EnableMultiSelect = False
    popupCal.Skin = "Inox"
    popupCal.EnableMonthYearFastNavigation = False
    popupCal.UseColumnHeadersAsSelectors = False
    popupCal.UseRowHeadersAsSelectors = False
    sharedPopupPlaceHolder.Controls.Add(popupCal)
    RadDatePicker1.SharedCalendar = popupCal
End Sub
````


