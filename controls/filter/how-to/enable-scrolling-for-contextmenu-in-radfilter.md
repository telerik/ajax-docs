---
title: Enable Scrolling for ContextMenu in RadFilter
page_title: Enable Scrolling for ContextMenu in RadFilter | UI for ASP.NET AJAX Documentation
description: Enable Scrolling for ContextMenu in RadFilter
slug: filter/how-to/enable-scrolling-for-contextmenu-in-radfilter
tags: enable,scrolling,for,contextmenu,in,radfilter
published: True
position: 3
---

# Enable Scrolling for ContextMenu in RadFilter



In some cases the **RadContextMenu** used by **RadFilter** contains more items than can be displayed on the screen. In order to show only part of the items, the scrolling of the ContextMenu can be enabled. The example bellow illustrates how this can be achieved using the control's **PreRender** server-side event handler:

## 



````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadFilter runat="server" ID="RadFilter1" OnPreRender="RadFilter1_PreRender"
    FilterContainerID="RadGrid1">
</telerik:RadFilter>
<telerik:RadGrid runat="server" ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource"
    AllowFilteringByColumn="true" AllowPaging="true">
</telerik:RadGrid>
````
````C#
protected void RadFilter1_PreRender(object sender, EventArgs e)
{
    var menu = RadFilter1.FindControl("rfContextMenu") as RadContextMenu;
    menu.DefaultGroupSettings.Height = Unit.Pixel(150);
    menu.EnableAutoScroll = true;
}
protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    System.Data.DataTable table = new System.Data.DataTable();
    Enumerable.Range(0, 100).Select(i => table.Columns.Add("Col" + i)).Count();
    RadGrid1.DataSource = table;
}
````
````VB.NET
Protected Sub RadFilter1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim menu = TryCast(RadFilter1.FindControl("rfContextMenu"), RadContextMenu)
    menu.DefaultGroupSettings.Height = Unit.Pixel(150)
    menu.EnableAutoScroll = True
End Sub
Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    Dim table As New System.Data.DataTable()
    Enumerable.Range(0, 100).[Select](Function(i) table.Columns.Add("Col" + i)).Count()
    RadGrid1.DataSource = table
End Sub
````

