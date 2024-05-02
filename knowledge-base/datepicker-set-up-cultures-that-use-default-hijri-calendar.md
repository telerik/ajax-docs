---
title: Set up DatePicker with cultures that use default Hijri Calendar
description: Learn how to set up DatePicker with cultures that use default Hijri Calendar
type: how-to
page_title: Set up DatePicker with cultures that use default Hijri Calendar. | RadDatePicker 
slug: datepicker-set-up-cultures-that-use-default-hijri-calendar
tags: datepicker, calendar, dispose, detail window, grid
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik  Webforms DatePicker for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This sample demonstrates how you can set up the DatePicker if the **Thread.CurrentThread.CurrentCulture** is initialized to a culture that uses Hijri Calendar by default like the ar-SA culture (Arabic-Saudi Arabia).

As the DatePicker does not support Hijri dates we create a custom ar-SA culture that uses the Gregorian Calendar instead of the Hijri one. In order to register new cultures you need administrative priviliges on the server machine.

## Solution

Modify the culture settings to display dates in the Gregorian calendar format for Arabic (Saudi Arabia) culture (***ar-SA***):

````C#
using System;
using System.Web.UI.WebControls;
using Telerik.Web.UI;
using System.Globalization;
using System.Threading;

public partial class Default : System.Web.UI.Page 
{
    protected override void InitializeCulture()
    {
        string cultureName = "ar-SA";
        CultureInfo customCulture = CultureInfo.CreateSpecificCulture(cultureName);
        CultureInfo gregorianCulture = CreateGregorianCalendarCulture(customCulture);

        Thread.CurrentThread.CurrentCulture = gregorianCulture;
        Thread.CurrentThread.CurrentUICulture = gregorianCulture;
    }

    private CultureInfo CreateGregorianCalendarCulture(CultureInfo culture)
    {
        if (culture.Calendar.GetType() == typeof(GregorianCalendar))
        {
            return culture;
        }

        CultureAndRegionInfoBuilder arSA = new CultureAndRegionInfoBuilder("ar-S2", CultureAndRegionModifiers.None);
        arSA.LoadDataFromCultureInfo(culture);
        arSA.LoadDataFromRegionInfo(new RegionInfo(culture.LCID));
        arSA.AvailableCalendars = new Calendar[] { new GregorianCalendar() };

        // Register the data for deployment on this machine
        arSA.Register();

        // Instantiate a new CultureInfo from the new data
        CultureInfo result = new CultureInfo("ar-S2");

        // Unregister the  custom culture on this machine
        CultureAndRegionInfoBuilder.Unregister("ar-S2");

        return result;
    }
}
````

In the code above:


1. `InitializeCulture`: This method is overridden to set the culture for the current thread. It sets the **CultureInfo** and **CurrentUICulture** of the current thread to a custom culture that represents Arabic (Saudi Arabia) culture with the Gregorian calendar.

    - It starts by defining the desired culture name as ***"ar-SA"***.
    - Then, it creates a **CultureInfo** object based on this culture name.
    - Next, it creates a Gregorian calendar-based culture using the `CreateGregorianCalendarCulture` method.
    - Finally, it sets the current thread's culture and UI culture to this newly created culture.

1. `CreateGregorianCalendarCulture`: This method is responsible for creating a custom culture based on the specified culture, but with the Gregorian calendar.

    - It checks if the specified culture already uses the Gregorian calendar. If it does, it returns the culture as is.
    - If the culture does not use the Gregorian calendar, it creates a new custom culture builder (`CultureAndRegionInfoBuilder`) with the name ***"ar-S2"*** and no modifiers.
    - Then, it loads data from the specified culture and region info into this custom builder.
    - It sets the available calendars for this custom culture to only the Gregorian calendar.
    - Next, it registers this custom culture on the current machine.
    - After registering, it creates a new **CultureInfo** object based on the registered custom culture.
    - Finally, it unregisters the custom culture from the machine.

 
  
   
