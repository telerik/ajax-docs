---
title: Declarative Binding
page_title: Declarative Binding | RadGantt for ASP.NET AJAX Documentation
description: Declarative Binding
slug: gantt/data-binding/server-side-binding/declarative-binding
tags: declarative,binding
published: True
position: 0
---

# Declarative Binding

This artcile describes how you can bind **RadGantt** to declarative data source controls including **SqlDataSource**,**AccessDataSource**, **ObjectDataSource**, **XmlDataSource**,**EntityDataSource**, **OpenAccessDataSource** and **LinqDataSource**.

## 

The steps listed below demonstrate how to bind the control using **SqlDataSource**.

1. Add two **SqlDataSource** controls to the page and set their **SelectCommands** appropriately. The **SelectCommand** of the first data source should return the tasks whereas the second their dependencies.

1. Place a **RadGantt** control on the page.

1. Assign the **DataSourceID** and **DependenciesDataSourceID** properties to the respective data source controls.

1. Set the properties avaiable under the **TaskDataBindings** and **DependenciesDataBindings** sections to match the tasks and dependencies fields in the database tables.

After performing the above steps you should get a configuration similar to the below provided.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" DataSourceID="SqlDataSource1" DependenciesDataSourceID="SqlDataSource2">
    <DataBindings>
        <TasksDataBindings IdField="ID" ParentIdField="ParentID" OrderIdField="OrderID" StartField="Start" EndField="End" TitleField="Title" PercentCompleteField="PercentComplete" ExpandedField="Expanded" SummaryField="Summary" />
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


