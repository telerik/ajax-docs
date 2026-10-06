---
title: Optimizing ViewState usage
page_title: Optimizing ViewState usage - RadGrid
description: Learn which RadGrid features require ViewState, how to rebind when it is disabled, and how to preserve supported grid state in ASP.NET AJAX.
slug: grid/performance/optimizing-viewstate-usage
components: ["grid"]
tags: grid,viewstate,databinding,needdatasource,paging,sorting
published: True
position: 3
---

# Optimize RadGrid ViewState usage

**RadGrid** stores item and control collections in **ViewState**. On pages with large grids or many controls, this state can increase the response size and page download time.

Set the **EnableViewState** property of **RadGrid** to `False` when the application can recreate the grid data and does not require the features that depend on item ViewState. The grid must then be rebound on each request through the **NeedDataSource** event or a declarative data source. See [Programmatic data binding using the NeedDataSource event]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%}) and [Declarative data sources]({%slug grid/data-binding/server-side-binding/declarative-datasource%}).

>note When **EnableViewState** is `False`, [simple data binding]({%slug grid/data-binding/server-side-binding/simple-data-binding%}) is not supported as the normal binding approach. If you must use simple data binding, rebind the grid in `Page_Load` on the initial request and in `Page_Init` on subsequent postbacks, as shown below.

## Rebind a simply bound grid

The following example disables ViewState and binds the grid on the appropriate page lifecycle events.

> caption Rebind a RadGrid with EnableViewState disabled

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />

<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    EnableViewState="False" GridLines="None">
</telerik:RadGrid>
<asp:Button Text="Postback" ID="Button1" runat="server" />
````

````C#
using System;
using System.Collections.Generic;

public partial class Default_Cs : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            RadGrid1.DataSource = MasterData();
            RadGrid1.DataBind();
        }
    }

    protected void Page_Init(object sender, EventArgs e)
    {
        if (Page.IsPostBack)
        {
            RadGrid1.DataSource = MasterData();
            RadGrid1.DataBind();
        }
    }

    private List<MasterItem> MasterData()
    {
        var masterItems = new List<MasterItem>();
        for (int index = 0; index < 6; index++)
        {
            masterItems.Add(new MasterItem(index, "Master_Value_" + index));
        }
        return masterItems;
    }
}

public class MasterItem
{
    public int MasterItemID { get; set; }
    public string MasterItemValue { get; set; }

    public MasterItem(int masterItemID, string masterItemValue)
    {
        MasterItemID = masterItemID;
        MasterItemValue = masterItemValue;
    }
}
````
````VB
Imports System
Imports System.Collections.Generic

Partial Class Default_VB
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            RadGrid1.DataSource = MasterData()
            RadGrid1.DataBind()
        End If
    End Sub

    Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
        If Page.IsPostBack Then
            RadGrid1.DataSource = MasterData()
            RadGrid1.DataBind()
        End If
    End Sub

    Private Function MasterData() As List(Of MasterItem)
        Dim masterItems As New List(Of MasterItem)()
        For index As Integer = 0 To 5
            masterItems.Add(New MasterItem(index, "Master_Value_" & index.ToString()))
        Next
        Return masterItems
    End Function
End Class

Public Class MasterItem
    Public Property MasterItemID As Integer
    Public Property MasterItemValue As String

    Public Sub New(masterItemID As Integer, masterItemValue As String)
        Me.MasterItemID = masterItemID
        Me.MasterItemValue = masterItemValue
    End Sub
End Class
````

When **EnableViewState** is `False`, RadGrid uses control state to retain the data needed for features such as paging, sorting, and filtering. The grid still needs to be rebound so that its items and controls are recreated after a postback.

## Features preserved by RadGrid

Some RadGrid features remain available when **EnableViewState** is `False`. RadGrid and its table views manage the following state:

* Selected item indexes. RadGrid persists selected items on the first postback, but later postbacks can clear the **SelectedIndexes** collection. You can use the `saveClientState()` client method to preserve selected items in client state. The same limitation applies to selected cells.
* Edited item indexes.
* Sort expressions.
* Style properties, except styles applied to an individual cell or row in the **ItemDataBound** event.
* Column order and other column properties.
* Hierarchy settings, but not the expanded state of hierarchy items.
* Filter expressions, but not the value in the filter input control.
* Current page index and page size. In a custom-paging scenario, these values are available in the **PreRender** event.

## Features not preserved by RadGrid

The following features require **EnableViewState** to be `True` or require additional state management:

* Data extraction through the **ExtractValuesFromItem** method.
* Grouping.
* Hierarchical item expansion and collapse.
* Custom edit forms that use a user control or form template.
* The value in a filter input control. The filter expression is persisted, so the filtered result remains available.
* **GroupByExpressions** after a rebind or postback.

With ViewState disabled, a hierarchy cannot reliably use more than one expanded level unless you save the expanded settings manually. To preserve expanded items or server-side selection, see [Retain expanded and selected state in a hierarchy on rebind]({%slug grid-retain-expanded-selected-state-in-hierarchy-on-rebind%}).

## See Also

 * [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations%})

 * [Saving the grid ViewState in Session]({%slug grid/performance/saving-the-grid-viewstate-in-session%})
