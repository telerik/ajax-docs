---
title: GroupExpandCollapse
page_title: GroupExpandCollapse | RadOrgChart for ASP.NET AJAX Documentation
description: GroupExpandCollapse
slug: orgchart/server-side-programming/events/groupexpandcollapse
tags: groupexpandcollapse
published: True
position: 7
---

# GroupExpandCollapse



## 

The **GroupExpandCollapse** is raised when a Group expand or collapse icon is clicked.

The event handler receives two parameters:

1. The instance of the orgchart firing the event

2. An event arguments parameter containing the following properties:

* **State** - the state of the Node that have been expanded of collapsed.

* **SourceNode** - the Node whose child group items are expanded or collapsed.

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
	
	    protected void RadOrgChart1_GroupExpandCollapse(object sender, OrgChartGroupExpandCollapseEventArguments e)
	    {
	        bool collapsedState = e.State == OrgChartGroupExpandCollapseState.GroupCollapsed ? true : false;
	        e.SourceNode.GroupCollapsed = collapsedState;
	        using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["OrgChartExpandCollapse"].ConnectionString))
	        {
	            string updateString = @"UPDATE ExpandCollapse SET GroupCollapsed = @GroupCollapsed WHERE [ID]=" + e.SourceNode.ID;
	            using (SqlCommand cmd = new SqlCommand(updateString, con))
	            {
	                cmd.Parameters.Add(new SqlParameter("@GroupCollapsed", collapsedState));
	                cmd.Connection.Open();
	                cmd.ExecuteNonQuery();
	                cmd.Connection.Close();
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadOrgChart1_GroupExpandCollapse(sender As Object, e As Telerik.Web.UI.OrgChartGroupExpandCollapseEventArguments)
	        Dim collapsedState As Boolean = If(e.State = OrgChartGroupExpandCollapseState.GroupCollapsed, True, False)
	        e.SourceNode.GroupCollapsed = collapsedState
	        Using con As New SqlConnection(ConfigurationManager.ConnectionStrings("OrgChartExpandCollapse").ConnectionString)
	            Dim updateString As String = "UPDATE ExpandCollapse SET GroupCollapsed = @GroupCollapsed WHERE [ID]=" + e.SourceNode.ID
	            Using cmd As New SqlCommand(updateString, con)
	                cmd.Parameters.Add(New SqlParameter("@GroupCollapsed", collapsedState))
	                cmd.Connection.Open()
	                cmd.ExecuteNonQuery()
	                cmd.Connection.Close()
	            End Using
	        End Using
	    End Sub
````

