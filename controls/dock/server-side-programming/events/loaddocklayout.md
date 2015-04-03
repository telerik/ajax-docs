---
title: LoadDockLayout
page_title: LoadDockLayout | UI for ASP.NET AJAX Documentation
description: LoadDockLayout
slug: dock/server-side-programming/events/loaddocklayout
tags: loaddocklayout
published: True
position: 2
---

# LoadDockLayout



## 

The __LoadDockLayout__ event occurs when it is appropriate for the application to load the state of all its __RadDock__ controls when that state has been previously saved by a [SaveDockLayout]({%slug dock/server-side-programming/events/savedocklayout%}) event handler.

The __LoadDockLayout__ event handler receives two arguments:

1. The __RadDockLayout__ control that is responsible for managing the layout of __RadDockZone__ and __RadDock__ controls. This argument is of type object, but can be cast to the __RadDockLayout__ type.

1. A __DockLayoutEventArgs__ object. This object provides access to layout information in two properties:

* __Indices__ is a __Dictionary__ that stores the __Index__ property of all __RadDock__ controls, accessed through the __UniqueName__ property of the __RadDock__ control.

* __Positions__ is a __Dictionary__ that stores the __DockZoneID__ property of all __RadDock__ controls, accessed through the __UniqueName__ property of the __RadDock__ control.

>note If the application has not explicitly set the __UniqueName__ property of the __RadDock__ controls, the __Indices__ and __Positions__ properties of the __DockLayoutEventArgs__ object are indexed by the server-side __ID__ of the __RadDock__ controls.
>


The __LoadDockLayout__ should set the __Indices__ and __Positions__ properties of the __DockLayoutEventArgs__ argument from the values that were saved by the __SaveDockLayout__ event handler:

>tabbedCode

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


>end

>tip If other properties than the position and dock zone can change for the __RadDock__ controls, the application should call the __ApplyState__ method of the __RadDock__ controls, passing in the saved __DockState__ object. This can be done either in the __LoadDockLayout__ event handler, or in the __Page_Init__ event handler.
>


# See Also

 * [Creating RadDock Dynamically]({%slug dock/application-scenarios/creating-raddock-dynamically%})

 * [Adding Controls Inside Dynamically Created Docks]({%slug dock/application-scenarios/adding-controls-inside-dynamically-created-docks%})
