---
title: Provider Interface Changes in Q3 2010
page_title: Provider Interface Changes in Q3 2010 | UI for ASP.NET AJAX Documentation
description: Provider Interface Changes in Q3 2010
slug: scheduler/data-binding/providers/provider-interface-changes-in-q3-2010
tags: provider,interface,changes,in,q3,2010
published: True
position: 3
---

# Provider Interface Changes in Q3 2010



## Motivation

It is often necessary to send additional data to the underlying data provider. This can be any form of meta-data that is not part of the appointments themselves. The interface defined by the original __SchedulerProviderBase__ abstract base class did not provide any means of doing so. Side-channels, such as the Session, had to be used to transfer such meta-data.

We also chose to simplify the retrieving of resources and it now requires implementing one method instead of two.

The Q3 2010 version of RadScheduler introduces a number of important changes that aim to resolve these issues while maintaining full compatibility with existing implementations.

## Changes to the provider interface

1. The __GetAppointments__, __Insert__, __Update__ and __Delete__ methods now have overloads that take __ISchedulerInfo__ as first parameter instead of RadScheduler.

1. A new __GetResources__ method replaces __GetResourceTypes__ and __GetResourcesByType__. It also takes __ISchedulerInfo__ as first parameter.

1. The legacy methods are no longer abstract. A runtime exception will be throw if you don't implement either the new or the old version of each method.



>tabbedCode

````C#
	
	public abstract class SchedulerProviderBase : ProviderBase
	{
	   // New methods
	   public virtual IEnumerable<Appointment> GetAppointments(ISchedulerInfo schedulerInfo);
	   public virtual void Insert(ISchedulerInfo schedulerInfo, Appointment appointmentToInsert);
	   public virtual void Update(ISchedulerInfo schedulerInfo, Appointment appointmentToUpdate);
	   public virtual void Delete(ISchedulerInfo schedulerInfo, Appointment appointmentToDelete);
	   
	   // Replaces both GetResourceTypes and GetResourcesByType
	   public virtual IDictionary<ResourceType, IEnumerable<Resource>> GetResources(ISchedulerInfo schedulerInfo);
	   // No change - returns a thread-safe wrapper of this provider instance
	   public virtual SchedulerProviderBase Synchronized();
	   // Legacy methods - used to be abstract
	   public virtual IEnumerable<Appointment> GetAppointments(RadScheduler owner);
	   public virtual IEnumerable<ResourceType> GetResourceTypes(RadScheduler owner);
	   public virtual IEnumerable<Resource> GetResourcesByType(RadScheduler owner, string resourceType);
	   public virtual void Insert(RadScheduler owner, Appointment appointmentToInsert);
	   public virtual void Update(RadScheduler owner, Appointment appointmentToUpdate);
	   public virtual void Delete(RadScheduler owner, Appointment appointmentToDelete);
	} 
	
````



````VB.NET
	     
	Public MustInherit Class SchedulerProviderBase
	 Inherits ProviderBase
	 ' New methods
	 Public Overridable Function GetAppointments(schedulerInfo As ISchedulerInfo) As IEnumerable(Of Appointment)
	 End Function
	 Public Overridable Sub Insert(schedulerInfo As ISchedulerInfo, appointmentToInsert As Appointment)
	 End Sub
	 Public Overridable Sub Update(schedulerInfo As ISchedulerInfo, appointmentToUpdate As Appointment)
	 End Sub
	 Public Overridable Sub Delete(schedulerInfo As ISchedulerInfo, appointmentToDelete As Appointment)
	 End Sub
	 ' Replaces both GetResourceTypes and GetResourcesByType
	 Public Overridable Function GetResources(schedulerInfo As ISchedulerInfo) As IDictionary(Of ResourceType, IEnumerable(Of Resource))
	 End Function
	 ' No change - returns a thread-safe wrapper of this provider instance
	 Public Overridable Function Synchronized() As SchedulerProviderBase
	 End Function
	 ' Legacy methods - used to be abstract
	 Public Overridable Function GetAppointments(owner As RadScheduler) As IEnumerable(Of Appointment)
	 End Function
	 Public Overridable Function GetResourceTypes(owner As RadScheduler) As IEnumerable(Of ResourceType)
	 End Function
	 Public Overridable Function GetResourcesByType(owner As RadScheduler, resourceType As String) As IEnumerable(Of Resource)
	 End Function
	 Public Overridable Sub Insert(owner As RadScheduler, appointmentToInsert As Appointment)
	 End Sub
	 Public Overridable Sub Update(owner As RadScheduler, appointmentToUpdate As Appointment)
	 End Sub
	 Public Overridable Sub Delete(owner As RadScheduler, appointmentToDelete As Appointment)
	 End Sub
	End Class 
	
````


>end

## Upgrading existing providers

Your existing provider implementations will continue to work without change. The upgrade can be done if and when necessary.

1. Replace the "*RadScheduler owner*" parameter with "*ISchedulerInfo schedulerInfo*"

1. Merge __GetResourceTypes__ and __GetResourcesByType__ into a single method overriding __GetResources__

# See Also

 * [Sending Additional Information to the Provider]({%slug scheduler/data-binding/providers/sending-additional-information-to-the-provider%})

 * [Sending Additional Information to the Web Service]({%slug scheduler/web-service-binding/sending-additional-information-to-the-web-service%})
