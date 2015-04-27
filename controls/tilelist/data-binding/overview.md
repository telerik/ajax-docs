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



Since __Q3 2013__ the __RadTileList__ control can be __data bound__ in order	to generate its [tiles]({%slug tilelist/tiles/overview%}) according to information from a datasource.

Since __Q2 2014__ the __Telerik TileList__ can be __data bound__ client-side using simple JS data sourceor using the __RadClientDataSource__ control. You can find more information and explanations about this in the [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%}) article.

The datasource itself is an __IEnumerable__ collection that contains the appropriate fields designated in the control's properties.	The [Supported Data Sources]({%slug tilelist/data-binding/supported-data-sources%}) article offers more information on the subject.

Generally, tiles are generated in the order, in which the information is received (e.g. row by row from the datatable), and thus the data	is responsible for the layout. The developer can, however, take steps to prepare the desired [Groups]({%slug tilelist/server-side-programming/tilegroup-object%})	order beforehand as explained in the [Defining Structure]({%slug tilelist/data-binding/defining-structure%}) article.

## Databinding Basics

Here is an example of a databound __RadTileList__. Note how all __databinding settings__ are contained in theinner __<DataBindings>__ tag:

````C#
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



The __CommonTileBinding__ section offers the properties that __affect all tiles__ and are__common for all tile types__.

There are three __fallback properties__ that determine the most basic settings in case information from the datasource is missing for the__TileType, Target and Shape__.

__Each specific tile type__ has its __own inner tag__ that exposes __specific properties__for the given type, e.g. the __TextTileBinding__ tag, responsible for a __RadTextTile__ offers the__DataTextField__ property which inidcates the field from the datasource with the text for the tile.

The __TilePeekTemplate__ inner tag offers the template that will be used for the [Peek Template]({%slug tilelist/tiles/peek-template%})of each tile. Fields from the datasource can be evaluated here to add content specific for each tile, as well as content, common for all tiles (like the mainHTML element wrapper that will provide dimensions, padding, fonts, etc.).

The __AppendDataBoundItems__ property determines whether any existing tiles (from the markup or created programmatically) will be clearedwhen the control is databound. The tiles generated from the databinding will be added to the existing tiles if this property is set to true. The default valueis false, so any existing tiles will be removed upon databinding.

## DataBinding Properties


>caption Common tile databinding properties

|  __Name__  |  __Datasource Field Type__  |  __Description__  |
| ------ | ------ | ------ |
| __DataBadgeImageUrlField__ |string|The URL to the image that will be used for the tile's[badge]({%slug tilelist/tiles/badge-and-title-elements%}).|
| __DataBadgePredefinedTypeField__ |string|The predefined type of the tile's[badge]({%slug tilelist/tiles/badge-and-title-elements%}).|
| __DataBadgeValueField__ |int|The value the tile's[badge]({%slug tilelist/tiles/badge-and-title-elements%}).|
| __DataGroupNameField__ |string|The name of the[TileGroup]({%slug tilelist/server-side-programming/tilegroup-object%})the tile belongs to.	Tiles with the same value in this field will be placed in the same group. Groups will be created in the order in which	they are met in the datasource unless the developer has[predefined the control's structure]({%slug tilelist/data-binding/defining-structure%}).|
| __DataNameField__ |string|The __Name__ of the[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}).|
| __DataNavigateUrlField__ |string|The __URL__ the[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%})will navigate to.|
| __DataShapeField__ |string|The __Shape__ of the[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}). Must be supported by the tile and	is case-sensitive. If the value of the field is not a valid shape name, the tile will fall back to the value defined in the __Shape databinding property__ . If none is defined it will use the default shape for a RadBaseTile, which is Square.|
| __DataTargetField__ |string|The __Target__ of the[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}). Must be supported by the tile and	is case-sensitive. If the value of the field is not a valid target name, the tile will fall back to the value defined in the __Target databinding property__ .

>tip The target can be the name of any frame present on the page, so arbitrary strings are allowed. If the value is not one of the predefined options(_blank, _top, _parent, _self),[navigation]({%slug tilelist/functionality/navigation%})may not occur of there isn't a frame with the designated name.
>
|
| __DataTileTypeField__ |string|The __Type__ of the[Tile]({%slug tilelist/tiles/overview%}).	Must be supported by the tile and is case-sensitive. If the value of the field is not a valid type, the tile will fall back to the value defined in the __TileType databinding property__ .|
| __DataTitleImageUrlField__ |string|The URL to the image that will be used as[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%})of the[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}).|
| __DataTitleTextField__ |string|The text that will be used as[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%})of the[Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}).|
| __Shape__ |Telerik.Web.UI.TileShape|The shape that will be used as a default for the[Tiles]({%slug tilelist/tiles/server-side-programming/tile-object%})in case correct information is not found in the datasource in the DataShapeField.|
| __Target__ |string|The target that will be used as a default for the[Tiles]({%slug tilelist/tiles/server-side-programming/tile-object%})in case correct information is not found in the datasource in the DataTargetField.|
| __TileType__ |Telerik.Web.UI.TileListTileType|The Tile Type that will be used as a default for the[Tiles]({%slug tilelist/tiles/server-side-programming/tile-object%})in case correct information is not found in the datasource in the DataTileTypeField.|


>caption ContentTemplateTileBinding specific databinding properties

|  __Name__  |  __Datasource Field Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ClientContentTemplate__ |string|The HTML markup that will define the layout of the rendered Tile.|
| __ContentTemplate__ |ITemplate|The ASP.NET markup that defines the Tile implementation.|
| __DataClientContentTemplateField__ |string|The field name of the data source that will fetch the data for the __ClientContentTemplate__ property.|


>caption RadIconTile specific databinding properties

|  __Name__  |  __Datasource Field Type__  |  __Description__  |
| ------ | ------ | ------ |
| __DataImageUrlField__ |string|The URL to the image that will be used for the tile's icon.|


>caption RadImageAndTextTile specific databinding properties

|  __Name__  |  __Datasource Field Type__  |  __Description__  |
| ------ | ------ | ------ |
| __DataImageUrlField__ |string|The URL to the image that will be used for the tile's image.|
| __DataTextField__ |string|The text that will be displayed in the tile.|


>caption RadImageTile specific databinding properties

|  __Name__  |  __Datasource Field Type__  |  __Description__  |
| ------ | ------ | ------ |
| __DataImageUrlField__ |string|The URL to the image that will be used for the tile's image.|


>caption RadLiveTile specific databinding properties

|  __Name__  |  __Datasource Field Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ClientTemplate__ |string|The template the tile will default to if no data is found in the datasource.|
| __DataClientTemplateField__ |string|The name of the field in the datasource that will be used to obtain the template for the LiveTile.|
| __DataUpdateIntervalField__ |string|The name of the field in the datasource that will be used to obtain the UpdateInterval for the LiveTile.	The UpdateInterval is in milliseconds and the datasource must return integers for this value.|


>caption RadTextTile specific databinding properties

|  __Name__  |  __Datasource Field Type__  |  __Description__  |
| ------ | ------ | ------ |
| __DataTextField__ |string|The text that will be displayed in the tile.|

## PeekTemplate Databinding

The __PeekTemplate__ of the tiles can be defined by using the __<TilePeekTemplate>__ (for server-side data binding) or the__<ClientTilePeekTemplate>__ (for [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%}))inner tag of the __<DataBindings>__ tag.

An arbitrary HTML string can be defined there that will be used in all tiles. This can be used to create a common wrapper with dimensions,paddings, font sizes, backgrounds and other common visual settings, as well as common content for all tiles.

Databinding expressions can be evaluated there so that content from various fields in the datasource can be used thereso that it is specific for each tile.

Here is a simple example of binding the peek template:

````C#
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

The __ContentTemplate__ of a __RadContentTemplateTile__ can be bound in a way similar to the PeekTemplate.Since this is specific to that tile type the __ContentTemplate__ inner tag is available under the__ContentTemplateTileBinding__ tag in __DataBindings__.

When it comes to client-side data binding, the __ClientContentTemplate__ inner tag can be used to define its layout,	as described in the [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%}) article.

In the template the developer can add arbitrary HTML and databinding expressions that will be used for all databound RadContentTemplateTiles.

For example:

````C#
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
