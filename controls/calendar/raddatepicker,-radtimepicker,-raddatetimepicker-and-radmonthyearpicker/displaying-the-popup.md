---
title: Displaying the Popup
page_title: Displaying the Popup | UI for ASP.NET AJAX Documentation
description: Displaying the Popup
slug: calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/displaying-the-popup
tags: displaying,the,popup
published: True
position: 3
---

# Displaying the Popup



## 

By default, __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__ controls display buttons to the left of the input area. When the user clicks on a button, the embedded __RadCalendar__ or __RadTimeView__ control pops up to aid in selecting a value. This behavior happens automatically, without any programming on your part.

You can alter this behavior, hiding the __DatePopupButton__ and/or __TimePopupButton__ on the __RadDatePicker__, __RadTimePicker__, or __RadDateTimePicker__ control, and displaying the popup control from client-side code. The client-side __showPopup()__ method displays the popup calendar control, while the client-side __showTimePopup()__ method displays the popup time view control.

The following example illustrates how to hide the popup buttons and use client-side code to display the popup. The __RadDatePicker__ control displays its popup when the input area gets focus. The __RadTimePicker__ control displays its popup when the user clicks in the input area. The __RadDateTimePicker__ control displays its popup in response to a user key press.

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



Note that the embedded __DatePopupButton__ and __TimePopupButton__ controls have their __Visible__ property set to __False__. This hides the buttons that appear by default. Each control uses a different event on the embedded __RadDateInput__ control to display the popup:

* On __RadDatePicker__, the __OnFocus__ client event is used.

* On __RadTimePicker__, the onclick event is used.

* On __RadDateTimePicker__, the __OnKeyPress__ client event is used.

# See Also

 * [Displaying The Popup Above The Input Area]({%slug calendar/application-scenarios/displaying-the-popup-above-the-input-area%})
