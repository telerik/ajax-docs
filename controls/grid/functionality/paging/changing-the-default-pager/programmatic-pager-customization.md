---
title: Programmatic Pager Customization
page_title: Programmatic Pager Customization | RadGrid for ASP.NET AJAX Documentation
description: Programmatic Pager Customization
slug: grid/functionality/paging/changing-the-default-pager/programmatic-pager-customization
tags: programmatic,pager,customization
published: True
position: 1
---

# Programmatic Pager Customization



## 

You can replace the default pager programmatically with your own pager instance that holds the control set of your choice. This lets you provide a completely new look and feel for your pager while still using the integrated paging functionality of the grid.

To do this,

1. Define your own class (such as the "MyPager" class in the following example) whose member variables are the controls you want displayed in the pager.

* Include a **GridPagingManager** in your custom class. This object can be used in your class implementation to access the information from the **PagerItem.Paging** object. You can assign an instance of this object in the constructor of your class.

* Include a **GridTableView** in your custom class for the table view that your pager operates on. You can assign an instance of this object in the constructor of your class.

* Add any visual controls to the custom class for the controls that appear in your pager. These can be textboxes, validators, LiteralControls for messages, and so on. The creation of these controls should follow the ASP.NET conventions (overriding the **CreateChildControls**() method to instantiate and add your pager controls to the **Controls** collection of the respective class instance).

1. Create a handler for the grid's **ItemEvent** event. When the event is "GridInitializePagerItem", cancel the default pager initialization and add an instance of your own class to the **Controls** collection of the **PagerContentCell**.



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" Width="97%"
	    AllowSorting="True" AllowPaging="True" Skin="Office2007" OnItemEvent="RadGrid1_ItemEvent">
	    <MasterTableView Width="100%">
	      <PagerStyle Mode="NumericPages" AlwaysVisible="true" />
	    </MasterTableView>
	  </telerik:RadGrid>
	   <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````
````C#
	
	    protected void RadGrid1_ItemEvent(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.EventInfo is GridInitializePagerItem)
	        {
	            GridInitializePagerItem info = e.EventInfo as GridInitializePagerItem;
	            e.Canceled = true;
	            (e.Item as GridPagerItem).PagerContentCell.Controls.Add(new MyPager(info.PagingManager, e.Item.OwnerTableView));
	        }
	    }
	    private class MyPager : Control
	    {
	        private GridPagingManager paging;
	        private GridTableView tableView;
	        TextBox textBox;
	        RangeValidator rangeValidator;
	        public MyPager(GridPagingManager paging, GridTableView tableView)
	        {
	            this.paging = paging;
	            this.tableView = tableView;
	            this.EnsureChildControls();
	        }
	        protected override void CreateChildControls()
	        {
	            this.Controls.Add(new LiteralControl("Page: "));
	            textBox = new TextBox();
	            textBox.ID = "textbox";
	            textBox.Columns = 3;
	            this.Controls.Add(textBox);
	            this.Controls.Add(new LiteralControl(" (of " + this.paging.PageCount + ") "));
	            LinkButton btn = new LinkButton();
	            btn.ID = "btn1";
	            btn.Text = "Change page";
	            btn.Click += new EventHandler(this.BtnClick);
	            this.Controls.Add(btn);
	            rangeValidator = new RangeValidator();
	            rangeValidator.ErrorMessage = "Page index should be in the range of 1 to " + this.paging.PageCount;
	            this.Controls.Add(rangeValidator);
	        }
	        protected override void OnPreRender(EventArgs e)
	        {
	            textBox.Text = (paging.CurrentPageIndex + 1).ToString();
	            rangeValidator.Type = ValidationDataType.Integer;
	            rangeValidator.MinimumValue = 1.ToString();
	            rangeValidator.MaximumValue = this.paging.PageCount.ToString();
	
	            rangeValidator.ControlToValidate = textBox.ID;
	            base.OnPreRender(e);
	        }
	        private void BtnClick(object sender, EventArgs e)
	        {
	            if (this.textBox.Text.Trim() != "")
	            {
	                this.tableView.CurrentPageIndex = int.Parse(this.textBox.Text) - 1;
	                this.tableView.Rebind();
	            }
	        }
	    }
	
````
````VB.NET
	
	
	    Protected Sub RadGrid1_ItemEvent(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
	        If (TypeOf (e.EventInfo) Is GridInitializePagerItem) Then
	            Dim info As GridInitializePagerItem = CType(e.EventInfo, GridInitializePagerItem)
	            e.Canceled = True
	            Dim pagerItem As GridPagerItem = CType(e.Item, GridPagerItem)
	            pagerItem.PagerContentCell.Controls.Add(New MyPager(info.PagingManager, e.Item.OwnerTableView))
	        End If
	    End Sub
	    Public Class MyPager
	        Inherits Control
	        Private paging As GridPagingManager
	        Private tableView As GridTableView
	        Dim myTextBox As TextBox
	        Dim myRangeValidator As RangeValidator
	        Public Sub New(ByVal paging As GridPagingManager, ByVal tableView As GridTableView)
	            Me.paging = paging
	            Me.tableView = tableView
	            Me.EnsureChildControls()
	        End Sub
	        Protected Overrides Sub CreateChildControls()
	            Me.Controls.Add(New LiteralControl("Page: "))
	            myTextBox = New TextBox
	            myTextBox.ID = "textbox"
	            myTextBox.Columns = 3
	            Me.Controls.Add(myTextBox)
	            Me.Controls.Add(New LiteralControl(" (of " & Me.paging.PageCount & ") "))
	            Dim btn As LinkButton = New LinkButton
	            btn.ID = "btn1"
	            btn.Text = "Change page"
	            AddHandler btn.Click, AddressOf Me.BtnClick
	            Me.Controls.Add(btn)
	            myRangeValidator = New RangeValidator
	            myRangeValidator.ErrorMessage = " Page index should be in the range of 1 to " & Me.paging.PageCount
	            Me.Controls.Add(myRangeValidator)
	        End Sub
	        Protected Overrides Sub OnPreRender(ByVal e As EventArgs)
	            myTextBox.Text = (paging.CurrentPageIndex + 1).ToString()
	            myRangeValidator.Type = ValidationDataType.Integer
	            myRangeValidator.MinimumValue = 1.ToString()
	            myRangeValidator.MaximumValue = Me.paging.PageCount.ToString()
	            myRangeValidator.ControlToValidate = myTextBox.ID
	            MyBase.OnPreRender(e)
	        End Sub
	        Protected Sub BtnClick(ByVal sender As Object, ByVal e As EventArgs)
	            If Not (Me.myTextBox.Text.Trim() = "") Then
	                Me.tableView.CurrentPageIndex = Integer.Parse(Me.myTextBox.Text) - 1
	                Me.tableView.Rebind()
	            End If
	        End Sub
	    End Class
	
	
````

