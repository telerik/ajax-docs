---
title: Page size is not changed to 10
description: Page size is not changed to 10. Check it now!
type: how-to
page_title: Page size is not changed to 10
slug: datapager-page-size-is-not-changed-to-10
res_type: kb
---


**PROBLEM**

RadDataPager with enabled SEO paging does not change the page size to 10 when its PageSize property is set.

**DESCRIPTION**

The default value of the PageSize property is 10 and if this is the value chosen by the end user in the dropdown, it will not be added to the querystring in order to preserve backwards compatibility. This is noted at the end of the [SEO Paging article](https://docs.telerik.com/devtools/aspnet-ajax/controls/datapager/seo-paging/overview).

The PageSize property, however, will be parsed on the server when the GET request is processed, and since there is no data for a different page size, the control will use the value provided by the developer (for example, 15).

**SOLUTION**

There are two possible solutions:

*  Remove the `PageSize` property and **use** its **default value** of **10**, if possible for your requirements.
*  Remove the **"10" item** from the dropdown so the user cannot click it. An example is available below.

```ASP.NET
<telerik:RadListView ID="RadListView1" Width="97%" AllowPaging="True" runat="server"
    ItemPlaceholderID="ProductsHolder">
    <LayoutTemplate>
        <asp:Panel ID="ProductsHolder" runat="server">
        </asp:Panel>
        <telerik:RadDataPager ID="RadDataPager1" runat="server" PagedControlID="RadListView1" RenderMode="Lightweight"
            PageSize="15" AllowSEOPaging="true">
            <Fields>
                <telerik:RadDataPagerButtonField FieldType="FirstPrev"></telerik:RadDataPagerButtonField>
                <telerik:RadDataPagerButtonField FieldType="Numeric" PageButtonCount="4"></telerik:RadDataPagerButtonField>
                <telerik:RadDataPagerButtonField FieldType="NextLast"></telerik:RadDataPagerButtonField>
                <telerik:RadDataPagerPageSizeField PageSizeComboWidth="60" PageSizeText="Page size: "></telerik:RadDataPagerPageSizeField>
            </Fields>
            <ClientEvents OnDataPagerCreated="OnDataPagerCreated" />
        </telerik:RadDataPager>
    </LayoutTemplate>
    <ItemTemplate>
        <div style="float: left; border: 1px solid red;">
            <%# Eval("someField") %>
        </div>
    </ItemTemplate>
</telerik:RadListView>
<script>
    function OnDataPagerCreated(sender, args) {
        var combo = $telerik.$(sender.get_element()).find(".RadComboBox").first();
        if (combo && combo.length > 0) {
            combo = combo[0].control;
            combo.trackChanges();
            combo.get_items().remove(combo.findItemByText("10"));
            combo.commitChanges();
        }
    }
</script>
```


```C#
protected void rlvVehicles_NeedDataSource(object sender, RadListViewNeedDataSourceEventArgs e)
{
    (RadListView)sender.DataSource = GetData();
}

protected DataTable GetData()
{
    DataTable tbl = new DataTable();
    tbl.Columns.Add(new DataColumn("someField"));
    tbl.Columns.Add(new DataColumn("OtherField"));
    tbl.Columns.Add(new DataColumn("ID"));
    tbl.Columns.Add(new DataColumn("FourthColumn"));

    for (var index = 1; index <= 100; index++)
        tbl.Rows.Add(new object[] { index, index, index, index });

    return tbl;
}
```
```VB
Protected Sub rlvVehicles_NeedDataSource(sender As Object, e As RadListViewNeedDataSourceEventArgs) Handles RadListView1.NeedDataSource
    DirectCast(sender, RadListView).DataSource = GetData()
End Sub
 
Protected Function GetData() As DataTable
    Dim tbl As New DataTable()
    tbl.Columns.Add(New DataColumn("someField"))
    tbl.Columns.Add(New DataColumn("OtherField"))
    tbl.Columns.Add(New DataColumn("ID"))
    tbl.Columns.Add(New DataColumn("FourthColumn"))
 
    For index = 1 To 100
        tbl.Rows.Add(New Object() {index, index, index, index})
    Next
 
    Return tbl
End Function
```




