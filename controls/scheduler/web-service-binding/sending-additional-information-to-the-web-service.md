---
title: Sending Additional Information to the Web Service
page_title: Sending Additional Information to the Web Service | RadScheduler for ASP.NET AJAX Documentation
description: Sending Additional Information to the Web Service
slug: scheduler/web-service-binding/sending-additional-information-to-the-web-service
tags: sending,additional,information,to,the,web,service
published: True
position: 4
---

# Sending Additional Information to the Web Service



## 

In our examples, the Web Service methods take SchedulerInfo as first parameter, but this can be replaced by any classimplementing ISchedulerInfo. This allows you to send additional information from the client to the web service.

>caution Your ISchedulerInfo implementation must be deserializable by [JavaScriptSerializer](https://msdn.microsoft.com/en-us/library/ee191864.aspx?PHPSESSID=e92f822fa484825901474a21f8abdca0)(ASP.NET AJAX Web Services) or [DataContractSerializer](https://msdn.microsoft.com/en-us/library/system.runtime.serialization.json.datacontractjsonserializer.aspx)(WCF Services).
>


1. Create a custom ISchedulerInfo implementation by inheriting from SchedulerInfo:

	**C#**
	     
		public class MySchedulerInfo : SchedulerInfo
		{
		   public string User { get; set; }
		   public MySchedulerInfo(ISchedulerInfo baseInfo, string user)
			   : base(baseInfo)
		   {
			   User = user;
		   }
			public MySchedulerInfo() {}
		}  
		
	**VB**
	
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
		 Public Sub New()
			End Sub
		End Class 
	

2. Populate the MySchedulerInfo properties in one of the following client-side events:
	* [OnClientAppointmentsPopulating]({%slug scheduler/client-side-programming/events/onclientappointmentspopulating%}) (Note: Will beraised before calling **each** web service method)
	* [OnClientResourcesPopulating]({%slug scheduler/client-side-programming/events/onclientresourcespopulating%})
	* [OnClientAppointmentWebServiceInserting]({%slug scheduler/client-side-programming/events/onclientappointmentwebserviceinserting%})
	* [OnClientAppointmentWebServiceUpdating]({%slug scheduler/client-side-programming/events/onclientappointmentwebserviceupdating%})
	* [OnClientAppointmentWebServiceDeleting]({%slug scheduler/client-side-programming/events/onclientappointmentwebservicedeleting%})
	* [OnClientRecurrenceExceptionCreating]({%slug scheduler/client-side-programming/events/onclientrecurrenceexceptioncreating%})
	* [OnClientRecurrenceExceptionsRemoving]({%slug scheduler/client-side-programming/events/onclientrecurrenceexceptionsremoving%})
	
	For example:

	**C#**
		 
		function appointmentsPopulating(sender, eventArgs)
		{
		   eventArgs.get_schedulerInfo().User = "UserA";
		} 
				

3. Change the corresponding Web Service method to take MySchedulerInfo as parameter:


	**C#**
					
		public IEnumerable<AppointmentData> GetAppointments(MySchedulerInfo schedulerInfo)
		{
			// Access schedulerInfo.User
			return Controller.GetAppointments(schedulerInfo);
		}
			

	**VB**
				
		Public Function GetAppointments(schedulerInfo As MySchedulerInfo) As IEnumerable(Of AppointmentData)
			' Access schedulerInfo.User
			Return Controller.GetAppointments(schedulerInfo)
		End Function
				

Note that the schedulerInfo will be forwarded to the underlying provider. In order to access it you mustimplement the provider methods that take ISchedulerInfo as parameter. These methods were introduced in the Q3 2010release. For more information see [Sending additionalinformation to the provider]({%slug scheduler/data-binding/providers/sending-additional-information-to-the-provider%}).

# See Also

 * [Provider Interface Changes in Q3 2010]({%slug scheduler/data-binding/providers/provider-interface-changes-in-q3-2010%})

 * [Sending Additional Information to the Provider]({%slug scheduler/data-binding/providers/sending-additional-information-to-the-provider%})
