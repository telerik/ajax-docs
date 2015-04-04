---
title: Custom Option for Filtering
page_title: Custom Option for Filtering | UI for ASP.NET AJAX Documentation
description: Custom Option for Filtering
slug: grid/functionality/filtering/how-to/custom-option-for-filtering
tags: custom,option,for,filtering
published: True
position: 12
---

# Custom Option for Filtering



You can use the "Custom" filter function to introduce a filter function that is not included in the default list, or to allow multiple columns with the same data type to have different filtering menus.

The __RadGrid__ filtering menu is implemented using a single object server-side, which is cloned for the separate column menus that appear client-side. This implementation speeds up grid performance, but means that every column of the same data type displays the same list of available filter functions.

Suppose you want to remove a filtering option from the menu of a column while leaving it available in the menu of another column that has the same data type. You can accomplish this in the following way:

1. Add a handler for the __Init__ event of the grid. In the __Init__ event handler,

1. Remove the filtering function from the __FilterMenu__ of the grid. This removes it from the menu of all the columns in the grid.

1. Change the menu item for the "Custom" filtering function so that its text is the name of the filtering function you removed.

1. On any column that should allow the removed filtering function, set the __FilterListOptions__ property to __VaryByDataTypeAllowCustom__. This adds a "Custom" option (which now looks like the removed filtering function) to the end of the filter menu for that column.

1. Add a handler for the __ItemCommand__ event of the grid. In the __ItemCommand__ event handler,

1. Identify commands from the filter menu by checking that the value of __e.CommandName__ is __RadGrid.FilterCommandName__.

1. The value of __e.CommandArgument__ is a __Pair__ object that contains the name of the filtering function and the __UniqueName__ of the column.

1. When the filtering function is "Custom", change it to the name of the filtering function you removed.

1. As an alternate approach, when the filtering function is "Custom", you can

* Set __e.Canceled__ to __True__ to cancel the default filtering.

* Set the __FilterExpression__ property of the table that contains the column to a valid filter expression. Be sure to honor any existing filter expression that is already set.

* Rebind the grid to apply the filter expression.

## Example 1: Changing the filter function name



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowFilteringByColumn="True" AutoGenerateColumns="False"
	    DataSourceID="SqlDataSource1" OnInit="RadGrid1_Init" OnItemCommand="RadGrid1_ItemCommand">
	    <MasterTableView>
	      <Columns>
	        <telerik:GridBoundColumn DataField="CustomerID" FilterListOptions="VaryByDataTypeAllowCustom"
	          HeaderText="ID" UniqueName="CustomerID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="CompanyName" FilterListOptions="VaryByDataType"
	          HeaderText="Company" UniqueName="CompanyName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="ContactName" FilterListOptions="VaryByDataType"
	          HeaderText="Contact" UniqueName="ContactName">
	        </telerik:GridBoundColumn>
	      </Columns>
	    </MasterTableView>
	 </telerik:RadGrid>
	 <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT * FROM [Customers]" >
	 </asp:SqlDataSource>
````
````C#
	    protected void RadGrid1_Init(object sender, EventArgs e)
	    {
	        GridFilterMenu menu = RadGrid1.FilterMenu;
	        // Iterate through the items backwards 
	        // so that the indexing is not thrown off 
	        // when items are removed! 
	        for (int i = menu.Items.Count - 1; i >= 0; i--)
	        {
	            if (menu.Items[i].Text == "Between")
	            {
	                menu.Items.RemoveAt(i);
	            }
	            else if (menu.Items[i].Text == "Custom")
	                menu.Items[i].Text = "Between";
	        }
	    }
	    protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.FilterCommandName)
	        {
	            Pair filterPair = (Pair)e.CommandArgument;
	            if (filterPair.First.ToString() == "Custom")
	            {
	                filterPair.First = "Between";
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_Init(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.Init
	        Dim menu As GridFilterMenu = RadGrid1.FilterMenu
	        ' Iterate through the items backwards
	        ' so that the indexing is not thrown off
	        ' when items are removed!
	        Dim i As Integer = menu.Items.Count - 1
	        While i >= 0
	            If menu.Items(i).Text = "Between" Then
	                menu.Items.RemoveAt(i)
	            ElseIf menu.Items(i).Text = "Custom" Then
	                menu.Items(i).Text = "Between"
	            End If
	            System.Math.Max(System.Threading.Interlocked.Decrement(i), i + 1)
	        End While
	    End Sub
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If e.CommandName = RadGrid.FilterCommandName Then
	            Dim filterPair As Pair = CType(e.CommandArgument, Pair)
	            If filterPair.First.ToString() = "Custom" Then
	                filterPair.First = "Between"
	            End If
	        End If
	    End Sub
````


## Example2: Replacing the filter expression

For this example, you can use the same ASPX file and __Init__ handler as the last example. Only the __ItemCommand__ handler is different. In the example that follows, the grid behaves the same way as in the previous example. However, this approach is more extendable, as you can introduce any valid filter expression, not just mimic the behavior of one of the built-in choices.



````C#
	    protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.FilterCommandName)
	        {
	            Pair filterPair = (Pair)e.CommandArgument;
	            if (filterPair.First.ToString() == "Custom")
	            {
	                string colName = filterPair.Second.ToString();
	                TextBox tbPattern = (e.Item as GridFilteringItem)[colName].Controls[0] as TextBox;
	                string[] values = tbPattern.Text.Split(' ');
	                if (values.Length == 2)
	                {
	                    e.Canceled = true;
	                    string newFilter = "(([" + filterPair.Second + "] >='" + values[0] + "') AND ([" + filterPair.Second + "] <='" + values[1] + "'))";
	                    if (RadGrid1.MasterTableView.FilterExpression == "")
	                    {
	                        RadGrid1.MasterTableView.FilterExpression = newFilter;
	                    }
	                    else
	                    {
	                        RadGrid1.MasterTableView.FilterExpression = "((" + RadGrid1.MasterTableView.FilterExpression + ") AND (" + newFilter + "))";
	                    }
	                    RadGrid1.Rebind();
	                }
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If e.CommandName = RadGrid.FilterCommandName Then
	            Dim filterPair As Pair = CType(e.CommandArgument, Pair)
	            If filterPair.First.ToString() = "Custom" Then
	                Dim colName As String = filterPair.Second.ToString()
	                Dim tbPattern As TextBox = CType((CType(e.Item, GridFilteringItem))(colName).Controls(0), TextBox)
	                Dim values As String() = tbPattern.Text.Split(" "c)
	                If values.Length = 2 Then
	                    e.Canceled = True
	                    Dim newFilter As String = "(([" + filterPair.Second + "] >='" + values(0) + "') AND ([" + filterPair.Second + "] <='" + values(1) + "'))"
	                    If RadGrid1.MasterTableView.FilterExpression = "" Then
	                        RadGrid1.MasterTableView.FilterExpression = newFilter
	                    Else
	                        RadGrid1.MasterTableView.FilterExpression = "((" + RadGrid1.MasterTableView.FilterExpression + ") AND (" + newFilter + "))"
	                    End If
	                    RadGrid1.Rebind()
	                End If
	            End If
	        End If
	    End Sub
````


>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (EnableLinqExpressions = true), the filter expressions set for the grid either internally by its filtering mechanism or manually in code should conform to the LINQ expression syntax instead of the old T-SQL syntax. Only thus they will be evaluated properly by the control.
>

