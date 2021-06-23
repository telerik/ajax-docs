---
title: JavaScript error in IE when hovering header row of a RadGrid with svg in it
description: JavaScript error in IE when hovering header row of a RadGrid with svg in it. Check it now!
type: how-to
page_title: JavaScript error in IE when hovering header row of a RadGrid with svg in it
slug: grid-javascript-error-in-ie-when-hovering-header-row-with-svg-in-it
res_type: kb
---


## Problem

`Sys.ArgumentNullException: Value cannot be null. Parameter name: element` error is thrown when you hover over an SVG element inside a HeaderTemplate of a RadGrid in IE

## Description

IE does not consider SVG elements and their children to be DOM elements, but it does fire the mouseover event for the child nodes in the SVG (other browsers don't). The target of those event not being a DOM element breaks some internal logic in the grid that traverses the DOM to get the actual grid element when you move, click and drag elements in the grid around - since the element is not a DOM element, it becomes null at some point and null reference exceptions happen. The exact error comes from argument validation: `Function._validateParams(arguments, [{name: "element", domElement: true}])`

## Solution

You can override the particular grid function that traverses the DOM recursively to get a domElement:

````JavaScript
if (Telerik && Telerik.Web && Telerik.Web.UI && Telerik.Web.UI.RadGrid && Telerik.Web.Browser.ie) {
    Telerik.Web.UI.Grid.GetCurrentElement = function (e) {

        if (!e)
            e = window.event;

        var currentElement;
        if (e.srcElement) {
            currentElement = e.srcElement;
        }
        else {
            currentElement = e.target;
        }
        while (currentElement && currentElement.parentNode) {
            if (Telerik.Web.UI.Grid.IsDomElement(currentElement)) {
                return currentElement;
            }
            currentElement = currentElement.parentNode;
        }
        return null;
    };
}
````

## Reproduction

Here is the simplest reproducible for the error - hover the icon mark in the header

````ASPX
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" OnNeedDataSource="rg1_NeedDataSource">
    <MasterTableView>
        <Columns>
            <telerik:GridTemplateColumn>
                <HeaderTemplate>
                    <asp:Panel runat="server">
                        <input class="b-checkbox-input" id="dgvProcedures_cbxSelectAll" type="checkbox" style="display: none;">
                        <label class="b-checkbox" for="dgvProcedures_cbxSelectAll">
                            <span>
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                        </label>
                    </asp:Panel>
                </HeaderTemplate>
                <ClientItemTemplate>
                <input class="b-checkbox-input" id="dgvProcedures_cbx" type="checkbox" style="display: none;">
                <label class="b-checkbox" for="dgvProcedures_cbx">
                    <span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                </label>
                </ClientItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected DataTable GetDummyData()
{
    DataTable tbl = new DataTable();
    tbl.Columns.Add(new DataColumn("values", typeof(decimal)));
    tbl.Columns.Add(new DataColumn("names", typeof(string)));
    tbl.Columns.Add(new DataColumn("moreData", typeof(int)));
    tbl.Columns.Add(new DataColumn("colors", typeof(string)));
    tbl.Rows.Add(new object[] { 1, "one", 11, "red" });
    tbl.Rows.Add(new object[] { 2, "two", 22, "green" });
    tbl.Rows.Add(new object[] { 3, "three", 33, "blue" });
    tbl.Rows.Add(new object[] { 4, "four", 44, "pink" });
 
    return tbl;
}
 
protected void rg1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = GetDummyData();
}
````

 