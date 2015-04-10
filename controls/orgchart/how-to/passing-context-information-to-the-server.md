---
title: Passing Context Information to the Server
page_title: Passing Context Information to the Server | UI for ASP.NET AJAX Documentation
description: Passing Context Information to the Server
slug: orgchart/how-to/passing-context-information-to-the-server
tags: passing,context,information,to,the,server
published: True
position: 0
---

# Passing Context Information to the Server



On the client side, you can use the client-side __OnClientGroupPopulating__ and __OnClientNodePopulating__ events to set attributes of the context object that is passed to the server along with the request for groups/items. The context object is an object of type __IDictionary__.After the __OnClientGroupPopulating__ and __OnClientNodePopulating__ events fire those attributes are available on the server.

## Using context information with a WebService

Below you may find an example that shows how to retrieve the text value typed in the text box and send this value to the web service. This attribute could be used to filter the RadOrgChart data in order to return only the teams containing this value.

1. Add a javascript function to your Web page that serves the role of handler for the __RadOrgChart OnClientNodePopulating__ client-side event.

1. Add an filter attribute for the context object based on the value typed in the text box field.

1. In this example the web service settings are set in the code behind files.





````ASPNET
	        <script type="text/javascript">
	            function OnClientNodePopulating(sender, args) {
	                var nodeTextBoxID = "<%= NodeFilteringString.ClientID %>";
	                var nodeFilteringString = $get(nodeTextBoxID).value;
	                args.get_context()["NodeFilterString"] = nodeFilteringString;
	            }
	
	        </script>
	        <telerik:RadOrgChart runat="server" ID="RadOrgChart2" OnClientNodePopulating="OnClientNodePopulating">
	        </telerik:RadOrgChart>
	        <telerik:RadTextBox ID="NodeFilteringString" runat="server"></telerik:RadTextBox>
````
````C#
	        protected void Page_Load(object sender, EventArgs e)
			{
				var teams = new DataTable();
				teams.Columns.Add("TeamID");
				teams.Columns.Add("ReportsTo");
				teams.Columns.Add("Team");
				teams.Rows.Add(new string[] { "1", null, "Management" });
	
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
	
				RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Method = "LoadData"
				RadOrgChart2.WebServiceBindings.GroupEnabled.NodeServiceSettings.Path = "OrgChartNodeDataService.svc"
	
				RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "TeamID"
				RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ReportsTo"
				RadOrgChart2.RenderedFields.NodeFields.Add(New OrgChartRenderedField() With {.DataField = "Team"})
	
				RadOrgChart2.GroupEnabledBinding.NodeBindingSettings.DataSource = teams
				RadOrgChart2.DataBind()
	        End Sub
````
````C#
	        [OperationContract]
			public OrgChartNodeData[] LoadData(OrgChartNodeData node, IDictionary<string, object> context)
			{
	            var nodeFilterString = context["NodeFilterString"];
	            var employees = GetTeams(nodeFilterString);
			}
````
````VB.NET
	        <OperationContract>
	        Public Function LoadData(node As OrgChartNodeData, context As IDictionary(Of String, Object)) As OrgChartNodeData()
	            Dim nodeFilterString = context("NodeFilterString")
	            Dim employees = GetTeams(nodeFilterString)
	
	        End Function
````

