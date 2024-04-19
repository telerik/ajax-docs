---
title: Convert Recurrence Rule to Descriptive text
description: Convert Recurrence Rule to Descriptive text. Check it out!
type: how-to
page_title: Convert Recurrence Rule to Descriptive text. | RadScheduler 
slug: scheduler-convert-recurrence-rule-to-descriptive-text
res_type: kb
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms Scheduler for ASP.NET AJAX</td>
    </tr>
</table>

## Description

This started as a [question in forums](https://www.telerik.com/forums/regular-expression-to-parse-recurrencerule), but I will post code sample here as it seems useful.

The goal is to take a **RecurrenceRule** string from the database for a given appointment and convert that into a plain English statement that could be used in an email for the appointment.

## Solution

The shared sample code contains a static class (RecRuleParser) that does this. Usage: `RecRuleParser.ParseRRule(<RecurrenceRule string from DB>, <boolean to include exceptions>)`

Example 1:

**RRULE**: DTSTART:20100527T040000Z  <br />
**DTEND**: 20100528T040000Z  <br />
**RRULE**: FREQ=WEEKLY;INTERVAL=1;BYDAY=TH <br />
**EXDATE**: 20100527T040000Z,20100813T040000Z <br />
**RESULT**: Occurs weekly every Thursday starting on 5/27/2010 at 12:00 AM except on 5/27/2010 12:00:00 AM and 8/13/2010 12:00:00 AM

<br />

Example 2:

**RRULE**: DTSTART:20100914T180000Z    <br />
**DTEND**: 20100914T190000Z    <br />
**RRULE**: FREQ=MONTHLY;INTERVAL=1;BYSETPOS=4;BYDAY=SA,SU <br />
**RESULT**: Occurs monthly on the 4th Saturday  and Sunday starting on 9/14/2010 at 2:00 PM <br />

<br />
Source code:

````C#
public static class RecRuleParser
{
    public static string ParseRRule(string rRule, bool showExceptions)
    {
        string parsed = string.Empty;
        StringBuilder englishStatement = new StringBuilder();

        // Break the input string into basic parts
        string[] elements = rRule.Split(' ');
        string startDate = elements[0];
        string endDate = elements[2];
        string recRule = elements[4];
        string recExcs = string.Empty;

        // Check for exceptions
        if (elements.Length > 5)
        {
            recExcs = elements[6];
        }

        // Attempt to parse the Zulu dates into DateTime objects
        DateTime dtStart = DateTime.ParseExact(GetElemValue(startDate), "yyyyMMddTHHmmssZ", CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal);
        DateTime dtEnd = DateTime.ParseExact(GetElemValue(endDate), "yyyyMMddTHHmmssZ", CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal);
        TimeSpan tsEnd = dtEnd.Subtract(dtStart);

        // Now work with the recurrence rule
        Dictionary<string, string> rruleElems = new Dictionary<string, string>();
        parsed = GetElemValue(recRule); // Get parsed recurrence rule
        elements = parsed.Split(';');

        // Convert the string to a dictionary for easy access
        for (int i = 0; i < elements.Length; i++)
        {
            string[] tmp = elements[i].Split('=');
            rruleElems.Add(tmp[0], tmp[1]);
        }

        // Construct English statement based on recurrence rule
        englishStatement.Append("Occurs " + rruleElems["FREQ"].ToLower());
        string calType = string.Empty;
        int timeToAdd = 0;

        // Attempt to convert COUNT to integer
        try
        {
            timeToAdd = Convert.ToInt32(rruleElems["COUNT"]);
        }
        catch
        {
            timeToAdd = 0;
        }

        switch (rruleElems["FREQ"].ToLower())
        {
            case "daily":
                // Handle daily recurrence
                string[] days = rruleElems["BYDAY"].Split(',');
                englishStatement.Append(ParseDayNames(days));
                dtEnd = dtEnd.AddDays(timeToAdd);
                calType = "days";
                break;
            case "weekly":
                // Handle weekly recurrence
                calType = "weeks";
                dtEnd = dtEnd.AddDays(timeToAdd * 7);
                try
                {
                    days = rruleElems["BYDAY"].Split(',');
                    englishStatement.Append(ParseDayNames(days));
                }
                catch
                {
                    throw new Exception("Error while processing Recurrence Rule");
                }
                break;
            case "monthly":
                // Handle monthly recurrence
                calType = "months";
                dtEnd = dtEnd.AddMonths(timeToAdd);
                try
                {
                    string bsp = GetDayEnding(rruleElems["BYSETPOS"]);
                    englishStatement.Append(" on the " + bsp + " " + ParseDayNames(rruleElems["BYDAY"].Split(',')).Replace(" every ", ""));
                }
                catch
                {
                    string bsp = GetDayEnding(rruleElems["BYMONTHDAY"]);
                    englishStatement.Append(" on the " + bsp + " day of each month");
                }
                break;
            case "yearly":
                // Handle yearly recurrence
                calType = "years";
                dtEnd = dtEnd.AddYears(timeToAdd);
                string mName = CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(Convert.ToInt32(rruleElems["BYMONTH"]));
                try
                {
                    string bsp = GetDayEnding(rruleElems["BYSETPOS"]);
                    englishStatement.Append(" on the " + bsp + " " + ParseDayNames(rruleElems["BYDAY"].Split(',')).Replace(" every ", "") + " of " + mName);
                }
                catch
                {
                    string bsp = GetDayEnding(rruleElems["BYMONTHDAY"]);
                    englishStatement.Append(" on the " + bsp + " day of " + mName);
                }
                break;
            case "hourly":
                // Handle hourly recurrence
                calType = "hours";
                dtEnd = dtEnd.AddHours(timeToAdd);
                break;
            default:
                break;
        }

        // Add start time to the English statement
        englishStatement.Append(" starting on " + dtStart.ToLocalTime().ToShortDateString() + " at " + dtStart.ToLocalTime().ToShortTimeString());

        // Add end time to the English statement if COUNT is specified
        if (timeToAdd > 0)
        {
            englishStatement.Append(" for the next " + rruleElems["COUNT"] + " " + calType);
            englishStatement.Append(" ending on " + dtEnd.ToLocalTime().ToShortDateString() + " at " + dtStart.AddHours(tsEnd.Hours).ToLocalTime().ToShortTimeString());
        }

        // Add exception dates to the English statement if present and requested
        if (recExcs.Length > 0 && showExceptions)
        {
            string[] excs = recExcs.Split(':')[1].Split(',');
            string retString = string.Empty;
            englishStatement.Append(" except on ");
            for (int r = 0; r < excs.Length; r++)
            {
                dtEnd = DateTime.ParseExact(excs[r], "yyyyMMddTHHmmssZ", CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal).ToLocalTime();
                if (r < excs.Length && excs.Length > 2)
                {
                    retString += dtEnd + ",";
                }
                else
                {
                    if (r < excs.Length - 1 && excs.Length == 2)
                    {
                        retString += dtEnd + " and ";
                    }
                    else
                    {
                        retString += dtEnd;
                    }
                }
            }
            englishStatement.Append(retString);
        }

        return englishStatement.ToString();
    }

    private static string GetElemValue(string elem)
    {
        // Helper function to extract value from element
        string[] elems = elem.Split(':');
        return elems[1].Trim();
    }

    private static string GetDayName(string day)
    {
        // Helper function to get day name
        switch (day)
        {
            case "MO":
                return "Monday";
            case "TU":
                return "Tuesday";
            case "WE":
                return "Wednesday";
            case "TH":
                return "Thursday";
            case "FR":
                return "Friday";
            case "SA":
                return "Saturday";
            case "SU":
                return "Sunday";
            default:
                return "";
        }
    }

    private static string ParseDayNames(string[] days)
    {
        // Helper function to parse day names
        string retString = string.Empty;
        if (days.Length < 7)
        {
            retString += " every";
            for (int d = 0; d < days.Length; d++)
            {
                days[d] = GetDayName(days[d]);
                if (d == days.Length - 1 && days.Length > 1)
                {
                    days[d] = " and " + days[d];
                }
                else
                {
                    if (days.Length > 2)
                    {
                        days[d] += ",";
                    }
                }
                retString += " " + days[d];
            }
        }
        return retString;
    }

    private static string GetDayEnding(string d)
    {
        // Helper function to handle the ordinal suffix for day numbers
        if (d.EndsWith("1") && d != "11")
        {
            d += "st";
        }
        if (d.EndsWith("2") && d != "12")
        {
            d += "nd";
        }
        if (d.EndsWith("3") && d != "13")
        {
            d += "rd";
        }
        if (d.Length < 3)
        {
            d += "th";
        }
        return d;
    }
}
````
  
   