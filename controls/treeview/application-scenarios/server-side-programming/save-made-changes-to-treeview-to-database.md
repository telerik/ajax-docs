---
title: Save Made Changes to TreeView to Database
page_title: Save Made Changes to TreeView to Database | UI for ASP.NET AJAX Documentation
description: Save Made Changes to TreeView to Database
slug: treeview/application-scenarios/server-side-programming/save-made-changes-to-treeview-to-database
tags: save,made,changes,to,treeview,to,database
published: True
position: 1
---

# Save Made Changes to TreeView to Database



## 

This example demonstrates a simple mechanism using __Access database__ with single self-referencing table containing columns __id__, __parentId__ and __Text__.

The structure of the treeview is loaded from this database in the __Page_Load__ event. Then the user edits the text of random nodes in the treeview and hits the __Save__ button on the page. Thus, a postback is triggered and the updated information is saved back in the database file.

The code below shows the approach:

>tabbedCode

````C#
	
	    protected System.Web.UI.WebControls.Button Button1;
	    protected Telerik.Web.UI.RadTreeView RadTree1;
	    protected OleDbCommand command;
	    protected OleDbConnection con;
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            GenerateTreeView();
	        }
	    }
	    private void GenerateTreeView()
	    {
	        OleDbConnection dbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("treeSave.mdb"));
	        //the database is in the web app root!
	        dbCon.Open();
	        OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM Links", dbCon);
	        DataSet ds = new DataSet();
	        adapter.Fill(ds);
	        ds.Relations.Add("NodeRelation", ds.Tables[0].Columns["id"], ds.Tables[0].Columns
	        ["parentId"]);
	        foreach (DataRow dbRow in ds.Tables[0].Rows)
	        {
	            if (dbRow.IsNull("parentId"))
	            {
	                RadTreeNode node = CreateNode(dbRow["Text"].ToString(), true);
	                RadTree1.Nodes.Add(node);
	                RecursivelyPopulate(dbRow, node);
	            }
	        }
	    }
	    private void RecursivelyPopulate(DataRow dbRow, RadTreeNode node)
	    {
	        foreach (DataRow childRow in dbRow.GetChildRows("NodeRelation"))
	        {
	            RadTreeNode childNode = CreateNode(childRow["Text"].ToString(), true);
	            node.Nodes.Add(childNode);
	            RecursivelyPopulate(childRow, childNode);
	        }
	    }
	    private RadTreeNode CreateNode(string text, bool expanded)
	    {
	        RadTreeNode node = new RadTreeNode(text);
	        node.Expanded = true;
	        return node;
	    }
	
	    private void RadTree1_NodeEdit(object o, Telerik.Web.UI.RadTreeNodeEditEventArgs e)
	    {
	        RadTreeNode edit = e.Node;
	        String text = e.Text;
	        edit.Text = text;
	    }
	    private void Button1_Click(object sender, System.EventArgs e)
	    {
	        con = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" +
	        Server.MapPath("treeSave.mdb"));
	        con.Open();
	        command = new OleDbCommand("DELETE * from Links", con);
	        command.ExecuteNonQuery();
	        con.Close();
	        UpdateNodes();
	    }
	    private void UpdateNodes()
	    {
	        OleDbConnection con = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;DataSource=" + Server.MapPath("treeSave.mdb"));
	        con.Open();
	        IList<RadTreeNode> allNodes = RadTree1.GetAllNodes();
	        for (int i = 0; i < allNodes.Count; i++)
	        {
	            RadTreeNode node = (RadTreeNode)allNodes[i];
	            int parentId = node.ParentNode == null ? -1 : allNodes.IndexOf(node.ParentNode);
	            command = new OleDbCommand("INSERT into Links([id],parentId,[Text]) values (@ID,@parentId,@Text)", con);
	            command.Parameters.AddWithValue("ID", i.ToString());
	            if (parentId > -1)
	                command.Parameters.AddWithValue("parentId", parentId);
	            else
	                command.Parameters.AddWithValue("parentId", System.DBNull.Value);
	            command.Parameters.AddWithValue("Text", node.Text);
	            command.ExecuteNonQuery();
	        }
	        con.Close();
	    } 
````



````VB.NET
	
	    Protected Button1 As System.Web.UI.WebControls.Button
	    Protected RadTree1 As Telerik.Web.UI.RadTreeView
	    Protected command As OleDbCommand
	    Protected con As OleDbConnection
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not Page.IsPostBack Then
	            GenerateTreeView()
	        End If
	    End Sub
	    Private Sub GenerateTreeView()
	        Dim dbCon As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("treeSave.mdb"))
	        'the database is in the web app root!
	        dbCon.Open()
	        Dim adapter As New OleDbDataAdapter("SELECT * FROM Links", dbCon)
	        Dim ds As New DataSet()
	        adapter.Fill(ds)
	        ds.Relations.Add("NodeRelation", ds.Tables(0).Columns("id"), ds.Tables(0).Columns("parentId"))
	        For Each dbRow As DataRow In ds.Tables(0).Rows
	            If dbRow.IsNull("parentId") Then
	                Dim node As RadTreeNode = CreateNode(dbRow("Text").ToString(), True)
	                RadTree1.Nodes.Add(node)
	                RecursivelyPopulate(dbRow, node)
	            End If
	        Next
	    End Sub
	    Private Sub RecursivelyPopulate(ByVal dbRow As DataRow, ByVal node As RadTreeNode)
	        For Each childRow As DataRow In dbRow.GetChildRows("NodeRelation")
	            Dim childNode As RadTreeNode = CreateNode(childRow("Text").ToString(), True)
	            node.Nodes.Add(childNode)
	            RecursivelyPopulate(childRow, childNode)
	        Next
	    End Sub
	    Private Function CreateNode(ByVal text As String, ByVal expanded As Boolean) As RadTreeNode
	        Dim node As New RadTreeNode(text)
	        node.Expanded = True
	        Return node
	    End Function
	
	    Private Sub RadTree1_NodeEdit(ByVal o As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEditEventArgs)
	        Dim edit As RadTreeNode = e.Node
	        Dim text As String = e.Text
	        edit.Text = text
	    End Sub
	    Private Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
	        con = New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("treeSave.mdb"))
	        con.Open()
	        command = New OleDbCommand("DELETE * from Links", con)
	        command.ExecuteNonQuery()
	        con.Close()
	        UpdateNodes()
	    End Sub
	    Private Sub UpdateNodes()
	        Dim con As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;DataSource=" + Server.MapPath("treeSave.mdb"))
	        con.Open()
	        Dim allNodes As IList(Of RadTreeNode) = RadTree1.GetAllNodes()
	        Dim i As Integer = 0
	        While i < allNodes.Count
	            Dim node As RadTreeNode = DirectCast(allNodes(i), RadTreeNode)
	            Dim parentId As Integer = IIf(node.ParentNode Is Nothing, -1, allNodes.IndexOf(node.ParentNode))
	            command = New OleDbCommand("INSERT into Links([id],parentId,[Text]) values (@ID,@parentId,@Text)", con)
	            command.Parameters.AddWithValue("ID", i.ToString())
	            If parentId > -1 Then
	                command.Parameters.AddWithValue("parentId", parentId)
	            Else
	                command.Parameters.AddWithValue("parentId", System.DBNull.Value)
	            End If
	            command.Parameters.AddWithValue("Text", node.Text)
	            command.ExecuteNonQuery()
	            System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
	        End While
	        con.Close()
	    End Sub
	
````


>end

# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})
