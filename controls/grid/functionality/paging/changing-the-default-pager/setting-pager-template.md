---
title: Setting Pager Template
page_title: Setting Pager Template | RadGrid for ASP.NET AJAX Documentation
description: Setting Pager Template
slug: grid/functionality/paging/changing-the-default-pager/setting-pager-template
tags: setting,pager,template
published: True
position: 0
---

# Setting Pager Template



You can use a template to set the appearance and features of the [Pager item]({%slug grid/functionality/paging/pager-item%}).

To create a pager template,

1. Choose **Edit Templates** from the **RadGrid** [ Smart Tag]({%slug grid/design-time/smarttag%}).

2. From the drop-down list of possible templates to edit, select the "PagerTemplate" for the **MasterTableView** or detail **GridTableView** of interest.

3. On the Template Design surface, drag and drop any controls from the toolbox, or add any HTML elements you want.

4. When you are finished, click **End Template Editing** from the Smart Tag.

## Binding controls inside a PagerTemplate

All command buttons in the template can take advantage of the [command API]({%slug grid/control-lifecycle/command-reference-%}). For example a button with **CommandName** "Page" and **CommandArgument** of "Last" will force **RadGrid** to go to the last page when clicked, with no additional coding on your part. Here is a list of Pager-related commands:


|  **CommandName**  |  **CommandArgument**  |  **Description**  |
| ------ | ------ | ------ |
|Page|"First"|Goes to the first page.|
|Page|"Last"|Goes to the last page.|
|Page|"Next"|Goes to the next page.|
|Page|"Prev"|Goes to the previous page.|
|Page|An integer (e.g. "5")|Goes to the specified page.|

In addition, you can use declarative binding expressions in template controls, setting control properties based on the properties of the **PagerItem** instance. These include **Paging.PageCount**, **Paging.PageSize**, and **OwnerTableView.CurrentPageIndex**.

![Pager Template](images/grd_PagerTemplate.png)

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Width="97%" AllowPaging="true" PageSize="10"
	DataSourceID="SqlDataSource1" OnItemCommand="RadGrid1_ItemCommand">
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
					<td>
						<asp:Label Text="Page Size:" AssociatedControlID="pageSizeDropDown" runat="server" />
						<asp:DropDownList runat="server" ID="pageSizeDropDown" OnSelectedIndexChanged="pageSizeDropDown_SelectedIndexChanged" AutoPostBack="true" SelectedValue='<%# Container.OwnerTableView.PageSize %>' CausesValidation="false">
							<asp:ListItem Text="1" Value="1" />
							<asp:ListItem Text="2" Value="2" />
							<asp:ListItem Text="3" Value="3" />
							<asp:ListItem Text="4" Value="4" />
							<asp:ListItem Text="5" Value="5" />
							<asp:ListItem Text="10" Value="10" />
						</asp:DropDownList>
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
	SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````

````C#
protected void pageSizeDropDown_SelectedIndexChanged(object sender, EventArgs e)
{
	RadGrid1.PageSize = int.Parse((sender as DropDownList).SelectedValue);
	RadGrid1.Rebind();
}

protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
	if (e.CommandName == "CustomChangePage")
	{
		TextBox tb = e.Item.FindControl("tbPageNumber") as TextBox;
		int desiredPageNumber = int.Parse(tb.Text);
		RadGrid grid = sender as RadGrid;
		grid.CurrentPageIndex = desiredPageNumber - 1; //pages in the grid are zero-based, but humans count from 1
		grid.Rebind();
	}
}
````
````VB
Protected Sub pageSizeDropDown_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
    RadGrid1.PageSize = Integer.Parse((TryCast(sender, DropDownList)).SelectedValue)
    RadGrid1.Rebind()
End Sub

Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = "CustomChangePage" Then
        Dim tb As TextBox = TryCast(e.Item.FindControl("tbPageNumber"), TextBox)
        Dim desiredPageNumber As Integer = Integer.Parse(tb.Text)
        Dim grid As RadGrid = TryCast(sender, RadGrid)
        grid.CurrentPageIndex = desiredPageNumber - 1 'pages in the grid are zero-based, but humans count from 1
        grid.Rebind()
    End If
End Sub
````



## Setting preferences for controls inside the PagerTemplate at runtime

There are cases when you may want to access the controls inside your **PagerTemplate** from the code-behind and dynamically change their preferences. Here are the steps you can perform to reference controls inside the **PagerTemplate** programmatically:

1. Add a handler for the grid's **ItemCreated** event.

2. In the **ItemCreated** event handler, check whether the currently bound item is **GridPagerItem**.

3. Locate the desired control using the **FindControl** method of the command item.

4. Change the properties of the control instance as desired.

In the example below, The **ItemCreated** event handler is used to change the **Text, CommandName** and **CommandArgument** properties for **LinkButton** controls inside the **PagerTemplate** object:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid2" runat="server" Width="97%" AllowPaging="true" PageSize="10"
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
````VB
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
````



## Displaying different controls in a PagerTemplate based on position

When the **PagerStyle.Position** property is set to "TopAndBottom", your page appears both above and below the records in the table view. You may want to display different controls depending on whether the pager is above or below the data items. You can do this by setting the visibility of controls in the **ItemCreated** event handler. To determine whether the pager item is displayed in the header or footer of the grid, check the **NamingContainer** for the **GridPagerItem** object (it will be **GridTHead** for the header and **GridTFoot** for the footer).

The following example illustrates this technique:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid3" runat="server" DataSourceID="SqlDataSource3" Width="97%"
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
````VB
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
````



## Defining PagerTemplate programmatically

To assign the **PagerTemplate** for a grid in the code-behind, you need to design a custom class that implements the **ITemplate** interface This class holds the controls for the template:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid4" runat="server" DataSourceID="SqlDataSource4" Width="97%"
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
````VB
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
````



In the **Page_Init** event handler, you can assign an instance of your template class to the **PagerTemplate** property of the desired **GridTableView**.



````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid4.MasterTableView.PagerTemplate = new MyPagerTemplate();
}
````
````VB
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
````



For detailed information about how to create templates programmatically, see the following **MSDN** article:

[https://msdn.microsoft.com/en-us/library/aa289501%28v=vs.71%29.aspx](https://msdn.microsoft.com/en-us/library/aa289501%28v=vs.71%29.aspx)
