---
title: Declarative Binding
page_title: Declarative Binding | RadGantt for ASP.NET AJAX Documentation
description: Declarative Binding
slug: gantt/resources/data-binding/declarative-binding
tags: declarative,binding
published: True
position: 1
---

# Declarative Binding

The following article demonstrates how to implement **Resources Data Binding** within **SqlDataSource** scenario.

## 

In order to implement Resources Data Binding, you would need to have two additional underlying data tables then the standard **SQLDataSource** scenario. The one should be where the **Resources** are stored and the other additional table is where the **Assignments** (links between tasks and resources) are stored. For more information, navigate to the [DataBase Structure documentation]({%slug gantt/resources/data-binding/database-structure%}) article. In addition to the **Resources** feature, we have implemented a new column for visualization of the assigned resources in the **Treelist view - GanttResourceColumn**. This column should be defined in the **Columns** section of the **RadGantt**.

The below listed steps demonstrate how to implement Resources Data Binding within SqlDataSource scenario:

1. Place a **RadGantt** control on the page.

1. Add four **SqlDataSource** controls to the page and set their **SelectCommands** appropriately. Those SqlDataSources should acquire the data set for the tasks, their dependencies, the resources and the assignments, which should link the tasks with the resources.

1. Assign the **DataSourceID, DependenciesDataSourceID, ResourcesDataSourceID** and **AssignmentsDataSourceID** properties to the respective data source controls.

1. Configure the properties available under the **TaskDataBindings, DependenciesDataBindings, ResourcesDataBindings** and **AssignmentsDataBindings** sectionsto match the fields in the database tables.

After performing the above steps you should get a configuration similar to the demonstrated below.


````ASP.NET
<telerik:RadGantt runat="server" ID="RadGantt1"
    DataSourceID="TasksDataSource"
    DependenciesDataSourceID="DependenciesDataSource"
    ResourcesDataSourceID="ResourcesDataSource"
    AssignmentsDataSourceID="AssignmentsDataSource"
    AutoGenerateColumns="false"
    EnableResources="true">
    <Columns>
        <telerik:GanttBoundColumn DataField="Title" DataType="String"></telerik:GanttBoundColumn>
        <telerik:GanttResourceColumn HeaderText="Asssigned Resources"></telerik:GanttResourceColumn>
    </Columns>
    <DataBindings>
        <TasksDataBindings
            IdField="ID" ParentIdField="ParentID"
            StartField="Start" EndField="End"
            OrderIdField="OrderID"
            SummaryField="Summary"
            TitleField="Title" PercentCompleteField="PercentComplete" />
        <DependenciesDataBindings
            TypeField="Type" IdField="ID"
            PredecessorIdField="PredecessorID"
            SuccessorIdField="SuccessorID" />
        <ResourcesDataBindings IdField="ID"
            TextField="Name"
            ColorField="Color" />
        <AssignmentsDataBindings IdField="ID"
            TaskIdField="TaskID"
            ResourceIdField="ResourceID"
            UnitsField="Units" />
    </DataBindings>
</telerik:RadGantt>

<asp:SqlDataSource ID="TasksDataSource" runat="server"
    ProviderName="System.Data.SqlClient"
    ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
    SelectCommand="SELECT * FROM [GanttTasks]"></asp:SqlDataSource>

<asp:SqlDataSource ID="DependenciesDataSource" runat="server"
    ProviderName="System.Data.SqlClient"
    ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
    SelectCommand="SELECT * FROM [GanttDependencies]"></asp:SqlDataSource>

<asp:SqlDataSource runat="server" ID="ResourcesDataSource"
    SelectCommand="SELECT * FROM [GanttResources]"
    ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>" />

<asp:SqlDataSource ID="AssignmentsDataSource" runat="server"
    ProviderName="System.Data.SqlClient"
    ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
    SelectCommand="SELECT * FROM [GanttResourceAssignments]"></asp:SqlDataSource>
````


# See Also

 * [Declarative Binding article]({%slug gantt/data-binding/server-side-binding/declarative-binding%})
