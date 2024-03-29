---
title: Specifying a Culture
page_title: Specifying a Culture - RadDateRangePicker
description: Check our Web Forms article about Specifying a Culture.
slug: daterangepicker/accessibility-and-internationalization/specifying-a-culture
tags: specifying,a,culture
published: True
position: 0
---

# Specifying a Culture


The **RadDateRangePicker** control support the **System.Globalization** namespace. This namespace consists of classes (**CompareInfo**, **CultureInfo**, **RegionInfo**, etc.) that contain culture-related information such as the language, country/region, sort order for strings, calendars in use, and format patterns for dates, currency, and numbers. They are useful classes for writing internationalized applications.

>caution  
**RadDateRangePicker** supports all the cultures in the System.Globalization namespace that are based on the **Gregorian** calendar.
>

For East Asian, Middle Eastern and other similar cultures, which have an alternative standard for a different Calendar implementation, **RadDateRangePicker** supports their localization and native date and time value representation, but automatically uses the **Gregorian** calendar internally.

## CultureInfo

To specify the culture for a **RadDateRangePicker** control you need to set its **Culture** property.  Note that you can assign a separate **CultureInfo** object to the embedded popup calendar using the **CultureInfo** property of the embedded calendar.

The associated **CultureInfo** object controls:

* The default format for date and time values that the control displays. You can override this pattern by specifying a [date format pattern]({%slug calendar/accessibility-and-internationalization/date-format-patterns%}) as the value of the following properties:

	* On the embedded popup calendar accessed through the **Calendar** property of **RadDateRangePicker** - the **TitleFormat** and **DayCellToolTipFormat** properties.

	* On **RadDateRangePicker** - the **DateFormat** and **DisplayDateFormat** properties of the embedded **RadDateInput** controls inside the **RadDatePicker**(s) (accessed through the **StartDatePicker.DateInput** property).

* The strings used when applying a date format pattern such as month names, day names, separator characters, etc.

* The first day of the week when the **FirstDayOfWeek** property is set to "Default".

* The way **RadDatePicker**(s) parses values that the user types into the input area.


## Assigning the culture declaratively

You can assign the culture of a **RadDateRangePicker** control declaratively in the source:

````ASPNET
<telerik:RadDateRangePicker
    ID="RadDateRangePicker1"
    runat="server"
    Culture = "French (France)">
</telerik:RadDateRangePicker>
````

## Assigning the culture in the code-behind

You can assign a culture property in the code-behind as well:


````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadDateRangePicker.Culture = new System.Globalization.CultureInfo("en-US", true);
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    RadDateRangePicker1.Culture = New System.Globalization.CultureInfo("en-US", True)
End Sub
````


# See Also

 * [Formatting Values]({%slug datepicker/functionality/formatting-values%})

