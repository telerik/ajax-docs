---
title: ChildrenCreated
page_title: ChildrenCreated | RadDateTimePicker for ASP.NET AJAX Documentation
description: ChildrenCreated
slug: calendar/server-side-programming/server-side-events/childrencreated
tags: childrencreated
published: True
position: 1
---

# ChildrenCreated



**RadDateTimePicker** exposes the **ChildrenCreated** server event, which is invoked after the child controls have been created.

>caution  
**ChildrenCreated** can be wired only during the **Page_PreInit** event, since it is fired before the regular handlers are attached.
>


The **ChildrenCreated** event handler receives two arguments:

1. The control whose children have just been created. This argument is of type object, but can be cast to the appropriate type.

2. A **DefaultViewChangedEventArgs** object. This object has the following two properties:

	* **OldView** is the **CalendarView** object for the view that was current before the change.

	* **NewView** is the **CalendarView** object for the current view after the change.

You can use this event to set date input, calendar and time view properties, or add additional controls. The following example uses the **ChildrenCreated** event handler to add a control that clears the selection:



````C#
protected void RadDateTimePicker1_ChildrenCreated(object sender, System.EventArgs e)
{
    RadDateTimePicker picker = (RadDateTimePicker)sender;
    HyperLink clearLink = new HyperLink();
    clearLink.NavigateUrl = string.Format("javascript:$find('{0}').Clear()", picker.ClientID);
    clearLink.Text = "Clear";
    picker.Controls.Add(clearLink);
}
````
````VB.NET
Protected Sub RadDateTimePicker1_ChildrenCreated(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadDateTimePicker1.ChildrenCreated
    Dim picker As RadDateTimePicker = DirectCast(sender, RadDateTimePicker)
    Dim clearLink As New HyperLink()
    clearLink.NavigateUrl = _
      String.Format("javascript:$find('{0}').Clear()", picker.ClientID)
    clearLink.Text = "Clear"
    picker.Controls.Add(clearLink)
End Sub
````


# See Also

 * [ItemCreated]({%slug datetimepicker/server-side-programming/server-side-events/itemcreated%})
