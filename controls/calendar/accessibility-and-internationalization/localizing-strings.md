---
title: Localizing Strings
page_title: Localizing Strings | UI for ASP.NET AJAX Documentation
description: Localizing Strings
slug: calendar/accessibility-and-internationalization/localizing-strings
tags: localizing,strings
published: True
position: 4
---

# Localizing Strings



## 

The __CultureInfo__ property of the __RadCalendar__ control and the __Culture__ property of the __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__ controls determine the strings that are used as the names of months and days. However, the __CultureInfo__ property does not translate the other strings that appear in these controls.

On __RadCalendar__, you may need to localize the strings that appear in the [month/year navigation]({%slug calendar/radcalendar/navigation-controls-settings%}). You can translate these strings using the __FastNavigationSettings__ property:

````ASPNET
	     
	<telerik:RadCalendar
	    ID="RadCalendar1"
	    runat="server"
	    CultureInfo="French (France)">
	    <FastNavigationSettings
	        CancelButtonCaption="Annuler"
	        DateIsOutOfRangeMessage="La date est hors de gamme."
	        OkButtonCaption="Accepter">
	    </FastNavigationSettings>
	</telerik:RadCalendar>
````



>note You can use the __FastNavigationSettings__ property on the embedded popup calendar in a __RadDatePicker__ or __RadDateTimePicker__ control, as well as on a stand-alone __RadCalendar__ control.
>


In addition, the tooltip strings that the various controls display may need to be localized. Most of the built-in tooltip strings are culture-neutral. For example, the built-in tooltip strings for the navigation controls on the __RadCalendar__ title bar are simply pointers (e.g. ">") rather than text. However, the buttons on the __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__controls have tooltips that you may want to localize. To localize these strings, use the __ToolTip__ property of the button, which can be accessed through the __DatePopupButton__ and __TimePopupButton__ properties.

To localize the string that appears in the header region of the embedded __TimeView__ control, set its __HeaderText__ property.

# See Also

 * [Tooltips]({%slug calendar/radcalendar/tooltips%})
