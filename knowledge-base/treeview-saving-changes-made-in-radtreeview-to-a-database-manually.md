---
title: Saving changes made in RadTreeView to a database manually
description: Saving changes made in RadTreeView to a database manually. Check it now!
type: how-to
page_title: Saving changes made in RadTreeView to a database manually
slug: treeview-saving-changes-made-in-radtreeview-to-a-database-manually
res_type: kb
---

## How to 

Save the changes made in RadTreeView to a database. 

## Solution

The example demonstrates a simple mechanism to attain such functionality using **Access database** with single self-referencing table containing columns **id**,**parentId** and **Text**. The structure of the treeview is loaded from this database in the **PageLoad**. Then the user edits the text of random nodes in the treeview and hits the **Save** button on the page. Thus a postback is triggered and the updated information is saved back in the database file.  
Please review the code below for your better understanding:  

````ASPX
    private void GenerateTreeView() 
    { 
        OleDbConnection dbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("App_Data/Tree.mdb")); 
        OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM Links", dbCon); 
        DataSet ds = new DataSet(); 
        adapter.Fill(ds); 
        ds.Relations.Add("NodeRelation", ds.Tables[0].Columns["id"], ds.Tables[0].Columns["parentId"]); 
        foreach (DataRow dbRow in ds.Tables[0].Rows) 
        { 
            if (dbRow.IsNull("parentId")) 
            { 
                RadTreeNode node = CreateNode(dbRow["Text"].ToString(), true); 
                RadTreeView1.Nodes.Add(node); 
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
    private void Page_Load(object sender, System.EventArgs e) 
    { 
        if (!Page.IsPostBack) 
        { 
            GenerateTreeView(); 
        } 
    } 
    protected void RadTreeView1_NodeEdit(object o, RadTreeNodeEditEventArgs e) 
    { 
        RadTreeNode edit = e.Node; 
        edit.Text = e.Text; 
    } 
    protected void Button1_Click(object sender, System.EventArgs e) 
    { 
        OleDbConnection con = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("App_Data/Tree.mdb")); 
        OleDbCommand command = new OleDbCommand("DELETE * from Links", con); 
        con.Open(); 
        command.ExecuteNonQuery(); 
        con.Close(); 
        UpdateNodes(); 
    } 
    private void UpdateNodes() 
    { 
        OleDbConnection con = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("App_Data/Tree.mdb")); 
        con.Open(); 
        IList<RadTreeNode> allNodes = RadTreeView1.GetAllNodes(); 
        for (int i = 0; i < allNodes.Count; i++) 
        { 
            RadTreeNode node = (RadTreeNode) allNodes[i]; 
            int parentId = allNodes.IndexOf(node.ParentNode); 
            OleDbCommand command = new OleDbCommand("INSERT into Links([id], parentId,[Text]) values (@ID,@parentId,@Text)", con); 
            command.Parameters.AddWithValue("ID", i.ToString()); 
            if (parentId > -1) 
            { 
                command.Parameters.AddWithValue("parentId", parentId); 
            } 
            else 
            { 
                command.Parameters.AddWithValue("parentId", System.DBNull.Value); 
            } 
            command.Parameters.AddWithValue("Text", node.Text); 
            command.ExecuteNonQuery(); 
        } 
        con.Close(); 
    } 
````
````VB
    Private Sub GenerateTreeView() 
        Dim dbCon As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("App_Data/Tree.mdb")) 
        Dim adapter As New OleDbDataAdapter("SELECT * FROM Links", dbCon) 
        Dim ds As New DataSet() 
        adapter.Fill(ds) 
        ds.Relations.Add("NodeRelation", ds.Tables(0).Columns("id"), ds.Tables(0).Columns("parentId")) 
        For Each dbRow As DataRow In ds.Tables(0).Rows 
            If dbRow.IsNull("parentId") Then 
                Dim node As RadTreeNode = CreateNode(dbRow("Text").ToString(), True) 
                RadTreeView1.Nodes.Add(node) 
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
    Private Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load 
        If Not Page.IsPostBack Then 
            GenerateTreeView() 
        End If 
    End Sub 
    Protected Sub RadTreeView1_NodeEdit(ByVal o As Object, ByVal e As RadTreeNodeEditEventArgs) 
        Dim edit As RadTreeNode = e.Node 
        edit.Text = e.Text 
    End Sub 
    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) 
        Dim con As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("App_Data/Tree.mdb")) 
        Dim command As New OleDbCommand("DELETE * from Links", con) 
        con.Open() 
        command.ExecuteNonQuery() 
        con.Close() 
        UpdateNodes() 
    End Sub 
    Private Sub UpdateNodes() 
        Dim con As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("App_Data/Tree.mdb")) 
        con.Open() 
        Dim allNodes As IList(Of RadTreeNode) = RadTreeView1.GetAllNodes() 
        Dim i As Integer 
        For i = 0 To allNodes.Count - 1 
            Dim node As RadTreeNode = DirectCast(allNodes(i), RadTreeNode) 
            Dim parentId As Integer = allNodes.IndexOf(node.ParentNode) 
            Dim command As New OleDbCommand("INSERT into Links([id], parentId,[Text]) values (@ID,@parentId,@Text)", con) 
            command.Parameters.AddWithValue("ID", i.ToString()) 
            If parentId > -1 Then 
                command.Parameters.AddWithValue("parentId", parentId) 
            Else 
                command.Parameters.AddWithValue("parentId", System.DBNull.Value) 
            End If 
            command.Parameters.AddWithValue("Text", node.Text) 
            command.ExecuteNonQuery() 
        Next i 
        con.Close() 
    End Sub 
````

 