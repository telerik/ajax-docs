---
title: Specifying a Culture
page_title: Specifying a Culture | UI for ASP.NET AJAX Documentation
description: Specifying a Culture
slug: calendar/accessibility-and-internationalization/specifying-a-culture
tags: specifying,a,culture
published: True
position: 1
---

# Specifying a Culture



The __RadCalendar__ controls support the __System.Globalization__ namespace. This namespace consists of classes (CompareInfo, CultureInfo, RegionInfo, etc.) that contain culture-related information such as the language, country/region, sort order for strings, calendars in use, and format patterns for dates, currency, and numbers. They are useful classes for writing internationalized applications.

>caution  __RadCalendar__ supports all the cultures in the System.Globalization namespace that are based on the __Gregorian__ calendar.
>


## CultureInfo

The __CultureInfo__ class represents information about a specific culture including the names of the culture, the writing system, and the calendar used, as well as access to culture-specific objects that provide information for common operations, such as formatting dates and sorting strings.

The culture names follow the RFC 1766 standard in the format "<languagecode2>-<country/regioncode2>", where <languagecode2> is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, U.S. English is "en-US".

All __RadCalendar__ controls let you associate a __CultureInfo__ object with the control to govern the formatting and parsing of date and time values. The following table lists the property to use for assigning a __CultureInfo__ object to each __RadCalendar__ control:


>caption  

| Control | Property |
| ------ | ------ |
|RadCalendar|CultureInfo|
|RadDatePicker|Culture|
|RadTimePicker|Culture|
|RadDateTimePicker|Culture|

>note On __RadDatePicker__ , __RadTimePicker__ , and __RadDateTimePicker__ , you can assign a separate __CultureInfo__ object to the embedded popup calendar and/or time view control, using the embedded calendar's __CultureInfo__ property or the embedded time view's __Culture__ property.
>


The associated __CultureInfo__ object controls

* The default format for the date and time values that the control displays. You can override this pattern by specifying a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as the value of the following properties:

* On __RadCalendar__ (including the embedded popup calendar accessed through the __Calendar__ property of a __RadDatePicker__ or __RadDateTimePicker__ control), the __TitleFormat__ and __DayCellToolTipFormat__ properties.

* On __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__, the __DateFormat__ and __DisplayDateFormat__ properties of the embedded __RadDateInput__ control (accessed through the __DateInput__ property).

* On __RadTimePicker__ and __RadDateTimePicker__, the __TimeFormat__ property of the embedded __RadTimeView__ control (accessed through the

* The strings used when applying a date format pattern, such as month names, day names, separator characters, and so on.

* The first day of the week when the __FirstDayOfWeek__ property is set to "Default".

* The way __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__ parse values that the user types into the input area.

>caution The __CultureInfo__ property of __RadCalendar__ does not affect the labels on the buttons in the month/year navigation popup. For information on localizing these strings, see[Localizing Strings]({%slug calendar/accessibility-and-internationalization/localizing-strings%}).
>


## Assigning the culture declaratively

You can assign the culture of a __RadCalendar__ control declaratively in the source:

````ASPNET
	     
	<telerik:RadCalendar
	    ID="RadCalendar1"
	    runat="server"
	    CultureInfo="French (France)">
	</telerik:RadCalendar>
	<br />
	<telerik:RadDatePicker
	    ID="RadDatePicker1"
	    runat="server"
	    Culture = "French (France)">
	    <DateInput Width="100%"></DateInput>
	    <DatePopupButton CssClass="radPopupImage_Default" />
	</telerik:RadDatePicker>
	<br />
	<telerik:RadDateTimePicker
	    ID="RadDateTimePicker1"
	    runat="server"
	    Culture="French (France)">
	    <DateInput Width="100%"></DateInput>
	    <DatePopupButton CssClass="radPopupImage_Default" />
	    <TimePopupButton CssClass="radPopupImage_Default" />
	</telerik:RadDateTimePicker>
	<br />
	<telerik:RadTimePicker
	    ID="RadTimePicker1"
	    runat="server"
	    Culture="French (France)">
	</telerik:RadTimePicker>
````



## Assigning the culture in the codebehind

You can assign a culture property in the code-behind as well:

>tabbedCode

````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadCalendar1.CultureInfo = System.Threading.Thread.CurrentThread.CurrentCulture;
	        RadDatePicker.Culture = new System.Globalization.CultureInfo("en-US", true);
	        RadTimePicker.Culture = new System.Globalization.CultureInfo("fr-FR", true);
	        RadDateTimePicker.Culture = RadDateTimePicker.Culture;
	    }
````
````VB.NET
	     
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        RadCalendar1.CultureInfo = System.Threading.Thread.CurrentThread.CurrentCulture
	        RadDatePicker.Culture = New System.Globalization.CultureInfo("en-US", True)
	        RadTimePicker.Culture = New System.Globalization.CultureInfo("fr-FR", True)
	        RadDateTimePicker.Culture = RadDateTimePicker.Culture
	    End Sub
````
>end

# See Also

 * [Title Settings]({%slug calendar/radcalendar/title-settings%})

 * [Tooltips]({%slug calendar/radcalendar/tooltips%})

 * [Formatting Values]({%slug calendar/raddatepicker,-radtimepicker,-raddatetimepicker-and-radmonthyearpicker/formatting-values%})
