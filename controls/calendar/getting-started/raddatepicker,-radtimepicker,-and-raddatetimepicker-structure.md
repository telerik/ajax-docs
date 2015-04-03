---
title: RadDatePicker, RadTimePicker, and RadDateTimePicker Structure
page_title: RadDatePicker, RadTimePicker, and RadDateTimePicker Structure | UI for ASP.NET AJAX Documentation
description: RadDatePicker, RadTimePicker, and RadDateTimePicker Structure
slug: calendar/getting-started/raddatepicker,-radtimepicker,-and-raddatetimepicker-structure
tags: raddatepicker,,radtimepicker,,and,raddatetimepicker,structure
published: True
position: 2
---

# RadDatePicker, RadTimePicker, and RadDateTimePicker Structure



## 

The __RadDateTimePicker__ control is composite controls that combine the functionality of __RadCalendar__ and __RadTimeView__ with the functionality of __RadDateInput__ to give the broadest possible range of options for selecting date and time values. The three controls have the same basic structure:![Overview of picker structure](images/calendar_overviewpickerstructure_001.png)

The three major components of a __RadDatePicker__, __RadTimePicker__, or __RadDateTimePicker__ control are:

* __InputArea__ - This is an embedded __RadInput__ control, which validates dates or times as the user types.

* __Popup Control__ - This is a __RadCalendar__ and __RadTimeView__ control that is shown in a popup element, so that the user can select a date or time by clicking on the desired selection.

* __Calendar Popup Button__ and __Time Popup Button__ - an image button, displayed next to the input area that shows and hides the popup control.

>caution If the popup control is a __RadCalendar__ control it must have __AutoPostBack__ set to __False__ in order to work properly. This means that a popup calendar cannot be used in multi-view mode.
>


Since __RadDatePicker__ does not recognize other __Time Popups__ excepts its own,it closes only the __Calendar Popups__. The following script can be added in order to allow the__RadDatePicker__ to close all of the currently open Time Popups on the page:

````JavaScript
	    <script type="text/javascript">
	        Telerik.Web.UI.RadDatePicker.prototype._actionBeforeShowPopup_original = Telerik.Web.UI.RadDatePicker.prototype._actionBeforeShowPopup;
	        Telerik.Web.UI.RadDatePicker.prototype._actionBeforeShowPopup = function () {
	            this._actionBeforeShowPopup_original();
	            if (Telerik.Web.UI.RadDateTimePicker) {
	                Telerik.Web.UI.RadDateTimePicker.prototype._hideAllTimePopups();
	            }
	        }
	    </script>
````



# See Also

 * [RadCalendar Structure]({%slug calendar/getting-started/radcalendar-structure%})

 * [RadTimeView Structure]({%slug calendar/getting-started/radtimeview-structure%})
