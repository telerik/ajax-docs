---
title: Setting Pager Template
page_title: Setting Pager Template | UI for ASP.NET AJAX Documentation
description: Setting Pager Template
slug: grid/functionality/paging/changing-the-default-pager/setting-pager-template
tags: setting,pager,template
published: True
position: 0
---

# Setting Pager Template



You can use a template to set the appearance and features of the [Pager item]({%slug grid/functionality/paging/pager-item%}).

To create a pager template,

1. Choose __Edit Templates__ from the __RadGrid__[ Smart Tag]({%slug grid/design-time-/smarttag%}).

1. From the drop-down list of possible templates to edit, select the "PagerTemplate" for the __MasterTableView__ or detail __GridTableView__ of interest.

1. On the Template Design surface, drag and drop any controls from the toolbox, or add any HTML elements you want.

1. When you are finished, click __End Template Editing__ from the Smart Tag.

## Binding controls inside a PagerTemplate

All command buttons in the template can take advantage of the [command API]({%slug grid/control-lifecycle/command-reference-%}). For example a button with __CommandName__ "Page" and __CommandArgument__ of "Last" will force __RadGrid__ to go to the last page when clicked, with no additional coding on your part. Here is a list of Pager-related commands:


|  __CommandName__  |  __CommandArgument__  |  __Description__  |
| ------ | ------ | ------ |
|Page|"First"|Goes to the first page.|
|Page|"Last"|Goes to the last page.|
|Page|"Next"|Goes to the next page.|
|Page|"Prev"|Goes to the previous page.|
|Page|An integer (e.g. "5")|Goes to the specified page.|

In addition, you can use declarative binding expressions in template controls, setting control properties based on the properties of the __PagerItem__ instance. These include __Paging.PageCount__, __Paging.PageSize__, and __OwnerTableView.CurrentPageIndex__.

![Pager Template](images/grd_PagerTemplate.png)

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server" Width="97%" AllowPaging="true" PageSize="10"
	        DataSourceID="SqlDataSource1" Skin="Windows7">
	        <MasterTableView>
	            <PagerTemplate>
	                <table border="0" cellpadding="5" width="100%">
	                    <tr>
	                        <td style="border-style: none;" height="18px">
	                            <asp:LinkButton ID="LinkButton1" runat="server" CommandName="Page" CausesValidation="false"
	                                CommandArgument="First">First</asp:LinkButton>
	                        </td>
	                        <td style="border-style: none;" height="18px">
	                            <asp:LinkButton ID="LinkButton2" runat="server" CommandName="Page" CausesValidation="false"
	                                CommandArgument="Prev">Prev</asp:LinkButton>
	                        </td>
	                        <td style="border-style: none;" height="18px">
	                            <asp:TextBox ID="tbPageNumber" runat="server" Columns="3" Text='<%# Container.OwnerTableView.CurrentPageIndex + 1 %>' />
	                            <asp:RangeValidator runat="Server" ID="RangeValidator1" ControlToValidate="tbPageNumber"
	                                EnableClientScript="true" MinimumValue="1" Type="Integer" MaximumValue='<%# Container.OwnerTableView.PageCount %>'
	                                ErrorMessage='"Value must be in the range of 1 - " + "<%# Container.OwnerTableView.PageCount %>"'
	                                Display="Dynamic">     </asp:RangeValidator>
	                        </td>
	                        <td style="border-style: none;" height="18px">
	                            <asp:LinkButton ID="LinkButton3" runat="server" CommandName="CustomChangePage">Go</asp:LinkButton>
	                        </td>
	                        <td style="border-style: none;" height="18px">
	                            <asp:LinkButton ID="LinkButton4" runat="server" CommandName="Page" CausesValidation="false"
	                                CommandArgument="Next">Next</asp:LinkButton>
	                        </td>
	                        <td style="border-style: none;" height="18px">
	                            <asp:LinkButton ID="LinkButton5" runat="server" CommandName="Page" CausesValidation="false"
	                                CommandArgument="Last">Last</asp:LinkButton>
	                        </td>
	                        <td style="border-style: none; width: 100%" align="right" height="18px">
	                            <asp:LinkButton ID="LinkButton6" runat="server" CommandName="RebindGrid" CausesValidation="false">Refresh data</asp:LinkButton>
	                        </td>
	                    </tr>
	                </table>
	            </PagerTemplate>
	        </MasterTableView>
	    </telerik:RadGrid>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT Country FROM [Customers]"></asp:SqlDataSource>
````



## Setting preferences for controls inside the PagerTemplate at runtime

There are cases when you may want to access the controls inside your __PagerTemplate__ from the code-behind and dynamically change their preferences. Here are the steps you can perform to reference controls inside the __PagerTemplate__ programmatically:

1. Add a handler for the grid's __ItemCreated__ event.

1. In the __ItemCreated__ event handler, check whether the currently bound item is __GridPagerItem__.

1. Locate the desired control using the __FindControl__ method of the command item.

1. Change the properties of the control instance as desired.

In the example below, The __ItemCreated__ event handler is used to change the __Text,____CommandName__ and __CommandArgument__ properties for __LinkButton__ controls inside the __PagerTemplate__ object:



````ASPNET
	    <telerik:RadGrid ID="RadGrid2" runat="server" Width="97%" AllowPaging="true" PageSize="10"
	        DataSourceID="SqlDataSource2" OnItemCreated="RadGrid2_ItemCreated" Skin="Windows7">
	        <MasterTableView>
	            <PagerTemplate>
	                <asp:LinkButton ID="LinkButton1" runat="server" />
	                <asp:LinkButton ID="Linkbutton2" runat="server" />
	            </PagerTemplate>
	        </MasterTableView>
	    </telerik:RadGrid>
	    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT Country FROM [Customers]"></asp:SqlDataSource>
````
````C#
	    protected void RadGrid2_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridPagerItem)
	        {
	            GridPagerItem pagerItem = e.Item as GridPagerItem;
	            LinkButton lnkButton = pagerItem.FindControl("LinkButton1") as LinkButton;
	            lnkButton.CommandName = "Page";
	            lnkButton.CommandArgument = "Prev";
	            lnkButton.Text = "Previous page";
	            lnkButton = pagerItem.FindControl("LinkButton2") as LinkButton;
	            lnkButton.CommandName = "Page";
	            lnkButton.CommandArgument = "Next";
	            lnkButton.Text = "Next page";
	        }
	    }
	
````
````VB.NET
	    Protected Sub RadGrid2_ItemCreated(sender As Object, e As Telerik.Web.UI.GridItemEventArgs)
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim pagerItem As GridPagerItem = TryCast(e.Item, GridPagerItem)
	            Dim lnkButton As LinkButton = TryCast(pagerItem.FindControl("LinkButton1"), LinkButton)
	            lnkButton.CommandName = "Page"
	            lnkButton.CommandArgument = "Prev"
	            lnkButton.Text = "Previous page"
	            lnkButton = TryCast(pagerItem.FindControl("LinkButton2"), LinkButton)
	            lnkButton.CommandName = "Page"
	            lnkButton.CommandArgument = "Next"
	            lnkButton.Text = "Next page"
	        End If
	    End Sub
	
	#End Region
	
	#Region "setting-pager-template_2"
	    Protected Sub RadGrid3_ItemCreated(sender As Object, e As GridItemEventArgs)
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim pagerItem As GridPagerItem = TryCast(e.Item, GridPagerItem)
	            If TypeOf pagerItem.NamingContainer Is GridTHead Then
	                pagerItem.FindControl("btnPrev").Visible = False
	                pagerItem.FindControl("btnNext").Visible = False
	            ElseIf TypeOf pagerItem.NamingContainer Is GridTFoot Then
	                pagerItem.FindControl("btnFirst").Visible = False
	                pagerItem.FindControl("btnLast").Visible = False
	            End If
	        End If
	    End Sub
	#End Region
	
	#Region "setting-pager-template_3"
	    Private Class MyPagerTemplate
	        Implements ITemplate
	        Protected prevButton As LinkButton
	        Protected nextButton As LinkButton
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            prevButton = New LinkButton()
	            prevButton.ID = "prevButton"
	            prevButton.Text = "Previous page"
	            prevButton.CommandName = "Page"
	            prevButton.CommandArgument = "Prev"
	            nextButton = New LinkButton()
	            nextButton.ID = "nextButton"
	            nextButton.Text = "Next page"
	            nextButton.CommandName = "Page"
	            nextButton.CommandArgument = "Next"
	            container.Controls.Add(prevButton)
	            container.Controls.Add(New LiteralControl("      "))
	            container.Controls.Add(nextButton)
	        End Sub
	    End Class
	#End Region
	End Class




## Displaying different controls in a PagerTemplate based on position

When the __PagerStyle.Position__ property is set to "TopAndBottom", your page appears both above and below the records in the table view. You may want to display different controls depending on whether the pager is above or below the data items. You can do this by setting the visibility of controls in the __ItemCreated__ event handler. To determine whether the pager item is displayed in the header or footer of the grid, check the __NamingContainer__ for the __GridPagerItem__ object (it will be __GridTHead__ for the header and __GridTFoot__ for the footer).

The following example illustrates this technique:



````ASPNET
	    <telerik:RadGrid ID="RadGrid3" runat="server" DataSourceID="SqlDataSource3" Width="97%"
	        AllowSorting="True" AllowPaging="True" Skin="Windows7" OnItemCreated="RadGrid3_ItemCreated">
	        <PagerStyle Mode="NumericPages" Position="TopAndBottom" />
	        <MasterTableView Width="100%">
	            <PagerTemplate>
	                <table border="0" cellpadding="0" cellspacing="0" style="height: 20px" width="50%">
	                    <tr>
	                        <td>
	                            <asp:LinkButton ID="btnFirst" runat="server" CommandName="Page" CommandArgument="First">First</asp:LinkButton>
	                        </td>
	                        <td>
	                            <asp:LinkButton ID="btnPrev" runat="server" CommandName="Page" CommandArgument="Prev">Prev</asp:LinkButton>
	                        </td>
	                        <td>
	                            <asp:LinkButton ID="btnNext" runat="server" CommandName="Page" CommandArgument="Next">Next</asp:LinkButton>
	                        </td>
	                        <td>
	                            <asp:LinkButton ID="btnLast" runat="server" CommandName="Page" CommandArgument="Last">Last</asp:LinkButton>
	                        </td>
	                    </tr>
	                </table>
	            </PagerTemplate>
	        </MasterTableView>
	    </telerik:RadGrid>
	    <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT Country FROM [Customers]"></asp:SqlDataSource>
````
````C#
	    protected void RadGrid3_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridPagerItem)
	        {
	            GridPagerItem pagerItem = e.Item as GridPagerItem;
	            if (pagerItem.NamingContainer is GridTHead)
	            {
	                pagerItem.FindControl("btnPrev").Visible = false;
	                pagerItem.FindControl("btnNext").Visible = false;               
	            }
	            else if (pagerItem.NamingContainer is GridTFoot)
	            {
	                pagerItem.FindControl("btnFirst").Visible = false;
	                pagerItem.FindControl("btnLast").Visible = false;               
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid3_ItemCreated(sender As Object, e As GridItemEventArgs)
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim pagerItem As GridPagerItem = TryCast(e.Item, GridPagerItem)
	            If TypeOf pagerItem.NamingContainer Is GridTHead Then
	                pagerItem.FindControl("btnPrev").Visible = False
	                pagerItem.FindControl("btnNext").Visible = False
	            ElseIf TypeOf pagerItem.NamingContainer Is GridTFoot Then
	                pagerItem.FindControl("btnFirst").Visible = False
	                pagerItem.FindControl("btnLast").Visible = False
	            End If
	        End If
	    End Sub
	#End Region
	
	#Region "setting-pager-template_3"
	    Private Class MyPagerTemplate
	        Implements ITemplate
	        Protected prevButton As LinkButton
	        Protected nextButton As LinkButton
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            prevButton = New LinkButton()
	            prevButton.ID = "prevButton"
	            prevButton.Text = "Previous page"
	            prevButton.CommandName = "Page"
	            prevButton.CommandArgument = "Prev"
	            nextButton = New LinkButton()
	            nextButton.ID = "nextButton"
	            nextButton.Text = "Next page"
	            nextButton.CommandName = "Page"
	            nextButton.CommandArgument = "Next"
	            container.Controls.Add(prevButton)
	            container.Controls.Add(New LiteralControl("      "))
	            container.Controls.Add(nextButton)
	        End Sub
	    End Class
	#End Region
	End Class




## Defining PagerTemplate programmatically

To assign the __PagerTemplate__ for a grid in the code-behind, you need to design a custom class that implements the __ITemplate__ interface This class holds the controls for the template:



````ASPNET
	    <telerik:RadGrid ID="RadGrid4" runat="server" DataSourceID="SqlDataSource4" Width="97%"
	        AllowSorting="True" AllowPaging="True" Skin="Windows7">
	        <PagerStyle Mode="NumericPages" Position="TopAndBottom" />
	        <MasterTableView Width="100%">
	        </MasterTableView>
	    </telerik:RadGrid>
	    <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT Country FROM [Customers]"></asp:SqlDataSource>
````
````C#
	    private class MyPagerTemplate : ITemplate
	    {
	        protected LinkButton prevButton;
	        protected LinkButton nextButton;
	        public MyPagerTemplate() { }
	        public void InstantiateIn(System.Web.UI.Control container)
	        {
	            prevButton = new LinkButton();
	            prevButton.ID = "prevButton";
	            prevButton.Text = "Previous page";
	            prevButton.CommandName = "Page";
	            prevButton.CommandArgument = "Prev";
	            nextButton = new LinkButton();
	            nextButton.ID = "nextButton";
	            nextButton.Text = "Next page";
	            nextButton.CommandName = "Page";
	            nextButton.CommandArgument = "Next";
	            container.Controls.Add(prevButton);
	            container.Controls.Add(new LiteralControl("      "));
	            container.Controls.Add(nextButton);
	        }
	    }
````
````VB.NET
	    Private Class MyPagerTemplate
	        Implements ITemplate
	        Protected prevButton As LinkButton
	        Protected nextButton As LinkButton
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            prevButton = New LinkButton()
	            prevButton.ID = "prevButton"
	            prevButton.Text = "Previous page"
	            prevButton.CommandName = "Page"
	            prevButton.CommandArgument = "Prev"
	            nextButton = New LinkButton()
	            nextButton.ID = "nextButton"
	            nextButton.Text = "Next page"
	            nextButton.CommandName = "Page"
	            nextButton.CommandArgument = "Next"
	            container.Controls.Add(prevButton)
	            container.Controls.Add(New LiteralControl("      "))
	            container.Controls.Add(nextButton)
	        End Sub
	    End Class
	#End Region
	End Class




In the __Page_Init__ event handler, you can assign an instance of your template class to the __PagerTemplate__ property of the desired __GridTableView__.



````C#
	    protected void Page_Init(object sender, EventArgs e)
	    {
	        RadGrid4.MasterTableView.PagerTemplate = new MyPagerTemplate();
	    }
````
````VB.NET
	    Protected Sub Page_Init(sender As Object, e As EventArgs)
	        RadGrid4.MasterTableView.PagerTemplate = New MyPagerTemplate()
	    End Sub
	#End Region
	
	#Region "setting-pager-template_1"
	    Protected Sub RadGrid2_ItemCreated(sender As Object, e As Telerik.Web.UI.GridItemEventArgs)
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim pagerItem As GridPagerItem = TryCast(e.Item, GridPagerItem)
	            Dim lnkButton As LinkButton = TryCast(pagerItem.FindControl("LinkButton1"), LinkButton)
	            lnkButton.CommandName = "Page"
	            lnkButton.CommandArgument = "Prev"
	            lnkButton.Text = "Previous page"
	            lnkButton = TryCast(pagerItem.FindControl("LinkButton2"), LinkButton)
	            lnkButton.CommandName = "Page"
	            lnkButton.CommandArgument = "Next"
	            lnkButton.Text = "Next page"
	        End If
	    End Sub
	
	#End Region
	
	#Region "setting-pager-template_2"
	    Protected Sub RadGrid3_ItemCreated(sender As Object, e As GridItemEventArgs)
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim pagerItem As GridPagerItem = TryCast(e.Item, GridPagerItem)
	            If TypeOf pagerItem.NamingContainer Is GridTHead Then
	                pagerItem.FindControl("btnPrev").Visible = False
	                pagerItem.FindControl("btnNext").Visible = False
	            ElseIf TypeOf pagerItem.NamingContainer Is GridTFoot Then
	                pagerItem.FindControl("btnFirst").Visible = False
	                pagerItem.FindControl("btnLast").Visible = False
	            End If
	        End If
	    End Sub
	#End Region
	
	#Region "setting-pager-template_3"
	    Private Class MyPagerTemplate
	        Implements ITemplate
	        Protected prevButton As LinkButton
	        Protected nextButton As LinkButton
	        Public Sub New()
	        End Sub
	        Public Sub InstantiateIn(container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
	            prevButton = New LinkButton()
	            prevButton.ID = "prevButton"
	            prevButton.Text = "Previous page"
	            prevButton.CommandName = "Page"
	            prevButton.CommandArgument = "Prev"
	            nextButton = New LinkButton()
	            nextButton.ID = "nextButton"
	            nextButton.Text = "Next page"
	            nextButton.CommandName = "Page"
	            nextButton.CommandArgument = "Next"
	            container.Controls.Add(prevButton)
	            container.Controls.Add(New LiteralControl("      "))
	            container.Controls.Add(nextButton)
	        End Sub
	    End Class
	#End Region
	End Class




For detailed information about how to create templates programmatically, see the following __MSDN__ article:

[http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dv_vstechart/html/vbtchcreatingwebservercontroltemplatesprogrammatically.asp](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dv_vstechart/html/vbtchcreatingwebservercontroltemplatesprogrammatically.asp)
