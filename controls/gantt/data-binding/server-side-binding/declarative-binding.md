---
title: Declarative Binding
page_title: Declarative Binding | UI for ASP.NET AJAX Documentation
description: Declarative Binding
slug: gantt/data-binding/server-side-binding/declarative-binding
tags: declarative,binding
published: True
position: 0
---

# Declarative Binding



This artcile describes how you can bind __RadGantt__ to declarative data source controls including __SqlDataSource__,__AccessDataSource__, __ObjectDataSource__, __XmlDataSource__,__EntityDataSource__, __OpenAccessDataSource__ and __LinqDataSource__.

## 

The steps listed below demonstrate how to bind the control using __SqlDataSource__.

1. Add two __SqlDataSource__ controls to the page and set their __SelectCommands__ appropriately. The __SelectCommand__ of the first data source should return the tasks whereas the second their dependencies.

1. Place a __RadGantt__ control on the page.

1. Assign the __DataSourceID__ and __DependenciesDataSourceID__ properties to the respective data source controls.

1. Set the properties avaiable under the __TaskDataBindings__ and __DependenciesDataBindings__ sections to match the tasks and dependencies fields in the database tables.

After performing the above steps you should get a configuration similar to the below provided.

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


