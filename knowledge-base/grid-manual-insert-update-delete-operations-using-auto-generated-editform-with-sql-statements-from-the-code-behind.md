---
title: Manual Insert/Update/Delete operations using Auto-generated EditForm with SQL statements from the code-behind
description: Learn how to create manual Insert/Update/Delete operations using Auto-generated editform with sql statements from the code-behind
type: how-to
page_title: Manual Insert/Update/Delete operations using Auto-generated EditForm with SQL statements from the code-behind. | RadGrid
slug: grid-manual-insert-update-delete-operations-using-auto-generated-editform-with-sql-statements-from-the-code-behind
res_type: kb
tags: radgrid, grid, editing, sql, grid with sql, telerik
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This is a sample project implementing manual insert/update/delete operations using Auto-generated edit form with sql statements from the code-behind:

## Solution

The code contains event handlers for RadGrid's NeedDataSource, DeleteCommand, UpdateCommand, and InsertCommand events. 

These event handlers execute SQL statements to perform CRUD operations on the "Employees" table, binding data to the RadGrid and enabling users to modify the data through an auto-generated edit form provided by RadGrid.

````ASP.NET
<strong><span style="font-size: 16pt; color: #009900">Manual Insert/Update/Delete Using
    Auto-Generated EditForm</span></strong><br />
<br />
<telerik:RadAjaxPanel runat="server" ID="RadAjaxPanel1">
    <telerik:RadGrid ID="RadGrid1" runat="server" GridLines="None" AllowPaging="True"
        AllowSorting="True" AutoGenerateColumns="False" Width="97%" OnNeedDataSource="RadGrid1_NeedDataSource"
        OnDeleteCommand="RadGrid1_DeleteCommand" OnInsertCommand="RadGrid1_InsertCommand"
        OnUpdateCommand="RadGrid1_UpdateCommand">
        <PagerStyle Mode="NextPrevAndNumeric"></PagerStyle>
        <MasterTableView DataKeyNames="EmployeeID" GridLines="None" Width="100%" CommandItemDisplay="Top">
            <Columns>
                <telerik:GridButtonColumn CommandName="Delete" Text="Delete" UniqueName="Delete">
                </telerik:GridButtonColumn>
                <telerik:GridBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" UniqueName="EmployeeID"
                    ReadOnly="True">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="LastName" HeaderText="LastName" UniqueName="LastName">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="FirstName" HeaderText="FirstName" UniqueName="FirstName">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="Address" HeaderText="Address" UniqueName="Address">
                </telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="City" HeaderText="City" UniqueName="City">
                </telerik:GridBoundColumn>
                <telerik:GridEditCommandColumn>
                </telerik:GridEditCommandColumn>
            </Columns>
            <EditFormSettings ColumnNumber="2" CaptionFormatString="Edit details for employee with ID {0}"
                CaptionDataField="EmployeeID">
                <FormTableItemStyle Wrap="False"></FormTableItemStyle>
                <FormCaptionStyle CssClass="EditFormHeader"></FormCaptionStyle>
                <FormMainTableStyle CellSpacing="0" CellPadding="3" Width="100%" />
                <FormTableStyle GridLines="Horizontal" CellSpacing="0" CellPadding="2" CssClass="module"
                    Height="110px" Width="100%" />
                <FormTableAlternatingItemStyle Wrap="False"></FormTableAlternatingItemStyle>
                <FormStyle Width="100%" BackColor="#EEF2EA"></FormStyle>
                <EditColumn UpdateText="Update record" UniqueName="EditCommandColumn1" CancelText="Cancel edit">
                </EditColumn>
                <FormTableButtonRowStyle HorizontalAlign="Right" CssClass="EditFormButtonRow"></FormTableButtonRowStyle>
            </EditFormSettings>
            <ExpandCollapseColumn Visible="False">
                <HeaderStyle Width="19px"></HeaderStyle>
            </ExpandCollapseColumn>
            <RowIndicatorColumn Visible="False">
                <HeaderStyle Width="20px" />
            </RowIndicatorColumn>
        </MasterTableView>
    </telerik:RadGrid>
</telerik:RadAjaxPanel>
````

````C#
public static DataTable dtTable; //Declare a global DataTable dtTable  
public static string connectionString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString; // Declare a global SqlConnection SqlConnection  

public SqlConnection SqlConnection = new SqlConnection(connectionString); 
public SqlDataAdapter SqlDataAdapter = new SqlDataAdapter(); // Declare a global SqlDataAdapter SqlDataAdapter  
public SqlCommand SqlCommand = new SqlCommand(); // Declare a global SqlCommand SqlCommand  

protected void RadGrid1_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
{
    dtTable = new DataTable();
    SqlConnection.Open(); // Open the SqlConnection
    try
    {
        string selectQuery = "SELECT * FROM Employees";
        SqlDataAdapter.SelectCommand = new SqlCommand(selectQuery, SqlConnection);
        SqlDataAdapter.Fill(dtTable);
        RadGrid1.DataSource = dtTable;
    }
    finally
    {
        SqlConnection.Close(); // Close the SqlConnection
    }
}

protected void RadGrid1_DeleteCommand(object source, GridCommandEventArgs e)
{
    GridDataItem item = (GridDataItem)e.Item; // Get the GridDataItem of the RadGrid
    string EmployeeID = item.OwnerTableView.DataKeyValues[item.ItemIndex]["EmployeeID"].ToString(); // Get the primary key value using the DataKeyValue.
    try
    {
        SqlConnection.Open(); // Open the SqlConnection
        string deleteQuery = "DELETE from Employees where EmployeeID='" + EmployeeID + "'";
        SqlCommand.CommandText = deleteQuery;
        SqlCommand.Connection = SqlConnection;
        SqlCommand.ExecuteNonQuery();
        SqlConnection.Close(); // Close the SqlConnection
    }
    catch (Exception ex)
    {
        RadGrid1.Controls.Add(new LiteralControl("Unable to delete Customers. Reason: " + ex.Message));
        e.Canceled = true;
    }
}

protected void RadGrid1_UpdateCommand(object source, GridCommandEventArgs e)
{
    GridEditableItem editedItem = e.Item as GridEditableItem; // Get the GridEditableItem of the RadGrid

    string EmployeeID = editedItem.OwnerTableView.DataKeyValues[editedItem.ItemIndex]["EmployeeID"].ToString(); // Get the primary key value using the DataKeyValue.
    string FirstName = (editedItem["FirstName"].Controls[0] as TextBox).Text;
    string LastName = (editedItem["LastName"].Controls[0] as TextBox).Text; // Access the textbox from the edit form template and store the values in string variables.
    string Title = (editedItem["Title"].Controls[0] as TextBox).Text;
    string Address = (editedItem["Address"].Controls[0] as TextBox).Text;
    string City = (editedItem["City"].Controls[0] as TextBox).Text;
    try
    {
        SqlConnection.Open(); // Open the SqlConnection
        string updateQuery = "UPDATE Employees set LastName='" + LastName + "',FirstName='" + FirstName + "',Title='" + Title + "',Address='" + Address + "',City='" + City + "' where EmployeeID='" + EmployeeID + "'";
        SqlCommand.CommandText = updateQuery;
        SqlCommand.Connection = SqlConnection;
        SqlCommand.ExecuteNonQuery();
        SqlConnection.Close(); // Close the SqlConnection
    }
    catch (Exception ex)
    {
        RadGrid1.Controls.Add(new LiteralControl("Unable to update Customers. Reason: " + ex.Message));
        e.Canceled = true;
    }
}

protected void RadGrid1_InsertCommand(object source, GridCommandEventArgs e)
{
    GridEditFormInsertItem insertedItem = (GridEditFormInsertItem)e.Item; // Get the GridEditFormInsertItem of the RadGrid

    string FirstName = (insertedItem["FirstName"].Controls[0] as TextBox).Text;
    string LastName = (insertedItem["LastName"].Controls[0] as TextBox).Text;
    string Title = (insertedItem["Title"].Controls[0] as TextBox).Text;
    string Address = (insertedItem["Address"].Controls[0] as TextBox).Text;
    string City = (insertedItem["City"].Controls[0] as TextBox).Text;

    try
    {
        SqlConnection.Open(); // Open the SqlConnection
        string insertQuery = "INSERT into  Employees(LastName,FirstName,Title,Address,City) values('" + LastName + "','" + FirstName + "','" + Title + "','" + Address + "','" + City + "')";

        SqlCommand.CommandText = insertQuery;
        SqlCommand.Connection = SqlConnection;
        SqlCommand.ExecuteNonQuery();

        SqlConnection.Close(); // Close the SqlConnection
    }
    catch (Exception ex)
    {
        RadGrid1.Controls.Add(new LiteralControl("Unable to insert Customers. Reason: " + ex.Message));
        e.Canceled = true;
    }
````
````VB
Public Shared dtTable As DataTable
'Get the connectionstring from the webconfig and declare a global SqlConnection "SqlConnection"       
Public Shared connectionString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
Public SqlConnection As New SqlConnection(connectionString)
'Declare a global SqlDataAdapter SqlDataAdapter       
Public SqlDataAdapter As New SqlDataAdapter()
'Declare a global SqlCommand SqlCommand       
Public SqlCommand As New SqlCommand()

Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As GridNeedDataSourceEventArgs)
    'Populate the Radgrid       
    dtTable = New DataTable()
    'Open the SqlConnection       
    SqlConnection.Open()
    Try
        'Select Query to populate the RadGrid with data from table Employees.       
        Dim selectQuery As String = "SELECT * FROM Employees"
        SqlDataAdapter.SelectCommand = New SqlCommand(selectQuery, SqlConnection)
        SqlDataAdapter.Fill(dtTable)
        RadGrid1.DataSource = dtTable
    Finally
        'Close the SqlConnection       
        SqlConnection.Close()
    End Try

End Sub

Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    'Get the GridDataItem of the RadGrid       
    Dim item As GridDataItem = DirectCast(e.Item, GridDataItem)
    'Get the primary key value using the DataKeyValue.       
    Dim EmployeeID As String = item.OwnerTableView.DataKeyValues(item.ItemIndex)("EmployeeID").ToString()
    Try
        'Open the SqlConnection       
        SqlConnection.Open()
        Dim deleteQuery As String = "DELETE from Employees where EmployeeID='" & EmployeeID & "'"
        SqlCommand.CommandText = deleteQuery
        SqlCommand.Connection = SqlConnection
        SqlCommand.ExecuteNonQuery()
        'Close the SqlConnection       

        SqlConnection.Close()
    Catch ex As Exception
        RadGrid1.Controls.Add(New LiteralControl("Unable to delete Employee. Reason: " + ex.Message))
        e.Canceled = True
    End Try

End Sub

Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    'Get the GridEditableItem of the RadGrid       
    Dim editedItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
    'Get the primary key value using the DataKeyValue.       
    Dim EmployeeID As String = editedItem.OwnerTableView.DataKeyValues(editedItem.ItemIndex)("EmployeeID").ToString()
    'Access the textbox from the edit form template and store the values in string variables.       
    Dim LastName As String = (TryCast(editedItem("LastName").Controls(0), TextBox)).Text
    Dim FirstName As String = (TryCast(editedItem("FirstName").Controls(0), TextBox)).Text
    Dim Title As String = (TryCast(editedItem("Title").Controls(0), TextBox)).Text
    Dim Address As String = (TryCast(editedItem("Address").Controls(0), TextBox)).Text
    Dim City As String = (TryCast(editedItem("City").Controls(0), TextBox)).Text

    Try
        'Open the SqlConnection       
        SqlConnection.Open()
        'Update Query to update the Datatable        
        Dim updateQuery As String = "UPDATE Employees set LastName='" & LastName & "',FirstName='" & FirstName & "',Title='" & Title & "',Address='" & Address & "',City='" & City & "' where EmployeeID='" & EmployeeID & "'"
        SqlCommand.CommandText = updateQuery
        SqlCommand.Connection = SqlConnection
        SqlCommand.ExecuteNonQuery()
        'Close the SqlConnection       
        SqlConnection.Close()
    Catch ex As Exception
        RadGrid1.Controls.Add(New LiteralControl("Unable to update Employee. Reason: " + ex.Message))
        e.Canceled = True
    End Try

End Sub

Protected Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    'Get the GridEditFormInsertItem of the RadGrid       
    Dim insertedItem As GridEditFormInsertItem = DirectCast(e.Item, GridEditFormInsertItem)

    'string EmployeeID = (insertedItem["EmployeeID"].Controls[0] as TextBox).Text;     

    Dim LastName As String = (TryCast(insertedItem("LastName").Controls(0), TextBox)).Text
    Dim FirstName As String = (TryCast(insertedItem("FirstName").Controls(0), TextBox)).Text
    Dim Title As String = (TryCast(insertedItem("Title").Controls(0), TextBox)).Text
    Dim Address As String = (TryCast(insertedItem("Address").Controls(0), TextBox)).Text
    Dim City As String = (TryCast(insertedItem("City").Controls(0), TextBox)).Text

    Try
        'Open the SqlConnection       
        SqlConnection.Open()
        'Update Query to insert into  the database        
        Dim insertQuery As String = "INSERT into  Employees(LastName,FirstName,Title,Address,City) values('" & LastName & "','" & FirstName & "','" & Title & "','" & Address & "','" & City & "')"
        SqlCommand.CommandText = insertQuery
        SqlCommand.Connection = SqlConnection
        SqlCommand.ExecuteNonQuery()
        'Close the SqlConnection       


        SqlConnection.Close()
    Catch ex As Exception
        RadGrid1.Controls.Add(New LiteralControl("Unable to insert Employee. Reason: " + ex.Message))
        e.Canceled = True
    End Try
End Sub
```` 
 
  
    
     
