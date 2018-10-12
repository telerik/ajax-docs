---
title: Custom EntityFramework Provider
page_title: Custom EntityFramework Provider | RadGantt for ASP.NET AJAX Documentation
description: Custom EntityFramework Provider
slug: gantt/data-binding/providers/custom-entityframework-provider
tags: custom,entityframework,provider
published: True
position: 0
---

# Custom EntityFramework Provider

The following article demonstrates how to implement a custom provider for the RadGantt, using EntityFramework.

## Implementing Custom Provider, using EntityFramework.

In order to implement a custom provider for the **RadGantt** you would need to create a class that inherits the **GanttProviderBase** class. The custom class should implement the GetTasks, UpdateTask, DeleteTask and InsertTask - regarding the **Task** object and GetDependencies, DeleteDependency and InsertDependency - regarding the **Dependencies** object. The following steps will help you to easily create and implement a custom provider for the RadGantt, using EntityFramework.

* Initially, you would need to create your EntityFramework model, which should actually translate the underlying data tables as object so that they could be easily managed in the custom provider class.


* Create a class that should inherit the **GanttProviderBase** class. 


````C#

public class GanttProvider : GanttProviderBase
{

}

````
````VB.NET

Public Class GanttProvider
    Inherits GanttProviderBase

End Class

````


* In the custom class you should implement the Get, Update, Delete and Insert methods using the EntityFramework DBContenxt for both Task and Dependencies objects. 


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

````
````VB.NET

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

````


>note  **The Dependency** object should not implement an Update method, as it does not possess such functionality. In addition, the methods should return object of type **Task** and **Dependency**.
>

* Provide the **RadGantt** control with the newly created custom provider at the Page_Load in the following manner: 


````C#

protected void Page_Load(object sender, EventArgs e)
{
    RadGantt1.Provider = new GanttProvider();
}

````
````VB.NET

Protected Sub Page_Load(sender As Object, e As EventArgs)
    RadGantt1.Provider = New GanttProvider()
End Sub

````


[Here](http://www.telerik.com/support/code-library/radganttcustomentityprovider-a3e011e74a6b) you can find a code library with a runnable sample project, created based on the above instructions.
