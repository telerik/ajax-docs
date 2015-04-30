---
title: Alphabetic Paging in Telerik RadGrid
page_title: Alphabetic Paging in Telerik RadGrid | RadGrid for ASP.NET AJAX Documentation
description: Alphabetic Paging in Telerik RadGrid
slug: grid/functionality/paging/how-to/alphabetic-paging-in-telerik-radgrid
tags: alphabetic,paging,in,telerik,radgrid
published: True
position: 0
---

# Alphabetic Paging in Telerik RadGrid



## 

A common request is to use letters instead of numbers in the grid pager and filter the records according to the letter the user chooses from the pager. This is not built-in feature in Telerik RadGrid, however it is quite easily attainable with custom code. To integrate this type of paging mechanism for your grid instance you just need to:

1. Wire the **ItemCreated** event of the control and detect whether the currently bound item is **GridPagerItem**

1. Clear the **Controls** collection of the GridPagerItem **PagerContentCell**

1. Generate LinkButtons with one and the same **CommandName** of your choice and **CommandArgument** matching the **Unicode code** for the corresponding character

1. Add these buttons to the **Controls** collection of the **PagerContentCell**

1. Subscribe to the **ItemCommand** event of the grid and check whether **e.CommandName** is the command name you specified for the LinkButtons

1. Filter the records in the grid source in par with the **e.CommandArgument** value and refresh the source content

1. Rebind the grid calling its **Rebind**() method

>note Note that in the forthcoming example we placed ShowAll button in the CommandItemTemplate of the grid which recovers the default record set if the grid items are less than the PageSize or there are no records to display.
>






````ASPNET
<telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" AllowPaging="True" PageSize="5"
    runat="server" GridLines="None" Width="100%" OnItemCreated="RadGrid1_ItemCreated"
    OnItemCommand="RadGrid1_ItemCommand">
    <PagerStyle Mode="NextPrevAndNumeric" AlwaysVisible="true" />
    <ItemStyle HorizontalAlign="Center" />
    <HeaderStyle HorizontalAlign="Center" />
    <AlternatingItemStyle HorizontalAlign="Center" />
</telerik:RadGrid>

<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" runat="server" SelectCommand="SELECT [ContactName], [ContactTitle], [CompanyName] FROM [Customers] WHERE [ContactName] LIKE @PageLetter">
    <SelectParameters>
        <asp:Parameter Name="PageLetter" DefaultValue="%" />
    </SelectParameters>
</asp:SqlDataSource>
````
````C#
public void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridPagerItem)
    {
        GridPagerItem pagerItem = (e.Item as GridPagerItem);
        pagerItem.PagerContentCell.Controls.Clear();

        for (int i = 65; i <= 65 + 25; i++)
        {
            LinkButton linkButton1 = new LinkButton();
            LiteralControl lc = new LiteralControl("&nbsp;&nbsp;");

            linkButton1.Text = "" + (char)i;

            linkButton1.CommandName = "alpha";
            linkButton1.CommandArgument = "" + (char)i;

            pagerItem.PagerContentCell.Controls.Add(linkButton1);
            pagerItem.PagerContentCell.Controls.Add(lc);
        }

        LiteralControl lcLast = new LiteralControl("&nbsp;");
        pagerItem.PagerContentCell.Controls.Add(lcLast);

        LinkButton linkButtonAll = new LinkButton();
        linkButtonAll.Text = "All";
        linkButtonAll.CommandName = "NoFilter";
        pagerItem.PagerContentCell.Controls.Add(linkButtonAll);
    }
}

public void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    String value = null;
    switch (e.CommandName)
    {
        case ("alpha"):
            {
                value = string.Format("{0}%", e.CommandArgument);
                break;
            }
        case ("NoFilter"):
            {
                value = "%";
                break;
            }
    }

    SqlDataSource1.SelectParameters["PageLetter"].DefaultValue = value;
    RadGrid1.Rebind();
}

````
````VB.NET
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridPagerItem Then
        Dim pagerItem As GridPagerItem = CType(e.Item, GridPagerItem)
        pagerItem.PagerContentCell.Controls.Clear()

        Dim i As Integer
        For i = 65 To 65 + 25
            Dim linkButton1 As New LinkButton
            Dim lc As New LiteralControl("&nbsp;&nbsp;")
            linkButton1.Text = "" + ChrW(i)

            linkButton1.CommandName = "alpha"
            linkButton1.CommandArgument = "" + ChrW(i)

            pagerItem.PagerContentCell.Controls.Add(linkButton1)
            pagerItem.PagerContentCell.Controls.Add(lc)
        Next i

        Dim lcLast As New LiteralControl("&nbsp;")
        pagerItem.PagerContentCell.Controls.Add(lcLast)

        Dim linkButtonAll As New LinkButton
        linkButtonAll.Text = "All"
        linkButtonAll.CommandName = "NoFilter"
        pagerItem.PagerContentCell.Controls.Add(linkButtonAll)
    End If
End Sub

Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    Dim value As String = Nothing
    Select Case e.CommandName
        Case ("alpha")
            value = String.Format("{0}%", e.CommandArgument)
            Exit Select
        Case ("NoFilter")
            value = "%"
            Exit Select
    End Select

    SqlDataSource1.SelectParameters("PageLetter").DefaultValue = value
    RadGrid1.Rebind()
End Sub
````

