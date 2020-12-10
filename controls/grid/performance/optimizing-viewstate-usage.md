---
title: Optimizing ViewState usage
page_title: Optimizing ViewState usage | RadGrid for ASP.NET AJAX Documentation
description: Optimizing ViewState usage
slug: grid/performance/optimizing-viewstate-usage
tags: optimizing,viewstate,usage
published: True
position: 3
---

# Optimizing ViewState usage


Typically RadGrid stores in the **ViewState** only items/controls collections. However, sometimes the page **ViewState** can grow too big and might significantly increase the page download time.

You can control this behavior by setting the **EnableViewState** property of RadGrid to false if you do not wish the data for the controls in the grid to to be persisted in the **ViewState**. This means that the control will need to be rebound on every request: either by firing the NeedDataSource event or by going through an ASP.NET 2.x/3.x data source control.

>note When you set the **EnableViewState** property of **RadGrid** to **False** , the only supported way for binding is to use [Programmatic Databinding using NeedDataSource event](/controls/grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event) or [Declarative DataSources](/controls/grid/data-binding/server-side-binding/declarative-datasource).
>


Although [Simple Databinding]({%slug grid/data-binding/server-side-binding/simple-data-binding%}) is not supported when **ViewState** is disabled, there is a work-around that could be used in some cases. You need to call DataBind() method on the Grid instance on **Page_Load** event when the Page is initially loaded and on **Page_Init** event on any subsequent postback.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    EnableViewState="false" GridLines="None">
</telerik:RadGrid>
<asp:Button Text="Postback" ID="Button1" runat="server" />
````
````C#
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

    public List<MasterItem> MasterData()
    {
        List<MasterItem> masterItems = new List<MasterItem>();
        for (int i = 0; i < 6; i++)
        {
            masterItems.Add(new MasterItem(i, "Master_Value_" + i.ToString()));
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


    Public Function MasterData() As List(Of MasterItem)
        Dim masterItems As New List(Of MasterItem)()
        For i As Integer = 0 To 5
            masterItems.Add(New MasterItem(i, "Master_Value_" + i.ToString()))
        Next
        Return masterItems
    End Function
End Class

Public Class MasterItem
    Public Property MasterItemID() As Integer
        Get
            Return m_MasterItemID
        End Get
        Set(value As Integer)
            m_MasterItemID = Value
        End Set
    End Property
    Private m_MasterItemID As Integer
    Public Property MasterItemValue() As String
        Get
            Return m_MasterItemValue
        End Get
        Set(value As String)
            m_MasterItemValue = Value
        End Set
    End Property
    Private m_MasterItemValue As String
    Public Sub New(masterItemID**1 As Integer, masterItemValue**2 As String)
        MasterItemID = masterItemID**1
        MasterItemValue = masterItemValue**2
    End Sub
End Class
````


When having **EnableViewState** set to false, RadGrid will use the control state of the host Page to store only the absolutely necessary bits of data that preserve the current paging, sorting, and filtering state.

Some operations in Telerik RadGrid like data extraction through the **ExtractValuesFromItem** method, grouping, hierarchical views expand/collapse, custom edit forms (WebUserControl and FormTemplate) require that the **EnableViewState** is set to **true**. If no data is persisted for items in Telerik RadGrid (**EnableViewState=false**), then the state of items is lost after postback. Generally, data-source persistence optimization should be used if the small size/speed of a Page, showing RadGrid, is crucial for the application. If ViewState optimization is enabled, RadGrid will fire **NeedDataSource** and will bind after each post back to restore its items. **RadGrid** and its TableView manage the state of the following features while the **EnableViewState** property is set to **False**:

* Indexes of selected items. Because of design limitations RadGrid only persists the selected items on the first postback. Any subsequent postbacks will clear the SelectedIndexes collection and thus will deselect the items. Possible work-around is to call the saveClientState() function of RadGrid which will save the selected items in the client-state of the control. The same rule applies for selected cells.

* Indexes of edited items

* Sort expressions

* Style properties (but not if any style is applied on a single cell or row in ItemDataBound event)

* Columns order and other column properties

* All settings concerning hierarchy structure (but not the expanded state of the items)

* Filter expressions(but not the filter value in the input control)

* Current page index and the page size. Keep in mind that in a custom paging scenario page index and page size are available only in the PreRender event.

**RadGrid** does NOT manage the state for the following features when its **EnableViewState** property is set to **false**:

* Custom edit forms (user control or form template)

* Value of the filter input control, however, the filter expression is persisted and so the filtered results.

* GroupByExpressions are not persisted on Rebind and postback.

* Expanded state of items in hierarchy. This basically means that you could not use more than one level of hierarchy, unless you save the expanded settings manually.

If you would like to retain the expanded state of items or server-side selection with **ViewState** disabled, you may consider using the approach depicted in [this code library entry](https://www.telerik.com/community/code-library/aspnet-ajax/grid/retain-expanded-selected-state-in-hierarchy-on-rebind.aspx) (applicable for explicit rebinds or **ViewState** switched off). An alternative solution would be to turn on the **ViewState** of the grid and optimize its performance by using **RadCompression** and its page adapters as explained in [this article](https://www.telerik.com/help/aspnet-ajax/radcompression.html).

## See Also

 * [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations%})
 
 * [Saving the grid ViewState in Session]({%slug grid/performance/saving-the-grid-viewstate-in-session%})
