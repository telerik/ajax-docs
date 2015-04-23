---
title: LoadDockLayout
page_title: LoadDockLayout | RadDock for ASP.NET AJAX Documentation
description: LoadDockLayout
slug: dock/server-side-programming/events/loaddocklayout
tags: loaddocklayout
published: True
position: 2
---

# LoadDockLayout



The **LoadDockLayout** event occurs when it is appropriate for the application to load the state of all its **RadDock** controls when that state has been previously saved by a [SaveDockLayout]({%slug dock/server-side-programming/events/savedocklayout%}) event handler.

The **LoadDockLayout** event handler receives two arguments:

1. The **RadDockLayout** control that is responsible for managing the layout of **RadDockZone** and **RadDock** controls. This argument is of type object, but can be cast to the **RadDockLayout** type.

1. A **DockLayoutEventArgs** object. This object provides access to layout information in two properties:

* **Indices** is a **Dictionary** that stores the **Index** property of all **RadDock** controls, accessed through the **UniqueName** property of the **RadDock** control.

* **Positions** is a **Dictionary** that stores the **DockZoneID** property of all **RadDock** controls, accessed through the **UniqueName** property of the **RadDock** control.

>note If the application has not explicitly set the **UniqueName** property of the **RadDock** controls, the **Indices** and **Positions** properties of the **DockLayoutEventArgs** object are indexed by the server-side **ID** of the **RadDock** controls.
>


The **LoadDockLayout** should set the **Indices** and **Positions** properties of the **DockLayoutEventArgs** argument from the values that were saved by the **SaveDockLayout** event handler:



````C#
protected void RadDockLayout1_LoadDockLayout(object sender, DockLayoutEventArgs e)
{
    HttpCookie dockState = Page.Request.Cookies.Get("MyApplicationDockStates");
    if (dockState != null)
    {
        string serializedList = dockState.Value;
        if (serializedList != null)
        {
            string[] states = serializedList.Split('|');
            for (int i = 0; i < states.Length; i++)
            {
                DockState state = DockState.Deserialize(states[i]);
                e.Positions[state.UniqueName] = state.DockZoneID;
                e.Indices[state.UniqueName] = state.Index;
            }
        }
    }
}
````
````VB     
Protected Sub RadDockLayout1_LoadDockLayout( _
       ByVal sender As Object, ByVal e As DockLayoutEventArgs) _
       Handles RadDockLayout1.LoadDockLayout
    Dim dockState As HttpCookie = Page.Request.Cookies.[Get]("MyApplicationDockStates")
    If dockState <> Nothing Then
        Dim serializedList As String = dockState.Value
        If serializedList <> Nothing Then
            Dim states As String() = serializedList.Split("|"c)
            Dim i As Integer = 0
            While i < states.Length
                Dim state As DockState = DockState.Deserialize(states(i))
                e.Positions(state.UniqueName) = state.DockZoneID
                e.Indices(state.UniqueName) = state.Index
                System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
            End While
        End If
    End If
End Sub
````


>tip If other properties than the position and dock zone can change for the **RadDock** controls, the application should call the **ApplyState** method of the **RadDock** controls, passing in the saved **DockState** object. This can be done either in the **LoadDockLayout** event handler, or in the **Page_Init** event handler.
>


# See Also

 * [Creating RadDock Dynamically]({%slug dock/how-to/creating-raddock-dynamically%})

 * [Adding Controls Inside Dynamically Created Docks]({%slug dock/how-to/adding-controls-inside-dynamically-created-docks%})
