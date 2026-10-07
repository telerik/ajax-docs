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

You can use a wide variety of custom objects as data sources for **RadGrid**. The only requirement is that the custom objects must implement the **ITypedList**, **IEnumerable**, or **ICustomTypeDescriptor** interface. The example below demonstrates how to use one of these (**ArrayList**) to provide the structure of a **RadGrid** control:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" OnNeedDataSource="RadGrid1_NeedDataSource" PageSize="10">
    <MasterTableView AutoGenerateColumns="true">
    </MasterTableView>
</telerik:RadGrid>
````
````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" OnNeedDataSource="RadGrid1_NeedDataSource" PageSize="10">
    <MasterTableView AutoGenerateColumns="true">
    </MasterTableView>
</telerik:RadGrid>
````


Code-behind:



````C#
protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
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

## See Also

- [Data binding overview]({%slug grid/data-binding/overview%})
- [Binding to nullable objects]({%slug grid/data-binding/server-side-binding/various-data-sources/binding-to-nullable-objects%})
- [Binding to subobjects]({%slug grid/data-binding/server-side-binding/various-data-sources/binding-to-subobjects%})

