---
title: Drag and Drop
page_title: Drag and Drop | UI for ASP.NET AJAX Documentation
description: Drag and Drop
slug: orgchart/functionality/drag-and-drop
tags: drag,and,drop
published: True
position: 5
---

# Drag and Drop



## 

__RadOrgChart__ control supports __drag-and-drop__ of Nodes and GroupItems. By setting __EnableDragAndDrop__ propety to true the drag-and-drop functionality is enabled. __[NodeDrop]({%slug orgchart/server-side-programming/events/nodedrop%})__ and __[GroupItemDrop]({%slug orgchart/server-side-programming/events/groupitemdrop%})__ events are exposed. When a node is dropped the NodeDrop event is fired, when a GroupItem is dropped the GroupItemDrop event is fired. To change the OrgChart hierarchy you need to handle the events and update the underlying data sources. No automatic updates are available.

Binding scenarios:

Using __SimpleBinding__ the user can only drag-and-drop Nodes which enables him to change the hierarchy.

````ASPNET
	            <telerik:RadOrgChart runat="server" ID="RadOrgChart1" EnableDragAndDrop="true">
	        </telerik:RadOrgChart>
	        <asp:SqlDataSource runat="server" ID="DataSource1"
	            ConnectionString="<%$ ConnectionStrings:EmployeeConnectionString %>" 
	            SelectCommand="SELECT * FROM [Names]" />
````





````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadOrgChart1.NodeDrop += new OrgChartNodeDropEventHandler(RadOrgChart1_NodeDropped);
	
	        RadOrgChart1.DataFieldID = "ID";
	        RadOrgChart1.DataFieldParentID = "ParentID";
	        RadOrgChart1.DataTextField = "Text";
	        RadOrgChart1.DataSource = DataSource1;
	        RadOrgChart1.DataBind();
	    }
	
	    void RadOrgChart1_NodeDropped(object sender, OrgChartNodeDropEventArguments e)
	    {
	        DataSource1.UpdateCommand = "Update Names Set ParentID='" + e.DestinationNode.ID + "' Where ID='" + e.SourceNode.ID + "'";
	        DataSource1.Update();
	        RadOrgChart1.DataBind();
	    }
	
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	
	        RadOrgChart1.DataFieldID = "ID"
	        RadOrgChart1.DataFieldParentID = "ParentID"
	        RadOrgChart1.DataTextField = "Text"
	        RadOrgChart1.DataSource = DataSource1
	        RadOrgChart1.DataBind()
	    End Sub
	
	    Private Sub RadOrgChart1_NodeDropped(sender As Object, e As OrgChartNodeDropEventArguments) Handles RadOrgChart1.NodeDrop
	        DataSource1.UpdateCommand = "Update Names Set ParentID='" & Convert.ToString(e.DestinationNode.ID) & "' Where ID='" & Convert.ToString(e.SourceNode.ID) & "'"
	        DataSource1.Update()
	        RadOrgChart1.DataBind()
	    End Sub
````


Using __GroupEnabledBinding__ one can drag-and-drop both Nodes and GroupItems. This allows the user to reorder the hierarchy and to move a GroupItem from one Node to another. By doing so (moving GroupItems), it is possible to have empty nodes. Now, the empty Nodes are rendered (except in SimpleBinding). However, using the __AllowGroupItemDragging__ property and setting it to false one can prevent dragging off the GroupItems from a Node.

````ASPNET
	            <telerik:RadOrgChart runat="server" ID="RadOrgChart3" EnableDragAndDrop="true">
	        </telerik:RadOrgChart>
	        <asp:SqlDataSource runat="server" ID="SqlDataSource1"
	            ConnectionString="<%$ ConnectionStrings:EmployeeConnectionString %>" 
	            SelectCommand="SELECT * FROM [Nodes]" />
	
	        <asp:SqlDataSource runat="server" ID="SqlDataSource2"
	            ConnectionString="<%$ ConnectionStrings:EmployeeConnectionString %>" 
	            SelectCommand="SELECT * FROM [GroupItems]" />
````







````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        RadOrgChart3.NodeDrop += new OrgChartNodeDropEventHandler(RadOrgChart3_NodeDropped);
	        RadOrgChart3.GroupItemDrop += new OrgChartGroupItemDropEventHandler(RadOrgChart3_GroupItemDropped);
	
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataSource = SqlDataSource1;
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "ID";
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ParentID";
	
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataSource = SqlDataSource2;
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldID = "ID";
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldNodeID = "NodeID";
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataTextField = "Text";
	
	        RadOrgChart3.DataBind();
	    }
	
	    void RadOrgChart3_GroupItemDropped(object sender, OrgChartGroupItemDropEventArguments e)
	    {
	        SqlDataSource2.UpdateCommand = "Update GroupItems Set NodeID='" + e.DestinationNode.ID + "' Where ID='" + e.SourceGroupItem.ID + "'";
	        SqlDataSource2.Update();
	        RadOrgChart3.DataBind();
	    }
	
	    void RadOrgChart3_NodeDropped(object sender, OrgChartNodeDropEventArguments e)
	    {
	        SqlDataSource1.UpdateCommand = "Update Nodes Set ParentID='" + e.DestinationNode.ID + "' Where ID='" + e.SourceNode.ID + "'";
	        SqlDataSource1.Update();
	        RadOrgChart3.DataBind();
	    }
	
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataSource = SqlDataSource1
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "ID"
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ParentID"
	
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataSource = SqlDataSource2
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldID = "ID"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldNodeID = "NodeID"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataTextField = "Text"
	
	        RadOrgChart3.DataBind()
	    End Sub
	
	    Private Sub RadOrgChart3_GroupItemDropped(sender As Object, e As OrgChartGroupItemDropEventArguments) Handles RadOrgChart3.GroupItemDrop
	        SqlDataSource2.UpdateCommand = "Update GroupItems Set NodeID='" & Convert.ToString(e.DestinationNode.ID) & "' Where ID='" & Convert.ToString(e.SourceGroupItem.ID) & "'"
	        SqlDataSource2.Update()
	        RadOrgChart3.DataBind()
	    End Sub
	
	    Private Sub RadOrgChart3_NodeDropped(sender As Object, e As OrgChartNodeDropEventArguments) Handles RadOrgChart3.NodeDrop
	        SqlDataSource1.UpdateCommand = "Update Nodes Set ParentID='" & Convert.ToString(e.DestinationNode.ID) & "' Where ID='" & Convert.ToString(e.SourceNode.ID) & "'"
	        SqlDataSource1.Update()
	        RadOrgChart3.DataBind()
	    End Sub
````


>caution The RadOrgChart does not persists it's structure in the ViewState. You need to rebind the control on every postback or change in the data source. Creating OrgChart hierarchy during runtime (adding Nodes/GroupItems from code behind) or in the markup, and using at the same time drag-and-drop is incompatible, because it is not possible to mark when a Node/GroupItem is moved. Please use drag-and-drop feature when you are bind to a data source.
>


# See Also

 * [RadOrgChart Drag and Drop Simple Binding Demo](http://demos.telerik.com/aspnet-ajax/orgchart/examples/draganddropsimplebinding/defaultcs.aspx)

 * [RadOrgChart Drag and Drop Group Enabled Binding Demo](http://demos.telerik.com/aspnet-ajax/orgchart/examples/draganddropgroupenabledbinding/defaultcs.aspx)
