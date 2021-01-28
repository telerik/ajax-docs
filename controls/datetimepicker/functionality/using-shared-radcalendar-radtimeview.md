---
title: Using shared RadCalendar/RadTimeView
page_title: Using shared RadCalendar/RadTimeView - RadDateTimePicker
description: Check our Web Forms article about Using shared RadCalendar/RadTimeView.
slug: datetimepicker/functionality/using-shared-radcalendar-radtimeview
tags: using,shared,radcalendar,radtimeview
published: True
position: 2
---

# Using shared RadCalendar/RadTimeView



Having many datetime pickers on a page can render a lot of HTML and decrease performance. To remedy this potential problem **RadDateTimePicker** control can share **RadCalendar** and **RadTimeView** controls so that the rendered page only needs a single client-side object for all the popups. You can define the shared popup control at design time or at runtime in the code-behind.

## Defining the shared popup control at design time

To define a shared popup control at design time,

1. Drag and drop a **RadCalendar** and **RadTimeView** control onto the Web Page that contains your **RadDateTimePicker** controls.

2. Set the properties of the **RadCalendar** and **RadTimeView** control to configure the popup. Unlike the embedded popup controls that are automatically created when you are not using a shared calendar or time view, the external **RadCalendar** and **RadTimeView** controls do not inherit any properties (such as **Skin** or **RangeMaxDate** and **RangeMinDate**) from the parent control that uses it.
>caution 
Do not set the **AutoPostBack** property to **True**. A popup control cannot work properly if it triggers postbacks.
>

3. Set the **SharedCalendarID** property of all **RadDateTimePicker** controls to the **ID** property of the **RadCalendar** control and the **SharedTimeViewID** property of all to the **ID** property of the **RadTimeView** control.

````ASPNET
<telerik:RadDateTimePicker
    ID="RadDateTimePicker1"
    runat="server"
    SharedCalendarID="SharedCalendar"
    SharedTimeViewID="SharedTimeView">
</telerik:RadDateTimePicker>
<telerik:RadTimeView
    ID="SharedTimeView"
    runat="server"
    Skin="Inox">
</telerik:RadTimeView>
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
When you assign the **RadCalendar** or **RadTimeView** control's ID as the value of a **SharedCalendarID** or **SharedTimeViewID** property, it is automatically hidden from view in the rendered Web Page. You do not need to do anything additional to hide it such as placing it in a hidden panel.
>


## Defining a sharedpopup control at runtime

To define a shared popup control at runtime

1. Do not set the **Calendar** or **TimeView** properties of the **RadDateTimePicker** control at design time.

2. Add a **PlaceHolder** for holding the dynamically created popups.

3. In the code behind, create an instance of the shared **RadCalendar** and **RadTimeView** objects. Set their properties as required. Remember that these objects do not inherit any properties from the **RadDateTimePicker** control that uses them.

4. Add the instance of the **RadCalendar** and **RadTimeView** to the **PlaceHolder** you added at design time.

5. Assign the **RadCalendar** and **RadTimeView** instances as the value of the **SharedCalendar** and **SharedTimeView** properties.



````ASPNET
<telerik:RadDateTimePicker RenderMode="Lightweight" ID="RadDateTimePicker1" runat="server" />
<br />
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
    RadDateTimePicker1.SharedCalendar = popupCal;
    RadTimeView popupTime = new RadTimeView();
    popupTime.ID = "sharedDynamicTimeView";
    popupTime.Skin = "Inox";

    sharedPopupPlaceHolder.Controls.Add(popupTime);
    RadDateTimePicker1.SharedTimeView = popupTime;
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
    RadDateTimePicker1.SharedCalendar = popupCal
    Dim popupTime As New RadTimeView()
    popupTime.ID = "sharedDynamicTimeView"
    popupTime.Skin = "Inox"
    sharedPopupPlaceHolder.Controls.Add(popupTime)
    RadDateTimePicker1.SharedTimeView = popupTime
End Sub
````


