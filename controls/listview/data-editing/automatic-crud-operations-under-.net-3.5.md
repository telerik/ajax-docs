---
title: Automatic CRUD Operations under .NET 3.5
page_title: Automatic CRUD Operations under .NET 3.5 - RadListView
description: Check our Web Forms article about Automatic CRUD Operations under .NET 3.5.
slug: listview/data-editing/automatic-crud-operations-under-.net-3.5
tags: automatic,crud,operations,under,.net,3.5
published: True
position: 1
---

# Automatic CRUD Operations under .NET 3.5



**RadListView** provides an API for inserting new data, updating existing data and deleting data from the specified data source. You can use these features while writing very little code.

**Controlling the automatic data source operations under .NET35**

RadListView can be bound to all ASP.NET 3.5 DataSource control types:

* LinqDataSource

* EntityDataSource

Once it is bound to a **DataSource** control that supports Insert, Update, and Delete operations, **RadListView** can take an advantage of the data source capabilities to perform the required operations with no code except error handling required. Note that the automatic data source operations only work when binding the grid to a declarative data source using the **DataSourceID** property of the listview. You must configure the data source so that it supports the automatic operations and make sure its **EnableInsert**, **EnableUpdate** and **EnableDelete** properties are set to **True**.

You also need to set the **DataKeyNames** property of the RadListView control so that the insert, update, and delete operations perform as expected.

##  

LinqDataSource:

````C#
<telerik:RadListView ID="RadListView1" DataSourceID="LinqDataSource1" runat="server"
    ItemPlaceholderID="ProductItemContainer" DataKeyNames="ProductID" AllowPaging="true">
    <LayoutTemplate>
        <fieldset style="width: 750px;" id="FieldSet1">
            <legend>Products</legend>
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <asp:Button ID="Button1" runat="server" Text="Add new product" CommandName="InitInsert"
                            Visible="<%#Container.InsertItemPosition == RadListViewInsertItemPosition.None %>"
                            CausesValidation="false" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Panel ID="ProductItemContainer" runat="server" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" PagedControlID="RadListView1"
                            PageSize="6">
                            <Fields>
                                <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
                                <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                <telerik:RadDataPagerButtonField FieldType="NextLast" />
                            </Fields>
                        </telerik:RadDataPager>
                    </td>
                </tr>
            </table>
        </fieldset>
    </LayoutTemplate>
    <ItemTemplate>
        <fieldset style="float: left; width: 223px; height: 160px;">
            <table cellpadding="2" cellspacing="0" style="height: 100%;">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("ProductName") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("QuantityPerUnit") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("UnitsInStock") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Discontinued:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Eval("Discontinued") %>'
                            Enabled="false" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Button ID="Button1" runat="server" CommandName="Edit" Text="Edit" CausesValidation="false" />&nbsp;
                        <asp:Button ID="Button2" runat="server" CommandName="Delete" Text="Delete" />
                    </td>
                </tr>
            </table>
        </fieldset>
    </ItemTemplate>
    <EditItemTemplate>
        <fieldset style="float: left; width: 223px; height: 160px;">
            <table cellpadding="0" cellspacing="2" style="height: 100%">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("ProductName") %>' Width="120px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                            ControlToValidate="TextBox1"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("QuantityPerUnit") %>' Width="120px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox3" runat="server" Text='<%# Bind("UnitPrice") %>' Width="65px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox4" runat="server" Text='<%# Bind("UnitsInStock") %>' Width="65px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Discontinued:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Bind("Discontinued") %>' />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Button ID="Button1" runat="server" CommandName="Update" Text="Update" />
                        <asp:Button ID="Button2" runat="server" CommandName="Cancel" Text="Cancel" CausesValidation="false" />
                    </td>
                </tr>
            </table>
        </fieldset>
    </EditItemTemplate>
    <InsertItemTemplate>
        <fieldset style="float: left; width: 223px; height: 160px;">
            <table cellpadding="0" cellspacing="2" style="height: 100%">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox1" runat="server" Width="120px" Text='<%# Bind("ProductName") %>'></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                            ControlToValidate="TextBox1"></asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox2" runat="server" Width="120px" Text='<%# Bind("QuantityPerUnit") %>'></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox3" runat="server" Width="65px" Text='<%# Bind("UnitPrice") %>'></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox4" runat="server" Width="65px" Text='<%# Bind("UnitsInStock") %>'></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Discontinued:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Bind("Discontinued") %>' />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Button ID="Button1" runat="server" CommandName="PerformInsert" Text="Insert" />
                        <asp:Button ID="Button2" runat="server" CommandName="Cancel" Text="Cancel" CausesValidation="false" />
                    </td>
                </tr>
            </table>
        </fieldset>
    </InsertItemTemplate>
</telerik:RadListView>
<asp:LinqDataSource ID="LinqDataSource1" runat="server" ContextTypeName="LinqToSql.NorthwindDataContext"
    TableName="Products" EnableUpdate="true" EnableInsert="true" EnableDelete="true" />
````



##  

EntityDataSource:

````C#
<telerik:RadListView ID="RadListView2" runat="server" DataSourceID="EntityDataSource1"
    ItemPlaceholderID="ProductsHolder" AllowPaging="True" DataKeyNames="ProductID">
    <LayoutTemplate>
        <table width="750px" id="FieldSet2">
            <thead>
                <tr>
                    <td colspan="7">
                        <asp:Button ID="Button1" runat="server" CommandName="InitInsert" Visible="<%#Container.InsertItemPosition == RadListViewInsertItemPosition.None %>"
                            CausesValidation="false" Text="Add new product" />
                    </td>
                </tr>
                <tr style="font-weight: bold">
                    <td>
                        Product Name
                    </td>
                    <td>
                        Quantity
                    </td>
                    <td>
                        Price
                    </td>
                    <td>
                        Units
                    </td>
                    <td>
                        Discontinued
                    </td>
                    <td>
                        &nbsp;
                    </td>
                    <td>
                        &nbsp;
                    </td>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colspan="7">
                        <telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" PagedControlID="RadListView2"
                            PageSize="5">
                            <Fields>
                                <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
                                <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                <telerik:RadDataPagerButtonField FieldType="NextLast" />
                            </Fields>
                        </telerik:RadDataPager>
                    </td>
                </tr>
            </tfoot>
            <tbody>
                <tr runat="server" id="ProductsHolder">
                </tr>
            </tbody>
        </table>
    </LayoutTemplate>
    <ItemTemplate>
        <tr>
            <td>
                <%# Eval("ProductName") %>
            </td>
            <td>
                <%# Eval("QuantityPerUnit") %>
            </td>
            <td>
                <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
            </td>
            <td>
                <%# Eval("UnitsInStock") %>
            </td>
            <td>
                <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Eval("Discontinued") %>'
                    Enabled="false" />
            </td>
            <td>
                <asp:Button ID="LinkButton1" runat="server" CommandName="Edit" Text="Edit" CausesValidation="false" />
            </td>
            <td>
                <asp:Button ID="LinkButton2" runat="server" CommandName="Delete" OnClientClick="if(!confirm('Are you sure you want to delete this item?')) return false;"
                    Text="Delete" />
            </td>
        </tr>
    </ItemTemplate>
    <EditItemTemplate>
        <tr>
            <td>
                <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("ProductName") %>' Width="160px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                    ControlToValidate="TextBox1"></asp:RequiredFieldValidator>
            </td>
            <td>
                <asp:TextBox ID="TextBox5" runat="server" Text='<%# Bind("QuantityPerUnit") %>'></asp:TextBox>
            </td>
            <td>
                <asp:TextBox ID="TextBox6" runat="server" Text='<%# Bind("UnitPrice") %>' Width="65px"></asp:TextBox>
            </td>
            <td>
                <asp:TextBox ID="TextBox7" runat="server" Text='<%# Bind("UnitsInStock") %>' Width="50px"></asp:TextBox>
            </td>
            <td>
                <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Bind("Discontinued") %>' />
            </td>
            <td colspan="2">
                <asp:Button ID="Button1" runat="server" CommandName="Update" Text="Update" />
                <asp:Button ID="Button2" runat="server" CommandName="Cancel" Text="Cancel" CausesValidation="false" />
            </td>
        </tr>
    </EditItemTemplate>
    <InsertItemTemplate>
        <tr>
            <td>
                <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("ProductName") %>' Width="160px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                    ControlToValidate="TextBox1"></asp:RequiredFieldValidator>
            </td>
            <td>
                <asp:TextBox ID="TextBox5" runat="server" Text='<%# Bind("QuantityPerUnit") %>'></asp:TextBox>
            </td>
            <td>
                <asp:TextBox ID="TextBox6" runat="server" Text='<%# Bind("UnitPrice") %>' Width="65px"></asp:TextBox>
            </td>
            <td>
                <asp:TextBox ID="TextBox7" runat="server" Text='<%# Bind("UnitsInStock") %>' Width="50px"></asp:TextBox>
            </td>
            <td>
                <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Bind("Discontinued") %>' />
            </td>
            <td colspan="2">
                <asp:Button ID="Button1" runat="server" CommandName="PerformInsert" Text="Insert" />
                <asp:Button ID="Button2" runat="server" CommandName="Cancel" Text="Cancel" CausesValidation="false" />
            </td>
        </tr>
    </InsertItemTemplate>
</telerik:RadListView>
<asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities"
    DefaultContainerName="NorthwindEntities" EntitySetName="Products" EnableDelete="True"
    EnableInsert="True" EnableUpdate="True" AutoGenerateWhereClause="True" />
````



## Additional resources

* **LinqDataSource:** [ https://msdn2.microsoft.com/en-us/library/bb547113.aspx ](https://msdn2.microsoft.com/en-us/library/bb547113.aspx)

* **EntityDataSource:** [https://msdn.microsoft.com/en-us/library/cc488502.aspx](https://msdn.microsoft.com/en-us/library/cc488502.aspx)
