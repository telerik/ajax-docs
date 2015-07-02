---
title: Telerik.Web.UI.GridClientDeleteColumn
page_title: Telerik.Web.UI.GridClientDeleteColumn
description: Telerik.Web.UI.GridClientDeleteColumn
---

# Telerik.Web.UI.GridClientDeleteColumn

A special type of GridButtonColumn, including a delete buttons in each row. It
            provides the functionality of erasing records client-side, without making a round trip
            to the server.

#### Remarks
This optimizes the performance and the source data is automatically refreshed
                on the subsequent post to the server. The user experience is improved because the
                delete action is done client-side and the table presentation is updated
                immediately.Its ConfirmTextproperty can be assigned like with the default
                GridButtonColumn showing a dialog which allows the user to cancel the
                action.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridColumn
* Telerik.Web.UI.GridButtonColumn
* Telerik.Web.UI.GridClientDeleteColumn

## Properties

###  Selectable `Boolean`

Gets the value determining if the column is selectable.

###  Text `String`

Gets or sets a value indicating the text that will be shown for a button.

###  ImageUrl `String`

Gets or sets a value indicating the URL for the image that will be used in a
            Image button.  should be set to
            ImageButton.

###  Selectable `Boolean`

Gets the value determining if the column is selectable.

###  ConfirmTitle `String`

Gets or sets the title that will be shown on the RadWindow confirmation dialog when a button
            in this column is clicked.

###  ButtonType `GridButtonColumnType`

Gets or sets a value indicating the type of the button that will be rendered. The
            type should be one of the specified by the 
            enumeration.

#### Remarks
LinkButtonRenders a standard hyperlink button.PushButtonRenders a standard button.ImageButtonRenders an image that acts like a
            button.

###  ButtonCssClass `String`

Gets or sets the CssClass of the button

###  ConfirmDialogType `GridConfirmDialogType`

Gets or sets what kind of confirm dialog will be used in a .

###  ConfirmDialogWidth `Unit`

Gets or sets the width of the Confirm Dialog (if it is a RadWindow)

###  ConfirmDialogHeight `Unit`

Gets or sets the height of the Confirm Dialog (if it is a RadWindow)

###  CommandName `String`

Gets or sets a value defining the name of the command that will be fired when a
            button in this column is clicked.

#### Remarks
Fired By controls within DataItems - showing and
            editing dataCancelCommandNameRepresents the Cancel command name. Fires RadGrid.CancelCommand
            event and sets Item.Edit to false for the parent
            Item.DeleteCommandNameRepresents the Delete command name. Fires RadGrid.DeleteCommand
            event. Under .Net 2.0 performs automatic delete operation and then sets
            Item.Edit to false.UpdateCommandNameRepresents the Update command name. Fires RadGrid.UpdateCommand
            event. Under .Net 2.0 performs automatic update operation and then sets
            Item.Edit to false.EditCommandNameRepresents the Edit command name. Sets Item.Edit to
            true.SelectCommandNameRepresents the Select command name. Sets Item.Selected to
            true.DeselectCommandNameRepresents the Deselect command name. Sets Item.Selected to
            false.Can be fired by controls within any ItemInitInsertCommandNameBy default grid renders an image button in the CommandItem. Opens
            the insert item.PerformInsertCommandNameFires RadGrid.InsertCommand event. Under .Net 2.0 Perfoms
            automatic insert operation and closes the insert item.RebindGridCommandNameBy default grid renders an image button in the CommandItem. Forces
            RadGrid.RebindSortCommandNameRepresents the Sort command name. By default it is fired by image buttons in the
            header item when Sorting is enabled. The argument for the SortCommand
            must be the DataField name for the DataField to be
            sorted.

###  CommandArgument `String`

Gets or sets an optional parameter passed to the Command event along with the
            associated
            CommandName.

###  DataTextField `String`

Gets or sets a value from the specified datasource field. This value will then be
            displayed in the GridBoundColumn.

#### Remarks
Use the DataTextField property to specify the field name
                from the data source to bind to the
                Text property of the
                buttons in the
                GridButtonColumn object.
                Binding the column to a field instead of directly setting the Text
                property allows you to display different captions for the buttons in the
                GridButtonColumn by using
                the values in the specified field.Tip: This property is most
                often used in combination with
                
                DataTextFormatString Property.

###  DataTextFormatString `String`

Gets or sets the string that specifies the display format for the caption in each
            button.

#### Remarks
Use the DataTextFormatString property to provide a custom
                display format for the caption of the buttons in the
                GridButtonColumn.Note: The entire
                string must be enclosed in braces to indicate that it is a format string and not a
                literal string. Any text outside the braces is displayed as literal text.

###  Text `String`

Gets or sets a value indicating the text that will be shown for a button.

###  ImageUrl `String`

Gets or sets a value indicating the URL for the image that will be used in a
            Image button.  should be set to
            ImageButton.

###  ConfirmText `String`

Gets or sets the text that will be shown on the confirmation dialog when a button
            in this column is clicked. The prompt is automatically enabled when this property is
            set.

###  ConfirmTextFormatString `String`

Gets or sets a string, specifying the FormatString of the ConfirmText.

###  ConfirmTextFields `String`

Gets or sets a string, representing a comma-separated enumeration of DataFields
            from the data source, which will be applied to the formatting specified in the ConfirmTextFormatString property.

###  Groupable `Boolean`

###  GroupByExpression `String`

###  IsEditable `Boolean`

Gets the status of  property.

###  ShowInEditForm `Boolean`

If the corresponding  is in edit mode
                     specifies whether this column will
                    render an Enabled=true button control, when the corresponding item is edit
                    mode.

###  CurrentFilterFunction `GridKnownFunction`

###  AndCurrentFilterFunction `GridKnownFunction`

###  CurrentFilterValue `String`

###  AndCurrentFilterValue `String`

###  AutoPostBackOnFilter `Boolean`

###  FilterControlAltText `String`

###  FilterControlToolTip `String`

###  FilterControlWidth `Unit`

###  FilterDelay `Nullable`1`

###  FilterImageToolTip `String`

###  FilterImageUrl `String`

###  FilterListOptions `GridFilterListOptions`

###  ShowFilterIcon `Boolean`

###  ShowSortIcon `Boolean`

###  SortAscImageUrl `String`

###  SortDescImageUrl `String`

###  SortedBackColor `Color`

###  SortExpression `String`

###  HeaderButtonType `GridButtonColumnType`

###  HeaderTooltip `String`

Gets or sets the header tooltip of the column.

###  HeaderAbbr `String`

Gets or sets the column cell 'abbr' attribute.

###  HeaderAxis `String`

Gets or sets the column cell 'axis' attribute.

###  SortedBackColor `Color`

Gets or sets the color of a cell which is sorted.

###  CurrentFilterValue `String`

Gets or sets a value of the currently applied filter.

###  AndCurrentFilterValue `String`

Gets or sets a value of the currently applied second filter condition value.

###  Selected `Boolean`

Indicates whether all column cells have been selected

###  Selectable `Boolean`

Gets the value determining if the column is selectable.

###  Sortable `Boolean`

Should override if sorting will be disabled

###  CurrentFilterFunction `GridKnownFunction`

Gets or sets the current function used for filtering.

###  AndCurrentFilterFunction `GridKnownFunction`

Gets or sets the current second filter condition function.

###  FilterDelay `Nullable`1`

Gets or sets the filter delay which determines after how many milliseconds a 
            filtering will occur after a filter value have changed.

###  Exportable `Boolean`

Determines whether the given column will be shown in the exported file

###  ShowFilterIcon `Boolean`

Gets or sets if the filter icon in the  will be visible.

###  FilterListOptions `GridFilterListOptions`

Gets or sets the value indincating which of the filter functions should be
            available for that column. For more information see
             enumaration.

###  AutoPostBackOnFilter `Boolean`

Gets or sets a value indicating whether the grid should automatically postback,
            when the value in the filter text-box changes, and the the focus moves to another
            element.

###  FilterImageToolTip `String`

Gets or sets the filter image tool tip.

###  FilterControlToolTip `String`

Gets or sets the filter control ToolTip property value.

###  FilterImageUrl `String`

Gets or sets a string representing the URL to the image used in the filtering
            box.

###  SortAscImageUrl `String`

Gets or sets a string representing the URL to the image used for sorting in
            ascending mode.

###  SortDescImageUrl `String`

Gets or sets a string representing the URL to the image used for sorting in
            descending mode.

###  DataTypeName `String`

Gets the string representation of the DataType property of the
            column, needed for the client-side grid instance.

###  ListOfFilterValues `String[]`

Access the valus passed from the ListBox used for CheckList in the filter.

###  FilterTemplate `ITemplate`

Gets or sets the template, which will be rendered in the filter item cell of the column.

###  RowSpan `Int32`

For internal use. Gets or sets the row span of the grid column.

###  FooterStyle `TableItemStyle`

Style of the cell in the footer item of the grid, corresponding to the column.

###  FooterText `String`

Use the FooterText property to specify your own or determine the current
            text for the footer section of the column.

###  HeaderImageUrl `String`

Gets or sets the URL of an image in the cell in the header item of the grid
            current column. You can use a relative or an absolute URL.

###  HeaderStyle `TableItemStyle`

Style of the cell in the header item of the grid, corresponding to the column.

###  HeaderText `String`

Use the HeaderText property to specify your own or determine the current
            text for the header section of the column.

###  ItemStyle `TableItemStyle`

Style of the cells, corresponding to the column.

###  Owner `GridTableView`

Gets the instance of the GridTableVeiw wich owns this column instance.

###  SortExpression `String`

The string representing a filed-name from the DataSource that should be used when grid sorts by this column. For example:
            'EmployeeName'

###  GroupByExpression `String`

The group-expression that should be used when grid is grouping-by this column. If
            not set explicitly, RadGrid will generate a group expression based on the DataField of
            the column (if available), using the 
            method.The grouping can be turned on/off for columns like GridBoundColumn using
             property.For more information about the Group-By expressions and their syntax, see
             class.

###  ShowSortIcon `Boolean`

Get or Sets a value indicating whether a sort icon should appear next to the
            header button, when a column is sorted.

###  Visible `Boolean`

Gets or sets a value indicating if the column and all corresponding cells would be rendered.

###  Display `Boolean`

Gets or sets a value indicating whether the cells corresponding to a column would be rendered with a 'display:none' style attribute (end-user-not-visible).
            To completely prevent cells from rendering, set the  property to false, instead of the Display property.

###  OwnerID `GridTableView`

Gets the value of the ClientID property of the GridTableView that owns this column. This property value is used by grid's client object

###  OwnerGridID `GridTableView`

Gets the value of the ClientID property of the RadGrid instance that owns this column. This property value is used by grid's client object

###  Resizable `Boolean`

Gets or sets a value indicating whether the column can be resized client-side.
            You can use this property, by setting it to false, to disable resizing for a particular
            column, while preserving this functionality for all the other columns.

###  Reorderable `Boolean`

Gets or sets a value indicating whether the column can be reordered client-side.

###  Groupable `Boolean`

Gets or sets a value indicating whether you will be able to group
            Telerik RadGrid by that column. By default this property is
            true.

#### Remarks
See Telerik RadGrid manual for details about using grouping. If
            Groupable is false the column header cannot be dragged to the
            GroupPanel.

###  ColumnType `String`

Gets the string representation of the type-name of this instance. The value is
            used by RadGrid to determine the type of the columns persisted into the ViewState, when
            recreating the grid after postback. The value is also used by the grid client-side
            object. This property is read only.

###  HeaderButtonType `GridHeaderButtonType`

Gets or sets the button type of the button rendered in the header item, used
                for sorting. The possible values that this property accepts are:Telerik.Web.UI.GridHeaderButtonType.LinkButton
                Telerik.Web.UI.GridHeaderButtonType.PushButton
                Telerik.Web.UI.GridHeaderButtonType.TextButton

###  OrderIndex `Int32`

Gets or sets the order index of column in the collection of
                . Use
                 method for reordering the columns.

#### Remarks
We recommend using this property only for getting the order index for a
                    specific column instead of setting it. Use
                     method for reordering columns.
                Note that changing the column order index will change the order of the cells
                in the grid items, after the grid is rebound.
                    The value of the property would not affect the order of the column in the
                     collection.

###  IsEditable `Boolean`

This property is supposed for developers of new grid columns. It gets whether
                a column is currently ReadOnly. The ReadOnly property determines whether a column
                will be editable in edit mode. A column for which the ReadOnly property is true
                will not be present in the automatically generated edit form.

###  EditFormColumnIndex `Int32`

Specifies the vertical collumn number where this column will appear when
                using EditForms editing mode and the form is autogenerated. See the remarks for
                details.

#### Remarks
A practicle example of using this property is to deterimine the number of
                columns rendered in the edit form. If there will be only one column in the rendered
                edit form, when we retrieve the value of this property for a column, as shown in
                the code below:protected void RadGrid1_PreRender(object sender, EventArgs e)    {int columnIndex = RadGrid1.MasterTableView.Columns[3].EditFormColumnIndex;    }it will be equal to 0, meaning the the column belongs to the first group of
                columns in the edit form.

###  UniqueName `String`

Each column in Telerik RadGrid has an UniqueName
            property (string). This property is assigned automatically by the designer (or the
            first time you want to access the columns if they are built dynamically).

#### Remarks
You can also set it explicitly, if you prefer. However, the automatic
                generation handles most of the cases. For example a
                GridBoundColumn with DataField 'ContactName'
                would generate an UniqueName of 'ContactName'.Additionally, there may be occasions when you will want to set the UniqueName
                explicitly. You can do so simply by specifying the custom name that you want to
                choose:<radG:GridTemplateColumn UniqueName="ColumnUniqueName"></radG:GridTemplateColumn>

###  EditFormHeaderTextFormat `String`

String that formats the HeaderText when the column is displayed in an edit form

###  DataType `Type`

Gets or sets (see the Remarks) the type of the data from the DataField as it
                was set in the DataSource.

#### Remarks
The DataType property supports the following base .NET Framework data
                types:BooleanByteCharDateTimeDecimalDoubleInt16Int32Int64SByteSingleStringTimeSpanUInt16UInt32UInt64

###  FilterControlWidth `Unit`

Use this property to set width to the filtering control (depending on the column type, this may be a normal textbox, RadNumericTextBox, RadDatePicker, etc.)

###  FilterControlAltText `String`

Gets or Sets the text value which should be added to alt attribute of the filter control

###  FilterCheckListWebServiceMethod `String`

Get or Set the Methood from CheckListWebServicePath Web Service defined in the TableView,
            that to be used for getting data for the filter check list

###  FilterCheckListEnableLoadOnDemand `Boolean`

Get or Set if the Filter Check List will load data on demand from server.

## Methods

###  InitializeCell

#### Returns

`System.Void` 

###  Clone

Creates a copy of the current column.

#### Remarks
Note: When implementing/overriding this method be sure to call
            the base member or call CopyBaseProperties to be sure that all base
            properties will be copied accordingly

#### Returns

`Telerik.Web.UI.GridColumn` 

###  Initialize

The Initialize method is inherited by a derived
            GridButtonColumn class. Is is used to reset a column of the derived
            type.

#### Returns

`System.Void` 

###  InitializeCell

After a call to this method the column should add the corresponding button into
            the cell given, regarding the inItem type and column index.Note: This method is called within RadGrid and is not intended
            to be used directly from your code.

#### Returns

`System.Void` 

###  Clone

Returns a copy of the GridButtonColumn.

#### Returns

`Telerik.Web.UI.GridColumn` 

###  InheritanceSafeClone

#### Returns

`Telerik.Web.UI.GridColumn` 

###  Initialize

The Initialize method is inherited by a derived
            GridColumn class. Is is used to reset a column of the derived
            type.

#### Remarks
This method is mainly used to reset properties common for all column types
            derived from GridColumn class.The Initialize method is usually called during data-binding, prior to the
            first row being bound.

#### Returns

`System.Void` 

###  InitializeCell

After a call to this method the column should add the corresponding controls
            (text, labels, input controls) into the cell given, regarding the inItem type and
            column index.Note: This method is called within RadGrid and is not intended
            to be used directly from your code.

#### Returns

`System.Void` 

###  SupportsFiltering

This method should be used in case you develop your own column. It returns true
            if the column supports filtering.

#### Returns

`System.Boolean` 

###  RefreshCurrentFilterValue

Modifies the CurrentFilterFunction and
            CurrentFilterValue properties according to the function given and the
            corresponding filter text-box control in the filtering item.

#### Returns

`System.Void` 

###  RefreshCurrentFilterValue

Modifies the CurrentFilterValue property according to the
            corresponding selected item in the filter text-box control in the filtering
            item.

#### Returns

`System.Void` 

###  SetCurrentFilterValueToControl

Sets the value of the property CurrentFilterValue as a text on the TextBox control found in the cell

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

#### Returns

`System.Void` 

###  GetCurrentFilterValueFromControl

Gets the value of the Text property of a textbox control found in the cell, used to set the value of the CurrentFilterValue property.

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

#### Returns

`System.String` 

###  EvaluateFilterExpression

Gets a string representing a filter expression, based on the settings of all
            columns that support filtering, with a syntax ready to be used by a
            DataView object

#### Returns

`System.String` 

###  EvaluateFilterExpression

Evaluates the column filter expression based on the , , 
            ,  propeties. It could be used to handle custom 
            filtering and is internally used for determining  FilterExpression value.

#### Returns

`System.String` 

###  SetupFilterControls

Instantiates the filter controls (text-box, image.) in the cell given

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

#### Returns

`System.Void` 

###  GetFilterFunctionsList

Gets a list of filter functions based on the settings of the  property.

#### Parameters

#### options `Telerik.Web.UI.GridFilterListOptions`

#### sourceList `System.Collections.ArrayList`

#### Returns

`System.Collections.ArrayList` 

###  PrepareCell

Prepares the cell of the item given, when grid is rendered.

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

#### item `Telerik.Web.UI.GridItem`

#### Returns

`System.Void` 

###  ToString

#### Returns

`System.String` 

###  ResetCurrentFilterValue

Resets the values of the  and
             properties to their defaults.

#### Returns

`System.Void` 

###  ResetCurrentFilterValue

Resets the values of the ,
            ,  and
             properties to their defaults.

#### Returns

`System.Void` 

###  GetSortExpression

By default returns the SortExpression of the column. If the SortExpression is not set explicitly, it would be calculated, based on the
            DataField of the column.

#### Returns

`System.String` 

###  GetDefaultGroupByExpression

Calculate the default Group-by expression based on the settings of the
            DataField (if available)

#### Remarks
For example, if a column's DataField is ProductType the default group-by expression will be:
            'ProductType Group By ProductType'

#### Returns

`System.String` 

###  Clone

Creates a copy of the current column.

#### Remarks
Note: When implementing/overriding this method be sure to call
            the base member or call CopyBaseProperties to be sure that all base
            properties will be copied accordingly

#### Returns

`Telerik.Web.UI.GridColumn` 

###  IsBoundToFieldName

This method returns true if the column is bound to the specified field
            name.

#### Parameters

#### name `System.String`

The name of the DataField, which will be checked.

#### Returns

`System.Boolean` 

###  CompareTo

#### Returns

`System.Int32` 

###  GetCustomPropertyDataFields

This method should be used in case you develop your own column. It returns the
            full list of DataFields used by the column.
            GridTableView uses this to decide which DataFields
            from the specified DataSource will be inlcuded in case of
            GridTableView.RetrieveAllDataFields is set to
            false.

#### Returns

`System.Collections.IDictionary` 

###  AddSubPropertyFieldInfo

#### Returns

`System.Void` 

