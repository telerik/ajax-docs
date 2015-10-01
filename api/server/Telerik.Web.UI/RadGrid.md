---
title: Telerik.Web.UI.RadGrid
page_title: Telerik.Web.UI.RadGrid
description: Telerik.Web.UI.RadGrid
---

# Telerik.Web.UI.RadGrid

RadGrid control class.

#### Remarks
Set properties of RadGrid as default for the corresponding properties of grid's 
            table views Telerik.Web.UI.GridTableView .
            The best approach to bind RadGrid is to handle its E:Telerik.Web.UI.RadGrid.NeedDataSource event and set the DataSource property 
            there. This way RadGrid will handle automatically operations like paging, sorting, grouping, etc.
            The main table-view can be accessed through P:Telerik.Web.UI.RadGrid.MasterTableView property.
            The group panel and its items can be accessed using GroupPanel property. Note that the group items can be modified only 
            through the P:Telerik.Web.UI.GridTableView.GroupByExpressions properties of each GridTableView.
            Hierarchical grid structure can be implemented adding GridTableView objects to P:Telerik.Web.UI.GridTableView.DetailTables and handling 
            E:Telerik.Web.UI.RadGrid.DetailTableDataBind event, where you should set the DataSource of each bound detail table filtered
            according to the P:Telerik.Web.UI.GridTableView.ParentItem property key values.
            The P:Telerik.Web.UI.RadGrid.Columns of RadGrid property is a reference to the columns of the MasterTableView and is present in RadGrid for 
            compatibility with the DataGrid server control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* System.Web.UI.WebControls.CompositeDataBoundControl
* Telerik.Web.UI.RadCompositeDataBoundControl
* Telerik.Web.UI.GridBaseDataList
* Telerik.Web.UI.RadGrid

## Properties

###  DataSource `Object`

Gets or sets the object from which the Telerik RadGrid control
            retrieves its list of data items.

#### Remarks
You should have in mind, that in case you are using simple data binding (i.e.
                when you are not using NeedDataSource event) the correct approach
                is to call the DataBind() method on the first page load when
                !Page.IsPostBack and after handling some event (sort event for
                example).You will need to assign DataSource and rebind the grid after
                each operation (paging, sorting, editing, etc.) - this copies exactly MS
                DataGrid behavior.

###  DataMember `String`

Gets or sets the name of the list of data that the Telerik RadGrid
            control binds to, in cases where the data source contains more than one distinct list
            of data items.

#### Remarks
Use the DataMember property to specify a member from a multimember data
                    source to bind to the list control. For example, if you have a data source with
                    more than one table specified in the DataSource
                    property, use the DataMember property to specify which table to bind to
                    a data listing control.
                The value of the DataMember property is stored in view state.This property cannot be set by themes or style sheet themes. For more
                information, see ThemeableAttribute and Themes and Skins
                Overview in MSDN.

###  GroupingSettings `GridGroupingSettings`

Gets a reference to the  object that
                    allows you to set the properties of the grouping operation in a
                    Telerik RadGrid control.

#### Remarks
Use the GroupingSettings property to control the settings of
                the grouping operations in a Telerik RadGrid control. This property is
                read-only; however, you can set the properties of the
                GridGroupingSettings object it returns. The properties can be set
                declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridGroupingSettings object (for example,
                    GroupingSettings-ExpandTooltip).Nest a <GroupingSettings> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, GroupingSettings.ExpandTooltip). Common settings
                usually include the tool tips for the sorting controls.

###  Width `Unit`

Gets or sets the width of the Web server control.

###  SortingSettings `GridSortingSettings`

Gets a reference to the  object that
                    allows you to set the properties of the sorting operation in a
                    Telerik RadGrid control.

#### Remarks
Use the SortingSettings property to control the settings of the sorting
                operations in a Telerik RadGrid control. This property is read-only;
                however, you can set the properties of the GridSortingSettings object it returns.
                The properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridSortingSettings object (for example,
                    SortingSettings-SortedAscToolTip).Nest a <SortingSettings> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, SortingSettings.SortedAscToolTip). Common
                settings usually include the tool tips for the sorting controls.

###  HierarchySettings `GridHierarchySettings`

Gets a reference to the  object that
                    allows you to set the properties of the hierarchical
                    Telerik RadGrid control.

#### Remarks
Use the HierarchySettings property to control the settings of the
                hierarchical Telerik RadGrid control. This property is read-only;
                however, you can set the properties of the GridHierarchySettings object it returns.
                The properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridHierarchySettings object (for example,
                    HierarchySettings-CollapseTooltip).Nest a <HierarchySettings> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, HierarchySettings.CollapseTooltip). Common
                settings usually include the tool tips for the hierarchical
                Telerik RadGrid control.

###  ExportSettings `GridExportSettings`

Gets a reference to the  object that
                    allows you to set the properties of the grouping operation in a
                    Telerik RadGrid control.

#### Remarks
Use the ExportSettings property to control the settings of the grouping
                operations in a Telerik RadGrid control. This property is read-only;
                however, you can set the properties of the GridGroupingSettings object it returns.
                The properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridExportSettings object (for example,
                    GroupingSettings-ExpandTooltip).Nest a <GroupingSettings> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, GroupingSettings.ExpandTooltip). Common settings
                usually include the tool tips for the sorting controls.

###  ValidationSettings `GridValidationSettings`

Gets a reference to the  object that
                    allows you to set the properties of the validate operation in a
                    Telerik RadGrid control.

#### Remarks
Use the ValidationSettings property to control the settings of the validate
                operations in a Telerik RadGrid control. This property is read-only;
                however, you can set the properties of the GridValidationSettings object it
                returns. The properties can be set declaratively using one of the following
                methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridValidationSettings object (for example,
                    ValidationSettings-EnableValidation).Nest a <ValidationSettings> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, ValidationSettings.EnableValidation). Common
                settings usually include the propeties for the validation logic in
                Telerik RadGrid control.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

###  UpdateMethod `String`

Gets or sets the name of the method to call in order to update data

###  InsertMethod `String`

Gets or sets the name of the method to call in order to insert data

###  DeleteMethod `String`

Gets or sets the name of the method to call in order to delete data

###  SelectMethod `String`

Gets or sets the name of the method to call in order to select data

###  ShouldBindInvisibleColumns `Boolean`

Caches the BindGridInvisibleColumns configuration key

###  ShowDesignTimeSmartTagMessage `Boolean`

###  AutoGenerateEditColumn `Boolean`

Gets or sets a value determining if  will automatically
            generate a .

###  AutoGenerateDeleteColumn `Boolean`

Gets or sets a value determining if  will automatically
            generate a  with CommandName set to 'Delete'.

###  AllowCustomPaging `Boolean`

Gets or sets a value indicating whether custom paging should be performed instead
            of the integrated automatic paging.

#### Remarks
This online example demonstrates an approach to implementing custom paging with
                Telerik RadGrid. The simulated "DataLayer" wraps the logic of extracting records
                for only the specified page and deleting records. Telerik RadGrid
                maintains the pager buttons, changing of pager and other presentation specific
                features.Another available option for custom paging support is represented in the
                how-to
                section.Note: There is no universal mechanism for grouping when
                custom paging is allowed. The reason for this is that with the custom paging
                mechanism you fetch only part of the whole information from the grid datasource.
                Thus, when you trigger the grouping event the grid is restricted from operating
                with the whole available source data and is not able to group the items accurately.
                Furthermore, the aggregate functions as Count, Sum, etc. (covering operations with
                the whole set of grid items) will return incorrect results.A workaround solution for you could be to use hierarchy in the grid instead
                of grouping to single out the grid items logically and visually according to custom
                criteria. Thus you will be able to use custom paging without further
                limitations.Another approach is to build your own complex SQL statements which to get the
                whole available data from the grid datasource and then group the items in the grid
                with custom code logic.
                Finally, you can use standard paging instead of custom paging to ensure the
                consistency of the data on grouping.

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the automatic paging feature is
            enabled.

#### Remarks
Instead of displaying all the records in the data source at the same time,
                the Telerik RadGrid control can automatically break the records up into
                pages. If the data source supports the paging capability, the
                Telerik RadGrid control can take advantage of that and provide built-in
                paging functionality. The paging feature can be used with any data source object
                that supports the System.Collections.ICollection interface or a data source that
                supports paging capability.To enable the paging feature, set the AllowPaging property
                to true. By default, the Telerik RadGrid control
                displays 10 records on a page at a time. You can change the number of records
                displayed on a page by setting the PageSize property. To determine the total number
                of pages required to display the data source contents, use the PageCount property.
                You can determine the index of the currently displayed page by using the
                CurrentPageIndex property.When paging is enabled, an additional item called the pager item is
                automatically displayed in the Telerik RadGrid control. The pager item contains controls
                that allow the user to navigate to the other pages. You can control the settings of
                the pager item by using the PagerItemStyle property. The pager
                item can be displayed at the top, bottom, or both the top and bottom of the control
                by setting the Position property. You can also select from one of four built-in
                pager display modes by setting the Mode property.The Telerik RadGrid control also allows you to define a custom
                template for the pager item.

###  AllowSorting `Boolean`

Gets or sets a value indicating whether the sorting feature is enabled.

#### Remarks
When a data source control that supports sorting is bound to the
                Telerik RadGrid control, the Telerik RadGrid control can
                take advantage of the data source control's capabilities and provide automatic
                sorting functionality.To enable sorting, set the AllowSorting property to
                true. When sorting is enabled, the heading text for each column
                field with its SortExpression property set is displayed as a link button.Clicking the link button for a column causes the items in the
                Telerik RadGrid control to be sorted based on the sort expression.
                Typically, the sort expression is simply the name of the field displayed in the
                column, which causes the Telerik RadGrid control to sort with respect
                to that column. To sort by multiple fields, use a sort expression that contains a
                comma-separated list of field names. You can determine the sort expression that the
                Telerik RadGrid control is applying by using the SortExpression
                property. Clicking a column's link button repeatedly toggles the sort direction
                between ascending and descending order.

###  EnableLinqExpressions `Boolean`

Gets or sets a value indicating whether native LINQ expressions will be enabled.

###  ClientSettings `GridClientSettings`

Gets a reference to the  object that
                    allows you to set the properties of the client-side behavior and appearance in
                    a Telerik RadGrid control.

###  AlternatingItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of alternating data items in a Telerik RadGrid control.

#### Remarks
Use the AlternatingItemStyle property to control the appearance of
                alternating data items in a Telerik RadGrid control. When this property
                is set, the data items are displayed alternating between the ItemStyle settings and
                the AlternatingItemStyle settings. This property is read-only; however, you can set
                the properties of the GridTableItemStyle object it returns. The properties can be
                set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example,
                    AlternatingItemStyle-ForeColor).Nest an <AlternatingItemStyle> element between the opening and
                    closing tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, AlternatingItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  GroupHeaderItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the group-header item in a Telerik RadGrid control.

#### Remarks
Use the GroupHeaderItemStyle property to control the appearance of the
                group-header item in a Telerik RadGrid control. This property is
                read-only; however, you can set the properties of the GridTableItemStyle object it
                returns. The properties can be set declaratively using one of the following
                methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example,
                    GroupHeaderItemStyle-ForeColor).Nest a <GroupHeaderItemStyle> element between the opening and
                    closing tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, GroupHeaderItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  AutoGenerateColumns `Boolean`

Gets or sets a value indicating whether bound fields are automatically created
            for each field in the data source.

#### Remarks
When the AutoGenerateColumns property is set to true, an
                GridBoundColumn object is automatically created for each field in
                the data source. Each field is then displayed as a column in the
                Telerik RadGrid control in the order that the fields appear in the data
                source. This option provides a convenient way to display every field in the data
                source; however, you have limited control of how an automatically generated column
                field is displayed or behaves.This set of columns can be accessed using the
                AutoGeneratedColumns
                collection.Runtime auto-generated columns will always appear after
                            the user-specified columns, unless the columns are ordered
                            programmatically.Instead of letting the Telerik RadGrid control automatically
                generate the column fields, you can manually define the column fields by setting
                the AutoGenerateColumns property to false and
                then creating a custom Columns collection. In addition to bound column fields, you
                can also display a button column, a check box column, a button column, a hyperlink
                column, an image column, or a column based on your own custom-defined template
                etc.

###  AutoGenerateHierarchy `Boolean`

Gets or sets a value indicating whether detail tables will be automatically created from the
            dataset object to which the grid is bound.

###  RetainExpandStateOnRebind `Boolean`

Gets or sets a value indicating if the  property of both hierarchy and group items will be
            retained after a call to  or  method.

###  BackImageUrl `String`

Gets or sets the URL to an image to display in the background of a
            Telerik RadGrid control.

#### Remarks
Use the BackImageUrl property to specify the URL to an image
                to display in the background of a Telerik RadGrid control.If the specified image is smaller than the Telerik RadGrid
                control, the image is tiled to fill in the background. If the image is larger than
                the control, the image is cropped.

###  GroupPanel `GridGroupPanel`

Gets group panel control instance - visible only if grouping is enabled in grid
                (). Each 's
                Group-By-Expression is visualized in this panel.

#### Remarks
If grouping is enabled grid allows grouping by column(s) by drag-and-drop of
                columns from it's detail tables in this panel For this purpose set
                AllowDragToGroup
                property to true. You can modify panel's appearance using
                 and
                .

###  ShowGroupPanel `GridGroupPanel`

Gets or sets a value indicating whether the 
                    would be shown in Telerik RadGrid.

###  GroupingEnabled `Boolean`

Gets or sets a value indicating whether the grouping is enabled.

#### Remarks
Most often this property is used in conjunction with
                 property set to true. The
                easiest way to turn the grouping on is by using the grid's SmartTag option for
                enabling the grouping.

###  AllowAutomaticUpdates `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will perform
            automatic updates to the data source.

#### Remarks
See Automatic Data Source
            Operations for details.

###  AllowAutomaticInserts `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will perform
            automatic insert of records to the data source.

#### Remarks
See Automatic Data Source
            Operations for details.

###  AllowAutomaticDeletes `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will
            automatically delete records from the specified data source.

#### Remarks
See Automatic Data Source
            Operations for details.

###  MasterTableView `GridTableView`

The instance of  that represents the main
                grid-table view in RadGrid.

#### Remarks
Telerik RadGrid introduces a new approach to hierarchical data
                    structures. The innovative in Telerik RadGrid is having a so called
                    MasterTableView. This is the topmost table of the hierarchical
                    structure. It is a  with
                    . The collection holds the so called
                    DetailTables - tables related to the fields of the MasterTable. Each
                    DetailTable can have its own GridTableViewCollection with
                    other Detail Tables, thus forming the hierarchical structure.
                Note: There is only one Master Table for
                            a single Telerik RadGrid. This is the topmost table. All
                            inner tables are referred as a Detail Tables regardless of whether they
                            have related (inner) tables or not.

###  CurrentPageIndex `Int32`

Gets or sets an integer value representing the current page index.

#### Remarks
Note that the Paging must be enabled ( must
                be true) in order to use this property.

###  EditItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the item selected for editing in a Telerik RadGrid
            control.

#### Remarks
Use the EditItemStyle property to control the appearance of the item being
                edited in a Telerik RadGrid control. This property is read-only;
                however, you can set the properties of the GridTableItemStyle object it returns.
                The properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example, EditItemStyle-ForeColor).Nest a <EditItemStyle> element between the opening and closing tags
                    of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, EditItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  FooterStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the footer item in a Telerik RadGrid control.

#### Remarks
Use the FooterItemStyle property to control the appearance of the footer item
                in a Telerik RadGrid control. This property is read-only; however, you
                can set the properties of the GridTableItemStyle object it returns. The properties
                can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example, FooterItemStyle-ForeColor).Nest a <FooterItemStyle> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, FooterItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  HeaderStyle `GridTableItemStyle`

Gets the style properties of the heading section in the RadGrid control.

#### Remarks
Use the HeaderItemStyle property to control the appearance of the header item
                in a Telerik RadGrid control. This property is read-only; however, you
                can set the properties of the GridTableItemStyle object it returns. The properties
                can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example, HeaderItemStyle-ForeColor).Nest a <HeaderItemStyle> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, HeaderItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  FilterItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the filter item in a Telerik RadGrid control.

#### Remarks
Use the FilterItemStyle property to control the appearance of the filter item
                in a Telerik RadGrid control. This property is read-only; however, you
                can set the properties of the GridTableItemStyle object it returns. The properties
                can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example, FilterItemStyle-ForeColor).Nest a <FilterItemStyle> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, FilterItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  CommandItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the command item in a Telerik RadGrid control.

#### Remarks
Use the CommandItemStyle property to control the appearance of the command
                item in a Telerik RadGrid control. This property is read-only; however,
                you can set the properties of the GridTableItemStyle object it returns. The
                properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example, CommandItemStyle-ForeColor).Nest a <CommandItemStyle> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, CommandItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  ActiveItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the active item in a Telerik RadGrid control.

#### Remarks
Use the ActiveItemStyle property to control the appearance of the active item
                in a Telerik RadGrid control. This property is read-only; however, you
                can set the properties of the GridTableItemStyle object it returns. The properties
                can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example, ActiveItemStyle-ForeColor).Nest a <ActiveItemStyle> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, ActiveItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  MultiHeaderItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the MultiHeader item in a Telerik RadGrid control.

###  Items `GridDataItemCollection`

Gets a collection of all GridDataItems.

#### Remarks
The RadGrid control automatically populates the Items collection by creating
                a GridDataItem object for each record in the data source and then adding each
                object to the collection. This property is commonly used to access a specific item
                in the control or to iterate though the entire collection of items.
                    You cannot use this collection to get special Items like Header, Pager, Footer,
                    etc. Handle  event and use the event arguments to
                    get a reference to such items.

###  ItemStyle `GridTableItemStyle`

Gets a reference to the GridTableItemStyle object that allows you to set the
            appearance of the data items in a RadGrid control.

#### Remarks
Use the ItemStyle property to control the appearance of the data items in a
            Telerik RadGrid control. When the AlternatingItemStyle property is also set, the data
            items are displayed alternating between the ItemStyle settings and the
            AlternatingItemStyle settings. This property is read-only; however, you can set the
            properties of the GridTableItemStyle object it returns.

###  PageCount `Int32`

Gets the number of pages required to display the records of the data source
                in a Telerik RadGrid control.

#### Remarks
When the paging feature is enabled (by setting the AllowPaging property to true),
            use the PageCount property to determine the total number of pages required to display
            the records in the data source. This value is calculated by dividing the total number
            of records in the data source by the number of records displayed in a page (as
            specified by the PageSize property) and rounding up.

###  PagerStyle `GridPagerStyle`

Gets a reference to the GridPagerStyle object that allows you to
            set the appearance of the page item in a Telerik RadGrid control.

#### Remarks
Use this property to provide a custom style for the paging section of the
                RadGrid control. Common style attributes that can be adjusted
                include forecolor, backcolor, font, and content alignment within the cell.
                Providing a different style enhances the appearance of the RadGrid
                control.To specify a custom style for the paging section, place the
                <PagerStyle> tags between the opening and closing tags of
                the RadGrid control. You can then list the style attributes within
                the opening <PagerStyle> tag.

###  PageSize `Int32`

Gets or sets an integer value indicating the number of Items that a single page
            in Telerik RadGrid will contain.

#### Remarks
Note that the Paging must be enabled ( must
                be true) in order to use this property.

###  AllowMultiRowSelection `Boolean`

Gets or sets a value indicating whether you will be able to select multiple rows
            in Telerik RadGrid. By default this property is set to
            false.

#### Remarks
Note: You will not be able to select the Header, Footer or Pager
            rows.

###  AllowMultiRowEdit `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will allow
            you to have multiple rows in edit mode. The default value is
            false.

###  SelectedIndexes `GridIndexCollection`

Gets a collection of indexes of the selected items.

###  SelectedCellIndexes `GridIndexCollection`

Gets a collection of indexes of the selected items.

###  EditIndexes `GridIndexCollection`

Gets a collection of the indexes of the Items that are in edit mode.

###  SelectedItems `GridDataItemCollection`

Gets a collection of the currently selected GridDataItems

###  SelectedCells `GridTableCellCollection`

Gets a collection of the currently selected GridTableCells

###  SelectedValue `Object`

Gets the data key value of the selected row in a RadGrid control.

###  SelectedValues `Object`

Gets the corresponding data key values for the selected items in the grid.

###  EditItems `GridDataItemCollection`

Gets a collection of all GridItems in edit mode. See the Remarks
            for more info.

#### Remarks
The EditItems collection contains InPlace
                edit mode items. When you switch the edit type to EditForms, the
                EditItems collection holds the currently edited items but not
                their EditFormItems (which in this case hold the new values). See
                this help article for more
                details.
                    You should not use this property to check whether there are items in edit mode.
                    The better approach is to use  property instead.

###  SelectedItemStyle `GridTableItemStyle`

Gets a reference to the  object that allows
                you to set the appearance of the selected item in a Telerik RadGrid
                control.

#### Remarks
Use the SelectedItemStyle property to control the appearance of the selected
                item in a Telerik RadGrid control. This property is read-only; however,
                you can set the properties of the GridTableItemStyle object it returns. The
                properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the Telerik RadGrid
                    control in the form Property-Subproperty, where Subproperty is a property of
                    the GridTableItemStyle object (for example,
                    SelectedItemStyle-ForeColor).Nest a <SelectedItemStyle> element between the opening and closing
                    tags of the Telerik RadGrid control.The properties can also be set programmatically in the form
                Property.Subproperty (for example, SelectedItemStyle.ForeColor). Common settings
                usually include a custom background color, foreground color, and font
                properties.

###  ShowFooter `Boolean`

Gets or set a value indicating whether the footer item of the grid will be
            shown.

#### Remarks
Setting this property will affect all grid tables, unless they specify otherwise
            explicitly.

###  ShowStatusBar `Boolean`

Gets or set a value indicating whether the statusbar item of the grid will be
            shown.

#### Remarks
This property is meaningful when the grid is in AJAX mode, i.e. when
                     is set to true.
                See this help topic for more
                details.

###  StatusBarSettings `GridStatusBarItemSettings`

Gets a  object that contains variable
                settings related to the status bar.

###  ShowHeader `Boolean`

Gets or set a value indicating whether the header item of the grid will be
            shown.

#### Remarks
Setting this property will affect all grid tables, unless they specify otherwise
            explicitly.

###  VirtualItemCount `Int32`

Gets or sets a value, indicating the total number of items in the data source
            when custom paging is used. Thus the grid "understands" that the data source contains
            the specified number of records and it should fetch merely part of them at a time to
            execute requested operation.

#### Remarks
If you set a value that is greater than the actual number of items, RadGrid
                will show all available items plus empty pages (or whatever other content you set)
                for the items that exceed the actual number.For example you have a data source with 9'000 items and you set
                VirtualItemCount to 10'000. If your page size is 1000, the grid will render 10
                pages and the last page will be empty (or with NoRecordsTemplate if you're using
                such).

###  FilterMenu `GridFilterMenu`

Gets a reference to  object. The filtering menu
                appears when the filter button on the  is clicked.

#### Remarks
This property is meaningful only when you have filtering enabled (by setting
                AllowFilteringByColumn="true").

###  HeaderContextMenu `GridHeaderContextMenu`

Represents a HeaderContextMenu

###  Columns `GridColumnCollection`

Gets a collection () of all columns in
                Telerik RadGrid.

#### Remarks
This is one of the three columns collections in Telerik RadGrid. The
            other two are AutoGeneratedColumns and
            RenderColumns.

###  IsExporting `Boolean`

This property returns true when the control is currently exporting a file

###  IsDetailDataBindingInProgress `Boolean`

Gets a value indicating whether a detail table is currently binding.

###  DataSourceIsAssigned `Object`

###  DataSourceID `Object`

Gets or sets the ID of the control from which the Telerik RadGrid
                control retrieves its list of data items.

#### Remarks
If the Telerik RadGrid control has already been initialized when
                you set the DataSourceID property.This property cannot be set by themes or style sheet themes.

###  ClientDataSourceID `Object`

Gets or sets ID of RadClientDataSource control that to be used for client side binding

###  ODataDataSourceID `Object`

Gets or sets the ODataDataSource used for data binding.

###  DataModelID `String`

Gets or sets a OData service DataModelID.

###  ViewStateSize `Int32`

###  Skin `String`

Gets or sets the name of the Skin that Telerik RadGrid will use.
                In case one needs custom skin (not embedded within the assembly) she has to refer
                the respective .css in the head tag as explained in docs here:
                RadControls for ASP.NET Ajax Fundamentals -> Controlling Visual Appearance -> Creating a custom skin

#### Remarks
There are three possible scenarios for using this property:Leave this property unset or set it to "Default" - the default skin,
                    common for the Telerik UI for ASP.NET AJAX suite will be usedSet the name of the embedded grid skin - the skin will be appliedSet the name of the custom grid skin along with the EnableEmbeddedSkins="false" 
            (see 'Creating a custom skin' Fundamentals article)Set this property to "" - no skin will be applied.
                    Only the default grid images (for Expand/Collapse, Sort, Edit, etc) will be
                    used. Use this option if you have own appearance customizations for prevous
                    Telerik RadGrid versions.

###  AllowFilteringByColumn `Boolean`

Gets or sets a value indicating whether the filtering of all tables in the
            hierarchy will be enabled, unless specified other by
            GridTableView.AllowFilteringByColumn.

###  FilterType `GridFilterType`

Change the filter type displayed in the filter dropdown

###  EnableHeaderContextMenu `GridHeaderContextMenu`

Gets or sets a value indicating whether the header context menu should be 
                 enabled.

###  EnableHeaderContextAggregatesMenu `Boolean`

Gets or sets a value indicating whether the option to set columns aggregates should appear in 
             	header context menu.

###  EnableHeaderContextFilterMenu `GridFilterMenu`

Gets or sets a value indicating whether the header context filter menu should be 
                 enabled.

###  ImagesPath `String`

Gets or sets default path for the grid images.

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  LocalizationPath `GridStrings`

Gets or sets a value indicating where RadGrid will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the grid localization file from any location in the 
            web application.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableHierarchyExpandAll `Boolean`

Gets or sets a value indicating whether the hierarchy expand/collapse all header buttons should be switched on.

###  EnableGroupsExpandAll `Boolean`

Gets or sets a value indicating whether the groups expand/collapse all header buttons should be switched on.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  CellPadding `Int32`

Gets or sets the amount of space between the contents of a cell and the cell's
            border.

###  CellSpacing `Int32`

Gets or sets the amount of space between cells.

###  Controls `ControlCollection`

###  GridLines `GridLines`

Gets or sets a value that specifies whether the border between the cells of a
            data table is displayed.

###  HorizontalAlign `HorizontalAlign`

Gets or sets the horizontal alignment of a data table within its
            container.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  ClientStateFieldID `String`

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCssClass `String`

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the
            Web server control.

###  BackColor `Color`

Gets or sets the background color of the Web server control.

###  BorderColor `Color`

Gets or sets the border color of the Web control.

###  BorderStyle `BorderStyle`

Gets or sets the border style of the Web server control.

###  BorderWidth `Unit`

Gets or sets the border width of the Web server control.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web
            server control on the client.

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnableTheming `Boolean`

Gets or sets a value indicating whether themes apply to this control.

###  ForeColor `Color`

Gets or sets the foreground color (typically the color of the text)
            of the Web server control.

###  Font `FontInfo`

Gets the font properties associated with the Web server control.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.

###  Width `Unit`

Gets or sets the width of the Web server control.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the
            Web server control.

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control
            binds to, in cases where the data source contains more than one distinct list
            of data items.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

###  DataSource `Object`

Gets or sets the object from which the data-bound control retrieves
            its list of data items.

###  DataSourceID `Object`

Gets or sets the ID of the control from which the data-bound control
            retrieves its list of data items.

## Methods

###  DataBind

Data-bind %MasterTableView% and its detail
                %GridTableView%s. Prior to calling DataBind, the
                %DataSource% property should be assigned.

#### Remarks
You should have in mind, that in case you are using simple data binding (i.e.
                when you are not using NeedDataSource event) the correct approach
                is to call the DataBind() method on the first page load when
                !Page.IsPostBack and after handling some event (sort event for
                example).You will need to assign DataSource and rebind the grid after
                each operation (paging, sorting, editing, etc.) - this copies exactly MS
                DataGrid behavior.
                    We recommend using the  method instead and handling
                    the  event.

#### Returns

`System.Void` 

###  RaisePostBackEvent

#### Returns

`System.Void` 

###  SetIsBetweenFilter

Sets property of the GridDateTimeColumn, GridNumericColumn or GridRatingColumn indicating
            whether the current filter function is Between ot NotBetween. Used in case of custom FilterTemplates

#### Parameters

#### column `Telerik.Web.UI.GridColumn`

#### Returns

`System.Void` 

###  SerializeStyle

#### Returns

`System.Void` 

###  PrepareRowsRecursive

#### Returns

`System.Void` 

###  PrepareRowsVisibilityRecursive

#### Returns

`System.Void` 

###  CreateTableView

This method is used by RadGrid internally. Please do not use.

#### Returns

`Telerik.Web.UI.GridTableView` 

###  Rebind

Forces RadGrid to fire
            NeedDataSource
            event then calls
            DataBind

#### Returns

`System.Void` 

###  SetStyleClasses

#### Returns

`System.Void` 

###  GetBindingData

Gets a  object that could be used when binding a  control
            to a service. The GetBindingData method have many overrides and their main purpose is to return
            a object to be used and returned from a service so a  control could handle complex operations
            like sorting, filtering, paging. In the general case the parameters are automatically passed when the 
            makes a request to the service. However, you could use it for custom scenarios by providing your manually generated
            parameters.

#### Parameters

#### contextTypeName `System.String`

The contextTypeName parameter for the .

#### tableName `System.String`

The tableName parameter for the .

#### startRowIndex `System.Int32`

The index from where to start retrieving records. The parameter is used for pagging support.

#### maximumRows `System.Int32`

The maximum rows to be loaded. The parameter is used for pagging support.

#### sortExpression `System.String`

The sort expression.

#### filterExpression `System.String`

The filter expression.

#### Returns

`Telerik.Web.UI.GridBindingData` Returns a  object which could be used to return the data to the  control.

###  GetBindingData

Gets a  object that could be used when binding a  control
            to a service. The GetBindingData method have many overrides and their main purpose is to return
            a object to be used and returned from a service so a  control could handle complex operations
            like sorting, filtering, paging. In the general case the parameters are automatically passed when the 
            makes a request to the service. However, you could use it for custom scenarios by providing your manually generated
            parameters.

#### Parameters

#### contextTypeName `System.String`

The contextTypeName parameter for the .

#### tableName `System.String`

The tableName parameter for the .

#### select `System.String`

The select for the .

#### startRowIndex `System.Int32`

The index from where to start retrieving records. The parameter is used for pagging support.

#### maximumRows `System.Int32`

The maximum rows to be loaded. The parameter is used for pagging support.

#### sortExpression `System.String`

The sort expression.

#### filterExpression `System.String`

The filter expression.

#### Returns

`Telerik.Web.UI.GridBindingData` Returns a  object which could be used to return the data to the  control.

###  GetBindingData

Gets a  object that could be used when binding a  control
            to a service. The RadGrid.GetBindingData method have many overrides and their main purpose is to return
            a object to be used and returned from a service so a  control could handle complex operations
            like sorting, filtering, paging. In the general case the parameters are automatically passed when the 
            makes a request to the service. However, you could use it for custom scenarios by providing your manually generated
            parameters.

#### Parameters

#### source `System.Linq.IQueryable{``0}`

Generic  collection to be paged, filtered and sorted.

#### startRowIndex `System.Int32`

The index from where to start retrieving records. The parameter is used for pagging support.

#### maximumRows `System.Int32`

The maximum rows to be loaded. The parameter is used for pagging support.

#### sortExpression `System.String`

The sort expression.

#### filterExpression `System.String`

The filter expression.

#### Returns

`Telerik.Web.UI.GridBindingData` Returns a  object which could be used to return the data to the  control.

###  GetBindingData

Gets a  object that could be used when binding a  control
            to a service. The GetBindingData method have many overrides and their main purpose is to return
            a object to be used and returned from a service so a  control could handle complex operations
            like sorting, filtering, paging. In the general case the parameters are automatically passed when the 
            makes a request to the service. However, you could use it for custom scenarios by providing your manually generated
            parameters.

#### Parameters

#### source `System.Linq.IQueryable`

collection to be paged, filtered and sorted.

#### startRowIndex `System.Int32`

The index from where to start retrieving records. The parameter is used for pagging support.

#### maximumRows `System.Int32`

The maximum rows to be loaded. The parameter is used for pagging support.

#### sortExpression `System.String`

The sort expression.

#### filterExpression `System.String`

The filter expression.

#### Returns

`Telerik.Web.UI.GridBindingData` Returns a  object which could be used to return the data to the  control.

###  ParseSPViewFieldsIntoDataColumns

Used by the SPRadGrid control

#### Returns

`System.Collections.Generic.List`1` 

###  IsBindableType

#### Returns

`System.Boolean` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Boolean` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

