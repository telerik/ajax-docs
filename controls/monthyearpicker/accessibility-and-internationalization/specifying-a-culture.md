---
title: Specifying a Culture
page_title: Specifying a Culture | RadMonthYearPicker for ASP.NET AJAX Documentation
description: Specifying a Culture
slug: monthyearpicker/accessibility-and-internationalization/specifying-a-culture
tags: specifying,a,culture
published: True
position: 0
---

# Specifying a Culture


The **RadMonthYearPicker** controls support the **System.Globalization** namespace. This namespace consists of classes (**CompareInfo**, **CultureInfo**, **RegionInfo**, etc.) that contain culture-related information such as the language, country/region, sort order for strings, calendars in use, and format patterns for dates, currency, and numbers. They are useful classes for writing internationalized applications.

For East Asian, Middle Eastern and other similar cultures, which have an alternative standard for a different Calendar implementation, **RadMonthYearPicker** supports their localization and native date and time value representation, but automatically uses the **Gregorian** calendar internally.

## CultureInfo

The **CultureInfo** class represents information about a specific culture including the names of the culture, the writing system, and the calendar used, as well as access to culture-specific objects that provide information for common operations, such as formatting dates and sorting strings.

The culture names follow the **RFC 1766** standard in the format "<languagecode2>-<country/regioncode2>", where **<languagecode2>** is a lowercase two-letter code derived from **ISO 639-1** and **<country/regioncode2>** is an uppercase two-letter code derived from **ISO 3166**. For example, U.S. English is "**en-US**".

To specify the **CultureInfo** that **RadMonthYearPicker** will be using you need to set the **CUlture** property.


The associated **CultureInfo** object controls:

* The default format for date and time values that the control displays. You can override this pattern by specifying a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as the value of the following properties:

	* On **RadMonthYearPicker** the **DateFormat** and **DisplayDateFormat** properties of the embedded **RadDateInput** control (accessed through the **DateInput** property).

* The strings used when applying a date format pattern such as month names, day names, separator characters, etc.

* The way **RadMonthYearPicker** parses values that the user types into the input area.

>caution
The **CultureInfo** property of **RadCalendar** does not affect the labels on the buttons in the month/year navigation popup. For information on localizing these strings, see [Localizing Strings]({%slug calendar/accessibility-and-internationalization/localizing-strings%}).
>


## Assigning the culture declaratively

You can assign the culture of a **RadCalendar** control declaratively in the source:

````ASPNET
<telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server" Culture="en-US"> 
    <DateInput Culture="en-US"></DateInput>
</telerik:RadMonthYearPicker>
````


## Assigning the culture in the code-behind

You can assign a culture property in the code-behind as well:


````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadMonthYearPicker1.Culture = new System.Globalization.CultureInfo("en-US", true);
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    RadMonthYearPicker1.Culture = New System.Globalization.CultureInfo("en-US", True)
End Sub
````


