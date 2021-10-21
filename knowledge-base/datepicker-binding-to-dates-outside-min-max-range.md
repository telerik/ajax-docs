---
title: RadDatePicker binding to dates outside Min/Max range
description: RadDatePicker binding to dates outside Min/Max range. Check it now!
type: how-to
page_title: RadDatePicker binding to dates outside Min/Max range
slug: datepicker-binding-to-dates-outside-min-max-range
res_type: kb
---


### PROBLEM

I have a RadDatePicker that uses `MinDate` and `MaxDate` properties for user input. When binding a date earlier than the `MinDate` property, the **RadDatePicker** changes the date to be the minimum date. I want to restrict user inputted dates to a range, but bind dates from legacy data correctly.

### DESCRIPTION

The RadDatePicker automatically changes dates based on the `MinDate` and `MaxDate` properties.

### SOLUTION

The auto-correcting of the RadDatePicker can be disabled by setting the property `EnableSmartParsing="false"`. This may result in an exception being thrown when the bound date is outside the acceptable range. That exception can be prevented by setting the `SkipMinMaxDateValidationOnServer="true"` property. 


````ASP.NET
<telerik:RadDatePicker ID="RadDatePicker1" runat="server" MinDate="1/1/2018" MaxDate="12/31/2018" SkipMinMaxDateValidationOnServer="true">
    <DateInput runat="server" EnableSmartParsing="false"/>
</telerik:RadDatePicker>
````

  


