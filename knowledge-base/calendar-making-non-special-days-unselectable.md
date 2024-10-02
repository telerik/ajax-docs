---
title: Making Non-Special Days Unselectable in RadCalendar
description: Learn how to make all non-special days unselectable in RadCalendar for ASP.NET AJAX.
type: how-to
page_title: How to Make Non-Special Days Unselectable in RadCalendar | RadCalendar for ASP.NET AJAX
slug: calendar-making-non-special-days-unselectable
tags: radcalendar, asp.net ajax, unselectable days, special days
res_type: kb
---
## Environment
| Product | Version |
|---------|---------|
| RadCalendar for ASP.NET AJAX | all |

## Description
I want to make all non-special days unselectable in my RadCalendar for ASP.NET AJAX. Currently, I am able to iterate through a list of dates and create blue special days that are selectable. However, I need to figure out how to make every day that is NOT special unselectable.

## Solution
To make all non-special days unselectable in RadCalendar, you can apply the solution from the [Disabling calendar days article](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/datepicker-disabling-calendar-days). This solution involves replacing the default cell content with a span element and modifying the appearance of the disabled days. Here's how you can apply it to your scenario:

1. Add the following JavaScript code to your ASPX page:

```javascript
<script type="text/javascript">
    // necessary to disable non-special days on client-side navigation
    function OnDayRender(calendarInstance, args) {
        // convert the date-triplet to a javascript date
        var jsDate = new Date(args.get_date()[0], args.get_date()[1] - 1, args.get_date()[2]);

        // Check if the day is special
        var specialDates = [new Date(2024, 4, 14), new Date(2024, 4, 20), new Date(2024, 5, 5)];
        var isSpecial = specialDates.some(function (date) {
            return date.getTime() === jsDate.getTime();
        });

        if (!isSpecial) {
            var otherMonthCssClass = "rcOutOfRange";
            args.get_cell().className = otherMonthCssClass;
            // replace the default cell content (anchor tag) with a span element 
            // that contains the processed calendar day number -- necessary for the calendar skinning mechanism 
            args.get_cell().innerHTML = "<span>" + args.get_date()[2] + "</span>";
            // disable selection and hover effect for the cell
            args.get_cell().DayId = "";
        }
    }
</script>
```

2. Modify your RadCalendar declaration in the ASPX page to include the `OnDayRender` client event handler:

```html
<telerik:RadCalendar ID="RadCalendar1" runat="server" AutoPostBack="true" EnableNavigation="True" NavigationCellPadding="10" EnableMultiSelect="false" RenderMode="lightweight"
    OnDayRender="Calendar_OnDayRender">
    <FastNavigationSettings EnableTodayButtonSelection="true"></FastNavigationSettings>
    <ClientEvents OnDayRender="OnDayRender" />
</telerik:RadCalendar>
```

3. Add the following VB.NET code to your ASPX.VB code-behind file:
```C#
    private List<DateTime> GetSpecialDates()
    {
        return new List<DateTime>
        {
            new DateTime(2024, 5, 14),
            new DateTime(2024, 5, 20),
            new DateTime(2024, 6, 5)
        };
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        // necessary not to repeat the special days on postback
        if (!Page.IsPostBack)
        {
            RadCalendar1.SpecialDays.Clear();
        }
    }

    // necessary to disable all non-special days on first page load
    protected void Calendar_OnDayRender(object sender, Telerik.Web.UI.Calendar.DayRenderEventArgs e)
    {
        // Get the list of special dates
        List<DateTime> specialDates = GetSpecialDates();

        // Check if the current date is in the special dates list
        if (specialDates.Contains(e.Day.Date))
        {
            // If it is a special date, make it selectable and style it
            e.Day.IsSelectable = true;
            e.Cell.BackColor = Color.Blue;
        }
        else
        {
            // If it is not a special date, make it non-selectable
            e.Day.IsSelectable = false;
            e.Cell.BackColor = Color.LightGray; // Optional: set a different color for non-selectable days

            // Disable selection and hover effect for non-special days
            string calendarSkin = RadCalendar1.Skin;
            if (string.IsNullOrEmpty(calendarSkin))
            {
                calendarSkin = "Default";
            }
            string otherMonthCssClass = "rcOutOfRange";

            // clear the default cell content (anchor tag) as we need to disable the hover effect for this cell
            //e.Cell.Text = "";
            e.Cell.CssClass = otherMonthCssClass; // set new CssClass for the disabled calendar day cells (e.g. look like other month days here)

            // render a span element with the processed calendar day number instead of the removed anchor -- necessary for the calendar skinning mechanism 
            Label label = new Label();
            label.Text = e.Day.Date.Day.ToString();
            //e.Cell.Controls.Add(label);

            // disable the selection for the specific day
            RadCalendarDay calendarDay = new RadCalendarDay();
            calendarDay.Date = e.Day.Date;
            calendarDay.IsSelectable = false;
            calendarDay.ItemStyle.CssClass = otherMonthCssClass;
            RadCalendar1.SpecialDays.Add(calendarDay);
        }
    }
```
```vb
Private Function GetSpecialDates() As List(Of DateTime)
    Return New List(Of DateTime) From {
        New DateTime(2024, 5, 14),
        New DateTime(2024, 5, 20),
        New DateTime(2024, 6, 5)
    }
End Function

Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
    ' necessary not to repeat the special days on postback
    If Not Page.IsPostBack Then
        RadCalendar1.SpecialDays.Clear()
    End If
End Sub

' necessary to disable all non-special days on first page load
Protected Sub Calendar_OnDayRender(ByVal sender As Object, ByVal e As Telerik.Web.UI.Calendar.DayRenderEventArgs)
    ' Get the list of special dates
    Dim specialDates As List(Of DateTime) = GetSpecialDates()

    ' Check if the current date is in the special dates list
    If specialDates.Contains(e.Day.Date) Then
        ' If it is a special date, make it selectable and style it
        e.Day.IsSelectable = True
        e.Cell.BackColor = Drawing.Color.Blue
    Else
        ' If it is not a special date, make it non-selectable
        e.Day.IsSelectable = False
        e.Cell.BackColor = Drawing.Color.LightGray ' Optional: set a different color for non-selectable days

        ' Disable selection and hover effect for non-special days
        Dim calendarSkin = RadCalendar1.Skin
        If (calendarSkin = "") Then
            calendarSkin = "Default"
        End If
        Dim otherMonthCssClass As String = "rcOutOfRange"

        ' clear the default cell content (anchor tag) as we need to disable the hover effect for this cell
        'e.Cell.Text = ""
        e.Cell.CssClass = otherMonthCssClass ' set new CssClass for the disabled calendar day cells (e.g. look like other month days here)

        ' render a span element with the processed calendar day number instead of the removed anchor -- necessary for the calendar skinning mechanism 
        Dim label As Label = New Label
        label.Text = e.Day.Date.Day.ToString
        '  e.Cell.Controls.Add(label)

        ' disable the selection for the specific day
        Dim calendarDay As RadCalendarDay = New RadCalendarDay
        calendarDay.Date = e.Day.Date
        calendarDay.IsSelectable = False
        calendarDay.ItemStyle.CssClass = otherMonthCssClass
        RadCalendar1.SpecialDays.Add(calendarDay)
    End If
End Sub
```

This code will disable all non-special days and style them accordingly in your RadCalendar.

  
