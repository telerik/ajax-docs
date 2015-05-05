---
title: Database Level Editing
page_title: Database Level Editing | RadGrid for ASP.NET AJAX Documentation
description: Database Level Editing
slug: grid/data-editing/database-level-editing
tags: database,level,editing
published: True
position: 12
---

# Database Level Editing



## 

In numerous cases you may want to perform data editing operations at database level with Update/Insert/Delete commands from the code-behind. This can be done wiring the UpdateCommand/InsertCommand/DeleteCommand events of RadGrid and executing appropriate Update/Insert/Delete queries which refresh the data in the underlying database. Below are the code snippets from a simple example which uses auto-generated edit form:



````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Skin="Lime" GridLines="None" AllowPaging="True"
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
````
````C#
public partial class _Default : System.Web.UI.Page
{
    //Declare a global DataTable dtTable       
    public static DataTable dtTable;
    //Get the connectionstring from the webconfig and declare a global SqlConnection "SqlConnection"   
    public static string connectionString = ConfigurationManager.AppSettings["ConnectionString"];
    public SqlConnection SqlConnection = new SqlConnection(connectionString);
    //Declare a global SqlDataAdapter SqlDataAdapter     
    public SqlDataAdapter SqlDataAdapter = new SqlDataAdapter();
    //Declare a global SqlCommand SqlCommand      
    public SqlCommand SqlCommand = new SqlCommand();
    protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
    {
        //Populate the Radgrid      
        dtTable = new DataTable();
        //Open the SqlConnection     
        SqlConnection.Open();
        try
        {
            //Select Query to populate the RadGrid with data from table Employees.     
            string selectQuery = "SELECT * FROM Employees";
            SqlDataAdapter.SelectCommand = new SqlCommand(selectQuery, SqlConnection);
            SqlDataAdapter.Fill(dtTable);
            RadGrid1.DataSource = dtTable;
        }
        finally
        {
            //Close the SqlConnection       
            SqlConnection.Close();
        }
    }
    protected void RadGrid1_DeleteCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
    {
        //Get the GridDataItem of the RadGrid        
        GridDataItem item = (GridDataItem)e.Item;
        //Get the primary key value using the DataKeyValue.       
        string EmployeeID = item.OwnerTableView.DataKeyValues[item.ItemIndex]["EmployeeID"].ToString();
        try
        {
            //Open the SqlConnection                 SqlConnection.Open();               
            string deleteQuery = "DELETE from Employees where EmployeeID='" + EmployeeID + "'";
            SqlCommand.CommandText = deleteQuery;
            SqlCommand.Connection = SqlConnection;
            SqlCommand.ExecuteNonQuery();
            //Close the SqlConnection     
            SqlConnection.Close();
        }
        catch (Exception ex)
        {
            RadGrid1.Controls.Add(new LiteralControl("Unable to delete Employee. Reason: " + ex.Message));
            e.Canceled = true;
        }
    }
    protected void RadGrid1_UpdateCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
    {
        //Get the GridEditableItem of the RadGrid      
        GridEditableItem editedItem = e.Item as GridEditableItem;
        //Get the primary key value using the DataKeyValue.      
        string EmployeeID = editedItem.OwnerTableView.DataKeyValues[editedItem.ItemIndex]["EmployeeID"].ToString();
        //Access the textbox from the edit form template and store the values in string variables.   
        string LastName = (editedItem["LastName"].Controls[0] as TextBox).Text;
        string FirstName = (editedItem["FirstName"].Controls[0] as TextBox).Text;
        string Title = (editedItem["Title"].Controls[0] as TextBox).Text;
        string Address = (editedItem["Address"].Controls[0] as TextBox).Text;
        string City = (editedItem["City"].Controls[0] as TextBox).Text;
        try
        {
            //Open the SqlConnection       
            SqlConnection.Open();
            //Update Query to update the Datatable  
            string updateQuery = "UPDATE Employees set LastName='" + LastName + "',FirstName='" + FirstName + "',Title='" + Title + "',Address='" + Address + "',City='" + City + "' where EmployeeID='" + EmployeeID + "'";
            SqlCommand.CommandText = updateQuery;
            SqlCommand.Connection = SqlConnection;
            SqlCommand.ExecuteNonQuery();
            //Close the SqlConnection      
            SqlConnection.Close();
        }
        catch (Exception ex)
        {
            RadGrid1.Controls.Add(new LiteralControl("Unable to update Employee. Reason: " + ex.Message));
            e.Canceled = true;
        }
    }
    protected void RadGrid1_InsertCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
    {
        //Get the GridEditFormInsertItem of the RadGrid             
        GridEditFormInsertItem insertedItem = (GridEditFormInsertItem)e.Item;
        //string EmployeeID = (insertedItem["EmployeeID"].Controls[0] as TextBox).Text;             
        string LastName = (insertedItem["LastName"].Controls[0] as TextBox).Text;
        string FirstName = (insertedItem["FirstName"].Controls[0] as TextBox).Text;
        string Title = (insertedItem["Title"].Controls[0] as TextBox).Text;
        string Address = (insertedItem["Address"].Controls[0] as TextBox).Text;
        string City = (insertedItem["City"].Controls[0] as TextBox).Text;
        try
        {
            //Open the SqlConnection               
            SqlConnection.Open();
            //Update Query to insert into  the database               
            string insertQuery = "INSERT into  Employees(LastName,FirstName,Title,Address,City) values('" + LastName + "','" + FirstName + "','" + Title + "','" + Address + "','" + City + "')";
            SqlCommand.CommandText = insertQuery;
            SqlCommand.Connection = SqlConnection;
            SqlCommand.ExecuteNonQuery();
            //Close the SqlConnection                
            SqlConnection.Close();
        }
        catch (Exception ex)
        {
            RadGrid1.Controls.Add(new LiteralControl("Unable to insert Employee. Reason: " + ex.Message));
            e.Canceled = true;
        }
    }
}
````
````VB
Public Shared dtTable As DataTable
'Get the connectionstring from the webconfig and declare a global SqlConnection "SqlConnection"
Public Shared connectionString As String = ConfigurationManager.AppSettings("ConnectionString")
Public SqlConnection As New SqlConnection(connectionString)
'Declare a global SqlDataAdapter SqlDataAdapter
Public SqlDataAdapter As New SqlDataAdapter()
'Declare a global SqlCommand SqlCommand
Public SqlCommand As New SqlCommand()

Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
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
Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
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
Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
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
Protected Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
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
        'Update Query to insert into the database
        Dim insertQuery As String = "INSERT into Employees(LastName,FirstName,Title,Address,City) values('" & LastName & "','" & FirstName & "','" & Title & "','" & Address & "','" & City & "')"
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


You can also review the forthcoming code library thread for different scenarios:

[Manual Update/Insert/Delete with SQL backend](http://www.telerik.com/community/code-library/submission/b311D-mmdbh.aspx)

[Manual Update/Insert/Delete with FormTemplate and SQL backend](http://www.telerik.com/community/code-library/submission/b311D-mtbed.aspx)

[Manual UpdateInsert/Delete with Access backend](http://www.telerik.com/community/code-library/submission/b311D-gaabc.aspx)
