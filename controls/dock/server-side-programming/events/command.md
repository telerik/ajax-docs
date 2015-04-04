---
title: Command
page_title: Command | UI for ASP.NET AJAX Documentation
description: Command
slug: dock/server-side-programming/events/command
tags: command
published: True
position: 0
---

# Command



## 

The __Command__ event occurs when postbacks are enabled and the user clicks on one of the command icons in the __RadDock__ title bar.

The __Command__ event handler receives two arguments:

1. The __RadDock__ control whose title bar contains the command icon that the user clicked. This argument is of type object, but can be cast to the __RadDock__ type.

1. A __DockCommandEventArgs__ object. This object has a __Command__ property, that provides access to the __DockCommand__ object for the command that was clicked:

Use a __Command__ event handler to provide a server-side implementation for custom commands or to augment the default behavior of built-in commands. For example, the following Command event handler implements a custom command that moves a docked control to the next docking position if it is not the last docked control in its parent's docking zone:

>tabbedCode

````C#
	
	    protected void RadDock1_Command(object sender, Telerik.Web.UI.DockCommandEventArgs e)
	    {
	        if (e.Command.Name == "MoveDown")
	        {
	            RadDock dock = (RadDock)sender;
	            if (dock.DockZoneID != string.Empty)
	            {
	                RadDockZone zone = (RadDockZone)dock.Parent;
	
	                int i = dock.Index;
	                if (i < zone.Docks.Count - 1)
	                {
	                    RadDock nextDock = zone.Docks[i + 1];
	                    zone.Docks[i] = nextDock;
	                    zone.Docks[i + 1] = dock;
	                }
	            }
	        }
	    } 
				
````
````VB
	
	    Protected Sub RadDock1_Command( _
	          ByVal sender As Object, _
	          ByVal e As Telerik.Web.UI.DockCommandEventArgs) _
	          Handles RadDock1.Command
	        If e.Command.Name = "MoveDown" Then
	            Dim dock As RadDock = DirectCast(sender, RadDock)
	            If dock.DockZoneID <> String.Empty Then
	                Dim zone As RadDockZone = DirectCast(dock.Parent, RadDockZone)
	                Dim i As Integer = dock.Index
	                If i < zone.Docks.Count - 1 Then
	                    Dim nextDock As RadDock = zone.Docks(i + 1)
	                    zone.Docks(i) = nextDock
	                    zone.Docks(i + 1) = dock
	                End If
	            End If
	        End If
	    End Sub
				
````
>end

# See Also

 * [Overview]({%slug dock/commands/overview%})

 * [Events Triggered on Command Execution]({%slug dock/commands/events-triggered-on-command-execution%})

 * [OnClientCommand]({%slug dock/client-side-programming/events/onclientcommand%})
