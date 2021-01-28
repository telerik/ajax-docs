---
title: Display Sort Index for Multi-Column Sorting
page_title: Display Sort Index for Multi-Column Sorting - RadGrid
description: Check our Web Forms article about Display Sort Index for Multi-Column Sorting.
slug: grid/how-to/sorting/display-sort-index-for-multi-column-sorting
tags: sort,index,grid,multi-column
published: True
position: 8
---


#  Display Sort Index for Multi-Column Sorting

This how to article presents a possible solution for displaying sort index of grid columns when multi-column sorting is enabled(**AllowMultiColumnSorting="True"**).

From the code inside grid **PreRender** event you can see how to represent a numeric sequence of the order in which the columns are sorted.

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource" AllowPaging="true"
	OnPreRender="RadGrid1_PreRender" MasterTableView-AllowMultiColumnSorting="true"
	 AllowSorting="true">
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
	DataTable table = new DataTable();
	table.Columns.Add("ID", typeof(int));
	table.Columns.Add("FirstName", typeof(string));
	table.Columns.Add("LastName", typeof(string));
	table.Columns.Add("Age", typeof(int));
	table.Columns.Add("Date", typeof(DateTime));
	table.Columns.Add("BoolValue", typeof(Boolean));
	for (int i = 0; i < 55; i++)
	{
		table.Rows.Add(i, "FirstName" + i, "LastName" + i, 20 + i, DateTime.Now.AddDays(i), i % 2 == 0);
	}

	(sender as RadGrid).DataSource = table;
}

protected void RadGrid1_PreRender(object sender, EventArgs e)
{
	GridHeaderItem headerItem = RadGrid1.MasterTableView.GetItems(GridItemType.Header)[0] as GridHeaderItem;
	int sortIndex = 1;
	foreach (GridSortExpression expression in RadGrid1.MasterTableView.SortExpressions)
	{
		foreach (GridColumn column in RadGrid1.MasterTableView.RenderColumns)
		{
			if (column is IGridDataColumn)
			{
				if (expression.FieldName == (column as IGridDataColumn).GetActiveDataField())
				{
					TableCell cell = headerItem[column.UniqueName];
					Literal literal = new Literal();
					literal.Text = sortIndex.ToString();
					cell.Controls.Add(literal);
				}
			}
		}

		sortIndex++;
	}
}
````





