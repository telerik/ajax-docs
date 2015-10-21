---
title: ViewCellCreated
page_title: ViewCellCreated | RadMonthYearPicker for ASP.NET AJAX Documentation
description: ViewCellCreated
slug: monthyearpicker/server-side-programming/server-side-events/viewcellcreated
tags: viewcellcreated
published: True
position: 9
---

# ViewCellCreated



**RadMonthYearPicker** provides the **ViewCellCreated** server event, which fires when **MonthCell**, **YearCell**, **NavigationCell** and **ButtonCell** in **MonthYearTableView** are created.

The **ViewCellCreated** event handler receives two arguments:

1. The control whose value has just changed. This argument is of type object,but can be cast to the appropriate type.

2. A **MonthYearViewCellCreatedEventArgs**object.This object has a **Cell**property, which lets you access the cell in **MonthYearTableView**.

You can use this event to customize the content or appearance of cells in the month year picker based on their type:



````C#
protected void RadMonthYearPicker1_ViewCellCreated(object sender, UI.MonthYearViewCellCreatedEventArgs e)
{
    RadMonthYearPicker1.MonthCellsStyle.BorderColor = Color.FromArgb(255, 190, 60);

    if (e.Cell.CellType == MonthYearViewCellType.MonthCell)
    {
        e.Cell.Style["font-color"] = "#330000";
        e.Cell.Style["background"] = "#ffffcc";
        HyperLink hplMonth = (e.Cell.Controls[0] as HyperLink);
        hplMonth.BorderColor = Color.FromArgb(255, 190, 60);
    }
    if (e.Cell.CellType == MonthYearViewCellType.YearCell)
    {
        e.Cell.Style["font-color"] = "#330000";
        e.Cell.Style["background"] = "#ffffcc";
        HyperLink hplYear = (e.Cell.Controls[0] as HyperLink);
        hplYear.BorderColor = Color.FromArgb(255, 190, 60);
    }
    if (e.Cell.CellType == MonthYearViewCellType.NavigationCell)
    {
        e.Cell.Style["font-color"] = "#330000";
        e.Cell.Style["background"] = "#fff3ad";
        HyperLink hplNavigate = (e.Cell.Controls[0] as HyperLink);
        hplNavigate.Style["color"] = "#ccb67e";
    }
    if (e.Cell.CellType == MonthYearViewCellType.ButtonCell)
    {
        e.Cell.Style["font-color"] = "#330000";
        e.Cell.Style["background"] = "#ffcc66";
        Button btnToday = (e.Cell.Controls[0] as Button);
        btnToday.Style["text-decoration"] = "underline";
        Button btnOk = (e.Cell.Controls[1] as Button);
        btnOk.Style["text-decoration"] = "underline";
        Button btnCancel = (e.Cell.Controls[2] as Button);
        btnCancel.Style["text-decoration"] = "underline";
    }
}
````
````VB.NET
Protected Sub RadMonthYearPicker1_ViewCellCreated(ByVal sender As Object, ByVal e As UI.MonthYearViewCellCreatedEventArgs)
    RadMonthYearPicker1.MonthCellsStyle.BorderColor = Color.FromArgb(255, 190, 60)

    If e.Cell.CellType = MonthYearViewCellType.MonthCell Then
        e.Cell.Style("font-color") = "#330000"
        e.Cell.Style("background") = "#ffffcc"
        Dim hplMonth As HyperLink = TryCast(e.Cell.Controls(0), HyperLink)
        hplMonth.BorderColor = Color.FromArgb(255, 190, 60)
    End If

    If e.Cell.CellType = MonthYearViewCellType.YearCell Then
        e.Cell.Style("font-color") = "#330000"
        e.Cell.Style("background") = "#ffffcc"
        Dim hplYear As HyperLink = TryCast(e.Cell.Controls(0), HyperLink)
        hplYear.BorderColor = Color.FromArgb(255, 190, 60)
    End If

    If e.Cell.CellType = MonthYearViewCellType.NavigationCell Then
        e.Cell.Style("font-color") = "#330000"
        e.Cell.Style("background") = "#fff3ad"
        Dim hplNavigate As HyperLink = TryCast(e.Cell.Controls(0), HyperLink)
        hplNavigate.Style("color") = "#ccb67e"
    End If

    If e.Cell.CellType = MonthYearViewCellType.ButtonCell Then
        e.Cell.Style("font-color") = "#330000"
        e.Cell.Style("background") = "#ffcc66"
        Dim btnToday As Button = TryCast(e.Cell.Controls(0), Button)
        btnToday.Style("text-decoration") = "underline"
        Dim btnOk As Button = TryCast(e.Cell.Controls(1), Button)
        btnOk.Style("text-decoration") = "underline"
        Dim btnCancel As Button = TryCast(e.Cell.Controls(2), Button)
        btnCancel.Style("text-decoration") = "underline"
    End If

End Sub
````


# See Also

 * [Server-side Events Overview]({%slug monthyearpicker/server-side-programming/events/overview%})
 
 
