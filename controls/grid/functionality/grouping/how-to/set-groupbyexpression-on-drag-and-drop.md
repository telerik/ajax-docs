---
title: Set GroupByExpression on Drag and Drop
page_title: Set GroupByExpression on Drag and Drop | UI for ASP.NET AJAX Documentation
description: Set GroupByExpression on Drag and Drop
slug: grid/functionality/grouping/how-to/set-groupbyexpression-on-drag-and-drop
tags: set,groupbyexpression,on,drag,and,drop
published: True
position: 3
---

# Set GroupByExpression on Drag and Drop



## 

You can dynamically alter the __GroupByExpression__ that is added when the user drags a column header to the group panel.

To change the __GroupByExpression__ dynamically when the user drags a column header to the group panel, use the __GroupsChanging__ server-side event. This is illustrated in the following example:

>tabbedCode

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" ShowGroupPanel="true"
	    OnGroupsChanging="RadGrid1_GroupsChanging">
	    <ClientSettings AllowDragToGroup="True" />
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    SelectCommand="SELECT * FROM Orders">
	  </asp:SqlDataSource>
````



````C#
	    protected void RadGrid1_GroupsChanging(object source, GridGroupsChangingEventArgs e)
	    {  //Expression is added (by drag/drop on group panel)
	        if (e.Action == GridGroupsChangingAction.Group)
	        {
	            if (e.Expression.GroupByFields[0].FieldName != "CustomerID")
	            {
	                if (!IsGroupedByCustomer(RadGrid1.MasterTableView.GroupByExpressions))
	                {
	                    GridGroupByField customerGroupField = new GridGroupByField();
	                    customerGroupField.FieldName = "CustomerID";
	                    e.Expression.SelectFields.Insert(0, customerGroupField);
	                    e.Expression.GroupByFields.Insert(0, customerGroupField);
	                }
	            }
	        }
	    }
	    private Boolean IsGroupedByCustomer(GridGroupByExpressionCollection groups)
	    {
	        foreach (GridGroupByExpression e in groups)
	        {
	            foreach (GridGroupByField f in e.GroupByFields) if (f.FieldName == "CustomerID")
	                    return true;
	        }
	        return false;
	    }
````



````VB.NET
	
	    Protected Sub RadGrid1_GroupsChanging(ByVal source As Object, ByVal e As GridGroupsChangingEventArgs)
	        'Expression is added (by drag/drop on group panel)
	        If e.Action = GridGroupsChangingAction.Group Then
	            If e.Expression.GroupByFields(0).FieldName <> "CustomerID" Then
	                If Not IsGroupedByCustomer(RadGrid1.MasterTableView.GroupByExpressions) Then
	                    customerGroupField.FieldName = "CustomerID"
	                    e.Expression.SelectFields.Insert(0, customerGroupField)
	                    e.Expression.GroupByFields.Insert(0, customerGroupField)
	                End If
	            End If
	        End If
	    End Sub
	
	    Private Function IsGroupedByCustomer(ByVal groups As GridGroupByExpressionCollection) As Boolean
	        For Each e As GridGroupByExpression In groups
	            For Each f As GridGroupByField In e.GroupByFields
	                If f.FieldName = "CustomerID" Then
	                    Return True
	                End If
	            Next
	        Next
	        Return False
	    End Function
	
````


>end
