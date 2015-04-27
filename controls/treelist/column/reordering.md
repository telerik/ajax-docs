---
title: Reordering
page_title: Reordering | RadTreeList for ASP.NET AJAX Documentation
description: Reordering
slug: treelist/column/reordering
tags: reordering
published: True
position: 3
---

# Reordering



You can allow users to set the order of the treelist columns by dragging and dropping them. Just set the **ClientSettings.Reordering.AllowColumnsReorder** property to **True**. When the user dragsa column header to a new location, the treelist indicates where the column will be inserted when it is dropped:

Additionally, in case you enabled scrolling and have a horizontal scroll for navigation, the treelist would be "smart" to auto-scroll when you drag columns and reach the end of the visible region (when you attempt to reorder the column with another outside of the visible area).

There are two possible modes for column reordering: client and server-side. If you want to reorder columns on client,set the **ClientSettings.Reordering.ReorderColumnsOnClient** property to **True**.

* When columns are reordered on the client, The **ClientSettings.Reordering.ColumnsReorderMethod** property determines what happens when the user drops a column in a new position. When **ColumnsReorderMethod** is "Swap" (the default), switches places of two columns. Columns between them do not change order.When **ColumnsReorderMethod** is "Reorder", places the first (dragged) column at the place of the second(dropped on) column. Columns between them also change order.

* When columns are reordered on the server, the treelist uses the "swap" method multiple times to re-order columns.

## Reordering columns programmatically

When columns are created programmatically, they appear in the same order that they were added to the**Columns** collection. You can reorder columns dynamically in server-side code using any of the following methods:

* The **SwapColumns(String,String)** method accepts the **UniqueNames** for twocolumns to swap:



````C#
treelist.SwapColumns("FirstName", "LastName");
````
````VB.NET
treelist.SwapColumns("FirstName", "LastName")
````


* The **SwapColumns(Int32,Int32)** method accepts the indexes of two columns to swap:



````C#
treelist.SwapColumns(3, 4);
````
````VB.NET
treelist.SwapColumns(3, 4)
````


* The **OrderIndex** property lets you change the position of columns to move them to a specificlocation:



````C#
TreeListColumnsCollection cols = treelist.Columns;
TreeListColumn c = cols.FindByUniqueName(columnName);
if (c != null)
{
	int start = c.OrderIndex;
	for (int i = start; i < cols.Count; i++)
	{
		c = cols[i];
		if (i < cols.Count - 1)
			c.OrderIndex = i + 1;
		else
			c.OrderIndex = start;
	}
}
````
````VB.NET
Dim cols As TreeListColumnsCollection = treelist.Columns
Dim c As TreeListColumn = cols.FindByUniqueName(columnName)
If c IsNot Nothing Then
	Dim start As Integer = c.OrderIndex
	For i As Integer = start To cols.Count - 1
		c = cols(i)
		If i < cols.Count - 1 Then
			c.OrderIndex = i + 1
		Else
			c.OrderIndex = start
		End If
	Next
End If
````


>caution When using the **OrderIndex** property to reorder columns, make sure that you assign valuesso that no two columns have the same index and no index is omitted.
>

