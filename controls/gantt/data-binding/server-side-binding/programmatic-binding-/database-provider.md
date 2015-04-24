---
title: Database Provider
page_title: Database Provider | RadGantt for ASP.NET AJAX Documentation
description: Database Provider
slug: gantt/data-binding/server-side-binding/programmatic-binding-/database-provider
tags: database,provider
published: True
position: 1
---

# Database Provider

This help article describes how you can bind the **RadGantt** by using the built-in **DataSourceViewProvider**. If you are using a declarative **DataSource** to populate RadGantt by specifying **DataSourceID** and **DependenciesDataSourceID** properties, thencontrol will automatically create a **DataSourceView** provider and will use it to update the information.

## 

Binding the control by using the **DataSourceViewProvider** is achievable by following the below listed steps.

1. Assign the **DataSourceID** and **DependenciesDataSourceID** to the respective data source controlsthat the **RadGantt** should use to retrieve its data.

1. Set the properties avaiable under the **TaskDataBindings** and **DependenciesDataBindings** sectionsrequired to translating the database columns to the object-model of the **RadGantt** to the appropriate fields of the datasource.

The following example illustrates a possible realization of the above mentioned.

````ASPNET
<telerik:RadGantt ID="RadGantt1" runat="server" DataSourceID="SqlDataSource1" DependenciesDataSourceID="SqlDataSource2">
    <DataBindings>
        <TasksDataBindings IdField="ID" ParentIdField="ParentID" StartField="Start" EndField="End" TitleField="Title" PercentCompleteField="PercentComplete" />
        <DependenciesDataBindings TypeField="Type" IdField="ID" PredecessorIdField="PredecessorID" SuccessorIdField="SuccessorID" />
    </DataBindings>
</telerik:RadGantt>

<asp:SqlDataSource runat="server" ID="SqlDataSource1" SelectCommand="SELECT [ID],[ParentID],[Start],[End],[Title],[PercentComplete] FROM [Tasks]" 
    ConnectionString="<%$ ConnectionStrings:GanttConnectionString %>"></asp:SqlDataSource>
<asp:SqlDataSource runat="server" ID="SqlDataSource2" SelectCommand="SELECT [Type],[ID],[PredecessorID],[SuccessorID] FROM [Dependencies]" 
    ConnectionString="<%$ ConnectionStrings:GanttConnectionString %>"></asp:SqlDataSource>
````

# See Also

 * [Declarative Binding]({%slug gantt/data-binding/server-side-binding/declarative-binding%})

 * [XML Provider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%})
