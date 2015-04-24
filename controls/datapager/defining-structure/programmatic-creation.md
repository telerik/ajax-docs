---
title: Programmatic Creation
page_title: Programmatic Creation | RadDataPager for ASP.NET AJAX Documentation
description: Programmatic Creation
slug: datapager/defining-structure/programmatic-creation
tags: programmatic,creation
published: True
position: 0
---

# Programmatic Creation



In most scenarios the RadDataPager control is a part of a template inside another control or contains templates itself, so when you need to dynamically define it, you must create it during the Init phase of the page.

## Defining a RadDataPager in code-behind

When created on Init, the control should first define its properties and fields, only only then get added to the placeholder control used for it in the page.

If you want to put a **RadDataPagerTemplatePageField** inside, you should create a class implementing the **ITemplate** interface and assign it as a **PagerTemplate** of the field.

Here follows an example of a programmatically created **RadDataPager** inside a **RadListView**. The control is defined in the **LayoutTemplate** of the listview and declares a template field itself.



````ASPNET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Customers]" />
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadListView listView = new RadListView();
    listView.ID = "listView";
    listView.DataSourceID = "SqlDataSource1";
    listView.AllowPaging = true;
    listView.LayoutTemplate = new LayoutTemplate();
    listView.ItemTemplate = new ItemTemplate();
    listView.ItemPlaceholderID = "itemPlaceholder";
    PlaceHolder1.Controls.Add(listView);
}

public class LayoutTemplate : ITemplate
{
    protected LiteralControl lControl;
    //declare the RadDataPager
    RadDataPager pager;
    public LayoutTemplate()
    {
    }
    public void InstantiateIn(System.Web.UI.Control container)
    {
        //initialize the datapager, set its properties and fields
        pager = new RadDataPager();
        pager.ID = "RadDataPager1";
        pager.PagedControlID = "listView";
        RadDataPagerButtonField field = new RadDataPagerButtonField();
        field.FieldType = PagerButtonFieldType.FirstPrev;
        pager.Fields.Add(field);
        field = new RadDataPagerButtonField();
        field.FieldType = PagerButtonFieldType.Numeric;
        pager.Fields.Add(field);
        field = new RadDataPagerButtonField();
        field.FieldType = PagerButtonFieldType.NextLast;
        pager.Fields.Add(field);
        RadDataPagerPageSizeField field1 = new RadDataPagerPageSizeField();
        field1.PageSizeText = "Page size: ";
        pager.Fields.Add(field1);
        RadDataPagerGoToPageField field2 = new RadDataPagerGoToPageField();
        field2.CurrentPageText = "Page: ";
        field2.TotalPageText = "of";
        field2.SubmitButtonText = "Go";
        pager.Fields.Add(field2);
        RadDataPagerTemplatePageField field3 = new RadDataPagerTemplatePageField();
        //the template field should use a template class implementing the ITemplate interface
        field3.PagerTemplate = new PagerTemplate();
        pager.Fields.Add(field3);
        //add the pager to the controls collecton of the ITemplate container item
        container.Controls.Add(pager);
        Table LayoutTable = new Table();
        TableRow LayoutTableRow1 = new TableRow();
        TableRow LayoutTableRow2 = new TableRow();
        TableRow LayoutTableRow3 = new TableRow();
        TableCell LayoutTableRow3Cell1 = new TableCell();
        LayoutTableRow3Cell1.ColumnSpan = 5;
        LayoutTableRow3Cell1.Controls.Add(pager);
        LayoutTableRow3.Controls.Add(LayoutTableRow3Cell1);
        LayoutTableRow1.ID = "LayoutTableRow1";
        LayoutTableRow1.BackColor = System.Drawing.Color.LightGray;
        LayoutTableRow2.ID = "itemPlaceholder";
        TableCell LayoutTableRow1Cell1 = new TableCell();
        LayoutTableRow1Cell1.Width = Unit.Pixel(150);
        TableCell LayoutTableRow1Cell2 = new TableCell();
        LayoutTableRow1Cell2.Width = Unit.Pixel(300);
        TableCell LayoutTableRow1Cell3 = new TableCell();
        LayoutTableRow1Cell3.Width = Unit.Pixel(200);
        TableCell LayoutTableRow1Cell4 = new TableCell();
        LayoutTableRow1Cell4.Width = Unit.Pixel(200);
        Label CustomerID = new Label();
        CustomerID.Text = "CustomerID";
        LayoutTableRow1Cell1.Controls.Add(CustomerID);
        Label CompanyName = new Label();
        CompanyName.Text = "CompanyName";
        LayoutTableRow1Cell2.Controls.Add(CompanyName);
        Label ContactName = new Label();
        ContactName.Text = "ContactName";
        LayoutTableRow1Cell3.Controls.Add(ContactName);
        Label ContactTitle = new Label();
        ContactTitle.Text = "ContactTitle";
        LayoutTableRow1Cell4.Controls.Add(ContactTitle);
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell1);
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell2);
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell3);
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell4);
        LayoutTable.Rows.Add(LayoutTableRow1);
        LayoutTable.Rows.Add(LayoutTableRow2);
        LayoutTable.Rows.Add(LayoutTableRow3);

        container.Controls.Add(LayoutTable);
    }
}

public class PagerTemplate : ITemplate
{
    protected Label currentPage;
    protected Label totalPages;
    protected Label totalItems;

    public PagerTemplate()
    {
    }
    public void InstantiateIn(System.Web.UI.Control container)
    {
        currentPage = new Label();
        currentPage.DataBinding += new EventHandler(currentPage_DataBinding);
        totalPages = new Label();
        totalPages.DataBinding += new EventHandler(totalPages_DataBinding);
        totalItems = new Label();
        totalItems.DataBinding += new EventHandler(totalItems_DataBinding);
        container.Controls.Add(currentPage);
        container.Controls.Add(totalPages);
        container.Controls.Add(totalItems);
    }

    void totalItems_DataBinding(object sender, EventArgs e)
    {
        //the container of the label here is the template field item, which NamingContainer is the RadDataPager control
        (sender as Label).Text = " from " + (((sender as Label).NamingContainer.NamingContainer as RadDataPager).TotalRowCount).ToString();
    }

    void totalPages_DataBinding(object sender, EventArgs e)
    {
        RadDataPager Container = ((sender as Label).NamingContainer.NamingContainer as RadDataPager);
        (sender as Label).Text = " to" + ((Container.TotalRowCount > (Container.StartRowIndex + Container.PageSize) ? Container.StartRowIndex + Container.PageSize : Container.TotalRowCount)).ToString();
    }

    void currentPage_DataBinding(object sender, EventArgs e)
    {
        (sender as Label).Text = "Items: " + (((sender as Label).NamingContainer.NamingContainer as RadDataPager).StartRowIndex + 1).ToString();
    }

}

public class ItemTemplate : ITemplate
{
    protected LiteralControl lControl;
    public ItemTemplate()
    {
    }
    public void InstantiateIn(System.Web.UI.Control container)
    {
        TableRow ItemTemplateRow1 = new TableRow();
        ItemTemplateRow1.Style["background-color"] = "#99ccff";
        ItemTemplateRow1.ID = "LayoutTableRow1";
        TableCell ItemTemplateRow1Cell1 = new TableCell();
        ItemTemplateRow1Cell1.Width = Unit.Pixel(150);
        TableCell ItemTemplateRow1Cell2 = new TableCell();
        ItemTemplateRow1Cell2.Width = Unit.Pixel(300);
        TableCell ItemTemplateRow1Cell3 = new TableCell();
        ItemTemplateRow1Cell3.Width = Unit.Pixel(150);
        TableCell ItemTemplateRow1Cell4 = new TableCell();
        ItemTemplateRow1Cell4.Width = Unit.Pixel(200);
        Label CustomerID = new Label();
        CustomerID.ID = "CustomerID";
        CustomerID.DataBinding += new System.EventHandler(CustomerID_DataBinding);
        ItemTemplateRow1Cell1.Controls.Add(CustomerID);
        Label CompanyName = new Label();
        CompanyName.ID = "CompanyName";
        CompanyName.DataBinding += new System.EventHandler(CompanyName_DataBinding);
        ItemTemplateRow1Cell2.Controls.Add(CompanyName);
        Label ContactName = new Label();
        ContactName.ID = "ContactName";
        ContactName.DataBinding += new System.EventHandler(ContactName_DataBinding);
        ItemTemplateRow1Cell3.Controls.Add(ContactName);
        Label ContactTitle = new Label();
        ContactTitle.ID = "ContactTitle";
        ContactTitle.DataBinding += new System.EventHandler(ContactTitle_DataBinding);
        ItemTemplateRow1Cell4.Controls.Add(ContactTitle);
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1);
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2);
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3);
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4);
        container.Controls.Add(ItemTemplateRow1);
    }
    void ContactTitle_DataBinding(object sender, System.EventArgs e)
    {
        Label ContactTitle = (Label)sender;
        ContactTitle.Text = ((ContactTitle.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["ContactTitle"].ToString();
    }
    void ContactName_DataBinding(object sender, System.EventArgs e)
    {
        Label ContactName = (Label)sender;
        ContactName.Text = ((ContactName.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["ContactName"].ToString();
    }
    void CompanyName_DataBinding(object sender, System.EventArgs e)
    {
        Label CompanyName = (Label)sender;
        CompanyName.Text = ((CompanyName.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["CompanyName"].ToString();
    }
    void CustomerID_DataBinding(object sender, System.EventArgs e)
    {
        Label CustomerID = (Label)sender;
        CustomerID.Text = ((CustomerID.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["CustomerID"].ToString();
    }
}
````
````VB.NET
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    Dim listView As New RadListView()
    listView.ID = "listView"
    listView.DataSourceID = "SqlDataSource1"
    listView.AllowPaging = True
    listView.LayoutTemplate = New LayoutTemplate()
    listView.ItemTemplate = New ItemTemplate()
    listView.ItemPlaceholderID = "itemPlaceholder"
    PlaceHolder1.Controls.Add(listView)
End Sub

Public Class LayoutTemplate
    Implements ITemplate
    Protected lControl As LiteralControl
    'declare the RadDataPager
    Private pager As RadDataPager
    Public Sub New()
    End Sub
    Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
        'initialize the datapager, set its properties and fields
        pager = New RadDataPager()
        pager.ID = "RadDataPager1"
        pager.PagedControlID = "listView"
        Dim field As New RadDataPagerButtonField()
        field.FieldType = PagerButtonFieldType.FirstPrev
        pager.Fields.Add(field)
        field = New RadDataPagerButtonField()
        field.FieldType = PagerButtonFieldType.Numeric
        pager.Fields.Add(field)
        field = New RadDataPagerButtonField()
        field.FieldType = PagerButtonFieldType.NextLast
        pager.Fields.Add(field)
        Dim field1 As New RadDataPagerPageSizeField()
        field1.PageSizeText = "Page size: "
        pager.Fields.Add(field1)
        Dim field2 As New RadDataPagerGoToPageField()
        field2.CurrentPageText = "Page: "
        field2.TotalPageText = "of"
        field2.SubmitButtonText = "Go"
        pager.Fields.Add(field2)
        Dim field3 As New RadDataPagerTemplatePageField()
        'the template field should use a template class implementing the ITemplate interface
        field3.PagerTemplate = New PagerTemplate()
        pager.Fields.Add(field3)
        'add the pager to the controls collecton of the ITemplate container item
        container.Controls.Add(pager)
        Dim LayoutTable As New Table()
        Dim LayoutTableRow1 As New TableRow()
        Dim LayoutTableRow2 As New TableRow()
        Dim LayoutTableRow3 As New TableRow()
        Dim LayoutTableRow3Cell1 As New TableCell()
        LayoutTableRow3Cell1.ColumnSpan = 5
        LayoutTableRow3Cell1.Controls.Add(pager)
        LayoutTableRow3.Controls.Add(LayoutTableRow3Cell1)
        LayoutTableRow1.ID = "LayoutTableRow1"
        LayoutTableRow1.BackColor = System.Drawing.Color.LightGray
        LayoutTableRow2.ID = "itemPlaceholder"
        Dim LayoutTableRow1Cell1 As New TableCell()
        LayoutTableRow1Cell1.Width = Unit.Pixel(150)
        Dim LayoutTableRow1Cell2 As New TableCell()
        LayoutTableRow1Cell2.Width = Unit.Pixel(300)
        Dim LayoutTableRow1Cell3 As New TableCell()
        LayoutTableRow1Cell3.Width = Unit.Pixel(200)
        Dim LayoutTableRow1Cell4 As New TableCell()
        LayoutTableRow1Cell4.Width = Unit.Pixel(200)
        Dim CustomerID As New Label()
        CustomerID.Text = "CustomerID"
        LayoutTableRow1Cell1.Controls.Add(CustomerID)
        Dim CompanyName As New Label()
        CompanyName.Text = "CompanyName"
        LayoutTableRow1Cell2.Controls.Add(CompanyName)
        Dim ContactName As New Label()
        ContactName.Text = "ContactName"
        LayoutTableRow1Cell3.Controls.Add(ContactName)
        Dim ContactTitle As New Label()
        ContactTitle.Text = "ContactTitle"
        LayoutTableRow1Cell4.Controls.Add(ContactTitle)
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell1)
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell2)
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell3)
        LayoutTableRow1.Cells.Add(LayoutTableRow1Cell4)
        LayoutTable.Rows.Add(LayoutTableRow1)
        LayoutTable.Rows.Add(LayoutTableRow2)
        LayoutTable.Rows.Add(LayoutTableRow3)

        container.Controls.Add(LayoutTable)
    End Sub
End Class

Public Class PagerTemplate
    Implements ITemplate
    Protected currentPage As Label
    Protected totalPages As Label
    Protected totalItems As Label

    Public Sub New()
    End Sub
    Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
        currentPage = New Label()
        AddHandler currentPage.DataBinding, AddressOf currentPage_DataBinding
        totalPages = New Label()
        AddHandler totalPages.DataBinding, AddressOf totalPages_DataBinding
        totalItems = New Label()
        AddHandler totalItems.DataBinding, AddressOf totalItems_DataBinding
        container.Controls.Add(currentPage)
        container.Controls.Add(totalPages)
        container.Controls.Add(totalItems)
    End Sub

    Private Sub totalItems_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
        'the container of the label here is the template field item, which NamingContainer is the RadDataPager control
        TryCast(sender, Label).Text = " from " + (TryCast(TryCast(sender, Label).NamingContainer.NamingContainer, RadDataPager).TotalRowCount).ToString()
    End Sub

    Private Sub totalPages_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
        Dim Container As RadDataPager = TryCast(TryCast(sender, Label).NamingContainer.NamingContainer, RadDataPager)
        TryCast(sender, Label).Text = " to" + ((If(Container.TotalRowCount > (Container.StartRowIndex + Container.PageSize), Container.StartRowIndex + Container.PageSize, Container.TotalRowCount))).ToString()
    End Sub

    Private Sub currentPage_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
        TryCast(sender, Label).Text = "Items: " + (TryCast(TryCast(sender, Label).NamingContainer.NamingContainer, RadDataPager).StartRowIndex + 1).ToString()
    End Sub

End Class

Public Class ItemTemplate
    Implements ITemplate
    Protected lControl As LiteralControl
    Public Sub New()
    End Sub
    Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
        Dim ItemTemplateRow1 As New TableRow()
        ItemTemplateRow1.Style("background-color") = "#99ccff"
        ItemTemplateRow1.ID = "LayoutTableRow1"
        Dim ItemTemplateRow1Cell1 As New TableCell()
        ItemTemplateRow1Cell1.Width = Unit.Pixel(150)
        Dim ItemTemplateRow1Cell2 As New TableCell()
        ItemTemplateRow1Cell2.Width = Unit.Pixel(300)
        Dim ItemTemplateRow1Cell3 As New TableCell()
        ItemTemplateRow1Cell3.Width = Unit.Pixel(150)
        Dim ItemTemplateRow1Cell4 As New TableCell()
        ItemTemplateRow1Cell4.Width = Unit.Pixel(200)
        Dim CustomerID As New Label()
        CustomerID.ID = "CustomerID"
        AddHandler CustomerID.DataBinding, AddressOf CustomerID_DataBinding
        ItemTemplateRow1Cell1.Controls.Add(CustomerID)
        Dim CompanyName As New Label()
        CompanyName.ID = "CompanyName"
        AddHandler CompanyName.DataBinding, AddressOf CompanyName_DataBinding
        ItemTemplateRow1Cell2.Controls.Add(CompanyName)
        Dim ContactName As New Label()
        ContactName.ID = "ContactName"
        AddHandler ContactName.DataBinding, AddressOf ContactName_DataBinding
        ItemTemplateRow1Cell3.Controls.Add(ContactName)
        Dim ContactTitle As New Label()
        ContactTitle.ID = "ContactTitle"
        AddHandler ContactTitle.DataBinding, AddressOf ContactTitle_DataBinding
        ItemTemplateRow1Cell4.Controls.Add(ContactTitle)
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1)
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2)
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3)
        ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4)
        container.Controls.Add(ItemTemplateRow1)
    End Sub
    Private Sub ContactTitle_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim ContactTitle As Label = DirectCast(sender, Label)
        ContactTitle.Text = TryCast(TryCast(ContactTitle.NamingContainer, RadListViewDataItem).DataItem, DataRowView)("ContactTitle").ToString()
    End Sub
    Private Sub ContactName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim ContactName As Label = DirectCast(sender, Label)
        ContactName.Text = TryCast(TryCast(ContactName.NamingContainer, RadListViewDataItem).DataItem, DataRowView)("ContactName").ToString()
    End Sub
    Private Sub CompanyName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim CompanyName As Label = DirectCast(sender, Label)
        CompanyName.Text = TryCast(TryCast(CompanyName.NamingContainer, RadListViewDataItem).DataItem, DataRowView)("CompanyName").ToString()
    End Sub
    Private Sub CustomerID_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim CustomerID As Label = DirectCast(sender, Label)
        CustomerID.Text = TryCast(TryCast(CustomerID.NamingContainer, RadListViewDataItem).DataItem, DataRowView)("CustomerID").ToString()
    End Sub
End Class
````


# See Also

 * [Creating Web Server Control Templates Dynamically](http://msdn.microsoft.com/en-us/library/y0h809ak(v=vs.71).aspx)
