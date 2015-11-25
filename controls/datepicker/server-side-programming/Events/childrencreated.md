---
title: ChildrenCreated
page_title: ChildrenCreated | RadDatePicker for ASP.NET AJAX Documentation
description: ChildrenCreated
slug: datepicker/server-side-programming/events/childrencreated
tags: childrencreated
published: True
position: 5
---

# ChildrenCreated



**RadDatePicker** exposes the **ChildrenCreated** server event, which occurs after the child controls have been created.


The **ChildrenCreated** event handler receives two arguments:

1. The control whose children have just been created. This argument is of type object, but can be cast to the appropriate type.

2. A **DefaultViewChangedEventArgs** object. This object has the following two properties:

	* **OldView** is the **CalendarView** object for the view that was current before the change.

	* **NewView** is the **CalendarView** object for the current view after the change.

You can use this event to set date input and calendar properties, or add additional controls. The following example uses the **ChildrenCreated** event handler to add a control that clears the selection:



````C#
protected void RadDatepicker1_ChildrenCreated(object sender, System.EventArgs e)
{
    RadDatePicker picker = (RadDatePicker)sender;
    HyperLink clearLink = new HyperLink();
    clearLink.NavigateUrl = string.Format("javascript:$find('{0}').Clear()", picker.ClientID);
    clearLink.Text = "Clear";
    picker.Controls.Add(clearLink);
}
````
````VB.NET
Protected Sub RadDatePicker1_ChildrenCreated(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadDatePicker1.ChildrenCreated
    Dim picker As RadDatePicker = DirectCast(sender, RadDatePicker)
    Dim clearLink As New HyperLink()
    clearLink.NavigateUrl = _
      String.Format("javascript:$find('{0}').Clear()", picker.ClientID)
    clearLink.Text = "Clear"
    picker.Controls.Add(clearLink)
End Sub
````


# See Also

 * [Server-side events Overview]({%slug datepicker/server-side-programming/events/overview%})
