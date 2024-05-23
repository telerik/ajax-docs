---
title: Ajaxifying RadGrid
page_title: Ajaxifying RadGrid - RadGrid
description: Check our Web Forms article about Ajaxifying RadGrid.
slug: grid/performance/ajaxifying-radgrid
tags: ajaxifying,radgrid
published: True
position: 1
---

# Ajaxifying RadGrid

Telerik RadGrid takes full advantage of the AJAX technology (Asynchronous JavaScript with XMLHttpRequests) to deliver an unsurpassed responsiveness and user experience for an ASP.NET grid control.

The main idea of the AJAX framework is the elimination of full-page postbacks. In contrast, only the relevant parts of the page are updated, without a disturbing refresh. Moreover, the markup that is transferred between the client machine and the server is reduced dramatically, which results in a significant performance improvement.

Telerik RadGrid interoperate with the AJAX technology completely behind the scenes eliminating the need for further intervention of the developer. All you have to do is connect the grid to a **RadAjaxManager** or wrap it inside **RadAjaxPanel/MS UpdatePanel**. This will make all elements of the grid, which typically make a postback (e.g. **Buttons**, **ImageButtons**, **LinkButtons**) to perform a client AJAX callback instead.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

Furthermore, there is a mechanism for making any control integrated in the grid to perform AJAX callbacks instead of postbacks. For example, the drag-and-drop for grouping and column reordering uses that mechanism to facilitate no-postback experience.

The AJAX technology preserves the page lifecycle completely. The developer can continue to set properties of the grid itself or of other controls inside the grid (including third party controls).

>caution Telerik RadGrid gives you the advantage of having your pages indexed by search engines even when working in AJAX mode.
>

## See Also

 * [Grid Performance Optimizations]({%slug grid/performance/grid-performance-optimizations%})

