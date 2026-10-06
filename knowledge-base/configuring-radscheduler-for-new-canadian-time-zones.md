---
title: Configuring RadScheduler for Canadian Time Zones with New Rules
description: Learn how to configure RadScheduler to support new Canadian time zones for correct appointment display year-round.
type: how-to
page_title: Supporting New Canadian Time Zones in RadScheduler
meta_title: Supporting New Canadian Time Zones in RadScheduler
slug: configuring-radscheduler-for-new-canadian-time-zones
tags: radscheduler, scheduler, timezoneid, timezoneoffset, asp.net-ajax
res_type: kb
ticketid: 1719387
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Scheduler for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.2.708</td>
</tr>
</tbody>
</table>

## Description

I want to configure RadScheduler to support the new Canadian time zones, such as BC UTC-7 and Alberta UTC-6, via `TimeZoneID` so appointments display correctly year-round. The new Canadian time-zone rules affect provinces like British Columbia, Alberta, Northwest Territories, and Manitoba, which will no longer observe daylight saving time starting November 1, 2026. This creates a mismatch with the U.S. time zones where daylight saving time continues to apply.

This knowledge base article also answers the following questions:

- How to handle Canadian time zones in RadScheduler when daylight saving rules no longer match?
- How to assign distinct time zones in RadScheduler for Canadian provinces?
- What to do if Windows does not provide updated time-zone definitions?

## Solution

To configure RadScheduler for the new Canadian time zones, follow these steps:

1. Ensure that the Windows server running the application has the latest updates. Microsoft may release new time-zone definitions for the affected Canadian regions. 

2. Check for available time zones on the server using the following code:
````c#
foreach (TimeZoneInfo timeZone in TimeZoneInfo.GetSystemTimeZones())
{
    Console.WriteLine(timeZone.Id);
}
````
   ````vb.net
   For Each timeZone As TimeZoneInfo In TimeZoneInfo.GetSystemTimeZones()
       Console.WriteLine(timeZone.Id)
   Next
   ````

3. Once the new Canadian time-zone IDs are available on the server, assign them to `RadScheduler.TimeZoneID` dynamically during each request in the `Page_Init` event. Avoid assigning the time zone only when `Not IsPostBack` is true.

   Example:
   ````C#
     protected void Page_Init(object sender, EventArgs e)
     {
       string staffId = Profile.StaffID;
       TimeZoneInfoResult result = TimeZone_Staff.RunSelectStatement(staffId);
       RSAppointments.TimeZoneID = result.TimeZone;
   }
   ````
   ````vb.net
   Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
       Dim staffId As String = Profile.StaffID
       Dim result As TimeZoneInfoResult = TimeZone_Staff.RunSelectStatement(staffId)
       RSAppointments.TimeZoneID = result.TimeZone
   End Sub
   ````

4. Store all appointment times in UTC. RadScheduler will automatically handle time-zone conversions for display and editing.

5. If Microsoft does not provide the updated time-zone definitions in time, use the `RadScheduler.TimeZoneOffset` property as a temporary workaround for fixed offsets. 

   Example for BC (UTC-7):
````c#
RadScheduler1.TimeZoneOffset = TimeSpan.FromHours(-7);
````
   ````vb.net
   RadScheduler1.TimeZoneOffset = TimeSpan.FromHours(-7)
   ````

   This approach is for regions that do not observe daylight saving time and have a fixed offset year-round. It is not suitable for dynamic time zones with changing rules.

6. Avoid using existing `TimeZoneID` values like "Pacific Standard Time," "Mountain Standard Time," or "Central Standard Time" if their daylight-saving rules do not match the new Canadian regions.

## See Also

- [RadScheduler Time Zones Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/scheduler/accessibility-and-internationalization/handling-time-zones)
- [TimeZoneInfo Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.timezoneinfo)
- [TimeZoneInfo.GetSystemTimeZones() Method (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.timezoneinfo.getsystemtimezones)
