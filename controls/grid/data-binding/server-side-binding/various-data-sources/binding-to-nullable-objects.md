---
title: Binding to Nullable Objects
page_title: Binding to Nullable Objects | RadGrid for ASP.NET AJAX Documentation
description: Binding to Nullable Objects
slug: grid/data-binding/server-side-binding/various-data-sources/binding-to-nullable-objects
previous_url: controls/grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/binding-to-nullable-objects
tags: binding,to,nullable,objects
published: True
position: 4
---

# Binding to Nullable Objects



## 

You can use a wide variety of custom objects as data sources for **RadGrid**. The only requirement is that the custom objects must implement the **ITypedList**, **IEnumarable**, or **ICustomTypeDescriptor** interface. **RadGrid** can bind to a list of custom objects with **Nullable** properties, as shown in the following example:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
  <MasterTableView AutoGenerateColumns="True" />
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object source,
Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    ArrayList list = new ArrayList();
    list.Add(new TestListItem("Item 0", 0));
    list.Add(new TestListItem("Item 1", 0));
    list.Add(new TestListItem("Item 2", 1));
    list.Add(new TestListItem("Item 3", 1));
    list.Add(new TestListItem("Item 4", null));
    RadGrid1.DataSource = list;
}
public class TestListItem
{
    private string _a;
    private int? _b;
    public TestListItem(string a, int? b)
    {
        this._a = a;
        this._b = b;
    }
    public string A
    {
        get
        {
            return this._a;
        }
        set
        {
            this._a = value;
        }
    }
    public int? B
    {
        get
        {
            return this._b;
        }
    }
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As GridNeedDataSourceEventArgs)
    Dim list As New ArrayList
    list.Add(New TestListItem("Item 0", 0))
    list.Add(New TestListItem("Item 1", 1))
    list.Add(New TestListItem("Item 2", 2))
    list.Add(New TestListItem("Item 3", 3))
    list.Add(New TestListItem("Item 4", Nothing))
    RadGrid1.DataSource = CType(list, IEnumerable)
End Sub
Public Class TestListItem
    Private _a As String
    Private _b As Nullable(Of Integer)
    Public Sub New(ByVal a As String, ByVal b As Nullable(Of Integer))
        Me._a = a
        Me._b = b
    End Sub
    Public Property A() As String
        Get
            Return Me._a
        End Get
        Set(ByVal Value As String)
            Me._a = Value
        End Set
    End Property
    Public ReadOnly Property B() As Nullable(Of Integer)
        Get
            Return Me._b
        End Get
    End Property
End Class
````

