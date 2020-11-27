---
title: Overview
page_title: Server-side Programming Overview | RadBreadcrumb for ASP.NET AJAX Documentation
description: Overview
slug: breadcrumb/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of RadBreadcrumb and create its items in the code-behind via the Server-Side API of the control.

## RadBreadcrumb Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadBreadcrumb class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadBreadcrumb). You can also find it in the IntelliSense in Visual Studio.

## Create a RadBreadcrumb in the Code-behind:

````ASPX
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
    var breadcrumb = new RadBreadcrumb();
    breadcrumb.ID = "RadBreadcrumb1";
    breadcrumb.Skin = "Silk";
    breadcrumb.RootIcon = "user";
    breadcrumb.DelimiterIcon = "divide";
    breadcrumb.DataBinding += new EventHandler(RadBreadcrumb1_DataBinding);
    breadcrumb.Load += new EventHandler(RadBreadcrumb1_Load);

    PlaceHolder1.Controls.Add(breadcrumb);
}

protected void RadBreadcrumb1_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        (sender as RadBreadcrumb).DataBind();
    }
}

protected void RadBreadcrumb1_DataBinding(object sender, EventArgs e)
{
    var breadcrumb = (sender as RadBreadcrumb);
    breadcrumb.Items.AddRange(GetBreadcrumbItems(null));
}

private IEnumerable<BreadcrumbItem> GetBreadcrumbItems(object dataSource)
{
    var result = new List<BreadcrumbItem>();

    result.Add(new BreadcrumbItem() { Type = BreadcrumbItemType.RootItem });
    result.Add(new BreadcrumbItem() { Text = "Item1", });
    result.Add(new BreadcrumbItem() { Text = "Item2" });
    result.Add(new BreadcrumbItem() { Text = "Item3" });
    result.Add(new BreadcrumbItem() { Text = "Item4" });

    return result;
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim breadcrumb = New RadBreadcrumb()
    breadcrumb.ID = "RadBreadcrumb1"
    breadcrumb.Skin = "Silk"
    breadcrumb.RootIcon = "user"
    breadcrumb.DelimiterIcon = "divide"
    breadcrumb.DataBinding += New EventHandler(AddressOf RadBreadcrumb1_DataBinding)
    breadcrumb.Load += New EventHandler(AddressOf RadBreadcrumb1_Load)
    PlaceHolder1.Controls.Add(breadcrumb)
End Sub

Protected Sub RadBreadcrumb1_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not IsPostBack Then
        (TryCast(sender, RadBreadcrumb)).DataBind()
    End If
End Sub

Protected Sub RadBreadcrumb1_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
    Dim breadcrumb = (TryCast(sender, RadBreadcrumb))
    breadcrumb.Items.AddRange(GetBreadcrumbItems(Nothing))
End Sub

Private Function GetBreadcrumbItems(ByVal dataSource As Object) As IEnumerable(Of BreadcrumbItem)
    Dim result = New List(Of BreadcrumbItem)()
    result.Add(New BreadcrumbItem() With {
        .Type = BreadcrumbItemType.RootItem
    })
    result.Add(New BreadcrumbItem() With {
        .Text = "Item1"
    })
    result.Add(New BreadcrumbItem() With {
        .Text = "Item2"
    })
    result.Add(New BreadcrumbItem() With {
        .Text = "Item3"
    })
    result.Add(New BreadcrumbItem() With {
        .Text = "Item4"
    })
    Return result
End Function
````

 