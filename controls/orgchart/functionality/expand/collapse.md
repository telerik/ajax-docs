---
title: Expand/Collapse
page_title: Expand/Collapse | RadOrgChart for ASP.NET AJAX Documentation
description: Expand/Collapse
slug: orgchart/functionality/expand/collapse
tags: expand/collapse
published: True
position: 6
---

# Expand/Collapse



## Expand/Collapse the RadOrgChart hierarchical tree

**RadOrgChart** supports **Expand/Collapse** of the RadOrgChart hierarchical tree. The functionality could be enabled by setting **EnableCollapsing** property to true. **DataCollapsedField** property gets or sets the data field holding the **Collapsed** property for the currently bound Node. You can set Node's Expand/Collapse state by setting **Collapsed** property.

![Expand/Collapse](images/radorgchart_expand_collapse.png)

To further customize the functionality of the RadOrgChart control there are also several server-side methods:

* **CollapseAllNodes()**– collapse all nodes in the RadOrgChart

* **CollapseNodes()** - collapse nodes in the RadOrgChart by criteria (lambda)

* **ExpandAllNodes()** – expand all nodes in the RadOrgChart

* **ExpandNodes()** - expand nodes in the RadOrgChart by criteria (lambda)

Here is an example how to enable the Expand/Collapse functionality from the markup.

````ASPNET
	            <telerik:RadOrgChart ID="RadOrgChart1" runat="server" EnableCollapsing="true">
	            <Nodes>
	                <telerik:OrgChartNode>
	                    <GroupItems>
	                        <telerik:OrgChartGroupItem Text="Item1">
	                        </telerik:OrgChartGroupItem>
	                        <telerik:OrgChartGroupItem Text="Item1">
	                        </telerik:OrgChartGroupItem>
	                    </GroupItems>
	                    <Nodes>
	                        <telerik:OrgChartNode>
	                            <GroupItems>
	                                <telerik:OrgChartGroupItem Text="Item1">
	                                </telerik:OrgChartGroupItem>
	                                <telerik:OrgChartGroupItem Text="Item1">
	                                </telerik:OrgChartGroupItem>
	                            </GroupItems>
	                        </telerik:OrgChartNode>
	                        <telerik:OrgChartNode Collapsed="true">
	                            <GroupItems>
	                                <telerik:OrgChartGroupItem Text="item1">
	                                </telerik:OrgChartGroupItem>
	                            </GroupItems>
	                            <Nodes>
	                                <telerik:OrgChartNode>
	                                    <GroupItems>
	                                        <telerik:OrgChartGroupItem Text="Item1">
	                                        </telerik:OrgChartGroupItem>
	                                        <telerik:OrgChartGroupItem Text="Item1">
	                                        </telerik:OrgChartGroupItem>
	                                    </GroupItems>
	                                </telerik:OrgChartNode>
	                            </Nodes>
	                        </telerik:OrgChartNode>
	                    </Nodes>
	                </telerik:OrgChartNode>
	            </Nodes>
	        </telerik:RadOrgChart>
````



Bind Node's Collapsed property in simple binding scenario:

````ASPNET
	        <telerik:RadOrgChart runat="server" ID="RadOrgChart2" EnableCollapsing="true">
	        </telerik:RadOrgChart>
````





````C#
	        var nodes = new DataTable();
	        nodes.Columns.Add("ID");
	        nodes.Columns.Add("ParentID");
	        nodes.Columns.Add("Collapsed");
	        nodes.Rows.Add(new string[] { "1", null, "1" });
	        nodes.Rows.Add(new string[] { "2", "1", "0" });
	        nodes.Rows.Add(new string[] { "3", "2", "1" });
	        nodes.Rows.Add(new string[] { "4", "3", "0" });
	
	        RadOrgChart2.DataFieldID = "ID";
	        RadOrgChart2.DataFieldParentID = "ParentID";
	        RadOrgChart2.DataCollapsedField = "Collapsed";
	
	        RadOrgChart2.DataSource = nodes;
	        RadOrgChart2.DataBind();
	
````
````VB.NET
	        Dim nodes = New DataTable()
	        nodes.Columns.Add("ID")
	        nodes.Columns.Add("ParentID")
	        nodes.Columns.Add("Collapsed")
	        nodes.Rows.Add(New String() {"1", Nothing, "1"})
	        nodes.Rows.Add(New String() {"2", "1", "0"})
	        nodes.Rows.Add(New String() {"3", "2", "1"})
	        nodes.Rows.Add(New String() {"4", "3", "0"})
	
	        RadOrgChart2.DataFieldID = "ID"
	        RadOrgChart2.DataFieldParentID = "ParentID"
	        RadOrgChart2.DataCollapsedField = "Collapsed"
	
	        RadOrgChart2.DataSource = nodes
	        RadOrgChart2.DataBind()
	
	        '#End Region
	
	        '#Region "expandcollapse_groupenabled_binding_1"
	
	        Dim employees = New DataTable()
	        employees.Columns.Add("EmployeeID")
	        employees.Columns.Add("TeamID")
	        employees.Columns.Add("Name")
	        employees.Rows.Add(New String() {"1", "1", "Ken"})
	        employees.Rows.Add(New String() {"2", "2", "Arnold"})
	        employees.Rows.Add(New String() {"3", "3", "Tim"})
	        employees.Rows.Add(New String() {"4", "4", "David"})
	
	        Dim teams = New DataTable()
	        teams.Columns.Add("TeamID")
	        teams.Columns.Add("ReportsTo")
	        teams.Columns.Add("Team")
	        teams.Columns.Add("Collapsed")
	        teams.Rows.Add(New String() {"1", Nothing, "Management", "1"})
	        teams.Rows.Add(New String() {"2", "1", "Dev", "1"})
	        teams.Rows.Add(New String() {"3", "2", "QA", "1"})
	        teams.Rows.Add(New String() {"4", "1", "Support", "0"})
	
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "TeamID"
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ReportsTo"
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataCollapsedField = "Collapsed"
	
	        RadOrgChart3.RenderedFields.NodeFields.Add(New Telerik.Web.UI.OrgChartRenderedField() With {.DataField = "Team"})
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataSource = teams
	
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldID = "EmployeeID"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldNodeID = "TeamID"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataTextField = "Name"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataSource = employees
	
	        RadOrgChart3.DataBind()
	
	        '#End Region
	
	        '#Region  "group_expandcollapse_1"
	
	        Dim employeesData = New DataTable()
	        employeesData.Columns.Add("EmployeeID")
	        employeesData.Columns.Add("TeamID")
	        employeesData.Columns.Add("Name")
	        employeesData.Rows.Add(New String() {"1", "1", "Ken"})
	        employeesData.Rows.Add(New String() {"2", "1", "Kate"})
	        employeesData.Rows.Add(New String() {"3", "2", "Arnold"})
	        employeesData.Rows.Add(New String() {"4", "2", "Peter"})
	        employeesData.Rows.Add(New String() {"5", "3", "Tim"})
	        employeesData.Rows.Add(New String() {"6", "3", "John"})
	        employeesData.Rows.Add(New String() {"7", "4", "David"})
	        employeesData.Rows.Add(New String() {"8", "4", "Joe"})
	
	        Dim teamsData = New DataTable()
	        teamsData.Columns.Add("TeamID")
	        teamsData.Columns.Add("ReportsTo")
	        teamsData.Columns.Add("Team")
	        teamsData.Columns.Add("GroupCollapsed")
	        teamsData.Rows.Add(New String() {"1", Nothing, "Management", "1"})
	        teamsData.Rows.Add(New String() {"2", "1", "Dev", "1"})
	        teamsData.Rows.Add(New String() {"3", "2", "QA", "1"})
	        teamsData.Rows.Add(New String() {"4", "1", "Support", "0"})
	
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "TeamID"
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ReportsTo"
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataGroupCollapsedField = "GroupCollapsed"
	
	        RadOrgChart5.RenderedFields.NodeFields.Add(New Telerik.Web.UI.OrgChartRenderedField() With {.DataField = "Team"})
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataSource = teamsData
	
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataFieldID = "EmployeeID"
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataFieldNodeID = "TeamID"
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataTextField = "Name"
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataSource = employeesData
	
	        RadOrgChart5.DataBind()
	
	        '#End Region
	    End Sub
	End Class




Bind Node's Collapsed property in group-enabled binding scenario:

````ASPNET
	        <telerik:RadOrgChart runat="server" ID="RadOrgChart3" EnableCollapsing="true">
	        </telerik:RadOrgChart>
````









````VB.NET
	
	        Dim employees = New DataTable()
	        employees.Columns.Add("EmployeeID")
	        employees.Columns.Add("TeamID")
	        employees.Columns.Add("Name")
	        employees.Rows.Add(New String() {"1", "1", "Ken"})
	        employees.Rows.Add(New String() {"2", "2", "Arnold"})
	        employees.Rows.Add(New String() {"3", "3", "Tim"})
	        employees.Rows.Add(New String() {"4", "4", "David"})
	
	        Dim teams = New DataTable()
	        teams.Columns.Add("TeamID")
	        teams.Columns.Add("ReportsTo")
	        teams.Columns.Add("Team")
	        teams.Columns.Add("Collapsed")
	        teams.Rows.Add(New String() {"1", Nothing, "Management", "1"})
	        teams.Rows.Add(New String() {"2", "1", "Dev", "1"})
	        teams.Rows.Add(New String() {"3", "2", "QA", "1"})
	        teams.Rows.Add(New String() {"4", "1", "Support", "0"})
	
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "TeamID"
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ReportsTo"
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataCollapsedField = "Collapsed"
	
	        RadOrgChart3.RenderedFields.NodeFields.Add(New Telerik.Web.UI.OrgChartRenderedField() With {.DataField = "Team"})
	        RadOrgChart3.GroupEnabledBinding.NodeBindingSettings.DataSource = teams
	
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldID = "EmployeeID"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataFieldNodeID = "TeamID"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataTextField = "Name"
	        RadOrgChart3.GroupEnabledBinding.GroupItemBindingSettings.DataSource = employees
	
	        RadOrgChart3.DataBind()
	
	        '#End Region
	
	        '#Region  "group_expandcollapse_1"
	
	        Dim employeesData = New DataTable()
	        employeesData.Columns.Add("EmployeeID")
	        employeesData.Columns.Add("TeamID")
	        employeesData.Columns.Add("Name")
	        employeesData.Rows.Add(New String() {"1", "1", "Ken"})
	        employeesData.Rows.Add(New String() {"2", "1", "Kate"})
	        employeesData.Rows.Add(New String() {"3", "2", "Arnold"})
	        employeesData.Rows.Add(New String() {"4", "2", "Peter"})
	        employeesData.Rows.Add(New String() {"5", "3", "Tim"})
	        employeesData.Rows.Add(New String() {"6", "3", "John"})
	        employeesData.Rows.Add(New String() {"7", "4", "David"})
	        employeesData.Rows.Add(New String() {"8", "4", "Joe"})
	
	        Dim teamsData = New DataTable()
	        teamsData.Columns.Add("TeamID")
	        teamsData.Columns.Add("ReportsTo")
	        teamsData.Columns.Add("Team")
	        teamsData.Columns.Add("GroupCollapsed")
	        teamsData.Rows.Add(New String() {"1", Nothing, "Management", "1"})
	        teamsData.Rows.Add(New String() {"2", "1", "Dev", "1"})
	        teamsData.Rows.Add(New String() {"3", "2", "QA", "1"})
	        teamsData.Rows.Add(New String() {"4", "1", "Support", "0"})
	
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataFieldID = "TeamID"
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataFieldParentID = "ReportsTo"
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataGroupCollapsedField = "GroupCollapsed"
	
	        RadOrgChart5.RenderedFields.NodeFields.Add(New Telerik.Web.UI.OrgChartRenderedField() With {.DataField = "Team"})
	        RadOrgChart5.GroupEnabledBinding.NodeBindingSettings.DataSource = teamsData
	
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataFieldID = "EmployeeID"
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataFieldNodeID = "TeamID"
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataTextField = "Name"
	        RadOrgChart5.GroupEnabledBinding.GroupItemBindingSettings.DataSource = employeesData
	
	        RadOrgChart5.DataBind()
	
	        '#End Region
	    End Sub
	End Class




## Expand/Collapse Groups

RadOrgChart also supports Expand/Collapse of a **Group**. The functionality could be enabled by setting **EnableGroupCollapsing** property to true. The functionality is available when a Node has more than one GroupItem. DataGroupCollapsedField property (in the group-enabled binding settings) gets or sets the data field holding the GroupCollapsed property for the currently bound Node. You can set Group’s Expand/Collapse state by setting GroupCollapsed property of the Node.

![Expand/Collapse Group](images/radorgchart_expand_collapse_group.PNG)

To further customize the functionality of the RadOrgChart control there are also several server-side methods:

* **CollapseAllGroups()**– collapse all groups in the RadOrgChart

* **CollapseGroups()**- collapse groups in the RadOrgChart by criteria (lambda)

* **ExpandAllGroups()**– expand all groups in the RadOrgChart

* **ExpandGroups()**- expand groups in the RadOrgChart by criteria (lambda)

Here is an example how to enable the Expanding/Collapsing of a Group from the markup.

````ASPNET
	        <telerik:RadOrgChart runat="server" ID="RadOrgChart4" EnableGroupCollapsing="true">
	            <Nodes>
	                <telerik:OrgChartNode>
	                    <GroupItems>
	                        <telerik:OrgChartGroupItem Text="Item1">
	                        </telerik:OrgChartGroupItem>
	                        <telerik:OrgChartGroupItem Text="Item1">
	                        </telerik:OrgChartGroupItem>
	                    </GroupItems>
	                    <Nodes>
	                        <telerik:OrgChartNode GroupCollapsed="true">
	                            <GroupItems>
	                                <telerik:OrgChartGroupItem Text="Item1">
	                                </telerik:OrgChartGroupItem>
	                                <telerik:OrgChartGroupItem Text="Item1">
	                                </telerik:OrgChartGroupItem>
	                            </GroupItems>
	                        </telerik:OrgChartNode>
	                    </Nodes>
	                </telerik:OrgChartNode>
	            </Nodes>
	        </telerik:RadOrgChart>
````



Bind Node's GroupCollapsed property in group-enabled binding:

````ASPNET
	        <telerik:RadOrgChart runat="server" ID="RadOrgChart5" EnableGroupCollapsing="true">
	        </telerik:RadOrgChart>
````














## Persist Expand/Collapse State of the Nodes

When the **PersistExpandCollapseState** propery is set to **true** the nodes in RadOrgChart persist their **Collapsed** and **GroupCollapsed** state after postback. The default value of the **PersistExpandCollapseState** is **true** so if such functionality is not wanted it should be set to **false**.

# See Also

 * [OrgChart - Expand/Collapse Demo](http://demos.telerik.com/aspnet-ajax/orgchart/examples/expandcollapse/defaultcs.aspx)
