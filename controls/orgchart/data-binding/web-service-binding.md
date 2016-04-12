---
title: Web Service Binding
page_title: Web Service Binding | RadOrgChart for ASP.NET AJAX Documentation
description: Web Service Binding
slug: orgchart/data-binding/web-service-binding
tags: web,service,binding
published: True
position: 3
---

# Web Service Binding



## WebService Binding

**Web Service** binding will give us the ability to load Nodes/GroupItems dynamically with **Web Services**. On initial page load children of collapsed Nodes/Groups will not be rendered (they will be empty). When a user expands a Node/Group its child elements will be loaded with Web Services (the services should return Node/GroupItem data).

Here is how the web service bindings should look like in the mark up and code behind

In Simple binding:

````XML
<telerik:RadOrgChart RenderMode="Lightweight" runat="server" ID="RadOrgChart1">
    <webservicebindings>
            <Simple>
                <GroupItemServiceSettings Method="LoadData� Path="OrgChartGroupItemDataService.svc"     
        UseHttpGet="false"/>
            </Simple>
        </webservicebindings>
</telerik:RadOrgChart>
````





````C#	
RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Method = "LoadData";
RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Path ="OrgChartGroupItemDataService.svc";	
````
````VB.NET
RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Method = "LoadData"
RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Path ="OrgChartGroupItemDataService.svc"
````


In Group Enabled binding:

````XML
<telerik:RadOrgChart RenderMode="Lightweight" runat="server" ID="RadOrgChart2">
    <WebServiceBindings>
        <GroupEnabled>
			<NodeServiceSettings Method="LoadData" Path="OrgChartNodeDataService.svc"
				UseHttpGet="false"/>
			<GroupItemServiceSettings Method="LoadData" 
				Path="OrgChartGroupItemDataService.svc" 
				UseHttpGet="false"/>
        </GroupEnabled>
    </WebServiceBindings>
</telerik:RadOrgChart>
````





````C#
RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Method = "LoadData";
RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Path ="OrgChartGroupItemDataService.svc";
RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Method =  "LoadData";
RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Path = "OrgChartNodeDataService.svc";
````
````VB.NET
RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Method = "LoadData"
RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Path ="OrgChartGroupItemDataService.svc"
RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Method =  "LoadData"
RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Path = "OrgChartNodeDataService.svc"
````


## Simple Binding

The web service should return items from OrgChartGroupItemData type.

Here is an example of RadOrgChart that is bound to Web Service in simple binding:

````XML
<telerik:RadOrgChart RenderMode="Lightweight" runat="server" ID="RadOrgChart1" >
</telerik:RadOrgChart>
````





````C#
protected void Page_Load(object sender, EventArgs e)
{
    var test = new OrgChartNode();

    DataTable employees = new DataTable();
    employees.Columns.Add("EmployeeID");
    employees.Columns.Add("ReportsTo");
    employees.Columns.Add("Name");

    employees.Rows.Add(new string[] { "1", null, "Mario Pontes" });

    RadOrgChart1.DataFieldID = "EmployeeID";
    RadOrgChart1.DataFieldParentID = "ReportsTo";
    RadOrgChart1.DataTextField = "Name";
    RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Method = "LoadData";
    RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Path = "OrgChartGroupItemDataService.svc";

    RadOrgChart1.DataSource = employees;
    RadOrgChart1.DataBind();       
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs)

    Dim test = New OrgChartNode()

    Dim employees As New DataTable()
    employees.Columns.Add("EmployeeID")
    employees.Columns.Add("ReportsTo")
    employees.Columns.Add("Name")

    employees.Rows.Add(New String() {"1", Nothing, "Mario Pontes"})

    RadOrgChart1.DataFieldID = "EmployeeID"
    RadOrgChart1.DataFieldParentID = "ReportsTo"
    RadOrgChart1.DataTextField = "Name"
    RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Method = "LoadData"
    RadOrgChart1.WebServiceBindings.Simple.GroupItemServiceSettings.Path = "OrgChartGroupItemDataService.svc"

    RadOrgChart1.DataSource = employees
    RadOrgChart1.DataBind()
End Sub	
````


OrgChartGroupItemDataService:



````C#
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using Telerik.Web.UI;

[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class OrgChartGroupItemDataService
{
    // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
    // To create an operation that returns XML,
    //     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
    //     and include the following line in the operation body:
    //         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";

    private DataTable GetEmployeesData()
    {
        var employees = new DataTable();
        employees.Columns.Add("EmployeeID");
        employees.Columns.Add("ReportsTo");
        employees.Columns.Add("Name");

        employees.Rows.Add(new string[] { "1", null, "Mario Pontes" });
        employees.Rows.Add(new string[] { "2", "1", "Yoshi Latimer" });
        employees.Rows.Add(new string[] { "3", "2", "Johan Stromberg" });
        employees.Rows.Add(new string[] { "4", "3", "Fransis Wilson" });
        employees.Rows.Add(new string[] { "5", "4", "Kate Miller" });
        employees.Rows.Add(new string[] { "6", "1", "Aron Hudson" });

        return employees;
    }

    [OperationContract]
    public OrgChartGroupItemData[] LoadData(OrgChartNodeData node, IDictionary<string, object> context)
    {
        var employees = GetEmployeesData();

        var rows = from myRow in employees.AsEnumerable() where myRow.Field<string>("ReportsTo") == node.Id select new { values = myRow };

        var items = new List<OrgChartGroupItemData>();

        foreach (var row in rows)
        {
            var name = row.values.Field<string>("Name");
            var id = row.values.Field<string>("EmployeeID");
            var item = new OrgChartGroupItemData() { Text = name, Id = id };

            items.Add(item);
        }

        return items.ToArray();
    }

    // Add more operations here and mark them with [OperationContract]
}
````
````VB.NET
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Runtime.Serialization
Imports System.ServiceModel
Imports System.ServiceModel.Activation
Imports System.ServiceModel.Web
Imports System.Text
Imports Telerik.Web.UI

<ServiceContract([Namespace]:="")>
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)>
Public Class OrgChartGroupItemDataService
    ' To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
    ' To create an operation that returns XML,
    '     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
    '     and include the following line in the operation body:
    '         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";

    Private Function GetEmployeesData() As DataTable
        Dim employees = New DataTable()
        employees.Columns.Add("EmployeeID")
        employees.Columns.Add("ReportsTo")
        employees.Columns.Add("Name")

        employees.Rows.Add(New String() {"1", Nothing, "Mario Pontes"})
        employees.Rows.Add(New String() {"2", "1", "Yoshi Latimer"})
        employees.Rows.Add(New String() {"3", "2", "Johan Stromberg"})
        employees.Rows.Add(New String() {"4", "3", "Fransis Wilson"})
        employees.Rows.Add(New String() {"5", "4", "Kate Miller"})
        employees.Rows.Add(New String() {"6", "1", "Aron Hudson"})

        Return employees
    End Function

    <OperationContract()>
    Public Function LoadData(node As OrgChartNodeData, context As IDictionary(Of String, Object)) As OrgChartGroupItemData()
        Dim employees = GetEmployeesData()

        Dim rows = From myRow In employees.AsEnumerable() Where myRow.Field(Of String)("ReportsTo") = node.Id Select myRow

        Dim items = New List(Of OrgChartGroupItemData)()

        For Each row In rows
            Dim name = row.Field(Of String)("Name")
            Dim id = row.Field(Of String)("EmployeeID")
            Dim loadedNode = New OrgChartGroupItemData() With {.Id = id, .Text = name}

            items.Add(loadedNode)
        Next

        Return items.ToArray()
    End Function

    ' Add more operations here and mark them with [OperationContract]
End Class
	
````


## Group-Enabled Binding

The Node web service should return items from **OrgChartNodeData** type. In case that **NodeServiceSettings** section is not set the collapsed nodes will be rendered. The **GroupItem** web service should return items from **OrgChartGroupItemData** type.

Here is an example of RadOrgChart that is bound to Web Service in Group-Enabled binding:

````XML
<telerik:RadOrgChart RenderMode="Lightweight" runat="server" ID="RadOrgChart1" >
</telerik:RadOrgChart>
````





````C#
protected void Page_Load(object sender, EventArgs e)
{
    var teams = new DataTable();
    teams.Columns.Add("TeamID");
    teams.Columns.Add("ReportsTo");
    teams.Columns.Add("Team");
    teams.Rows.Add(new string[] { "1", null, "Management" });

    RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Method = "LoadData";
    RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Path = "OrgChartGroupItemDataService.svc";

    RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Method = "LoadData";
    RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Path = "OrgChartNodeDataService.svc";

    RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "TeamID";
    RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ReportsTo";
    RadOrgChart2.RenderedFields.NodeFields.Add(new OrgChartRenderedField() { DataField = "Team" });

    RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataSource = teams;
    RadOrgChart2.DataBind();
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs)
    Dim teams = New DataTable()
    teams.Columns.Add("TeamID")
    teams.Columns.Add("ReportsTo")
    teams.Columns.Add("Team")
    teams.Rows.Add(New String() {"1", Nothing, "Management"})

    RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Method = "LoadData"
    RadOrgChart2.WebServiceBindings.GroupEnabled.GroupItemServiceSettings.Path = "OrgChartGroupItemDataService.svc"

    RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Method = "LoadData"
    RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Path = "OrgChartNodeDataService.svc"

    RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "TeamID"
    RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ReportsTo"
    RadOrgChart2.RenderedFields.NodeFields.Add(New OrgChartRenderedField() With {.DataField = "Team"})

    RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataSource = teams
    RadOrgChart2.DataBind()
End Sub
````


OrgChartGroupItemDataService:



````C#
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using Telerik.Web.UI;

[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class OrgChartGroupItemDataService
{
    private DataTable GetEmployeesData()
    {
        var employees = new DataTable();
        employees.Columns.Add("EmployeeID");
        employees.Columns.Add("TeamID");
        employees.Columns.Add("Name");

        employees.Rows.Add(new string[] { "1", "1", "Mario Pontes" });
        employees.Rows.Add(new string[] { "2", "2", "Yoshi Latimer"});
        employees.Rows.Add(new string[] { "3", "3", "Johan Stromberg"});
        employees.Rows.Add(new string[] { "4", "4", "Fransis Wilson"});
        employees.Rows.Add(new string[] { "5", "4", "Kate Miller" });

        return employees;
    }

    [OperationContract]
    public OrgChartGroupItemData[] LoadData(OrgChartNodeData node, IDictionary<string, object> context)
    {
        var employees = GetEmployeesData();

        var rows = from myRow in employees.AsEnumerable() where myRow.Field<string>("TeamID") == node.Id select new { values = myRow };

        var items = new List<OrgChartGroupItemData>();

        foreach (var row in rows)
        {
            var name = row.values.Field<string>("Name");
            var id = row.values.Field<string>("EmployeeID");
            var item = new OrgChartGroupItemData() { Text = name, Id = id };

            items.Add(item);
        }

        return items.ToArray();
    }
}
````
````VB.NET
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Runtime.Serialization
Imports System.ServiceModel
Imports System.ServiceModel.Activation
Imports System.ServiceModel.Web
Imports System.Text
Imports Telerik.Web.UI

<ServiceContract([Namespace]:="")>
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)>
Public Class OrgChartGroupItemDataService
    Private Function GetEmployeesData() As DataTable
        Dim employees = New DataTable()
        employees.Columns.Add("EmployeeID")
        employees.Columns.Add("TeamID")
        employees.Columns.Add("Name")

        employees.Rows.Add(New String() {"1", "1", "Mario Pontes"})
        employees.Rows.Add(New String() {"2", "2", "Yoshi Latimer"})
        employees.Rows.Add(New String() {"3", "3", "Johan Stromberg"})
        employees.Rows.Add(New String() {"4", "4", "Fransis Wilson"})
        employees.Rows.Add(New String() {"5", "4", "Kate Miller"})

        Return employees
    End Function

    <OperationContract()>
    Public Function LoadData(node As OrgChartNodeData, context As IDictionary(Of String, Object)) As OrgChartGroupItemData()
        Dim employees = GetEmployeesData()

        Dim rows = From myRow In employees.AsEnumerable() Where myRow.Field(Of String)("TeamID") = node.Id Select myRow

        Dim items = New List(Of OrgChartGroupItemData)()

        Dim row As System.Data.DataRow

        For Each row In rows

            Dim name = row.Field(Of String)("Name")
            Dim id = row.Field(Of String)("EmployeeID")
            Dim item = New OrgChartGroupItemData() With {.Text = name, .Id = id}

            items.Add(item)
        Next

        Return items.ToArray()
    End Function
End Class
	
````


OrgChartNodeDataService:



````C#	    
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using Telerik.Web.UI;

[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class OrgChartNodeDataService
{

    private DataTable GetTeams()
    {
        var teams = new DataTable();
        teams.Columns.Add("TeamID");
        teams.Columns.Add("ReportsTo");
        teams.Columns.Add("Team");
        teams.Rows.Add(new string[] { "1", null, "Management" });
        teams.Rows.Add(new string[] { "2", "1", "Marketing" });
        teams.Rows.Add(new string[] { "3", "2", "Creative Department" });
        teams.Rows.Add(new string[] { "4", "1", "Sales" });

        return teams;
    }

    [OperationContract]
    public OrgChartNodeData[] LoadData(OrgChartNodeData node, IDictionary<string, object> context)
    {
        var employees = GetTeams();

        var rows = from myRow in employees.AsEnumerable() where myRow.Field<string>("ReportsTo") == node.Id select new { values = myRow };

        var items = new List<OrgChartNodeData>();

        foreach (var row in rows)
        {
            var name = row.values.Field<string>("Team");
            var id = row.values.Field<string>("TeamID");
            var loadedNode = new OrgChartNodeData() { Id = id };
            loadedNode.RenderedFieldsData.Add(new OrgChartRenderedFieldData() { Text = name });

            items.Add(loadedNode);
        }

        return items.ToArray();
    }
}
````
````VB.NET	
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Runtime.Serialization
Imports System.ServiceModel
Imports System.ServiceModel.Activation
Imports System.ServiceModel.Web
Imports System.Text
Imports Telerik.Web.UI

<ServiceContract([Namespace]:="")>
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)>
Public Class OrgChartNodeDataService

    Private Function GetTeams() As DataTable
        Dim teams = New DataTable()
        teams.Columns.Add("TeamID")
        teams.Columns.Add("ReportsTo")
        teams.Columns.Add("Team")
        teams.Rows.Add(New String() {"1", Nothing, "Management"})
        teams.Rows.Add(New String() {"2", "1", "Marketing"})
        teams.Rows.Add(New String() {"3", "2", "Creative Department"})
        teams.Rows.Add(New String() {"4", "1", "Sales"})

        Return teams
    End Function

    <OperationContract()>
    Public Function LoadData(node As OrgChartNodeData, context As IDictionary(Of String, Object)) As OrgChartNodeData()
        Dim employees = GetTeams()

        Dim rows = From myRow In employees.AsEnumerable() Where myRow.Field(Of String)("ReportsTo") = node.Id Select myRow

        Dim items = New List(Of OrgChartNodeData)()

        Dim row As System.Data.DataRow

        For Each row In rows
            Dim name = row.Field(Of String)("Team")
            Dim id = row.Field(Of String)("TeamID")
            Dim loadedNode = New OrgChartNodeData() With {.Id = id}
            loadedNode.RenderedFieldsData.Add(New OrgChartRenderedFieldData() With {.Text = name})

            items.Add(loadedNode)
        Next

        Return items.ToArray()
    End Function
End Class
````


## Events

* OnClientGroupPopulated

* OnClientGroupPopulating

* OnClientGroupPopulationFailed

* OnClientNodePopulated

* OnClientNodePopulating

* OnClientNodePopulationFailed

## Persistence

All of the Nodes and GroupItems which are loaded by web services will not be persisted after a postback!
