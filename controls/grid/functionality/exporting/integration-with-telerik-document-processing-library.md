---
title: Integration with Telerik Document Processing Library
page_title: Integration with Telerik Document Processing Library | RadGrid for ASP.NET AJAX Documentation
description: Integration with Telerik Document Processing Library
slug: grid/functionality/exporting/integration-with-telerik-document-processing-library
tags: integration,with,telerik,document,processing,library
published: True
position: 3
---

# Integration with Telerik Document Processing Library



**Telerik document processing Libraries** allow you export **RadGrid** to Excel or Word with the appropriately **xlsx** and **docx** extension. Those extensions are used by Excel Microsoft Office version 2007 and above. These libraries are supported since the Q2 2014 version of **Telerik UI for ASP.NET AJAX**. More information about the assemblies and how to include them in your project can be found in the [Included assemblies](http://www.telerik.com/help/aspnet-ajax/introduction-included-assemblies.html) help article.

## Exporting RadGrid to Excel

The assemblies that must be referenced in order to export the RadGrid are:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Spreadsheet.dll

For export and import to XLSX:

* Telerik.Windows.Zip.dll

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll

The following steps walk you through the entire process of creating an Excel document and then export it to the server.

1. Create an instance of the **Workbook** class and add a new **Worksheet** object to the **Worksheets** collection.


	**C#**
	
		Workbook workbook = new Workbook();
		Worksheet worksheet = workbook.Worksheets.Add();
	
	**VB**
	
		Dim workbook As New Workbook()
		Dim worksheet As Worksheet = workbook.Worksheets.Add()



2. Traverse all cells of each item which will be contained in the exported file and assign their text to the appropriate cell of the Excel document.In the following code snippet an enumeration with tree values is created which will help you get the items which need to be exported.

	**C#**
	
		private GridItemType[] supportedItemTypes = new GridItemType[] 
		    { 
		        GridItemType.Header, 
		        GridItemType.AlternatingItem, 
		        GridItemType.Item 
		    };
	**VB**
	
		Private supportedItemTypes As GridItemType() = New GridItemType() {GridItemType.Header, GridItemType.AlternatingItem, GridItemType.Item}


	**C#**
	
		foreach (GridItem item in RadGrid1.MasterTableView.GetItems(supportedItemTypes))
		{
		    int currentColumn = 0;
		    foreach (System.Web.UI.WebControls.TableCell cell in item.Cells)
		    {
		        if (!cell.Visible)
		            continue;
		
		        worksheet.Cells[currentRow, currentColumn].SetValue(cell.Text);
		        currentColumn++;
		    }
		    currentRow++;
	}

	**VB**

		For Each item As GridItem In RadGrid1.MasterTableView.GetItems(supportedItemTypes)
		Dim currentColumn As Integer = 0
		    For Each cell As System.Web.UI.WebControls.TableCell In item.Cells
			    If Not cell.Visible Then
				    Continue For
			    End If
		
			    worksheet.Cells(currentRow, currentColumn).SetValue(cell.Text)
			    currentColumn += 1
		    Next
		    currentRow += 1
		Next


3. After the worksheet is populated with data an instance of the **XlsxFormatProvider** is created and by calling its **Export** method a file is generated on the server.



````C#
string excelFile = Server.MapPath("~/ExcelFile.xlsx");
using (FileStream fs = new FileStream(excelFile, FileMode.Create))
{
    XlsxFormatProvider provider = new XlsxFormatProvider();
    provider.Export(worksheet.Workbook, fs);
}
````
````VB
Dim excelFile As String = Server.MapPath("~/ExcelFile.xlsx")
Using fs As New FileStream(excelFile, FileMode.Create)
Dim provider As New XlsxFormatProvider()
    provider.Export(worksheet.Workbook, fs)
End Using
````


After following these steps you will get the following example that presents exporting on button click.



````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager2" runat="server">  
</telerik:RadScriptManager>
<asp:Button Text="Export to excel" ID="ExportToExcel" OnClick="ExportToExcel_Click" runat="server" />
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false">
    <MasterTableView CommandItemDisplay="Top">
        <Columns>
            <telerik:GridBoundColumn DataField="ID" HeaderText="ID"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ContactName" HeaderText="Contact Name"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CompanyName" HeaderText="Company Name"></telerik:GridBoundColumn>
        </Columns> 
    </MasterTableView>
</telerik:RadGrid>
````
````C#
private GridItemType[] supportedItemTypes = new GridItemType[] 
    { 
        GridItemType.Header, 
        GridItemType.AlternatingItem, 
        GridItemType.Item 
    };

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GeneratingTable();
}
private DataTable GeneratingTable()
{
    DataTable table = new DataTable();
    table.Columns.Add("ID");
    table.Columns.Add("ContactName");
    table.Columns.Add("CompanyName");


    table.Rows.Add(1, "Alejandra Camino", "Romero y tomillo");
    table.Rows.Add(2, "Alexander Feuer", "Morgenstern Gesundkost");
    table.Rows.Add(3, "Ana Trujillo", "Ana Trujillo Emparedados y helados");
    table.Rows.Add(4, "Anabela Domingues", "Tradicao Hipermercados");
    table.Rows.Add(5, "Andre Fonseca", "Gourmet Lanchonetes");

    return table;
}
protected void ExportToExcel_Click(object sender, EventArgs e)
{
    Workbook workbook = new Workbook();
    Worksheet worksheet = workbook.Worksheets.Add();

    int currentRow = 0;
    foreach (GridItem item in RadGrid1.MasterTableView.GetItems(supportedItemTypes))
    {
        int currentColumn = 0;
        foreach (System.Web.UI.WebControls.TableCell cell in item.Cells)
        {
            if (!cell.Visible)
                continue;

            worksheet.Cells[currentRow, currentColumn].SetValue(cell.Text);
            currentColumn++;
        }
        currentRow++;
    }
    string excelFile = Server.MapPath("~/ExcelFile.xlsx");
    using (FileStream fs = new FileStream(excelFile, FileMode.Create))
    {
        XlsxFormatProvider provider = new XlsxFormatProvider();
        provider.Export(worksheet.Workbook, fs);
    }
}
````
````VB
Private supportedItemTypes As GridItemType() = New GridItemType() {GridItemType.Header, GridItemType.AlternatingItem, GridItemType.Item}

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = GeneratingTable()
End Sub
Private Function GeneratingTable() As DataTable
    Dim table As New DataTable()
    table.Columns.Add("ID")
    table.Columns.Add("ContactName")
    table.Columns.Add("CompanyName")


    table.Rows.Add(1, "Alejandra Camino", "Romero y tomillo")
    table.Rows.Add(2, "Alexander Feuer", "Morgenstern Gesundkost")
    table.Rows.Add(3, "Ana Trujillo", "Ana Trujillo Emparedados y helados")
    table.Rows.Add(4, "Anabela Domingues", "Tradicao Hipermercados")
    table.Rows.Add(5, "Andre Fonseca", "Gourmet Lanchonetes")

    Return table
End Function
Protected Sub ExportToExcel_Click(sender As Object, e As EventArgs)
    Dim workbook As New Workbook()
    Dim worksheet As Worksheet = workbook.Worksheets.Add()

    Dim currentRow As Integer = 0
    For Each item As GridItem In RadGrid1.MasterTableView.GetItems(supportedItemTypes)
        Dim currentColumn As Integer = 0
        For Each cell As System.Web.UI.WebControls.TableCell In item.Cells
            If Not cell.Visible Then
                Continue For
            End If

            worksheet.Cells(currentRow, currentColumn).SetValue(cell.Text)
            currentColumn += 1
        Next
        currentRow += 1
    Next
    Dim excelFile As String = Server.MapPath("~/ExcelFile.xlsx")
    Using fs As New FileStream(excelFile, FileMode.Create)
        Dim provider As New XlsxFormatProvider()
        provider.Export(worksheet.Workbook, fs)
    End Using
End Sub
````


## Exporting RadGrid to Word

The assemblies that must be referenced in order to export the RadGrid are:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Flow.dll

* Telerik.Windows.Zip.dll

The following steps walk you through the entire process of creating an Word document and then export it to the server.

1. Create an instance of the **RadFlowDocument** class and add a new **Section** object to the **Sections** collection. After the section is created a new **Table** object is added to it.



	**C#**
	
		RadFlowDocument flowDoc = new RadFlowDocument();
		Section section = flowDoc.Sections.AddSection();
		Table table = section.Blocks.AddTable();
		
	**VB**
	
		Dim flowDoc As New RadFlowDocument()
		Dim section As Section = flowDoc.Sections.AddSection()
		Dim table As Table = section.Blocks.AddTable()


2. Traverse all cells of each item which will be contained in the exported file and assign their text to the appropriate cell of the created Word table.In the following code snippet an enumeration with tree values is created which will help you get the items which need to be exported.

	**C#**
	
		private GridItemType[] supportedItemTypes = new GridItemType[] 
		    { 
		        GridItemType.Header, 
		        GridItemType.AlternatingItem, 
		        GridItemType.Item 
		    };
		
	**VB**
	
		Private supportedItemTypes As GridItemType() = New GridItemType() {GridItemType.Header, GridItemType.AlternatingItem, GridItemType.Item}
		
		
	
	
	**C#**

		foreach (GridItem item in RadGrid1.MasterTableView.GetItems(supportedItemTypes))
		    {
		        Telerik.Windows.Documents.Flow.Model.TableRow wordRow = null;
		        wordRow = table.Rows.AddTableRow();
		        foreach (System.Web.UI.WebControls.TableCell cell in item.Cells)
		        {
		            if (!cell.Visible)
		                continue;
		
		            Telerik.Windows.Documents.Flow.Model.TableCell wordCell = wordRow.Cells.AddTableCell();
		            Paragraph paragraph = wordCell.Blocks.AddParagraph();
		            paragraph.Inlines.AddRun(cell.Text);
		        }
		    }
	
	**VB**
	
		For Each item As GridItem In RadGrid1.MasterTableView.GetItems(supportedItemTypes)
		Dim wordRow As Telerik.Windows.Documents.Flow.Model.TableRow = Nothing
		    wordRow = table.Rows.AddTableRow()
		    For Each cell As System.Web.UI.WebControls.TableCell In item.Cells
			    If Not cell.Visible Then
				    Continue For
			    End If
		
		Dim wordCell As Telerik.Windows.Documents.Flow.Model.TableCell = wordRow.Cells.AddTableCell()
		Dim paragraph As Paragraph = wordCell.Blocks.AddParagraph()
			    paragraph.Inlines.AddRun(cell.Text)
		    Next
		Next



3. After the worksheet is populated with data an instance of the **DocxFormatProvider** is created and by calling its **Export** method a file is generated on the server.



````C#
string wordFile = Server.MapPath("~/WordFile.docx");
using (FileStream fs = new FileStream(wordFile, FileMode.Create))
{
    DocxFormatProvider provider = new DocxFormatProvider();
    provider.Export(table.Document, fs);
}
````
````VB
Dim wordFile As String = Server.MapPath("~/WordFile.docx")
Using fs As New FileStream(wordFile, FileMode.Create)
Dim provider As New DocxFormatProvider()
    provider.Export(table.Document, fs)
End Using
````


After following these steps you will get the following example that presents exporting on button click.



````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager3" runat="server">  
</telerik:RadScriptManager>
<asp:Button Text="Export to word" ID="Button1" OnClick="ExportToWord_Click" runat="server" />
<telerik:RadGrid ID="RadGrid2" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false">
    <MasterTableView CommandItemDisplay="Top">
        <Columns>
            <telerik:GridBoundColumn DataField="ID" HeaderText="ID"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ContactName" HeaderText="Contact Name"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CompanyName" HeaderText="Company Name"></telerik:GridBoundColumn>
        </Columns> 
    </MasterTableView>
</telerik:RadGrid>
````
````C#
private GridItemType[] supportedItemTypes = new GridItemType[] 
{ 
    GridItemType.Header, 
    GridItemType.AlternatingItem, 
    GridItemType.Item 
};

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GeneratingTable();
}
private DataTable GeneratingTable()
{
    DataTable table = new DataTable();
    table.Columns.Add("ID");
    table.Columns.Add("ContactName");
    table.Columns.Add("CompanyName");


    table.Rows.Add(1, "Alejandra Camino", "Romero y tomillo");
    table.Rows.Add(2, "Alexander Feuer", "Morgenstern Gesundkost");
    table.Rows.Add(3, "Ana Trujillo", "Ana Trujillo Emparedados y helados");
    table.Rows.Add(4, "Anabela Domingues", "Tradicao Hipermercados");
    table.Rows.Add(5, "Andre Fonseca", "Gourmet Lanchonetes");

    return table;
}
protected void ExportToWord_Click(object sender, EventArgs e)
{
    RadFlowDocument flowDoc = new RadFlowDocument();
    Section section = flowDoc.Sections.AddSection();
    Telerik.Windows.Documents.Flow.Model.Table table = section.Blocks.AddTable();

    foreach (GridItem item in RadGrid1.MasterTableView.GetItems(supportedItemTypes))
    {
        Telerik.Windows.Documents.Flow.Model.TableRow wordRow = null;
        wordRow = table.Rows.AddTableRow();
        foreach (System.Web.UI.WebControls.TableCell cell in item.Cells)
        {
            if (!cell.Visible)
                continue;

            Telerik.Windows.Documents.Flow.Model.TableCell wordCell = wordRow.Cells.AddTableCell();
            Paragraph paragraph = wordCell.Blocks.AddParagraph();
            paragraph.Inlines.AddRun(cell.Text);
        }
    }
    string wordFile = Server.MapPath("~/WordFile.docx");
    using (FileStream fs = new FileStream(wordFile, FileMode.Create))
    {
        DocxFormatProvider provider = new DocxFormatProvider();
        provider.Export(table.Document, fs);
    }
}
````
````VB
Private supportedItemTypes As GridItemType() = New GridItemType() {GridItemType.Header, GridItemType.AlternatingItem, GridItemType.Item}

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = GeneratingTable()
End Sub
Private Function GeneratingTable() As DataTable
    Dim table As New DataTable()
    table.Columns.Add("ID")
    table.Columns.Add("ContactName")
    table.Columns.Add("CompanyName")


    table.Rows.Add(1, "Alejandra Camino", "Romero y tomillo")
    table.Rows.Add(2, "Alexander Feuer", "Morgenstern Gesundkost")
    table.Rows.Add(3, "Ana Trujillo", "Ana Trujillo Emparedados y helados")
    table.Rows.Add(4, "Anabela Domingues", "Tradicao Hipermercados")
    table.Rows.Add(5, "Andre Fonseca", "Gourmet Lanchonetes")

    Return table
End Function
Protected Sub ExportToWord_Click(sender As Object, e As EventArgs)
    Dim flowDoc As New RadFlowDocument()
    Dim section As Section = flowDoc.Sections.AddSection()
    Dim table As Telerik.Windows.Documents.Flow.Model.Table = section.Blocks.AddTable()

    For Each item As GridItem In RadGrid1.MasterTableView.GetItems(supportedItemTypes)
        Dim wordRow As Telerik.Windows.Documents.Flow.Model.TableRow = Nothing
        wordRow = table.Rows.AddTableRow()
        For Each cell As System.Web.UI.WebControls.TableCell In item.Cells
            If Not cell.Visible Then
                Continue For
            End If

            Dim wordCell As Telerik.Windows.Documents.Flow.Model.TableCell = wordRow.Cells.AddTableCell()
            Dim paragraph As Paragraph = wordCell.Blocks.AddParagraph()
            paragraph.Inlines.AddRun(cell.Text)
        Next
    Next
    Dim wordFile As String = Server.MapPath("~/WordFile.docx")
    Using fs As New FileStream(wordFile, FileMode.Create)
        Dim provider As New DocxFormatProvider()
        provider.Export(table.Document, fs)
    End Using
End Sub
````


## See Also

 * [Included assemblies](http://www.telerik.com/help/aspnet-ajax/introduction-included-assemblies.html)
