```markdown
---
title: Accessing a Grid Cell Client-Side in UI for ASP.NET AJAX
description: Learn how to access and modify grid cells on the client in UI for ASP.NET AJAX when using server-side data loading.
type: how-to
page_title: How to Access and Update Grid Cell on Client in UI for ASP.NET AJAX
meta_title: Access and Update Grid Cell Client-Side in UI for ASP.NET AJAX
slug: access-grid-cell-client-ui-aspnet-ajax
tags: grid,client-side,findelement,update-cell
res_type: kb
ticketid: 1719565
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Grid for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I need to access and modify a grid cell on the client-side in a [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) when the grid is loaded using server-side data loading. Using `findControl` on a plain HTML element like an `asp:Label` does not work since it lacks a client-side representation. 

This knowledge base article also answers the following questions:
- How to modify individual grid cells on the client in UI for ASP.NET AJAX.
- How to access plain HTML controls in grid templates client-side.
- Why does `findControl` not work for certain controls in RadGrid?

## Solution

To access a grid cell and update its content client-side, use the `findElement` method of the `GridDataItem` object. This method retrieves the DOM element of controls that do not have a client-side wrapper.

1. Add a button to trigger the JavaScript function.
2. Use the `findElement` method to locate the DOM element within each data item.
3. Modify the content of the element as needed.

### Example Implementation

```html
<telerik:RadButton ID="RadButton1" runat="server" Text="Update labels via findElement"
    AutoPostBack="false" OnClientClicked="updateLabels">
</telerik:RadButton>

<script type="text/javascript">
    function updateLabels() {
        var grid = $find("<%= RadGrid1.ClientID %>");
        var masterTable = grid.get_masterTableView();
        var dataItems = masterTable.get_dataItems();

        for (var i = 0; i < dataItems.length; i++) {
            var dataItem = dataItems[i];
            // Use findElement to access the DOM element of the label
            var lbl = dataItem.findElement("lblConnect");
            if (lbl) {
                lbl.innerHTML = "Updated row " + i;
            }
        }
    }
</script>

<telerik:RadGrid ID="RadGrid1" runat="server" Width="800px"
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" HeaderText="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridTemplateColumn HeaderText="Connect" UniqueName="Connect">
                <ItemTemplate>
                    <asp:Label ID="lblConnect" runat="server" Text="Not connected" />
                </ItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
```

### Key Notes:
- Use `findElement` for plain HTML controls like `asp:Label` since `findControl` is only for client-side Telerik RadControls.
- Ensure the ID passed to `findElement` matches the control's ID as declared in the grid's template.
- `findElement` is suitable for server-side data binding scenarios, unlike `get_cell("ColumnUniqueName")`, which works with client-side binding.

## See Also

- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [GridDataItem findElement API](https://www.telerik.com/products/aspnet-ajax/documentation/api/client/telerik.web.ui.griddataitem#findelement)
- [GridDataItem findControl API](https://www.telerik.com/products/aspnet-ajax/documentation/api/client/telerik.web.ui.griddataitem#findcontrol)
```
