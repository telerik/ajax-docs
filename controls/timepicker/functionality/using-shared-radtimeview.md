---
title: Using shared RadTimeView
page_title: Using shared RadTimeView | RadTimePicker for ASP.NET AJAX Documentation
description: Using shared RadTimeView
slug: timepicker/functionality/using-shared-radtimeview
tags: using,shared,radtimeview
published: True
position: 5
---

# Using shared RadTimeView



Having many time pickers on a page can render a lot of HTML and impact performance negatively. To avoid this problem **RadTimePicker** controls can share a **RadTimeView** control so that the rendered page only needs a single client-side object for all the popups. You can define the shared popup control at design time or at runtime in the code-behind.

## Defining the shared popup control at design time

To define a shared popup control at design time,

1. Drag and drop a **RadTimeView** control onto the Web Page that contains your **RadTimePicker** controls.

2. Set the properties of the **RadTimeView** control to configure the popup. Unlike the embedded popup controls that are automatically created when you are not using a shared calendar or time view, the external **RadTimeView** control does not inherit any properties (such as **Skin** or **RangeMaxDate** and **RangeMinDate**) from the parent control that uses it.
>caution 
Do not set the **AutoPostBack** property to **True** . A popup control cannot work properly if it causes postbacks.
>

3. Set the **SharedTimeViewID** property of all **RadTimePicker** controls to the **ID** property of the **RadTimeView** control.

````ASPNET
<telerik:RadTimePicker
    ID="RadTimePicker1"
    runat="server"
    SharedTimeViewID="SharedTimeView">
</telerik:RadTimePicker>
<telerik:RadTimeView
    ID="SharedTimeView"
    runat="server"
    Skin="Inox">
</telerik:RadTimeView>
````



>note 
When you assign the ID of the **RadTimeView** control as value for the **SharedTimeViewID** property, it is automatically hidden from view in the rendered Web Page. You do not need to do anything additional to hide it such as placing it in a hidden panel.
>


## Defining a shared popup control at runtime

To define a shared popup control at runtime

1. Do not set the **TimeView** properties of the **RadTimePicker** control at design time.

2. Add a **PlaceHolder** for holding the dynamically created popups.

3. In the code behind, create an instance of the shared **RadTimeView** object, setting its properties to configure it. Remember that this instance does not inherit any properties from the **RadTimePicker** controls that use them.

4. Add the instance of the **RadTimeView** to the **PlaceHolder** you added at design time.

5. Assign the **RadTimeView** instance as the value of the **SharedTimeView** property.



````ASPNET
<telerik:RadTimePicker ID="RadTimePicker1" runat="server" />
<asp:PlaceHolder ID="sharedCalendarPlaceHolder" runat="server" />	
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadTimeView popupTime = new RadTimeView();
    popupTime.ID = "sharedDynamicTimeView";
    popupTime.Skin = "Inox";

    sharedPopupPlaceHolder.Controls.Add(popupTime);
    RadTimePicker1.SharedTimeView = popupTime;
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    Dim popupTime As New RadTimeView()
    popupTime.ID = "sharedDynamicTimeView"
    popupTime.Skin = "Inox"
    sharedPopupPlaceHolder.Controls.Add(popupTime)
    RadTimePicker1.SharedTimeView = popupTime
End Sub
````


