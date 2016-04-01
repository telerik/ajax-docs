---
title: Search on Key Press/Button Click
page_title: Search on Key Press/Button Click | RadGrid for ASP.NET AJAX Documentation
description: Search on Key Press/Button Click
slug: grid/how-to/filtering/search-on-key-press-or-button-click
previous_url: grid/functionality/filtering/how-to/search-on-key-press-or-button-click
tags: search,on,key,press/button,click
published: True
position: 11
---

# Search on Key Press/Button Click



##

By default, **RadGrid** does not apply a filter until the user clicks on the filter button and selects a filter function.

If you set **AutoPostBackOnFilter** property of a column to **True**, the user does not need to press the filter button to initiate filtering. Instead, a postback filter operation occurs when the user types a filter in the filter box and presses **[Enter]** from the keyboard or if the filter textbox loses focus.

When **AutoPostBackOnFilter** is **True**, the column assumes a filter operation of **Contains** for string types or **EqualTo** for numeric types. You can change this to another filter function by setting the **CurrentFilterFunction** property. For example:

````ASP.NET
<telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" SortExpression="ProductName"
  UniqueName="ProductName" CurrentFilterFunction="StartsWith" AutoPostBackOnFilter="true">
</telerik:GridBoundColumn>
````



1. Hook the **onkeypress** event of the search textbox

1. Check whether the key code of the pressed key is 13 (or other if you want to perform search from other key)

1. Find the button in the grid command item template (in our sample the button is wrapped in this template of the control)

1. cancel/prevent the default bubbling and invoke the **click**() method of the button

1. intercept the postback request in the **ItemCommand** handler of the grid and filter the records in it in par with the pattern typed by the user

The upcoming example uses **ObjectDataSource** and **SelectParameter** to represents the approach:

````ASP.NET
<script type="text/javascript">
    function doFilter(sender, e) {
        if (e.keyCode == 13) {
            var btn = document.getElementById('<%= RadGrid1.MasterTableView.GetItems(Telerik.Web.UI.GridItemType.CommandItem)(0).FindControl("btnSearch").ClientID %>');

            if (btn != null) {
                e.cancelBubble = true;
                e.returnValue = false;

                if (e.preventDefault) {
                    e.preventDefault();
                }

                btn.click();
            }
        }
    }
</script>
<telerik:RadGrid AllowFilteringByColumn="False" id="RadGrid1" runat="server" Width="500px" DataSourceID="ObjectDataSource1" AutoGenerateColumns="False" AllowPaging="True" PageSize="20">
     <MasterTableView CommandItemDisplay="Top">
          <CommandItemTemplate>
               <div style="float: right">
                    <asp:Label ID="Label50" runat="server" Text="Filter:"></asp:Label>
                    <asp:DropDownList ID="ddlFieldName" runat="server">
                        <asp:ListItem Text="CustomerID" Value="CustomerID" Selected="True"></asp:ListItem>
                    </asp:DropDownList>
                    <asp:TextBox ID="txtSearch" onkeypress="doFilter(this, event)" runat="server"></asp:TextBox>
                    <asp:Button ID="btnSearch" runat="server" CommandName="btnSearch" Text="Filter" />
                    <asp:Button ID="btnShowAll" runat="server" CommandName="btnShowAll" Text="Show All" />
               </div>
          </CommandItemTemplate>
          <Columns>
               <telerik:GridBoundColumn DataField="CompanyName" HeaderText="CompanyName" UniqueName="CompanyName">
               </telerik:GridBoundColumn>
          </Columns>
     </MasterTableView>
</telerik:RadGrid>
<br/>
<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetCustomers1" TypeName= "Northwind">
    <SelectParameters>
        <asp:SessionParameter Name="filter1" SessionField="filter1" Type="String" />
    </SelectParameters>
</asp:ObjectDataSource>
````
````C#
protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    if (e.CommandName == "btnSearch")
    {
        Button btn = (Button)e.CommandSource;
        TextBox txt = btn.NamingContainer.FindControl("txtSearch") as TextBox;

        if (source is RadGrid1)
        {
            Session["filter1"] = txt.Text;
        }
    }
    else if (e.CommandName == "btnShowAll")
    {
        Session["filter1"] = null;
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
    If e.CommandName = "btnSearch" Then
        Dim btn As Button = CType(e.CommandSource, Button)
        Dim txt As TextBox = btn.NamingContainer.FindControl("txtSearch")

        If (source Is RadGrid1) Then
            Session("filter1") = txt.Text
        End If
    ElseIf e.CommandName = "btnShowAll" Then
        Session("filter1") = Nothing
    End If

End Sub
````


Similar approach is presented in [this online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/WebMailGrid/DefaultCS.aspx) of the product.
