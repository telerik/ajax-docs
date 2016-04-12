---
title: Integration with Telerik Document Processing Library
page_title: Integration with Telerik Document Processing Library | RadTreeList for ASP.NET AJAX Documentation
description: Integration with Telerik Document Processing Library
slug: treelist/functionality/exporting/integration-with-telerik-document-processing-library
tags: integration,with,telerik,document,processing,library
published: True
position: 4
---

# Integration with Telerik Document Processing Library



The **Telerik document processing libraries** allow you export RadTreeList to Excel or Word with the appropriately **xlsx** and **docx** extension. Those extensions are used by Excel Microsoft Office version 2007 and above. These libraries are supported since the Q2 2014 version of **Telerik UI for ASP.NET AJAX**. More information about the assemblies and how to include them in your project can be found in the [Included assemblies](http://www.telerik.com/help/aspnet-ajax/introduction-included-assemblies.html) help article.

## Exporting RadTreeList to Excel

The assemblies that must be referenced in order to export the RadGrid are:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Spreadsheet.dll

For export and import to XLSX:

* Telerik.Windows.Zip.dll

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll

The following steps walk you through the entire process of creating an Excel document and then export it to the server.

1. Create an instance of the Workbook class and add a new Worksheet object to the Worksheets collection.

	**C#**
	
		Workbook workbook = new Workbook();
		Worksheet worksheet = workbook.Worksheets.Add();
	
	**VB.NET**
	
		Dim workbook As New Workbook()
		Dim worksheet As Worksheet = workbook.Worksheets.Add()
	
2. Traverse all cells of each item which will be contained in the exported file and assign their text to the appropriate cell of the Excel document. In the following code snippet an enumeration with tree values is created which will help you get the items which need to be exported.



	**C#**
	
		static TreeListItemType[] supportedItemTypes = new TreeListItemType[] 
		{ 
			TreeListItemType.HeaderItem, 
			TreeListItemType.AlternatingItem, 
			TreeListItemType.Item 
		};
	
	**VB.NET**
	
		Shared supportedItemTypes As TreeListItemType() = New TreeListItemType() {TreeListItemType.HeaderItem, TreeListItemType.AlternatingItem, TreeListItemType.Item}


	**C#**
	
		TreeListItem item;

		var treeListItems = RadTreeList1.GetItems(supportedItemTypes);
		int maxLevel = RadTreeList1.GetMaximumNestedLevel();

		for (int itemNum = 0; itemNum < treeListItems.Length; itemNum++)
		{
			item = treeListItems[itemNum];

			for (int cellNum = 0; cellNum < item.Cells.Count; cellNum++)
			{
				var currentCell = item.Cells[cellNum];
				var dataItem = item as TreeListDataItem;

				CellSelection excelCell = null;
				if (item is TreeListHeaderItem)
				{
					if (cellNum == 0)
					{
						excelCell = worksheet.Cells[itemNum, 0, itemNum, maxLevel + 1];
						excelCell.Merge();
					}
					else
					{
						excelCell = worksheet.Cells[itemNum, cellNum + maxLevel + 1];
					}
				}
				else if (dataItem != null)
				{
					if (cellNum == dataItem.HierarchyIndex.NestedLevel + 1)
					{
						excelCell = worksheet.Cells[itemNum, cellNum, itemNum, maxLevel + 1];
						excelCell.Merge();
					}
					else if (cellNum == dataItem.HierarchyIndex.NestedLevel)
					{
						worksheet.Cells[itemNum, cellNum].SetValue(GetButtonCellText(dataItem));
					}
					else if (cellNum > 0)
					{
						excelCell = worksheet.Cells[itemNum, cellNum + maxLevel - dataItem.HierarchyIndex.NestedLevel];
					}
				}
				if (excelCell != null)
				{
					excelCell.SetValue(GetCellText(currentCell.Text));
				}
			}
		}

	**VB.NET**
	
		Dim item As TreeListItem

		Dim treeListItems = RadTreeList1.GetItems(supportedItemTypes)
		Dim maxLevel As Integer = RadTreeList1.GetMaximumNestedLevel()

		For itemNum As Integer = 0 To treeListItems.Length - 1
			item = treeListItems(itemNum)

			For cellNum As Integer = 0 To item.Cells.Count - 1
		Dim currentCell = item.Cells(cellNum)
		Dim dataItem = TryCast(item, TreeListDataItem)

		Dim excelCell As CellSelection = Nothing
				If TypeOf item Is TreeListHeaderItem Then
					If cellNum = 0 Then
						excelCell = worksheet.Cells(itemNum, 0, itemNum, maxLevel + 1)
						excelCell.Merge()
					Else
						excelCell = worksheet.Cells(itemNum, cellNum + maxLevel + 1)
					End If
				ElseIf dataItem IsNot Nothing Then
					If cellNum = dataItem.HierarchyIndex.NestedLevel + 1 Then
						excelCell = worksheet.Cells(itemNum, cellNum, itemNum, maxLevel + 1)
						excelCell.Merge()
					ElseIf cellNum = dataItem.HierarchyIndex.NestedLevel Then
						worksheet.Cells(itemNum, cellNum).SetValue(GetButtonCellText(dataItem))
					ElseIf cellNum > 0 Then
						excelCell = worksheet.Cells(itemNum, cellNum + maxLevel - dataItem.HierarchyIndex.NestedLevel)
					End If
				End If
				If excelCell IsNot Nothing Then
					excelCell.SetValue(GetCellText(currentCell.Text))
				End If
			Next
		Next


3. After the worksheet is populated with data an instance of the **XlsxFormatProvider** is created and by callingits **Export** method a file is generated on the server.



	**C#**
	
		Workbook workbook = structure as Workbook;
		byte[] output;

		using (MemoryStream ms = new MemoryStream())
		{
			
			XlsxFormatProvider provider = new XlsxFormatProvider();
			provider.Export(workbook, ms);
			
			ms.Position = 0;
			output = ms.ToArray();
		}

		Response.ContentType = flowDoc != null ? "application/msword" : "application/excel";
		Response.AddHeader("content-disposition", "attachment; filename=" + fileName);
		Response.BinaryWrite(output);
		Response.Flush();
		Response.Close();

	**VB.NET**
	
		Dim workbook As Workbook = TryCast([structure], Workbook)
		Dim output As Byte()

		Using ms As New MemoryStream()

		Dim provider As New XlsxFormatProvider()
			provider.Export(workbook, ms)

			ms.Position = 0
			output = ms.ToArray()
		End Using

		Response.ContentType = If(flowDoc IsNot Nothing, "application/msword", "application/excel")
		Response.AddHeader("content-disposition", "attachment; filename=" + fileName)
		Response.BinaryWrite(output)
		Response.Flush()
		Response.Close()


After following all these steps you will get the following example that presents exporting on button click.

````ASPNET
<telerik:RadScriptManager ID="RadScriptManager2" runat="server">  
</telerik:RadScriptManager>
<asp:Button ID="Button2" runat="server" Text="XLSX" OnClick="Button2_Click" />
<telerik:RadTreeList RenderMode="Lightweight" ID="RadTreeList1" runat="server" OnNeedDataSource="RadTreeList1_NeedDataSource" AllowPaging="true" ParentDataKeyNames="ParentIndex" DataKeyNames="Index">
	<ExportSettings IgnorePaging="true"></ExportSettings>
</telerik:RadTreeList>
````
````C#
static TreeListItemType[] supportedItemTypes = new TreeListItemType[] 
{ 
	TreeListItemType.HeaderItem, 
	TreeListItemType.AlternatingItem, 
	TreeListItemType.Item 
};

private void ExportToXlsx()
{
	string fileName = "RadTreeList.xlsx";
	string filePath = Server.MapPath(fileName);

	Workbook workbook = new Workbook();
	Worksheet worksheet = workbook.Worksheets.Add();
	TreeListItem item;

	var treeListItems = RadTreeList1.GetItems(supportedItemTypes);
	int maxLevel = RadTreeList1.GetMaximumNestedLevel();

	for (int itemNum = 0; itemNum < treeListItems.Length; itemNum++)
	{
		item = treeListItems[itemNum];

		for (int cellNum = 0; cellNum < item.Cells.Count; cellNum++)
		{
			var currentCell = item.Cells[cellNum];
			var dataItem = item as TreeListDataItem;

			CellSelection excelCell = null;
			if (item is TreeListHeaderItem)
			{
				if (cellNum == 0)
				{
					excelCell = worksheet.Cells[itemNum, 0, itemNum, maxLevel + 1];
					excelCell.Merge();
				}
				else
				{
					excelCell = worksheet.Cells[itemNum, cellNum + maxLevel + 1];
				}
			}
			else if (dataItem != null)
			{
				if (cellNum == dataItem.HierarchyIndex.NestedLevel + 1)
				{
					excelCell = worksheet.Cells[itemNum, cellNum, itemNum, maxLevel + 1];
					excelCell.Merge();
				}
				else if (cellNum == dataItem.HierarchyIndex.NestedLevel)
				{
					worksheet.Cells[itemNum, cellNum].SetValue(GetButtonCellText(dataItem));
				}
				else if (cellNum > 0)
				{
					excelCell = worksheet.Cells[itemNum, cellNum + maxLevel - dataItem.HierarchyIndex.NestedLevel];
				}
			}
			if (excelCell != null)
			{
				excelCell.SetValue(GetCellText(currentCell.Text));
			}
		}
	}

	GenerateFile(workbook, fileName);
}

private string GetButtonCellText(TreeListDataItem dataItem)
{
	string buttonText = String.Empty;

	if (dataItem.CanExpand)
	{
		buttonText = dataItem.Expanded ? "-" : "+";
	}

	return buttonText;
}

private void GenerateFile(object structure, string fileName)
{
	RadFlowDocument flowDoc = structure as RadFlowDocument;
	Workbook workbook = structure as Workbook;

	byte[] output;

	using (MemoryStream ms = new MemoryStream())
	{
		XlsxFormatProvider provider = new XlsxFormatProvider();
		provider.Export(workbook, ms);
		ms.Position = 0;
		output = ms.ToArray();
	}

	Response.ContentType = flowDoc != null ? "application/msword" : "application/excel";
	Response.AddHeader("content-disposition", "attachment; filename=" + fileName);
	Response.BinaryWrite(output);
	Response.Flush();
	Response.Close();
}

private string GetCellText(string text)
{
	return text.Replace("&nbsp;", "");
}

private void PrepareForExport()
{
	if (CheckBox1.Checked)
	{
		RadTreeList1.ExpandAllItems();
	}

	RadTreeList1.AllowPaging = false;
	RadTreeList1.Rebind();
}

protected void Button2_Click(object sender, EventArgs e)
{
	ExportToXlsx();
}
````
````VB.NET
Shared supportedItemTypes As TreeListItemType() = New TreeListItemType() {TreeListItemType.HeaderItem, TreeListItemType.AlternatingItem, TreeListItemType.Item}

Private Sub ExportToXlsx()
	Dim fileName As String = "RadTreeList.xlsx"
	Dim filePath As String = Server.MapPath(fileName)

	Dim workbook As New Workbook()
	Dim worksheet As Worksheet = workbook.Worksheets.Add()
	Dim item As TreeListItem

	Dim treeListItems = RadTreeList1.GetItems(supportedItemTypes)
	Dim maxLevel As Integer = RadTreeList1.GetMaximumNestedLevel()

	For itemNum As Integer = 0 To treeListItems.Length - 1
		item = treeListItems(itemNum)

		For cellNum As Integer = 0 To item.Cells.Count - 1
			Dim currentCell = item.Cells(cellNum)
			Dim dataItem = TryCast(item, TreeListDataItem)

			Dim excelCell As CellSelection = Nothing
			If TypeOf item Is TreeListHeaderItem Then
				If cellNum = 0 Then
					excelCell = worksheet.Cells(itemNum, 0, itemNum, maxLevel + 1)
					excelCell.Merge()
				Else
					excelCell = worksheet.Cells(itemNum, cellNum + maxLevel + 1)
				End If
			ElseIf dataItem IsNot Nothing Then
				If cellNum = dataItem.HierarchyIndex.NestedLevel + 1 Then
					excelCell = worksheet.Cells(itemNum, cellNum, itemNum, maxLevel + 1)
					excelCell.Merge()
				ElseIf cellNum = dataItem.HierarchyIndex.NestedLevel Then
					worksheet.Cells(itemNum, cellNum).SetValue(GetButtonCellText(dataItem))
				ElseIf cellNum > 0 Then
					excelCell = worksheet.Cells(itemNum, cellNum + maxLevel - dataItem.HierarchyIndex.NestedLevel)
				End If
			End If
			If excelCell IsNot Nothing Then
				excelCell.SetValue(GetCellText(currentCell.Text))
			End If
		Next
	Next

	GenerateFile(workbook, fileName)
End Sub

Private Function GetButtonCellText(dataItem As TreeListDataItem) As String
	Dim buttonText As String = [String].Empty

	If dataItem.CanExpand Then
		buttonText = If(dataItem.Expanded, "-", "+")
	End If

	Return buttonText
End Function

Private Sub GenerateFile([structure] As Object, fileName As String)
	Dim flowDoc As RadFlowDocument = TryCast([structure], RadFlowDocument)
	Dim workbook As Workbook = TryCast([structure], Workbook)

	Dim output As Byte()

	Using ms As New MemoryStream()
		Dim provider As New XlsxFormatProvider()
		provider.Export(workbook, ms)
		ms.Position = 0
		output = ms.ToArray()
	End Using

	Response.ContentType = If(flowDoc IsNot Nothing, "application/msword", "application/excel")
	Response.AddHeader("content-disposition", Convert.ToString("attachment; filename=") & fileName)
	Response.BinaryWrite(output)
	Response.Flush()
	Response.Close()
End Sub

Private Function GetCellText(text As String) As String
	Return text.Replace("&nbsp;", "")
End Function

Private Sub PrepareForExport()
	If CheckBox1.Checked Then
		RadTreeList1.ExpandAllItems()
	End If

	RadTreeList1.AllowPaging = False
	RadTreeList1.Rebind()
End Sub

Protected Sub Button2_Click(sender As Object, e As EventArgs)
	ExportToXlsx()
End Sub
````


## Exporting RadTreeList to Word

The assemblies that must be referenced in order to export the RadTreeList are:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Flow.dll

* Telerik.Windows.Zip.dll

The following steps walk you through the entire process of creating an Word document and then export it to the server.

1. Create an instance of the **RadFlowDocument** class and add a new **Section** object to the **Sections** collection. After the section is created a new **Table** object is added to it.



	**C#**
	
		RadFlowDocument flowDoc = new RadFlowDocument();
		Section section = flowDoc.Sections.AddSection();
		Table mainTable = section.Blocks.AddTable();

	**VB.NET**
	
		Dim flowDoc As New RadFlowDocument()
		Dim section As Section = flowDoc.Sections.AddSection()
		Dim mainTable As Table = section.Blocks.AddTable()

1. Traverse all cells of each item which will be contained in the exported file and assign their text to the appropriate cell of the createdWord table. In the following code snippet an enumeration with tree values is created which will help you get the items which need to be exported.



	**C#**
	
		static TreeListItemType[] supportedItemTypes = new TreeListItemType[] 
		{ 
			TreeListItemType.HeaderItem, 
			TreeListItemType.AlternatingItem, 
			TreeListItemType.Item 
		};
	
	**VB.NET**
	
		Shared supportedItemTypes As TreeListItemType() = New TreeListItemType() {TreeListItemType.HeaderItem, TreeListItemType.AlternatingItem, TreeListItemType.Item}
	

	**C#**
	
		TreeListItem item;
		TableRow row;

		var treeListItems = RadTreeList1.GetItems(supportedItemTypes);
		int maxLevel = RadTreeList1.GetMaximumNestedLevel() + 1;

		for (int itemNum = 0; itemNum < treeListItems.Length; itemNum++)
		{
			item = treeListItems[itemNum];
			row = mainTable.Rows.AddTableRow();

			for (int cellNum = 0; cellNum < item.Cells.Count; cellNum++)
			{
				var currentCell = item.Cells[cellNum];
				var dataItem = item as TreeListDataItem;
				string cellText = currentCell.Text;
				TableCell td = row.Cells.AddTableCell();

				var currentGridCell = item.Cells[cellNum];

				if (item is TreeListHeaderItem)
				{
					if (cellNum == 0)
					{
						td.ColumnSpan = maxLevel + 1;
					}
				}
				else if (dataItem != null)
				{
					if (cellNum == dataItem.HierarchyIndex.NestedLevel)
					{
						cellText = GetButtonCellText(dataItem);
					}
					else if (cellNum == dataItem.HierarchyIndex.NestedLevel + 1)
					{
						td.ColumnSpan = maxLevel - dataItem.HierarchyIndex.NestedLevel;
					}
				}

				SetDocxCellText(td, GetCellText(cellText));
			}
		}

	**VB.NET**
	
		Dim item As TreeListItem
		Dim row As TableRow

		Dim treeListItems = RadTreeList1.GetItems(supportedItemTypes)
		Dim maxLevel As Integer = RadTreeList1.GetMaximumNestedLevel() + 1

		For itemNum As Integer = 0 To treeListItems.Length - 1
			item = treeListItems(itemNum)
			row = mainTable.Rows.AddTableRow()

			For cellNum As Integer = 0 To item.Cells.Count - 1
		Dim currentCell = item.Cells(cellNum)
		Dim dataItem = TryCast(item, TreeListDataItem)
		Dim cellText As String = currentCell.Text
		Dim td As TableCell = row.Cells.AddTableCell()

		Dim currentGridCell = item.Cells(cellNum)

				If TypeOf item Is TreeListHeaderItem Then
					If cellNum = 0 Then
						td.ColumnSpan = maxLevel + 1
					End If
				ElseIf dataItem IsNot Nothing Then
					If cellNum = dataItem.HierarchyIndex.NestedLevel Then
						cellText = GetButtonCellText(dataItem)
					ElseIf cellNum = dataItem.HierarchyIndex.NestedLevel + 1 Then
						td.ColumnSpan = maxLevel - dataItem.HierarchyIndex.NestedLevel
					End If
				End If

				SetDocxCellText(td, GetCellText(cellText))
			Next
		Next



1. After the worksheet is populated with data an instance of the **DocxFormatProvider** is created and by calling its **Export** method a file is generated on the server.



	**C#**
	
		RadFlowDocument flowDoc = structure as RadFlowDocument;

		byte[] output;

		using (MemoryStream ms = new MemoryStream())
		{
			
			XlsxFormatProvider provider = new XlsxFormatProvider();
			provider.Export(workbook, ms);
			ms.Position = 0;
			output = ms.ToArray();
		}

		Response.ContentType = flowDoc != null ? "application/msword" : "application/excel";
		Response.AddHeader("content-disposition", "attachment; filename=" + fileName);
		Response.BinaryWrite(output);
		Response.Flush();
		Response.Close();

	**VB.NET**
	
		Dim flowDoc As RadFlowDocument = TryCast([structure], RadFlowDocument)

		Dim output As Byte()

		Using ms As New MemoryStream()

		Dim provider As New XlsxFormatProvider()
			provider.Export(workbook, ms)
			ms.Position = 0
			output = ms.ToArray()
		End Using

		Response.ContentType = If(flowDoc IsNot Nothing, "application/msword", "application/excel")
		Response.AddHeader("content-disposition", "attachment; filename=" + fileName)
		Response.BinaryWrite(output)
		Response.Flush()
		Response.Close()



After following all these steps you will get the following example that presents exporting on button click.

````ASPNET
<telerik:RadScriptManager ID="RadScriptManager3" runat="server">  
</telerik:RadScriptManager>
<asp:Button ID="Button1" runat="server" Text="DOCX" OnClick="Button1_Click" />
<telerik:RadTreeList RenderMode="Lightweight" ID="RadTreeList2" runat="server" OnNeedDataSource="RadTreeList1_NeedDataSource" AllowPaging="true" ParentDataKeyNames="ParentIndex" DataKeyNames="Index">
	<ExportSettings IgnorePaging="true"></ExportSettings>
</telerik:RadTreeList>
````
````C#
static TreeListItemType[] supportedItemTypes = new TreeListItemType[] 
{ 
	TreeListItemType.HeaderItem, 
	TreeListItemType.AlternatingItem, 
	TreeListItemType.Item 
};

private void ExportToDocx()
{
	string fileName = "RadTreeList.docx";
	string filePath = Server.MapPath(fileName);

	RadFlowDocument flowDoc = new RadFlowDocument();
	Section section = flowDoc.Sections.AddSection();
	Table mainTable = section.Blocks.AddTable();

	TreeListItem item;
	TableRow row;

	var treeListItems = RadTreeList1.GetItems(supportedItemTypes);
	int maxLevel = RadTreeList1.GetMaximumNestedLevel() + 1;

	for (int itemNum = 0; itemNum < treeListItems.Length; itemNum++)
	{
		item = treeListItems[itemNum];
		row = mainTable.Rows.AddTableRow();

		for (int cellNum = 0; cellNum < item.Cells.Count; cellNum++)
		{
			var currentCell = item.Cells[cellNum];
			var dataItem = item as TreeListDataItem;
			string cellText = currentCell.Text;
			TableCell td = row.Cells.AddTableCell();

			var currentGridCell = item.Cells[cellNum];

			if (item is TreeListHeaderItem)
			{
				if (cellNum == 0)
				{
					td.ColumnSpan = maxLevel + 1;
				}
			}
			else if (dataItem != null)
			{
				if (cellNum == dataItem.HierarchyIndex.NestedLevel)
				{
					cellText = GetButtonCellText(dataItem);
				}
				else if (cellNum == dataItem.HierarchyIndex.NestedLevel + 1)
				{
					td.ColumnSpan = maxLevel - dataItem.HierarchyIndex.NestedLevel;
				}
			}

			SetDocxCellText(td, GetCellText(cellText));
		}
	}
	GenerateFile(flowDoc, fileName);
}

private void SetDocxCellText(TableCell td, string cellText)
{
	td.Blocks.AddParagraph().Inlines.AddRun(GetCellText(cellText));
}

private string GetButtonCellText(TreeListDataItem dataItem)
{
	string buttonText = String.Empty;

	if (dataItem.CanExpand)
	{
		buttonText = dataItem.Expanded ? "-" : "+";
	}

	return buttonText;
}

private void GenerateFile(object structure, string fileName)
{
	RadFlowDocument flowDoc = structure as RadFlowDocument;

	byte[] output;

	using (MemoryStream ms = new MemoryStream())
	{
		
		DocxFormatProvider provider = new DocxFormatProvider();
		provider.Export(flowDoc, ms);
		ms.Position = 0;
		output = ms.ToArray();
	}

	Response.ContentType = flowDoc != null ? "application/msword" : "application/excel";
	Response.AddHeader("content-disposition", "attachment; filename=" + fileName);
	Response.BinaryWrite(output);
	Response.Flush();
	Response.Close();
}

private string GetCellText(string text)
{
	return text.Replace("&nbsp;", "");
}

protected void Button1_Click(object sender, EventArgs e)
{
	ExportToDocx();
}
````
````VB.NET
Shared supportedItemTypes As TreeListItemType() = New TreeListItemType() {TreeListItemType.HeaderItem, TreeListItemType.AlternatingItem, TreeListItemType.Item}

Private Sub ExportToDocx()
	Dim fileName As String = "RadTreeList.docx"
	Dim filePath As String = Server.MapPath(fileName)

	Dim flowDoc As New RadFlowDocument()
	Dim section As Section = flowDoc.Sections.AddSection()
	Dim mainTable As Table = section.Blocks.AddTable()

	Dim item As TreeListItem
	Dim row As TableRow

	Dim treeListItems = RadTreeList1.GetItems(supportedItemTypes)
	Dim maxLevel As Integer = RadTreeList1.GetMaximumNestedLevel() + 1

	For itemNum As Integer = 0 To treeListItems.Length - 1
		item = treeListItems(itemNum)
		row = mainTable.Rows.AddTableRow()

		For cellNum As Integer = 0 To item.Cells.Count - 1
			Dim currentCell = item.Cells(cellNum)
			Dim dataItem = TryCast(item, TreeListDataItem)
			Dim cellText As String = currentCell.Text
			Dim td As TableCell = row.Cells.AddTableCell()

			Dim currentGridCell = item.Cells(cellNum)

			If TypeOf item Is TreeListHeaderItem Then
				If cellNum = 0 Then
					td.ColumnSpan = maxLevel + 1
				End If
			ElseIf dataItem IsNot Nothing Then
				If cellNum = dataItem.HierarchyIndex.NestedLevel Then
					cellText = GetButtonCellText(dataItem)
				ElseIf cellNum = dataItem.HierarchyIndex.NestedLevel + 1 Then
					td.ColumnSpan = maxLevel - dataItem.HierarchyIndex.NestedLevel
				End If
			End If

			SetDocxCellText(td, GetCellText(cellText))
		Next
	Next
	GenerateFile(flowDoc, fileName)
End Sub

Private Sub SetDocxCellText(td As TableCell, cellText As String)
	td.Blocks.AddParagraph().Inlines.AddRun(GetCellText(cellText))
End Sub

Private Function GetButtonCellText(dataItem As TreeListDataItem) As String
	Dim buttonText As String = [String].Empty

	If dataItem.CanExpand Then
		buttonText = If(dataItem.Expanded, "-", "+")
	End If

	Return buttonText
End Function

Private Sub GenerateFile([structure] As Object, fileName As String)
	Dim flowDoc As RadFlowDocument = TryCast([structure], RadFlowDocument)

	Dim output As Byte()

	Using ms As New MemoryStream()

		Dim provider As New DocxFormatProvider()
		provider.Export(flowDoc, ms)
		ms.Position = 0
		output = ms.ToArray()
	End Using

	Response.ContentType = If(flowDoc IsNot Nothing, "application/msword", "application/excel")
	Response.AddHeader("content-disposition", Convert.ToString("attachment; filename=") & fileName)
	Response.BinaryWrite(output)
	Response.Flush()
	Response.Close()
End Sub

Private Function GetCellText(text As String) As String
	Return text.Replace("&nbsp;", "")
End Function

Protected Sub Button1_Click(sender As Object, e As EventArgs)
	ExportToDocx()
End Sub
````

