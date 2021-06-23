---
title: How to get UniqueName of RadGrid column from controls inside
description: How to get UniqueName of RadGrid column from controls inside. Check it now!
type: how-to
page_title: How to get UniqueName of RadGrid column from controls inside
slug: grid-how-to-get-uniquename-of-radgrid-column-from-controls-inside
res_type: kb
---

## How to

Get the UniqueName of a grid column from DOM elements inside.

Doing this can let you know in which column events occur (e.g., the user clicks, or changes values in form elements).

In turn, you can use this to perform updates to the data source immediately without any postbacks - once you know the user input and the column name, you can call a service that will take the data, validate it, and store it in the database. You can even skip updating the UI because the user input is already there. To this end, the ItemTemplate of the GridTemplate columns is used so the user can immediately edit data.

A more robust example of client-side editing is available through the Batch Editing feature of the grid: [Batch Editing](https://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx).

## Solution

Start from the element that fired the event inside the cell. For example, use its own events/attributes. Then, traverse the DOM (e.g, with jQuery) to get a reference to the grid and the cell. Now you can use the cell index in the &lt;table&gt; to get a reference to the column of the grid.

For example:

````ASPX
<telerik:RadScriptManager runat="server" ID="rsm1">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
    </Scripts>
</telerik:RadScriptManager>
<script>
    var $ = $telerik.$;//get jQuery to use for the DOM traversal
    function sendData(elem) {
        //get the value of the DOM element, can vary depending on the element that fires the event
        var currValue = elem.value;
        console.log(currValue);
        //traverse the DOM to reference the grid and the concrete cell
        //with that, we can get the UniqueName of the column from which the event originats
        var grid = $(elem).parents("div.RadGrid").first()[0].control;
        var cellIndex = $(elem).parents("td").first()[0].cellIndex;
        var columnName = grid.get_masterTableView().get_columns()[cellIndex].get_uniqueName();
        console.log(columnName);
        //we can now use the unique name and the new value to call a service that can update the data source
    }
</script>
<telerik:RadGrid runat="server" ID="rg1" OnNeedDataSource="rg1_NeedDataSource">
    <MasterTableView>
        <Columns>
            <telerik:GridTemplateColumn UniqueName="firstColumn">
                <ItemTemplate>
                    <asp:DropDownList runat="server" ID="firstDdl" onchange="sendData(this)">
                        <asp:ListItem Text="text1" Value="1" />
                        <asp:ListItem Text="text2" Value="2" />
                    </asp:DropDownList>
                </ItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridTemplateColumn UniqueName="secondColumn">
                <ItemTemplate>
                    <asp:DropDownList runat="server" ID="secondDdl" onchange="sendData(this)">
                        <asp:ListItem Text="text1" Value="1" />
                        <asp:ListItem Text="text2" Value="2" />
                    </asp:DropDownList>
                </ItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridTemplateColumn UniqueName="thirdColumn">
                <ItemTemplate>
                    <asp:TextBox runat="server" ID="firstTb" onblur="sendData(this)" />
                </ItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

 