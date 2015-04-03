---
title: Use Querystring to Provide Arguments to RadWindow
page_title: Use Querystring to Provide Arguments to RadWindow | UI for ASP.NET AJAX Documentation
description: Use Querystring to Provide Arguments to RadWindow
slug: window/application-scenarios/use-querystring-to-provide-arguments-to-radwindow
tags: use,querystring,to,provide,arguments,to,radwindow
published: True
position: 1
---

# Use Querystring to Provide Arguments to RadWindow



## 

You can use the window URL to pass parameters that are read on the server-side to configure the controls inside the window. For example, a common application is to send the ID of a database row to extract or edit information from a database table (such as Users, Orders, Products).

The main page which calls up the __RadWindow__ dialog presents a grid with a link field in one column to bring up the __RadWindow__. When the user clicks the link, it calls openRadWindow, which constructs the URL with the arguments in the query string and calls __radopen__ to show the details window (MyDialog.aspx):

````ASPNET
	    <script type="text/javascript">
	        function OpenPositionedWindow(oButton, url, windowName)
	        {
	            var oWnd = window.radopen(url, windowName);
	        }
	        function openRadWindow(CustomerID)
	        {
	            var oWnd = radopen("MyDialog.aspx?CustomerID=" + CustomerID, "RadWindow1");
	            oWnd.center();
	        }
	
	    </script>
	    <asp:GridView ID="GridView1" AutoGenerateColumns="False" DataSourceID="DataSource1"
	        CellPadding="0" GridLines="None" CellSpacing="0" runat="server">
	        <Columns>
	            <asp:BoundField DataField="CompanyName" HeaderText="Company Name" />
	            <asp:BoundField DataField="Country" HeaderText="Country" />
	            <asp:TemplateField HeaderText="Details">
	                <ItemTemplate>
	                    <a href="#" onclick="openRadWindow('<%# DataBinder.Eval(Container.DataItem, "CustomerID") %>'); return false;">
	                        Details</a></ItemTemplate>
	            </asp:TemplateField>
	        </Columns>
	    </asp:GridView>
	    <asp:AccessDataSource ID="DataSource1" DataFile="~/App_Data/Nwind.mdb" runat="server"
	        SelectCommand="SELECT TOP 10 [CompanyName], [CustomerID],
	        [ContactName], [Country] FROM [Customers]"></asp:AccessDataSource>
	    <telerik:RadWindowManager ID="RadWindowManager1" Width="900px" Height="200px" runat="server">
	    </telerik:RadWindowManager>
````



The parameters that you send can be read from the Request object in the __Page_Load__ method of the page (__MyDialog.aspx__) being loaded in the window:

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (Request["CustomerID"] != null)
	        {
	            Page.Title = "Details for Customer ID: " + Request["CustomerID"];
	            DataSource1.SelectParameters["CustomerID"].DefaultValue = Request["CustomerID"];
	        }
	    }
````



````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	        If Request("CustomerID") <> Nothing Then
	            Page.Title = "Details for Customer ID: " + Request("CustomerID")
	            DataSource1.SelectParameters("CustomerID").DefaultValue = Request("CustomerID")
	        End If
	    End Sub
````


>end
