---
title: Telerik.Web.UI.GridTableView
page_title: Telerik.Web.UI.GridTableView
description: Telerik.Web.UI.GridTableView
---

# Telerik.Web.UI.GridTableView

Represents one table of data.

#### Remarks
In case of flat grid structure, i.e. no hierarchy levels, this object is the
            MasterTableViewitself.In case of hierarchical structure, the topmost GridTableViewis
            the MasterTableView. All inner (child) tables are refered as
            DetailTables. Each table that has children tables has a collection called
            P:Telerik.Web.UI.GridTableView.DetailTables where you can access these tables.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* System.Web.UI.WebControls.CompositeDataBoundControl
* Telerik.Web.UI.GridTableViewBase
* Telerik.Web.UI.GridTableView

## Properties

###  AdditionalDataFieldNames `String[]`

Gets or sets values indicating DataFieldNames that should be
                sorted, grouped, etc and are not included as columns, in case the property
                 is false.

###  AllowAutomaticDeletes `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will perform
            automatic deletes, i.e. using the DataSource controls
            functionality.

###  AllowAutomaticInserts `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will perform
            automatic inserts, i.e. using the DataSource controls
            functionality.

###  AllowAutomaticUpdates `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will perform
            automatic updates, i.e. using the DataSource controls
            functionality.

###  AllowCustomPaging `Boolean`

Gets or sets if the custom paging feature is enabled.

#### Remarks
There are cases in which you may want to fetch only a fixed number of records and
                perform operations over this specified set of data. Telerik RadGrid allows such
                data manipulation through the custom paging mechanism integrated in the control.
                The main steps you need to undertake are: 
                Set AllowPaging = true and AllowCustomPaging = true for
                    your grid instanceImplement code logic which to extract merely a fixed number of records
                    from the grid source and present them in the grid structureThe total number of records in the grid source should be defined through
                    the VirtualItemCount property of the MasterTableView/GridTableView
                    instance. Thus the grid "understands" that the data source contains the
                    specified number of records and it should fetch merely part of them at a time
                    to execute requested operation.Another available option for custom paging support is through the
                ObjectDataSource control custom paging feature:
                Custom paging with ObjectDataSource grid content generator

###  AllowCustomSorting `Boolean`

Gets or sets if the custom sorting feature is enabled.

#### Remarks
With custom sorting turned on, RadGrid will display as Sorting Icons, will maintain
                the SortExpressions collection and so on, but it will not actually sort the Data.
                You should perform the custom sorting in the SortCommand event handler. You can
                also use the  method,
                which will return the sort expressions string in the same format as it wold be used
                by a DataView component.

###  AllowFilteringByColumn `Boolean`

Gets or sets a value indicating whether the filtering by column feature is
                enabled.

#### Remarks
When the value is true, GridTableView will display the
                    filtering item, under the table's header item. The filtering can be controlled
                    based on a column through column properties:
                     ,
                    ,
                    . The column
                     method is used to determine if
                    a column can be used with filtering. Generally, this function returns the value
                    set to AllowFiltering for a specific column.

###  AllowMultiColumnSorting `Boolean`

Gets or sets the value indicating wheather more than one column can be sorted in a
                single GridTableView. The order is the same as the sequence of
                expressions in .

###  AllowNaturalSort `Boolean`

Gets or sets the value indicated whether the no-sort state when changing sort
            order will be allowed.

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the paging feature is enabled.

#### Remarks
Instead of displaying all the records in the data source at the same time,
                the GridTableView
                control can automatically break the records up into pages. If the data source
                supports the paging capability, the GridTableView control can take
                advantage of that and provide built-in paging functionality. The paging feature can
                be used with any data source object that supports the
                System.Collections.ICollection interface or a data source that supports
                paging capability.To enable the paging feature, set the AllowPaging property
                to true. By default, the GridTableView control
                displays 10 records on a page at a time. You can change the number of records
                displayed on a page by setting the
                PageSize
                property. To determine the total number of pages required to display the data
                source contents, use the
                PageCount
                property. You can determine the index of the currently displayed page by using the
                CurrentPageIndex
                property.When paging is enabled, an additional row called the pager item is
                automatically displayed in the GridTableView control. The pager
                row contains controls that allow the user to navigate to the other pages. You can
                control the settings of the pager row (such as the pager display mode, the number
                of page links to display at a time, and the pager control's text labels) by using
                the
                PagerStyle
                properties. The pager row can be displayed at the top, bottom, or both the top and
                bottom of the control by setting the
                Position
                property. You can also select from one of six built-in pager display modes by
                setting the Mode
                property.The GridTableView control also allows you to define a custom
                template for the pager row. For more information on creating a custom pager row
                template, see
                PagerTemplate.The GridTableView control provides an event that you can use
                to perform a custom action when paging occurs.EventDescriptionOccurs when one of the pager buttons is clicked, but after
                            the GridTableView control handles the paging operation. This
                            event is commonly used when you need to perform a task after the user
                            navigates to a different page in the control.

###  AllowSorting `Boolean`

Gets or sets a value indicating whether the sorting feature is
                enabled.

#### Remarks
When a data source control that supports sorting is bound to the
                GridTableView
                control, the GridTableView control can take advantage of the data
                source control's capabilities and provide automatic sorting functionality.To enable sorting, set the AllowSorting property to
                true. When sorting is enabled, the heading text for each column
                field with its
                SortExpressions
                property set is displayed as a link button.Clicking the link button for a column causes the items in the
                GridTableView control to be sorted based on the sort expression.
                Typically, the sort expression is simply the name of the field displayed in the
                column, which causes the GridTableView control to sort with
                respect to that column. To sort by multiple fields, use a sort expression that
                contains a comma-separated list of field names. You can determine the sort
                expression that the GridTableView control is applying by using the
                SortExpressions property. Clicking a column's link button repeatedly toggles the
                sort direction between ascending and descending order.Note that if you want to sort the grid by a column different
                than a GridBoundColumn, you should set also its
                SortExpression
                property to the desired data field name you want the column to be sorted by.

###  AlternatingItemStyle `GridTableItemStyle`

Gets a reference to the
                GridTableItemStyle
                object that allows you to set the appearance of alternating items in a
                GridTableView
                control.

#### Remarks
Use the AlternatingItemStyle property to control the
                appearance of alternating items in a GridTableView control. When
                this property is set, the items are displayed alternating between the
                ItemStyle
                settings and the AlternatingItemStyle settings. This property is
                read-only; however, you can set the properties of the
                GridTableItemStyle object it returns. The properties can be set
                declaratively using one of the following methods:Place an attribute in the opening tag of the
                    GridTableView control in the form
                    Property-Subproperty, where Subproperty is a
                    property of the GridTableItemStyle object (for example,
                    AlternatingItemStyle-ForeColor).Nest an <AlternatingItemStyle> element between the opening and
                    closing tags of the GridTableView control.The properties can also be set programmatically in the form
                Property.Subproperty (for example,
                AlternatingItemStyle.ForeColor). Common settings usually include a custom
                background color, foreground color, and font properties.

###  AutoGenerateColumns `Boolean`

Gets or sets a value indicating whether Telerik RadGrid will
            automatically generate columns at runtime based on its
            DataSource.

###  AutoGeneratedColumns `GridColumnCollection`

Get an array of automatically generated columns. This array is available when
                 is set to true. Autogenerated
                columns appear always after  when rendering.

###  CanRetrieveAllData `Boolean`

Gets or sets a value indicating whether Telerik RadGrid should retrieve all data and ignore server paging in case of filtering or grouping.

###  Caption `String`

Gets or sets a string that specifies a brief description of a
                GridTableView.
                Related to Telerik RadGrid accessibility compliance.

#### Remarks
Use the Caption property to specify the text to render in an
                HTML caption element in a GridTableView control. The text that you
                specify provides assistive technology devices with a description of the table that
                can be used to make the control more accessible.

###  CellPadding `Int32`

Gets or sets the cell padding of the html table.

###  CellSpacing `Int32`

Gets or sets the cell spacing of the html table.

###  CheckListWebServicePath `String`

Get or set Path for the WebService that to be used for populating filter checklist with values.

###  ChildEditItems `GridItemCollection`

Gets all items among the hierarchy of
                    GridTableView
                    items that are in edit mode. The edit items in a GridTableView
                    are cleared when  collapses.

###  ChildSelectedItems `GridItemCollection`

Gets all items among the hierarchy of
                    GridTableView
                    items that are selected. The selected items in a GridTableView
                    are cleared when  collapses and the
                    ParentItem becomes selected.

###  ClientDataKeyNames `String[]`

This property is used to specify the field from the underlying datasource,
                which will populate the ClientDataKeyNames collection.
                This collection can later be accessed on the client, to get the key
                value(s).The following example demonstrates the extraction of the data key value for a
                given data table view object:
                <ClientSettings>
                <ClientEvents OnHierarchyExpanded="HierarchyExpanded" />
                </ClientSettings><script type="text/javascript">
                function HierarchyExpanded(sender, args)
                {
                var firstClientDataKeyName =
                args.get_tableView().get_clientDataKeyNames()[0];
                alert("Item with " + firstClientDataKeyName + ":'" +
                args.getDataKeyValue(firstClientDataKeyName)
                + "' expanded.");
                }
                </script>The logic is placed in the OnHierarchyExpanded client side event handler,
                which is triggered when the user expands a node
                in a hierarchical grid, but can be used in any other event, given that a proper
                reference to the client table view object is obtained.

###  ClientID `String`

Gets the server control identifier generated by ASP.NET.

###  ColumnGroups `GridColumnGroupCollection`

Gets the column groups.

###  Columns `GridColumnCollection`

Gets a collection of
                GridColumn objects
                that represent the column fields in a
                GridTableView
                control.

#### Remarks
A column field represents a column in a GridTableView
                control. The Columns property (collection) is used to store all
                the explicitly declared column fields that get rendered in the GridTableView
                control. You can also use the Columns collection to
                programmatically manage the collection of column fields.The column fields are displayed in the GridTableView control
                in the order that the column fields appear in the Columns
                collection.
                    To get a list of all columns rendered in the current instance use
                    Although you can programmatically add column fields to the
                Columns collection, it is easier to list the column fields
                declaratively in the GridTableView control and then use the
                Visible
                property of each column field to show or hide each column field.If the Visible property of a column field is set to false,
                the column is not displayed in the GridTableView control and the
                data for the column does not make a round trip to the client. If you want the data
                for a column that is not visible to make a round trip, add the field name to the
                DataKeyNames
                property.This property can be managed programmatically or by Property Builder (IDE
                designer).

###  CommandItemDisplay `GridCommandItemDisplay`

Gets or sets the default position of the GridCommandItem as defined by the
            . The possible values are:None - this is the default value - the command item will not be renderedTop - the command item will be rendered on the top of the gridBottom - the command item will be rendered on the bottom of the gridTopAndBottom - the command item will be rendered both on top and bottom of the
            grid.

###  CommandItemSettings `GridCommandItemSettings`

Gets a set the options for GridTableView's command item.

###  CommandItemStyle `GridTableItemStyle`

Gets a referenct to the
            GridTableItemStyle
            object that allows you to set the appearance of the command item in a
            GridTableView
            control.

###  CommandItemTemplate `ITemplate`

Gets or sets the template that will be instantiated in the CommandItem. If
                this template is set, RadGrid will not create the default
                CommandItem controls.

###  Controls `ControlCollection`

Gets a collection of the child controls within the composite data-bound
            control.

###  CurrentPageIndex `Int32`

Gets or sets a value indicating the index of the currently active page in case
            paging is enabled ( is
            true).

###  CurrentResetPageIndexAction `GridResetPageIndexAction`

Gets or sets a value that describes how RadGrid would respond
                    if the  is invalid when data-binding.

#### Remarks
This property is not persisted in the ViewState. By deafult the value is
                    .

###  CustomPageSize `Int32`

Stores a custom PageSize value if such is set when page mode is NextPrevAndNumeric

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to populate the
                     collection, when the
                    GridTableView
                    control is databinding.

#### Remarks
Use the DataKeyNames property to specify the field or fields
                that represent the primary key of the data source.Note: Values set to this property are case-sensitive! The
                field names should be coma-separated.
                    The data key names/values are stored in the ViewState so they
                    are available at any moment after grid have been data-bound, after postbacks,
                    etc. This collection is used when editing data, and for automatic relations
                    when binding an hiararchical grid (see
                    ).
                If the
                Visible
                property of a column field is set to false, the column is not displayed in the
                GridTableView control and the data for the column does not make a
                round trip to the client. If you want the data for a column that is not visible to
                make a round trip, add the field name to the DataKeyNames
                property.

###  DataKeyValues `GridDataKeyArray`

Gets a collection of DataKeyValue objects that represent the
                    data key value of the corresponding item (specified with its
                    ) and the DataKeyName
                    (case-sensitive!). The DataKeyName should be one of the
                    specified in the  array.

#### Remarks
When the
            DataKeyNames
            property is set, the GridTableView control automatically creates a
            DataKeyValue object for each item in the control. The
            DataKeyValue object contains the values of the field or fields
            specified in the DataKeyNames property. The
            DataKeyValue objects are then added to the control's
            DataKeysValue collection. Use the DataKeysValue
            property to retrieve the DataKeyValue object for a specific data item
            in the GridTableView control.

###  DataSource `Object`

Gets or sets the object from which the data-bound control retrieves its list
                of data items.

#### Remarks
Generally the DataSource object references
                    . Assign this property only if you need to
                    change the default behavior or .
                RadGrid modifies this property when
                     is assigned.
                On postback the DataSource property settings are not
                persisted due to performance reasons. Note, however, that you can save the grid
                DataSource in a Session/Application/Cache
                variable and then retrieve it from there after postback invocation. Respectively,
                you can get the changes made in the data source in a dataset object and then
                operate with them.This property cannot be set by themes or style sheet themes.

###  DataSourceCount `Object`

Gets the number of pages if paging is enabled.

###  DataSourceID `Object`

Gets or sets the ID of the DataSource control used for
            population of this GridTableView data items.

#### Remarks
This property cannot be set by themes or style sheet themes.

###  DeleteMethod `String`

Gets or sets the name of the method to call in order to delete data

###  DetailItemTemplate `ITemplate`

DetailwItemTemplate is a template that will be instantiated as a part of each data item. 
            Supports one-way databinding.

###  DetailTables `GridTableViewCollection`

Gets or sets the collection of detail table views for this
                GridTableView.

#### Remarks
Adding or removing objects to the DetailTables collection changes
                the hierarchical structure. 
                
                    Use  after modifying the collection
                    programmatically.
                This collection can also be altered unsing the environment designer.

###  Dir `GridTableTextDirection`

Gets or sets the text direction. This property is related to Telerik RadGrid support
            for Right-To-Left lanugages. It has two possible vales defined by
             enumeration:LTR - left-to-right textRTL - right-to-left text

###  EditFormSettings `GridEditFormSettings`

Gets a value defining the setting that will be applied when an Item is in edit
            mode and the  property is set to
            EditForms.

###  EditItemStyle `GridTableItemStyle`

Gets a reference to the
                GridTableItemStyle
                object that allows you to set the appearance of the item selected for editing in a
                GridTableView
                control.

#### Remarks
Use the EditItemStyle property to control the appearance of
                the item in edit mode. This property is read-only; however, you can set the
                properties of the GridTableItemStyle object it returns. The
                properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the
                    GridTableView control in the form
                    Property-Subproperty, where Subproperty is a
                    property of the GridTableItemStyle object (for example,
                    EditItemStyle-ForeColor).Nest an <EditItemStyle> element between the
                    opening and closing tags of the GridTableView control.The properties can also be set programmatically in the form
                Property.Subproperty (for example,
                EditItemStyle.ForeColor). Common settings usually include a custom
                background color, foreground color, and font properties.

###  EditItemTemplate `ITemplate`

Gets or sets the EditItemTemplate, which is rendered in the control in edit
            mode.

###  EditMode `GridEditMode`

FormsGets or sets a value indicating how a GridItem will
                look in edit mode.

#### Remarks
There are two possible values defined by the GridEditMode
                enumeration:InPlaceEditFormsTo display the grid column editors inline when switching grid item in edit
                mode (see the screenshot below), you simply need to change the
                EditMode property to InPlace.
            <radg:RadGrid id="RadGrid1" runat="server"><MasterTableView AutoGenerateColumns="True" EditMode="InPlace" /></radg:RadGrid>To display the grid column editors in auto-generated form when switching grid
                item in edit mode (see the screenshot below), you simply need to change the
                MasterTableView EditMode property to
                EditForms.
            <radg:RadGrid id="RadGrid1" runat="server"><MasterTableView AutoGenerateColumns="True" EditMode="EditForms" /></radg:RadGrid>

###  EnableColumnsViewState `Boolean`

Gets or sets a value indicating whether all columns settings will be persisted in
            the ViewState or not.

###  EnableGroupsExpandAll `Boolean`

Gets or sets a value indicating whether the groups expand/collapse all header buttons should be switched on.

###  EnableHeaderContextAggregatesMenu `Boolean`

Gets or sets a value indicating whether the option to set columns aggregates should appear in 
             	header context menu.

###  EnableHeaderContextFilterMenu `Boolean`

Gets or sets a value indicating whether the header context filter menu should be 
                 enabled.

###  EnableHeaderContextMenu `Boolean`

Gets or sets a value indicating whether the header context menu should be 
                 enabled.

###  EnableHierarchyExpandAll `Boolean`

Gets or sets a value indicating whether the hierarchy expand/collapse all header buttons should be switched on.

###  EnableLinqGrouping `Boolean`

Gets or sets a value indicating whether grouping will use LINQ queries.

###  EnableNoRecordsTemplate `Boolean`

Gets or sets a value indicating whether RadGrid will show
                 instead of the corresponding
                 if there is no items to display.

###  EnableSplitHeaderText `Boolean`

Gets or sets a value indicating if the text in the header of the GridTableView should be split on capital letter.
            True if header text should be split; otherwise,
            false. The default is true.
            
                This property is meaningful only when the GridTableView has AutoGenerateColumns = "true"

###  ExpandCollapseColumn `GridExpandColumn`

Gets a reference to the  object, allowing
            you to customize its settings.

#### Remarks
The property setter does nothing and should not be used. It works around a bug in the VS.NET designer.

###  FilterExpression `String`

Gets or sets the filtering options for grid columns.

#### Remarks
In the most common case, Telerik RadGrid checks all filtering options
            for each column, then prepares a filter expression and sets this property internally. 
            Note: You should be careful when setting this property as it may
            break the whole filtering functionality for your grid.More info on the way, the expressions are created you can find
            
            here (external link to MSDN library).

###  FilterItemStyle `GridTableItemStyle`

Gets a reference to the
            GridTableItemStyle
            object that allows you to set the appearance of the filter item in a
            GridTableView
            control.

###  FooterStyle `GridTableItemStyle`

Manage visual style of the footer item.

###  Frame `GridTableFrame`

Gets or sets a value specifying the frame table attribute.

#### Remarks
The frame attribute for a table specifies which sides of the frame surrounding
            the table will be visible. Possible values:void: No sides. This is the default
            value.above: The top side only.below: The bottom side only.hsides: The top and bottom sides only.vsides: The right and left sides only.lhs: The left-hand side only.rhs: The right-hand side only.box: All four sides.border: All four sides

###  GridLines `GridLines`

Gets or sets a value indicating whether the border lines for grid cells will be
            displayed.

#### Remarks
Use the GridLines property to specify the gridline style for
                a GridTableView control. The following table lists the available
                styles.StyleDescriptionGridLines.NoneNo gridlines are displayed.GridLines.HorizontalDisplays the horizontal gridlines only.GridLines.VerticalDisplays the vertical gridlines only.GridLines.BothDisplays both the horizontal and vertical
                            gridlines.

###  GridLines `GridLines`

Gets or sets a value that specifies the gridline styles for controls that display items in a table
            structure.

###  GroupByExpressions `GridGroupByExpressionCollection`

Adding  to this collection will cause the
                current table-view to display items sorted and devided in groups separated by
                s, that display common group and aggregate
                field values. See  on details of
                expressions syntax.

#### Remarks
Note that the correctness of the expressions in the collection is
                checked when DataBind occures. Then if an expression in not correct or a
                combination of expressions is erroneous a 
                would be thrown on . This property's value is preserved
                in the ViewState.

###  GroupFooterTemplate `ITemplate`

Gets or sets the group footer ItemTemplate.

###  GroupHeaderFooterIndexMap `Dictionary`2`

Returns a Dictionary of group header index and the corresponsding group footer item

###  GroupHeaderItemStyle `GridTableItemStyle`

Manage visual style of the group header items.

###  GroupHeaderTemplate `ITemplate`

Gets or sets the group header ItemTemplate.

###  GroupLoadMode `GridGroupLoadMode`

Specifies where the grouping will be handled. There are two options:Server-side - GridTableView.GroupLoadMode.ServerClient-side -
            GridTableView.GroupLoadMode.Client

#### Remarks
GridTableView.GroupLoadMode.ServerThis is the default behavior. Groups are expanded after postback to the server
            for example:
            <MasterTableView GroupLoadMode="Server">GridTableView.GroupLoadMode.ClientGroups will be
            expanded client-side and no postback will be performed.
            <MasterTableView GroupLoadMode="Client">
            and set the client setting AllowGroupExpandCollapse to
            true:
            <ClientSettings AllowGroupExpandCollapse="True">

###  GroupsDefaultExpanded `Boolean`

Gets or sets a value indicating whether the groups will be expanded on grid load
            (true by default).

###  HasDetailTables `GridTableViewCollection`

Gets a value indicating if the GridTableView instance has
            children (Detail) tables.

###  HasMultiHeaders `Boolean`

Gets value indicating whether the GridTableView will render multiple headers. Read only.

###  HeaderStyle `GridTableItemStyle`

Gets a reference to the
                GridTableItemStyle
                object that allows you to set the appearance of the header item in a
                GridTableView
                control.

#### Remarks
Use the HeaderStyle property to control the appearance of
                the header item in a GridTableView control. This property is
                read-only; however, you can set the properties of the
                GridTableItemStyle object it returns. The properties can be set
                declaratively using one of the following methods:Place an attribute in the opening tag of the
                    GridTableView control in the form
                    Property-Subproperty, where Subproperty is a
                    property of the GridTableItemStyle object (for example,
                    HeaderStyle-ForeColor).Nest a <HeaderStyle> element between the opening
                    and closing tags of the GridTableView control.The properties can also be set programmatically in the form
                Property.Subproperty (for example,
                HeaderStyle.ForeColor). Common settings usually include a custom
                background color, foreground color, and font properties.

###  HierarchyDefaultExpanded `Boolean`

Gets or sets a value indicating whether the hierarchy will be expanded by
            default. The default value of the property is false.

###  HierarchyIndex `String`

The unique hierarchy index of the current table view, generated when it is
            binding.

###  HierarchyLoadMode `GridChildLoadMode`

Gets or sets a value indicating when the DataBind of the child
                    GridTableView will occur when working in hierarchy mode.
                    Accepts values from  enumeration. See the
                    remars for details.

#### Remarks
Changing this propery value impacts the performance the following way:In ServerBind mode - Roundtrip to the database only when
                    grid is bound. ViewState holds all detail tables data. Only detail table-views
                    of the expanded items are rendered. Postback to the server to expand an
                    itemIn ServerOnDemand mode - Roundtrip to the database when
                    grid is bound and when item is expanded. ViewState holds data for only visible
                    Items (smallest possible). Only detail table-views of the expanded items are
                    rendered. Postback to the server to expand an item.In Client mode - Roundtrip to the database only when
                    grid is bound. ViewState holds all detail tables data. All items are rendered -
                    even is not visible (not expanded). NO postback to the server to expand an item
                    - expand/collapse of hierarchy items is managed client-side.Note: In order to use client-side hierarchy expand, you will
                    need to set also
                    
                    to true.

###  HorizontalAlign `HorizontalAlign`

Gets or sets a value indicating the horizontal alignment of the grid
                table.

#### Remarks
Use the HorizontalAlign property to specify the horizontal
                alignment of a GridTableView control within the page. The
                following table lists the different horizontal alignment styles.Alignment valueDescriptionHorizontalAlign.NotSetThe horizontal alignment of the GridTableView
                            control has not been set.HorizontalAlign.LeftThe GridTableView control is left-aligned on the
                            page.HorizontalAlign.CenterThe GridTableView control is centered on the
                            page.HorizontalAlign.RightThe GridTableView control is right-aligned on the
                            page.HorizontalAlign.JustifyThe GridTableView control is aligned with both the
                            left and right margins of the page.

###  HorizontalAlign `HorizontalAlign`

Gets or sets a value that specifies the horizontal alignment of items within a container.

###  ID `String`

Gets or sets the programmatic identifier assigned to the current
            GridTableView.

#### Remarks
This property is set automatically by RadGrid object that
                owns this instance.

###  InsertItemDisplay `GridInsertItemDisplay`

Gets or sets a value determining the position of the .

###  InsertItemPageIndexAction `GridInsertItemPageIndexAction`

Gets or sets on which page the  will go after item insertion.

###  InsertMethod `String`

Gets or sets the name of the method to call in order to insert data

###  IsFilterItemExpanded `Boolean`

Gets or sets the Expanded value of the .

###  IsItemInserted `Boolean`

Gets or sets a value indicating if the GridTableView is
            currently in insert mode.

#### Remarks
The ItemInserted property indicates if the GridTableView is
                currently in insert mode. After setting it you should call the
                 method. You can also use the
                 method, that will also reposition the grid to show
                the last page, where the newly inserted item is generally displayed.

###  Items `GridDataItemCollection`

Gets a collection of GridDataItem objects that represent the data items in a
                GridDataItem
                control.

#### Remarks
The Items property (collection) is used to store the data items
            in a GridTableView control. The GridTableView control
            automatically populates the Items collection by creating a
            GridDataItem object for each record in the data source and then adding
            each object to the collection. This property is commonly used to access a specific item
            in the control or to iterate though the entire collection of items.

###  ItemsCreated `GridDataItemCollection`

Indicates whether the items have been created, generally by data-binding.

###  ItemsHierarchy `GridDataItemCollection`

Gets a collection of all data items of a grid table view and items that belong
                    to child tables of the GridTableView if the hierarchy is
                    expanded. The items are collected depth-first. The property
                     actually referres to
                    ItemsHierarchy of. This property can be used to
                    traverse all
                    DataItems items in the hiearchy of a GridTableView.

###  ItemStyle `GridTableItemStyle`

Gets a reference to the
                GridTableItemStyle
                object that allows you to set the appearance of items in a
                GridTableView
                control.

###  ItemTemplate `ITemplate`

Gets or sets the ItemTemplate, which is rendered in the control in normal
            (non-Edit) mode.

###  MaxColumnSpan `Int32`

Caches the maximum column span value of the current tableview

###  MultiHeaderItemStyle `GridTableItemStyle`

Gets a referenct to the
            GridTableItemStyle
            object that allows you to set the appearance of the multi header item in a
            GridTableView
            control.

###  Name `String`

Gets or sets the name of the
            GridTableView.

#### Remarks
The Name property can be used distinguish different
            GridTableView instances. Often used to set different settings for
            different views conditionally.

###  NestedViewSettings `GridNestedViewSettings`

Gets a set of options for the GridTableView's data-bound
            nested view template.

###  NestedViewTemplate `ITemplate`

Gets or sets the ItemTemplate, which is rendered in the control in normal
            (non-Edit) mode.

###  NoDetailRecordsText `String`

Gets or sets the text that will be displayed in there is no
                 defined and no records in the Detail tables.

#### Remarks
The empty data row is displayed in a GridTableView control when
            the data source that is bound to the control does not contain any records. Use the
            NoMasterRecordsText and NoDetailRecordsText property
            to specify the text to display in the empty data item. Alternatively, you can define
            your own custom user interface (UI) for the empty data item by setting the
            NoRecordsTemplate property instead of this property.

###  NoMasterRecordsText `String`

Gets or sets the text that will be displayed in there is no
                 defined and no records in the
                MasterTableView.

#### Remarks
The empty data row is displayed in a GridTableView control when
            the data source that is bound to the control does not contain any records. Use the
            NoMasterRecordsText and NoDetailRecordsText property
            to specify the text to display in the empty data item. Alternatively, you can define
            your own custom user interface (UI) for the empty data item by setting the
            NoRecordsTemplate property instead of this property.

###  NoRecordsTemplate `ITemplate`

Gets or sets the template that will be displayed if a
                GridTableView
                control is bound to a data source that does not contain any records.

#### Remarks
You can set the text that will appear in the NoRecordsTemplate through
                    NoMasterRecordsText and
                    NoDetailRecordsText properties.
                By default if Items.Count equals 0,
                GridTableView will render no records message.If NoRecordsTemplate and
                NoMasterRecordsText/NoDetailRecordsText are set,
                the NoRecordsTemplate property has priority.

###  OverrideDataSourceControlSorting `Object`

Gets or sets a value indicating if the GridTableView should override the
            default DataSourceControl sorting with grid native sorting.

#### Remarks
You can set this to true in case of ObjectDataSource with IEnumerable data without implemented sorting.

###  OwnerGrid `RadGrid`

Gets the owner RadGrid object.

###  OwnerID `String`

Gets the ClientID of the RadGrid object that contains this instance.

###  PageCount `Int32`

Gets the number of pages required to display the records of the data source
                in a GridTableView
                control.

#### Remarks
When the paging feature is enabled (by setting the
            AllowPaging
            Property to true), use the PageCount property to
            determine the total number of pages required to display the records in the data source.
            This value is calculated by dividing the total number of records in the data source by
            the number of records displayed in a page (as specified by the
            PageSize
            property) and rounding up.

###  PagerStyle `GridPagerStyle`

Gets a reference to the
            GridPagerStyle object
            that allows you to set the appearance of the pager item in a
            GridTableView
            control.

#### Remarks
Use the PagerStyle property to control the appearance of the
                pager item in a GridTableView control. The pager item is displayed
                when the paging feature is enabled (by setting the AllowPaging
                property to true) and contains the controls that allow the user to
                navigate to the different pages in the control. This property is read-only;
                however, you can set the properties of the GridPagerStyle object it returns. The
                properties can be set declaratively using one of the following methods:Place an attribute in the opening tag of the
                    GridTableView control in the form
                    Property-Subproperty, where Subproperty is a
                    property of the GridPagerStyle object (for example,
                    PagerStyle-ForeColor).Nest a <PagerStyle> element between the opening
                    and closing tags of the GridTableView control.The properties can also be set programmatically in the form
                Property.Subproperty (for example,
                PagerStyle.ForeColor). Common settings usually include a custom
                background color, foreground color, and font properties.

###  PagerTemplate `ITemplate`

Gets or sets the custom content for the pager item in a
                GridTableView
                control.

#### Remarks
If this template is set, RadGrid will not create the default
            pager controls.

###  PageSize `Int32`

Specify the maximum number of items that would appear in a page, when paging is
                    enabled by  or
                     property. Default value is the value of
                    .

#### Remarks
When the paging feature is enabled (by setting the
            AllowPaging
            property to true), use the PageSize property to specify the number of
            records to display on a single page.

###  PagingManager `GridPagingManager`

Gets a Paging object that is the result of paging settings and runtime paging
            state of the grid.

#### Remarks
Note that changes made to this object would not have
            effect on the structure of the grid.

###  ParentItem `GridDataItem`

Gets a reference to a GridItem that is a parent of this
            GridTableView, when this GridTableView represents a
            child table in a hierarchical structure.

#### Remarks
Whenever a page is requested, a hierarchy of server controls on that page is
            built. This property allows you to determine the parent control of the current server
            control in that hierarchy, and to program against it.

###  ParentTableRelation `GridTableViewRelation`

Gets or sets the collection of data-field pairs that describe the relations in a
            hierarchical grid.

#### Remarks
If you have specified the relations RadGrid will automatically
                filter the child data-source when when binding detail-tables. The specified
                 in each
                 in this collection should be a Key that is
                specified in the parent table's  array. Each
                DetailKeyField specfied should also be included in this
                GridTableView's DataKeyNames array.
                MasterTableView does not need any
                ParentTableRelations.

###  PersistWhiteSpacesInFilter `Boolean`

Gets or sets a value indicating whether white-space characters inside the filter expression will be trimmed.

#### Remarks
When the value is true, it will not be trimmed and any white-space 
                    characters in it will be included in the filter expression.

###  RenderActiveItemStyle `GridTableItemStyle`

Gets the rendering style of an ActiveItem.

###  RenderAlternatingItemStyle `GridTableItemStyle`

Gets the rendering style of the AlternatingItem.

###  RenderColumns `GridColumnCollection`

Gets an array of all columns that are used when rendering the grid
            instance.

#### Remarks
Modifying the array would not affect rendering as it is regenerated before
                each data-bind. To modify the list of columns available use
                 property.

###  RenderCommandItemStyle `GridTableItemStyle`

Gets the rendering style of a CommandItem.

###  RenderEditItemStyle `GridTableItemStyle`

Gets the rendering style of an edit Item.

###  RenderFilterItemStyle `GridTableItemStyle`

Gets the rendering style of a FilterItem.

###  RenderFooterStyle `GridTableItemStyle`

Gets the rendering style of an FooterItem.

###  RenderGroupHeaderItemStyle `GridTableItemStyle`

Gets the rendering style of the group header items.

###  RenderHeaderStyle `GridTableItemStyle`

Gets the rendering style of a GridHeaderItem.

###  RenderItemStyle `GridTableItemStyle`

Gets the rendering style of an Item.

###  RenderMultiHeaderItemStyle `GridTableItemStyle`

Gets the rendering style of a MultiHeaderItem.

###  RenderPagerStyle `GridPagerStyle`

Gets the rendering style of the Pager item.

###  RequiresBinding `Boolean`

Gets or sets a value indicating whether RadGrid will be built on
            PreRender unless it was built before that. This property is supposed for
            Telerik RadGrid internal usage, yet you can set it with care.

###  ResolvedDataSourceView `GridEnumerableBase`

Gets a DataView object that represents the data sent to the
                 to be displayed.

#### Remarks
ResolvedDataSourceView is available only in  event
                handler i.e. when the grid is bound.

###  RetainExpandStateOnRebind `Boolean`

Gets or sets a value indicating if the  property of both hierarchy and group items will be
            retained after a call to  or  method.

###  RetrieveAllDataFields `Boolean`

Gets or sets a value indicating whether the GridTableView
                will extract all bindable properties from the DataSource when
                binding, to perform operations like sorting, grouping, etc on DataFields that are
                not included in the column declarations.

#### Remarks
You can also use the  array to indicate
                RadGrid DataFieldNames that should be sorted, grouped, ect and are
                not included as columns.

###  RetrieveDataTypeFromFirstItem `Boolean`

Gets or sets a value indicating whether items' data type should be
            retrieved from supplied enumerable's first item.

#### Remarks
You should enable this property in scenarios in which the item type should not
            be retrieved from the enumerable's generic argument but from its first item's
            type. Such cases will be the use of various O/R Mappers  where the enumerable
            is a entity base class and does not contains the actual object's properties.

###  RetrieveNullAsDBNull `Boolean`

Gets or sets a value indicating whether null values in the
                database will be retrieved as dbnull values.

###  RowIndicatorColumn `GridRowIndicatorColumn`

Gets a reference to the  object, allowing
            you to customize its settings.

#### Remarks
The property setter does nothing and should not be used. It works around a bug in the VS.NET designer.

###  SelectedItemStyle `GridTableItemStyle`

Gets a reference to the
            Style object that allows you to set the appearance of the selected item
               in a GridTableView
               control.

#### Remarks
Use the SelectedItemStyle property to control the appearance
                of the selected item in a GridTableView control. This property is read-only;
                however, you can set the properties of the Style object it
                returns. The properties can be set declaratively using one of the following
                methods:Place an attribute in the opening tag of the
                    GridTableView control in the form
                    Property-Subproperty, where Subproperty is a
                    property of the Style object (for example,
                    SelectedItemStyle-ForeColor).Nest a <SelectedRowStyle> element between the
                    opening and closing tags of the GridTableView control.The properties can also be set programmatically in the form
                Property.Subproperty (for example,
                SelectedItemStyle.ForeColor). Common settings usually include a
                custom background color, foreground color, and font properties.

###  SelectMethod `String`

Gets or sets the name of the method to call in order to read data

###  SelfHierarchySettings `GridSelfHierarchySettings`

Gets a set the options for GridTableView's self-hierarchy
            behavior.

###  ShowFooter `Boolean`

Gets or sets a value indicating if the  will be
                shown in the current GridTableView.

###  ShowGroupFooter `Boolean`

Gets or sets a value indicating if the  will be
                shown in the current GridTableView.

###  ShowHeader `Boolean`

Gets or sets a value indicating if the  will be
                shown in the current GridTableView.

###  ShowHeadersWhenNoRecords `Boolean`

If set to true (the default)
            GridNoRecordsItem
            is used to display no records template. This item is the only one displayed in the
            GridTableView in this case.

###  SortExpressions `GridSortExpressionCollection`

Gets a collection of sort expressions for this table view instance, associated
            with the column or columns being sorted.

#### Remarks
Modifying the SortExpressions collection will result in change
                    of the order of appearance of items in the table view. If
                     is set to false this collection can
                    only contain one item. Adding other  in
                    the collection in this case will cause existing expression to be deleted or if
                    GridSortExpression with the same same
                     exist its
                     will be changed.
                This property's value is preserved in the ViewState.

###  SortHeaderContextMenuColumns `Boolean`

Gets or sets a value indicating whether the Columns in the  
                 will be sorted by default.

###  Summary `String`

Gets or sets the 'summary' attribute for the respective table.

#### Remarks
This attribute provides a summary of the table's purpose and structure for user
            agents rendering to non-visual media such as speech and Braille. This property is a
            part of Telerik RadGrid accessibility features.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  TableLayout `GridTableLayout`

Gets or sets a string that indicates whether the table layout is fixed.

#### Remarks
The value of the TableLayout property is a string that
                    specifies or receives one of the following GridTableLayout
                    enumeration values: 
                    AutoDefault (except in some scenarios, e.g. when using static headers with grouping or hierarchy). Column width is set by the widest unbreakable content in
                            the column cells.Fixed
                                Table and column widths are set either by the sum of the
                                widths on the  objects or, if these are
                                not specified, by the width of the first row of cells. If no width
                                is specified for the table, it renders by default with width=100%.

###  TimeZoneID `String`

Gets or sets the current time zone GridTableView is operating in

###  TimeZoneProvider `TimeZoneInfoProvider`

Gets a reference to the TimeZoneInfoProvider which exposes methods for 
                converting DateTime values according to certain time zone.

###  UpdateMethod `String`

Gets or sets the name of the method to call in order to update data

###  UseAllDataFields `Boolean`

Gets or sets a value indicating whether the GridTableView
                should use all retieved properties from the DataSource when
                binding, to perform operations like sorting, grouping, etc on DataFields that are
                not included in the column declarations.

#### Remarks
You can also use the  array to indicate
                RadGrid DataFieldNames that should be sorted, grouped, ect and are
                not included as columns.

###  VirtualItemCount `Int32`

###  Width `Unit`

Gets or sets the width of the Web server control.

## Methods

###  BuildMultiHeaderStructure

recursively calculates a number of properties (col and row spans, visibility, order indexes etc.) for each cell in the multi header structure

#### Returns

`System.Int32[]` the colSpan of the top multiheader cell

###  ClearEditItems

Removes all edit items that belong to the GridTableView
            instance.

#### Returns

`System.Void` 

###  ClearEditItemsAfterPageSizeChanged

Clears any edited items with an index greater than the new page size.

#### Parameters

#### newPageSize `System.Int32`

The new page size.

#### Returns

`System.Void` 

###  ClearSelectedItems

Removes all selected items that belong to this GridTableView
            instance.

#### Returns

`System.Void` 

###  ClearTableViewScriptControls

Export-specific method. Clears the table view controls of type IScriptControl and IExtenderControl

#### Parameters

#### control `System.Web.UI.Control`

Control parameter passed through the recursive method

#### Returns

`System.Void` 

###  CreateControlHierarchy

Recreates all GridItems and chld controls, using the DataSource or the ViewState

#### Parameters

#### useDataSource `System.Boolean`

'True' means that DataBind() is executing. 'False' means that Viewtate 
            has been just loaded after postback.

#### Returns

`System.Void` 

###  CreateTableView

This method is used by RadGrid internally. Please do not use.

#### Returns

`Telerik.Web.UI.GridTableView` 

###  DataBind

Binds the data source to the RadGrid instance.

#### Remarks
Call this member to bind partially RadGrid. Before calling this
                method the  property should be assigned or you can use
                 method instead. Use 
                or  member to bind all
                GridTableViews in RadGrid.

#### Returns

`System.Void` 

###  ExportToCSV

Exports the grid data in CSV format using the properties set in ExportSettings

#### Returns

`System.Void` 

###  ExportToExcel

Exports the grid data in Microsoft Excel format using the properties set in the
            ExportSettings.

#### Returns

`System.Void` 

###  ExportToPdf

Exports the grid data in PDF format using the properties set in the
            ExportSettings.

#### Returns

`System.Void` 

###  ExportToWord

Exports the grid data in Microsoft Word format based on the selected ExportSettings.

#### Returns

`System.Void` 

###  ExtractValuesFromItem

The passed IDictionary object (like Hashtable for example) will be filled with the
                names/values of the corresponding column data-fields and their values. Only
                instances of type  support extracting values.

#### Parameters

#### newValues `System.Collections.IDictionary`

the dictionary that will be filled

#### editedItem `Telerik.Web.UI.GridEditableItem`

the item to extract values from

#### Returns

`System.Void` 

###  FindItemByKeyValue

Finds the  based on specified key name and key value.

#### Parameters

#### keyName `System.String`

The key name.

#### keyValue `System.Object`

The key value.

#### Returns

`Telerik.Web.UI.GridDataItem` 

###  FindItemsByKeyValues

Finds a collection of  objects based on a  of key values.

#### Parameters

#### dictionary `System.Collections.IDictionary`

The dictionary containing key values..

#### Returns

`Telerik.Web.UI.GridDataItem[]` 

###  GenerateXlsxOutput

Generates the text representing the Export Output for Microsoft Excel XSLX format using the properties set in the
            ExportSettings.

#### Returns

`System.String` 

###  GetBatchColumnEditor

Returns the column editor for the specified column for EditMode="Batch".
            Note that you should use GetBatchEditorContainer method for template columns
            which will return the panel container and then use a FindControl method to find your control.

#### Parameters

#### column `Telerik.Web.UI.GridColumn`

The column for which the column editor will be returned.

#### Returns

`Telerik.Web.UI.IGridColumnEditor` Returns the column editor associated with the column.

###  GetBatchColumnEditor

Returns the column editor from the specified column UniqueName for EditMode="Batch".
            Note that you should use GetBatchEditorContainer method for template columns
            which will return the panel container and then use a FindControl method to find your control.

#### Parameters

#### columnUniqueName `System.String`

The column unique name for which the column editor will be returned.

#### Returns

`Telerik.Web.UI.IGridColumnEditor` Returns the column editor associated with the column.

###  GetBatchEditorContainer

Returns the  that holds the controls initialized from a template or editor for EditMode="Batch".

#### Parameters

#### column `Telerik.Web.UI.GridColumn`

The column for which the container will be returned.

#### Returns

`System.Web.UI.WebControls.Panel` Returns the  container associated with the column.

###  GetBatchEditorContainer

Returns the  that holds the controls initialized from a template or editor for EditMode="Batch".

#### Parameters

#### columnUniqueName `System.String`

The column unique name for which the column editor will be returned.

#### Returns

`System.Web.UI.WebControls.Panel` Returns the  container associated with the column.

###  GetColumn

Returns a  based on its
            .

#### Parameters

#### columnUniqueName `System.String`

The  for the requested column.

#### Returns

`Telerik.Web.UI.GridColumn` The GridColumn object related to the
            columnUniqueName.

###  GetColumnSafe

Returns a  based on its
            .

#### Parameters

#### columnUniqueName `System.String`

The  for the requested column.

#### Returns

`Telerik.Web.UI.GridColumn` 

###  GetEntitySqlFilterExpression

Returns the filter expression for the current table view object using the Entity SQL syntax. This would work only when EnableLinqExpressions property is enabled.

#### Returns

`System.String` String value containing the ESQL filter expression

###  GetHeaderCellByColumnUniqueName

Obtains the  in the header that corresponds to the column unique name passed as an argument.

#### Parameters

#### uniqueName `System.String`

The targeted column unique name

#### Returns

`Telerik.Web.UI.GridTableHeaderCell` A  representing the column header cell

###  GetInsertItem

Get the item that appears when grid is in Insert Mode.

#### Remarks
There is scenarios in which you need to make some changes with/depending on
                the inserted item.If you want to predifine some controls values on item insertion, you should
                use the ItemCommand server-side event to access it:
            [C#]private void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e){  if (e.CommandName == RadGrid.InitInsertCommandName)
              {    e.Canceled = true;
                e.Item.OwnerTableView.InsertItem();    GridEditableItem insertedItem = e.Item.OwnerTableView.GetInsertItem();
                GridEditFormItem editFormItem = insertedItem as GridEditFormItem;     TextBox box = editFormItem.FindControl("txtEmployeeID") as TextBox;    box.Text = "11";  }}
                [VB.NET]
                
            Private Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand         If (e.CommandName = RadGrid.InitInsertCommandName) Then
                        e.Canceled = True            e.Item.OwnerTableView.InsertItem()             Dim insertedItem As GridEditableItem = e.Item.OwnerTableView.GetInsertItem()
                         Dim editFormItem As GridEditFormItem = CType(insertedItem, GridEditFormItem)             Dim box As TextBox = CType(MyUserControl.FindControl("insertedItem"), TextBox)            box.Text = "11"         End If End Sub
                If you want to get access to
                the newly added row and its values to update in a custom data source, you can use
                the InsertCommand event:[C#]protected void RadGrid1_InsertCommand(object source, GridCommandEventArgs e)   {       GridDataInsertItem gridDataInsertItem =           (GridDataInsertItem)(RadGrid1.MasterTableView.GetInsertItem());
                Hashtable ht = new Hashtable();       gridDataInsertItem.ExtractValues(ht);       //Loop through each "DictionaryEntry" in hash table and insert using key value      foreach (DictionaryEntry ent in ht)  
                 {           //get the key values and insert to custom datasource.      } }[Visual Basic]
            Protected Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)    Dim gridDataInsertItem As GridDataInsertItem = CType(RadGrid1.MasterTableView.GetInsertItem,GridDataInsertItem)
                Dim ht As Hashtable = New Hashtable    gridDataInsertItem.ExtractValues(ht)    'Loop through each "DictionaryEntry" in hash table and insert using key value     For Each ent As DictionaryEntry In ht
                    'get the key values and insert to custom datasource.     NextEnd Sub

#### Returns

`Telerik.Web.UI.GridEditableItem` A reference to the newly inserted item for the respective GridTableView.

###  GetItems

Returns a collection of  objects based on their
                 .

#### Parameters

#### includeItemTypes `Telerik.Web.UI.GridItemType`

The , which will be used as a criteria for
            the collection.

#### Returns

`Telerik.Web.UI.GridItem[]` A s collection of objects based on their
                .

###  GetPageSizes

Get a list of the page sizes set declaratively either in the current table view or in the owner grid.
            Default value is {10,20,50}

#### Returns

`System.Int32[]` List of page sizes

###  GetSelectedItems

Gets the currently  selected items.

#### Returns

`Telerik.Web.UI.GridDataItem[]` Returns an Array of  
            objects representing the currently selected items.

###  InsertItem

Places the GridTableView in insert mode, allowing user to insert a new data-item
                values. The  will be set to display the last
                page. You can use also the  to place the
                GridTableView in insert mode.

#### Returns

`System.Void` 

###  InsertItem

Places the GridTableView in insert mode, allowing the user to insert a new
                data-item values. The GridInsertItem created will be bound to values of the
                newDataItem object. The  will be set to display
                the last page. You can use also the  property to
                place the GridTableView in insert mode.

#### Returns

`System.Void` 

###  InsertItem

Places the GridTableView in insert mode, allowing the user to insert a new
                data-item values. The GridInsertItem created will be bound to values found in
                newValues dictionary; The  will be set to
                display the last page. You can use also the  to
                place the GridTableView in insert mode.

#### Returns

`System.Void` 

###  PerformDelete

Perform asynchronous delete operation, using the DataSourceControl API the Rebinds the grid. Please make sure you have specified the correct DataKeyNames for the GridTableView.
            When the asynchronous operation calls back, RadGrid will fire  event.

#### Parameters

#### editedItem `Telerik.Web.UI.GridEditableItem`

The item that should be deleted

#### Returns

`System.Void` 

###  PerformDelete

Perform delete operation, using the DataSourceControl API. Please make sure you have specified the correct DataKeyNames for the GridTableView.

#### Parameters

#### editedItem `Telerik.Web.UI.GridEditableItem`

The item that should be deleted

#### suppressRebind `System.Boolean`

Set to true to stop error from binding

#### Returns

`System.Void` 

###  PerformInsert

Perform asynchronous insert of the new item, diplayed by RadGrid when in edit mode,
                using the DataSourceControl API, then . When the
                asynchronous operation calls back, RadGrid will fire
                 event.

#### Returns

`System.Void` 

###  PerformInsert

Performs asynchronous insert operation, using the DataSourceControl API, then
            Rebinds. When the asynchronous operation calls back, RadGrid will fire
             event.

#### Parameters

#### editedItem `Telerik.Web.UI.GridEditableItem`

item to be inserted

#### Returns

`System.Void` 

###  PerformInsert

Perform asynchronous insert operation, using the DataSource control API.
            When the asynchronous operation calls back, RadGrid will fire  event.

#### Parameters

#### editedItem `Telerik.Web.UI.GridEditableItem`

the item to be inserted

#### suppressRebind `System.Boolean`

True to prevent from binding after the insert operartion completes.

#### Returns

`System.Void` 

###  PerformUpdate

Perform asynchronous update operation, using the DataSource control API and the
                Rebind method. Please, make sure you have specified the correct
                DataKeyNames for the . When the
                asynchronous operation calls back, RadGrid will fire
                 event.

#### Remarks
The following online example uses PerformUpdate method:
                Edit on double-click

#### Returns

`System.Void` 

###  PerformUpdate

Perform asynchronous update operation, using the DataSource control API. Please
                make sure you have specified the correct DataKeyNames for the
                GridTableView. When the asynchronous operation calls back, RadGrid will fire
                 event. The boolean property defines if
                RadGrid will  after the update.

#### Parameters

#### editedItem `Telerik.Web.UI.GridEditableItem`

the item that is in edit mode and should be updated

#### suppressRebind `System.Boolean`

set to true to prevent grid from binding after the update operation completes

#### Returns

`System.Void` 

###  PrepareControlHierarchy

Applies all view changes to control hierarchy before rendering

#### Returns

`System.Void` 

###  Rebind

Forces the Owner RadGrid to fire
                 event then calls
                .

#### Remarks
The Rebind method should be called every time a change to the
            RadGrid columns/items has been made.

#### Returns

`System.Void` 

###  SetShouldBindInvisibleColumns

Checks the value of the BindGridInvisibleColumns key in the configuration and caches it in the RadGrid object

#### Returns

`System.Void` 

###  SwapColumns

Swaps columns appearance position using the unique names of the two
            columns.

#### Parameters

#### columnName1 `System.String`

first column unique name

#### columnName2 `System.String`

second column unique name

#### Returns

`System.Void` 

###  SwapColumns

Swaps columns appearance position using the column instances.

#### Parameters

#### column1 `Telerik.Web.UI.GridColumn`

The first column.

#### column2 `Telerik.Web.UI.GridColumn`

The second column.

#### Returns

`System.Void` 

###  SwapColumns

Swaps columns appearance position using order indexes of the two columns.

#### Remarks
You should have in mind that GridExpandColumn and
            RowIndicatorColumn are always in front of data columns so that's why
            you columns will start from index 2.

#### Parameters

#### orderIndex1 `System.Int32`

first column order index

#### orderIndex2 `System.Int32`

second column order index

#### Returns

`System.Void` 

###  ValidateColGroupStructure

Validates whether the tree-like multiheader structure is defined correctly

#### Parameters

#### columns `Telerik.Web.UI.GridColumn`

The grid's column collection

#### groups `System.Collections.Generic.Dictionary{System.String,Telerik.Web.UI.GridColumnGroup}`

The dictionary which contains all column groups

#### Returns

`System.Void` 

