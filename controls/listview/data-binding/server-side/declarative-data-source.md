---
title: Declarative Data Source
page_title: Declarative Data Source | RadListView for ASP.NET AJAX Documentation
description: Declarative Data Source
slug: listview/data-binding/server-side/declarative-data-source
tags: declarative,data,source
published: True
position: 1
---

# Declarative Data Source



RadListView can be bound to the following ASP 2.x DataSource control types:

* **SqlDataSource**

* **ObjectDataSource**

* **XmlDataSource**

* **AccessDataSource**

All you need to do is set the DataSourceID property of the ListView to the ID of the Data Source control. Then you can use ASP.NET binding expressions (Eval or Bind) for the fields that will be visualized in the control.

Refer to the [respective online demo](http://demos.telerik.com/aspnet-ajax/listview/examples/databinding/net2datasourcecontrols/defaultcs.aspx) of the product for details and the code snippets in the next paragraph:



````C#
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<telerik:RadFormDecorator RenderMode="Lightweight" ID="RadFormDecorator1" runat="server" />
<h3>
    SqlDataSource</h3>
<telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" runat="server"
    ItemPlaceholderID="ProductItemContainer" DataKeyNames="CategoryID">
    <LayoutTemplate>
        <fieldset>
            <legend>Products</legend>
            <asp:PlaceHolder ID="ProductItemContainer" runat="server" />
        </fieldset>
    </LayoutTemplate>
    <ItemTemplate>
        <fieldset style="float: left; width: 200px;">
            <legend>Category name:
                <%# Eval("CategoryName") %></legend>
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <td style="width: 75%">
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <%# Eval("Description")%>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td align="right" style="width: 25%">
                        <telerik:RadBinaryImage ID="RadBinaryImage1" runat="server" AlternateText="Category Photo"
                            Style="margin-left: 10px" ToolTip="Category Photo" Width="90px" Height="110px"
                            ResizeMode="Fit" DataValue='<%# Eval("Picture") %>' />
                    </td>
                </tr>
            </table>
        </fieldset>
    </ItemTemplate>
</telerik:RadListView>
<table cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <h3>
                XmlDataSource</h3>
            <telerik:RadListView ID="RadListView2" runat="server" DataSourceID="XmlDataSource1"
                ItemPlaceholderID="CityItemsHolder">
                <LayoutTemplate>
                    <fieldset>
                        <legend>Cities</legend>
                        <asp:Panel ID="CityItemsHolder" runat="server" />
                    </fieldset>
                </LayoutTemplate>
                <ItemTemplate>
                    <span>
                        <%#Eval("Text") %></span>
                </ItemTemplate>
                <ItemSeparatorTemplate>
                    <span style="color: Olive; font-weight: bold;">&nbsp;&nbsp;&nbsp;::&nbsp;&nbsp;&nbsp;</span>
                </ItemSeparatorTemplate>
            </telerik:RadListView>
        </td>
        <td>
            <h3>
                ObjectDataSource</h3>
            <telerik:RadListView ID="RadListView3" runat="server" DataSourceID="ObjectDataSource1"
                ItemPlaceholderID="ShippersHolder">
                <LayoutTemplate>
                    <fieldset style="width: 300px;">
                        <legend>Shippers</legend>
                        <asp:Panel ID="ShippersHolder" runat="server" />
                    </fieldset>
                </LayoutTemplate>
                <ItemTemplate>
                    <table width="100%">
                        <colgroup>
                            <col title="Shipper name" />
                            <col title="Phone" />
                        </colgroup>
                        <tr>
                            <td style="width: 50%">
                                <%# Eval("CompanyName") %>
                            </td>
                            <td style="width: 50%">
                                <%# Eval("Phone") %>
                            </td>
                        </tr>
                    </table>
                </ItemTemplate>
            </telerik:RadListView>
        </td>
    </tr>
</table>
<br />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT CategoryID, CategoryName, Description, Picture FROM Categories" />
<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" TypeName="ShippersDataSetTableAdapters.ShippersTableAdapter"
    SelectMethod="GetData" />
<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/ListView/Examples/DataBinding/NET2DataSourceControls/ListView.xml" />
````
````VB
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<telerik:RadFormDecorator RenderMode="Lightweight" ID="RadFormDecorator1" runat="server" />
<h3>
    SqlDataSource</h3>
<telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" runat="server"
    ItemPlaceholderID="ProductItemContainer" DataKeyNames="CategoryID">
    <LayoutTemplate>
        <fieldset>
            <legend>Products</legend>
            <asp:PlaceHolder ID="ProductItemContainer" runat="server" />
        </fieldset>
    </LayoutTemplate>
    <ItemTemplate>
        <fieldset style="float: left; width: 200px;">
            <legend>Category name:
                <%# Eval("CategoryName") %></legend>
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <td style="width: 75%">
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <%# Eval("Description")%>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td align="right" style="width: 25%">
                        <telerik:RadBinaryImage ID="RadBinaryImage1" runat="server" AlternateText="Category Photo"
                            Style="margin-left: 10px" ToolTip="Category Photo" Width="90px" Height="110px"
                            ResizeMode="Fit" DataValue='<%# Eval("Picture") %>' />
                    </td>
                </tr>
            </table>
        </fieldset>
    </ItemTemplate>
</telerik:RadListView>
<table cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <h3>
                XmlDataSource</h3>
            <telerik:RadListView ID="RadListView2" runat="server" DataSourceID="XmlDataSource1"
                ItemPlaceholderID="CityItemsHolder">
                <LayoutTemplate>
                    <fieldset>
                        <legend>Cities</legend>
                        <asp:Panel ID="CityItemsHolder" runat="server" />
                    </fieldset>
                </LayoutTemplate>
                <ItemTemplate>
                    <span>
                        <%#Eval("Text") %></span>
                </ItemTemplate>
                <ItemSeparatorTemplate>
                    <span style="color: Olive; font-weight: bold;">&nbsp;&nbsp;&nbsp;::&nbsp;&nbsp;&nbsp;</span>
                </ItemSeparatorTemplate>
            </telerik:RadListView>
        </td>
        <td>
            <h3>
                ObjectDataSource</h3>
            <telerik:RadListView ID="RadListView3" runat="server" DataSourceID="ObjectDataSource1"
                ItemPlaceholderID="ShippersHolder">
                <LayoutTemplate>
                    <fieldset style="width: 300px;">
                        <legend>Shippers</legend>
                        <asp:Panel ID="ShippersHolder" runat="server" />
                    </fieldset>
                </LayoutTemplate>
                <ItemTemplate>
                    <table width="100%">
                        <colgroup>
                            <col title="Shipper name" />
                            <col title="Phone" />
                        </colgroup>
                        <tr>
                            <td style="width: 50%">
                                <%# Eval("CompanyName") %>
                            </td>
                            <td style="width: 50%">
                                <%# Eval("Phone") %>
                            </td>
                        </tr>
                    </table>
                </ItemTemplate>
            </telerik:RadListView>
        </td>
    </tr>
</table>
<br />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT CategoryID, CategoryName, Description, Picture FROM Categories" />
<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" TypeName="ShippersDataSetTableAdapters.ShippersTableAdapter"
    SelectMethod="GetData" />
<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/ListView/Examples/DataBinding/NET2DataSourceControls/ListView.xml" />
````


## Additional resources

The following MSDN articles describe how to configure some of the more common ASP.NET 2.x **DataSource** controls:

* **SqlDataSource:**[http://msdn2.microsoft.com/en-us/library/dz12d98w(vs.80).aspx](http://msdn2.microsoft.com/en-us/library/dz12d98w(vs.80).aspx)

* **ObjectDataSource:**[http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)

* **XmlDataSource:**[http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.xmldatasource.aspx](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.xmldatasource.aspx)

* **AccessDataSource:**[http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.accessdatasource.aspx](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.accessdatasource.aspx)
