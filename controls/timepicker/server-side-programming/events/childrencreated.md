---
title: ChildrenCreated
page_title: ChildrenCreated - RadTimePicker
description: Check our Web Forms article about ChildrenCreated.
slug: timepicker/server-side-programming/events/childrencreated
tags: childrencreated
published: True
position: 1
---

# ChildrenCreated



**RadTimePicker** exposes the **ChildrenCreated** server event, which occurs after the child controls are created.

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
protected void RadTimePicker1_ChildrenCreated(object sender, System.EventArgs e)
{
    RadTimePicker picker = (RadTimePicker)sender;
    HyperLink clearLink = new HyperLink();
    clearLink.NavigateUrl = string.Format("javascript:$find('{0}').Clear()", picker.ClientID);
    clearLink.Text = "Clear";
    picker.Controls.Add(clearLink);
}
````
````VB.NET
Protected Sub RadTimePicker1_ChildrenCreated(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadTimePicker1.ChildrenCreated
    Dim picker As RadTimePicker = DirectCast(sender, RadTimePicker)
    Dim clearLink As New HyperLink()
    clearLink.NavigateUrl = _
      String.Format("javascript:$find('{0}').Clear()", picker.ClientID)
    clearLink.Text = "Clear"
    picker.Controls.Add(clearLink)
End Sub
````


# See Also

 * [ItemCreated]({%slug timepicker/server-side-programming/events/itemcreated%})
