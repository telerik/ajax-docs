---
title: Filter for Built-in Checkbox Column
page_title: Filter for Built-in Checkbox Column | RadGrid for ASP.NET AJAX Documentation
description: Filter for Built-in Checkbox Column
slug: grid/functionality/filtering/how-to/filter-for-built-in-checkbox-column
tags: filter,for,built-in,checkbox,column
published: True
position: 5
---

# Filter for Built-in Checkbox Column



## 

The default drop-down list of filter functions for **GridCheckBoxColumn** contains the following items:

* NoFilter

* EqualTo

* NotEqualTo

* IsNull

* NotIsNull

Consider the case when you want to remove the "IsNull" and "NotIsNull" items from the check box column, while leaving them available for other columns in the grid. One approach to this is to replace the default text box and image button with a drop-down list that contains the possible options ("Clear Filter", "Show all checked", and "Show all unchecked).

To replace the default textbox filter for **GridCheckBoxColumn**, you can do the following:

1. Handle the **ItemCreated** event of the grid to modify the **Controls** collection of the corresponding header cell.

1. Handle the **SelectedIndexChanged** event of the drop-down list (which appears in the place of the textbox) to modify the grid **FilterExpression** so that it reflects the **SelectedValue** of the drop-down list you added.

1. In the **NeedDataSource** event handler, add the check box column's filter expression to the **FilterExpression** property of the table so that it is honored when the user triggers a filter action from another column.

The following example illustrates this approach:



````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowSorting="True" AllowPaging="true"
  Width="300px" AllowFilteringByColumn="true" OnNeedDataSource="RadGrid1_NeedDataSource"
  OnItemCreated="RadGrid1_ItemCreated">
  <PagerStyle Mode="NextPrevAndNumeric" />
  <MasterTableView AutoGenerateColumns="false">
    <Columns>
      <telerik:GridCheckBoxColumn UniqueName="GridCheckBoxColumn" DataField="Bool" HeaderText="Check/UnCheck" />
      <telerik:GridBoundColumn UniqueName="ContactName" HeaderText="Contact name" DataField="ContactName" />
    </Columns>
  </MasterTableView></telerik:RadGrid>
````
````C#	
protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridFilteringItem)
    {
        GridFilteringItem filteringItem = (e.Item as GridFilteringItem);
        filteringItem["GridCheckBoxColumn"].Controls.Clear();
        DropDownList ddList = new DropDownList();
        ddList.AutoPostBack = true;
        ddList.SelectedIndexChanged += new System.EventHandler(ddList_SelectedIndexChanged);
        ddList.Items.Add(new ListItem("Clear filter", "Empty"));
        ddList.Items.Add(new ListItem("Show all checked", "True"));
        ddList.Items.Add(new ListItem("Show all unchecked", "False"));
        if (Session["ddlSelValue"] != null)
        {
            ddList.Items.FindByValue((string)Session("ddlSelValue")).Selected = true;
        }
        filteringItem["GridCheckBoxColumn"].Controls.Add(ddList);
    }
}
protected void ddList_SelectedIndexChanged(object sender, System.EventArgs e)
{
    DropDownList ddList = (DropDownList)sender;  Session["ddlSelValue"] = ddList.SelectedValue;
    Switch (ddList.SelectedValue)  
    { 
    case "True":
        RadGrid1.MasterTableView.FilterExpression = "([Bool] = True) ";
        foreach (GridColumn column in RadGrid1.MasterTableView.Columns)      
        {         
            column.CurrentFilterFunction = GridKnownFunction.NoFilter;         
            column.CurrentFilterValue = String.Empty;      
        }      
        RadGrid1.MasterTableView.Rebind();      
    break;
    case "False":    
        RadGrid1.MasterTableView.FilterExpression = "([Bool] = False) ";    
        foreach (GridColumn column in RadGrid1.MasterTableView.Columns)    
        {       
            column.CurrentFilterFunction = GridKnownFunction.NoFilter;    
            column.CurrentFilterValue = String.Empty;   
        }     
        RadGrid1.MasterTableView.Rebind(); 
    break;
    case "Empty":  
        RadGrid1.MasterTableView.FilterExpression = String.Empty;
        foreach (GridColumn column in RadGrid1.MasterTableView.Columns)  
        {     
            column.CurrentFilterFunction = GridKnownFunction.NoFilter;    
            column.CurrentFilterValue = String.Empty;      
        }   
        RadGrid1.MasterTableView.Rebind();     
    break; 
  }
}
string connectionString = ("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("~/App_Data/Nwind.mdb"));
private DataTable GetDataTable(string query)
{
    OleDbConnection connection1 = new OleDbConnection(connectionString);
    OleDbDataAdapter adapter1 = new OleDbDataAdapter();
    adapter1.SelectCommand = new OleDbCommand(query, connection1);
    DataTable table1 = new DataTable();
    connection1.Open();
    try
    {
        adapter1.Fill(table1);
    }
    finally
    {
        connection1.Close();
    }
    return table1;
}
protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetDataTable("Select ContactName, Bool FROM Customers");
    if (Session["ddlSelValue"] != null && Session["ddlSelValue"] != "Empty")
    {
        RadGrid1.MasterTableView.FilterExpression = RadGrid1.MasterTableView.FilterExpression + "AND ([Bool] = " + (string)Session("ddlSelValue") + ")";
    }
}

````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, _
    ByVal e As Telerik.Web.UI.GridItemEventArgs) _
    Handles RadGrid1.ItemCreated
    If (TypeOf e.Item Is GridFilteringItem) Then
        Dim filteringItem As GridFilteringItem = CType(e.Item, GridFilteringItem)
        filteringItem("GridCheckBoxColumn").Controls.Clear()
        Dim ddList As DropDownList = New DropDownList()
        ddList.AutoPostBack = True
        AddHandler ddList.SelectedIndexChanged, AddressOf ddList_SelectedIndexChanged
        ddList.Items.Add(New ListItem("Clear filter", "Empty"))
        ddList.Items.Add(New ListItem("Show all checked", "True"))
        ddList.Items.Add(New ListItem("Show all unchecked", "False"))
        If (Not Session("ddlSelValue") Is Nothing) Then
            ddList.Items.FindByValue(CType(Session("ddlSelValue"), String)).Selected = True
        End If
        filteringItem("GridCheckBoxColumn").Controls.Add(ddList)
    End If
End Sub
Protected Sub ddList_SelectedIndexChanged(ByVal sender As Object, _
    ByVal e As System.EventArgs)
    Dim ddList As DropDownList = CType(sender, DropDownList)
    Session("ddlSelValue") = ddList.SelectedValue
    Select Case ddList.SelectedValue
        Case "True"
            RadGrid1.MasterTableView.FilterExpression = "([Bool] = True) "
            For Each column As GridColumn In RadGrid1.MasterTableView.Columns
                column.CurrentFilterFunction = GridKnownFunction.NoFilter
                column.CurrentFilterValue = String.Empty
            Next
            RadGrid1.MasterTableView.Rebind()
        Case "False"
            RadGrid1.MasterTableView.FilterExpression = "([Bool] = False) "
            For Each column As GridColumn In RadGrid1.MasterTableView.Columns
                column.CurrentFilterFunction = GridKnownFunction.NoFilter
                column.CurrentFilterValue = String.Empty
            Next
            RadGrid1.MasterTableView.Rebind()
        Case "Empty"
            RadGrid1.MasterTableView.FilterExpression = String.Empty
            For Each column As GridColumn In RadGrid1.MasterTableView.Columns
                column.CurrentFilterFunction = GridKnownFunction.NoFilter
                column.CurrentFilterValue = String.Empty
            Next
            RadGrid1.MasterTableView.Rebind()
    End Select
End Sub
Public Shared connectionString As String = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" & System.Web.HttpContext.Current.Server.MapPath("~/Grid/Data/Access/Nwind.mdb")
Public Function GetDataTable(ByVal query As String) As DataTable
    Dim connection1 As New OleDbConnection(connectionString)
    Dim adapter1 As New OleDbDataAdapter
    adapter1.SelectCommand = New OleDbCommand(query, connection1)
    Dim table1 As New DataTable
    connection1.Open()
    Try
        adapter1.Fill(table1)
    Finally
        connection1.Close()
    End Try
    Return table1
End Function
Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, _
    ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) _
    Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = GetDataTable("Select ContactName, Bool FROM Customers")
    If (Not Session("ddlSelValue") Is Nothing) Then
        If (Not Session("ddlSelvalue") = "Empty") Then
            RadGrid1.MasterTableView.FilterExpression = _
              RadGrid1.MasterTableView.FilterExpression & _
              "AND ([Bool] = " & CType(Session("ddlSelValue"), String) & ")"
        End If
    End If
End Sub
````


>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (EnableLinqExpressions = true), the filter expressions set for the grid either internally by its filtering mechanism or manually in code should conform to the LINQ expression syntax instead of the old T-SQL syntax. Only thus they will be evaluated properly by the control.
>

