---
title: Telerik.Web.UI.RadChart
page_title: Telerik.Web.UI.RadChart
description: Telerik.Web.UI.RadChart
---

# Telerik.Web.UI.RadChart

The class represents the base functionality of the RadChart.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadChart : ICallbackEventHandler, IChartComponent, INamingContainer, IPostBackEventHandler, IStateManager

## Properties

###  AlternateText `String`

The alternate text displayed when the image cannot be shown.

###  Appearance `StyleChart`

Chart style

###  AutoLayout `Boolean`

Specifies AutoLayout mode to all items on the chart control.

###  AutoTextWrap `Boolean`

Specifies AutoLayout mode to all items on the chart control.

###  Chart `Chart`

Chart engine

###  ChartImageFormat `Chart`

Specifies the image format in which the image is streamed.

###  ChartTitle `Chart`

The chart title message.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientSettings `ChartClientSettings`

Client-side settings.

###  ContentFile `String`

Gets or sets RadChart's content file path and file name.

###  CreateImageMap `Boolean`

Enables or disables use of image maps.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  CustomFigures `CustomFiguresCollection`

Specifies the custom palettes for chart

###  CustomPalettes `CustomPalettesCollection`

Specifies the custom palettes for chart

###  DataGroupColumn `String`

Gets or sets the name of the DataSource column (member) that will be used to split one column data into several chart Series

###  DataManager `DataManager`

Data management support object

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control binds to, in cases where the data source contains more than one distinct list of data items.

###  DataSource `Object`

The DataSource object

#### Remarks
Gets or sets the object from which the chart control retrieves its list of data items

###  DataSourceID `String`

Gets or sets the ID of the control from which the data-bound control retrieves its list of data items.

###  DefaultType `ChartSeriesType`

Default chart series type

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

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

###  EnableHandlerDetection `Boolean`

Gets or sets a value indicating whether RadChart should automatically check for the 
                ChartHttpHandler existence in the system.web section of the application configuration file.

#### Remarks
Set this property to false if you are running your application under IIS7 Integrated Mode 
                and have set the validateIntegratedModeConfiguration flag that does not allow legacy 
                HttpHandler registration under the system.web configuration section.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  Height `Unit`

Chart height

###  HttpHandlerUrl `String`

Gets or sets a value indicating the URL to the ChartHttpHandler that is necessary for the correct operation 
            of the RadChart control.

#### Remarks
Generally the default relative value should work as expected and you do not need to modify it manually here; 
            however in some scenarios where url rewriting is involved, the default value might not work out-of-the-box 
            and you can customize it via this property to suit the requirements of your application.

###  IntelligentLabelsEnabled `Boolean`

Enables / disables Intelligent labels logic for series items labels in all plot areas.

###  IsSkinSet `String`

For internal use.

###  Legend `ChartLegend`

Gets or sets RadChart's legend object.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  PlotArea `ChartPlotArea`

Specifies the chart's plot area.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  ScaleEnabled `Boolean`

This property supports the RadChart infrastructure and is not intended for public use.

###  Series `ChartSeriesCollection`

Collection of the chart's data series.

###  SeriesOrientation `ChartSeriesCollection`

Specifies the orientation of chart series on the plot area.

###  SeriesPalette `String`

Specifies the series palette

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  SkinsOverrideStyles `String`

Should skin override user setting or not

###  TempImagesFolder `String`

Sets folder for the chart's temp images.

###  UseSession `Boolean`

Enables or disables use of session.

###  Width `Unit`

Chart width

## Methods

###  AddChartSeries

Adds a new data series to the RadChart's series collection.

#### Parameters

#### chartSeries `Telerik.Charting.ChartSeries`

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  Clear

Removes the data series associated with the chart control.

#### Returns

`System.Void` 

###  ClearSkin

Resets current chart's skin to default

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateSeries

Creates a new chart series and adds it to the series collection.

#### Parameters

#### seriesName `System.String`

#### mainColor `System.Drawing.Color`

#### secondColor `System.Drawing.Color`

#### chartSeriesType `Telerik.Charting.ChartSeriesType`

#### Returns

`Telerik.Charting.ChartSeries` 

###  DataBind

Binds a data source to the invoked server control and all its child controls.

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetSeries

Gets a reference to the data series object at the specified index.

#### Parameters

#### seriesIndex `System.Int32`

#### Returns

`Telerik.Charting.ChartSeries` 

###  GetSeries

Gets a reference to the data series object with the specified name.

#### Parameters

#### seriesName `System.String`

#### Returns

`Telerik.Charting.ChartSeries` 

###  GetSeries

Gets a reference to the data series object with the specified color.

#### Parameters

#### seriesColor `System.Drawing.Color`

#### Returns

`Telerik.Charting.ChartSeries` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadFromXml

Loads RadChart's settings and data from external XML file.

#### Parameters

#### relativeFileName `System.String`

#### Returns

`System.Void` 

###  LoadFromXml

Loads entire chart settings from a TextWriter object

#### Parameters

#### reader `System.IO.TextReader`

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  LoadSkin

Loads user skin from a TextWriter object

#### Parameters

#### text `System.IO.TextWriter`

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

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

###  RemoveAllSeries

Removes all data series from the series collection without removing axis items.

#### Returns

`System.Void` 

###  RemoveSeriesAt

Removes the data series at the specified index.

#### Parameters

#### seriesIndex `System.Int32`

#### Returns

`System.Void` 

###  Save

Saves the chart with the specified file name.

#### Parameters

#### filename `System.String`

#### Returns

`System.Void` 

###  Save

Saves the chart with the specified file name and the specified image format.

#### Parameters

#### filename `System.String`

#### imageFormat `System.Drawing.Imaging.ImageFormat`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SaveSkin

Exports current chart's skin into TextWriter object

#### Returns

`System.IO.TextWriter` 

###  SaveToXml

Exports current chart's settings into TextWriter object

#### Returns

`System.IO.TextWriter` 

###  SaveToXml

Saves the chart's state into XML file in the specified by fileName location.

#### Parameters

#### fileName `System.String`

Path to the file

#### Returns

`System.IO.TextWriter` 

###  SetDataSourceID

Changes the DataSourceID property without DataBind method call

#### Parameters

#### id `System.String`

#### Returns

`System.Void` 

