---
title: Using shared RadCalendar/RadTimeView
page_title: Using shared RadCalendar/RadTimeView | UI for ASP.NET AJAX Documentation
description: Using shared RadCalendar/RadTimeView
slug: calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/using-shared-radcalendar/radtimeview
tags: using,shared,radcalendar/radtimeview
published: True
position: 2
---

# Using shared RadCalendar/RadTimeView



Having many date pickers or time pickers on a page can render too much HTML and impact performance.To avoid this problem, __RadDatePicker__, __RadDateTimePicker__,and __RadTimePicker__ controls can share a __RadCalendar__or __RadTimeView__ control so that the rendered page only needs a single client-sideobject for all the popups. You can define the shared popup control at design time or at runtime in the code-behind.

## Defining the shared popup control at design time

To define a shared popup control at design time,

1. Drag and drop a __RadCalendar__ or __RadTimeView__ control ontothe Web page that contains your __RadDatePicker__, __RadTimePicker__,and/or __RadDateTimePicker__ controls.

1. Set the properties of the __RadCalendar__ or __RadTimeView__ control to configure the popup. Unlike the embedded popup controls that are automatically created when you are not using a shared calendar or time view, the external __RadCalendar__ or __RadTimeView__ control does not inherit any properties (such as __Skin__ or __RangeMaxDate__ and __RangeMinDate__) from the parent control that uses it.

>caution Do not set the __AutoPostBack__ property to __True__ . A popup control cannot work properly if it causes postbacks.
>


1. Set the __SharedCalendarID__ property of all __RadDatePicker__ and __RadDateTimePicker__ controls to the __ID__ property of the __RadCalendar__ control and/or set the __SharedTimeViewID__ property of all __RadDateTimePicker__ and __RadTimePicker__ controls to the __ID__ property of the __RadTimeView__ control.

````ASPNET
	     
	
	<telerik:RadDatePicker
	    ID="RadDatePicker1"
	    runat="server"
	    SharedCalendarID="SharedCalendar">
	</telerik:RadDatePicker>
	<br />
	<telerik:RadDateTimePicker
	    ID="RadDateTimePicker1"
	    runat="server"
	    SharedCalendarID="SharedCalendar"
	    SharedTimeViewID="SharedTimeView">
	</telerik:RadDateTimePicker>
	<br />
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



>note When you assign the __RadCalendar__ or __RadTimeView__ control's ID as the value of a __SharedCalendarID__ or __SharedTimeViewID__ property, it is automatically hidden from view in the rendered Web page. You do not need to do anything additional to hide it such as placing it in a hidden panel.
>


## Defining a sharedpopup control at runtime

To define a shared popup control at runtime

1. Do not set the __Calendar__ or __TimeView__ properties of the __RadDatePicker__, __RadTimePicker__, or __RadDateTimePicker__ control at design time.

1. Add a __PlaceHolder__ for holding the dynamically created popups.

1. In the codebehind, create an instance of the shared __RadCalendar__ and/or __RadTimeView__ object, setting its properties to configure it.Remember that this instance does not inherit any properties from the __RadDatePicker__, __RadTimePicker__, or __RadDateTimePicker__ controls that use them.

1. Add the instance of the __RadCalendar__ or __RadTimeView__ to the __PlaceHolder__ you added at design time.

1. Assign the __RadCalendar__ and/or __RadTimeView__ instance as the value of the __SharedCalendar__ and/or __SharedTimeView__ property.



````ASPNET
	     
	<telerik:RadDatePicker ID="RadDatePicker1" runat="server" />
	<br />
	<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server" />
	<br />
	<telerik:RadTimePicker ID="RadTimePicker1" runat="server" />
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
	        RadDateTimePicker1.SharedCalendar = popupCal;
	        RadTimeView popupTime = new RadTimeView();
	        popupTime.ID = "sharedDynamicTimeView";
	        popupTime.Skin = "Inox";
	
	        sharedPopupPlaceHolder.Controls.Add(popupTime);
	        RadTimePicker1.SharedTimeView = popupTime;
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
	        RadDatePicker1.SharedCalendar = popupCal
	        RadDateTimePicker1.SharedCalendar = popupCal
	        Dim popupTime As New RadTimeView()
	        popupTime.ID = "sharedDynamicTimeView"
	        popupTime.Skin = "Inox"
	        sharedPopupPlaceHolder.Controls.Add(popupTime)
	        RadTimePicker1.SharedTimeView = popupTime
	        RadDateTimePicker1.SharedTimeView = popupTime
	    End Sub
	
````

