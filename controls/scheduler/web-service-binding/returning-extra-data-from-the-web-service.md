---
title: Returning Extra Data from the Web Service
page_title: Returning Extra Data from the Web Service - RadScheduler
description: Check our Web Forms article about Returning Extra Data from the Web Service.
slug: scheduler/web-service-binding/returning-extra-data-from-the-web-service
tags: returning,extra,data,from,the,web,service
published: True
position: 5
---

# Returning Extra Data from the Web Service



## 

The Web Service methods normally return only a list with the current appointments. For example, this is the signature of the GetAppointments method:

````C#
	
public IEnumerable<AppointmentData> GetAppointments(SchedulerInfo schedulerInfo) 
			
````



You might want to extend this result with information that concerns your application, such as status codes and additional metadata. For such scenarios RadScheduler recognizes a second return type: **ISchedulerOperationResult**. This interface is defined as:

````C#
	
public interface ISchedulerOperationResult<T> where T : IAppointmentData
{
	IEnumerable<T> Appointments { get; set; }
} 
		
````



Implementers of this interface can define their own properties, as long as they are serializable.

A default implementation of this interface is included for convenience - **SchedulerOperationResult**.

**Example**

For this example we are going to return an extra Code value (int) along with the result from GetAppointments.

We start by implementing ISchedulerOperationResult:

````C#
	     
public class SchedulerResult : SchedulerOperationResult<AppointmentData>
{
	private int _code;
	public int Code
	{
	 get { return _code; }
	 set { _code = value; }
	}
}
				
````



Then we can define the GetAppointments method:

````C#
	
public SchedulerResult GetAppointments(SchedulerInfo schedulerInfo)
{
	SchedulerResult result = new SchedulerResult();
	result.Appointments = Controller.GetAppointments<AppointmentData>(schedulerInfo);
	result.Code = 1;
	return result;
}
	
````



You can then access the Code from the client-side requestSuccess event:

````ASPNET
	     
<script type="text/javascript">
	function requestSuccess(s, e)
	{
	 alert("Code: " + e.get_result().Code);
	}
</script>
<telerik:RadScheduler RenderMode="Lightweight" runat="server" ID="RadScheduler1" ...
OnClientRequestSuccess="requestSuccess">
<WebServiceSettings Path="~/SchedulerDataService.asmx" />
</telerik:RadScheduler>
				
````


