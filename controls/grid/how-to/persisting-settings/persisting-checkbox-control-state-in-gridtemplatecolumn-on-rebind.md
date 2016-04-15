---
title: Persisting CheckBox Control State in GridTemplateColumn on Rebind
page_title: Persisting CheckBox Control State in GridTemplateColumn on Rebind | RadGrid for ASP.NET AJAX Documentation
description: Persisting CheckBox Control State in GridTemplateColumn on Rebind
slug: grid/how-to/persisting-settings/persisting-checkbox-control-state-in-gridtemplatecolumn-on-rebind
tags: persisting,checkbox,control,state,in,gridtemplatecolumn,on,rebind
published: True
position: 7
---

# Persisting CheckBox Control State in GridTemplateColumn on Rebind



##

There are cases in which the user would like to retain the state for checkbox control inside **GridTemplateColumn** on grid operation which requires rebinding. In such situation you can use **ViewState** property on the page which holds the grid to save the current checkbox selection. The alteration of this property should be made in the **OnCheckedChanged** event handler of the respective checkbox.

The forthcoming sample presents how to retain the checkbox state in a hierarchical grid after expand/collapse for further custom operations. There are separate **ViewState** properties for each master/detail table. The example below is optimized for **ViewState** minimization as these properties are modified only when **CheckBoxInstance.Checked** is **true.** Otherwise the row value is not added to the **ViewState**.

Similar actions could be performed for persistence of other controls state in **GridTemplateColumn**.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AutoGenerateColumns="False" AllowSorting="True"
  AllowPaging="True" PageSize="3">
  <MasterTableView DataMember="Customers" PageSize="3" AllowPaging="True">
    <PagerStyle Mode="NumericPages"></PagerStyle>
    <Columns>
      ..............
      <telerik:GridBoundColumn UniqueName="CustomerID" ReadOnly="True" Display="False"
        DataField="CustomerID" />
      <telerik:GridTemplateColumn UniqueName="MasterTemplate" HeaderText="Checkbox column 1">
        <ItemTemplate>
          <asp:CheckBox ID="cbChecked" runat="server" AutoPostBack="True" OnCheckedChanged="CheckChanged">
          </asp:CheckBox>
        </ItemTemplate>
      </telerik:GridTemplateColumn>
      ..............
    </Columns>
    <DetailTables>
      <telerik:GridTableView DataMember="Customers1" PageSize="3" AllowPaging="True">
        <Columns>
          ...................
          <telerik:GridBoundColumn UniqueName="CustomerID" ReadOnly="True" Display="False"
            DataField="CustomerID" />
          <telerik:GridTemplateColumn UniqueName="Child1Template" HeaderText="Checkbox column 2">
            <ItemTemplate>
              <asp:CheckBox ID="cbChecked" runat="server" AutoPostBack="True" OnCheckedChanged="CheckChanged">
              </asp:CheckBox>
            </ItemTemplate>
          </telerik:GridTemplateColumn>
          ....................
        </Columns>
        <DetailTables>
          <telerik:GridTableView DataMember="Customers2" PageSize="3" AllowPaging="True">
            <Columns>
              .....................
              <telerik:GridBoundColumn UniqueName="CustomerID" ReadOnly="True" Display="False"
                DataField="CustomerID" />
              <telerik:GridTemplateColumn UniqueName="Child2Template" HeaderText="Checkbox column 3">
                <ItemTemplate>
                  <asp:CheckBox ID="cbChecked" runat="server" AutoPostBack="True" OnCheckedChanged="CheckChanged">
                  </asp:CheckBox>
                </ItemTemplate>
              </telerik:GridTemplateColumn>
              ......................
            </Columns>
          </telerik:GridTableView>
        </DetailTables>
      </telerik:GridTableView>
    </DetailTables>
  </MasterTableView>
</telerik:RadGrid>
````
````C#
protected void CheckChanged(Object sender, System.EventArgs e)
{
    CheckBox box = (CheckBox)sender;
    GridDataItem item = (GridDataItem)box.NamingContainer;
    Hashtable target = null;

    if (item.OwnerTableView.DataMember == "Customers")
    {
        target = CustomersChecked;
    }
    else if (item.OwnerTableView.DataMember == "Customers1")
    {
        target = Customers1Checked;
    }
    else
    {
        target = Customers2Checked;
    }

    if (box.Checked)
    {
        target[item["CustomerID"].Text] = true;
    }
    else
    {
        target[item["CustomerID"].Text] = null;
    }
}

//. . .

private Hashtable CustomersChecked
{
    get
    {
        object res = ViewState["_cc"];
        if (res == null)
        {
            res = new Hashtable();
            ViewState["_cc"] = res;
        }

        return (Hashtable)res;
    }
}

private Hashtable Customers1Checked
{
    get
    {
        object res = ViewState["_cc1"];
        if (res == null)
        {
            res = new Hashtable();
            ViewState["_cc1"] = res;
        }

        return (Hashtable)res;
    }
}

private Hashtable Customers2Checked
{
    get
    {
        object res = ViewState["_cc2"];
        if (res == null)
        {
            res = new Hashtable();
            ViewState["_cc2"] = res;
        }

        return (Hashtable)res;
    }
}
private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem item = e.Item as GridDataItem;
        CheckBox box = (CheckBox)item.FindControl("cbChecked");
        object isChecked = null;
        if (item.OwnerTableView.DataMember == "Customers")
        {
            isChecked = CustomersChecked[item["CustomerID"].Text];
        }
        if (item.OwnerTableView.DataMember == "Customers1")
        {
            isChecked = Customers1Checked[item["CustomerID"].Text];
        }
        if (item.OwnerTableView.DataMember == "Customers2")
        {
            isChecked = Customers2Checked[item["CustomerID"].Text];
        }
        if (isChecked != null)
        {
            box.Checked = (bool)isChecked == true;
        }
    }
}

````
````VB
Private ReadOnly Property CustomersChecked As Hashtable
    Get
        Dim res As Object = ViewState("_cc")
        If (res Is Nothing) Then
            res = New Hashtable
            ViewState("_cc") = res
        End If
        Return CType(res, Hashtable)
    End Get
End Property

Private ReadOnly Property Customers1Checked As Hashtable
    Get
        Dim res As Object = ViewState("_cc1")
        If (res Is Nothing) Then
            res = New Hashtable
            ViewState("_cc1") = res
        End If
        Return CType(res, Hashtable)
    End Get
End Property

Private ReadOnly Property Customers2Checked As Hashtable
    Get
        Dim res As Object = ViewState("_cc2")
        If (res Is Nothing) Then
            res = New Hashtable
            ViewState("_cc2") = res
        End If
        Return CType(res, Hashtable)
    End Get
End Property

Protected Sub CheckChanged(ByVal sender As Object, ByVal e As System.EventArgs)
    Dim box As CheckBox = CType(sender, CheckBox)
    Dim item As GridDataItem = CType(box.NamingContainer, GridDataItem)
    Dim target As Hashtable = Nothing
    If (item.OwnerTableView.DataMember = "Customers") Then
        target = CustomersChecked
    ElseIf (item.OwnerTableView.DataMember = "Customers1") Then
        target = Customers1Checked
    Else
        target = Customers2Checked
    End If
    If box.Checked Then
        target(item("CustomerID").Text) = True
    Else
        target(item("CustomerID").Text) = Nothing
    End If
End Sub
Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound

    If TypeOf e.Item Is GridDataItem Then
        Dim item As GridDataItem = CType(ConversionHelpers.AsWorkaround(e.Item, GetType(GridDataItem)), GridDataItem)
        Dim box As CheckBox = CType(item.FindControl("cbChecked"), CheckBox)
        Dim isChecked As Object = Nothing

        If item.OwnerTableView.DataMember = "Customers" Then
            isChecked = CustomersChecked(item("CustomerID").Text)
        End If
        If item.OwnerTableView.DataMember = "Customers1" Then
            isChecked = Customers1Checked(item("CustomerID").Text)
        End If
        If item.OwnerTableView.DataMember = "Customers2" Then
            isChecked = Customers2Checked(item("CustomerID").Text)
        End If

        If Not (isChecked Is Nothing) Then
            box.Checked = CType(isChecked, Boolean) = True
        End If

    End If
End Sub
````



