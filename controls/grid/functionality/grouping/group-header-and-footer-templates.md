---
title: Group Header and Footer Templates
page_title: Group Header and Footer Templates | RadGrid for ASP.NET AJAX Documentation
description: Group Header and Footer Templates
slug: grid/functionality/grouping/group-header-and-footer-templates
tags: group,header,and,footer,templates
published: True
position: 3
---

# Group Header and Footer Templates



From Q3 2011 RadGrid supports templates for the GridGroupHeader and GridGroupFooter items. This topic will introduce you to the main things that you should know when you decide to use them.

Each GridTableView object contains a **GroupHeaderTemplate** and **GroupFooterTemplate** properties for specifying a template that will show inside each group's header and footer rows. You can use them to provide a more customized look for the group totals display. Here follows a description of each template's specifics:

## Group header template

It is specified inside the GroupHeaderTemplate tag of each GridTableView. In order to bind controls inside it to the current group's value, you can use the **AggregatesValues** collection of the **GridGroupHeaderItem**. This collection has been exposed especially for this purpose - to simplify getting the values of a group or respectively the total result of a GroupByExpression's Aggregate. It is indexed by:

* the name of the field used for grouping in order to get the current group value.

* the field alias name when you want to access the total aggregate of the items in the current group.

Keep in mind that only the values for the current group are available in its context, in other words - you can get the them only for the field that you are currently grouping by. You can use this fact for the purpose of controlling the visibility of controls inside the templates based on the field that you are grouping by.

>note Note that when grouping by a **GridCalculatedColumn** 's values, you should access the totals using the field name with the string *"Result"* appended to it, e.g. if the column name is "TotalPrice", you should access AggregatesValues["TotalPriceResult"] in order to get the total.
>


## Group footer template

The template can be specified inside the **GridFooterTemplate** tag of each GridTableView. The footer exposes the total values for the current group and you can use the Eval() method to bind controls inside the template to these values, specifying the field name as an argument.

Same as when accessing header totals, when grouping by a **GridCalculatedColumn**'s values, you should access the totals using the field name with the string *"Result"* appended to it, e.g. if the column name is "TotalPrice", you should use Eval("TotalPriceResult") in order to get the total.

Below follows and example of group header and footer templates usage.



````C#
	    <telerik:RadGrid ID="RadGrid1" ShowGroupPanel="true" AutoGenerateColumns="false"
	        DataSourceID="SqlDataSource1" ShowFooter="True" runat="server" GridLines="None"
	        AllowPaging="true" PageSize="7" Skin="Office2007" OnPreRender="RadGrid1_PreRender"
	        GroupingSettings-RetainGroupFootersVisibility="true">
	        <MasterTableView ShowGroupFooter="true">
	            <GroupHeaderTemplate>
	                <!-- use the AggregatesValues collection to access the totals for each group header -->
	                <asp:Label runat="server" ID="Label1" Text='<%# "Number of units: "+ (((GridGroupHeaderItem)Container).AggregatesValues["UnitsInStock"]) %>'
	                    Visible='<%# ((((GridGroupHeaderItem)Container).AggregatesValues["UnitsInStock"]) != null)%>'>
	                </asp:Label>
	                <asp:Label runat="server" ID="Label2" Text='<%# "Number of items in group: "+ (((GridGroupHeaderItem)Container).AggregatesValues["AvailableUnits"]) %>'
	                    Visible='<%# ((((GridGroupHeaderItem)Container).AggregatesValues["AvailableUnits"]) != null)%>'>
	                </asp:Label>
	                <asp:Label runat="server" ID="Label3" Text='<%# "Product name: "+Eval("ProductName") %>'
	                    Visible='<%# ((((GridGroupHeaderItem)Container).AggregatesValues["ProductName"]) != null)%>'></asp:Label>
	                <asp:Label runat="server" ID="Label4" Text='<%# "Product price: "+ Eval("UnitPrice") %>'
	                    Visible='<%# ((((GridGroupHeaderItem)Container).AggregatesValues["UnitPrice"]) != null)%>'></asp:Label>
	                <asp:Label runat="server" ID="Label5" Text='<%# "Total price: "+Eval("TotalPriceResult") %>'
	                    Visible='<%# ((((GridGroupHeaderItem)Container).AggregatesValues["TotalPriceResult"]) != null)%>'>
	                </asp:Label>
	            </GroupHeaderTemplate>
	            <GroupFooterTemplate>
	                Product count:
	                <!-- the footer totals can be accessed using Eval() -->
	                <asp:Label ID="Label6" runat="server" Text='<%#Eval("ProductName") %>'>
	                </asp:Label>
	                <!-- if you want to place cells inside the footer template, you should put a closing tag after the content of the first one (without an opening one) and skip the last </td> tag in the template.
	                This is so because the template is rendered inside a single <td> and HTML validation would fail if you were to put regular <td></td> elements here-->
	                </td>
	                <td>
	                    Total units:
	                    <asp:Label ID="Label7" runat="server" Text='<%# Eval("UnitsInStock") %>'>
	                    </asp:Label>
	                </td>
	                <td>
	                    Total sum:
	                    <asp:Label ID="Label8" runat="server" Text='<%# Eval("UnitPrice") %>'>
	                    </asp:Label>
	                </td>
	                <td>
	                    Total price:
	                    <asp:Label ID="Label9" runat="server" Text='<%# Eval("TotalPriceResult") %>'>
	                    </asp:Label>
	            </GroupFooterTemplate>
	            <Columns>
	                <telerik:GridBoundColumn Aggregate="Count" DataField="ProductName" HeaderText="Product name"
	                    SortExpression="ProductName" UniqueName="ProductName">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn Aggregate="Sum" DataField="UnitsInStock" HeaderText="Units In Stock"
	                    SortExpression="UnitsInStock" UniqueName="UnitsInStock">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn Aggregate="Sum" DataField="UnitPrice" HeaderText="Unit price"
	                    FooterText="Total price: ">
	                </telerik:GridBoundColumn>
	                <telerik:GridCalculatedColumn HeaderText="Total Price" UniqueName="TotalPrice" DataType="System.Double"
	                    DataFields="UnitPrice, UnitsInStock" Expression="{0}*{1}" FooterText="Total : "
	                    Aggregate="Sum" />
	            </Columns>
	            <GroupByExpressions>
	                <telerik:GridGroupByExpression>
	                    <GroupByFields>
	                        <telerik:GridGroupByField FieldName="UnitsInStock" />
	                    </GroupByFields>
	                    <SelectFields>
	                        <telerik:GridGroupByField FieldName="UnitsInStock" Aggregate="Count" FieldAlias="AvailableUnits"
	                            HeaderText="UnitsInStock" />
	                    </SelectFields>
	                </telerik:GridGroupByExpression>
	            </GroupByExpressions>
	        </MasterTableView>
	        <ClientSettings AllowDragToGroup="true" />
	        <GroupingSettings ShowUnGroupButton="true" />
	    </telerik:RadGrid>
````
````VB.NET
	    <telerik:RadGrid ID="RadGrid1" ShowGroupPanel="true" AutoGenerateColumns="false"
	        DataSourceID="SqlDataSource1" ShowFooter="True" runat="server" GridLines="None"
	        AllowPaging="true" PageSize="7" Skin="Office2007" OnPreRender="RadGrid1_PreRender">
	        <MasterTableView ShowGroupFooter="true">
	            <GroupHeaderTemplate>
	                <asp:Label runat="server" ID="Label1" Text='<%# "Number of units: " & DirectCast(Container, GridGroupHeaderItem).AggregatesValues("UnitsInStock") %>'
	                    Visible='<%# ((DirectCast(Container, GridGroupHeaderItem).AggregatesValues("UnitsInStock")) IsNot Nothing)%>'>
	                </asp:Label>
	                <asp:Label runat="server" ID="Label2" Text='<%#"Number of items in group: " & DirectCast(Container, GridGroupHeaderItem).AggregatesValues("AvailableUnits") %>'
	                    Visible='<%# ((DirectCast(Container, GridGroupHeaderItem).AggregatesValues("AvailableUnits")) IsNot Nothing)%>'>
	                </asp:Label>
	                <asp:Label runat="server" ID="Label3" Text='<%# "Product name: "+Eval("ProductName") %>'
	                    Visible='<%# ((DirectCast(Container, GridGroupHeaderItem).AggregatesValues("ProductName")) IsNot Nothing)%>'></asp:Label>
	                <asp:Label runat="server" ID="Label4" Text='<%# "Product price: " & Eval("UnitPrice") %>'
	                    Visible='<%# ((DirectCast(Container, GridGroupHeaderItem).AggregatesValues("UnitPrice")) IsNot Nothing)%>'></asp:Label>
	                <asp:Label runat="server" ID="Label5" Text='<%# "Total price: " & Eval("TotalPriceResult") %>'
	                    Visible='<%# ((DirectCast(Container, GridGroupHeaderItem).AggregatesValues("TotalPriceResult")) IsNot Nothing)%>'>
	                </asp:Label>
	            </GroupHeaderTemplate>
	            <GroupFooterTemplate>
	                Product count:
	                <asp:Label ID="Label6" runat="server" Text='<%#Eval("ProductName") %>'>
	                </asp:Label>
	                <!-- if you want to place cells inside the footer template, you should put a closing tag after the content of the first one (without an opening one) and skip the last </td> tag in the template.
	                This is so because the template is rendered inside a single <td> and HTML validation would fail if you were to put regular <td></td> elements here-->
	                </td>
	                <td>
	                    Total units:
	                    <asp:Label ID="Label7" runat="server" Text='<%# Eval("UnitsInStock") %>'>
	                    </asp:Label>
	                </td>
	                <td>
	                    Total sum:
	                    <asp:Label ID="Label8" runat="server" Text='<%# Eval("UnitPrice") %>'>
	                    </asp:Label>
	                </td>
	                <td>
	                    Total price:
	                    <asp:Label ID="Label9" runat="server" Text='<%# Eval("TotalPriceResult") %>'>
	                    </asp:Label>
	            </GroupFooterTemplate>
	            <Columns>
	                <telerik:GridBoundColumn Aggregate="Count" DataField="ProductName" HeaderText="Product name"
	                    SortExpression="ProductName" UniqueName="ProductName">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn Aggregate="Sum" DataField="UnitsInStock" HeaderText="Units In Stock"
	                    SortExpression="UnitsInStock" UniqueName="UnitsInStock">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn Aggregate="Sum" DataField="UnitPrice" HeaderText="Unit price"
	                    FooterText="Total price: ">
	                </telerik:GridBoundColumn>
	                <telerik:GridCalculatedColumn HeaderText="Total Price" UniqueName="TotalPrice" DataType="System.Double"
	                    DataFields="UnitPrice, UnitsInStock" Expression="{0}*{1}" FooterText="Total : "
	                    Aggregate="Sum" />
	            </Columns>
	            <GroupByExpressions>
	                <telerik:GridGroupByExpression>
	                    <GroupByFields>
	                        <telerik:GridGroupByField FieldName="UnitsInStock" />
	                    </GroupByFields>
	                    <SelectFields>
	                        <telerik:GridGroupByField FieldName="UnitsInStock" Aggregate="Count" FieldAlias="AvailableUnits"
	                            HeaderText="UnitsInStock" />
	                    </SelectFields>
	                </telerik:GridGroupByExpression>
	            </GroupByExpressions>
	        </MasterTableView>
	        <ClientSettings AllowDragToGroup="true" />
	        <GroupingSettings ShowUnGroupButton="true" />
	    </telerik:RadGrid>
	    <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT * FROM Products" runat="server"></asp:SqlDataSource>
````




````C#
	    protected void RadGrid1_PreRender(object sender, EventArgs e)
	    {
	        foreach (GridGroupFooterItem item in RadGrid1.MasterTableView.GetItems(GridItemType.GroupFooter))
	        {
	        //set the colspan, so that the template cells are aligned with the grid columns
	                for (int i = 0; i <= item.Cells.Count - 1; i++)
	                {
	                    (item.Cells[i] as TableCell).ColumnSpan = 1;
	                }
	            //color the footer labels based on the group index
	            SetFooterLabelsColor(item);
	        }
	
	        foreach (GridGroupHeaderItem item in RadGrid1.MasterTableView.GetItems(GridItemType.GroupHeader))
	        {
	            //color the header labels based on the group index
	            SetHeaderLabelsColor(item);
	        }
	    }
	
	    private void SetFooterLabelsColor(GridGroupFooterItem item)
	    {
	        int index = item.GroupIndex.Split('_').Length;
	        Color col;
	        switch (index)
	        {
	            case 1:
	                col = Color.FromArgb(0, 0, 0);
	                ColorFooterLabels(item, col);
	                break;
	            case 2:
	                col = Color.FromArgb(161, 46, 51);
	                ColorFooterLabels(item, col);
	                break;
	            case 3:
	                col = Color.FromArgb(241, 94, 0);
	                ColorFooterLabels(item, col);
	                break;
	            case 4:
	                col = Color.FromArgb(255, 181, 25);
	                ColorFooterLabels(item, col);
	                break;
	
	        }
	    }
	
	    private void SetHeaderLabelsColor(GridGroupHeaderItem item)
	    {
	        int index = item.GroupIndex.Split('_').Length;
	        Color col;
	        switch (index)
	        {
	            case 1:
	                col = Color.FromArgb(0, 0, 0);
	                ColorHeaderLabels(item, col);
	                break;
	
	            case 2:
	                col = Color.FromArgb(161, 46, 51);
	                ColorHeaderLabels(item, col);
	                break;
	            case 3:
	                col = Color.FromArgb(241, 94, 0);
	                ColorHeaderLabels(item, col);
	                break;
	            case 4:
	                col = Color.FromArgb(255, 181, 25);
	                ColorHeaderLabels(item, col);
	                break;
	        }
	    }
	
	    private void ColorFooterLabels(GridGroupFooterItem item, Color col)
	    {
	        (item.FindControl("Label6") as Label).ForeColor = col;
	        (item.FindControl("Label7") as Label).ForeColor = col;
	        (item.FindControl("Label8") as Label).ForeColor = col;
	        (item.FindControl("Label9") as Label).ForeColor = col;
	    }
	
	    private void ColorHeaderLabels(GridGroupHeaderItem item, Color col)
	    {
	        (item.FindControl("Label5") as Label).ForeColor = col;
	        (item.FindControl("Label1") as Label).ForeColor = col;
	        (item.FindControl("Label2") as Label).ForeColor = col;
	        (item.FindControl("Label3") as Label).ForeColor = col;
	        (item.FindControl("Label4") as Label).ForeColor = col;
	    }
	
````
````VB.NET
	    Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
	        For Each item As GridGroupFooterItem In RadGrid1.MasterTableView.GetItems(GridItemType.GroupFooter)
	            'set the colspan, so that the template cells are aligned with the grid columns
	            For i As Integer = 0 To item.Cells.Count - 1
	                TryCast(item.Cells(i), TableCell).ColumnSpan = 1
	            Next
	            'color the footer labels based on the group index
	            SetFooterLabelsColor(item)
	        Next
	
	        For Each item As GridGroupHeaderItem In RadGrid1.MasterTableView.GetItems(GridItemType.GroupHeader)
	            'color the header labels based on the group index
	            SetHeaderLabelsColor(item)
	        Next
	    End Sub
	
	    Private Sub SetFooterLabelsColor(ByVal item As GridGroupFooterItem)
	        Dim index As Integer = item.GroupIndex.Split("_"c).Length
	        Dim col As Color
	        Select Case index
	            Case 1
	                col = Color.FromArgb(0, 0, 0)
	                ColorFooterLabels(item, col)
	                Exit Select
	
	            Case 2
	                col = Color.FromArgb(161, 46, 51)
	                ColorFooterLabels(item, col)
	                Exit Select
	            Case 3
	                col = Color.FromArgb(241, 94, 0)
	                ColorFooterLabels(item, col)
	                Exit Select
	            Case 4
	                col = Color.FromArgb(255, 181, 25)
	                ColorFooterLabels(item, col)
	                Exit Select
	
	        End Select
	    End Sub
	
	    Private Sub SetHeaderLabelsColor(ByVal item As GridGroupHeaderItem)
	        Dim index As Integer = item.GroupIndex.Split("_").Length
	        Dim col As Color
	        Select Case index
	            Case 1
	                col = Color.FromArgb(0, 0, 0)
	                ColorHeaderLabels(item, col)
	                Exit Select
	
	            Case 2
	                col = Color.FromArgb(161, 46, 51)
	                ColorHeaderLabels(item, col)
	                Exit Select
	            Case 3
	                col = Color.FromArgb(241, 94, 0)
	                ColorHeaderLabels(item, col)
	                Exit Select
	            Case 4
	                col = Color.FromArgb(255, 181, 25)
	                ColorHeaderLabels(item, col)
	                Exit Select
	        End Select
	    End Sub
	
	    Private Sub ColorFooterLabels(ByVal item As GridGroupFooterItem, ByVal col As Color)
	        TryCast(item.FindControl("Label6"), Label).ForeColor = col
	        TryCast(item.FindControl("Label7"), Label).ForeColor = col
	        TryCast(item.FindControl("Label8"), Label).ForeColor = col
	        TryCast(item.FindControl("Label9"), Label).ForeColor = col
	    End Sub
	
	    Private Sub ColorHeaderLabels(ByVal item As GridGroupHeaderItem, ByVal col As Color)
	        TryCast(item.FindControl("Label1"), Label).ForeColor = col
	        TryCast(item.FindControl("Label2"), Label).ForeColor = col
	        TryCast(item.FindControl("Label3"), Label).ForeColor = col
	        TryCast(item.FindControl("Label4"), Label).ForeColor = col
	        TryCast(item.FindControl("Label5"), Label).ForeColor = col
	    End Sub
````

