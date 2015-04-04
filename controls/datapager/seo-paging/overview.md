---
title: SEO paging Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: datapager/seo-paging/overview
tags: overview
published: True
position: 0
---

# SEO paging Overview



## 

SEO paging of RadDataPager gets better results on search engines. In order to use SEO paging of the RadDataPager control you need to set the __AllowSEOPaging__ property to __True__. When it is False (its default value), the RadDataPager does not use SEO paging.

In addition, you can specify the query page key for the grid that is used as part of the page query by setting the __SEOPagingQueryPageKey__ property. This is useful when the data pager resides in several containers and its id becomes too long and not very readable. Using __SEOPagingQueryPageKey__ property you get much more search engine optimized links to the other pages.

````ASPNET
	    <telerik:RadListView runat="server" ID="RadListView1" DataSourceID="SqlDataSource1"
	        DataKeyNames="CustomerID" AllowPaging="true" PageSize="7" ItemPlaceholderID="itemPlaceholder">
	        <LayoutTemplate>
	            <table style="width: 870px; background-color: #D9DFDF;">
	                <tr>
	                    <th id="Th1" runat="server">
	                        CustomerID
	                    </th>
	                    <th id="Th2" runat="server">
	                        CompanyName
	                    </th>
	                    <th id="Th3" runat="server">
	                        ContactName
	                    </th>
	                    <th id="Th4" runat="server">
	                        ContactTitle
	                    </th>
	                </tr>
	                <tr runat="server" id="itemPlaceholder" />
	            </table>
	            <fieldset style="text-align: center; background-color: #D9DFDF; width:850px">
	                <telerik:RadDataPager ID="RadDataPager1" runat="server" SEOPagingQueryPageKey="CurrentPageKey"
	                    PagedControlID="RadListView1" AllowSEOPaging="true" PageSize="7">
	                    <Fields>
	                        <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
	                        <telerik:RadDataPagerButtonField FieldType="Numeric" />
	                        <telerik:RadDataPagerButtonField FieldType="NextLast" />
	                        <telerik:RadDataPagerTemplatePageField>
	                            <PagerTemplate>
	                                <div style="float: right">
	                                    <b>Items
	                                        <asp:Label runat="server" ID="CurrentPageLabel" Text="<%# Container.Owner.StartRowIndex + 1 %>" />
	                                        to
	                                        <asp:Label runat="server" ID="TotalPagesLabel" Text="<%# Container.Owner.StartRowIndex + Container.Owner.PageSize %>" />
	                                        of
	                                        <asp:Label runat="server" ID="TotalItemsLabel" Text="<%# Container.Owner.TotalRowCount %>" />
	                                        <br />
	                                    </b>
	                                </div>
	                            </PagerTemplate>
	                        </telerik:RadDataPagerTemplatePageField>
	                    </Fields>
	                </telerik:RadDataPager>
	            </fieldset>
	        </LayoutTemplate>
	        <EmptyDataTemplate>
	            <legend>Customers</legend>No records for customers are available at this time.
	        </EmptyDataTemplate>
	        <AlternatingItemTemplate>
	            <tr id="Tr2" runat="server" bgcolor="#ccffff">
	                <td>
	                    <asp:Label ID="CustomerID" runat="Server" Text='<%#Eval("CustomerID") %>' />
	                </td>
	                <td valign="top">
	                    <asp:Label ID="CompanyName" runat="Server" Text='<%#Eval("CompanyName") %>' />
	                </td>
	                <td valign="top">
	                    <asp:Label ID="ContactName" runat="Server" Text='<%#Eval("ContactName") %>' />
	                </td>
	                <td valign="top">
	                    <asp:Label ID="ContactTitle" runat="Server" Text='<%#Eval("ContactTitle") %>' />
	                </td>
	            </tr>
	        </AlternatingItemTemplate>
	        <ItemTemplate>
	            <tr id="Tr2" runat="server" bgcolor="#99ccff">
	                <td>
	                    <asp:Label ID="CustomerID" runat="Server" Text='<%#Eval("CustomerID") %>' />
	                </td>
	                <td valign="top">
	                    <asp:Label ID="CompanyName" runat="Server" Text='<%#Eval("CompanyName") %>' />
	                </td>
	                <td valign="top">
	                    <asp:Label ID="ContactName" runat="Server" Text='<%#Eval("ContactName") %>' />
	                </td>
	                <td valign="top">
	                    <asp:Label ID="ContactTitle" runat="Server" Text='<%#Eval("ContactTitle") %>' />
	                </td>
	            </tr>
	        </ItemTemplate>
	    </telerik:RadListView>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        ProviderName="System.Data.SqlClient" 
	        SelectCommand="SELECT [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address] FROM [Customers]" />
````



In case you need to set the paging settings programmatically, you have to do it on an early stage from the page life cycle.Hence, you can use the __Page_PreInit__ or the __Init__ event handler of the pager:



````C#
	    protected void RadDataPager1_Init(object sender, EventArgs e)
	    {
	        RadDataPager1.PageSize = 3;
	        RadDataPager1.AllowSEOPaging = true;
	    }
````
````VB.NET
	    Protected Sub RadDataPager1_Init(sender As Object, e As EventArgs) Handles RadDataPager1.Init
	        RadDataPager1.PageSize = 3
	        RadDataPager1.AllowSEOPaging = True
	    End Sub
````


## Page Size Support

Until Q2 2013, the __RadDataPager__ SEO functionality has been saving the solely current page index in the URL.Although on a first glance this may seem enough, it is not. In a real life scenario the page size can be modified by theusers and this will render the SEO links invalid. This is why from Q2 2013, following the RadGrid behavior, we decided tointroduce support for page size in the SEO URL links. No breaking changes are made thus the existing applications that use this functionality will continue to behave as expected.

A typical SEO paging URL link looks like this:

>tip http://demo/WS1/DataPagerSEO.aspx?DataPager1=3_5
>


The syntax is __DataPagerID=PageIndex_PageSize__. When no page size value is provided, the control assumes that the page size is the default value of 10.This is to retain the compatibility with the previous versions of the control.
