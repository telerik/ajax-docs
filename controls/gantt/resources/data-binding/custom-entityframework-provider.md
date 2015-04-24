---
title: Custom EntityFramework Provider
page_title: Custom EntityFramework Provider | RadGantt for ASP.NET AJAX Documentation
description: Custom EntityFramework Provider
slug: gantt/resources/data-binding/custom-entityframework-provider
tags: custom,entityframework,provider
published: True
position: 4
---

# Custom EntityFramework Provider

This help article extends the [Custom Entity Provider]({%slug gantt/data-binding/providers/custom-entityframework-provider%}) guidance. It shows how to add support for the **Resources** in the **Gantt** using Custom Provider.

## Implementing Resources using Custom Entity Provider.

To enable this functionality:

* a few additional methods of the custom provider needs to be overridden - *GetResources(), GetAssignments(), UpdateAssignment(), InsertAssignment() and DeleteAssignment()*.

* set the **EnableResources** property of the Gantt to **true**.

````C#
public override List<ITask> GetTasks()
{
  ...
}

public override ITask UpdateTask(ITask task)
{
  ...
}

public override ITask DeleteTask(ITask task)
{
   ...
}

public override ITask InsertTask(ITask task)
{
    ...
}

public override List<IDependency> GetDependencies()
{
    ...
}

public override IDependency DeleteDependency(IDependency dependency)
{
    ...
}

public override IDependency InsertDependency(IDependency dependency)
{
   ...
}

public override List<IResource> GetResources()
{ 
   ...
}

public override List<IAssignment> GetAssignments()
{
   ...
}

public override IAssignment UpdateAssignment(IAssignment assignment)
{
   ...
}

public override IAssignment InsertAssignment(IAssignment assignment)
{
   ...
}
public override IAssignment DeleteAssignment(IAssignment assignment)
{
   ...
}
````
````VB
Public Overrides Function GetTasks() As List(Of ITask)
    ...
End Function

Public Overrides Function UpdateTask(task As ITask) As ITask
    ....
End Function

Public Overrides Function InsertTask(task As ITask) As ITask
    ...
End Function

Public Overrides Function InsertTask(task As ITask) As ITask
    ...
End Function

Public Overrides Function GetDependencies() As List(Of IDependency)
    ...
End Function

Public Overrides Function DeleteDependency(dependency As IDependency) As IDependency
    ...
End Function

Public Overrides Function InsertDependency(dependency As IDependency) As IDependency
    ...
End Function

Public Overrides Function GetResources() As List(Of IResource)
    ...
End Function

Public Overrides Function GetAssignments() As List(Of IAssignment)
    ...
End Function

Public Overrides Function UpdateAssignment(assignment As IAssignment) As IAssignment
    ...
End Function

Public Overrides Function InsertAssignment(assignment As IAssignment) As IAssignment
    ...
End Function

Public Overrides Function DeleteAssignment(assignment As IAssignment) As IAssignment
    ...
End Function
````

[Here](http://www.telerik.com/support/code-library/implementing-gantt-resources-with-custom-entity-provider) you can find a code library with a runnable sample project, based the above instructions.

# See Also

 * [Resources]({%slug gantt/resoruces/overview%})

 * [Custom Entity Provider]({%slug gantt/data-binding/providers/custom-entityframework-provider%})
