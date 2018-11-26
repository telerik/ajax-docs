---
title: Working with Resources
page_title: Working with Resources | RadScheduler for ASP.NET AJAX Documentation
description: Working with Resources
slug: scheduler/server-side-programming/working-with-resources
tags: working,with,resources
published: True
position: 1
---

# Working with Resources



**RadScheduler** has two properties for maintaining information about custom resources:

* **ResourceTypes** is a collection of **ResourceType** objects. Each **ResourceType** object holds the information needed to define a resource type, including the **Name** of the resource type, the **DataSource** or **DataSourceID**, **KeyField**, and **TextField** values needed to fetch a list of possible values for the resource type, and the **ForeignKeyField** needed to store resource values with an appointment. **ResourceType** also includes an **AllowMultipleValues** property, which a provider uses to indicate that multiple values of that resource type can be assigned to a single appointment.

* **Resources** is a collection of **Resource** objects. **Resources** has a method, **GetResourcesByType**, that you can use to filter the collection to list only those resources of a specific resource type. Each **Resource** object represents a possible value of a resource type. The Resource objects have a **Key** property, which is stored with the appointment, a **Text** property, which is the text representation of the resource value, and a **Type** property, which is the name of the resource type for which it is a value. **Resource** objects also have an **Available** property, which determines whether the edit form includes the resource value in the list of possible values that it displays to the user.

Each **Appointment** object also has a **Resources** property, which is a collection of **Resource** objects that is assigned to the appointment. When working with the **Resources** property of an appointment, use the **GetResourceByType** method to obtain a reference to the single value of that resource type that is assigned to the appointment. If the resource supports multiple values for a single resource type, you can use the **GetResourcesByType** method instead.

>tip The resources are rendered as ComboBox controls when the Scheduler's RenderMode is set to Classic and as DropDownList controls when the RenderMode is set to Lightweight.
>

>tip Avoid setting the name of the Resources to an already existing name or field. For example, setting "Reminder" as a name for the resource leads to non-working resources.
>

## Example

This example shows how to use the **Available** property to control the availability of a resource. This property is cleared on each data binding, so the list of available resources must be maintained separately from the scheduler.





````C#
	
// store the unavailable resources in the Session state
private const string UsedResourcesSessionKey = "Telerik.Web.Examples.Scheduler.ResourceAvailability.DefaultCS";
private List<Resource> UsedResources
{
	get
	{
		List<Resource> resources = Session[UsedResourcesSessionKey] as List<Resource>;
		if (resources == null)
		{
			resources = new List<Resource>();
			Session[UsedResourcesSessionKey] = resources;
		}
		return resources;
	}
}
private void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		UsedResources.Clear();
	}
}
// ReserveResources ensures that every resource in the resources argument is unavailable
private void ReserveResources(ResourceCollection resources)
{
	foreach (Resource res in resources)
	{
		if (!UsedResources.Contains(res))
		{
			UsedResources.Add(res);
		}
	}
}
// FreeResources ensures that every resource in the resources argument is available
private void FreeResources(ResourceCollection resources)
{
	foreach (Resource res in resources)
	{
		if (UsedResources.Contains(res))
		{
			UsedResources.Remove(res);
		}
	}
}
// The DataBound event of the scheduler sets the Available property
// after the resources are loaded from the database. Note that this
// occurs after all data binding, so that the AppointmentDataBound
// event has already added resources belonging to appointments as in use.
protected void RadScheduler1_DataBound(object sender, EventArgs e)
{
	foreach (Resource res in RadScheduler1.Resources)
	{
		res.Available = !UsedResources.Contains(res);
	}
}
// The AppointmentDataBound event of the scheduler marks the resources
// that are used by appointments as unavailable.
protected void RadScheduler1_AppointmentDataBound(object sender, SchedulerEventArgs e)
{
	ReserveResources(e.Appointment.Resources);
}
// The AppointmentInsert event handler updates the list of unavailable
// resources when the user assigns resources to a new appointment
protected void RadScheduler1_AppointmentInsert(object sender, SchedulerCancelEventArgs e)
{
	ReserveResources(e.Appointment.Resources);
}
// The AppointmentUpdate event handler updates the list of unavailable
// resources based on the changes made when editing an appointment.
protected void RadScheduler1_AppointmentUpdate(object sender, AppointmentUpdateEventArgs e)
{
	FreeResources(e.Appointment.Resources);
	ReserveResources(e.ModifiedAppointment.Resources);
}
// The AppointmentDelete event handler updates the list of unavailable
// resources to free up any resources that were used by an appointment
// that is now deleted.
protected void RadScheduler1_AppointmentDelete(object sender, SchedulerCancelEventArgs e)
{
	FreeResources(e.Appointment.Resources);
} 
	
````
````VB.NET
	
' store the unavailable resources in the Session state
Private Const UsedResourcesSessionKey As String = _
   "Telerik.Web.Examples.Scheduler.ResourceAvailability.DefaultCS"
Private ReadOnly Property UsedResources() As List(Of Resource)
	Get
		Dim resources As List(Of Resource) = TryCast(Session(UsedResourcesSessionKey), List(Of Resource))
		If resources = Nothing Then
			resources = New List(Of Resource)()
			Session(UsedResourcesSessionKey) = resources
		End If
		Return resources
	End Get
End Property
Private Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyPage.Load
	If Not IsPostBack Then
		UsedResources.Clear()
	End If
End Sub
' ReserveResources ensures that every resource in the resources argument is unavailable
Private Sub ReserveResources(ByVal resources As ResourceCollection)
	For Each res As Resource In resources
		If Not UsedResources.Contains(res) Then
			UsedResources.Add(res)
		End If
	Next
End Sub
' FreeResources ensures that every resource in the resources argument is available
Private Sub FreeResources(ByVal resources As ResourceCollection)
	For Each res As Resource In resources
		If UsedResources.Contains(res) Then
			UsedResources.Remove(res)
		End If
	Next
End Sub
' The DataBound event of the scheduler sets the Available property
' after the resources are loaded from the database. Note that this
' occurs after all data binding, so that the AppointmentDataBound
' event has already added resources belonging to appointments as in use.
Protected Sub RadScheduler1_DataBound(ByVal sender As Object, ByVal e As EventArgs) Handles RadScheduler1.DataBound
	For Each res As Resource In RadScheduler1.Resources
		res.Available = Not UsedResources.Contains(res)
	Next
End Sub
' The AppointmentDataBound event of the scheduler marks the resources
' that are used by appointments as unavailable.
Protected Sub RadScheduler1_AppointmentDataBound(ByVal sender As Object, ByVal e As SchedulerEventArgs) Handles RadScheduler1.AppointmentDataBound
	ReserveResources(e.Appointment.Resources)
End Sub
' The AppointmentInsert event handler updates the list of unavailable
' resources when the user assigns resources to a new appointment
Protected Sub RadScheduler1_AppointmentInsert(ByVal sender As Object, ByVal e As SchedulerCancelEventArgs) Handles RadScheduler1.AppointmentInsert
	ReserveResources(e.Appointment.Resources)
End Sub
' The AppointmentUpdate event handler updates the list of unavailable
' resources based on the changes made when editing an appointment.
Protected Sub RadScheduler1_AppointmentUpdate(ByVal sender As Object, ByVal e As AppointmentUpdateEventArgs) Handles RadScheduler1.AppointmentUpdate
	FreeResources(e.Appointment.Resources)
	ReserveResources(e.ModifiedAppointment.Resources)
End Sub
' The AppointmentDelete event handler updates the list of unavailable
' resources to free up any resources that were used by an appointment
' that is now deleted.
Protected Sub RadScheduler1_AppointmentDelete(ByVal sender As Object, ByVal e As SchedulerCancelEventArgs) Handles RadScheduler1.AppointmentDelete
	FreeResources(e.Appointment.Resources)
End Sub
				
````


# See Also

 * [AppointmentDataBound]({%slug scheduler/server-side-programming/server-events/appointmentdatabound%})

 * [AppointmentInsert]({%slug scheduler/server-side-programming/server-events/appointmentinsert%})

 * [AppointmentUpdate]({%slug scheduler/server-side-programming/server-events/appointmentupdate%})

 * [AppointmentDelete]({%slug scheduler/server-side-programming/server-events/appointmentdelete%})
 
 * [Custom Advanced Form with required Resources Code Library project](http://www.telerik.com/support/code-library/custom-advanced-form-with-required-resources)
 
 
