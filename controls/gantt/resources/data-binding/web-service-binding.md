---
title: Web Service Binding
page_title: Web Service Binding | UI for ASP.NET AJAX Documentation
description: Web Service Binding
slug: gantt/resources/data-binding/web-service-binding
tags: web,service,binding
published: True
position: 3
---

# Web Service Binding

The following article demonstrates how to bind the __RadGantt__ to __WebService__ with __Resources__.

## 

You can easily implement the __WebService__ binding of the __RadGantt__ with enabled __Resources__,by extending the typical __WebService__ binding scenario with the additional methods, needed for the __Resources__ and __Assignments__ operations. For more information on the standard __WebService__ binding of the __RadGantt__ with __GanttProvider__ could be found in the [WebService documentation article]({%slug gantt/data-binding/client-side-binding/web-service-binding%}).

The following example demonstrates how to extend the __WebService__, in order to implement the __Resources__.

__Example 1__

````C#	
[WebMethod(EnableSession = true)]
public IEnumerable<Telerik.Web.UI.Gantt.ResourceData> GetResources()
{
    return Controller.GetResources();
}

[WebMethod(EnableSession = true)]
public IEnumerable<AssignmentData> GetAssignments()
{
    return Controller.GetAssignments();
}

[WebMethod(EnableSession = true)]
public IEnumerable<AssignmentData> InsertAssignments(IEnumerable<AssignmentData> models)
{
    return Controller.InsertAssignments(models);
}

[WebMethod(EnableSession = true)]
public IEnumerable<AssignmentData> DeleteAssignments(IEnumerable<AssignmentData> models)
{
    return Controller.DeleteAssignments(models);
}
````
````VB
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


