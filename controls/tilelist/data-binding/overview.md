---
title: Overview
page_title: Data Binding Overview | RadTileList for ASP.NET AJAX Documentation
description: Overview
slug: tilelist/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



Since **Q3 2013** the **RadTileList** control can be **data bound** in order	to generate its [tiles]({%slug tilelist/tiles/overview%}) according to information from a datasource.

Since **Q2 2014** the **Telerik TileList** can be **data bound** client-side using simple JS data source or using the **RadClientDataSource** control. You can find more information and explanations about this in the [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%}) article.

The datasource itself is an **IEnumerable** collection that contains the appropriate fields designated in the control's properties. The [Supported Data Sources]({%slug tilelist/data-binding/supported-data-sources%}) article offers more information on the subject.

Generally, tiles are generated in the order, in which the information is received (e.g. row by row from the datatable), and thus the data	is responsible for the layout. The developer can, however, take steps to prepare the desired [Groups]({%slug tilelist/server-side-programming/tilegroup-object%}) order beforehand as explained in the [Defining Structure]({%slug tilelist/data-binding/defining-structure%}) article.

This article contains the following sections:

* [Databinding Basics](#databinding-basics)

* [DataBinding Properties](#databinding-properties)

* [PeekTemplate Databinding](#peektemplate-databinding)

* [RadContentTemplateTile ContentTemplate Databinding](#radcontenttemplatetile-contenttemplate-databinding)

## Databinding Basics

Here is an example of a databound **RadTileList**. Note how all **databinding settings** are contained in the inner **`<DataBindings>`** tag:

````ASP.NET
<telerik:RadTileList runat="server" DataSourceID="SqlDataSource1" ID="RadTileList1" Width="634px" AppendDataBoundItems="false">
	<DataBindings>
		<CommonTileBinding TileType="RadImageTile" DataTitleTextField="UnitPrice" DataNameField="ProductName"
			DataGroupNameField="CategoryNames" DataNavigateUrlField="ProductUrls" />
		<TextTileBinding DataTextField="TextDescription" />
		<TilePeekTemplate> 
			Some text that is present in all tiles
			<div class="productNamePeek"><%# DataBinder.Eval(Container.DataItem, "ProductName") %></div>
		</TilePeekTemplate>
	</DataBindings>
</telerik:RadTileList>
````



The **CommonTileBinding** section offers the properties that **affect all tiles** and are **common for all tile types**.

There are three **fallback properties** that determine the most basic settings in case information from the datasource is missing for the **TileType, Target and Shape**.

**Each specific tile type** has its **own inner tag** that exposes **specific properties** for the given type, e.g. the **TextTileBinding** tag, responsible for a **RadTextTile** offers the **DataTextField** property which indicates the field from the datasource with the text for the tile.

The **TilePeekTemplate** inner tag offers the template that will be used for the [Peek Template]({%slug tilelist/tiles/peek-template%}) of each tile. Fields from the datasource can be evaluated here to add content specific for each tile, as well as content, common for all tiles (like the main HTML element wrapper that will provide dimensions, padding, fonts, etc.).

The **AppendDataBoundItems** property determines whether any existing tiles (from the markup or created programmatically) will be cleared when the control is databound. The tiles generated from the databinding will be added to the existing tiles if this property is set to true. The default value is false, so any existing tiles will be removed upon databinding.

## DataBinding Properties


>caption Common tile databinding properties

|  **Name**  |  **Datasource Field Type**  |  **Description**  |
| ------ | ------ | ------ |
| **DataBadgeImageUrlField** |string|The URL to the image that will be used for the tile's [badge]({%slug tilelist/tiles/badge-and-title-elements%}).|
| **DataBadgePredefinedTypeField** |string|The predefined type of the tile's [badge]({%slug tilelist/tiles/badge-and-title-elements%}).|
| **DataBadgeValueField** |int|The value the tile's [badge]({%slug tilelist/tiles/badge-and-title-elements%}).|
| **DataGroupNameField** |string|The name of the [TileGroup]({%slug tilelist/server-side-programming/tilegroup-object%}) the tile belongs to.	Tiles with the same value in this field will be placed in the same group. Groups will be created in the order in which	they are met in the datasource unless the developer has [predefined the control's structure]({%slug tilelist/data-binding/defining-structure%}).|
| **DataNameField** |string|The **Name** of the [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}).|
| **DataNavigateUrlField** |string|The **URL** the [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}) will navigate to.|
| **DataShapeField** |string|The **Shape** of the [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}). Must be supported by the tile and	is case-sensitive. If the value of the field is not a valid shape name, the tile will fall back to the value defined in the **Shape databinding property** . If none is defined it will use the default shape for a RadBaseTile, which is Square.|
| **DataTargetField** |string|The **Target** of the [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}). Must be supported by the tile and	is case-sensitive. If the value of the field is not a valid target name, the tile will fall back to the value defined in the **Target databinding property** . The target can be the name of any frame present on the page, so arbitrary strings are allowed. If the value is not one of the predefined options (_blank, _top, _parent, _self), [navigation]({%slug tilelist/functionality/navigation%}) may not occur of there isn't a frame with the designated name.|
| **DataTileTypeField** |string|The **Type** of the [Tile]({%slug tilelist/tiles/overview%}). Must be supported by the tile and is case-sensitive. If the value of the field is not a valid type, the tile will fall back to the value defined in the **TileType databinding property**.|
| **DataTitleImageUrlField** |string|The URL to the image that will be used as [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}) of the [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}).|
| **DataTitleTextField** |string|The text that will be used as [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}) of the [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}).|
| **Shape** |Telerik.Web.UI.TileShape|The shape that will be used as a default for the [Tiles]({%slug tilelist/tiles/server-side-programming/tile-object%}) in case correct information is not found in the datasource in the DataShapeField.|
| **Target** |string|The target that will be used as a default for the [Tiles]({%slug tilelist/tiles/server-side-programming/tile-object%}) in case correct information is not found in the datasource in the DataTargetField.|
| **TileType** |Telerik.Web.UI.TileListTileType|The Tile Type that will be used as a default for the [Tiles]({%slug tilelist/tiles/server-side-programming/tile-object%}) in case correct information is not found in the datasource in the DataTileTypeField.|


>caption ContentTemplateTileBinding specific databinding properties

|  **Name**  |  **Datasource Field Type**  |  **Description**  |
| ------ | ------ | ------ |
| **ClientContentTemplate** |string|The HTML markup that will define the layout of the rendered Tile.|
| **ContentTemplate** |ITemplate|The ASP.NET markup that defines the Tile implementation.|
| **DataClientContentTemplateField** |string|The field name of the data source that will fetch the data for the **ClientContentTemplate** property.|


>caption RadIconTile specific databinding properties

|  **Name**  |  **Datasource Field Type**  |  **Description**  |
| ------ | ------ | ------ |
| **DataImageUrlField** |string|The URL to the image that will be used for the tile's icon.|


>caption RadImageAndTextTile specific databinding properties

|  **Name**  |  **Datasource Field Type**  |  **Description**  |
| ------ | ------ | ------ |
| **DataImageUrlField** |string|The URL to the image that will be used for the tile's image.|
| **DataTextField** |string|The text that will be displayed in the tile.|


>caption RadImageTile specific databinding properties

|  **Name**  |  **Datasource Field Type**  |  **Description**  |
| ------ | ------ | ------ |
| **DataImageUrlField** |string|The URL to the image that will be used for the tile's image.|


>caption RadLiveTile specific databinding properties

|  **Name**  |  **Datasource Field Type**  |  **Description**  |
| ------ | ------ | ------ |
| **ClientTemplate** |string|The template the tile will default to if no data is found in the datasource.|
| **DataClientTemplateField** |string|The name of the field in the datasource that will be used to obtain the template for the LiveTile.|
| **DataUpdateIntervalField** |string|The name of the field in the datasource that will be used to obtain the UpdateInterval for the LiveTile.	The UpdateInterval is in milliseconds and the datasource must return integers for this value.|


>caption RadTextTile specific databinding properties

|  **Name**  |  **Datasource Field Type**  |  **Description**  |
| ------ | ------ | ------ |
| **DataTextField** |string|The text that will be displayed in the tile.|

## PeekTemplate Databinding

The **PeekTemplate** of the tiles can be defined by using the **`<TilePeekTemplate>`** (for server-side data binding) or the **`<ClientTilePeekTemplate>`** (for [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%})) inner tag of the **`<DataBindings>`** tag.

An arbitrary HTML string can be defined there that will be used in all tiles. This can be used to create a common wrapper with dimensions,paddings, font sizes, backgrounds and other common visual settings, as well as common content for all tiles.

Databinding expressions can be evaluated there so that content from various fields in the datasource can be used there so that it is specific for each tile.

Here is a simple example of binding the peek template:

````ASP.NET
<telerik:RadTileList runat="server" DataSourceID="SqlDataSource1" ID="RadTileList1" Width="634px">
	<DataBindings>
		<CommonTileBinding TileType="RadImageTile" DataNameField="ProductName" DataShapeField="tileShapes" />
		<TilePeekTemplate>
			<div class="<%# DataBinder.Eval(Container.DataItem, "tileShapes") %>peekContainer">
				Some text that is present in all databound tiles peek templates
				<%# DataBinder.Eval(Container.DataItem, "ProductName") %>
			</div>
		</TilePeekTemplate>
	</DataBindings>
</telerik:RadTileList>
````



## RadContentTemplateTile ContentTemplate Databinding

The **ContentTemplate** of a **RadContentTemplateTile** can be bound in a way similar to the PeekTemplate.Since this is specific to that tile type the **ContentTemplate** inner tag is available under the **ContentTemplateTileBinding** tag in **DataBindings**.

When it comes to client-side data binding, the **ClientContentTemplate** inner tag can be used to define its layout,	as described in the [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%})  article.

In the template the developer can add arbitrary HTML and databinding expressions that will be used for all databound RadContentTemplateTiles.

For example:

````ASP.NET
<telerik:RadTileList runat="server" DataSourceID="SqlDataSource1" ID="RadTileList1" Width="634px">
	<DataBindings>
		<CommonTileBinding TileType="RadImageTile" DataNameField="ProductName" DataShapeField="tileShapes" />
		<ContentTemplateTileBinding>
			<ContentTemplate>
				<div class="<%# DataBinder.Eval(Container.DataItem, "tileShapes") %>contentContainer">
					Some text that is present in all databound tiles' ContentTemplates
					<%# DataBinder.Eval(Container.DataItem, "ProductName") %>
				</div>
			</ContentTemplate>
		</ContentTemplateTileBinding>
	</DataBindings>
</telerik:RadTileList>
````



# See Also

 * [Overview]({%slug tilelist/tiles/overview%})

 * [Supported Data Sources]({%slug tilelist/data-binding/supported-data-sources%})

 * [TileGroup Object]({%slug tilelist/server-side-programming/tilegroup-object%})

 * [Defining Structure]({%slug tilelist/data-binding/defining-structure%})

 * [Tile Object]({%slug tilelist/tiles/server-side-programming/tile-object%})
