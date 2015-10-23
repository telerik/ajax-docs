---
title: Specifying a Culture
page_title: Specifying a Culture | RadTimePicker for ASP.NET AJAX Documentation
description: Specifying a Culture
slug: timepicker/accessibility-and-internationalization/specifying-a-culture
tags: specifying,a,culture
published: True
position: 1
---

# Specifying a Culture


The **RadTimePicker** control supports the **System.Globalization** namespace. This namespace consists of classes (**CompareInfo**, **CultureInfo**, **RegionInfo**, etc.) that contain culture-related information such as the language, country/region, sort order for strings, calendars in use, and format patterns for dates, currency, and numbers. They are useful classes for writing internationalized applications.

>caution  
**RadTimePicker** supports all the cultures in the System.Globalization namespace that are based on the **Gregorian** calendar.
>

For East Asian, Middle Eastern and other similar cultures, which have an alternative standard for a different Calendar implementation, **RadTimePicker** supports their localization and native date and time value representation, but automatically uses the **Gregorian** calendar internally.

## CultureInfo

The **CultureInfo** class represents information about a specific culture including the names of the culture, the writing system, and the calendar used, as well as access to culture-specific objects that provide information for common operations, such as formatting dates and sorting strings.

The culture names follow the **RFC 1766** standard in the format "<languagecode2>-<country/regioncode2>", where **<languagecode2>** is a lowercase two-letter code derived from **ISO 639-1** and **<country/regioncode2>** is an uppercase two-letter code derived from **ISO 3166**. For example, U.S. English is "**en-US**".

All **RadTimePicker** control lets you associate a **CultureInfo** object with the control to govern the formatting and parsing of date and time values. To do this you need to set the **Culture** property of **RadTimePicker**.


>note
On **RadTimePicker** you can assign a separate **CultureInfo** object to the embedded popup time view control by setting the **Culture** property for it.
>


The associated **CultureInfo** object controls:

* The default format for date and time values that the control displays. You can override this pattern by specifying a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as the value of the following properties:

	* On **RadTimePicker** - the **DateFormat** and **DisplayDateFormat** properties of the embedded **RadDateInput** control (accessed through the **DateInput** property).

	* On **RadTimePicker** - the **TimeFormat** property of the embedded **RadTimeView** control (accessed through the **TimeView** property).

* The way **RadTimePicker** parses values that the user types into the input area.



## Assigning the culture declaratively

You can assign the culture of a **RadTimePicker** control declaratively in the source:

````ASPNET
<telerik:RadTimePicker
    ID="RadTimePicker1"
    runat="server"
    Culture="French (France)">
</telerik:RadTimePicker>
````


## Assigning the culture in the code-behind

You can assign a culture property in the code-behind as well:


````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadTimePicker1.Culture = new System.Globalization.CultureInfo("fr-FR", true);
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    RadTimePicker1.Culture = New System.Globalization.CultureInfo("fr-FR", True)
End Sub
````


# See Also

 * [Formatting Values]({%slug timepicker/formatting-values%})
 
 
