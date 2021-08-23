---
title: Overview
page_title: Server-side Programming Overview - RadDateRangePicker
description: Check our Web Forms article about Overview.
slug: daterangepicker/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of RadDateRangePicker and create its items in the code-behind via the Server-Side API of the control.

## RadDateRangePicker Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadDateRangePicker class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadDateRangePicker). You can also find it in the IntelliSense in Visual Studio.

Information about the Server-side APIs of the embedded controls you can find in the dedicated articles:

 - [RadCalendar Server-side Programming]({%slug calendar/server-side-programming/server-side-objects%})

 - [RadDatePicker Server-side Programming]({%slug datepicker/server-side-programming/server-side-objects%})


## Create a RadDateRangePicker in the Code-behind:

````ASPX
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var dateRangePicker = new RadDateRangePicker();
    dateRangePicker.ID = "RadDateRangePicker1";
    dateRangePicker.Skin = "Silk";
    dateRangePicker.Calendar.MultiViewColumns = 2;
    dateRangePicker.Calendar.MultiViewRows = 3;
    dateRangePicker.StartDatePicker.DatePopupButton.Visible = true;
    dateRangePicker.EndDatePicker.DatePopupButton.Visible = true;

    dateRangePicker.RangeSelectionStartDate = DateTime.Now;
    dateRangePicker.RangeSelectionEndDate = DateTime.Now.AddDays(14);

    PlaceHolder1.Controls.Add(dateRangePicker);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim dateRangePicker = New RadDateRangePicker()
    dateRangePicker.ID = "RadDateRangePicker1"
    dateRangePicker.Skin = "Silk"
    dateRangePicker.Calendar.MultiViewColumns = 2
    dateRangePicker.Calendar.MultiViewRows = 3
    dateRangePicker.StartDatePicker.DatePopupButton.Visible = True
    dateRangePicker.EndDatePicker.DatePopupButton.Visible = True
    dateRangePicker.RangeSelectionStartDate = DateTime.Now
    dateRangePicker.RangeSelectionEndDate = DateTime.Now.AddDays(14)
    PlaceHolder1.Controls.Add(dateRangePicker)
End Sub
````
 

# See Also

 * [Server-Side API of the RadDateRangePicker class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadDateRangePicker)
 
 * [RadCalendar Server-side Programming]({%slug calendar/server-side-programming/radcalendar-object%})

 * [RadDatePicker Server-side Programming]({%slug calendar/server-side-programming/server-side-objects%})

