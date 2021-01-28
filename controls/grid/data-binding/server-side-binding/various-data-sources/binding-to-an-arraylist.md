---
title: Binding to an ArrayList
page_title: Binding to an ArrayList - RadGrid
description: Check our Web Forms article about Binding to an ArrayList.
slug: grid/data-binding/server-side-binding/various-data-sources/binding-to-an-arraylist
previous_url: controls/grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/binding-to-an-arraylist
tags: binding,to,an,arraylist
published: True
position: 2
---

# Binding to an ArrayList



## 

You can use a wide variety of custom objects as data sources for **RadGrid**. The only requirement is that the custom objects must implement the **ITypedList**, **IEnumarable**, or **ICustomTypeDescriptor** interface. The example below demonstrates how to use one of these (**ArrayList**) to provide the structure of a **RadGrid** control:



````C#
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" OnNeedDataSource="RadGrid1_NeedDataSource1" PageSize="10">
    <MasterTableView AutoGenerateColumns="true">
    </MasterTableView>
</telerik:RadGrid>
````
````VB
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" PageSize="10">
    <MasterTableView AutoGenerateColumns="true">
    </MasterTableView>
</telerik:RadGrid>
````


Code-behind:



````C#
protected void RadGrid1_NeedDataSource1(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    ArrayList list = new ArrayList();
    list.Add("string1");
    list.Add("string2");
    list.Add("string3");
    RadGrid1.DataSource = list;
}
````
````VB
Private Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As GridNeedDataSourceEventArgs)
    Dim list As New ArrayList
    list.Add("string1")
    list.Add("string2")
    list.Add("string3")
    RadGrid1.DataSource = list
End Sub
````

