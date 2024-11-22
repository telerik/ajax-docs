---
title: Binding to ASP DataSource components
page_title: Server-side Data Binding Overview - RadComboBox
description: Overview of the Server-side Data binding options for the Telerik WebForms Combobox.
slug: combobox/data-binding/server-side/binding-to-asp-datasource-components
previous_url: controls/combobox/data-binding/binding-to-asp-datasource-components
tags: server-side, data binding, overview
published: True
position: 1
---

# Binding to ASP DataSource components

RadComboBox supports binding to all ASP.NET DataSource components, including:

- [Binding to ASP DataSource components](#binding-to-asp-datasource-components)
- [Binding to AccessDataSource](#binding-to-accessdatasource)
- [Binding to LinqDataSource](#binding-to-linqdatasource)
- [Binding to ObjectDataSource](#binding-to-objectdatasource)
- [Binding to SiteMapDataSource](#binding-to-sitemapdatasource)
- [Binding to SqlDataSource](#binding-to-sqldatasource)
- [Binding to XmlDataSource](#binding-to-xmldatasource)


## Databinding Properties

The following properties are used when binding RadComboBox to a data source

| Property          | Description   |
| ---               | ---           |
| `DataSourceID`    | Set to the ID of your data source. This is mandatory when binding RadComboBox declaratively. |
| `DataSource`      | Set to an instance of your data source. This is mandatory when binding RadComboBox at runtime. |
| `DataMember`      | Set the name of a specific Table in the data source. E.g. When binding the Combo to a `DataSet` object, this property will point to the respective `DataTable` object by the name.
| `DataTextField`   | Set the name of the data source field to map it to Item's `Text` property. |
| `DataValueField`  | Set the name of the data source field to map it to Item's `Value` property. |

## Binding to AccessDataSource

>caption Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server"
    DataSourceID="AccessDataSource1"
    DataTextField="Text"
    DataValueField="Value">
</telerik:RadComboBox>

<asp:AccessDataSource ID="AccessDataSource1" runat="server"
    DataFile="~/Data/Combo.mdb"
    SelectCommand="SELECT * FROM [Links]">
</asp:AccessDataSource>
````

## Binding to LinqDataSource

>caption Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" 
    DataSourceID="LinqDataSource1" 
    DataTextField="ProductName" 
    DataValueField="ProductID">
</telerik:RadComboBox>

<asp:LinqDataSource ID="LinqDataSource1" runat="server" ContextTypeName="NorthwindEntities" TableName="Products">
</asp:LinqDataSource>
````

>important The `LinqDataSource` control in ASP.NET is compatible with Entity Framework versions up to `EF 4.x`.

## Binding to ObjectDataSource

>caption Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server"
    DataSourceID="ObjectDataSource1"
    DataTextField="Text"
    DataValueField="Value">
</telerik:RadComboBox>

<asp:ObjectDataSource runat="server" ID="ObjectDataSource1" 
    TypeName="CustomBusinessObject" 
    SelectMethod="GetItems">
</asp:ObjectDataSource>
````

>caption CustomBusinessObject

````C#
public class CustomBusinessObject
{
    public static List<ComboDataItem> GetItems()
    {
        List<ComboDataItem> itemsList = new List<ComboDataItem>();

        itemsList.Add(new ComboDataItem() { ID = 1, Text = "item 1" });
        itemsList.Add(new ComboDataItem() { ID = 2, Text = "item 2" });
        itemsList.Add(new ComboDataItem() { ID = 3, Text = "item 3" });

        return itemsList;
    }

    public class ComboDataItem
    {
        public string Text { get; set; }
        public int ID { get; set; }
    }
}
````
````VB.NET
Public Class CustomBusinessObject
    Public Shared Function GetItems() As List(Of ComboDataItem)
        Dim itemsList As List(Of ComboDataItem) = New List(Of ComboDataItem)()
        itemsList.Add(New ComboDataItem() With {
            .ID = 1,
            .Text = "item 1"
        })
        itemsList.Add(New ComboDataItem() With {
            .ID = 2,
            .Text = "item 2"
        })
        itemsList.Add(New ComboDataItem() With {
            .ID = 3,
            .Text = "item 3"
        })
        Return itemsList
    End Function

    Public Class ComboDataItem
        Public Property Text As String
        Public Property ID As Integer
    End Class
End Class
````


## Binding to SiteMapDataSource

>caption Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server"
    DataSourceID="SiteMapDataSource1"
    DataTextField="Title"
    DataValueField="Url">
</telerik:RadComboBox>

<asp:SiteMapDataSource ID="SiteMapDataSource1" runat="server" />
````

## Binding to SqlDataSource

>caption Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server"
    DataSourceID="SqlDataSource1"
    DataTextField="Text"
    DataValueField="Value">
</telerik:RadComboBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:ComboConnectionString %>"
    SelectCommand="SELECT * FROM [Links]">
</asp:SqlDataSource>
````

## Binding to XmlDataSource

>caption Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server"
    DataSourceID="XmlDataSource1"
    DataTextField="Text"
    DataValueField="Value">
</telerik:RadComboBox>

<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/ContentFile.xml">
</asp:XmlDataSource>
````

>caption ContentFile.xml

````XML
<items>
    <Item Text="New York" Value="1" />
    <Item Text="Paris" Value="2" />
    <Item Text="London" Value="3" />
</items>
````
