---
title: Programmatic Definition
page_title: Programmatic Definition | RadListView for ASP.NET AJAX Documentation
description: Programmatic Definition
slug: listview/defining-structure/programmatic-definition
tags: programmatic,definition
published: True
position: 1
---

# Programmatic Definition



## 

As with any control, the *RadListView* control can be created dynamically, to allow for more flexibility.

As with any other control which uses templates, the structure needs to be created in the *PageInit* event handler.Each type of template can be created using a separate class do define its structure.Below is a sample, which demonstrates one such approach.

On the *aspx *page there is a simple placeholder, where the actual contents of the *ListView *control will be added:

````ASPNET
	    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
	    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
	    <telerik:RadAjaxPanel runat="server" ID="RadAjaxPanel1" LoadingPanelID="RadAjaxLoadingPanel1">
	        <asp:PlaceHolder runat="server" ID="PlaceHolder1"></asp:PlaceHolder>
	    </telerik:RadAjaxPanel>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        ProviderName="System.Data.SqlClient" SelectCommand="SELECT TOP 10 [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address] FROM [Customers]" />
	    <telerik:Footer runat="server" ID="Footer1">
````



The actual contents are determined by the code-behind, where each template is declared in a separate class:



````C#
	    public partial class DefaultCS : System.Web.UI.Page
	    {
	        protected void Page_Init(object sender, System.EventArgs e)
	        {
	            RadListView listView = new RadListView();
	            listView.DataSourceID = "SqlDataSource1";
	            listView.LayoutTemplate = new LayoutTemplate();
	            listView.ItemTemplate = new ItemTemplate();
	            listView.AlternatingItemTemplate = new AlterNatingItemTemplate();
	            listView.EmptyDataTemplate = new EmptyDataTemplate();
	            listView.EditItemTemplate = new EditItemTemplate();
	            listView.ItemPlaceholderID = "itemPlaceholder";
	            PlaceHolder1.Controls.Add(listView);
	        }
	    }
	    public class LayoutTemplate : ITemplate
	    {
	        protected LiteralControl lControl;
	        public LayoutTemplate()
	        {
	        }
	        public void InstantiateIn(System.Web.UI.Control container)
	        {
	            Table LayoutTable = new Table();
	            TableRow LayoutTableRow1 = new TableRow();
	            TableRow LayoutTableRow2 = new TableRow();
	            LayoutTableRow1.ID = "LayoutTableRow1";
	            LayoutTableRow1.BackColor = System.Drawing.Color.LightGray;
	            LayoutTableRow2.ID = "itemPlaceholder";
	            TableCell LayoutTableRow1Cell1 = new TableCell();
	            LayoutTableRow1Cell1.Width = Unit.Pixel(50);
	            TableCell LayoutTableRow1Cell2 = new TableCell();
	            LayoutTableRow1Cell2.Width = Unit.Pixel(150);
	            TableCell LayoutTableRow1Cell3 = new TableCell();
	            LayoutTableRow1Cell3.Width = Unit.Pixel(250);
	            TableCell LayoutTableRow1Cell4 = new TableCell();
	            LayoutTableRow1Cell4.Width = Unit.Pixel(200);
	            TableCell LayoutTableRow1Cell5 = new TableCell();
	            LayoutTableRow1Cell5.Width = Unit.Pixel(150);
	            Label CustomerID = new Label();
	            CustomerID.Text = "CustomerID";
	            LayoutTableRow1Cell2.Controls.Add(CustomerID);
	            Label CompanyName = new Label();
	            CompanyName.Text = "CompanyName";
	            LayoutTableRow1Cell3.Controls.Add(CompanyName);
	            Label ContactName = new Label();
	            ContactName.Text = "ContactName";
	            LayoutTableRow1Cell4.Controls.Add(ContactName);
	            Label ContactTitle = new Label();
	            ContactTitle.Text = "ContactTitle";
	            LayoutTableRow1Cell5.Controls.Add(ContactTitle);
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell1);
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell2);
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell3);
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell4);
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell5);
	            LayoutTable.Rows.Add(LayoutTableRow1);
	            LayoutTable.Rows.Add(LayoutTableRow2);
	            container.Controls.Add(LayoutTable);
	        }
	    }
	    public class EmptyDataTemplate : ITemplate
	    {
	        public EmptyDataTemplate()
	        {
	        }
	        public void InstantiateIn(System.Web.UI.Control container)
	        {
	            Label label = new Label();
	            label.ID = "NoRecordsLabel";
	            label.Text = "No Records are available at this time";
	            container.Controls.Add(label);
	        }
	    }
	    public class EditItemTemplate : ITemplate
	    {
	        protected LiteralControl lControl;
	        public EditItemTemplate()
	        {
	        }
	        public void InstantiateIn(System.Web.UI.Control container)
	        {
	            TableRow ItemTemplateRow1 = new TableRow();
	            ItemTemplateRow1.Style["background-color"] = "#45474A";
	            ItemTemplateRow1.ID = "LayoutTableRow1";
	            TableCell ItemTemplateRow1Cell1 = new TableCell();
	            ItemTemplateRow1Cell1.Width = Unit.Pixel(50);
	            TableCell ItemTemplateRow1Cell2 = new TableCell();
	            ItemTemplateRow1Cell2.Width = Unit.Pixel(100);
	            TableCell ItemTemplateRow1Cell3 = new TableCell();
	            ItemTemplateRow1Cell3.Width = Unit.Pixel(250);
	            TableCell ItemTemplateRow1Cell4 = new TableCell();
	            ItemTemplateRow1Cell4.Width = Unit.Pixel(150);
	            TableCell ItemTemplateRow1Cell5 = new TableCell();
	            ItemTemplateRow1Cell5.Width = Unit.Pixel(150);
	            ImageButton UpdateButton = new ImageButton();
	            UpdateButton.ID = "UpdateButton";
	            UpdateButton.CommandName = "Update";
	            UpdateButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Update.gif";
	            ItemTemplateRow1Cell1.Controls.Add(UpdateButton);
	            ImageButton CancelButton = new ImageButton();
	            CancelButton.ID = "CancelButton";
	            CancelButton.CommandName = "Cancel";
	            CancelButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Cancel.gif";
	            ItemTemplateRow1Cell1.Controls.Add(CancelButton);
	            TextBox CustomerID = new TextBox();
	            CustomerID.Width = Unit.Pixel(70);
	            CustomerID.ID = "CustomerID";
	            CustomerID.DataBinding += new System.EventHandler(CustomerID_DataBinding);
	            ItemTemplateRow1Cell2.Controls.Add(CustomerID);
	            TextBox CompanyName = new TextBox();
	            CompanyName.Width = Unit.Pixel(210);
	            CompanyName.ID = "CompanyName";
	            CompanyName.DataBinding += new System.EventHandler(CompanyName_DataBinding);
	            ItemTemplateRow1Cell3.Controls.Add(CompanyName);
	            TextBox ContactName = new TextBox();
	            ContactName.Width = Unit.Pixel(110);
	            ContactName.ID = "ContactName";
	            ContactName.DataBinding += new System.EventHandler(ContactName_DataBinding);
	            ItemTemplateRow1Cell4.Controls.Add(ContactName);
	            TextBox ContactTitle = new TextBox();
	            ContactTitle.Width = Unit.Pixel(120);
	            ContactTitle.ID = "ContactTitle";
	            ContactTitle.DataBinding += new System.EventHandler(ContactTitle_DataBinding);
	            ItemTemplateRow1Cell5.Controls.Add(ContactTitle);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell5);
	            container.Controls.Add(ItemTemplateRow1);
	        }
	        void ContactTitle_DataBinding(object sender, System.EventArgs e)
	        {
	            TextBox ContactTitle = (TextBox)sender;
	            ContactTitle.Text = ((ContactTitle.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["ContactTitle"].ToString();
	        }
	        void ContactName_DataBinding(object sender, System.EventArgs e)
	        {
	            TextBox ContactName = (TextBox)sender;
	            ContactName.Text = ((ContactName.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["ContactName"].ToString();
	        }
	        void CompanyName_DataBinding(object sender, System.EventArgs e)
	        {
	            TextBox CompanyName = (TextBox)sender;
	            CompanyName.Text = ((CompanyName.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["CompanyName"].ToString();
	        }
	        void CustomerID_DataBinding(object sender, System.EventArgs e)
	        {
	            TextBox CustomerID = (TextBox)sender;
	            CustomerID.Text = ((CustomerID.NamingContainer as RadListViewDataItem).DataItem as DataRowView)["CustomerID"].ToString();
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
	            ItemTemplateRow1Cell1.Width = Unit.Pixel(50);
	            TableCell ItemTemplateRow1Cell2 = new TableCell();
	            ItemTemplateRow1Cell2.Width = Unit.Pixel(100);
	            TableCell ItemTemplateRow1Cell3 = new TableCell();
	            ItemTemplateRow1Cell3.Width = Unit.Pixel(250);
	            TableCell ItemTemplateRow1Cell4 = new TableCell();
	            ItemTemplateRow1Cell4.Width = Unit.Pixel(150);
	            TableCell ItemTemplateRow1Cell5 = new TableCell();
	            ItemTemplateRow1Cell5.Width = Unit.Pixel(150);
	            ImageButton imageButton = new ImageButton();
	            imageButton.ID = "EditButton";
	            imageButton.CommandName = "Edit";
	            imageButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Edit.gif";
	            ItemTemplateRow1Cell1.Controls.Add(imageButton);
	            Label CustomerID = new Label();
	            CustomerID.ID = "CustomerID";
	            CustomerID.DataBinding += new System.EventHandler(CustomerID_DataBinding);
	            ItemTemplateRow1Cell2.Controls.Add(CustomerID);
	            Label CompanyName = new Label();
	            CompanyName.ID = "CompanyName";
	            CompanyName.DataBinding += new System.EventHandler(CompanyName_DataBinding);
	            ItemTemplateRow1Cell3.Controls.Add(CompanyName);
	            Label ContactName = new Label();
	            ContactName.ID = "ContactName";
	            ContactName.DataBinding += new System.EventHandler(ContactName_DataBinding);
	            ItemTemplateRow1Cell4.Controls.Add(ContactName);
	            Label ContactTitle = new Label();
	            ContactTitle.ID = "ContactTitle";
	            ContactTitle.DataBinding += new System.EventHandler(ContactTitle_DataBinding);
	            ItemTemplateRow1Cell5.Controls.Add(ContactTitle);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell5);
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
	    public class AlterNatingItemTemplate : ITemplate
	    {
	        protected LiteralControl lControl;
	        public AlterNatingItemTemplate()
	        {
	        }
	        public void InstantiateIn(System.Web.UI.Control container)
	        {
	            TableRow ItemTemplateRow1 = new TableRow();
	            ItemTemplateRow1.Style["background-color"] = "#ccffff";
	            ItemTemplateRow1.ID = "LayoutTableRow1";
	            TableCell ItemTemplateRow1Cell1 = new TableCell();
	            ItemTemplateRow1Cell1.Width = Unit.Pixel(50);
	            TableCell ItemTemplateRow1Cell2 = new TableCell();
	            ItemTemplateRow1Cell2.Width = Unit.Pixel(100);
	            TableCell ItemTemplateRow1Cell3 = new TableCell();
	            ItemTemplateRow1Cell3.Width = Unit.Pixel(250);
	            TableCell ItemTemplateRow1Cell4 = new TableCell();
	            ItemTemplateRow1Cell4.Width = Unit.Pixel(150);
	            TableCell ItemTemplateRow1Cell5 = new TableCell();
	            ItemTemplateRow1Cell5.Width = Unit.Pixel(150);
	            ImageButton imageButton = new ImageButton();
	            imageButton.ID = "EditButton";
	            imageButton.CommandName = "Edit";
	            imageButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Edit.gif";
	            ItemTemplateRow1Cell1.Controls.Add(imageButton);
	            Label CustomerID = new Label();
	            CustomerID.ID = "CustomerID";
	            CustomerID.DataBinding += new System.EventHandler(CustomerID_DataBinding);
	            ItemTemplateRow1Cell2.Controls.Add(CustomerID);
	            Label CompanyName = new Label();
	            CompanyName.ID = "CompanyName";
	            CompanyName.DataBinding += new System.EventHandler(CompanyName_DataBinding);
	            ItemTemplateRow1Cell3.Controls.Add(CompanyName);
	            Label ContactName = new Label();
	            ContactName.ID = "ContactName";
	            ContactName.DataBinding += new System.EventHandler(ContactName_DataBinding);
	            ItemTemplateRow1Cell4.Controls.Add(ContactName);
	            Label ContactTitle = new Label();
	            ContactTitle.ID = "ContactTitle";
	            ContactTitle.DataBinding += new System.EventHandler(ContactTitle_DataBinding);
	            ItemTemplateRow1Cell5.Controls.Add(ContactTitle);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4);
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell5);
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
	    Partial Class DefaultVB
	        Inherits System.Web.UI.Page
	        Protected Sub Page_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Init
	            Dim listView As New RadListView()
	            listView.DataSourceID = "SqlDataSource1"
	            listView.LayoutTemplate = New LayoutTemplate()
	            listView.ItemTemplate = New ItemTemplate()
	            listView.AlternatingItemTemplate = New AlterNatingItemTemplate()
	            listView.EmptyDataTemplate = New EmptyDataTemplate()
	            listView.EditItemTemplate = New EditItemTemplate()
	            listView.ItemPlaceholderID = "itemPlaceholder"
	            PlaceHolder1.Controls.Add(listView)
	        End Sub
	    End Class
	    Public Class LayoutTemplate
	        Implements ITemplate
	        Protected lControl As LiteralControl
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            Dim LayoutTable As New Table()
	            Dim LayoutTableRow1 As New TableRow()
	            Dim LayoutTableRow2 As New TableRow()
	            LayoutTableRow1.ID = "LayoutTableRow1"
	            LayoutTableRow1.BackColor = System.Drawing.Color.LightGray
	            LayoutTableRow2.ID = "itemPlaceholder"
	            Dim LayoutTableRow1Cell1 As New TableCell()
	            LayoutTableRow1Cell1.Width = Unit.Pixel(50)
	            Dim LayoutTableRow1Cell2 As New TableCell()
	            LayoutTableRow1Cell2.Width = Unit.Pixel(150)
	            Dim LayoutTableRow1Cell3 As New TableCell()
	            LayoutTableRow1Cell3.Width = Unit.Pixel(250)
	            Dim LayoutTableRow1Cell4 As New TableCell()
	            LayoutTableRow1Cell4.Width = Unit.Pixel(200)
	            Dim LayoutTableRow1Cell5 As New TableCell()
	            LayoutTableRow1Cell5.Width = Unit.Pixel(150)
	            Dim CustomerID As New Label()
	            CustomerID.Text = "CustomerID"
	            LayoutTableRow1Cell2.Controls.Add(CustomerID)
	            Dim CompanyName As New Label()
	            CompanyName.Text = "CompanyName"
	            LayoutTableRow1Cell3.Controls.Add(CompanyName)
	            Dim ContactName As New Label()
	            ContactName.Text = "ContactName"
	            LayoutTableRow1Cell4.Controls.Add(ContactName)
	            Dim ContactTitle As New Label()
	            ContactTitle.Text = "ContactTitle"
	            LayoutTableRow1Cell5.Controls.Add(ContactTitle)
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell1)
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell2)
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell3)
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell4)
	            LayoutTableRow1.Cells.Add(LayoutTableRow1Cell5)
	            LayoutTable.Rows.Add(LayoutTableRow1)
	            LayoutTable.Rows.Add(LayoutTableRow2)
	            container.Controls.Add(LayoutTable)
	        End Sub
	    End Class
	    Public Class EmptyDataTemplate
	        Implements ITemplate
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            Dim label As New Label()
	            label.ID = "NoRecordsLabel"
	            label.Text = "No Records are available at this time"
	            container.Controls.Add(label)
	        End Sub
	    End Class
	    Public Class EditItemTemplate
	        Implements ITemplate
	        Protected lControl As LiteralControl
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            Dim ItemTemplateRow1 As New TableRow()
	            ItemTemplateRow1.Style("background-color") = "#45474A"
	            ItemTemplateRow1.ID = "LayoutTableRow1"
	            Dim ItemTemplateRow1Cell1 As New TableCell()
	            ItemTemplateRow1Cell1.Width = Unit.Pixel(50)
	            Dim ItemTemplateRow1Cell2 As New TableCell()
	            ItemTemplateRow1Cell2.Width = Unit.Pixel(100)
	            Dim ItemTemplateRow1Cell3 As New TableCell()
	            ItemTemplateRow1Cell3.Width = Unit.Pixel(250)
	            Dim ItemTemplateRow1Cell4 As New TableCell()
	            ItemTemplateRow1Cell4.Width = Unit.Pixel(150)
	            Dim ItemTemplateRow1Cell5 As New TableCell()
	            ItemTemplateRow1Cell5.Width = Unit.Pixel(150)
	            Dim UpdateButton As New ImageButton()
	            UpdateButton.ID = "UpdateButton"
	            UpdateButton.CommandName = "Update"
	            UpdateButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Update.gif"
	            ItemTemplateRow1Cell1.Controls.Add(UpdateButton)
	            Dim CancelButton As New ImageButton()
	            CancelButton.ID = "CancelButton"
	            CancelButton.CommandName = "Cancel"
	            CancelButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Cancel.gif"
	            ItemTemplateRow1Cell1.Controls.Add(CancelButton)
	            Dim CustomerID As New TextBox()
	            CustomerID.Width = Unit.Pixel(70)
	            CustomerID.ID = "CustomerID"
	            AddHandler CustomerID.DataBinding, AddressOf CustomerID_DataBinding
	            ItemTemplateRow1Cell2.Controls.Add(CustomerID)
	            Dim CompanyName As New TextBox()
	            CompanyName.Width = Unit.Pixel(210)
	            CompanyName.ID = "CompanyName"
	            AddHandler CompanyName.DataBinding, AddressOf CompanyName_DataBinding
	            ItemTemplateRow1Cell3.Controls.Add(CompanyName)
	            Dim ContactName As New TextBox()
	            ContactName.Width = Unit.Pixel(110)
	            ContactName.ID = "ContactName"
	            AddHandler ContactName.DataBinding, AddressOf ContactName_DataBinding
	            ItemTemplateRow1Cell4.Controls.Add(ContactName)
	            Dim ContactTitle As New TextBox()
	            ContactTitle.Width = Unit.Pixel(120)
	            ContactTitle.ID = "ContactTitle"
	            AddHandler ContactTitle.DataBinding, AddressOf ContactTitle_DataBinding
	            ItemTemplateRow1Cell5.Controls.Add(ContactTitle)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell5)
	            container.Controls.Add(ItemTemplateRow1)
	        End Sub
	        Sub ContactTitle_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim ContactTitle As TextBox = DirectCast(sender, TextBox)
	            ContactTitle.Text = (TryCast((TryCast(ContactTitle.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("ContactTitle").ToString()
	        End Sub
	        Sub ContactName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim ContactName As TextBox = DirectCast(sender, TextBox)
	            ContactName.Text = (TryCast((TryCast(ContactName.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("ContactName").ToString()
	        End Sub
	        Sub CompanyName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim CompanyName As TextBox = DirectCast(sender, TextBox)
	            CompanyName.Text = (TryCast((TryCast(CompanyName.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("CompanyName").ToString()
	        End Sub
	        Sub CustomerID_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim CustomerID As TextBox = DirectCast(sender, TextBox)
	            CustomerID.Text = (TryCast((TryCast(CustomerID.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("CustomerID").ToString()
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
	            ItemTemplateRow1Cell1.Width = Unit.Pixel(50)
	            Dim ItemTemplateRow1Cell2 As New TableCell()
	            ItemTemplateRow1Cell2.Width = Unit.Pixel(100)
	            Dim ItemTemplateRow1Cell3 As New TableCell()
	            ItemTemplateRow1Cell3.Width = Unit.Pixel(250)
	            Dim ItemTemplateRow1Cell4 As New TableCell()
	            ItemTemplateRow1Cell4.Width = Unit.Pixel(150)
	            Dim ItemTemplateRow1Cell5 As New TableCell()
	            ItemTemplateRow1Cell5.Width = Unit.Pixel(150)
	            Dim imageButton As New ImageButton()
	            imageButton.ID = "EditButton"
	            imageButton.CommandName = "Edit"
	            imageButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Edit.gif"
	            ItemTemplateRow1Cell1.Controls.Add(imageButton)
	            Dim CustomerID As New Label()
	            CustomerID.ID = "CustomerID"
	            AddHandler CustomerID.DataBinding, AddressOf CustomerID_DataBinding
	            ItemTemplateRow1Cell2.Controls.Add(CustomerID)
	            Dim CompanyName As New Label()
	            CompanyName.ID = "CompanyName"
	            AddHandler CompanyName.DataBinding, AddressOf CompanyName_DataBinding
	            ItemTemplateRow1Cell3.Controls.Add(CompanyName)
	            Dim ContactName As New Label()
	            ContactName.ID = "ContactName"
	            AddHandler ContactName.DataBinding, AddressOf ContactName_DataBinding
	            ItemTemplateRow1Cell4.Controls.Add(ContactName)
	            Dim ContactTitle As New Label()
	            ContactTitle.ID = "ContactTitle"
	            AddHandler ContactTitle.DataBinding, AddressOf ContactTitle_DataBinding
	            ItemTemplateRow1Cell5.Controls.Add(ContactTitle)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell5)
	            container.Controls.Add(ItemTemplateRow1)
	        End Sub
	        Sub ContactTitle_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim ContactTitle As Label = DirectCast(sender, Label)
	            ContactTitle.Text = (TryCast((TryCast(ContactTitle.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("ContactTitle").ToString()
	        End Sub
	        Sub ContactName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim ContactName As Label = DirectCast(sender, Label)
	            ContactName.Text = (TryCast((TryCast(ContactName.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("ContactName").ToString()
	        End Sub
	        Sub CompanyName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim CompanyName As Label = DirectCast(sender, Label)
	            CompanyName.Text = (TryCast((TryCast(CompanyName.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("CompanyName").ToString()
	        End Sub
	        Sub CustomerID_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim CustomerID As Label = DirectCast(sender, Label)
	            CustomerID.Text = (TryCast((TryCast(CustomerID.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("CustomerID").ToString()
	        End Sub
	    End Class
	    Public Class AlterNatingItemTemplate
	        Implements ITemplate
	        Protected lControl As LiteralControl
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            Dim ItemTemplateRow1 As New TableRow()
	            ItemTemplateRow1.Style("background-color") = "#ccffff"
	            ItemTemplateRow1.ID = "LayoutTableRow1"
	            Dim ItemTemplateRow1Cell1 As New TableCell()
	            ItemTemplateRow1Cell1.Width = Unit.Pixel(50)
	            Dim ItemTemplateRow1Cell2 As New TableCell()
	            ItemTemplateRow1Cell2.Width = Unit.Pixel(100)
	            Dim ItemTemplateRow1Cell3 As New TableCell()
	            ItemTemplateRow1Cell3.Width = Unit.Pixel(250)
	            Dim ItemTemplateRow1Cell4 As New TableCell()
	            ItemTemplateRow1Cell4.Width = Unit.Pixel(150)
	            Dim ItemTemplateRow1Cell5 As New TableCell()
	            ItemTemplateRow1Cell5.Width = Unit.Pixel(150)
	            Dim imageButton As New ImageButton()
	            imageButton.ID = "EditButton"
	            imageButton.CommandName = "Edit"
	            imageButton.ImageUrl = "~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Edit.gif"
	            ItemTemplateRow1Cell1.Controls.Add(imageButton)
	            Dim CustomerID As New Label()
	            CustomerID.ID = "CustomerID"
	            AddHandler CustomerID.DataBinding, AddressOf CustomerID_DataBinding
	            ItemTemplateRow1Cell2.Controls.Add(CustomerID)
	            Dim CompanyName As New Label()
	            CompanyName.ID = "CompanyName"
	            AddHandler CompanyName.DataBinding, AddressOf CompanyName_DataBinding
	            ItemTemplateRow1Cell3.Controls.Add(CompanyName)
	            Dim ContactName As New Label()
	            ContactName.ID = "ContactName"
	            AddHandler ContactName.DataBinding, AddressOf ContactName_DataBinding
	            ItemTemplateRow1Cell4.Controls.Add(ContactName)
	            Dim ContactTitle As New Label()
	            ContactTitle.ID = "ContactTitle"
	            AddHandler ContactTitle.DataBinding, AddressOf ContactTitle_DataBinding
	            ItemTemplateRow1Cell5.Controls.Add(ContactTitle)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell1)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell2)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell3)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell4)
	            ItemTemplateRow1.Cells.Add(ItemTemplateRow1Cell5)
	            container.Controls.Add(ItemTemplateRow1)
	        End Sub
	        Sub ContactTitle_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim ContactTitle As Label = DirectCast(sender, Label)
	            ContactTitle.Text = (TryCast((TryCast(ContactTitle.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("ContactTitle").ToString()
	        End Sub
	        Sub ContactName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim ContactName As Label = DirectCast(sender, Label)
	            ContactName.Text = (TryCast((TryCast(ContactName.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("ContactName").ToString()
	        End Sub
	        Sub CompanyName_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim CompanyName As Label = DirectCast(sender, Label)
	            CompanyName.Text = (TryCast((TryCast(CompanyName.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("CompanyName").ToString()
	        End Sub
	        Sub CustomerID_DataBinding(ByVal sender As Object, ByVal e As System.EventArgs)
	            Dim CustomerID As Label = DirectCast(sender, Label)
	            CustomerID.Text = (TryCast((TryCast(CustomerID.NamingContainer, RadListViewDataItem)).DataItem, DataRowView))("CustomerID").ToString()
	        End Sub
	    End Class
````

