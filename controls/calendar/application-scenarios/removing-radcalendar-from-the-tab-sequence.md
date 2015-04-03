---
title: Removing RadCalendar from the Tab Sequence
page_title: Removing RadCalendar from the Tab Sequence | UI for ASP.NET AJAX Documentation
description: Removing RadCalendar from the Tab Sequence
slug: calendar/application-scenarios/removing-radcalendar-from-the-tab-sequence
tags: removing,radcalendar,from,the,tab,sequence
published: True
position: 1
---

# Removing RadCalendar from the Tab Sequence



## 

When browsing through a page with the Tab key, sometimes you want to skip the calendar from the controls gaining focus. Unfortunately setting its TabIndex=-1 will not accomplish this, as the tab index is not inherited by the child controls, which are html links (<a href> tags).

You can remove the calendar child controls from the tab sequence by writing a JavaScript function such as the following. Note that the function to set the tab index of child controls must be called both when the window loads, and by the client-side __OnCalendarViewChanged__ event handler.

````JavaScript
	     
	<script type="text/javascript">
	    if (window.attachEvent) {
	        window.attachEvent("onload", ClearAnchors);
	    }
	    else {
	       window.addEventListener("load", ClearAnchors, false);
	    }
	    function ClearAnchors() {
	        var calendarTable = $get("<%= RadCalendar1.ClientID %>");
	        var anchors = calendarTable.getElementsByTagName("a");
	        for (var i = 0; i < anchors.length; i++) {
	            var anchor = anchors[i];
	            anchor.tabIndex = -1;
	        }
	    }
	    function OnCalendarViewChanged(calendar, eventArgs) {
	        ClearAnchors();
	    }
	</script>
````



>note If you are using __RadDatePicker__ , __RadDateTimePicker__ , or __RadTimePicker__ , a similar issue arises with the popup buttons, which are rendered as an <a> tag. However, for these controls, the popup buttons are accessible through the __DatePopupButton__ and __TimePopupButton__ properties, so you can simply set the __TabIndex__ property for the button in the designer.
>


# See Also

 * [Keyboard Support]({%slug calendar/accessibility-and-internationalization/keyboard-support%})
