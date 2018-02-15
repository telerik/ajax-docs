---
title: Updating Values Using InPlace and EditForms Modes
page_title: Updating Values Using InPlace and EditForms Modes | RadGrid for ASP.NET AJAX Documentation
description: Updating Values Using InPlace and EditForms Modes
slug: grid/data-editing/update-records/updating-values-using-inplace-and-editforms-modes
tags: updating,values,using,inplace,and,editforms,modes
published: True
position: 0
---

# Updating Values Using InPlace and EditForms Modes



There are three common techniques for updating a grid row when the user edits it using an [inplace editor]({%slug grid/data-editing/edit-mode/in-place%}) or [edit form]({%slug grid/data-editing/edit-mode/edit-forms%}):

1. Enable [automatic data source operations]({%slug grid/data-editing/automatic-datasource-operations%}) for the grid: This approach requires no code on your part. For a live example illustrating this approach, see [Automatic Operations](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/AllEditableColumns/DefaultCS.aspx).

1. Use the table view's **ExtractValuesFromItem(dictonaryObject, editedItem)** method: For this approach, create an empty dictionary object and pass it as the first parameter of the **ExtractValuesFromItem** method. Pass the edited item as the second parameter. The **ExtractValuesFromItem** method fills the dictionary object with **key/value** pairs where each **key** is the **DataField** of an edited field column and the corresponding **value** is the new data entered by the user.

1. Fetch the data from each edited field individually through the auto-generated column editors: For this approach, you need to iterate through the editable fields of the edited row and modify the grid source on every iteration.

When using the second or third approach, you can refresh the grid content inside an **UpdateCommand** event handler. The following examples illustrate these techniques. They both use the same grid declaration:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource"
  OnUpdateCommand="RadGrid1_UpdateCommand">
  <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
    <Columns>
      <telerik:GridBoundColumn HeaderText="OrderID" DataField="OrderID" ReadOnly="True"
        UniqueName="OrderID" Display="False" />
      <telerik:GridBoundColumn HeaderText="EmployeeID" DataField="EmployeeID" UniqueName="EmployeeID" />
      <telerik:GridBoundColumn HeaderText="OrderDate" DataField="OrderDate" UniqueName="OrderDate" />
      <telerik:GridBoundColumn HeaderText="ShipName" DataField="ShipName" UniqueName="ShipName" />
      <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
    </Columns>
  </MasterTableView></telerik:RadGrid><asp:Label ID="Label1" runat="server" />
````



Both examples also use a **ViewState** property (named "GridSource") for maintaining the grid's data source, and have the same **NeedDataSource** event handler:



````C#
private DataTable GridSource
{
  get
  {
    Object obj = this.ViewState["_gds"];
    if(obj != null)
    {
      return (DataTable)obj;
    }
    else
    {
      OleDbConnection conn = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" +
        System.Web.HttpContext.Current.Server.MapPath( "~/App_Data/Nwind.mdb"));
      OleDbDataAdapter adapter = new OleDbDataAdapter();
      adapter.SelectCommand = new OleDbCommand("SELECT TOP 10 OrderID, EmployeeID, OrderDate, ShipName FROM Orders", conn);
      DataTable table = new DataTable();
      conn.Open();
      try
      {
        adapter.Fill(table);
      }
      finally
      {
        conn.Close();
      }
      this.ViewState[ "_gds"] = table;
      return table;
    }
  }
}
protected void RadGrid1_NeedDataSource(object source,
     Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
  RadGrid1.DataSource = this.GridSource;
} 
````
````VB
Private ReadOnly Property GridSource As DataTable
    Get
        Dim obj As Object = Me.ViewState("_gds")
        If (Not obj Is Nothing) Then
            Return CType(obj, DataTable)
        Else
 Dim conn As New OleDbConnection"Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("~/App_Data/Nwind.mdb")
            Dim conn As New OleDbConnection(cnctnString)
            Dim adapter As New OleDbDataAdapter()
            adapter.SelectCommand = New OleDbCommand("SELECT TOP 10 OrderID, EmployeeID, OrderDate, ShipName FROM Orders", conn)
            Dim table As New DataTable()
            conn.Open()
            Try
                adapter.Fill(table)
            Finally
                conn.Close()
            End Try
            Me.ViewState("_gds") = table
            Return table
        End If
    End Get
End Property
Private Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = Me.GridSource
End Sub
````


## Example 1: Using ExtractValuesFromItem



````C#
protected void RadGrid1_UpdateCommand(object source,
        Telerik.Web.UI.GridCommandEventArgs e)
{
   GridEditableItem editedItem = e.Item as GridEditableItem;
   DataTable ordersTable = this.GridSource;
   //Locate the changed row in the DataSource
   DataRow[] changedRows = ordersTable.Select("OrderID = " +
             editedItem.OwnerTableView.DataKeyValues[editedItem.ItemIndex]["OrderID"].ToString());
   if (changedRows.Length != 1)
   {
       this.Label1.Text += "Unable to locate the Order for updating.";
       e.Canceled = true;
       return;
   }
   //Update new values
   Hashtable newValues = new Hashtable();
   e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem);
   changedRows[0].BeginEdit();
   try
   {
       foreach (DictionaryEntry entry in newValues)
       {
           changedRows[0][(string)entry.Key] = entry.Value;
       }
       changedRows[0].EndEdit();
   }
   catch (Exception ex)
   {
       changedRows[0].CancelEdit();
       Label1.Text += "Unable to update Orders. Reason: " + ex.Message;
       e.Canceled = true;
   }
} 		
````
````VB
Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
    Dim editedItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
    Dim ordersTable As DataTable = Me.GridSource
    'Locate the changed row in the DataSource
    Dim changedRows As DataRow() = ordersTable.Select("OrderID = " + editedItem.OwnerTableView.DataKeyValues(editedItem.ItemIndex)("OrderID").ToString())
    If changedRows.Length <> 1 Then
        Me.Label1.Text += "Unable to locate the Order for updating."
        e.Canceled = True
        Return
    End If
    'Update new values
    Dim newValues As New Hashtable()
    e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem)
    changedRows(0).BeginEdit()
    Try
        For Each entry As DictionaryEntry In newValues
            changedRows(0)(DirectCast(entry.Key, String)) = entry.Value
        Next
        changedRows(0).EndEdit()
    Catch ex As Exception
        changedRows(0).CancelEdit()
        Label1.Text += "Unable to update Orders. Reason: " + ex.Message
        e.Canceled = True
    End Try
End Sub
````


## Example 2: Using the auto-generated column editors



````C#
private void RadGrid1_UpdateCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
Label1.Text += " Table to be updated: " + e.Item.OwnerTableView.DataMember + "<br>";
GridEditableItem editedItem = e.Item as GridEditableItem;
GridEditManager editMan = editedItem.EditManager;
foreach( GridColumn column in e.Item.OwnerTableView.RenderColumns )
{
 if ( column is IGridEditableColumn )
 {
  IGridEditableColumn editableCol = (column as IGridEditableColumn);
  if ( editableCol.IsEditable )
  {
   IGridColumnEditor editor = editMan.GetColumnEditor( editableCol );
   string editorText = "unknown";
   object editorValue = null;
   if ( editor is GridTextColumnEditor )
   {
    editorText = (editor as GridTextColumnEditor).Text;
    editorValue = (editor as GridTextColumnEditor).Text;
   }
   if ( editor is GridBoolColumnEditor )
   {
    editorText = (editor as GridBoolColumnEditor).Value.ToString();
    editorValue = (editor as GridBoolColumnEditor).Value;
   }
   if ( editor is GridDropDownColumnEditor )
   {
    editorText = (editor as GridDropDownColumnEditor).SelectedText + "; " +
     (editor as GridDropDownColumnEditor).SelectedValue;
    editorValue = (editor as GridDropDownColumnEditor).SelectedValue;
   }
   try
   {
    DataRow[] changedRows = this.GridSource.Select( "OrderID = " + editedItem.OwnerTableView.DataKeyValues[editedItem.ItemIndex]["OrderID"].ToString());
    changedRows[0][column.UniqueName] = editorValue;
    this.GridSource.AcceptChanges();
   }
   catch(Exception ex)
   {
    Label1.Text = "<strong>Unable to set value of column '" + column.UniqueName + "'</strong> - " + ex.Message;
    e.Canceled = true;
    break;
   }
  }
 }
}
} 
````
````VB
Private Sub RadGrid1_UpdateCommand(ByVal source As System.Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.UpdateCommand
    Label1.Text += " Table to be updated: " + e.Item.OwnerTableView.DataMember + "<br>"
    Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
    Dim editMan As GridEditManager = editedItem.EditManager
    Dim column As GridColumn
    For Each column In e.Item.OwnerTableView.RenderColumns
        If TypeOf column Is IGridEditableColumn Then
            Dim editableCol As IGridEditableColumn = CType(column, IGridEditableColumn)
            If (editableCol.IsEditable) Then
                Dim editor As IGridColumnEditor = editMan.GetColumnEditor(editableCol)
                Dim editorText As String = "unknown"
                Dim editorValue As Object = Nothing
                If (TypeOf editor Is GridTextColumnEditor) Then
                    editorText = CType(editor, GridTextColumnEditor).Text
                    editorValue = CType(editor, GridTextColumnEditor).Text
                End If
                If (TypeOf editor Is GridBoolColumnEditor) Then
                    editorText = CType(editor, GridBoolColumnEditor).Value.ToString()
                    editorValue = CType(editor, GridBoolColumnEditor).Value
                End If
                If (TypeOf editor Is GridDropDownColumnEditor) Then
                    editorText = CType(editor, GridDropDownColumnEditor).SelectedText + "; " + CType(editor, GridDropDownColumnEditor).SelectedValue
                    editorValue = CType(editor, GridDropDownColumnEditor).SelectedValue
                End If
                Try
                    Dim changedRows As DataRow() = Me.GridSource.Select("OrderID = " + editedItem.OwnerTableView.DataKeyValues(editedItem.ItemIndex)("OrderID").ToString())
                    changedRows(0)(column.UniqueName) = editorValue
                    Me.GridSource.AcceptChanges()
                Catch ex As Exception
                    Label1.Text = "<strong>Unable to set value of column '" + column.UniqueName + "'</strong> - " + ex.Message
                    e.Canceled = True
                End Try
            End If
        End If
    Next
End Sub
````

## Extracting data from a Template Column

For GridTemplateColumn instances, the `ExtractValues()` method will provide data in case there is a `<%#Bind("someColumn") %>` expression in the `EditItemTemplate` or `InsertItemTemplate`. The key in the hashtable will be the field from the binding expression.

For example, the columns below will populate the hash table with data for the "someField" and "moreData" respectively, even though both have the same `DataField` setting.

````ASP.NET
<telerik:GridTemplateColumn HeaderText="template column" DataField="someColumn" UniqueName="myTemplateColumn">
    <ItemTemplate>
        <%#Eval("someColumn") %>
    </ItemTemplate>
    <EditItemTemplate>
        <asp:TextBox runat="server" ID="textbox1" Text='<%#Bind("someColumn") %>' />
    </EditItemTemplate>
    <InsertItemTemplate>
        <asp:TextBox runat="server" ID="textbox1" Text='<%#Bind("someColumn") %>' />
    </InsertItemTemplate>
</telerik:GridTemplateColumn>
<telerik:GridTemplateColumn HeaderText="second template column" DataField="someColumn" UniqueName="myTemplateColumn2">
    <ItemTemplate>
        <%#Eval("moreData") %>
    </ItemTemplate>
    <EditItemTemplate>
        <asp:TextBox runat="server" ID="textbox2" Text='<%#Bind("moreData") %>' />
    </EditItemTemplate>
    <InsertItemTemplate>
        <asp:TextBox runat="server" ID="textbox2" Text='<%#Bind("moreData") %>' />
    </InsertItemTemplate>
</telerik:GridTemplateColumn>
````

For more complex scenarios or when you cannot use binding expressions, you need to use `.FindControl()` to access the custom controls and extract data: [Accessing Controls in Template Column]({%slug grid/rows/accessing-cells-and-rows%}#accessing-controls-in-template-column).

