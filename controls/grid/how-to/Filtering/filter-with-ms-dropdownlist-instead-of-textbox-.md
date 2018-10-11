---
title: Filter with MS DropDownList Instead of Textbox
page_title: Filter with MS DropDownList Instead of Textbox  | RadGrid for ASP.NET AJAX Documentation
description: Filter with MS DropDownList Instead of Textbox
slug: grid/how-to/filtering/filter-with-ms-dropdownlist-instead-of-textbox
previous_url: controls/grid/functionality/filtering/how-to/filter-with-ms-dropdownlist-instead-of-textbox-
tags: filter,with,ms,dropdownlist,instead,of,textbox,
published: True
position: 9
---

# Filter with MS DropDownList Instead of Textbox


You can create a custom column class that replaces the filter text box with a drop-down list. This provides an alternate way for users to enter filter criteria. The drop down list can be configured so that it causes the grid to filter records when the user selects an item.

The following steps describe how to achieve this result:

1. Create a custom column class that extends the default **GridBoundColumn**.
2. In this custom column class, override the **SetupFilterControls** method to replace the filter text box and image button with a **DropDownList** control. Configure the **DropDownList** control as desired. At a minimum,
	* Set the **AutoPostBack** property to **True**.
	* Set the **ID** property to a unique value.
	* Bind the items list.
	* Add a **SelectedIndexChanged** event handler.
3. Override the **SetCurrentFilterValueToControl** and **GetCurrentFilterValueFromControl** methods to set or get the **SelectedValue** of the drop-down list.
4. In the **SelectedIndexChanged** event handler, get the **GridFilteringItem** of the grid and call its **FireCommandEvent** method to initiate a filter command.

## Defining the custom column class

The following example illustrates how to create a custom column class that replaces the filter text box with a drop-down list.

**C#**

		public class MyCustomFilteringColumn : GridBoundColumn
		{
		    private object listDataSource = null;
		    //RadGrid calls this method when it initializes the controls inside the filtering item cells
		    protected override void SetupFilterControls(TableCell cell)
		    {
		        base.SetupFilterControls(cell);
		        cell.Controls.RemoveAt(0);
		        DropDownList list = new DropDownList();
		        list.ID = "list" + this.DataField;
		        list.AutoPostBack = true;
		        list.SelectedIndexChanged += new EventHandler(list_SelectedIndexChanged);
		        cell.Controls.AddAt(0, list);
		        cell.Controls.RemoveAt(1);
		        list.DataTextField = this.DataField;
		        list.DataValueField = this.DataField;
		        list.DataSource = this.ListDataSource;
		    }
		    void list_SelectedIndexChanged(object sender, EventArgs e)
		    {
		        GridFilteringItem filterItem = (sender as DropDownList).NamingContainer as GridFilteringItem;
		        if (this.DataType == System.Type.GetType("System.Int32") || this.DataType == System.Type.GetType("System.Int16") || this.DataType == System.Type.GetType("System.Int64"))
		        {
		            filterItem.FireCommandEvent("Filter", new Pair("EqualTo", this.UniqueName));
		        }
		        else
		            // treat everything else like a string   
		            filterItem.FireCommandEvent("Filter", new Pair("Contains", this.UniqueName));
		    }
		    public object ListDataSource
		    {
		        get
		        {
		            return this.listDataSource;
		        }
		        set
		        {
		            listDataSource = value;
		        }
		    }
		    //RadGrid calls this method when the value should be set to the filtering input control(s)  
		    protected override void SetCurrentFilterValueToControl(TableCell cell)
		    {
		        base.SetCurrentFilterValueToControl(cell);
		        DropDownList list = (DropDownList)cell.Controls[0];
		        if (this.CurrentFilterValue != string.Empty)
		        {
		            list.SelectedValue = this.CurrentFilterValue;
		        }
		    }
		    //RadGrid calls this method to extract the filtering value from the filtering input control(s)  
		    protected override string GetCurrentFilterValueFromControl(TableCell cell)
		    {
		        DropDownList list = (DropDownList)cell.Controls[0];
		        return list.SelectedValue;
		    }
		    protected override string GetFilterDataField()
		    {
		        return this.DataField;
		    }
		}


**VB**

		Imports Microsoft.VisualBasic
		Imports Telerik.Web.UI
		Imports System.Collections
		Imports System.Web.UI
		Imports System.Web.UI.WebControls
		Imports System.Data

		Namespace MyStuff

		        Public Class MyCustomFilteringColumn
		            Inherits GridBoundColumn

		            Private _listDataSource As Object = Nothing
		            Public Property ListDataSource() As Object
		                Get
		                    Return _listDataSource
		                End Get
		                Set(ByVal value As Object)
		                    _listDataSource = value
		                End Set
		            End Property


		            'RadGrid calls this method when it initializes the controls inside the filtering item cells
		            Protected Overloads Overrides Sub SetupFilterControls(ByVal cell As TableCell)
		                MyBase.SetupFilterControls(cell)
		                cell.Controls.RemoveAt(0)
		                Dim list As New DropDownList()
		                list.ID = "list" + Me.DataField
		                list.AutoPostBack = True
		                AddHandler list.SelectedIndexChanged, AddressOf list_SelectedIndexChanged
		                cell.Controls.AddAt(0, list)
		                cell.Controls.RemoveAt(1)
		                list.DataTextField = Me.DataField
		                list.DataValueField = Me.DataField
		                list.DataSource = _listDataSource
		                list.DataBind()
		            End Sub

		            Sub list_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
		                Dim filterItem As GridFilteringItem = TryCast((TryCast(sender, DropDownList)).NamingContainer, GridFilteringItem)

		                If Me.DataType Is Type.GetType("System.Int32") OrElse Me.DataType Is Type.GetType("System.Int16") OrElse Me.DataType Is Type.GetType("System.Int64") Then
		                    filterItem.FireCommandEvent("Filter", New Pair("EqualTo", Me.UniqueName))
		                Else
		                    filterItem.FireCommandEvent("Filter", New Pair("Contains", Me.UniqueName))
		                    ' treat everything else like a string
		                End If
		            End Sub

		            'RadGrid calls this method when the value should be set to the filtering input control(s)
		            Protected Overloads Overrides Sub SetCurrentFilterValueToControl(ByVal cell As TableCell)
		                MyBase.SetCurrentFilterValueToControl(cell)
		                Dim list As DropDownList = DirectCast(cell.Controls(0), DropDownList)
		                If Me.CurrentFilterValue <> String.Empty Then
		                    list.SelectedValue = Me.CurrentFilterValue
		                End If
		            End Sub

		            'RadGrid calls this method to extract the filtering value from the filtering input control(s)
		            Protected Overloads Overrides Function GetCurrentFilterValueFromControl(ByVal cell As TableCell) As String
		                Dim list As DropDownList = DirectCast(cell.Controls(0), DropDownList)
		                Return list.SelectedValue
		            End Function

		            Protected Overloads Overrides Function GetFilterDataField() As String
		                Return Me.DataField
		            End Function
		        End Class

		    End Namespace


## Adding custom columns to a grid

You can add instances of your custom column type **RadGrid** as follows:

1. At the top of the the ASPX page, register the namespace for the custom column class. You do not need to add an Assembly attribute, unless the class is defined in another assembly:

	**ASP.NET**

		<%@ register namespace="MyStuff" tagprefix="custom" %>


2. You can now add instances of the column type in the declaration of your grid. Note that this example includes a command item with a "Clear" button to clear the selected filters:

	**ASP.NET**

		<telerik:RadGrid
		   ID="RadGrid1" runat="server"
		   AllowFilteringByColumn="True"
		   AllowPaging="True" PageSize="5"
		   DataSourceID="AccessDataSource1"
		   OnItemCommand="RadGrid1_ItemCommand">
		 <MasterTableView
		    AutoGenerateColumns="False"
		    DataSourceID="AccessDataSource1"
		    CommandItemDisplay="Top">
		   <CommandItemTemplate>
		      <asp:LinkButton Runat="server" ID="LinkButton1"
		        Text="Clear Filters"
		        CommandName="ClearFilters" />
		   </CommandItemTemplate>
		   <Columns>
		     <custom:MyCustomFilteringColumn
		        HeaderText="Employee ID"
		        DataField="EmployeeID"
		        UniqueName="EmployeeID" />
		     <custom:MyCustomFilteringColumn
		        HeaderText="Customer ID"
		        DataField="CustomerID"
		        UniqueName="CustomerID" />
		     <telerik:GridBoundColumn
		        AllowFiltering="False"
		        HeaderText="Order ID"
		        DataField="OrderID"
		        UniqueName="OrderID" />
		   </Columns>
		 </MasterTableView>
		</telerik:RadGrid>
		<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
		    SelectCommand="SELECT * FROM [Orders]">
		</asp:SqlDataSource>


3. The **MyCustomFilteringColumn** implementation requires a **ListDataSource**. You can set that in the **Page_Load** event handler. In addition, the grid definition above requires an implementation for the "ClearFilters" button:

	>tip This example sets the **ListDataSource** property in the **Page_Load** event handler. If you are binding your grid using the **NeedDataSource** event, it is more appropriate to set the **ListDataSource** in that event handler. (NeedDataSource does not occur when using declarative data binding.)
	>

	**C#**

		protected void Page_Load(object sender, EventArgs e)
		{
		    foreach (GridBoundColumn column in RadGrid1.MasterTableView.Columns)
		    {
		        if (column is MyStuff.MyCustomFilteringColumn)
		        {
		            (column as MyStuff.MyCustomFilteringColumn).ListDataSource = GetFilterTable(column.DataField);
		        }
		    }
		}
		private DataTable GetFilterTable(string Field)
		{
		    OleDbConnection conn = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/App_Data/Nwind.mdb"));
		    OleDbDataAdapter adapter = new OleDbDataAdapter();
		    adapter.SelectCommand = new OleDbCommand("SELECT distinct [" + Field + "] FROM Orders", conn);
		    DataTable myDataTable = new DataTable();
		    conn.Open();
		    try
		    {
		        adapter.Fill(myDataTable);
		    }
		    finally
		    {
		        conn.Close();
		    }
		    return myDataTable;
		}
		protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
		{
		    if (e.CommandName == "ClearFilters")
		    {
		        foreach (GridColumn column in RadGrid1.MasterTableView.Columns)
		        {
		            column.CurrentFilterFunction = GridKnownFunction.NoFilter;
		            column.CurrentFilterValue = String.Empty;
		        }
		        RadGrid1.MasterTableView.FilterExpression = String.Empty;
		        RadGrid1.MasterTableView.Rebind();
		    }
		}


	**VB**

		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
		    For Each column As GridBoundColumn In RadGrid1.MasterTableView.Columns
		        If TypeOf column Is MyStuff.MyCustomFilteringColumn Then
		(CType(column, MyStuff.MyCustomFilteringColumn)).ListDataSource = GetFilterTable(column.DataField)
		        End If
		    Next
		End Sub
		Private Function GetFilterTable(ByVal Field As String) As DataTable
		    Dim conn As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/App_Data/Nwind.mdb"))
		    Dim adapter As New OleDbDataAdapter()
		    adapter.SelectCommand = New OleDbCommand("SELECT distinct [" + Field + "] FROM Orders", conn)
		    Dim myDataTable As New DataTable()
		    conn.Open()
		    Try
		        adapter.Fill(myDataTable)
		    Finally
		        conn.Close()
		    End Try
		    Return myDataTable
		End Function
		Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
		    If e.CommandName = "ClearFilters" Then
		        For Each column As GridColumn In RadGrid1.MasterTableView.Columns
		            column.CurrentFilterFunction = GridKnownFunction.NoFilter
		            column.CurrentFilterValue = [String].Empty
		        Next
		        RadGrid1.MasterTableView.FilterExpression = [String].Empty
		        RadGrid1.MasterTableView.Rebind()
		    End If
		End Sub




