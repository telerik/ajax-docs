---
title: RadGantt with Simple CustomProvider using collections in Session
description: RadGantt with Simple CustomProvider using collections in Session. Check it now!
type: how-to
page_title: RadGantt with Simple CustomProvider using collections in Session
slug: gantt-with-simple-customprovider-using-collections-in-session
res_type: kb
---


### HOW TO

Create a Simple Custom Provider for RadGantt that uses a list of appointments saved in the Session.

### DESCRIPTION

This article shows a simplified implementation of the [Custom Provider]({%slug gantt/data-binding/providers/custom-entityframework-provider %}) that does not use EntityFramework.

### SOLUTION

*MyCustomProvider.cs*

````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Telerik.Web.UI;
using Telerik.Web.UI.Gantt;
 
public class MyCustomProvider : GanttProviderBase
{
    private const string TasksKey = "CustomTasksCollectionKey";
    private const string DependenciesKey = "DependenciesCollectionKey";
    private static int LastTaskID = 1;
    private static int LastDependencyID = 0;
 
    public static List<IDependency> AllDependencies
    {
        get
        {
            List<IDependency> sessionDependencies =
                      HttpContext.Current.Session[DependenciesKey] as List<IDependency>;
            if (sessionDependencies == null)
            {
                sessionDependencies = new List<IDependency>();
 
                HttpContext.Current.Session[DependenciesKey] = sessionDependencies;
            }
 
            return sessionDependencies;
        }
    }
 
    public static List<ITask> AllTasks
    {
        get
        {
            List<ITask> sessionTasks =
                      HttpContext.Current.Session[TasksKey] as List<ITask>;
            if (sessionTasks == null)
            {
                sessionTasks = new List<ITask>();
                sessionTasks.Add(new Task()
                {
                    ID = 1,
                    ParentID = null,
                    OrderID = 0,
                    Start = DateTime.Now,
                    End = DateTime.Now.AddDays(2),
                    PercentComplete = 0.2M,
                    Summary = false,
                    Title = "Title 1",
                    Expanded = true
                });
                HttpContext.Current.Session[TasksKey] = sessionTasks;
            }
 
            return sessionTasks;
        }
    }
    public override ITaskFactory TaskFactory
    {
        get
        {
            return new CustomGanttTaskFactory();
        }
    }
 
    #region Tasks
 
    public override List<ITask> GetTasks()
    {
        return AllTasks;
    }
 
    public override ITask UpdateTask(ITask task)
    {
        ITask taskToUpdate = FindTaskById(task.ID);
        taskToUpdate.Title = task.Title;
        taskToUpdate.Start = task.Start;
        taskToUpdate.End = task.End;
        taskToUpdate.Summary = task.Summary;
        taskToUpdate.Expanded = task.Expanded;
        taskToUpdate.ParentID = task.ParentID;
         
        return task;
    }
 
    public override ITask DeleteTask(ITask task)
    {
        AllTasks.Remove(FindTaskById(task.ID));
        return task;
    }
 
    public override ITask InsertTask(ITask task)
    {
        task.ID = ++LastTaskID;
        AllTasks.Add(task);
 
        return task;
    }
 
    #endregion
 
    #region Dependencies
 
    public override List<IDependency> GetDependencies()
    {
        return AllDependencies;
    }
 
    public override IDependency DeleteDependency(IDependency dependency)
    {
        AllDependencies.Remove(FindDependencyById(dependency.ID));
 
        return dependency;
    }
 
    public override IDependency InsertDependency(IDependency dependency)
    {
        dependency.ID = ++LastDependencyID;
        AllDependencies.Add(dependency);
 
        return dependency;
    }
 
 
    private ITask FindTaskById(object id)
    {
        return AllTasks.FirstOrDefault(t => t.ID.Equals(id));
    }
 
    private IDependency FindDependencyById(object id)
    {
        return AllDependencies.FirstOrDefault(d => d.ID.Equals(id));
    }
    #endregion
}
````

*Default.aspx*

````ASP.NET
<telerik:RadGantt runat="server" ID="RadGantt1" SelectedView="WeekView" AutoGenerateColumns="true"></telerik:RadGantt>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadGantt1.Provider = new MyCustomProvider();
}
````

### SEE ALSO

* [Use CustomFields in Gantt with a simple CustomProvider]({%slug gantt-use-customfields-with-a-simple-customprovider %})


### DOWNLOADS

You can find atached the projects demonstrating the described approach here:

* [GanttCustomProviderSessionDummyData.zip](files/gantt-custom-provider-dummy-data.zip)

