---
title: How to Create An Entry or Select a Node
page_title: How to Create An Entry or Select a Node | UI for ASP.NET AJAX Documentation
description: How to Create An Entry or Select a Node
slug: dropdowntree/how-to/how-to-create-an-entry-or-select-a-node
tags: how,to,create,an,entry,or,select,a,node
published: True
position: 1
---

# How to Create An Entry or Select a Node



## How to Create An Entry or Select a Node

By creating an entry with the CreateEntry() a node can be set as selected (or checked when the CheckBoxes functionality is enabled). This article describes how to select a node from the dropdown of the RadDropDownTree control.

>note As of **Q2 2013** release of the RadControls controls this scenario is supported also when the **CheckBoxes** property is set to **TriState** .
>


Below is the example demonstrating how to achieve that by using the NodeDataBound event:

````ASPNET
	        <telerik:RadDropDownTree runat="server" ID="RadDropDownTree1" CheckBoxes="CheckChildNodes"
	            Width="300px" DataFieldID="ID" DefaultMessage="Select ..." DataFieldParentID="ParentID"
	            DataTextField="Text">  
	            <DropDownSettings  Width="300px"/>
	        </telerik:RadDropDownTree>
````





````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	
	        RadDropDownTree1.DataSource = GetData();
	        RadDropDownTree1.NodeDataBound += RadDropDownTree1_NodeDataBound;
	
	        if (!IsPostBack)
	        {
	            RadDropDownTree1.DataBind();
	        }
	    }
	
	    void RadDropDownTree1_NodeDataBound(object sender, Telerik.Web.UI.DropDownTreeNodeDataBoundEventArguments e)
	    {
	        if (e.DropDownTreeNode.Text == "Text2 " || e.DropDownTreeNode.Text == "Text4 ")
	            e.DropDownTreeNode.CreateEntry();
	    }
	
	    public DataTable GetData()
	    {
	        DataTable table = new DataTable();
	        table.Columns.Add("ID");
	        table.Columns.Add("ParentID");
	        table.Columns.Add("Value");
	        table.Columns.Add("Text");
	       
	
	        table.Rows.Add(new String[] { "1", null, "customValue1", "Text1 "});
	        table.Rows.Add(new String[] { "2", "1", "customValue2", "Text2 " });
	        table.Rows.Add(new String[] { "3", "2", "customValue3", "Text3 " });
	        table.Rows.Add(new String[] { "4", "3", "customValue4", "Text4 " });
	        table.Rows.Add(new String[] { "5", "3", "customValue5", "Text5 " });
	        table.Rows.Add(new String[] { "6", "5", "customValue2", "Text6 " });
	        table.Rows.Add(new String[] { "7", "6", "customValue2", "Text7 " });
	        table.Rows.Add(new String[] { "8", "7", "customValue2", "Text8 " });
	        table.Rows.Add(new String[] { "9", "1", "customValue9", "Text9 " });
	        table.Rows.Add(new String[] { "10", "1", "customValue10", "Text10 " });
	
	        return table;
	    }
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	
	        RadDropDownTree1.DataSource = GetData()
	
	        AddHandler RadDropDownTree1.NodeDataBound, AddressOf RadDropDownTree1_NodeDataBound
	
	        If Not IsPostBack Then
	            RadDropDownTree1.DataBind()
	        End If
	    End Sub
	
	    Private Sub RadDropDownTree1_NodeDataBound(sender As Object, e As Telerik.Web.UI.DropDownTreeNodeDataBoundEventArguments)
	        If e.DropDownTreeNode.Text = "Text2 " OrElse e.DropDownTreeNode.Text = "Text4 " Then
	            e.DropDownTreeNode.CreateEntry()
	        End If
	    End Sub
	
	    Public Function GetData() As DataTable
	        Dim table As New DataTable()
	        table.Columns.Add("ID")
	        table.Columns.Add("ParentID")
	        table.Columns.Add("Value")
	        table.Columns.Add("Text")
	
	
	        table.Rows.Add(New [String]() {"1", Nothing, "customValue1", "Text1 "})
	        table.Rows.Add(New [String]() {"2", "1", "customValue2", "Text2 "})
	        table.Rows.Add(New [String]() {"3", "2", "customValue3", "Text3 "})
	        table.Rows.Add(New [String]() {"4", "3", "customValue4", "Text4 "})
	        table.Rows.Add(New [String]() {"5", "3", "customValue5", "Text5 "})
	        table.Rows.Add(New [String]() {"6", "5", "customValue2", "Text6 "})
	        table.Rows.Add(New [String]() {"7", "6", "customValue2", "Text7 "})
	        table.Rows.Add(New [String]() {"8", "7", "customValue2", "Text8 "})
	        table.Rows.Add(New [String]() {"9", "1", "customValue9", "Text9 "})
	        table.Rows.Add(New [String]() {"10", "1", "customValue10", "Text10 "})
	
	        Return table
	    End Function
````

