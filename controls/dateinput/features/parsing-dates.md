---
title: Parsing Dates
page_title: Parsing Dates | RadDateInput for ASP.NET AJAX Documentation
description: Parsing Dates
slug: raddateinput/features/parsing-dates
tags: parsing,dates
published: True
position: 2
---

# Parsing Dates





**RadDateInput** tries to recognize a free-form string and convert it to a valid date. This topic describes the assumptions the control makes and the data and algorithms that it uses to do that.

The input string can contain a date and time part. Entries are always interpreted left to right and date matching is attempted before time parsing.

Date building blocks

A date is composed of different words or blocks of text. The first stage of date parsing is to split the input string in various "atoms" that are used to determine the actual date. **RadDateInput** recognizes the following:

* numbers: integer values that are interpreted as decimal numbers.

* month names: both normal and abbreviated month names are recognized. The names will be different for each culture.

* week day names: both normal and abbreviated. These are also culture specific.

* time separators: a culture specific setting (a colon (":") symbol for the American English culture).

* AM/PM designator: a culture-specific setting.

## Date grouping and structure

Date parts are grouped into known date entries that can be evaluated. The result contains a date and time part. The date part can be:

* a month/day/year triplet: a month can be both a numeric value or a month name. The order of the parts in the triplet is culture specific.

* a month/day or day/year pair: again, months can be both specified with a number or a name

* if a DateFormat string without "d"(day part) is provided the value could be entered as month/year or year/month. This feature is available since Q2 2013 version of RadDateInput.

* a single entry of a day, week day, month, or year.

The time part is simpler: it is always composed of one to three numbers and an optional AM/PM designator.

An important thing to note here is the way **RadDateInput** determines the end of the date part and the start of the time one. The parser has two modes of operation: DateTime and TimeOnly. The mode is determined by the **DateFormat** property value: if the date format does not contain any date-formatting instructions, then the control switches to TimeOnly mode. Both modes have different behavior with regard to time parsing:

* DateTime:An entry of "2 Jan 07 5 20" is interpreted as January 2, 2007 5:20 because the parser found a triplet that gives complete information about the date. Once it has matched the date, it treats the rest of the input as a time entry. Not supplying a full triplet can cause some of the time values to be interpreted as date numbers: e.g. "2 Jan 5 20" is interpreted as January 2, 2005 20:00 (8 PM). To give the control a hint that you are supplying a time value, separate the time values with the time separator. The above entry can be changed to "2 Jan 5:20" and **RadDateInput** will correctly interpret it as January 2 5:20.

* TimeOnly:Having a TimeOnly mode means that we do not have to care about the date part and we can relax the time separator requirement. In this mode "4 15 30 pm" will be interpreted as 4:15:30 PM or 16:15:30.

>caution Since Q2 2015 SP1 release we have introduced a new property in **RadDateInput**, which is called **EnableSmartParsing**. When it is set to "false" (default value is "true") the automatic parsing/correction of the date/time entered is disabled.
>

## Date evaluation

The last step in date parsing is to take the entry and turn it into a real date. There are several rules that the control obeys:

* Incomplete dates are always evaluated taking the current date as a basis. For example, "January 2" means January 2 this year. If the current month is April, an entry of "10" is interpreted as April 10, this year.

* Numbers greater than 31 are always be interpreted as year values if possible (if within the **MinDate**/**MaxDate** range).

* Two digit years are interpreted as a year in the **ShortDateCenturyStart**-**ShortDateCenturyEnd** range. "89" means 1989, and 15 -- "2015".

* Week days are interpreted as a "move to the next available day" operation. Thus an entry of "Monday" moves to the next Monday and sets it as the selected date. Week day names are ignored if a fully specified date (a date triplet) is already entered.

* Single month names are interpreted as changing the month for the current date. If the current date is April 10, an entry of "Oct" will evaluate to October 10.

## Dates without separators

Besides the regular date parsing rules and heuristics described above, **RadDateInput** can successfully parse 6-digit and 8-digit date formats that have no separators e.g. MMddyy or MMddyyyy. Note, however, that the support provided for these formats relies heavily on the currently set culture for the input control. For example RadDateInput with an **en-US** culture set will use the short date format to interpret an entry as month-day-year.

Here are a few sample entries for the **en-US** culture:

* "050707" - **OK**, parsed as May 7th, 2007 (the control is trying to parse 05-07-07)

* "05072007" - **OK**, parsed as May 7th, 2007 (the control is trying to parse 05-07-2007 --note that the digits are split like this based on the culture-specific slot distribution month,date,year i.e. in a 8-digit format where year should be last the last 4 digits of the representation)

* "070507" - **OK**, parsed as July 5th, 2007 (the control is trying to parse 07-05-07)

* "20070507" - **NOT OK**. In the en-US culture, this parses to 20-07-0507, which is evaluated as July 20th, 507. As this value is usually outside the range set by the **MinDate** property, this date would be out of the valid range. To interpret this string as it was probably meant (with a 4-digit year in the first slot), the **RadDateInput** control would need a different **Culture** setting.

* "12010" - **OK**. Prior Q2 2013 this value would be parsed as "1/CurrentMonth/2010" where "CurrentMonth" will be replaced with the current month.And as result the input will show the current month and 2010 year. The date would be parsed this way if the format string is like	"MMM/yyyy"or any other which does not include the day portion. Since Q2 2013 "12010" would be parsed as "1/1/2010" if again the "MMM/yyyy" format string is used or a similar one.	However, If both numbers are less than 12, the format will be considered during the parsing. For example if the current culture has format like "MM/YY", "5 9"" will be parsed	as "5 2009". And if the current culture has format "YY/MM" the same input will be parsed as "2009 5". If one of the numbers is greater than 12, it will be considered as year, and the other one as month.	If the both are greater than 12, the input will go in error state and show the error CssClass. If the DateInput have DateFormat that contains days, the old parsing will be used.

>note Note that if the current culture was **fr-CA** (with short date format "yyyy-MM-dd" where the year slot is first) the input entry "20070507" would be evaluated properly as May 7th, 2007.
>


## Using ValueChanging event

The following example demonstrates how you could use **ValueChanging** client side event to perform further restrictions/parsing of the date value:

````ASPNET
<script type="text/javascript">
	function valueChanging(sender, args) {
		var oldValue = args.get_oldValue();
		var newValue = args.get_newValue();
		// execute custom logic, for example:
		if (newValue == "myFavoriteDay") {
			args.set_newValue("2012/12/12");
		}
	}
</script>
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
	<DateInput>
		<ClientEvents OnValueChanging="valueChanging" />
	</DateInput>
</telerik:RadDatePicker>
````



# See Also

 * [Formatting Dates]({%slug raddateinput/features/formatting-dates%})
