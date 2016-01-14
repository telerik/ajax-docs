---
title: Telerik.Web.UI.RadPivotGrid
page_title: Telerik.Web.UI.RadPivotGrid
description: Telerik.Web.UI.RadPivotGrid
---

# Telerik.Web.UI.RadPivotGrid

RadPivotGrid control. See the http://docs.telerik.com/devtools/aspnet-ajax/controls/pivotgrid/overview Overview topicfor more information about this control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* System.Web.UI.WebControls.CompositeDataBoundControl
* Telerik.Web.UI.RadCompositeDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadPivotGrid : IPostBackEventHandler

## Properties

###  AccessibilitySettings `PivotGridAccessibilitySettings`

Gets a reference to the 
             object that allows
            you to set the properties of the  control's 
            child controls for purpose and structure for user
            agents rendering to non-visual media such as speech and Braille

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the
            Web server control.

###  AggregatesLevel `Int32`

Gets or sets a value that indicates the aggregate level.

###  AggregatesPosition `PivotGridAxis`

Gets or sets a value that indicates if the aggregate will be placed in the row axis or the column axis.

###  AllowFiltering `Boolean`

Gets or sets a value indicating whether the filtering feature is enabled.

###  AllowNaturalSort `Boolean`

Gets or sets a value indicating whether natural sorting is enabled.

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the paging feature is
            enabled.

###  AllowSorting `Boolean`

Gets or sets a value indicating whether the sorting feature is enabled.

###  AlwaysAutoBindOnPostBack `Boolean`

Gets if the grid is always bound on post-back (when the view state is disabled).

###  BackColor `Color`

Gets or sets the background color of the Web server control.

###  BorderColor `Color`

Gets or sets the border color of the Web control.

###  BorderStyle `BorderStyle`

Gets or sets the border style of the Web server control.

###  BorderWidth `Unit`

Gets or sets the border width of the Web server control.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientSettings `PivotGridClientSettings`

Gets a reference to the 
             object that allows
            you to set the properties of the client-side behavior and
            appearance in a Telerik  control.

###  CollapsedColumnIndexes `HashSet`1`

Gets a collection of the pivot grid's collapsed column groups indexes.

###  CollapsedRowIndexes `HashSet`1`

Gets a collection of the pivot grid's collapsed row groups indexes.

###  ColumnGrandTotalCellStyle `Style`

Style of the column grand totals' cells in the the pivotgrid.

###  ColumnGroupsDefaultExpanded `Boolean`

Gets or sets the default expand state of all column groups
            which will be applied on initial load.

###  ColumnHeaderCellStyle `Style`

Style of the column heades' cells in the the pivotgrid.

###  ColumnHeaderTable `PivotGridColumnHeaderTable`

Gets or sets the column header table

###  ColumnHeaderTableLayout `PivotGridColumnHeaderTable`

Gets or sets a value that indicates whether the column table layout is fixed or auto.

###  ColumnHeaderZoneText `String`

Gets or sets the column zone text when there are no items added to the column header zone.

###  ColumnTotalCellStyle `Style`

Style of the column totals' cells in the the pivotgrid.

###  ConfigurationPanel `PivotGridConfigurationPanel`

Represents the PivotGridConfigurationPanel control which is used
             	to manipulate fields and AggregatesPosition and AggregatesLevel values

###  ConfigurationPanelSettings `PivotGridConfigurationPanelSettings`

Returns a reference to the  object.
            This group contains all settings related to the

###  ContextMenu `PivotGridContextMenu`

Represents the ContextMenu RadMenu control

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web
            server control on the client.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Get/set the selected culture. Localization strings will be loaded based on this value.

###  CurrentPageIndex `Int32`

Gets or sets a value indicating the index of the currently active page in case
            paging is enabled ( is
            true).

###  CustomPageSize `Nullable`1`

Stores a custom PageSize value if such is set when page mode is NextPrevAndNumeric

###  DataCellStyle `Style`

Style of the data cells in the the pivotgrid.

###  DataHeaderZoneText `String`

Gets or sets the data zone text when there are no items added to the data header zone.

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control
            binds to, in cases where the data source contains more than one distinct list
            of data items.

###  DataSource `Object`

Gets or sets the object from which the data-bound control retrieves
            its list of data items.

###  DataSourceID `Object`

Gets or sets the ID of the control from which the data-bound control
            retrieves its list of data items.

###  DataTable `PivotGridDataTable`

Gets or sets the data table

###  EmptyValue `String`

Gets or sets a value that will be displayed in data cells where aggragate values were empty.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableCaching `Boolean`

Gets or sets a string that indicates whether the pivot model should be persisted into the session cache.

###  EnableCachingInternal `Boolean`

Gets or sets a string that indicates whether the pivot model should be persisted into the session cache.

###  EnableConfigurationPanel `Boolean`

Gets or sets if the 
            configuration panel will be enabled. For customization use
            .

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableNoRecordsTemplate `ITemplate`

Gets or sets a value indicating whether the NoRecordsTemplate will be visualized when no records are present

###  EnableTheming `Boolean`

Gets or sets a value indicating whether themes apply to this control.

###  EnableToolTips `Boolean`

Gets or sets a value indicating whether the ToolTips in the PivotGrid will be enabled feature.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

###  EnableZoneContextMenu `Boolean`

Gets or sets a value indicating whether the zone context menu should be 
                 enabled.

###  ErrorValue `String`

Gets or sets a value that will be displayed in data cells where aggragate values could not be calculated.

###  ExportSettings `PivotGridExportSettings`

Gets a reference to the  object that
                    allows you to set the properties of the grouping operation in a
                    Telerik RadGrid control.

###  Fields `PivotGridFieldsCollection`

Gets a collection of PivotGridFieldsCollection objects.

###  FieldSettings `List`1`

Field settings collection. Used by Persistence Framework.

###  FieldSettingsWindow `List`1`

Field settings window. Used by RadPivotGrid configuration panel.
            For more information, please examine the Configuration Panel topic.

###  FieldsPopupSettings `PivotGridFieldsPopupSettings`

Gets a reference to  which holds all properties associated
            with the  Fields Popup functionality which groups the fields in convinient
            popup in order to leave more space for the data to be displayed.

###  FieldsWindow `PivotGridFieldsCollection`

Represents the FieldsWindow RadWindow control which
             	holds all hidden fields

###  FilterDialog `PivotGridFilterDialog`

Represents the dialogues that manages the filter expressions for the TOP/Bottom filter operators.

###  FilterHeaderZoneText `String`

Gets or sets the filter zone text when there are no items added to the filter header zone.

###  Filters `PivotGridFiltersCollection`

RadPivotGrid Filters collection. See the Filtering topic for more information.

###  FiltersPersistence `String`

Filters collection. Used internally by Persistence Framework.

###  FilterWindow `PivotGridFilterWindow`

Represents the window that manages the filter expressions for the pivot grid.

###  Font `FontInfo`

Gets the font properties associated with the Web server control.

###  ForeColor `Color`

Gets or sets the foreground color (typically the color of the text)
            of the Web server control.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  HorizontalScrollDiv `Panel`

Gets the horizontal scroll div.

###  IsSkinSet `String`

For internal use.

###  Items `PivotGridItemCollection`

Gets a collection of RadPivotGridDataItem objects that represent the data items of the current page of data in a RadPivotGrid control

###  LocalizationPath `PivotGridStrings`

Gets or sets a value indicating where RadPivotGrid will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the grid localization file from any location in the 
            web application.

###  NoRecordsTemplate `ITemplate`

Template that will be displayed if there is no aggregated data to show

###  NoRecordsText `String`

Gets or sets the text that will appear in the PivotGridNoRecordsItem when the default no records template is used.

###  OlapSettings `PivotGridOLAPSettings`

Gets a reference to the 
             object that allows
            you to set the configuration parameters for OLAP binding
            in a Telerik  control.

###  OuterTable `PivotGridOuterTable`

Gets or sets the outer table.

###  Overlay `Boolean`

Gets or sets a value indicating whether the Filter window of RadPivotGrid should have Overlay set to ensure popups are over a flash element or Java applet.

###  PageCount `Int32`

Gets the number of pages required to display the records of the data
            source in a  control.

###  PagerStyle `PivotGridPagerStyle`

Style used to change the appearance and styling of the pager

###  PageSize `Int32`

Specify the maximum number of items that would appear in a page,
             when paging is enabled by  property.
             Default value is 10.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderEmptyStringInDataCells `Boolean`

Gets or sets a value that indicates whether the &nbsp; will be rendered into all empty data cells instead of empty string.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RowGrandTotalCellStyle `Style`

Style of the row grand totals' cells in the the pivotgrid.

###  RowGroupsDefaultExpanded `Boolean`

Gets or sets the default expand state of all row groups
            which will be applied on initial load.

###  RowHeaderCellStyle `Style`

Style of the row heades' cells in the the pivotgrid.

###  RowHeaderTable `PivotGridRowHeaderTable`

Gets or sets the row header table

###  RowHeaderTableLayout `PivotGridRowHeaderTable`

Gets or sets a value that indicates whether the row table layout is fixed or auto.

###  RowHeaderZoneText `String`

Gets or sets the header zone text when there are no items added to the row header zone.

###  RowTableLayout `PivotGridLayout`

Gets or sets a value that indicates whether the row table layout will be Tabular, Outline or Fixed.

###  RowTotalCellStyle `Style`

Style of the row totals' cells in the the pivotgrid.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  ShouldBeBound `Boolean`

Gets if the grid should be data-bound.

###  ShowColumnHeaderZone `Boolean`

Gets or set a value indicating whether the column header zone of the pivotgrid will be
            shown.

###  ShowDataHeaderZone `Boolean`

Gets or set a value indicating whether the data header zone of the pivotgrid will be
            shown.

###  ShowFilterHeaderZone `Boolean`

Gets or set a value indicating whether the filter header zone of the pivotgrid will be
            shown.

###  ShowRowHeaderZone `Boolean`

Gets or set a value indicating whether the row header zone of the pivotgrid will be
            shown.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  SortExpressions `PivotGridSortExpressionCollection`

Gets a collection of sort expressions for

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the
            Web server control.

###  ToolTipManager `PivotGridToolTipManager`

Represents the control that manages the settings of 
             	the automatically generated tooltips in the PivotGrid

###  TotalsSettings `PivotGridTotalsSettings`

Returns a reference to the  object. This group contains 
            all the settings that are related to the PivotGrid totals.

###  UseQueryableDataProvider `Boolean`

Gets or sets a value indicating whether the pivotgrid uses IQueryableDataProvider.

###  VerticalScrollDiv `Panel`

Gets the vertical scroll div.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.

###  Width `Unit`

Gets or sets the width of the Web server control.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ClearAllFilters

Clears all previously applied filter expressions.

#### Returns

`System.Void` 

###  ClearFilter

Clears all filter expressions associated with a field.

#### Parameters

#### fieldUniqueName `System.String`

The  which expressions will be cleared.

#### Returns

`System.Void` 

###  ClearFilter

Clears all filter expressions associated with a field.

#### Parameters

#### field `Telerik.Web.UI.PivotGridField`

The  which expressions will be cleared.

#### Returns

`System.Void` 

###  CollapseAllColumnGroups

Collapses all column groups.

#### Parameters

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  CollapseAllColumnGroups

Collapses all column groups at a certain level.

#### Parameters

#### level `System.Int32`

The column level group which will be collapsed.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  CollapseAllFieldGroups

Collapses all row groups which are at the level of the specified field.

#### Parameters

#### field `Telerik.Web.UI.PivotGridRowField`

The field which groups will be collapsed.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  CollapseAllFieldGroups

Collapses all column groups which are at the level of the specified field.

#### Parameters

#### field `Telerik.Web.UI.PivotGridColumnField`

The field which groups will be collapsed.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  CollapseAllRowGroups

Collapses all row groups.

#### Parameters

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  CollapseAllRowGroups

Collapses all row groups at a certain level.

#### Parameters

#### level `System.Int32`

The row level group which will be collapsed.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateAggregateItem

Creates the aggregate item.

#### Returns

`System.Void` 

###  CreateColumnHeaderItems

Creates the HeaderColumn items.

#### Returns

`System.Void` 

###  CreateDataItems

Creates the Data Table which contains calculated aggregates.

#### Returns

`System.Void` 

###  CreateFilterItem

Creates the filter item.

#### Returns

`System.Void` 

###  CreateRowHeaderItems

Creates the HeaderRow items.

#### Returns

`System.Void` 

###  CreateRowItem

Creates the Row item.

#### Returns

`System.Void` 

###  DataBind

Binds a datasource to the invoked RadPivotGrid control and all its child controls.

#### Returns

`System.Void` 

###  ExpandAllColumnGroups

Expands all column groups.

#### Parameters

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  ExpandAllColumnGroups

Expands all column groups at a certain level.

#### Parameters

#### level `System.Int32`

The column level group which will be expanded.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  ExpandAllFieldGroups

Expands all row groups which are at the level of the specified field.

#### Parameters

#### field `Telerik.Web.UI.PivotGridRowField`

The field which groups will be expanded.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  ExpandAllFieldGroups

Expands all column groups which are at the level of the specified field.

#### Parameters

#### field `Telerik.Web.UI.PivotGridColumnField`

The field which groups will be expanded.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  ExpandAllRowGroups

Expands all rows groups.

#### Parameters

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  ExpandAllRowGroups

Expands all column groups at a certain level.

#### Parameters

#### level `System.Int32`

The row level group which will be expanded.

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  ExportToExcel

Exports the pivot grid data in Microsoft Excel format using the properties set in the ExportSettings

#### Returns

`System.Void` 

###  ExportToWord

Exports the pivot grid data in Microsoft Word format using the properties set in the ExportSettings

#### Returns

`System.Void` 

###  FilterBottom

When a Top/Bottom value filter is applied to a given field with the Items mode, it will select the top/bottom groups for 
            that field sorted by the chosen aggregate field and the count of which is given by the filter value. For example, 
            a Top operator with and Items filter value of 10 on the Sum of Cost aggregate field will return the 10 groups 
            (of the field filtered on) which Sum of Cost is greatest. The Percent mode will return the top/bottom groups which 
            cumulative aggregate values (just to remind: the aggregate field being set as part of the filter condition) add to 
            the specified percent of the grand total for that field. The Sum mode, in a similar fashion, gets the top/bottom 
            groups which cumulative aggregate values add to the sum specified by the filter value.

#### Parameters

#### field `Telerik.Web.UI.PivotGridField`

The  that will be filtered.

#### aggregateField `Telerik.Web.UI.PivotGridAggregateField`

The  that will be used to determine
            which values will be used when filtering.

#### aggregateType `Telerik.Web.UI.PivotGridAggregateType`

The aggregate type determining the mode which filters the data.

#### value `System.Double`

The value that will be used for the filtering of the data.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### Returns

`System.Void` 

###  FilterByLabel

Filters by the text value of the field. Label filters control which groups for a given field 
            will remain in the pivot data view after grouping has been performed. If, for example, you 
            have your data grouped by a Country field and you need only those Country groups of items
            that relate to Bulgaria you should apply an Equals label filter to the Country field with 
            the respective string filter value of “Bulgaria”.

#### Parameters

#### filterFunction `Telerik.Web.UI.PivotGridFilterFunction`

The filter function to be applied to the filter expression.

#### field `Telerik.Web.UI.PivotGridField`

The  that will be filtered.

#### filterValue `System.String`

The value that will be used for the filtering of the data.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### Returns

`System.Void` 

###  FilterByLabel

Filters by the text value of the field. Label filters control which groups for a given field 
            will remain in the pivot data view after grouping has been performed.

#### Parameters

#### filterFunction `Telerik.Web.UI.PivotGridFilterFunction`

The filter function to be applied to the filter expression.

#### field `Telerik.Web.UI.PivotGridField`

The  that will be filtered.

#### filterValue `System.String`

The value that will be used for the filtering of the data.

#### betweenFilterValue `System.String`

The value that will be used as the between value when filtering the data.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### ignoreCase `System.Boolean`

A value indicating whether filtering will ignore the case of the value's letters or not.

#### Returns

`System.Void` 

###  FilterByValue

Filters by the values of the field. Value filters, for their part, allow filtering operations 
            to be performed on the aggregate results. Again, the filtering is applied after the grouping 
            of the data. Here is another example: Suppose you have grouped your data by Country, aggregated
            it by Sum of Cost and need only those Country groups of items which cumulative cost falls within
            a certain range. Then you should apply a Between value filter on the Country field with the 
            corresponding filter values.

#### Parameters

#### filterFunction `Telerik.Web.UI.PivotGridFilterFunction`

The filter function to be applied to the filter expression.

#### field `Telerik.Web.UI.PivotGridField`

The  that will be filtered.

#### aggregateField `Telerik.Web.UI.PivotGridAggregateField`

The  that will be used to determine
            which values will be used when filtering.

#### filterValue `System.String`

The value that will be used for the filtering of the data.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### Returns

`System.Void` 

###  FilterByValue

Filters by the values of the field. Value filters, for their part, allow filtering operations 
            to be performed on the aggregate results. Again, the filtering is applied after the grouping 
            of the data.

#### Parameters

#### filterFunction `Telerik.Web.UI.PivotGridFilterFunction`

The filter function to be applied to the filter expression.

#### field `Telerik.Web.UI.PivotGridField`

The  that will be filtered.

#### aggregateField `Telerik.Web.UI.PivotGridAggregateField`

The  that will be used to determine
            which values will be used when filtering.

#### filterValue `System.String`

The value that will be used for the filtering of the data.

#### betweenFilterValue `System.String`

The value that will be used as the between value when filtering the data.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### ignoreCase `System.Boolean`

A value indicating whether filtering will ignore the case of the value's letters or not.

#### Returns

`System.Void` 

###  FilterTop

When a Top/Bottom value filter is applied to a given field with the Items mode, it will select the top/bottom groups for 
            that field sorted by the chosen aggregate field and the count of which is given by the filter value. For example, 
            a Top operator with and Items filter value of 10 on the Sum of Cost aggregate field will return the 10 groups 
            (of the field filtered on) which Sum of Cost is greatest. The Percent mode will return the top/bottom groups which 
            cumulative aggregate values (just to remind: the aggregate field being set as part of the filter condition) add to 
            the specified percent of the grand total for that field. The Sum mode, in a similar fashion, gets the top/bottom 
            groups which cumulative aggregate values add to the sum specified by the filter value.

#### Parameters

#### field `Telerik.Web.UI.PivotGridField`

The  that will be filtered.

#### aggregateField `Telerik.Web.UI.PivotGridAggregateField`

The  that will be used to determine
            which values will be used when filtering.

#### aggregateType `Telerik.Web.UI.PivotGridAggregateType`

The aggregate type determining the mode which filters the data.

#### value `System.Double`

The value that will be used for the filtering of the data.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetItems

Returns a collection of  objects based on their
                 .

#### Parameters

#### types `Telerik.Web.UI.PivotGridItemType`

The , which will be used as a criteria for
            the collection.

#### Returns

`Telerik.Web.UI.PivotGridItem[]` A s collection of objects based on their
                .

###  GetRowZones

Method that returns a collection of all PivotGridRowZone objects in the current RadPivotGrid.

#### Returns

`System.Collections.Generic.List`1` Returns a collection of all PivotGridRowZone objects in the current RadPivotGrid.

###  GetZoneByType

Gets zone by its type.

#### Parameters

#### type `Telerik.Web.UI.PivotGridZoneType`

#### Returns

`Telerik.Web.UI.PivotGridZone` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Boolean` 

###  LoadControlState

Restores control-state information from a previous page request that
            was saved by the 
             method.

#### Parameters

#### savedState `System.Object`

An  that
            represents the control state to be restored.

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  OnInit

Handles the  event.

#### Parameters

#### e `System.EventArgs`

An  object that contains the event data.

#### Returns

`System.Void` 

###  OnItemCommand

Raises  event

#### Parameters

#### e `Telerik.Web.UI.PivotGridCommandEventArgs`

#### Returns

`System.Void` 

###  OnLoad

Handles the  event.

#### Parameters

#### e `System.EventArgs`

An  object that
            contains event data.

#### Returns

`System.Void` 

###  OnNeedDataSource

Raises  event

#### Parameters

#### e `Telerik.Web.UI.PivotGridNeedDataSourceEventArgs`

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  Rebind

Rebinds the RadPivotGrid control. Please see Advanced data-binding topic for more information.

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SaveControlState

Saves any  control state changes that have
            occurred since the time the page was posted back to the server.

#### Returns

`System.Object` Returns the 's current state. If there is
            no state associated with the control, this method returns null.

###  SetFilterExcludes

Sets the values which will be excluded in the results of the .

#### Parameters

#### fieldUniqueName `System.String`

The  which values will be filtered.

#### values `System.Collections.Generic.IEnumerable{System.Object}`

The values will be excluded in the results.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### Returns

`System.Void` 

###  SetFilterIncludes

Set the values which will be included in the results of the .

#### Parameters

#### fieldUniqueName `System.String`

The  which values will be filtered.

#### values `System.Collections.Generic.IEnumerable{System.Object}`

The values that will be included in the results.

#### suppressRebind `System.Boolean`

A value indicating whether a  will 
            be called after the Filter operation.

#### Returns

`System.Void` 

###  Sort

Changes the sort order of the specified field.

#### Parameters

#### fieldUniqueName `System.String`

The UniqueName value of the field for which the sort order will be changed.

#### sortOrder `Telerik.Web.UI.PivotGridSortOrder`

The new sort order.

#### suppressRebind `System.Boolean`

A value indicating whether a Rebind will be called after the Sort operation.

#### Returns

`System.Void` 

###  Sort

Changes the sort order of the specified field.

#### Parameters

#### field `Telerik.Web.UI.PivotGridField`

The field for which the sort order will be changed.

#### suppressRebind `System.Boolean`

A value indicating whether a Rebind will be called after the Sort operation.

#### Returns

`System.Void` 

###  Sort

Changes the sort order of the specified field.

#### Parameters

#### field `Telerik.Web.UI.PivotGridField`

The field for which the sort order will be changed.

#### sortOrder `Telerik.Web.UI.PivotGridSortOrder`

The new sort order.

#### suppressRebind `System.Boolean`

A value indicating whether a Rebind will be called after the Sort operation.

#### Returns

`System.Void` 

###  Sort

Executes the sort expressions which should contain the field UniqueName which will be sorted and
            optionally include the sort order - ASC (Ascending) or DESC (Descending).

#### Parameters

#### expression `System.String`

The expression containing which field will be sorted and
            optionally includes the sort order.

#### suppressRebind `System.Boolean`

A value indicating whether a Rebind will be called after the Sort operation.

#### Returns

`System.Void` 

###  Sort

Executes the provided  if it does not exist
            it will add it in the  or otherwise will
            change the currently added.

#### Parameters

#### expression `Telerik.Web.UI.PivotGridSortExpression`

The .

#### suppressRebind `System.Boolean`

A value indicating whether a  will be called after the Sort operation.

#### Returns

`System.Void` 

###  TryReorderField

Tries to reorder the specified field with new ZoneType and/or new ZoneIndex.

#### Parameters

#### field `Telerik.Web.UI.PivotGridField`

The field reference which will be reordered

#### zoneType `Telerik.Web.UI.PivotGridFieldZoneType`

The new ZoneType for the field

#### zoneIndex `System.Int32`

The new ZoneIndex for the field

#### Returns

`System.Boolean` If the reorder happened or not which could happen if the zoneType
            and zoneIndex are the same

###  TryReorderField

Tries to reorder the specified field with new ZoneType and/or new ZoneIndex.

#### Parameters

#### fieldUniqueName `System.String`

The field unique name which will be reordered

#### zoneType `Telerik.Web.UI.PivotGridFieldZoneType`

The new ZoneType for the field

#### zoneIndex `System.Int32`

The new ZoneIndex for the field

#### Returns

`System.Boolean` If the reorder happened or not if the zoneType and zoneIndex are the same

