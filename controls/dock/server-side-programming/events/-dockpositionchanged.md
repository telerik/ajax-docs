---
title:  DockPositionChanged
page_title:  DockPositionChanged | UI for ASP.NET AJAX Documentation
description:  DockPositionChanged
slug: dock/server-side-programming/events/-dockpositionchanged
tags: dockpositionchanged
published: True
position: 1
---

#  DockPositionChanged



## 

The __DockPositionChanged__ event occurs when postbacks are enabled and the user changes the position of a __RadDock__ control. This change can be

* A move from one __RadDockZone__ control to another.

* A move from a __RadDockZone__ control to a floating position.

* A move from a floating position to a __RadDockZone__ control.

* A change of index within a __RadDockZone__ control.

>note The __DockPositionChanged__ event does *not* occur when the __RadDock__ control is moved from one floating position to another, or when the __RadDock__ control is moved programmatically.
>


The __DockPositionChanged__event handler receives two arguments:

1. The __RadDock__ control whose position has changed.

1. A __DockPositionChangedEventArgs__ object. This object has two properties describe the new position of the __RadDock__ object:

* __DockZoneID__ is the __ID__ of the new __RadDockZone__ to which the control is moved. If the __RadDock__ control is moved to a floating position, __DockZoneID__ is null.

* __Index__ is the new index of the __RadDock__ control in the __RadDockZone__ identified by __DockZoneID__. If the __RadDock__ control is moved to a floating position, __Index__ is -1.

* __IsDragged__ determines whether the position of the __RadDock__ control is changed as a result of dragging. If the position of the dock control is changed because another one is closed or moved out of the __RadDockZone__, __IsDragged__ will be set to __false__.

In the __DockPositionChanged__ event handler, the __DockZoneID__ and __Index__ properties of the __RadDock__ control reflect the old position from which the __RadDock__ control is being moved. This is true even if the event handler is called after a delay because the value of the __AutoPostBack__ property is __False__.

Use a __DockPositionChanged__ event handler to respond when the user moves the __RadDock__ control:

>tabbedCode

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


>end

# See Also

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

 * [OnClientDockPositionChanging]({%slug dock/client-side-programming/events/onclientdockpositionchanging%})

 * [OnClientDockPositionChanged]({%slug dock/client-side-programming/events/onclientdockpositionchanged%})
