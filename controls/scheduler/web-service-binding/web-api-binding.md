---
title: Web API Binding
page_title: Web API Binding - RadScheduler
description: Check our Web Forms article about Web API Binding.
slug: scheduler/web-service-binding/web-api-binding
tags: web,api,binding
published: True
position: 1
---

# Web API Binding



Since Service Pack 1 Q2 2013 **RadScheduler** can be bound to **HTTP services using ASP.NET Web API**. ASP.NET Web API is a framework that makes it easy to build HTTP services that reach a broad range of clients- both browsers and mobile devices. ASP.NET Web API is an ideal platform for building RESTful applications on the .NET Framework.

RadScheduler supports all CRUD operations "Create, Read, Update, and Delete” when it is using **Web API DataBinding**.

>caution Besides referencing theTelerik dlls files, RadScheduler Web API binding requires references to **Newtonsoft.Json.dll** , **System.Net.Http.Formatting.dll** , **System.Web.Http.dll** and **System.Web.Http.WebHost.dll** .
>


## Configuration

**RadScheduler Web API binding** is quite similar to the usual [Web Service binding]({%slug scheduler/web-service-binding/overview%}) with several specific differences. In the mark up of the control we should set the correct path. If RadScheduler is loading resources make sure that **UseHttpGet** property is set to **true** as for example in the code below:

````ASPNET
	
<WebServiceSettings Path="api/scheduler" ResourcePopulationMode="ServerSide" UseHttpGet="true" />    
	
````



The **Routing information** should be defined in the **Global.asax** file. Here the jsonFormatter should be of type **new System.Net.Http.Formatting.JsonMediaTypeFormatter()** in order to have a properly working binding of RadScheduler:

````ASPNET
	     
<%@ Application Language="C#" %>
<%@ Import Namespace="System.Web.Routing" %>
<%@ Import Namespace="System.Web.Http" %>

<script RunAt="server">
	void Application_Start(object sender, EventArgs e)
	{
		System.Web.Routing.RouteTable.Routes.MapHttpRoute(
			 name: "ActionApi",
			 routeTemplate: "api/{controller}/{action}/"
		 );

		var jsonFormater = new System.Net.Http.Formatting.JsonMediaTypeFormatter();
		
		GlobalConfiguration.Configuration.Formatters.Clear();
		GlobalConfiguration.Configuration.Formatters.Add(jsonFormater);
	}
</script>
		
````



In the controller class each event is using a **WebApiData object** that contains the information needed for updating the appointments. In the **HTTP** attributes above each event is used to define an action that will be performed through the **Web API**.



````C#
	
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Telerik.Web.UI;
using System.Web.Script.Serialization;

public class SchedulerController : ApiController
{

	public SchedulerController()
		: base()
	{
	}

	private JavaScriptSerializer _serializer;
	private JavaScriptSerializer JavaScriptSerializer
	{
		get
		{
			if (_serializer == null)
			{
				_serializer = new JavaScriptSerializer();
			}

			return _serializer;
		}
	}
	private XmlSchedulerProvider _provider;
	private XmlSchedulerProvider Provider
	{
		get
		{
			if (_provider == null)
			{
				_provider = new CustomXmlSchedulerProvider(System.Web.HttpContext.Current.Server.MapPath("~/App_Data/Appointments_Outlook.xml"), true);
			}

			return _provider;
		}
	}

	private WebServiceAppointmentController _controller;
	private WebServiceAppointmentController Controller
	{
		get
		{
			if (_controller == null)
			{
				_controller = new WebServiceAppointmentController(Provider);
			}

			return _controller;
		}
	}

	[HttpGet]
	public IEnumerable<AppointmentData> GetAppointments(string schedulerInfo)
	{
		return Controller.GetAppointments(JavaScriptSerializer.Deserialize<MySchedulerInfo>(schedulerInfo));
	}

	[HttpPost]
	public IEnumerable<AppointmentData> InsertAppointment(WebApiData data)
	{
		return Controller.InsertAppointment(data.SchedulerInfo, data.AppointmentData);
	}

	[HttpPut]
	public IEnumerable<AppointmentData> UpdateAppointment(WebApiData data)
	{
	 
		return Controller.UpdateAppointment(data.SchedulerInfo, data.AppointmentData);
	}

	[HttpPost]
	public IEnumerable<AppointmentData> CreateRecurrenceException(WebApiData data)
	{
		return Controller.CreateRecurrenceException(data.SchedulerInfo, data.RecurrenceExceptionData);
	}

	[HttpDelete]
	public IEnumerable<AppointmentData> RemoveRecurrenceExceptions(WebApiData data)
	{
		return Controller.RemoveRecurrenceExceptions(data.SchedulerInfo, data.MasterAppointmentData);
	}

	[HttpDelete]
	public IEnumerable<AppointmentData> DeleteAppointment(WebApiData data)
	{
		return Controller.DeleteAppointment(data.SchedulerInfo, data.AppointmentData, data.DeleteSeries);
	}

	[HttpGet]
	public IEnumerable<ResourceData> GetResources(string schedulerInfo)
	{
		var o = new JavaScriptSerializer().Deserialize<MySchedulerInfo>(schedulerInfo);
		return Controller.GetResources(o);
	}
}
	
````
````VB.NET
		
Imports Newtonsoft.Json.Linq
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web.Http
Imports Telerik.Web.UI
Imports System.Web.Script.Serialization

Public Class ValuesController1
	Inherits ApiController

	Public Sub New()
		MyBase.New()
	End Sub

	Private _serializer As JavaScriptSerializer
	Private ReadOnly Property JavaScriptSerializer() As JavaScriptSerializer
		Get
			If _serializer Is Nothing Then
				_serializer = New JavaScriptSerializer()
			End If

			Return _serializer
		End Get
	End Property
	Private _provider As XmlSchedulerProvider
	Private ReadOnly Property Provider() As XmlSchedulerProvider
		Get
			If _provider Is Nothing Then
				_provider = New CustomXmlSchedulerProvider(System.Web.HttpContext.Current.Server.MapPath("~/App_Data/Appointments_Outlook.xml"), True)
			End If

			Return _provider
		End Get
	End Property

	Private _controller As WebServiceAppointmentController
	Private ReadOnly Property Controller() As WebServiceAppointmentController
		Get
			If _controller Is Nothing Then
				_controller = New WebServiceAppointmentController(Provider)
			End If

			Return _controller
		End Get
	End Property

	<HttpGet> _
	Public Function GetAppointments(schedulerInfo As String) As IEnumerable(Of AppointmentData)
		Return Controller.GetAppointments(JavaScriptSerializer.Deserialize(Of MySchedulerInfo)(schedulerInfo))
	End Function

	<HttpPost> _
	Public Function InsertAppointment(data As WebApiData) As IEnumerable(Of AppointmentData)
		Return Controller.InsertAppointment(data.SchedulerInfo, data.AppointmentData)
	End Function

	<HttpPut> _
	Public Function UpdateAppointment(data As WebApiData) As IEnumerable(Of AppointmentData)

		Return Controller.UpdateAppointment(data.SchedulerInfo, data.AppointmentData)
	End Function

	<HttpPost> _
	Public Function CreateRecurrenceException(data As WebApiData) As IEnumerable(Of AppointmentData)
		Return Controller.CreateRecurrenceException(data.SchedulerInfo, data.RecurrenceExceptionData)
	End Function

	<HttpDelete> _
	Public Function RemoveRecurrenceExceptions(data As WebApiData) As IEnumerable(Of AppointmentData)
		Return Controller.RemoveRecurrenceExceptions(data.SchedulerInfo, data.MasterAppointmentData)
	End Function

	<HttpDelete> _
	Public Function DeleteAppointment(data As WebApiData) As IEnumerable(Of AppointmentData)
		Return Controller.DeleteAppointment(data.SchedulerInfo, data.AppointmentData, data.DeleteSeries)
	End Function

	<HttpGet> _
	Public Function GetResources(schedulerInfo As String) As IEnumerable(Of ResourceData)
		Dim o = New JavaScriptSerializer().Deserialize(Of MySchedulerInfo)(schedulerInfo)
		Return Controller.GetResources(o)
	End Function
End Class
	
````


In order for all CRUD operations to work properly when you host the application on **IIS server** in the configuration file, you need to add the following settings in the **system.webServer** section:

````ASPNET
	
	<remove name="WebDAV" />
	<remove name="ExtensionlessUrlHandler-Integrated-4.0" />
	<add name="ExtensionlessUrlHandler-Integrated-4.0" path="*." verb="*" type="System.Web.Handlers.TransferRequestHandler" resourceType="Unspecified" requireAccess="Script" preCondition="integratedMode,runtimeVersionv4.0" />
</handlers>
<modules runAllManagedModulesForAllRequests="true">
	<add name="RadUploadModule" preCondition="integratedMode" type="Telerik.Web.UI.RadUploadHttpModule" />
	<remove name="WebDAVModule" />
</modules>
	
````


