---
title: Filter GridBoundColumn of Type DateTime
page_title: Filter GridBoundColumn of Type DateTime | UI for ASP.NET AJAX Documentation
description: Filter GridBoundColumn of Type DateTime
slug: grid/functionality/filtering/how-to/filter-gridboundcolumn-of-type-datetime
tags: filter,gridboundcolumn,of,type,datetime
published: True
position: 8
---

# Filter GridBoundColumn of Type DateTime



## 

>note If you prefer not to handle the filtering manually as stated below, consider using built-in GridDateTimeColumn as shown in[this online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/Filtering/DefaultCS.aspx).
>


When you choose to apply filtering for bound grid column of type DateTime, Telerik RadGrid will filter the records in the corresponding column by fetching the user entry from the filter box in the following format - __mm/dd/yyyy__. However, forcing the user to type the date in this format is not intuitive as the dates are displayed differently in the column cells. Therefore, you you may want to let the user type the same date format as previously specified through the __DataFormatString__ of the column.In such case you will need to cancel the default filter action and modify the filter string accordingly to make it "automatically recognizable" by the grid. For this purpose you will need to modify the __FilterExpression__ (see [this topic]({%slug grid/functionality/filtering/how-to/operate-with-the-filterexpression-manually%}) for more info) of the grid accordingly after reformatting the pattern entered in the column filter box.The sample implementation listed below shows how this can be done when you choose the following DateTime format - __dd/MM/yyyy__. With this approach the filter criteria will be retained on paging/sorting operation. Note, however, the __OrderDate__ column will be filtered "separately" from the rest of the grid columns, meaning that:

* the filters for the other columns in the grid will be cleared when you choose filter pattern for the __OrderDate__ column

* the __OrderDate__ column filter will be cleared when you specify filter for some other column

For more details review the forthcoming code snippets (feel free to modify the logic if there are additional implementation requirements):



````ASPNET
	  <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
	<telerik:RadGrid runat="server" AutoGenerateColumns="false" ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource"
	    Width="96%" AllowFilteringByColumn="True" AllowSorting="True" PageSize="15" AllowPaging="true"
	    ShowStatusBar="true">
	    <PagerStyle Mode="NextPrevAndNumeric" />
	    <MasterTableView AutoGenerateColumns="false" AllowFilteringByColumn="True">
	      <Columns>
	        <telerik:GridBoundColumn DataField="ShipName" HeaderText="Ship name" SortExpression="ShipName"
	          UniqueName="ShipName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="ShipAddress" HeaderText="Ship address" SortExpression="ShipAddress"
	          UniqueName="ShipAddress">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="OrderDate" HeaderText="Order date" SortExpression="OrderDate"
	          UniqueName="OrderDate" DataFormatString="{0:dd/MM/yyyy}">
	        </telerik:GridBoundColumn>
	      </Columns>
	    </MasterTableView></telerik:RadGrid> </pre>
````
````VB.NET
	
	    Public Shared connectionString As String = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" & System.Web.HttpContext.Current.Server.MapPath("~/Grid/Data/Access/Nwind.mdb")
	
	Public Shared Function GetDataTable(ByVal query As String) As DataTable
	         Dim connection1 As New OleDbConnection(connectionString)
	         Dim adapter1 As New OleDbDataAdapter
	        adapter1.SelectCommand = New OleDbCommand(query, connection1)
	         Dim table1 As New DataTable
	        connection1. Open()
	        Try
	            adapter1.Fill(table1)
	        Finally
	            connection1. Close()
	         End Try
	         Return table1
	End Function
	
	Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	         If (e.CommandName = RadGrid.FilterCommandName AndAlso CType(e.CommandArgument, Pair).Second = "OrderDate" AndAlso Not CType(e.CommandArgument, Pair).First = "NoFilter") Then
	            e.Canceled = True
	             Dim filterItem As GridFilteringItem = CType(e.Item, GridFilteringItem)
	
	             Dim currentPattern As String = CType(filterItem(CType(e.CommandArgument, Pair).Second).Controls(0), TextBox).Text
	             Dim filterPattern As String
	             Dim filterPatternAssist As String
	
	             If (Not currentPattern.IndexOf(" ") = -1) Then
	                currentPattern = currentPattern.Replace(" ", "/")
	             End If
	             Dim vals As String() = currentPattern.Split("/")
	
	             Dim filterOption As String = CType(e.CommandArgument, Pair).First
	
	             If (Not filterOption = "IsNull" AndAlso Not filterOption = "NotIsNull") Then
	                 If (vals.Length > 3) Then
	                    filterPatternAssist = vals(4) & "/" & vals(3) & "/" & vals(5)
	                 End If
	                filterPattern = vals(1) & "/" & vals(0) & "/" & vals(2)
	             End If
	
	             Dim dateColumn As GridBoundColumn = CType(e.Item.OwnerTableView.GetColumnSafe("OrderDate"), GridBoundColumn)
	
	             Select Case filterOption
	                 Case "EqualTo"
	                    filterPattern = "[OrderDate] = '" & filterPattern & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.EqualTo
	                 Case "NotEqualTo"
	                    filterPattern = "Not [OrderDate] = '" & filterPattern & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.NotEqualTo
	                 Case "GreaterThan"
	                    filterPattern = "[OrderDate] > '" & filterPattern & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.GreaterThan
	                 Case "LessThan"
	                    filterPattern = "[OrderDate] < '" & filterPattern & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.LessThan
	                 Case "GreaterThanOrEqualTo"
	                    filterPattern = "[OrderDate] >= '" & filterPattern & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.GreaterThanOrEqualTo
	                 Case "LessThanOrEqualTo"
	                    filterPattern = "[OrderDate] <= '" & filterPattern & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.LessThanOrEqualTo
	                 Case "Between"
	                    filterPattern = "'" & filterPattern & "' <= [OrderDate] AND [OrderDate] <= '" & filterPatternAssist & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.Between
	                 Case "NotBetween"
	                    filterPattern = "[OrderDate] <= '" & filterPattern & "' OR [OrderDate] >= '" & filterPatternAssist & "'"
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.NotBetween
	                 Case "IsNull"
	                 Case "NotIsNull"
	             End Select
	
	             For Each column As GridColumn In RadGrid1.MasterTableView.Columns
	                 If (Not column.UniqueName = "OrderDate") Then
	                    column.CurrentFilterFunction = GridKnownFunction.NoFilter
	                    column.CurrentFilterValue = String.Empty
	                 End If
	             Next
	
	            Session( "filterPattern") = filterPattern
	
	            dateColumn.CurrentFilterValue = currentPattern
	
	            filterItem.OwnerTableView.Rebind()
	
	         'Add more conditional checks for commands here if necessary
	          ElseIf (Not e.CommandName = RadGrid.SortCommandName AndAlso Not e.CommandName = RadGrid.PageCommandName) Then
	            Session( "filterPattern") = Nothing
	
	             Dim dateColumn As GridBoundColumn = CType(e.Item.OwnerTableView.GetColumnSafe("OrderDate"), GridBoundColumn)
	            dateColumn.CurrentFilterFunction = GridKnownFunction.NoFilter
	            dateColumn.CurrentFilterValue = String.Empty
	         End If
	
	End Sub
	
	Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
	        RadGrid1.DataSource = GetDataTable("SELECT ShipName, ShipAddress, OrderDate FROM Orders")
	
	         If (Not Session("filterPattern") Is Nothing) Then
	            RadGrid1.MasterTableView.FilterExpression = CType(Session("filterPattern"), String)
	         End If
	    End Sub
````
````C#
	    public static string connectionString = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("~/App_Data/Nwind.mdb");
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
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.FilterCommandName &&
	        ((Pair)e.CommandArgument).Second.ToString() == "OrderDate"
	         &&
	        ((Pair)e.CommandArgument).First != "NoFilter")
	        {
	            e.Canceled = true;
	            GridFilteringItem filterItem = (GridFilteringItem)e.Item;
	            string currentPattern = (filterItem[((Pair)e.CommandArgument).Second.ToString()].Controls[0] as TextBox).Text;
	            string filterPattern = "";
	            string filterPatternAssist = "";
	            if (currentPattern.IndexOf(" ") != -1)
	            {
	                currentPattern = currentPattern.Replace(" ", "/");
	            }
	            string[] vals = currentPattern.Split("/".ToCharArray());
	            string filterOption = (e.CommandArgument as Pair).First.ToString();
	            if (filterOption != "IsNull" && filterOption != "NotIsNull")
	            {
	                if (vals.Length > 3)
	                {
	                    filterPatternAssist = vals[4] + "/" + vals[3] + "/" + vals[5];
	                }
	                filterPattern = vals[1] + "/" + vals[0] + "/" + vals[2];
	            }
	            GridBoundColumn dateColumn = (GridBoundColumn)e.Item.OwnerTableView.GetColumnSafe("OrderDate");
	            switch (filterOption)
	            {
	                case "EqualTo":
	                    filterPattern = "[OrderDate] = '" + filterPattern + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.EqualTo;
	                    break;
	                case "NotEqualTo":
	                    filterPattern = "Not [OrderDate] = '" + filterPattern + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.NotEqualTo;
	                    break;
	                case "GreaterThan":
	                    filterPattern = "[OrderDate] > '" + filterPattern + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.GreaterThan;
	                    break;
	                case "LessThan":
	                    filterPattern = "[OrderDate] < '" + filterPattern + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.LessThan;
	                    break;
	                case "GreaterThanOrEqualTo":
	                    filterPattern = "[OrderDate] >= '" + filterPattern + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.GreaterThanOrEqualTo;
	                    break;
	                case "LessThanOrEqualTo":
	                    filterPattern = "[OrderDate] <= '" + filterPattern + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.LessThanOrEqualTo;
	                    break;
	                case "Between":
	                    filterPattern = "'" + filterPattern + "' <= [OrderDate] AND [OrderDate] <= '" + filterPatternAssist + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.Between;
	                    break;
	                case "NotBetween":
	                    filterPattern = "[OrderDate] <= '" + filterPattern + "' OR [OrderDate] >= '" + filterPatternAssist + "'";
	                    dateColumn.CurrentFilterFunction = GridKnownFunction.NotBetween;
	                    break;
	                case "IsNull":
	                    break;
	                case "NotIsNull":
	                    break;
	            }
	            foreach (GridColumn column in RadGrid1.MasterTableView.Columns)
	            {
	                if (column.UniqueName != "OrderDate")
	                {
	                    column.CurrentFilterFunction = GridKnownFunction.NoFilter;
	                    column.CurrentFilterValue = string.Empty;
	                }
	            }
	            Session["filterPattern"] = filterPattern;
	            dateColumn.CurrentFilterValue = currentPattern;
	            filterItem.OwnerTableView.Rebind();
	        }
	        //Add more conditional checks for commands here if necessary
	        else if (e.CommandName != RadGrid.SortCommandName && e.CommandName != RadGrid.PageCommandName)
	        {
	            Session["filterPattern"] = null;
	            GridBoundColumn dateColumn = (GridBoundColumn)e.Item.OwnerTableView.GetColumnSafe("OrderDate");
	            dateColumn.CurrentFilterFunction = GridKnownFunction.NoFilter;
	            dateColumn.CurrentFilterValue = string.Empty;
	        }
	    }
	    protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        RadGrid1.DataSource = GetDataTable("SELECT ShipName, ShipAddress, OrderDate FROM Orders");
	        if (Session["filterPattern"] != null)
	        {
	            RadGrid1.MasterTableView.FilterExpression = (string)Session["filterPattern"];
	        }
	    }
````


>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (EnableLinqExpressions = true), the filter expressions set for the grid either internally by its filtering mechanism or manually in code should conform to the LINQ expression syntax instead of the old T-SQL syntax. Only thus they will be evaluated properly by the control.
>

