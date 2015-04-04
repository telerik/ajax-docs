---
title: NodeExpandCollapse
page_title: NodeExpandCollapse | UI for ASP.NET AJAX Documentation
description: NodeExpandCollapse
slug: orgchart/server-side-programming/events/nodeexpandcollapse
tags: nodeexpandcollapse
published: True
position: 6
---

# NodeExpandCollapse



## 

The __NodeExpandCollapse__ is raised when a Node expand or collapse icon is clicked.

The event handler receives two parameters:

1. The instance of the orgchart firing the event

2. An event arguments parameter containing the following properties:

* __State__ - the state of the Node that have been expanded of collapsed.

* __SourceNode__ - the Node whose child nodes are expanded or collapsed.

When this event is handled in order to make the changes persist properly the collapsed state of the node should be updated as it is shown in the sample code below:

````ASPNET
			 <telerik:RadOrgChart runat="server" ID="RadOrgChart1" EnableCollapsing="true" 
	            EnableGroupCollapsing="true"  OnNodeExpandCollapse="RadOrgChart1_NodeExpandCollapse" OnGroupExpandCollapse="RadOrgChart1_GroupExpandCollapse">
	            <GroupEnabledBinding>
	                <NodeBindingSettings DataSourceID="NodesDataSource" DataFieldID="ID" DataFieldParentID="ParentID" DataCollapsedField="Collapsed"
	                 DataGroupCollapsedField="GroupCollapsed" />
	                <GroupItemBindingSettings DataSourceID="ItemsDataSource" DataFieldID="ID" DataFieldNodeID="NodeID"
	                    DataTextField="Text" />
	            </GroupEnabledBinding>
	        </telerik:RadOrgChart>
	        <asp:SqlDataSource ID="ItemsDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:OrgChartExpandCollapse %>"
	            SelectCommand="SELECT * FROM [Items]"></asp:SqlDataSource>
	        <asp:SqlDataSource ID="NodesDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:OrgChartExpandCollapse %>"
	            SelectCommand="SELECT * FROM [ExpandCollapse]"></asp:SqlDataSource>
````





````C#
	
	    protected void RadOrgChart1_NodeExpandCollapse(object sender, OrgChartNodeExpandCollapseEventArguments e)
	    {
	
	        bool collapsedState = e.State == OrgChartNodeExpandCollapseState.NodeCollapsed ? true : false;
	        e.SourceNode.Collapsed = collapsedState;
	        using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["OrgChartExpandCollapse"].ConnectionString))
	        {
	            string updateString = @"UPDATE ExpandCollapse SET Collapsed = @Collapsed WHERE [ID]=" + e.SourceNode.ID;
	            using (SqlCommand cmd = new SqlCommand(updateString, con))
	            {
	                cmd.Parameters.Add(new SqlParameter("@Collapsed", collapsedState));
	                cmd.Connection.Open();
	                cmd.ExecuteNonQuery();
	                cmd.Connection.Close();
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadOrgChart1_NodeExpandCollapse(sender As Object, e As Telerik.Web.UI.OrgChartNodeExpandCollapseEventArguments)
	        Dim collapsedState As Boolean = If(e.State = OrgChartNodeExpandCollapseState.NodeCollapsed, True, False)
	        e.SourceNode.Collapsed = collapsedState
	        Using con As New SqlConnection(ConfigurationManager.ConnectionStrings("OrgChartExpandCollapse").ConnectionString)
	            Dim updateString As String = "UPDATE ExpandCollapse SET Collapsed = @Collapsed WHERE [ID]=" + e.SourceNode.ID
	            Using cmd As New SqlCommand(updateString, con)
	                cmd.Parameters.Add(New SqlParameter("@Collapsed", collapsedState))
	                cmd.Connection.Open()
	                cmd.ExecuteNonQuery()
	                cmd.Connection.Close()
	            End Using
	        End Using
	    End Sub
````

