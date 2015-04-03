---
title: Web Service Binding
page_title: Web Service Binding | UI for ASP.NET AJAX Documentation
description: Web Service Binding
slug: gantt/data-binding/client-side-binding/web-service-binding
tags: web,service,binding
published: True
position: 0
---

# Web Service Binding



This help article demonstrates how easy is to create a Web Service and bind __RadGantt__ to it using the __WebServiceController__ and one of the __RadGantt's__ providers

## 

The following example demonstrates the signature of the web service and how the __WebServiceController__ is used for handling all __WebMethods__. In this particular example, an __XmlGanttProvider__ is used for providing the data from an XML file:

````C#
	
	/// <summary>
	/// Summary description for GanttService
	/// </summary>
	[WebService(Namespace = "http://tempuri.org/")]
	[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
	[System.Web.Script.Services.ScriptService]
	public class GanttService : System.Web.Services.WebService
	{
	
		private WebServiceController _controller;
	
		public WebServiceController Controller
		{
			get
			{
				if (_controller == null)
				{
					_controller = new WebServiceController(new XmlGanttProvider(Server.MapPath("~/App_Data/Tasks.xml"), true));
				}
	
				return _controller;
			}
		}
	
		[WebMethod]
		public IEnumerable<TaskData> GetTasks()
		{
			return Controller.GetTasks();
		}
	
		[WebMethod]
		public IEnumerable<TaskData> InsertTasks(IEnumerable<TaskData> models)
		{
			return Controller.InsertTasks(models);
		}
	
		[WebMethod]
		public IEnumerable<TaskData> UpdateTasks(IEnumerable<TaskData> models)
		{
			return Controller.UpdateTasks(models);
		}
	
		[WebMethod]
		public IEnumerable<TaskData> DeleteTasks(IEnumerable<TaskData> models)
		{
			return Controller.DeleteTasks(models);
		}
	
		[WebMethod]
		public IEnumerable<DependencyData> GetDependencies()
		{
			return Controller.GetDependencies();
		}
	
		[WebMethod]
		public IEnumerable<DependencyData> InsertDependencies(IEnumerable<DependencyData> models)
		{
			return Controller.InsertDependencies(models);
		}
	
		[WebMethod]
		public IEnumerable<DependencyData> DeleteDependencies(IEnumerable<DependencyData> models)
		{
			return Controller.DeleteDependencies(models);
		}
	}
	
````



````C#
	    <WebMethod(EnableSession:=True)> _
	    Public Function GetResources() As IEnumerable(Of Telerik.Web.UI.Gantt.ResourceData)
	        Return Controller.GetResources()
	    End Function
	
	    <WebMethod(EnableSession:=True)> _
	    Public Function GetAssignments() As IEnumerable(Of AssignmentData)
	        Return Controller.GetAssignments()
	    End Function
	
	    <WebMethod(EnableSession:=True)> _
	    Public Function InsertAssignments(models As IEnumerable(Of AssignmentData)) As IEnumerable(Of AssignmentData)
	        Return Controller.InsertAssignments(models)
	    End Function
	
	    <WebMethod(EnableSession:=True)> _
	    Public Function DeleteAssignments(models As IEnumerable(Of AssignmentData)) As IEnumerable(Of AssignmentData)
	        Return Controller.DeleteAssignments(models)
	    End Function
	
````



And bellow are the settings needed for binding __RadGantt__ to the above web service:

````ASPNET
	<telerik:RadGantt runat="server" ID="RadGantt1">
		<WebServiceSettings Path="GanttService.asmx" />
	</telerik:RadGantt>
````



# See Also

 * [Overview]({%slug gantt/overview%})

 * [Getting Started]({%slug gantt/getting-started-/getting-started%})
