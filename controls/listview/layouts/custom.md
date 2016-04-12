---
title: Custom
page_title: Custom | RadListView for ASP.NET AJAX Documentation
description: Custom
slug: listview/layouts/custom
tags: custom
published: True
position: 1
---

# Custom



## 

Telerik **RadListView** supports complete customization of the layout. Using the LayoutTemplate and ItemTemplate, you can define a repeating HTML pattern that can build up various layout structures: horizontal lists, vertical lists, tables, etc. Moreover, including a **RadDataPager** gives you off-the-shelf paging functionality in otherwise hard to implement scenarios like, for example, paging horizontal lists:

````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" DataSourceID="SqlDataSource2"
ItemPlaceholderID="PlaceHolder1" AllowPaging="true">
    <LayoutTemplate>
        <div class="sushibar">
            <asp:Panel ID="SushiPanel" runat="server">
                <div class="sushi">
                    <asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
                </div>
                <div class="pager">
                    <telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" PageSize="4"
                        Skin="Default" Width="100%">
                        <Fields>
                            <telerik:RadDataPagerSliderField />
                        </Fields>
                    </telerik:RadDataPager>
                </div>
            </asp:Panel>
        </div>
    </LayoutTemplate>
    <ItemTemplate>
        <div class="category">
            <h3>
                <%#Eval("EnglishName") %>
            </h3>
            <asp:ImageButton ID="SushiImage" runat="server"
                AlternateText='<%# Eval("EnglishName") %>' Width="120px"
                CommandName="Select"
                ImageUrl='<%# String.Format("~/ListView/Examples/AppearanceStyling/CustomLayouts/Sushi/{0}.jpg", Eval("ItemID").ToString()) %>' />
             <p>
                 <%#Eval("OriginalName") %>
             </p>
             <p>
                 <%#Eval("Description") %>
             </p>
         </div>
    </ItemTemplate>
</telerik:RadListView>
````



You can nest multiple RadListView controls to group data by context and visualize sets within sets. Using HTML and CSS, you can toggle the visibility of the inner data, producing hierarchical layout structures, like nested tables:

````ASP.NET
<telerik:RadListView ID="RadListView2" runat="server" DataSourceID="SqlDataSource1"
ItemPlaceholderID="ProductTitlePlaceHolder">
    <LayoutTemplate>
        <asp:Panel ID="HierarchyPanel" runat="server" CssClass="wrapper">
        <table id="products" class="products">
            <thead>
                <th></th>
                <th>OrderID</th>
                <th>Quantity</th>
                <th>UnitPrice</th>
                <th>Discount</th>
            </thead>
            <tbody>
                <tr id="ProductTitlePlaceHolder" runat="server"></tr>
            </tbody>
        </table>
        </asp:Panel>
    </LayoutTemplate>
    <ItemTemplate>
        <tr>
            <td>
                <img src="Images/SinglePlus.gif" alt="toggle" onclick="toggleOrderDetails(this)" />
            </td>
            <td colspan="4"><%# Eval("ProductID") %>&nbsp;<%# Eval("ProductName") %></td>
        </tr>
        <asp:Label ID="ProductIdLabel" runat="server" Visible="false">
            <%# Session["prodId"] = Eval("ProductID").ToString() %>
        </asp:Label>
        <telerik:RadListView ID="RadListView3" runat="server"
            ItemPlaceholderID="OrderDetailsPlaceHolder"
            DataSourceID="SqlDataSource2" EnableViewState="false">
            <LayoutTemplate>
                <asp:PlaceHolder ID="OrderDetailsPlaceHolder" runat="server"></asp:PlaceHolder>
            </LayoutTemplate>
            <ItemTemplate>
                <tr class="orders" style="display: none;">
                    <td></td>
                    <td><%# Eval("OrderID") %></td>
                    <td><%# String.Format("{0} pcs", Eval("Quantity").ToString()) %></td>
                    <td><%# Double.Parse(Eval("UnitPrice").ToString()).ToString("C") %></td>
                    <td><%# Double.Parse(Eval("Discount").ToString()).ToString("P0") %></td>
                </tr>
            </ItemTemplate>
        </telerik:RadListView>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server"
            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
            SelectCommand="SELECT TOP 5 [OrderID], [ProductID], [UnitPrice], [Quantity], [Discount] FROM [Order Details] WHERE [ProductID] = @ProductID">
            <SelectParameters>
                <asp:SessionParameter SessionField="prodId" Name="ProductID" />
            </SelectParameters>
        </asp:SqlDataSource>
    </ItemTemplate>
</telerik:RadListView>
````



In the above example, the inner data rows are toggled using some javascript:

````JavaScript
function toggleOrderDetails(sender)
{
    var thisRow = sender.parentNode.parentNode;
    var nextRow = thisRow.nextElementSibling || thisRow.nextSibling;
    while (nextRow && nextRow.className == "orders")
    {
        if (nextRow.style.display == "none")
        {
            nextRow.style.display = "";
            sender.src = sender.src.replace("Plus", "Minus");
            thisRow.className = "expanded";
        }
        else
        {
            nextRow.style.display = "none";
            sender.src = sender.src.replace("Minus", "Plus");
            thisRow.className = "";
        }
        var nextRow = nextRow.nextElementSibling || nextRow.nextSibling;
    }
}
````



To see a live demo of the above examples, please visit the [RadListView custom layouts demo page](http://demos.telerik.com/aspnet-ajax/listview/examples/appearancestyling/customlayouts/defaultcs.aspx)
