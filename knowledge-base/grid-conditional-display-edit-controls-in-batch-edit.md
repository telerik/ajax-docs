---
title: Displaying Different Edit Column Controls Based on Column Value in RadGrid Batch Edit Mode  
description: Solve the problem of conditionally displaying RadComboBox or RadTextBox controls in a RadGrid column based on another column's value in batch edit mode.  
type: how-to  
page_title: Conditional Display of Edit Controls in RadGrid Batch Edit Mode  
meta_title: Conditional Display of Edit Controls in RadGrid Batch Edit Mode  
slug: grid-conditional-display-edit-controls-in-batch-edit  
tags: grid, ui for asp.net ajax, radgrid, edit column, batch edit, radcombobox, radtextbox  
res_type: kb  
---  

## Environment  
<table>  
<tbody>  
<tr>  
<td>Product</td>  
<td>UI for ASP.NET AJAX Grid</td>  
</tr>  
<tr>  
<td>Version</td>  
<td>All</td>  
</tr>  
</tbody>  
</table>  

## Description  

I want to conditionally display either a [RadDropDownList ](https://docs.telerik.com/devtools/aspnet-ajax/controls/dropdownlist/overview) or a [RadTextBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/textbox/overview) in the edit column of a RadGrid using batch edit mode. The control displayed should depend on the value of another column in the same row.  

This knowledge base article also answers the following questions:  
- How to toggle edit controls in a RadGrid based on another column value?  
- How to implement conditional templates in RadGrid batch editing?  
- How to use client-side logic to manage edit templates in Telerik RadGrid?  

## Solution  

To achieve this functionality, use JavaScript and the `OnBatchEditOpening` client-side event. This event allows dynamic visibility control of the RadComboBox or RadTextBox based on the value of another column when a row is edited. Follow these steps:  

1. Add both RadDropDownList and RadTextBox controls in the `EditItemTemplate` of the `GridTemplateColumn`.  
2. Use the `OnBatchEditOpening` client event to check the value of the relevant column and dynamically show or hide the appropriate control.  

Here is an example implementation:  

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="600px" OnNeedDataSource="RadGrid1_NeedDataSource">  
    <MasterTableView AutoGenerateColumns="False" EditMode="Batch" DataKeyNames="OrderID">  
        <Columns>  
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32" HeaderText="OrderID" ReadOnly="True" UniqueName="OrderID"></telerik:GridBoundColumn>  
            <telerik:GridBoundColumn DataField="AnswerTypeId" DataType="System.Int32" HeaderText="AnswerTypeId" ReadOnly="True" UniqueName="AnswerTypeId"></telerik:GridBoundColumn>  
            <telerik:GridTemplateColumn DataField="Answer" HeaderText="Answer" UniqueName="Answer">  
                <ItemTemplate>  
                    <asp:Label runat="server" ID="lblAnswer"><%# Eval("Answer") %></asp:Label>  
                </ItemTemplate>  
                <EditItemTemplate>  
                    <telerik:RadDropDownList runat="server" ID="radCboAnswer1" Width="100px">  
                        <Items>  
                            <telerik:DropDownListItem Text="Option 1" Value="1" />  
                            <telerik:DropDownListItem Text="Option 2" Value="2" />  
                            <telerik:DropDownListItem Text="Option 3" Value="3" />  
                        </Items>  
                    </telerik:RadDropDownList>  
                    <telerik:RadTextBox runat="server" ID="radTxtAnswer1" Width="250px" TextMode="MultiLine" Rows="5" />  
                </EditItemTemplate>  
            </telerik:GridTemplateColumn>  
        </Columns>  
    </MasterTableView>  
    <ClientSettings>  
        <ClientEvents OnBatchEditOpening="onBatchEditOpening" />  
    </ClientSettings>  
</telerik:RadGrid>  
```` 

````Javascript  
function onBatchEditOpening(sender, args) {
    let row = args.get_row();
    let tableView = args.get_tableView();
    let answerTypeCellIndex = tableView.getColumnByUniqueName("AnswerTypeId").get_element().cellIndex;
    let answerTypeValue = row.cells[answerTypeCellIndex].innerText;

    let dropDown = $telerik.findControl(document, "radCboAnswer1");
    let textBox = $telerik.findControl(document, "radTxtAnswer1");

    switch (answerTypeValue) {
        case "Type 1":
        case "Type 3":
        case "Type 5":
            dropDown.set_visible(false);
            textBox.set_visible(true);
            break;
        case "Type 2":
        case "Type 4":
            dropDown.set_visible(true);
            textBox.set_visible(false);
            break;
    }
}
````  

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)  
{  
    (sender as RadGrid).DataSource = OrdersTable();  
}  

private DataTable OrdersTable()  
{  
    DataTable dt = new DataTable();  

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));  
    dt.Columns.Add(new DataColumn("Answer", typeof(string)));  
    dt.Columns.Add(new DataColumn("AnswerTypeId", typeof(string)));  

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };  

    for (int i = 0; i < 5; i++)  
    {  
        int index = i + 1;  

        DataRow row = dt.NewRow();  

        row["OrderID"] = index;  
        row["Answer"] = "Answer" + index;  
        row["AnswerTypeId"] = "497" + index;  

        dt.Rows.Add(row);  
    }  

    return dt;  
}  
````  

This implementation ensures that only the relevant control is visible during editing based on the value of another column.  

## See Also  

- [OnBatchEditOpening](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/client-side-programming/events/onbatcheditopening)  
- [RadComboBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)  
- [RadTextBox Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/textbox/overview)  
