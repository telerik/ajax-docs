---
title: Collecting Data in a New Window
page_title: Collecting Data in a New Window | UI for ASP.NET AJAX Documentation
description: Collecting Data in a New Window
slug: grid/data-editing/collecting-data-in-a-new-window
tags: collecting,data,in,a,new,window
published: True
position: 9
---

# Collecting Data in a New Window



## 

There are various cases in which you may want to get the content of the cells in a selected grid row (clicking a hyperlink in that row), pass this content in a query and open the results in a new window.Such scenario is easily handled by Telerik RadGrid. Here is a sample implementation technique:

1. We use __GridHyperLink__ column with __Target__ property set to___blank__ to open a new window on user click;

1. Hooking the __ItemDataBound__ event of the grid we store the values of the cells for the clicked row in the __NavigateUrl__ property of the __Hyperlink__ in the __GridHyperLinkColumn__ (passing them as __QueryString__ arguments);

1. In the page to which we navigate (__Resources.aspx__) we have five labels. Their text is set on __PageLoad__ and __Not Page.IsPostBack__ to display the details for the clicked row;

1. The clicked row will be selected as we enabled client side selection (setting __ClientSettings -> Selecting -> AllowRowSelect = True__).

__Default__ file (ASPX and code-behind)

>tabbedCode

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" runat="server">
	    <SelectedItemStyle BackColor="Aqua" />
	    <MasterTableView AutoGenerateColumns="True">
	      <Columns>
	        <telerik:GridHyperLinkColumn HeaderText="Select row" Target="_blank" Text="Display details in new window"
	          UniqueName="HyperLinkColumn">
	        </telerik:GridHyperLinkColumn>
	      </Columns>
	    </MasterTableView>
	    <ClientSettings>
	      <Selecting AllowRowSelect="True" />
	    </ClientSettings>
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	     SelectCommand="SELECT [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address], [PostalCode] FROM [Customers]">
	  </asp:SqlDataSource>
````
````VB.NET
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        If (TypeOf e.Item Is GridDataItem) Then
	            Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
	
	            Dim link As HyperLink = CType(dataItem("HyperlinkColumn").Controls(0), HyperLink)
	            link.NavigateUrl = "Resources.aspx?CompanyName=" & dataItem("CompanyName").Text & "&ContactName=" & dataItem("ContactName").Text &
	            "&ContactTitle=" & dataItem("ContactTitle").Text & "&Address=" & dataItem("Address").Text & "&PostalCode=" & dataItem("PostalCode").Text
	        End If
	    End Sub
````
````C#
	    protected void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridDataItem)
	        {
	            GridDataItem dataItem = (GridDataItem)e.Item;
	
	            HyperLink link = (HyperLink)dataItem["HyperlinkColumn"].Controls[0];
	            link.NavigateUrl = "Resources.aspx?CompanyName=" + dataItem["CompanyName"].Text + "&ContactName=" + dataItem["ContactName"].Text
	            + "&ContactTitle=" + dataItem["ContactTitle"].Text + "&Address=" + dataItem["Address"].Text + "&PostalCode=" + dataItem["PostalCode"].Text;
	        }
	    }
````
>end

__Resources__ file (ASPX and code-behind)

>tabbedCode

````ASPNET
	  <div>
	    <b>Company name:</b>
	    <br />
	    <asp:Label ID="lblCompanyName" runat="server" Text=""></asp:Label>
	    <br />
	    <b>Contact name:</b>
	    <br />
	    <asp:Label ID="lblContactName" runat="server" Text=""></asp:Label>
	    <br />
	    <b>Contact title:</b>
	    <br />
	    <asp:Label ID="lblContactTitle" runat="server" Text=""></asp:Label>
	    <br />
	    <b>Address:</b>
	    <br />
	    <asp:Label ID="lblAddress" runat="server" Text=""></asp:Label>
	    <br />
	    <b>Postal code:</b>
	    <br />
	    <asp:Label ID="lblPostalCode" runat="server" Text=""></asp:Label>
	  </div>
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	        If (Not IsPostBack) Then
	            lblCompanyName.Text = Request.QueryString("CompanyName")
	            lblContactName.Text = Request.QueryString("ContactName")
	            lblContactTitle.Text = Request.QueryString("ContactTitle")
	            lblAddress.Text = Request.QueryString("Address")
	            lblPostalCode.Text = Request.QueryString("PostalCode")
	        End If
	    End Sub
````
````C#
	    protected void Page_Load(object sender, System.EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            lblCompanyName.Text = Request.QueryString["CompanyName"];
	            lblContactName.Text = Request.QueryString["ContactName"];
	            lblContactTitle.Text = Request.QueryString["ContactTitle"];
	            lblAddress.Text = Request.QueryString["Address"];
	            lblPostalCode.Text = Request.QueryString["PostalCode"];
	        }
	    }
````
>end
