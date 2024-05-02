---
title: Custom columns
description: Add custom columns in RadGantt.
type: how-to
page_title: Custom columns. | RadGantt
slug: gantt-custom-columns
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Gantt for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This code sample demonstrates how to add Custom Task Column using a Custom EntityFramework Provider for the Gantt.

## Solution

Markup: 

````ASP.NET
<telerik:RadGantt runat="server" ID="RadGantt1" SelectedView="WeekView" AutoGenerateColumns="false">
    <Columns>
        <telerik:GanttBoundColumn DataField="ID" Width="90px"></telerik:GanttBoundColumn>
        <telerik:GanttBoundColumn DataField="Title"></telerik:GanttBoundColumn>
        <telerik:GanttBoundColumn DataField="Description" HeaderText="Description" DataType="String" UniqueName="Description">
        </telerik:GanttBoundColumn>
    </Columns>
    <CustomTaskFields>
        <telerik:GanttCustomField PropertyName="Description" ClientPropertyName="description" />
    </CustomTaskFields>
    <WebServiceSettings Path="GanttCustomService.asmx" />
</telerik:RadGantt>
````

**GanttCustomService.asmx**:

*   This web service provides methods for retrieving, inserting, updating, and deleting tasks and dependencies.
*   It utilizes a custom EntityFramework provider (`GanttCustomProvider`) to interact with the database.

````C#
<%@ WebService Language="C#" Class="GanttService" %>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.SessionState;
using Telerik.Web.UI;
using Telerik.Web.UI.Gantt;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class GanttService : System.Web.Services.WebService, IRequiresSessionState
{
    private WebServiceController _controller;

    public WebServiceController Controller
    {
        get
        {
            if (_controller == null)
            {
                _controller = new WebServiceController(new GanttCustomProvider());
            }

            return _controller;
        }
    }
    [WebMethod(EnableSession = true)]
    public IEnumerable<CustomTaskData> GetTasks()
    {
        return Controller.GetTasks<CustomTaskData>();
    }
    [WebMethod(EnableSession = true)]
    public IEnumerable<CustomTaskData> InsertTasks(IEnumerable<CustomTaskData> models)
    {
        return Controller.InsertTasks<CustomTaskData>(models);
    }
    [WebMethod(EnableSession = true)]
    public IEnumerable<CustomTaskData> UpdateTasks(IEnumerable<CustomTaskData> models)
    {
        return Controller.UpdateTasks<CustomTaskData>(models);
    }
    [WebMethod(EnableSession = true)]
    public IEnumerable<CustomTaskData> DeleteTasks(IEnumerable<CustomTaskData> models)
    {
        return Controller.DeleteTasks<CustomTaskData>(models);
    }
    [WebMethod(EnableSession = true)]
    public IEnumerable<DependencyData> GetDependencies()
    {
        return Controller.GetDependencies();
    }
    [WebMethod(EnableSession = true)]
    public IEnumerable<DependencyData> InsertDependencies(IEnumerable<DependencyData> models)
    {
        return Controller.InsertDependencies(models);
    }
    [WebMethod(EnableSession = true)]
    public IEnumerable<DependencyData> DeleteDependencies(IEnumerable<DependencyData> models)
    {
        return Controller.DeleteDependencies(models);
    }
}

[System.Runtime.Serialization.DataContract]
public class CustomTaskData : TaskData
{
    [System.Runtime.Serialization.DataMember]
    public string Description
    {
        get;
        set;
    }

    public override void CopyFrom(ITask srcTask)
    {
        base.CopyFrom(srcTask);

        Description = ((CustomTask)srcTask).Description;
    }

    public override void CopyTo(ITask destTask)
    {
        base.CopyTo(destTask);

        ((CustomTask)destTask).Description = Description;
    }
}
````

**GanttCustomProvider.cs**:

*   This class implements the `GanttProviderBase` abstract class, providing implementations for task and dependency management methods.
*   It overrides methods for retrieving, inserting, updating, and deleting tasks and dependencies.
*   It includes helper methods for mapping between entity objects and task/dependency objects.
*   Additionally, it defines a custom task factory (`CustomGanttTaskFactory`) and a custom task class (`CustomTask`) that extends the base `Task` class.

````C#
using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Telerik.Web.UI;
using Telerik.Web.UI.Gantt;

public class GanttCustomProvider : GanttProviderBase
{
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
        var tasks = new List<ITask>();
		using (var db = new GanttDbEntities())
        {
            tasks.AddRange(db.GanttTasks.ToList().Select(task => new CustomTask
            {
                ID = task.ID,
                ParentID = task.ParentID,
                OrderID = task.OrderID,
                Start = task.Start,
                End = task.End,
                PercentComplete = task.PercentComplete,
                Summary = task.Summary,
                Title = task.Title,
                Expanded = task.Expanded.HasValue && task.Expanded.Value,
                Description = task.Description
                
            }));
        }
        return tasks;
    }

    public override ITask UpdateTask(ITask task)
    {
		using (var db = new GanttDbEntities())
        {
            GanttTask entityTask = ToEntityTask(task);
            db.GanttTasks.Attach(entityTask);
            db.Entry(entityTask).State = EntityState.Modified;
            db.SaveChanges();
        }

        return task;
    }

    public override ITask DeleteTask(ITask task)
    {
		using (var db = new GanttDbEntities())
        {
            GanttTask entityTask = ToEntityTask(task);
            db.GanttTasks.Attach(entityTask);
            db.GanttTasks.Remove(entityTask);
            db.SaveChanges();
        }
            
        return task;
    }

    public override ITask InsertTask(ITask task)
    {
		using (var db = new GanttDbEntities())
        {
            task.ID = 0; // Value will be updated from DB
            GanttTask entityTask = ToEntityTask(task);
            db.GanttTasks.Add(entityTask);
            db.SaveChanges();

            task.ID = entityTask.ID;
        }

        return task;
    }

    #endregion

    #region Dependencies

    public override List<IDependency> GetDependencies()
    {
        var dependencies = new List<IDependency>();
		using (var db = new GanttDbEntities())
        {
            dependencies.AddRange(db.GanttDependencies.ToList().Select(dependency => new Dependency()
            {
                ID = dependency.ID,
                PredecessorID = dependency.PredecessorID,
                SuccessorID = dependency.SuccessorID,
                Type = (DependencyType)dependency.Type
            }));
        }
        return dependencies;
    }

    public override IDependency DeleteDependency(IDependency dependency)
    {
		using (var db = new GanttDbEntities())
        {
            GanttDependency entityDependency = ToEntityDependency(dependency);
            db.GanttDependencies.Attach(entityDependency);
            db.GanttDependencies.Remove(entityDependency);
            db.SaveChanges();
        }
            
        return dependency;
    }

    public override IDependency InsertDependency(IDependency dependency)
    {
		using (var db = new GanttDbEntities())
        {
            dependency.ID = 0; // Value will be updated from DB
            GanttDependency entityDependency = ToEntityDependency(dependency);
            db.GanttDependencies.Add(entityDependency);
            db.SaveChanges();

            dependency.ID = entityDependency.ID;
        }
            
        return dependency;
    }

    #endregion

    #region Helpers

    private GanttTask ToEntityTask(ITask srcTask)
    {
        return new GanttTask
            {
                ID = (int)srcTask.ID,
                ParentID = (int?)srcTask.ParentID,
                OrderID = (int)srcTask.OrderID,
                Start = srcTask.Start,
                End = srcTask.End,
                PercentComplete = srcTask.PercentComplete,
                Summary = srcTask.Summary,
                Title = srcTask.Title,
                Expanded = srcTask.Expanded,
                Description = ((CustomTask)srcTask).Description
            };
    }

    private GanttDependency ToEntityDependency(IDependency srcDependency)
    {
        return new GanttDependency
        {
            ID = (int)srcDependency.ID,
            PredecessorID = (int)srcDependency.PredecessorID,
            SuccessorID = (int)srcDependency.SuccessorID,
            Type = (int)srcDependency.Type
        };
    }

    #endregion
}

public class CustomGanttTaskFactory : ITaskFactory
{
    Task ITaskFactory.CreateTask()
    {
        return new CustomTask();
    }
}

public class CustomTask : Task
{
    public CustomTask()
        : base()
    {
    }

    public string Description
    {
        get { return (string)(ViewState["Description"] ?? ""); }
        set { ViewState["Description"] = value; }
    }

	protected override IDictionary<string, object> GetSerializationData()
	{
		var dict = base.GetSerializationData();
		dict["Description"] = Description;
		return dict;
	}
	
    public override void LoadFromDictionary(System.Collections.IDictionary values)
    {
        base.LoadFromDictionary(values);

        Description = (string)values["Description"];
    }
}
````
 
