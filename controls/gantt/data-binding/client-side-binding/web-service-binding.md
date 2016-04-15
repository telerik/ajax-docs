---
title: Web Service Binding
page_title: Web Service Binding | RadGantt for ASP.NET AJAX Documentation
description: Web Service Binding
slug: gantt/data-binding/client-side-binding/web-service-binding
tags: web,service,binding
published: True
position: 0
---

# Web Service Binding

This help article demonstrates how easy is to create a Web Service and bind **RadGantt** to it using the **WebServiceController** and one of the **RadGantt's** providers

## 

The following example demonstrates the signature of the web service and how the **WebServiceController** is used for handling all **WebMethods**. In this particular example, an **XmlGanttProvider** is used for providing the data from an XML file:

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

````VB.NET
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

And bellow are the settings needed for binding **RadGantt** to the above web service:

````ASPNET
<telerik:RadGantt RenderMode="Lightweight" runat="server" ID="RadGantt1">
	<WebServiceSettings Path="GanttService.asmx" />
</telerik:RadGantt>
````



# See Also

 * [Overview]({%slug gantt/overview%})
