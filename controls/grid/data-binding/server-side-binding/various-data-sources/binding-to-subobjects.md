---
title: Binding to SubObjects
page_title: Binding to SubObjects - RadGrid
description: Check our Web Forms article about Binding to SubObjects.
slug: grid/data-binding/server-side-binding/various-data-sources/binding-to-subobjects
previous_url: controls/grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/binding-to-subobjects
tags: binding,to,subobjects
published: True
position: 3
---

# Binding to SubObjects



## 

You can use a wide variety of custom objects as data sources for **RadGrid**. The only requirement is that the custom objects must implement the **ITypedList**, **IEnumerable**, or **ICustomTypeDescriptor** interface. **RadGrid** can bind to subobjects by the intuitive and simple **dot(.)** syntax (specified through the **DataField** property of declaratively bound columns). This dot syntax is shown in the following example.

>note You may need to set the **RetrieveNullAsDBNull** property to **true** on the **MasterTableView** in order avoid binding problems.
>




````ASP.NET
<telerik:GridBoundColumn DataField="Inner1.TestProp" HeaderText="Inner1.TestProp">
</telerik:GridBoundColumn><telerik:GridBoundColumn DataField="Inner1.Inner2.TestProp"
  HeaderText="Inner1.Inner2.TestProp"></telerik:GridBoundColumn><telerik:GridBoundColumn
    DataField="Inner1.Inner2.Inner1.TestProp" HeaderText="Inner1.Inner2.Inner1.TestProp"></telerik:GridBoundColumn>
````
````C#
protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    ArrayList list = new ArrayList();
    list.Add(new MyObj("1"));
    list.Add(new MyObj("2"));
    list.Add(new MyObj("3"));
    list.Add(new MyObj("4"));
    list.Add(new MyObj("1"));
    RadGrid1.DataSource = list;
}
public class MyObj
{
    public string _innerText = "";
    public MyObj()
    {
    }
    public MyObj(string text)
    {
        _innerText = text;
    }
    public MyObj Inner1
    {
        get
        {
            return new MyObj(this._innerText + "Inner1");
        }
    }
    public MyObj Inner2
    {
        get
        {
            return new MyObj(this._innerText + "Inner2");
        }
    }
    public string TestProp
    {
        get
        {
            return this._innerText;
        }
    }
}
````
````VB
Private Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As WebControls.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim list As New ArrayList
    list.Add(New MyObj("1"))
    list.Add(New MyObj("2"))
    list.Add(New MyObj("3"))
    list.Add(New MyObj("4"))
    list.Add(New MyObj("1"))
    Me.RadGrid1.DataSource = CType(list, IEnumerable)
End Sub
Public Class MyObj
    Public innerText As String = ""
    Public Sub New()
    End Sub
    Public Sub New(ByVal text As String)
        Me.innerText = text
    End Sub
    Public ReadOnly Property Inner1() As MyObj
        Get
            Return New MyObj(Me.innerText + "Inner1")
        End Get
    End Property
    Public ReadOnly Property Inner2() As MyObj
        Get
            Return New MyObj(Me.innerText + "Inner2")
        End Get
    End Property
    Public ReadOnly Property TestProp() As String
        Get
            Return Me.innerText
        End Get
    End Property
End Class
````


For a live example that illustrates these features, see [Various data sources](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/Binding/DefaultCS.aspx).
