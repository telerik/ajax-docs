---
title: Using the  GetItems GetColumn and GetColumnSafe Methods
page_title: Using the  GetItems GetColumn and GetColumnSafe Methods | RadGrid for ASP.NET AJAX Documentation
description: Using the  GetItems GetColumn and GetColumnSafe Methods
slug: grid/how-to/using-the--getitems-getcolumn-and-getcolumnsafe-methods
tags: using,the,,getitems,getcolumn,and,getcolumnsafe,methods
previous_url: controls/grid/how-to/using-the--getitems-getcolumn-and-getcolumnsafe-methods
published: True
position: 5
---

# Using the  GetItems GetColumn and GetColumnSafe Methods


In various cases you may want to access or traverse grid functional items/columns outside the dedicated ItemCreated and ItemDataBound event handlers, for example during PreRender or DataBinding event handlers of the grid. This is easily attainable with the **GetItems(itemType), GetColumn(columnName)** and **GetColumnSafe(columnName)** methods (exposed by each **GridTableView** instance).

The topic demonstrates accessing the following instances:
* [Items](#items)
* [Edit Items](#edit-items)
* [Insert Item](#insert-item)
* [Columns](#columns)

**Batch editing mode** is highly client-side based and differs from EditForms, PopUp and InPlace modes. It requires specific handling, which is explained in the [Accessing Cells And Rows]({%slug grid/accessing-values-and-controls/overview%}) article.

## Items

The **GetItems(itemType)** method returns an array of items (in the respective GridTableView) which match the specified type. You can use the **GridItemType** enumeration to choose the item type, for example:

````C#
	    GridItem headerItem = RadGrid1.MasterTableView.GetItems(GridItemType.Header)[0];
	    //cast the item to GridHeaderItem and operate with it further
````
````VB
	    Dim headerItem As GridItem = RadGrid1.MasterTableView.GetItems(GridItemType.Header)(0)
	    'cast the item to GridHeaderItem and operate with it further			
````

Data items loaded on the current page can be traversed using the following approach:

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
		foreach (GridDataItem item in RadGrid1.Items)
		{
				if (item.ItemIndex % 3 == 0)
				{
						item["ShipName"].BackColor = System.Drawing.Color.Orange;
				}
		}
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs)
	For Each item As GridDataItem In RadGrid1.Items
		If item.ItemIndex Mod 3 = 0 Then
			item("ShipName").BackColor = System.Drawing.Color.Orange
		End If
	Next
End Sub
````

## Edit Items

Currently edited items can be accessed using one of the following methods:

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
		foreach (GridDataItem item in RadGrid1.EditItems)
		{
				// InPlace EditMode
				TextBox textBox1 = item["ShipName"].Controls[0] as TextBox;

				// EditForms and PopUp EditMode
				GridEditFormItem editFormItem = item.EditFormItem;
				if (editFormItem.IsInEditMode)
				{
						TextBox textBox2 = editFormItem["ShipName"].Controls[0] as TextBox;
				}
		}

		// alternative approach
		foreach (GridEditFormItem item in RadGrid1.MasterTableView.GetItems(GridItemType.EditFormItem))
		{
				if (item.IsInEditMode)
				{
						TextBox textBox3 = item["ShipName"].Controls[0] as TextBox;
				}
		}
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs)
	For Each item As GridDataItem In RadGrid1.EditItems
		' InPlace EditMode
		Dim textBox1 As TextBox = TryCast(item("ShipName").Controls(0), TextBox)

		' EditForms and PopUp EditMode
		Dim editFormItem As GridEditFormItem = item.EditFormItem
		If editFormItem.IsInEditMode Then
			Dim textBox2 As TextBox = TryCast(editFormItem("ShipName").Controls(0), TextBox)
		End If
	Next

	' alternative approach
	For Each item As GridEditFormItem In RadGrid1.MasterTableView.GetItems(GridItemType.EditFormItem)
		If item.IsInEditMode Then
			Dim textBox3 As TextBox = TryCast(item("ShipName").Controls(0), TextBox)
		End If
	Next
End Sub
````

## Insert Item

The Insert Item can be accessed using the following method:

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
		if (RadGrid1.MasterTableView.IsItemInserted)
		{
				// GridEditFormInsertItem for EditForms and PopUp EditMode
				// GridDataInsertItem for InPlace EditMode
				GridEditableItem insertItem = RadGrid1.MasterTableView.GetInsertItem();
		}
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs)
	If RadGrid1.MasterTableView.IsItemInserted Then
		' GridEditFormInsertItem for EditForms and PopUp EditMode
		' GridDataInsertItem for InPlace EditMode
		Dim insertItem As GridEditableItem = RadGrid1.MasterTableView.GetInsertItem()
	End If
End Sub
````

## Columns

The **GetColumn(columnName)** method returns the column with the unique name specified as argument, namely:

````C#
	    GridColumn column = RadGrid1.MasterTableView.GetColumn["OrderID"];
	    //thus you get reference to the column with OrderID unique name
````
````VB
	    Dim column As GridColumn = RadGrid1.MasterTableView.GetColumn("OrderID")
	    'thus you get reference to the column with OrderID unique name			
````

The **GetColumnSafe(columnName)** performs the same task as **GetColumn(columnName)** method, however **GetColumnSafe** will not raise an exception in case column with that name is not found in the corresponding **GridTableView**.

The entire column collection can be traversed using the following approach:

````C#
protected void RadGrid1_DataBinding(object sender, EventArgs e)
{
		foreach (GridColumn col in RadGrid1.MasterTableView.RenderColumns)
		{
				if (col.DataType == typeof(decimal))
				{
						(col as IGridDataColumn).AllowFiltering = false;
				}
				if (col is GridDateTimeColumn)
				{
						GridDateTimeColumn dateCol = (GridDateTimeColumn)col;
						dateCol.DataFormatString = "{0:d}";
				}
		}
}
````
````VB
Protected Sub RadGrid1_DataBinding(sender As Object, e As EventArgs)
	For Each col As GridColumn In RadGrid1.MasterTableView.RenderColumns
		If col.DataType = GetType(Decimal) Then
			TryCast(col, IGridDataColumn).AllowFiltering = False
		End If
		If TypeOf col Is GridDateTimeColumn Then
			Dim dateCol As GridDateTimeColumn = DirectCast(col, GridDateTimeColumn)
			dateCol.DataFormatString = "{0:d}"
		End If
	Next
End Sub
````

The forthcoming sample implementation is made for hierarchical grid with two levels. With separate buttons on the page you can:

* switch the visibility for the inner tables command item link button (only for expanded parent items)

* enable/disable the link button inside the master table command item template

* show/hide the **CustomerID** column in the main table (calling the **GetColumn(columnName)** method)

* modify the width for the **OrderID** column in each detail table (only for expanded parent items)

>caution The new size for the OrderID column will be retained till the next rebind action in the grid
>




````ASP.NET
	  <asp:LinkButton ID="btnReferenceColumns" runat="server" Text="Operate with columns" /><br />
	  <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AutoGenerateColumns="False">
	    <MasterTableView DataKeyNames="CustomerID" Width="100%" CommandItemDisplay="Top">
	      <CommandItemTemplate>
	        <asp:LinkButton ID="lbMasterInsert" runat="server" CommandName="InitInsert" Text="Insert Customer"></asp:LinkButton>
	      </CommandItemTemplate>
	      <DetailTables>
	        <telerik:GridTableView DataKeyNames="OrderID" Width="100%" runat="server" CommandItemDisplay="Top">
	          <CommandItemTemplate>
	            <asp:LinkButton ID="lbDetailInsert" runat="server" CommandName="InitInsert" Text="Insert Order"></asp:LinkButton>
	          </CommandItemTemplate>
	          <Columns>
	            <telerik:GridBoundColumn HeaderText="OrderID" HeaderButtonType="TextButton" DataField="OrderID"
	              UniqueName="OrderID">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn HeaderText="Date Ordered" HeaderButtonType="TextButton"
	              DataField="OrderDate" UniqueName="OrderDate">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn HeaderText="EmployeeID" HeaderButtonType="TextButton" DataField="EmployeeID"
	              UniqueName="EmployeeID">
	            </telerik:GridBoundColumn>
	          </Columns>
	        </telerik:GridTableView>
	      </DetailTables>
	      <Columns>
	        <telerik:GridBoundColumn HeaderText="CustomerID" HeaderButtonType="TextButton" DataField="CustomerID"
	          UniqueName="CustomerID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn HeaderText="Contact Name" HeaderButtonType="TextButton"
	          DataField="ContactName" UniqueName="ContactName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn HeaderText="Company" HeaderButtonType="TextButton" DataField="CompanyName"
	          UniqueName="CompanyName">
	        </telerik:GridBoundColumn>
	      </Columns>
	    </MasterTableView></telerik:RadGrid><asp:Button ID="btnHideDetailInsert" runat="server"
	      Text="Switch insert option visibility for detail table" /><br />
	  <asp:Button ID="btnDisableMasterInsert" runat="server" Text="Disable/Enable insert for master table" />
````
````VB
	    Public Shared connectionString As String = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" & System.Web.HttpContext.Current.Server.MapPath("~/Grid/Data/Access/Nwind.mdb")
	Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles
	        RadGrid1.NeedDataSource()
	        RadGrid1.DataSource = GetDataTable("SELECT TOP 5 * From Customers")
	    End Sub
	    Public Shared Function GetDataTable(ByVal query As String) As DataTable

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
	    Protected Sub RadGrid1_DetailTableDataBind(ByVal source As Object, ByVal e As Telerik.Web.UI.GridDetailTableDataBindEventArgs) Handles RadGrid1.DetailTableDataBind
	        Dim dataItem As GridDataItem = CType(e.DetailTableView.ParentItem, GridDataItem)
	        If (Not e.DetailTableView.GetColumnSafe("OrderID") Is Nothing) Then
	            Dim CustomerID As String = dataItem("CustomerID").Text
	            e.DetailTableView.DataSource = GetDataTable("SELECT * FROM Orders WHERE CustomerID = '" & CustomerID & "'")
	        End If
	    End Sub
	    Protected Sub btnHideDetailInsert_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnHideDetailInsert.Click
	        Dim masterItem As GridDataItem
	        For Each masterItem In RadGrid1.MasterTableView.Items
	            If (masterItem.Expanded) Then
	                Dim commandItem As GridCommandItem = masterItem.ChildItem.NestedTableViews(0).GetItems(GridItemType.CommandItem)(0)
	                Dim lnkButton As LinkButton = CType(commandItem.FindControl("lbDetailInsert"), LinkButton)
	                lnkButton.Visible = Not lnkButton.Visible
	            End If
	        Next
	    End Sub
	    Protected Sub btnDisableMasterInsert_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnDisableMasterInsert.Click
	        Dim commandItem As GridCommandItem = RadGrid1.MasterTableView.GetItems(GridItemType.CommandItem)(0)
	        Dim lnkButton As LinkButton = CType(commandItem.FindControl("lbMasterInsert"), LinkButton)
	        lnkButton.Enabled = Not lnkButton.Enabled
	    End Sub
	    Protected Sub btnReferenceColumns_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnReferenceColumns.Click
	        Dim masterItem As GridDataItem
	        For Each masterItem In RadGrid1.MasterTableView.Items
	            If (masterItem.Expanded) Then
	                Dim detailColumn As GridBoundColumn = CType(masterItem.ChildItem.NestedTableViews(0).GetColumnSafe("OrderID"), GridBoundColumn)
	                detailColumn.HeaderStyle.Width = Unit.Pixel(50)
	            End If
	        Next
	        Dim masterColumn As GridBoundColumn = CType(RadGrid1.MasterTableView.GetColumn("CustomerID"), GridBoundColumn)
	        masterColumn.Visible = Not masterColumn.Visible
	    End Sub
````
````C#
	    string connectionString = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("~/Grid/Data/Access/Nwind.mdb");
	    protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = GetDataTable("SELECT TOP 5 * From Customers");
	    }
	    public static DataTable GetDataTable(string query)
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
	    protected void RadGrid1_DetailTableDataBind(object source, Telerik.Web.UI.GridDetailTableDataBindEventArgs e)
	    {
	        GridDataItem dataItem = (GridDataItem)e.DetailTableView.ParentItem;
	        if (e.DetailTableView.GetColumnSafe("OrderID") != null)
	        {
	            string CustomerID = dataItem["CustomerID"].Text;
	            e.DetailTableView.DataSource = GetDataTable("SELECT * FROM Orders WHERE CustomerID = \'" + (CustomerID + "\'"));
	        }
	    }
	    protected void btnHideDetailInsert_Click(object sender, System.EventArgs e)
	    {
	        GridDataItem masterItem;     
	        foreach (masterItem in RadGrid1.MasterTableView.Items)    
	        {         
	            if (masterItem.Expanded)  
	            {      
	                GridCommandItem commandItem = masterItem.ChildItem.NestedTableViews[0].GetItems(GridItemType.CommandItem)[0];         
	                LinkButton lnkButton = (LinkButton)commandItem.FindControl("lbDetailInsert");         
	                lnkButton.Visible = !lnkButton.Visible;   
	            }
	        }
	    }
	    protected void btnDisableMasterInsert_Click(object sender, System.EventArgs e)
	    {
	        GridCommandItem commandItem = RadGrid1.MasterTableView.GetItems(GridItemType.CommandItem)[0];
	        LinkButton lnkButton = (LinkButton)commandItem.FindControl("lbMasterInsert");
	        lnkButton.Enabled = !lnkButton.Enabled;
	    }
	    protected void btnReferenceColumns_Click(object sender, System.EventArgs e)
	    {
	        GridDataItem masterItem;    
	        foreach (masterItem in RadGrid1.MasterTableView.Items)
	        {         
	            if (masterItem.Expanded)   
	            {              
	                GridBoundColumn detailColumn = (GridBoundColumn)masterItem.ChildItem.NestedTableViews[0].GetColumnSafe("OrderID");   
	                detailColumn.HeaderStyle.Width = Unit.Pixel(50);  
	            }
	        }
	        GridBoundColumn masterColumn = (GridBoundColumn)RadGrid1.MasterTableView.GetColumn("CustomerID");   
	        masterColumn.Visible = !masterColumn.Visible;
	    }
````

## See Also

* [Accessing Cells and Rows]({%slug grid/accessing-values-and-controls/overview %})
