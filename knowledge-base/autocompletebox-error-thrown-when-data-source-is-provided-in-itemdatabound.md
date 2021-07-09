---
title: DataSource not set error thrown when data source is provided in ItemDataBound
description: DataSource not set error thrown when data source is provided in ItemDataBound. Check it now!
type: how-to
page_title: DataSource not set error thrown when data source is provided in ItemDataBound
slug: autocompletebox-error-thrown-when-data-source-is-provided-in-itemdatabound
res_type: kb
---


### PROBLEM

**RadAutoCompleteBox** in the `ItemTemplate` of a data bound container (like a Repeater, RadGrid, or ListView) throws `DataSource not set` when its `DataSource` is provided in the `ItemDataBound` handler.

### DESCRIPTION

Data bound controls call the `.DataBind()` method of their items between the `ItemCreated` and `ItemDataBound` event. This causes the AutoCompleteBox to data bind. Since it has no data source set yet, it throws an exception.

### SOLUTION

You need to **provide non-null data source to the AutoCompleteBox in the ItemCreated** event of the parent control.

To improve performance, you use an empty data source for the initial load, and provide the real data source when the callback from the autocomplete fires.

Here is an example with RadGrid:

markup:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" OnItemCreated="RadGrid1_ItemCreated">
    <MasterTableView>
        <Columns>
            <telerik:GridTemplateColumn>
                <ItemTemplate>
                   <telerik:RadAutoCompleteBox ID="RadAutoCompleteBox1" runat="server"></telerik:RadAutoCompleteBox>
                </ItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    GridDataItem itm = e.Item as GridDataItem;
    if (itm != null)
    {
        string[] ds = Page.IsCallback ? new string[] { "aaa", "bbb", "ccc", "ddd", "sss", } : new string[] { "" };
        (itm.FindControl("RadAutoCompleteBox1") as RadAutoCompleteBox).DataSource  = ds;
    }
}
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = "abcdef";//a bad data source, but it will suffice for the autocomplete example
}
````
````VB
Class SurroundingClass
    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
        Dim itm As GridDataItem = TryCast(e.Item, GridDataItem)

        If itm IsNot Nothing Then
            Dim ds As String() = If(Page.IsCallback, New String() {"aaa", "bbb", "ccc", "ddd", "sss"}, New String() {""})
            (TryCast(itm.FindControl("RadAutoCompleteBox1"), RadAutoCompleteBox)).DataSource = ds
        End If
    End Sub

    Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
        RadGrid1.DataSource = "abcdef" 'a bad data source, but it will suffice for the autocomplete example
    End Sub
End Class
````



