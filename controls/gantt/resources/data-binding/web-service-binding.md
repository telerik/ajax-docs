---
title: Web Service Binding
page_title: Web Service Binding | RadGantt for ASP.NET AJAX Documentation
description: Web Service Binding
slug: gantt/resources/data-binding/web-service-binding
tags: web,service,binding
published: True
position: 3
---

# Web Service Binding

The following article demonstrates how to bind the **RadGantt** to **WebService** with **Resources**.

## 

You can easily implement the **WebService** binding of the **RadGantt** with enabled **Resources**,by extending the typical **WebService** binding scenario with the additional methods, needed for the **Resources** and **Assignments** operations. For more information on the standard **WebService** binding of the **RadGantt** with **GanttProvider** could be found in the [WebService documentation article]({%slug gantt/data-binding/client-side-binding/web-service-binding%}).

The following example demonstrates how to extend the **WebService**, in order to implement the **Resources**.

**Example 1**

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


