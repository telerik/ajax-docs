---
title: SaveDockLayout
page_title: SaveDockLayout | UI for ASP.NET AJAX Documentation
description: SaveDockLayout
slug: dock/server-side-programming/events/savedocklayout
tags: savedocklayout
published: True
position: 3
---

# SaveDockLayout



## 

The __SaveDockLayout__ event occurs when it is appropriate for the application to save the state of all its __RadDock__ controls to a storage medium such as the Session, a cookie, or a database. This event should be used to store the state of __RadDock__ controls in any of the following situations:

* The __StoreLayoutInViewState__ property of the __RadDockLayout__ control is __False__.

* You want to save the state of __RadDock__ controls when the user leaves the Web page and restore it when the user returns to the Web page.

* The application dynamically creates __RadDock__ controls at runtime.

The __SaveDockLayout__ event handler receives two arguments:

1. The __RadDockLayout__ control that is responsible for managing the layout of __RadDockZone__ and __RadDock__ controls. This argument is of type object, but can be cast to the __RadDockLayout__ type.

1. A __DockLayoutEventArgs__ object. This object provides access to layout information in two properties:

* __Indices__ is a __Dictionary__ that stores the __Index__ property of all __RadDock__ controls, accessed through the __UniqueName__ property of the __RadDock__ control.

* __Positions__ is a __Dictionary__ that stores the __DockZoneID__ property of all __RadDock__ controls, accessed through the __UniqueName__ property of the __RadDock__ control.

>note If the application has not explicitly set the __UniqueName__ property of the __RadDock__ controls, the __Indices__ and __Positions__ properties of the __DockLayoutEventArgs__ object are indexed by the server-side __ID__ of the __RadDock__ controls.
>


Typically, a __SaveDockLayout__ event handler uses the __RadDockLayout__ control's __GetRegisteredDocksState__ method, which returns a list of __DockState__ objects that represent the state and position of the each __RadDock__ control managed by the __RadDockLayout__:

>tabbedCode

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
	        If dockState = Nothing Then
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


>end

>caution The __RadDockLayout__ control only manages the layout of __RadDock__ and __RadDockZone__ controls that are contained in its __Controls__ collections.
>


# See Also

 * [LoadDockLayout]({%slug dock/server-side-programming/events/loaddocklayout%})

 * [Creating RadDock Dynamically]({%slug dock/application-scenarios/creating-raddock-dynamically%})

 * [Adding Controls Inside Dynamically Created Docks]({%slug dock/application-scenarios/adding-controls-inside-dynamically-created-docks%})
