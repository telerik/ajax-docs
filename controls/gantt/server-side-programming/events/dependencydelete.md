---
title: DependencyDelete
page_title: DependencyDelete | UI for ASP.NET AJAX Documentation
description: DependencyDelete
slug: gantt/server-side-programming/events/dependencydelete
tags: dependencydelete
published: True
position: 7
---

# DependencyDelete



The __RadGantt DependencyDelete__ is fired when a [dependency]({%slug gantt/structure/layout%})s collection is about to be deleted from the database through the provider.

__DependencyDelete__ event handler receives two parameters:

* __sender__ is the __RadGantt__ control instance.

* __e__ is an object of type __DependencyEventArgs__. It gives you access to the deleted __Dependencies__ collection.

## Example

````ASPNET
	    <telerik:RadGantt ID="RadGantt1" runat="server" OnDependencyDelete="RadGantt1_DependencyDelete"></telerik:RadGantt>
````



>tabbedCode

````C#
	    protected void RadGantt1_DependencyDelete(object sender, Telerik.Web.UI.Gantt.DependencyEventArgs e)
	    {
	        foreach (var dependency in e.Dependencies)
	        {
	            if (dependency.Type == Telerik.Web.UI.Gantt.DependencyType.FinishFinish)
	            {
	                e.Cancel = true;
	            }
	        }
	    }
````



````VB.NET
	    Protected Sub RadGantt1_DependencyDelete(sender As Object, e As Telerik.Web.UI.Gantt.DependencyEventArgs)
	        For Each dependency As var In e.Dependencies
	            If dependency.Type = Telerik.Web.UI.Gantt.DependencyType.FinishFinish Then
	                e.Cancel = True
	            End If
	        Next
	    End Sub
````


>end

# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
