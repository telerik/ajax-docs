---
title: Inheriting Grid Columns
page_title: Inheriting Grid Columns - RadGrid
description: Learn how to inherit RadGrid columns, customize cell initialization, and preserve column properties when using hierarchical tables.
slug: grid/inheritance/inheriting-grid-columns
components: ["grid"]
tags: inheritance,grid,columns,custom-columns,gridboundcolumn
published: True
position: 1
---

# Inheriting Grid Columns

You can extend a built-in RadGrid column by inheriting its corresponding column class. Override `InitializeCell` to customize cell content and `Clone` to preserve the column configuration when RadGrid creates a copy for a hierarchical table.

## Create a custom bound column

The following example inherits `GridBoundColumn` and writes the data field name in the header cell and the `CustomerID` value in each data cell. The `DataKeyNames` setting makes the key available through `DataKeyValues`.



````ASP.NET
<%@ Register TagPrefix="custom" Namespace="MyNamespace" %>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="SqlDataSource1" AllowPaging="True"
  AllowSorting="True" runat="server" AutoGenerateColumns="False">
  <MasterTableView DataKeyNames="CustomerID">
    <Columns>
      <custom:MyCustomColumn DataField="CustomerID" HeaderText="Customer ID" />
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
   SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````
````C#
using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

namespace MyNamespace
{
public class MyCustomColumn : GridBoundColumn
{
    public override void InitializeCell(TableCell cell, int columnIndex, GridItem item)
    {
      if (item is GridHeaderItem)
        {
        cell.Text = DataField;
        }
      else if (item is GridDataItem)
        {
        GridDataItem dataItem = (GridDataItem)item;
        object customerId = dataItem.OwnerTableView.DataKeyValues[dataItem.ItemIndex]["CustomerID"];
        cell.Controls.Add(new LiteralControl(Convert.ToString(customerId)));
        }
    }
}
}
````
````VB
Imports System
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports Telerik.Web.UI

Namespace MyNamespace
    Public Class MyCustomColumn
      Inherits GridBoundColumn

      Public Overrides Sub InitializeCell(ByVal cell As TableCell, ByVal columnIndex As Integer, ByVal item As GridItem)
        If TypeOf item Is GridHeaderItem Then
          cell.Text = Me.DataField
        ElseIf TypeOf item Is GridDataItem Then
          Dim dataItem As GridDataItem = DirectCast(item, GridDataItem)
          Dim customerId As Object = dataItem.OwnerTableView.DataKeyValues(dataItem.ItemIndex)("CustomerID")
          cell.Controls.Add(New LiteralControl(Convert.ToString(customerId)))
        End If
      End Sub
    End Class
End Namespace
````

## Preserve column properties in hierarchy

When RadGrid creates a copy of a custom column for a hierarchical table, override `Clone()` and copy the base properties to the new column instance. Copy any additional custom properties separately.

````C#
public override GridColumn Clone()
{
    MyCustomColumn clonedColumn = new MyCustomColumn();

    clonedColumn.CopyBaseProperties(this);

    return clonedColumn;
}
````
````VB
Public Overloads Overrides Function Clone() As GridColumn
    Dim clonedColumn As New MyCustomColumn()

    clonedColumn.CopyBaseProperties(Me)

    Return clonedColumn
End Function
````

>note This article provides basic instructions for inheriting RadGrid columns. Telerik does not support issues specific to custom inherited implementations.

## See Also

- [Grid column types]({%slug grid/columns/column-types%})
- [RadGrid structure overview]({%slug grid/structure/radgrid-structure-overview%})

