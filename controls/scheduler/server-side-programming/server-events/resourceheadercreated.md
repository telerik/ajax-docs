---
title: ResourceHeaderCreated
page_title: ResourceHeaderCreated | RadScheduler for ASP.NET AJAX Documentation
description: ResourceHeaderCreated
slug: scheduler/server-side-programming/server-events/resourceheadercreated
tags: resourceheadercreated
published: True
position: 15
---

# ResourceHeaderCreated



**ResourceHeaderCreated** complements the Resource Header templates.

**ResourceHeaderCreated** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **ResourceHeaderCreatedEventArgs**. It has one property:

* **Container** is the control (a table cell) which will render for the resource header.You can use this property along with the **FindControl** method to access controls in yourResourceHeaderTemplate.



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

