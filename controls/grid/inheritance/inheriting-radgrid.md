---
title: Inheriting RadGrid
page_title: Inheriting RadGrid - RadGrid
description: Learn how to inherit RadGrid and GridTableView in ASP.NET Web Forms applications, register custom controls, and configure hierarchy markup.
slug: grid/inheritance/inheriting-radgrid
components: ["grid"]
tags: inheritance,radgrid,gridtableview,custom-controls,hierarchy
published: True
position: 0
---

# Inheriting RadGrid

You can inherit **RadGrid** to create a custom grid control and inherit **GridTableView** to customize the table views used by that control. The examples in this article use ASP.NET Web Forms markup and code-behind.

## Register the custom grid control

Assume that the custom grid is named `InheritedGrid`, is compiled into `InheritedGrid.dll`, and uses the `myRadG` tag prefix. Add the `TagPrefix` attribute to the application assembly, for example in `AssemblyInfo.cs`:

````C#
using System.Web.UI;

[assembly: TagPrefix("MyBaseNamespace.MyControls", "myRadG")]
````

Register both the Telerik and custom assemblies on the ASPX page:

````ASP.NET
<%@ Register TagPrefix="radG" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
<%@ Register TagPrefix="myRadG" Namespace="MyBaseNamespace.MyControls" Assembly="InheritedGrid" %>
````

Use the custom prefix for the inherited grid and the Telerik prefix for the standard grid table and column classes:

````ASP.NET
<myRadG:InheritedGrid ID="InheritedGrid1" runat="server">
    <MasterTableView>
        <Columns>
            <radG:GridBoundColumn DataField="CustomerID" HeaderText="Customer ID" />
        </Columns>
        <DetailTables>
            <radG:GridTableView Name="Orders" />
        </DetailTables>
    </MasterTableView>
</myRadG:InheritedGrid>
````

This registration enables Visual Studio to recognize the tag prefixes and allows the RadGrid Property Builder to serialize the design-time markup correctly.

## Inherit GridTableView

To use a custom table view in the hierarchy, register the custom namespace and declare the custom table view in the `DetailTables` collection:


````ASP.NET
<%@ Register Namespace="MyNamespace" TagPrefix="my" %>
<my:MyGrid ID="MyGrid1" runat="server" OnNeedDataSource="MyGrid1_NeedDataSource">
    <MasterTableView>
        <DetailTables>
            <my:MyGridTableView />
        </DetailTables>
    </MasterTableView>
</my:MyGrid>
````
````C#
using Telerik.Web.UI;

namespace MyNamespace
{
    public class MyGrid : RadGrid
    {
        public override GridTableView CreateTableView()
        {
            return new MyGridTableView(this);
        }
    }

    public class MyGridTableView : GridTableView
    {
        public MyGridTableView()
        {
        }

        public MyGridTableView(RadGrid owner) : base(owner)
        {
        }
    }
}
````
````VB
Imports Telerik.Web.UI

Namespace MyNamespace
    Public Class MyGrid
        Inherits RadGrid

        Public Overrides Function CreateTableView() As GridTableView
            Return New MyGridTableView(Me)
        End Function
    End Class

    Public Class MyGridTableView
        Inherits GridTableView

        Public Sub New()
        End Sub

        Public Sub New(ByVal owner As RadGrid)
            MyBase.New(owner)
        End Sub
    End Class
End Namespace
````

Override the `CreateTableView()` method in the custom `RadGrid` class and return an instance of the custom `GridTableView` implementation.

## Support limitation

>note This article provides basic instructions for inheriting `RadGrid` and `GridTableView`. Telerik does not support issues specific to custom inherited implementations.

## See Also

- [RadGrid structure overview]({%slug grid/structure/radgrid-structure-overview%})
- [Understanding hierarchical grid structure]({%slug grid/hierarchical-grid-types-and-load-modes/understanding-hierarchical-grid-structure%})

