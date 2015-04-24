---
title:  DockPositionChanged
page_title:  DockPositionChanged | RadDock for ASP.NET AJAX Documentation
description:  DockPositionChanged
slug: dock/server-side-programming/events/dockpositionchanged
tags: dockpositionchanged
published: True
position: 1
---

#  DockPositionChanged



The **DockPositionChanged** event occurs when postbacks are enabled and the user changes the position of a **RadDock** control. This change can be

* A move from one **RadDockZone** control to another.

* A move from a **RadDockZone** control to a floating position.

* A move from a floating position to a **RadDockZone** control.

* A change of index within a **RadDockZone** control.

>note The **DockPositionChanged** event does *not* occur when the **RadDock** control is moved from one floating position to another, or when the **RadDock** control is moved programmatically.
>


The **DockPositionChanged** event handler receives two arguments:

1. The **RadDock** control whose position has changed.

1. A **DockPositionChangedEventArgs** object. This object has two properties describe the new position of the **RadDock** object:
	* **DockZoneID** is the **ID** of the new **RadDockZone** to which the control is moved. If the **RadDock** control is moved to a floating position, **DockZoneID** is null.
	* **Index** is the new index of the **RadDock** control in the **RadDockZone** identified by **DockZoneID**. If the **RadDock** control is moved to a floating position, **Index** is -1.
	* **IsDragged** determines whether the position of the **RadDock** control is changed as a result of dragging. If the position of the dock control is changed because another one is closed or moved out of the **RadDockZone**, **IsDragged** will be set to **false**.

In the **DockPositionChanged** event handler, the **DockZoneID** and **Index** properties of the **RadDock** control reflect the old position from which the **RadDock** control is being moved. This is true even if the event handler is called after a delay because the value of the **AutoPostBack** property is **False**.

Use a **DockPositionChanged** event handler to respond when the user moves the **RadDock** control:



````C#
protected void RadDock1_DockPositionChanged(object sender, DockPositionChangedEventArgs e)
{
    RadDock dock = (RadDock)sender;
    if (e.DockZoneID == String.Empty)
        dock.Text = String.Format("I used to be in {0} but now I am floating.", dock.DockZoneID);
    else
    {
        if (dock.DockZoneID == String.Empty)
        {
            dock.Text = "I used to be floating, but now I am docked in " + e.DockZoneID;
        }
        else if (dock.DockZoneID != e.DockZoneID)
            dock.Text = String.Format("I moved from {0} to {1}.", dock.DockZoneID, e.DockZoneID);
        else
            dock.Text = String.Format("I moved from position {0} to position {1}." + dock.Index.ToString(), e.Index.ToString());
    }
}
````
````VB     
Protected Sub RadDock1_DockPositionChanged(ByVal sender As Object, _
                          ByVal e As DockPositionChangedEventArgs) _
                          Handles RadDock1.DockPositionChanged
    Dim dock As RadDock = DirectCast(sender, RadDock)
    If e.DockZoneID = [String].Empty Then
        dock.Text = [String].Format("I used to be in {0} but now I am floating.", _
                                    dock.DockZoneID)
    Else
        If dock.DockZoneID = [String].Empty Then
            dock.Text = "I used to be floating, but now I am docked in " + _
                         e.DockZoneID
        ElseIf dock.DockZoneID <> e.DockZoneID Then
            dock.Text = [String].Format("I moved from {0} to {1}.", _
                                        dock.DockZoneID, e.DockZoneID)
        Else
            dock.Text = [String].Format("I moved from position {0} to position {1}.", _
                                         dock.Index.ToString(), e.Index.ToString())
        End If
    End If
End Sub
````


# See Also

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

 * [OnClientDockPositionChanging]({%slug dock/client-side-programming/events/onclientdockpositionchanging%})

 * [OnClientDockPositionChanged]({%slug dock/client-side-programming/events/onclientdockpositionchanged%})
