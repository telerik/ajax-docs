---
title: Editing Node Text When Using Templates
page_title: Editing Node Text When Using Templates | RadTreeView for ASP.NET AJAX Documentation
description: Editing Node Text When Using Templates
slug: treeview/troubleshooting/editing-node-text-when-using-templates
tags: editing,node,text,when,using,templates
published: True
position: 4
---

# Editing Node Text When Using Templates



## 

When using Templates for the Nodes of a **RadTreeView**, editing of the Text of these Nodes becomes a complicated task.

The approach demonstrated in the example below is an elegant way to edit Node Text, save it in a database and then populate the **TreeView** with the new data.

**Example:**

This example shows a **TreeView** that is bound to a database. It uses Templates for its Nodes. The Template displays the Text of Nodes using the **DataBinder.Eval** expression.

````ASPNET
<telerik:RadTreeView ID="RadTreeView1" runat="server" AllowNodeEditing="true" OnNodeEdit="RadTreeView1_NodeEdit">
    <NodeTemplate>
        node text:
        <%# DataBinder.Eval(Container.DataItem, "Text") %>
    </NodeTemplate>
</telerik:RadTreeView>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        GenerateTreeView();
    }
}
protected void RadTreeView1_NodeEdit(object sender, Telerik.Web.UI.RadTreeNodeEditEventArgs e)
{
    RadTreeNode nodeEdited = e.Node;
    string newText = e.Text;
    OleDbConnection dbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/Tree.mdb"));
    //Update the text of the corresponding row in the database
    OleDbParameter pNewText = new OleDbParameter("@newText", newText);
    OleDbParameter pOldText = new OleDbParameter("@oldText", nodeEdited.Text);
    string cmdString = "Update Links Set [Text] = @NewText WHERE [Text] = @oldText";
    OleDbCommand dbCommand = new OleDbCommand(cmdString, dbCon);
    dbCommand.CommandType = CommandType.Text;
    dbCommand.Parameters.Add(pNewText);
    dbCommand.Parameters.Add(pOldText);
    try
    {
        dbCon.Open();
        dbCommand.ExecuteNonQuery();
    }
    finally
    {
        dbCon.Close();
    }
    GenerateTreeView();
}
private void GenerateTreeView()
{
    OleDbConnection dbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/Tree.mdb"));
    dbCon.Open();
    OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM Links", dbCon);
    DataSet ds = new DataSet();
    adapter.Fill(ds);
    RadTreeView1.DataFieldID = "id";
    RadTreeView1.DataFieldParentID = "parentId";
    RadTreeView1.DataTextField = "Text";
    RadTreeView1.DataSource = ds;
    RadTreeView1.DataBind();
    RadTreeView1.ExpandAllNodes();
} 
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not Page.IsPostBack Then
        GenerateTreeView()
    End If
End Sub
Protected Sub RadTreeView1_NodeEdit(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEditEventArgs)
    Dim nodeEdited As RadTreeNode = e.Node
    Dim newText As String = e.Text
    Dim dbCon As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/Tree.mdb"))
    'Update the text of the corresponding row in the database
    Dim pNewText As New OleDbParameter("@newText", newText)
    Dim pOldText As New OleDbParameter("@oldText", nodeEdited.Text)
    Dim cmdString As String = "Update Links Set [Text] = @NewText WHERE [Text] = @oldText"
    Dim dbCommand As New OleDbCommand(cmdString, dbCon)
    dbCommand.CommandType = CommandType.Text
    dbCommand.Parameters.Add(pNewText)
    dbCommand.Parameters.Add(pOldText)
    Try
        dbCon.Open()
        dbCommand.ExecuteNonQuery()
    Finally
        dbCon.Close()
    End Try
    GenerateTreeView()
End Sub
Private Sub GenerateTreeView()
    Dim dbCon As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/Tree.mdb"))
    dbCon.Open()
    Dim adapter As New OleDbDataAdapter("SELECT * FROM Links", dbCon)
    Dim ds As New DataSet()
    adapter.Fill(ds)
    RadTreeView1.DataFieldID = "id"
    RadTreeView1.DataFieldParentID = "parentId"
    RadTreeView1.DataTextField = "Text"
    RadTreeView1.DataSource = ds
    RadTreeView1.DataBind()
    RadTreeView1.ExpandAllNodes()
End Sub
````


