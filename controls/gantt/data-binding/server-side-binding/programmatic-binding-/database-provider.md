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

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" DataSourceID="SqlDataSource1" DependenciesDataSourceID="SqlDataSource2">
    <DataBindings>
        <TasksDataBindings IdField="ID" ParentIdField="ParentID" StartField="Start" EndField="End" TitleField="Title" PercentCompleteField="PercentComplete" />
        <DependenciesDataBindings TypeField="Type" IdField="ID" PredecessorIdField="PredecessorID" SuccessorIdField="SuccessorID" />
    </DataBindings>
</telerik:RadGantt>

<asp:SqlDataSource runat="server" ID="SqlDataSource1"
    ConnectionString="<%$ ConnectionStrings:TelerikConnectionString%>"
    DeleteCommand="DELETE FROM [GanttTasks] WHERE [ID] = @ID"
    InsertCommand="INSERT INTO [GanttTasks] ([ParentID], [OrderID], [Title], [Start], [End], [PercentComplete], [Expanded], [Summary]) VALUES (@ParentID, @OrderID, @Title, @Start, @End, @PercentComplete, @Expanded, @Summary)"
    SelectCommand="SELECT * FROM [GanttTasks] WHERE [ORderID] != -1"
    UpdateCommand="UPDATE [GanttTasks] SET [ParentID] = @ParentID, [OrderID] = @OrderID, [Title] = @Title, [Start] = @Start, [End] = @End, [PercentComplete] = @PercentComplete, [Expanded] = @Expanded, [Summary] = @Summary WHERE [ID] = @ID">
    <DeleteParameters>
        <asp:Parameter Name="ID" Type="Int32" />
    </DeleteParameters>
    <InsertParameters>
        <asp:Parameter Name="ParentID" Type="Int32" />
        <asp:Parameter Name="OrderID" Type="Int32" />
        <asp:Parameter Name="Title" Type="String" />
        <asp:Parameter Name="Start" Type="DateTime" />
        <asp:Parameter Name="End" Type="DateTime" />
        <asp:Parameter Name="PercentComplete" Type="Decimal" />
        <asp:Parameter Name="Expanded" Type="Boolean" />
        <asp:Parameter Name="Summary" Type="Boolean" />
    </InsertParameters>
    <UpdateParameters>
        <asp:Parameter Name="ParentID" Type="Int32" />
        <asp:Parameter Name="OrderID" Type="Int32" />
        <asp:Parameter Name="Title" Type="String" />
        <asp:Parameter Name="Start" Type="DateTime" />
        <asp:Parameter Name="End" Type="DateTime" />
        <asp:Parameter Name="PercentComplete" Type="Decimal" />
        <asp:Parameter Name="Expanded" Type="Boolean" />
        <asp:Parameter Name="Summary" Type="Boolean" />
        <asp:Parameter Name="ID" Type="Int32" />
    </UpdateParameters>
</asp:SqlDataSource>

<asp:SqlDataSource runat="server" ID="SqlDataSource2"
    ConnectionString="<%$ ConnectionStrings:TelerikConnectionString%>"
    DeleteCommand="DELETE FROM [GanttDependencies] WHERE [ID] = @ID"
    InsertCommand="INSERT INTO [GanttDependencies] ([PredecessorID], [SuccessorID], [Type]) VALUES (@PredecessorID, @SuccessorID, @Type)"
    SelectCommand="SELECT * FROM [GanttDependencies]"
    UpdateCommand="UPDATE [GanttDependencies] SET [PredecessorID] = @PredecessorID, [SuccessorID] = @SuccessorID, [Type] = @Type WHERE [ID] = @ID">
    <DeleteParameters>
        <asp:Parameter Name="ID" Type="Int32" />
    </DeleteParameters>
    <InsertParameters>
        <asp:Parameter Name="PredecessorID" Type="Int32" />
        <asp:Parameter Name="SuccessorID" Type="Int32" />
        <asp:Parameter Name="Type" Type="Int32" />
    </InsertParameters>
    <UpdateParameters>
        <asp:Parameter Name="PredecessorID" Type="Int32" />
        <asp:Parameter Name="SuccessorID" Type="Int32" />
        <asp:Parameter Name="Type" Type="Int32" />
        <asp:Parameter Name="ID" Type="Int32" />
    </UpdateParameters>
</asp:SqlDataSource>
````

# See Also

 * [Declarative Binding]({%slug gantt/data-binding/server-side-binding/declarative-binding%})

 * [XML Provider]({%slug gantt/data-binding/server-side-binding/programmatic-binding-/xml-provider%})
