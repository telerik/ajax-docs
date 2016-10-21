---
title: SaveDockLayout
page_title: SaveDockLayout | RadDock for ASP.NET AJAX Documentation
description: SaveDockLayout
slug: dock/server-side-programming/events/savedocklayout
tags: savedocklayout
published: True
position: 3
---

# SaveDockLayout




The **SaveDockLayout** event occurs when it is appropriate for the application to save the state of all its **RadDock** controls to a storage medium such as the Session, a cookie, or a database. This event should be used to store the state of **RadDock** controls in any of the following situations:

* The **StoreLayoutInViewState** property of the **RadDockLayout** control is **False**.

* You want to save the state of **RadDock** controls when the user leaves the Web page and restore it when the user returns to the Web page.

* The application dynamically creates **RadDock** controls at runtime.

The **SaveDockLayout** event handler receives two arguments:

1. The **RadDockLayout** control that is responsible for managing the layout of **RadDockZone** and **RadDock** controls. This argument is of type object, but can be cast to the **RadDockLayout** type.

1. A **DockLayoutEventArgs** object. This object provides access to layout information in two properties:
	* **Indices** is a **Dictionary** that stores the **Index** property of all **RadDock** controls, accessed through the **UniqueName** property of the **RadDock** control.
	* **Positions** is a **Dictionary** that stores the **DockZoneID** property of all **RadDock** controls, accessed through the **UniqueName** property of the **RadDock** control.

>note If the application has not explicitly set the **UniqueName** property of the **RadDock** controls, the **Indices** and **Positions** properties of the **DockLayoutEventArgs** object are indexed by the server-side **ID** of the **RadDock** controls.
>


Typically, a **SaveDockLayout** event handler uses the **RadDockLayout** control's **GetRegisteredDocksState** method, which returns a list of **DockState** objects that represent the state and position of the each **RadDock** control managed by the **RadDockLayout**:



````C#
protected void RadDockLayout1_SaveDockLayout(object sender, DockLayoutEventArgs e)
{
    HttpCookie dockState = Page.Response.Cookies.Get("MyApplicationDockStates");
    if (dockState == null)
    {
        dockState = new HttpCookie("MyApplicationDockStates");
        Page.Response.Cookies.Add(dockState);
    }
    List<DockState> stateList = ((RadDockLayout)sender).GetRegisteredDocksState();
    StringBuilder serializedList = new StringBuilder();
    for (int i = 0; i < stateList.Count; i++)
    {
        serializedList.Append(stateList[i].ToString());
        serializedList.Append("|");
    }
    dockState.Expires = DateTime.Today.AddMonths(1);
    dockState.Value = serializedList.ToString();
}
````
````VB
Protected Sub RadDockLayout1_SaveDockLayout( _
                 ByVal sender As Object, _
                 ByVal e As DockLayoutEventArgs) _
                 Handles RadDockLayout1.SaveDockLayout
    Dim dockState As HttpCookie = Page.Response.Cookies.[Get]("MyApplicationDockStates")
    If dockState Is Nothing Then
        dockState = New HttpCookie("MyApplicationDockStates")
        Page.Response.Cookies.Add(dockState)
    End If
    Dim stateList As List(Of DockState) = (DirectCast(sender, RadDockLayout)).GetRegisteredDocksState()
    Dim serializedList As New StringBuilder()
    Dim i As Integer = 0
    While i < stateList.Count
        serializedList.Append(stateList(i).ToString())
        serializedList.Append("|")
        System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
    End While
    dockState.Expires = DateTime.Today.AddMonths(1)
    dockState.Value = serializedList.ToString()
End Sub
````


>caution The **RadDockLayout** control only manages the layout of **RadDock** and **RadDockZone** controls that are contained in its **Controls** collections.
>


# See Also

 * [LoadDockLayout]({%slug dock/server-side-programming/events/loaddocklayout%})

 * [Creating RadDock Dynamically]({%slug dock/how-to/creating-raddock-dynamically%})

 * [Adding Controls Inside Dynamically Created Docks]({%slug dock/how-to/adding-controls-inside-dynamically-created-docks%})
