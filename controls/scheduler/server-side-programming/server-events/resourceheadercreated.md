---
title: ResourceHeaderCreated
page_title: ResourceHeaderCreated | UI for ASP.NET AJAX Documentation
description: ResourceHeaderCreated
slug: scheduler/server-side-programming/server-events/resourceheadercreated
tags: resourceheadercreated
published: True
position: 15
---

# ResourceHeaderCreated



__ResourceHeaderCreated__ complements the Resource Header templates.

__ResourceHeaderCreated__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __ResourceHeaderCreatedEventArgs__.It has one property:

* __Container__is the control (a table cell) which will render for the resource header.You can use this property along with the __FindControl__ method to access controls in yourResourceHeaderTemplate.



## Example

````ASPNET
	
	    <telerik:RadScheduler ID="RadScheduler1" runat="server"
	       GroupBy="Room"        
	       onresourceheadercreated="RadScheduler1_ResourceHeaderCreated">
	       <ResourceHeaderTemplate>
	         <div style="background:green">
	           <asp:Label ID="ResourceLabel" runat="server" Text="Label"></asp:Label>
	         </div>
	       </ResourceHeaderTemplate>
	    </telerik:RadScheduler> 
	
	
````







````C#
	
	    protected void RadScheduler1_ResourceHeaderCreated(object sender, Telerik.Web.UI.ResourceHeaderCreatedEventArgs e)
	    {
	        ((Label)e.Container.FindControl("ResourceLabel")).Text = e.Container.Resource.Text;
	    }
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_ResourceHeaderCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.ResourceHeaderCreatedEventArgs)
	    (DirectCast(e.Container.FindControl("ResourceLabel"), Label)).Text = e.Container.Resource.Text
	    End Sub
	
````

