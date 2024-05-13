---
title: Custom task edit window
description: Custom task edit window. Check it now!
type: how-to
page_title: Custom task edit window. | RadGantt
slug: gantt-custom-task-edit-window
res_type: kb
tags: telerik, telerik ajax gantt, gantt, gantt custom edit, gantt custom edit window
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

This example demonstrates how to create a custom task edit window with RadWindow, which will replace the default one when editing the Gantt's tasks.

## Solution

The idea is to implement the Window in such a way it allows users to edit task details such as title, start date, end date, and completion percentage. It utilizes client-side JavaScript functions to handle events like double-clicking on a task, saving edits, validating start and end dates, and deleting tasks. 

The editor window is displayed within a RadWindow component and interacts with the RadGantt control to update task information.

````ASP.NET
<telerik:RadGantt
    runat="server"
    RenderMode="Lightweight"
    SnapToGrid="false"
    ID="RadGantt1"
    AutoGenerateColumns="true"
    Height="500"
    SelectedView="MonthView"
    AllowColumnResize="true"
    OnTaskInsert="RadGantt1_TaskInsert" />

<telerik:RadWindow
    ID="RadWindow2"
    RenderMode="Lightweight"
    EnableShadow="true"
    Behaviors="Close, Move, Resize,Maximize"
    RestrictionZoneID="RestrictionZone"
    Title="Edit Task"
    runat="server"
    Width="360px"
    Height="440px"
    VisibleStatusbar="False">
    <ContentTemplate>
        <br />
        <%--ID--%>
        <div style="text-align: right; float: left">
            <asp:Label ID="Label1" Text="ID" runat="server" Width="85px" />
        </div>
        <div style="float: left; padding-left: 5px;">
            <asp:TextBox ID="TextBox1" runat="server" Width="220px" ReadOnly="True">
            </asp:TextBox>
        </div>

        <%--Divider Bar--%>
        <div style="border-bottom: thin solid #62676b; width: 325px; float: left; clear: left; padding-top: 12px">
        </div>

        <%--Title--%>
        <div style="text-align: right; float: left; padding-top: 12px;">
            <asp:Label ID="Label2" Text="Title" runat="server" Width="85px" />
        </div>
        <div style="float: left; padding-left: 5px; padding-top: 12px;">
            <asp:TextBox ID="TextBox2" runat="server" Width="220px">
            </asp:TextBox>
        </div>

        <%--Start--%>
        <div style="text-align: right; float: left; padding-top: 8px;">
            <asp:Label ID="Label3" Text="Start" runat="server" Width="85px" />
        </div>
        <div style="float: left; padding-left: 5px; padding-top: 8px;">
            <telerik:RadDateTimePicker ID="RadDatePicker1" Width="225px" runat="server">
                <DateInput runat="server" DateFormat="yyyy/M/d HH:mm" DisplayDateFormat="yyyy/M/d HH:mm"></DateInput>
            </telerik:RadDateTimePicker>
        </div>
        <div style="text-align: center; padding-left: 5px; padding-top: 8px;">
            <asp:RequiredFieldValidator runat="server" ID="RequiredFieldValidator1" ControlToValidate="RadDatePicker1"
                ErrorMessage="Start date is required!" ForeColor="Red"></asp:RequiredFieldValidator>
        </div>

        <%--End--%>
        <div style="text-align: right; float: left; padding-top: 8px;">
            <asp:Label ID="Label4" Text="End" runat="server" Width="85px" />
        </div>
        <div style="float: left; padding-left: 5px; padding-top: 8px;">
            <telerik:RadDateTimePicker ID="RadDatePicker2" Width="225px" runat="server">
                <DateInput runat="server" DateFormat="yyyy/M/d HH:mm" DisplayDateFormat="yyyy/M/d HH:mm"></DateInput>
            </telerik:RadDateTimePicker>
        </div>
        <div style="text-align: center; padding-left: 5px; padding-top: 8px;">
            <asp:RequiredFieldValidator runat="server" ID="RequiredFieldValidator2" ControlToValidate="RadDatePicker2"
                ErrorMessage="End date is required!" ForeColor="Red"></asp:RequiredFieldValidator>
        </div>
        <div style="text-align: right; float: left; padding-top: 8px;">
            <span>
                <asp:CustomValidator ID="dateCompareValidator" EnableClientScript="true" runat="server"
                    ControlToValidate="RadDatePicker2" ClientValidationFunction="validateStartEndDate"
                    ErrorMessage="End date should be after or equal to the start date!" ForeColor="Red">
                </asp:CustomValidator>
            </span>
        </div>

        <%--Complete--%>
        <div style="text-align: right; float: left; padding-top: 8px;">
            <asp:Label ID="Label5" Text="Complete" runat="server" Width="85px" />
        </div>
        <div style="float: left; padding-left: 5px; padding-top: 8px;">
            <telerik:RadNumericTextBox runat="server" ID="TextBox3" Width="225" ShowSpinButtons="true"
                IncrementSettings-Step="0.01" Type="Number" MinValue="0" MaxValue="1" NumberFormat-DecimalSeparato=",">
            </telerik:RadNumericTextBox>
        </div>

        <%--Divider Bar--%>
        <div style="border-bottom: thin solid #62676b; width: 325px; float: left; clear: left; padding-top: 12px">
        </div>

        <%--Save Button--%>
        <div style="float: left; padding-left: 25px; padding-top: 12px;">
            <telerik:RadButton ID="RadButton1" runat="server" Text="Save" AutoPostBack="false" OnClientClicking="OnClientSaveClicking"></telerik:RadButton>
        </div>

        <%--Cancel Button--%>
        <div style="float: left; padding-left: 10px; padding-top: 12px;">
            <telerik:RadButton ID="RadButton2" runat="server" Text="Cancel" AutoPostBack="false" OnClientClicked="OnClientCancelClicked"></telerik:RadButton>
        </div>

        <%--Delete Button--%>
        <div style="float: left; padding-left: 10px; padding-top: 12px;">
            <telerik:RadButton ID="RadButton3" runat="server" Text="Delete" AutoPostBack="false" OnClientClicked="OnClientDeleteClicked"></telerik:RadButton>
        </div>

        <asp:HiddenField runat="server" ID="UidHiddenField" />
        <%--</div>--%>
    </ContentTemplate>
</telerik:RadWindow>
````

````C#
private const string ProviderSessionKey = "RadGanttResizingColumns";

public XmlGanttProvider Provider
{
    get
    {
        XmlGanttProvider provider = (XmlGanttProvider) Session[ProviderSessionKey];
        if (Session[ProviderSessionKey] == null || !IsPostBack)
        {
            provider = new XmlGanttProvider(Server.MapPath("~/App_Data/Tasks.xml"), false);

            Session[ProviderSessionKey] = provider;
        }

        return provider;
    }
}

protected void RadGantt1_TaskInsert(object sender, TaskEventArgs e)
{

}

private void Page_Init(object sender, EventArgs e)
{
    RadGantt1.Provider = Provider;
}
````

````JavaScript
var $ = $ || $telerik.$;

function getTaskByUid(uid) {
    var gantt = $find("<%= RadGantt1.ClientID %>");
    var tasks = gantt.get_allTasks();

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i]._uid === uid) {
            return tasks[i];
            break;
        }
    }

    return null;
}

function getTaskById(id) {
    var gantt = $find("<%= RadGantt1.ClientID %>");
    var tasks = gantt.get_allTasks();

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].get_id() === id) {
            return tasks[i];
            break;
        }
    }

    return null;
}

function pageLoadHandler() {
    var gantt = $find("<%= RadGantt1.ClientID %>");
    $(gantt.get_element()).find(".rgtTimelineContent").on("dblclick", ".rgtTask", function (e) {
        e.stopPropagation();
        var $element = $(e.target);

        if (!$element.is(".rgtTask")) {
            $element = $element.parents(".rgtTask").first();
        }

        var task = getTaskByUid($element.attr("data-uid"));
        showDialog(task);
    });
    // Sys.Application.remove_load(pageLoadHandler);  
}
Sys.Application.add_load(pageLoadHandler);

function showDialog(task) {
    var wnd = $find("<%= RadWindow2.ClientID%>");
    wnd.show();

    $get("<%=UidHiddenField.ClientID %>").value = task._uid;

    $get("<%=TextBox1.ClientID %>").value = task.get_id();
    $get("<%=TextBox2.ClientID %>").value = task.get_title();

    $find("<%=RadDatePicker1.DateInput.ClientID %>").set_value(task.get_start());
    $find("<%=RadDatePicker2.DateInput.ClientID %>").set_value(task.get_end());

    $get("<%=TextBox3.ClientID %>").value = task.get_percentComplete();
}

function OnClientSaveClicking(sender, args) {
    var isValid = Page_ClientValidate();
    if (!isValid) {
        args.set_cancel(true);
    }
    else {
        var uidValue = $get("<%=UidHiddenField.ClientID %>").value;

        var titleFieldValue = $get("<%=TextBox2.ClientID %>").value;
        var startDatePicker = $find("<%=RadDatePicker1.DateInput.ClientID %>");
        var endDatePicker = $find("<%=RadDatePicker2.DateInput.ClientID %>");

        var startFieldValue = startDatePicker.get_value();
        var endFieldValue = endDatePicker.get_value();

        var percentCompleteFieldValue = $get("<%=TextBox3.ClientID %>").value;

        var newStartDate = new Date(Date.parse(startFieldValue, startDatePicker.get_dateFormat()));
        var newEndDate = new Date(Date.parse(endFieldValue, endDatePicker.get_dateFormat()));

        var newPercentComplete = parseFloat(percentCompleteFieldValue.replace(",", "."));

        var task = getTaskByUid(uidValue);
        task.set_title(titleFieldValue);
        task.set_start(newStartDate);
        task.set_end(newEndDate);
        task.set_percentComplete(newPercentComplete);
        $find("<%= RadWindow2.ClientID%>").close();
    }
}

function validateStartEndDate(sender, args) {
    var RadDatePicker1 = $find("<%= RadDatePicker1.ClientID%>")
    var RadDatePicker2 = $find("<%= RadDatePicker2.ClientID%>")
    var Date1 = new Date(RadDatePicker1.get_selectedDate());
    var Date2 = new Date(RadDatePicker2.get_selectedDate());

    if ((Date2 - Date1) < 0) {
        args.IsValid = false;
    }
}

function OnClientCancelClicked(sender) {
    $find("<%= RadWindow2.ClientID%>").close();
}

function OnClientDeleteClicked(sender) {
    var uidValue = $get("<%=UidHiddenField.ClientID %>").value;
    var task = getTaskByUid(uidValue);
    var parentTaskId = task.get_parentId();

    if (parentTaskId) {
        var parentTask = getTaskById(parentTaskId);
        parentTask.get_tasks().remove(task);
    }
    else {
        var gantt = $find("<%= RadGantt1.ClientID %>");
        gantt.get_tasks().remove(task);
    }

    $find("<%= RadWindow2.ClientID%>").close();
}
````

````XML
<?xml version="1.0" encoding="utf-8"?>
<Project>
	<Tasks>
		<Task>
			<ID>1</ID>
			<ParentID />
			<Start>2014-05-05T08:00:00Z</Start>
			<End>2014-05-16T20:00:00Z</End>
			<Title>Defining selection criteria</Title>
			<PercentComplete>0.39</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>0</OrderID>
		</Task>
		<NextID>12</NextID>
		<Task>
			<ID>2</ID>
			<ParentID>5</ParentID>
			<Start>2014-05-19T08:00:00Z</Start>
			<End>2014-06-03T20:00:00Z</End>
			<Title>Advertising the position</Title>
			<PercentComplete>1</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>0</OrderID>
		</Task>
		<Task>
			<ID>3</ID>
			<ParentID>5</ParentID>
			<Start>2014-05-19T08:00:00Z</Start>
			<End>2014-06-03T20:00:00Z</End>
			<Title>Collecting job applications</Title>
			<PercentComplete>0.5</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>1</OrderID>
		</Task>
		<Task>
			<ID>4</ID>
			<ParentID />
			<Start>2014-06-04T08:00:00Z</Start>
			<End>2014-06-20T20:00:00Z</End>
			<Title>Categorizing applications</Title>
			<PercentComplete>0.5</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>2</OrderID>
		</Task>
		<Task>
			<ID>5</ID>
			<ParentID />
			<Start>2014-05-19T08:00:00Z</Start>
			<End>2014-06-03T20:00:00Z</End>
			<Title>Researching the market for candidates</Title>
			<PercentComplete>0.75</PercentComplete>
			<Summary>true</Summary>
			<Expanded>true</Expanded>
			<OrderID>1</OrderID>
		</Task>
		<Task>
			<ID>6</ID>
			<ParentID />
			<Start>2014-06-23T08:00:00Z</Start>
			<End>2014-08-06T08:00:00Z</End>
			<Title>Assessing applicants</Title>
			<PercentComplete>0.19333333333333336</PercentComplete>
			<Summary>true</Summary>
			<Expanded>true</Expanded>
			<OrderID>3</OrderID>
		</Task>
		<Task>
			<ID>7</ID>
			<ParentID>6</ParentID>
			<Start>2014-06-23T08:00:00Z</Start>
			<End>2014-07-11T20:00:00Z</End>
			<Title>Interview with Human Resources representatives</Title>
			<PercentComplete>0.24</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>0</OrderID>
		</Task>
		<Task>
			<ID>8</ID>
			<ParentID>6</ParentID>
			<Start>2014-07-14T08:00:00Z</Start>
			<End>2014-07-25T08:00:00Z</End>
			<Title>Asigning and reviewing a sample test task</Title>
			<PercentComplete>0.34</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>1</OrderID>
		</Task>
		<Task>
			<ID>9</ID>
			<ParentID>6</ParentID>
			<Start>2014-07-28T08:00:00Z</Start>
			<End>2014-08-06T08:00:00Z</End>
			<Title>Interview with Development Team representatives</Title>
			<PercentComplete>0</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>2</OrderID>
		</Task>
		<Task>
			<ID>10</ID>
			<ParentID />
			<Start>2014-08-06T08:00:00Z</Start>
			<End>2014-08-15T20:00:00Z</End>
			<Title>Creating and proposing the job offer</Title>
			<PercentComplete>0</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>4</OrderID>
		</Task>
		<Task>
			<ID>11</ID>
			<ParentID />
			<Start>2014-08-18T08:00:00Z</Start>
			<End>2014-08-22T14:00:00Z</End>
			<Title>Hiring applicant</Title>
			<PercentComplete>0</PercentComplete>
			<Summary>false</Summary>
			<Expanded>true</Expanded>
			<OrderID>5</OrderID>
		</Task>
	</Tasks>
	<Dependencies>
		<Dependency>
			<ID>1</ID>
			<PredecessorID>1</PredecessorID>
			<SuccessorID>2</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
		<NextID>12</NextID>
		<Dependency>
			<ID>2</ID>
			<PredecessorID>1</PredecessorID>
			<SuccessorID>3</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
		<Dependency>
			<ID>5</ID>
			<PredecessorID>2</PredecessorID>
			<SuccessorID>3</SuccessorID>
			<Type>FinishFinish</Type>
		</Dependency>
		<Dependency>
			<ID>6</ID>
			<PredecessorID>3</PredecessorID>
			<SuccessorID>4</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
		<Dependency>
			<ID>7</ID>
			<PredecessorID>4</PredecessorID>
			<SuccessorID>7</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
		<Dependency>
			<ID>8</ID>
			<PredecessorID>7</PredecessorID>
			<SuccessorID>8</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
		<Dependency>
			<ID>9</ID>
			<PredecessorID>8</PredecessorID>
			<SuccessorID>9</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
		<Dependency>
			<ID>10</ID>
			<PredecessorID>9</PredecessorID>
			<SuccessorID>10</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
		<Dependency>
			<ID>11</ID>
			<PredecessorID>10</PredecessorID>
			<SuccessorID>11</SuccessorID>
			<Type>FinishStart</Type>
		</Dependency>
	</Dependencies>
</Project>
````



  