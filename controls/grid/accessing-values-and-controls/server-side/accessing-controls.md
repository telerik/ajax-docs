---
title: Accessing Controls
page_title: Accessing Controls Server-Side - RadGrid | Telerik UI for ASP.NET AJAX
description: Accessing Controls in RadGrid
slug: grid/accessing-values-and-controls/server-side/accessing-controls
published: True
position: 4
---

# Accessing Controls in RadGrid

## Accessing Controls of built-in columns

Grid markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" OnItemDataBound="RadGrid1_ItemDataBound">
    <ClientSettings>
        <Selecting AllowRowSelect="true" />
    </ClientSettings>
    <MasterTableView AutoGenerateColumns="false">
        <Columns>
            <telerik:GridNumericColumn UniqueName="NumericCol" DataField="Freight"></telerik:GridNumericColumn>
            <telerik:GridButtonColumn UniqueName="ButtonCol" Text="Button" ButtonType="FontIconButton" />
            <telerik:GridCheckBoxColumn UniqueName="CheckBoxCol" DataField="IsChecked" />
            <telerik:GridDateTimeColumn UniqueName="DateTimeCol" DataField="OrderDate" />
            <telerik:GridDropDownColumn UniqueName="DropDownCol" DataField="ShipName" ListTextField="ShipName" ListDataMember="ShipName" />
            <telerik:GridHyperLinkColumn UniqueName="HyperLinkCol" DataNavigateUrlFields="ShipName" DataTextField="ShipName" />
            <telerik:GridEditCommandColumn UniqueName="EditCommandCol" />
            <telerik:GridClientSelectColumn UniqueName="ClientSelectCol" />
            <telerik:GridExpandColumn UniqueName="ExpandCol" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

Code behind

````C#
    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
    {
        if (e.Item.IsInEditMode)
        {
            // Controls that are only available in Edit Mode

            GridEditableItem editItem = (GridEditableItem)e.Item;

            RadNumericTextBox rNumericTextBox = editItem["NumericCol"].Controls[0] as RadNumericTextBox;

            // Depending on the PickerType property of the Column, the GridDateColumn may render different controls, DatePicker, TimePicker or DateTimePicker
            RadDatePicker rDatePicker = editItem["DateTimeCol"].Controls[0] as RadDatePicker;
            RadTimePicker rTimePicker = editItem["DateTimeCol"].Controls[0] as RadTimePicker;
            RadDateTimePicker rDateTimePicker = editItem["DateTimeCol"].Controls[0] as RadDateTimePicker;

            //Depending on the DropDownControlType property of the Column, the GridDropDownColumn may render DropDownList or RadComboBox controls
            DropDownList ddl = editItem["DropDownCol"].Controls[0] as DropDownList;
            RadComboBox rComboBox = editItem["DropDownCol"].Controls[0] as RadComboBox;

            CheckBox chkBox = editItem["CheckBoxCol"].Controls[0] as CheckBox;
        }
        else if (e.Item is GridDataItem)
        {

            // Controls that are only available in Display Mode (DataItem)
            
            GridDataItem item = (GridDataItem)e.Item;

            ElasticButton expandBtn = item["ExpandCol"].Controls[0] as ElasticButton;
            ElasticButton editCommandButton = item["EditCommandCol"].Controls[0] as ElasticButton;
            ElasticButton buttonColButton = item["ButtonCol"].Controls[0] as ElasticButton;
            HyperLink hyperLink = item["HyperLinkCol"].Controls[0] as HyperLink;
            CheckBox chkbox = item["ClientSelectCol"].Controls[0] as CheckBox;
            CheckBox chkbox2 = item["CheckBoxCol"].Controls[0] as CheckBox;
        }
    }
````
````VB
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)

    If e.Item.IsInEditMode Then

        'Controls that are only available in Edit Mode

        Dim editItem As GridEditableItem = CType(e.Item, GridEditableItem)

        Dim rNumericTextBox As RadNumericTextBox = TryCast(editItem("NumericCol").Controls(0), RadNumericTextBox)
        
        'Depending on the PickerType property of the Column, the GridDateColumn may render different controls, DatePicker, TimePicker or DateTimePicker
        Dim rDatePicker As RadDatePicker = TryCast(editItem("DateTimeCol").Controls(0), RadDatePicker)
        Dim rTimePicker As RadTimePicker = TryCast(editItem("DateTimeCol").Controls(0), RadTimePicker)
        Dim rDateTimePicker As RadDateTimePicker = TryCast(editItem("DateTimeCol").Controls(0), RadDateTimePicker)
        
        'Depending on the DropDownControlType property of the Column, the GridDropDownColumn may render DropDownList or RadComboBox controls
        Dim ddl As DropDownList = TryCast(editItem("DropDownCol").Controls(0), DropDownList)
        Dim rComboBox As RadComboBox = TryCast(editItem("DropDownCol").Controls(0), RadComboBox)
        
        Dim chkBox As CheckBox = TryCast(editItem("CheckBoxCol").Controls(0), CheckBox)
    ElseIf TypeOf e.Item Is GridDataItem Then

        'Controls that are only available in Display Mode (DataItems)

        Dim item As GridDataItem = CType(e.Item, GridDataItem)
        
        Dim expandBtn As ElasticButton = TryCast(item("ExpandCol").Controls(0), ElasticButton)
        Dim editCommandButton As ElasticButton = TryCast(item("EditCommandCol").Controls(0), ElasticButton)
        Dim buttonColButton As ElasticButton = TryCast(item("ButtonCol").Controls(0), ElasticButton)

        Dim hyperLink As HyperLink = TryCast(item("HyperLinkCol").Controls(0), HyperLink)

        Dim chkbox As CheckBox = TryCast(item("ClientSelectCol").Controls(0), CheckBox)
        Dim chkbox2 As CheckBox = TryCast(item("CheckBoxCol").Controls(0), CheckBox)
    End If
End Sub
````
 
## Accessing Controls in Template Column

While accessing cells with Template columns remains the same, you could use a little different approach to get the controls in the cell. For example, to access a TextBox declared in the ItemTemplate of the column:

````C#
TableCell cell = dataItem["ColumnUniqueName"];
TextBox textBox = dataItem.FindControl("TextBoxID") as TextBox;
````
````VB
Dim cell As TableCell = dataItem("ColumnUniqueName")
Dim textBox As TextBox = CType(dataItem.FindControl("TextBoxID"), TextBox)
````

## Accessing Controls in Edit/Insert Mode

When editing or inserting a grid item, you could access and modify the controls generated in the editable item.



````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
       GridEditableItem editableItem = e.Item as GridEditableItem;
       // execute custom logic
    }
}
````
````VB
Protected Sub RadGrid1_ItemDataBound(sender As Object, e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        Dim editableItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
        ' execute custom logic
    End If
End Sub
````


However, you will need to use a different approach corresponding to the chosen **EditFormType**.

* **AutoGenerated:**



````C#
TextBox textBox = editableItem["ColumnUniqueName"].Controls[0] as TextBox;
````
````VB
Dim textBox As TextBox = CType(editableItem("ColumnUniqueName").Controls(0), TextBox)
````


* **Template:**



````C#
TextBox textBox = editableItem.FindControl("TextBox1") as TextBox;
````
````VB
Dim textBox As TextBox = CType(editableItem.FindControl("TextBox1"), TextBox)
````


* **WebUserControl:**



````C#
UserControl userControl = editableItem.FindControl(GridEditFormItem.EditFormUserControlID) as UserControl;
TextBox textBox = userControl.FindControl("TextBox1") as TextBox;
````
````VB
Dim userControl As UserControl = CType(editableItem.FindControl(GridEditFormItem.EditFormUserControlID), UserControl)
Dim textBox As TextBox = CType(userControl.FindControl("TextBox1"), TextBox)
````


>caution  **InPlace** EditMode is supported only for an **AutoGenerated** EditFormType. In this case, the editable item is of type **GridDataItem** or **GridDataInsertItem** , rather than **GridEditFormItem** and **GridEditFormInsertItem** as usual.
>

## Accessing Controls in Batch Edit Mode

Essentially, **Batch editing** is a bit different from the other Edit modes. It is mainly a client-side functionality and in this sense, it would be reasonable to implement javascript approaches when accessing the individual elements generated in the cells. This can be achieved using the client-side event handlers provided by RadGrid regarding its **Batch editing** feature:
[OnBatchEditOpened Client-Side Event]({%slug grid/client-side-programming/events/onbatcheditopened%})

Let's take for example the GridDateTime column of a RadGrid with 10 items per page. Unlike the other Edit modes, there are not **10 different RadDatePicker** controls generated to edit each of the records, but there is **only 1 picker** loaded on the server, which contributes for ideal performance and rendering optimization. If you access the generated picker on code-behind and apply some properties, e.g. **FocusedDate**, the setting will be applied to all the picker elements of the column.

>caption How to access the built-in column editor

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    GridTableView masterTable = ((RadGrid)sender).MasterTableView;
    GridDateTimeColumnEditor editor = masterTable.GetBatchColumnEditor("OrderDate") as GridDateTimeColumnEditor;
    RadDatePicker picker = editor.PickerControl;
    picker.FocusedDate = new DateTime(1990, 3, 3);
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs)
	Dim masterTable As GridTableView = DirectCast(sender, RadGrid).MasterTableView
	Dim editor As GridDateTimeColumnEditor = TryCast(masterTable.GetBatchColumnEditor("OrderDate"), GridDateTimeColumnEditor)
	Dim picker As RadDatePicker = editor.PickerControl
	picker.FocusedDate = New DateTime(1990, 3, 3)
End Sub
````

>caption How to access custom controls in a template column

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
	RadComboBox combo = ((sender as RadGrid).MasterTableView.GetBatchEditorContainer("CategoryID").FindControl("rcbCategory") as RadComboBox);
	combo.EnableLoadOnDemand = true;
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs) Handles RadGrid1.PreRender
	Dim combo As RadComboBox = DirectCast(DirectCast(sender, RadGrid).MasterTableView.GetBatchEditorContainer("CategoryID").FindControl("rcbCategory"), RadComboBox)
	combo.EnableLoadOnDemand = True
End Sub
````


Read more in the [Batch editing mode]({%slug grid/data-editing/edit-mode/batch-editing/overview%}) article.

## See Also
 
- [Accessing Values and Controls - Overview]({%slug grid/accessing-values-and-controls/overview %})
- [Accessing RadGrid]({%slug grid/accessing-values-and-controls/server-side/accessing-radgrid %})
- [Accessing Tables]({%slug grid/accessing-values-and-controls/server-side/accessing-tables %})
- [Accessing Items]({%slug grid/accessing-values-and-controls/server-side/accessing-items %})
- [Accessing Cells]({%slug grid/accessing-values-and-controls/server-side/accessing-cells %})

