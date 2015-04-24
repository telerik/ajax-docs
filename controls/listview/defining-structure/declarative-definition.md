---
title: Declarative Definition
page_title: Declarative Definition | RadListView for ASP.NET AJAX Documentation
description: Declarative Definition
slug: listview/defining-structure/declarative-definition
tags: declarative,definition
published: True
position: 0
---

# Declarative Definition



## 

The RadListView control enables you to bind to data items that are returned from a data source and display them. The structure of the control is very flexible, and allows the user to determine the way the control will be rendered, both in standard and edit mode.

To help with determining the layout of the control, there are a number of templates exposed. These are:

* **ItemTemplate**- determines the layout of the items in the control

* **AlternatingItemTemplate**– determines the layout for the alternating items in the control

* **EmptyDataTemplate** – determines the layout of the contents which will be rendered by the control in case no records are returned from the underlying data source

* **ItemSeparatorTemplate**– determines the contents which will be rendered between individual items in the *ListView*

* **LayoutTemplate**- Defines the basic template that governsthe main layout of the control. It contains a placeholder object, such as a *table row *(*tr*), *div*, or *span *element. This element will be replaced with the content that is defined in the *ItemTemplate*/*AlternatingItemTemplate*. It might also contain a *DataPager *object.

* **EditItemTemplate**– Defines the structure of the *edit form*, which will be rendered when the control enters *edit *mode.

A typical declaration for the *ListView* control will look like this:

````ASPNET
	    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
	    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
	    <telerik:RadAjaxPanel runat="server" ID="Panel1" LoadingPanelID="RadAjaxLoadingPanel1">
	        <fieldset>
	            <legend>RadListView </legend>
	            <telerik:RadListView runat="server" ID="TelerikListView1" DataSourceID="SqlDataSource1"
	                DataKeyNames="CustomerID" AllowPaging="true" PageSize="7" ItemPlaceholderID="itemPlaceholder">
	                <LayoutTemplate>
	                    <table style="width: 730px; background-color: #D9DFDF;">
	                        <tr>
	                            <th>
	                            </th>
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
	                    <fieldset style="text-align: center; background-color: #D9DFDF;">
	                        <telerik:RadDataPager ID="RadDataPager1" runat="server" PagedControlID="TelerikListView1"
	                            PageSize="7">
	                            <Fields>
	                                <telerik:RadDataPagerButtonField FieldType="FirstPrev" ButtonType="PushButton" />
	                                <telerik:RadDataPagerButtonField FieldType="Numeric" ButtonType="PushButton" />
	                                <telerik:RadDataPagerButtonField FieldType="NextLast" ButtonType="PushButton" />
	                            </Fields>
	                        </telerik:RadDataPager>
	                    </fieldset>
	                </LayoutTemplate>
	                <EmptyDataTemplate>
	                    <legend>Customers</legend>No records for customers are available at this time available.
	                </EmptyDataTemplate>
	                <EditItemTemplate>
	                    <tr id="Tr2" runat="server" bgcolor="#45474A">
	                        <td style="width: 100px;">
	                            <asp:ImageButton runat="server" ID="UpdateButton" CommandName="Update" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Update.gif" />
	                            <asp:ImageButton ID="CancelButton" runat="Server" Text="Cancel" CommandName="Cancel"
	                                ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Cancel.gif" />
	                        </td>
	                        <td>
	                            <asp:TextBox ID="CustomerID" runat="Server" Text='<%#Eval("CustomerID") %>' Width="70px" />
	                        </td>
	                        <td valign="top">
	                            <asp:TextBox ID="CompanyName" runat="Server" Text='<%#Eval("CompanyName") %>' Width="210px" />
	                        </td>
	                        <td valign="top">
	                            <asp:TextBox ID="ContactName" runat="Server" Text='<%#Eval("ContactName") %>' Width="110px" />
	                        </td>
	                        <td valign="top">
	                            <asp:TextBox ID="ContactTitle" runat="Server" Text='<%#Eval("ContactTitle") %>' Width="120px" />
	                        </td>
	                    </tr>
	                </EditItemTemplate>
	                <AlternatingItemTemplate>
	                    <tr id="Tr2" runat="server" bgcolor="#ccffff">
	                        <td>
	                            <asp:ImageButton runat="server" ID="EditButton" CommandName="Edit" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Edit.gif" />
	                        </td>
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
	                            <asp:ImageButton runat="server" ID="EditButton" CommandName="Edit" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Edit.gif" />
	                        </td>
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
	        </fieldset>
	    </telerik:RadAjaxPanel>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        ProviderName="System.Data.SqlClient" SelectCommand="SELECT [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address] FROM [Customers]" />
````


