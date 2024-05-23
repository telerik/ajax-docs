---
title: Persisting Client-side Selection with ViewState Disabled
page_title: Persisting Client-side Selection with ViewState Disabled - RadGrid
description: Check our Web Forms article about Persisting Client-side Selection with ViewState Disabled.
slug: grid/how-to/selecting/persisting-client-side-selection-with-disabled-viewstate
previous_url: controls/grid/functionality/selecting/how-to/persisting-client-side-selection-with-disabled-viewstate
tags: selecting, persisting, ViewState
published: True
position: 9
---

# Persisting Client-side Selection with ViewState Disabled (Control state)

When using server-side selection there will be no problems with disabled **ViewState**, however with client-side selection the selected item will be lost. The grid raises appropriate **SelectedIndexChanged** event with valid data as **SelectedItems** and **SelectedIndexes**.

To avoid such problems when the grid saves its settings in the control state *(EnableViewState = false)* and client-side selection we suggest you following workaround:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" 
    OnSelectedIndexChanged="RadGrid1_SelectedIndexChanged" OnNeedDataSource="RadGrid1_NeedDataSource">
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
    <ClientSettings>
        <Selecting AllowRowSelect="true" />
    </ClientSettings>
</telerik:RadGrid>
````

````C#
Telerik.Web.UI.GridItem item = null;

private void RadGrid1_SelectedIndexChanged(object sender, EventArgs e)
{
    item = RadGrid1.SelectedItems[0];
}

private void RadGrid1_PreRender(object sender, EventArgs e)
{
    if (item != null)
    {
        item.Selected = true;
    }
}
````
````VB
Dim item As Telerik.Web.UI.GridItem = Nothing

Private Sub RadGrid1_SelectedIndexChanged(ByVal sender As Object, ByVal e As EventArgs)
    item = RadGrid1.SelectedItems(0)
End Sub

Private Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    If (Not (item) Is Nothing) Then
        item.Selected = True
    End If
End Sub
````

Where **RadGrid1_PreRender** is the event handler for **RadGrid1.OnPreRender** event and **RadGrid1_SelectedIndexChanged** is the event handler for **RadGrid1.OnSelectedIndexChanged** event.
