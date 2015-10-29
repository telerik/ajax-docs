---
title: SelectedDateChanged
page_title: SelectedDateChanged | RadMonthYearPicker for ASP.NET AJAX Documentation
description: SelectedDateChanged
slug: monthyearpicker/server-side-programming/events/selecteddatechanged
tags: selecteddatechanged
published: True
position: 2
---

# SelectedDateChanged


**RadMonthYearPicker** provides the **SelectedDateChanged** server event, which occurs when the user changes the value of the control, either when input area loses focus after the user has typed a new value, or when the user selects a new value in the popup **MonthYearView**. This event fires only when the **AutoPostBack** property is **True**.

>note 
The event handler is not called unless the date and/or time actually changes. If the user makes a change that results in the same value (for example, typing a different string that parses to the same value), a postback occurs but the **SelectedDateChanged** event handler is not called.
>


The **SelectedDateChanged** event handler receives two arguments:

1. The control whose value has just changed. This argument is of type object, but can be cast to the appropriate type.

2. A **SelectedDateChangedEventArgs** object. This object has the following two properties:

	* **OldDate** is the value before the change.

	* **NewDate** is the value after the change.

You can use this event to respond in server-side code when the user changes the value:



````C#
protected void RadMonthYearPicker1_SelectedDateChanged(object sender, SelectedDateChangedEventArgs e)
{
    Label1.Text = "Change from ";
    if (e.OldDate == null)
        Label1.Text += "nothing";
    else Label1.Text += e.OldDate.ToString();
    Label1.Text += " to ";
    if (e.NewDate == null)
        Label1.Text += "nothing";
    else Label1.Text += e.NewDate.ToString();
}		
````
````VB.NET
Protected Sub RadMonthYearPicker1_SelectedDateChanged(ByVal sender As Object, ByVal e As SelectedDateChangedEventArgs) Handles RadMonthYearPicker1.SelectedDateChanged
    Label1.Text = "Change from "
    If e.OldDate = Nothing Then
        Label1.Text += "nothing"
    Else
        Label1.Text += e.OldDate.ToString()
    End If
    Label1.Text += " to "
    If e.NewDate = Nothing Then
        Label1.Text += "nothing"
    Else
        Label1.Text += e.NewDate.ToString()
    End If
End Sub
````


# See Also

 * [Server-side Events Overview]({%slug monthyearpicker/server-side-programming/events/overview%})
 
 
