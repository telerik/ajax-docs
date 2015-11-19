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

###  EnableHandlerDetection `Boolean`

Gets or sets a value indicating whether RadChart should automatically check for the 
                ChartHttpHandler existence in the system.web section of the application configuration file.

#### Remarks
Set this property to false if you are running your application under IIS7 Integrated Mode 
                and have set the validateIntegratedModeConfiguration flag that does not allow legacy 
                HttpHandler registration under the system.web configuration section.

###  HttpHandlerUrl `String`

Gets or sets a value indicating the URL to the ChartHttpHandler that is necessary for the correct operation 
            of the RadChart control.

#### Remarks
Generally the default relative value should work as expected and you do not need to modify it manually here; 
            however in some scenarios where url rewriting is involved, the default value might not work out-of-the-box 
            and you can customize it via this property to suit the requirements of your application.

###  CustomFigures `CustomFiguresCollection`

Specifies the custom palettes for chart

###  Chart `Chart`

Chart engine

###  DefaultType `ChartSeriesType`

Default chart series type

###  AutoLayout `Boolean`

Specifies AutoLayout mode to all items on the chart control.

###  AutoTextWrap `Boolean`

Specifies AutoLayout mode to all items on the chart control.

###  SeriesPalette `String`

Specifies the series palette

###  Appearance `StyleChart`

Chart style

###  SkinsOverrideStyles `String`

Should skin override user setting or not

###  DataManager `DataManager`

Data management support object

###  Series `ChartSeriesCollection`

Collection of the chart's data series.

###  Height `Unit`

Chart height

###  Width `Unit`

Chart width

###  Legend `ChartLegend`

Gets or sets RadChart's legend object.

###  PlotArea `ChartPlotArea`

Specifies the chart's plot area.

###  ChartTitle `Chart`

The chart title message.

###  UseSession `Boolean`

Enables or disables use of session.

###  CreateImageMap `Boolean`

Enables or disables use of image maps.

###  TempImagesFolder `String`

Sets folder for the chart's temp images.

###  ContentFile `String`

Gets or sets RadChart's content file path and file name.

###  ChartImageFormat `Chart`

Specifies the image format in which the image is streamed.

###  AlternateText `String`

The alternate text displayed when the image cannot be shown.

###  CustomPalettes `CustomPalettesCollection`

Specifies the custom palettes for chart

###  SeriesOrientation `ChartSeriesCollection`

Specifies the orientation of chart series on the plot area.

###  IntelligentLabelsEnabled `Boolean`

Enables / disables Intelligent labels logic for series items labels in all plot areas.

###  MapAreaBuilder `MapAreaBuilder`

Image maps support

###  ClientSettings `ChartClientSettings`

Client-side settings.

###  DataSourceID `String`

Gets or sets the ID of the control from which the data-bound control retrieves its list of data items.

###  DataSource `Object`

The DataSource object

#### Remarks
Gets or sets the object from which the chart control retrieves its list of data items

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control binds to, in cases where the data source contains more than one distinct list of data items.

###  DataGroupColumn `String`

Gets or sets the name of the DataSource column (member) that will be used to split one column data into several chart Series

###  ScaleEnabled `Boolean`

This property supports the RadChart infrastructure and is not intended for public use.

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

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCssClass `String`

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  AddChartSeries

Adds a new data series to the RadChart's series collection.

#### Parameters

#### chartSeries `Telerik.Charting.ChartSeries`

#### Returns

`System.Void` 

###  ClearSkin

Resets current chart's skin to default

#### Returns

`System.Void` 

###  LoadSkin

Loads user skin from a TextWriter object

#### Parameters

#### text `System.IO.TextWriter`

#### Returns

`System.Void` 

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

###  SaveSkin

Exports current chart's skin into TextWriter object

#### Returns

`System.IO.TextWriter` 

###  Clear

Removes the data series associated with the chart control.

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

###  CreateSeries

Creates a new chart series and adds it to the series collection.

#### Parameters

#### seriesName `System.String`

#### mainColor `System.Drawing.Color`

#### secondColor `System.Drawing.Color`

#### chartSeriesType `Telerik.Charting.ChartSeriesType`

#### Returns

`Telerik.Charting.ChartSeries` 

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

###  SetDataSourceID

Changes the DataSourceID property without DataBind method call

#### Parameters

#### id `System.String`

#### Returns

`System.Void` 

###  DataBind

Binds a data source to the invoked server control and all its child controls.

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

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

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

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

