---
title: Sending Additional Information to the Web Service
page_title: Sending Additional Information to the Web Service - RadGantt
description: Check our Web Forms article about Sending Additional Information to the Web Service.
slug: gantt/data-binding/client-side-binding/sending-additional-information-to-the-web-service
tags: sending,additional,information,to,the,web,service
published: True
position: 1
---

# Sending Additional Information to the Web Service

## 

This article shows how you can easily send additional information from the client to the web service. You can use the **OnClientRequestStart** event to set attributes of the context object that is passed to the web service with each request. The context object is an object of type IDictionary. 


First you have to use the **OnClientRequestStart** client event to set some custom attributes on the context:

````ASPNET
<telerik:RadGantt RenderMode="Lightweight" runat="server" ID="RadGantt1"
	OnClientRequestStart="onClientRequestStart">
	<WebServiceSettings Path="GanttService.asmx" />
</telerik:RadGantt>
````

````JavaScript
function onClientRequestStart(sender, eventArgs) {
	args.get_context().ProjectName = "Products";
}
````

After that you have  to change the corresponding Web Service methods to take the context as an additional parameter:

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
                _controller = new WebServiceController(new XmlGanttProvider(Server.MapPath("Tasks.xml"), true));
            }

            return _controller;
        }
    }
    [WebMethod]
    public IEnumerable<TaskData> GetTasks(IDictionary<string, object> context)
    {
        return Controller.GetTasks().ToList();
    }
    [WebMethod]
    public IEnumerable<TaskData> InsertTasks(IEnumerable<TaskData> models, IDictionary<string, object> context)
    {
        return Controller.InsertTasks(models);
    }
    [WebMethod]
    public IEnumerable<TaskData> UpdateTasks(IEnumerable<TaskData> models, IDictionary<string, object> context)
    {
        return Controller.UpdateTasks(models);
    }
    [WebMethod]
    public IEnumerable<TaskData> DeleteTasks(IEnumerable<TaskData> models, IDictionary<string, object> context)
    {
        return Controller.DeleteTasks(models);
    }
    [WebMethod]
    public IEnumerable<DependencyData> GetDependencies(IDictionary<string, object> context)
    {
        return Controller.GetDependencies();
    }
    [WebMethod]
    public IEnumerable<DependencyData> InsertDependencies(IEnumerable<DependencyData> models, IDictionary<string, object> context)
    {
        return Controller.InsertDependencies(models);
    }
    [WebMethod]
    public IEnumerable<DependencyData> DeleteDependencies(IEnumerable<DependencyData> models, IDictionary<string, object> context)
    {
        return Controller.DeleteDependencies(models);
    }
}
````
````VB.NET
<System.Web.Script.Services.ScriptService()> _
<WebService(Namespace := "http://tempuri.org/")> _
<WebServiceBinding(ConformsTo:=WsiProfiles.BasicProfile1_1)> _  
Public Class GanttServiceVB
    Inherits System.Web.Services.WebService 
    
    Private _controller As WebServiceController

    Public ReadOnly Property Controller() As WebServiceController
        Get
            If _controller Is Nothing Then
                _controller = New WebServiceController(New XmlGanttProvider(Server.MapPath("TasksResources.xml"), True))
            End If

            Return _controller
        End Get
    End Property
    <WebMethod> _
    Public Function GetTasks(context As IDictionary(Of String, Object)) As IEnumerable(Of TaskData)
        Return Controller.GetTasks().ToList()
    End Function
    <WebMethod> _
    Public Function InsertTasks(models As IEnumerable(Of TaskData), context As IDictionary(Of String, Object)) As IEnumerable(Of TaskData)
        Return Controller.InsertTasks(models)
    End Function
    <WebMethod> _
    Public Function UpdateTasks(models As IEnumerable(Of TaskData), context As IDictionary(Of String, Object)) As IEnumerable(Of TaskData)
        Return Controller.UpdateTasks(models)
    End Function
    <WebMethod> _
    Public Function DeleteTasks(models As IEnumerable(Of TaskData), context As IDictionary(Of String, Object)) As IEnumerable(Of TaskData)
        Return Controller.DeleteTasks(models)
    End Function
    <WebMethod> _
    Public Function GetDependencies(context As IDictionary(Of String, Object)) As IEnumerable(Of DependencyData)
        Return Controller.GetDependencies()
    End Function
    <WebMethod> _
    Public Function InsertDependencies(models As IEnumerable(Of DependencyData), context As IDictionary(Of String, Object)) As IEnumerable(Of DependencyData)
        Return Controller.InsertDependencies(models)
    End Function
    <WebMethod> _
    Public Function DeleteDependencies(models As IEnumerable(Of DependencyData), context As IDictionary(Of String, Object)) As IEnumerable(Of DependencyData)
        Return Controller.DeleteDependencies(models)
    End Function
End Class
````

And finally you can extract the custom attributes from the context:

````C#
    [WebMethod]
    public IEnumerable<TaskData> GetTasks(IDictionary<string, object> context)
    {
        var projectName = context["ProjectName"].ToString();
        
        var tasks = Controller.GetTasks().ToList();
        
        // filter tasks based on project name
        
        return tasks;
    }
````
````VB.NET
    <WebMethod> _
    Public Function GetTasks(context As IDictionary(Of String, Object)) As IEnumerable(Of TaskData)
        Dim projectName = context("ProjectName").ToString()

        Dim tasks = Controller.GetTasks().ToList()
        
        ' filter tasks based on project name
        
        Return tasks
    End Function
````

# See Also

 * [OnClientRequestStart]({%slug gantt/client-side-programming/events/onclientrequeststart%})
