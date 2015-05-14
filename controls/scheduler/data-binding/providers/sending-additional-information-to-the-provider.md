---
title: Sending Additional Information to the Provider
page_title: Sending Additional Information to the Provider | RadScheduler for ASP.NET AJAX Documentation
description: Sending Additional Information to the Provider
slug: scheduler/data-binding/providers/sending-additional-information-to-the-provider
tags: sending,additional,information,to,the,provider
published: True
position: 4
---

# Sending Additional Information to the Provider



Starting with the Q3 2010 release RadScheduler allows additional information to be sent from the page to each provider method. This is convenient for passing any form of meta-data that is not part of the appointments themselves.

Older versions require the use of a side-channel such as the Session to transfer such meta-data.

## 

Prerquisites

1. In order to be able to receive the information in your provider you must implement the methods that take ISchedulerInfo as parameters. Please see [Provider interface changes in Q3 2010]({%slug scheduler/data-binding/providers/provider-interface-changes-in-q3-2010%})

2. Create a custom ISchedulerInfo implementation by inheriting from SchedulerInfo:



````C#
	
public class MySchedulerInfo : SchedulerInfo
{
	public string User { get; set; }
	public MySchedulerInfo(ISchedulerInfo baseInfo, string user)
	   : base(baseInfo)
	{
	   User = user;
	}
}  
				
````
````VB.NET
	     
Public Class MySchedulerInfo
 Inherits SchedulerInfo
	 Public Property User() As String
	  Get
	   Return m_User
	  End Get
	  Set
	   m_User = Value
	  End Set
	 End Property
	 Private m_User As String
	 Public Sub New(baseInfo As ISchedulerInfo, userParam As String)
	  MyBase.New(baseInfo)
	  User = userParam
	 End Sub
End Class  
				
````


## Sending additional information when using server-side data binding

1. Send the customized MySchedulerInfo to RadScheduler in one of the following events:

	* AppointmentsPopulating

	* ResourcesPopulating

	* AppointmentInsert

	* AppointmentUpdate

	* AppointmentDelete


	For example:

	**C#**
	
		protected void RadScheduler1_AppointmentsPopulating(object sender, AppointmentsPopulatingEventArgs e)
		{
			e.SchedulerInfo = new MySchedulerInfo(e.SchedulerInfo, User.Identity.Name);
		}

	**VB**
	
		Protected Sub RadScheduler1_AppointmentsPopulating(sender As Object, e As AppointmentsPopulatingEventArgs)
			e.SchedulerInfo = New MySchedulerInfo(e.SchedulerInfo, User.Identity.Name)
		End Sub  
	

2. Cast the schedulerInfo to MySchedulerInfo in the corresponding provider method

	**C#**
	
		public override IEnumerable<Appointment> GetAppointments(ISchedulerInfo schedulerInfo)
		{
			var myInfo = schedulerInfo as MySchedulerInfo;

			// Access myInfo.User
			// ...
		}     
		

	**VB**
	     
		Public Overrides Function GetAppointments(schedulerInfo As ISchedulerInfo) As IEnumerable(Of Appointment)
			Dim myInfo = TryCast(schedulerInfo, MySchedulerInfo)
			' Access myInfo.User
			' ...
		End Function  
				

## Sending additional information when using web-service data binding


1. Follow the instructions in [Sending additional information to the Web Service]({%slug scheduler/web-service-binding/sending-additional-information-to-the-web-service%})


1. Cast the schedulerInfo to MySchedulerInfo in the corresponding provider method

	**C#**
	
		public override IEnumerable<Appointment> GetAppointments(ISchedulerInfo schedulerInfo)
		{
			var myInfo = schedulerInfo as MySchedulerInfo;

			// Access myInfo.User
			// ...
		} 
	

	**VB**
	     
		Getting MySchedulerInfo from GetAppointments Copy Code 

		Public Overrides Function GetAppointments(schedulerInfo As ISchedulerInfo) As IEnumerable(Of Appointment)
		 Dim myInfo = TryCast(schedulerInfo, MySchedulerInfo)
		 ' Access myInfo.User
		 ' ...
		End Function  
						
		

# See Also

 * [Provider Interface Changes in Q3 2010]({%slug scheduler/data-binding/providers/provider-interface-changes-in-q3-2010%})

 * [Sending Additional Information to the Web Service]({%slug scheduler/web-service-binding/sending-additional-information-to-the-web-service%})
