---
title: Tile Object
page_title: Tile Object | UI for ASP.NET AJAX Documentation
description: Tile Object
slug: tilelist/tiles/server-side-programming/tile-object
tags: tile,object
published: True
position: 0
---

# Tile Object



## Common API for all Tile Types


>caption Main tile properties

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __AutoPostBack__ |bool|Gets or sets a value indicating whether a postback to the server automatically	occurs when the user changes the selection state or clicks on the tile.	Defaults to false.|
| __Badge__ |RadBaseTile.Badge|The Badge object that can be used to configure the tile's badge.	More information on its properties and configuration is availabe below and in the[Badge and Title elements help article]({%slug tilelist/tiles/badge-and-title-elements%}).|
| __DataItem__ |System.Data.DataRowView|The DataItem object related to each tile when in a[databound RadTileList]({%slug tilelist/data-binding/overview%}).	There is data in it only in the[OnTileDataBound event]({%slug tilelist/server-side-programming/server-side-events/ontiledatabound%})of the RadTileList.|
| __EnableSelection__ |bool|Whether the tile can be selected. Will not be used in the context of a RadTileList, in this case the behavior of all tiles is controlled	through the SelectionMode property of the RadTileList. Defaults to false.|
| __Height__ |unit|The height of the tile. It is generally controlled by the Shape property and setting it here can break some of the	appearance/functionality ofthe control. Inherited from WebControl.|
| __Name__ |string|Gets or sets the Name proerty of a tile. Can be used to uniquely identify a tile in a RadTileList through the RadTileList's	GetTileByName(string) method.|
| __OnClientClicked__ |string|Gets or sets the name of the JavaScript function that will be called when the tile is clicked, after the[ OnClientClicking event]({%slug tilelist/tiles/client-side-programming/events/onclientclicking%}).	This event is not cancellable.	See the[OnClientClicked help article]({%slug tilelist/tiles/client-side-programming/events/onclientclicked%})for more information.|
| __OnClientClicking__ |string|Gets or sets the name of the JavaScript function that will be called when the tile is being clicked, before the[ OnClientClicked event]({%slug tilelist/tiles/client-side-programming/events/onclientclicked%}).	This event is cancellable.	See the[OnClientClicking help article]({%slug tilelist/tiles/client-side-programming/events/onclientclicking%})for more information.|
| __OnClientSelected__ |string|Gets or sets the name of the JavaScript function that will be called when the tile is selected, before the[ OnClientSelecting event]({%slug tilelist/tiles/client-side-programming/events/onclientselecting%}).	This event is not cancellable.	See the[OnClientSelected help article]({%slug tilelist/tiles/client-side-programming/events/onclientselected%})for more information.|
| __OnClientSelecting__ |string|Gets or sets the name of the JavaScript function that will be called when the tile is being selected, before the[OnClientSelected event]({%slug tilelist/tiles/client-side-programming/events/onclientselected%}).	This event is cancellable.	See the[OnClientSelecting help article]({%slug tilelist/tiles/client-side-programming/events/onclientselecting%})for more information.|
| __NavigateUrl__ |string|Gets or sets the URL of the page to navigate to, without posting the page back to the server. If AutoPostBack	for the RadTileList is true navigation will not occur.|
| __PeekContentContainer__ |Telerik.Web.UI.SingleTemplateContainer|Gets the control, where the ContentTemplate for the PeekTemplate will be instantiated. You can add controls programmatically here.|
| __PeekTemplate__ |ITemplate|Gets or sets the System.Web.UI.ITemplate that contains the controls which will be	placed in the control content area for the PeekTemplate. You can use this to set the	PeekTemplate in the markup.|
| __PeekTemplateSettings__ |Telerik.Web.UI.TilePeekTemplateSettings|Defines the peek template configuration settings. See below for more information.|
| __PostBackUrl__ |string|Gets or sets the URL of the page to post to from the current page when a tile from RadBaseTile is clicked.|
| __Selected__ |bool|Gets or sets the selected state of the tile. Defaults to false.|
| __Shape__ |Telerik.Web.UI.TileShape|Gets or sets the shape of the tile. Possible values:

* Square - 150x150px

* Wide - 310x150px|
| __Target__ |string|The target for the navigation. Can be one of the standard targets for an anchor (_blank, _top, _parent, _self, _search) or the name	of a frame on the page.	Values must begin with a letter in the range of a through	z (case-insensitive), except for the special values which begin with an underscore:	_blank renders the content in a new	window without frames.	_parent renders the content in the immediate frameset	parent.	_search renders the content in the search pane.	_self renders the content	in the frame with focus.	_top renders the content in the full window without	frames.	Note: check your browser documentation to determine if the _search	value is supported. For example, Microsoft Internet Explorer 5.0 and later	support the _search target value.The default value is an empty string ("").Navigation is done through JavaScript and browser restrictions may apply for opening new popups (due to	popup blockers) and navigating frames in higher in the hierarchy (same-origin policy).|
| __Title__ |RadBaseTile.Title|The Title object that can be used to configure the tile's title.	More information on its properties and configuration is availabe below and in the[Badge and Title elements help article]({%slug tilelist/tiles/badge-and-title-elements%}).|
| __Width__ |unit|The width of the tile. It is generally controlled by the Shape property and setting it here can break some of the	appearance/functionality of the control. Inherited from WebControl.|

>tip Properties like *BackColor, BorderColor, BorderWidth, Font-Size, Font-Bold* , etc. are inherited from the *WebControl* class and can also be used in a RadTile.
>



>caption PeekTemplateSettings properties

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __Animation__ |Telerik.Web.UI.PeekTemplateAnimation|Get/Set the animation effect of the PeekTemplate conent element.|
| __AnimationDuration__ |integer|Gets/Sets the duration of the animation in milliseconds.|
| __CloseDelay__ |integer|Gets or sets when the interval (in milliseconds) after which the peek template will automatically be closed.|
| __Easing__ |string|Gets or sets the name of a jQuery extension method, which will be applied as easing on the animation.|
| __HidePeekTemplateOnMouseOut__ |bool|Gets a value indicating whether the peek template should be hidden on mouse out.|
| __ShowInterval__ |integer|Gets or sets when the interval after which the peek template will automatically show (in milliseconds).|
| __ShowPeekTemplateOnMouseOver__ |bool|Gets a value indicating whether the peek template should be shown on mouse in.|

>tip Read more on configuring the animations and PeekTemplates in the[Peek Template]({%slug tilelist/tiles/peek-template%})help article	and test them out in the[Animations online demo](http://demos.telerik.com/aspnet-ajax/TileList/Examples/animation/defaultcs.aspx).
>



>caption Title properties

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ImageUrl__ |string|This property sets/gets the src of a title image, which will be displayed at the bottom left corner of the tile.	Has higher priority than text.	See the[Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})help article for more information.|
| __Text__ |string|This property sets/gets the title text, which will be displayed at the bottom left corner of the tile.	Has lower priority than image title.	See the[Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})help article for more information.|


>caption Badge properties

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ImageUrl__ |string|This property sets/gets the src of a badge image, which will be displayed at the bottom right corner of the tile.	Has the lowest priority of the three options.	See the[Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})help article for more information.|
| __PredefinedType__ |Telerik.Web.UI.TileBadgeType|This property sets/gets the predefined image, which will be displayed at the bottom right corner of the tile.	Available options:

* None

* Activity

* Alert

* Attention

* Available

* Away

* Busy

* Error

* NewMessage

* Paused

* Playing

* UnavailableSee the[Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})help article for more information.|
| __Value__ |integer|Gets or sets the numerical value of the badge. It has highest priority of the three.	See the[Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})help article for more information.|

## RadContentTemplateTile Specific properties


|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ContentTemplate__ |ITemplate|Gets or sets the System.Web.UI.ITemplate that contains the controls which will be	placed in the control content area. You can add content in the markup in this tag and	it will be the primary content for the given tile.	See the[ContentTemplate Tile]({%slug tilelist/tiles/contenttemplate-tile%})help article for more information.|
| __ContentContainer__ |Telerik.Web.UI.SingleTemplateContainer|Gets the control, where the ContentTemplate will be instantiated in. You can add controls programmatically here.|

## RadIconTile Specific Properties


|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ImageHeight__ |Unit|Gets or sets the height of the image which will be renderd in the tile. By default, the image	does not have dimensions set from the control and its own dimensions are applied. This property can be used	to set a new size and/or aspect ratio.|
| __ImageUrl__ |string|Gets or sets the url of the image which will be renderd in the tile.	See the[Icon Tile]({%slug tilelist/tiles/icon-tile%})help article for more information.|
| __ImageWidth__ |Unit|Gets or sets the width of the image which will be renderd in the tile. By default, the image	does not have dimensions set from the control and its own dimensions are applied. This property can be used	to set a new size and/or aspect ratio.|

## RadImageAndTextTile Specific Properties


|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ImageHeight__ |Unit|Gets or sets the height of the image which will be renderd in the tile. By default, the image	does not have dimensions set from the control and its own dimensions are applied. This property can be used	to set a new size and/or aspect ratio.|
| __ImageUrl__ |string|Gets or sets the url of the image which will be renderd in the tile.	See the[ImageAndText Tile]({%slug tilelist/tiles/imageandtext-tile%})help article for more information.|
| __ImageWidth__ |Unit|Gets or sets the width of the image which will be renderd in the tile. By default, the image	does not have dimensions set from the control and its own dimensions are applied. This property can be used	to set a new size and/or aspect ratio.|
| __Text__ |string|Gets or sets the text which will be renderd in the bottom of the tile.|

>tip See the[ImageAndText Tile]({%slug tilelist/tiles/imageandtext-tile%})help article for more information.
>


## RadImageTile Specific Properties


|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ImageHeight__ |Unit|Gets or sets the height of the image which will be renderd in the tile. By default, the image	does not have dimensions set from the control and its own dimensions are applied. This property can be used	to set a new size and/or aspect ratio.|
| __ImageUrl__ |string|Gets or sets the url of the image which will be renderd in the tile.	See the[Image Tile]({%slug tilelist/tiles/image-tile%})help article for more information.|
| __ImageWidth__ |Unit|Gets or sets the width of the image which will be renderd in the tile. By default, the image	does not have dimensions set from the control and its own dimensions are applied. This property can be used	to set a new size and/or aspect ratio.|

## RadLiveTile Specific Properties


>caption Attribute Properties of the Main RadLiveTile Tag

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __ClientTemplate__ |string|Gets/sets the HTML template that will be instantiated in the tile after live data request.

>tip This property is also exposed in an inner tag so that the string can be written in a more comfortable manner, likeany other HTML content in Visual Studio. There is no intellisense, however, because this is still just a stringvalue for a control property.
>


````ASPNET
		<telerik:RadLiveTile runat="server" ID="liveTile1">
			<ClientTemplate>
				This here is the template.
				<br />
				It will show the data from the <strong>sampleField</strong> field of the data
				#=dataItem.sampleField #
			</ClientTemplate>
		</telerik:RadLiveTile>
````

|
| __DataModelID__ |string|Gets/sets the __DataModelID__ of the OData service that is used for fetching data.|
| __ODataDataSourceID__ |string|Gets/sets the ID of the RadODataDataSource control that is used to fetch OData for the tile.|
| __OnClientDataLoaded__ |string|Gets/sets the name of the JavaScript function that handles the[OnClientDataLoaded event]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloaded%}).|
| __OnClientDataLoading__ |string|Gets/sets the name of the JavaScript function that handles the[OnClientDataLoading event]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloading%}).|
| __OnClientDataLoadingError__ |string|Gets/sets the name of the JavaScript function that handles the[OnClientDataLoadingError event]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloadingerror%}).|
| __OnClientTemplateDataBound__ |string|Gets/sets the name of the JavaScript function that handles the[OnClientTemplateDataBound event]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclienttemplatedatabound%}).|
| __UpdateInterval__ |int|Gets/sets the time (in milliseconds) that passes between the requests for data initiated by the LiveTile.|
| __Value__ |string|Gets or sets a string value which can be send as an argument on data request.|


>caption Attribute Properties of the ClientTemplateAnimationSettings Inner Tag

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __Animation__ |Telerik.Web.UI.ClientTemplateAnimation|Gets/sets the animation effect of the ClientTemplate content element.|
| __AnimationDuration__ |int|Gets/sets the duration of the animation in milliseconds.|
| __Easing__ |string|Gets/sets the easing that will be applied on the animation. The easing effect is described at the end of the[Peek Template]({%slug tilelist/tiles/peek-template%})article.|


>caption Attribute Properties of the WebServiceSettings Inner Tag

|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __Method__ |string|Gets/sets the Web service method name to be called.|
| __Path__ |string|Gets/sets the URL of the Web service that will be called.|
| __UseHttpGet__ |bool|Gets/sets whether the GET HTTP verb will be used for the request. Defaults to false (i.e. POST will be used).|

More information on populating a LiveTile with data is available in the [Populating with data help article]({%slug tilelist/tiles/live-tile/loading-data%}).

## RadTextTile Specific Properties


|  __Name__  |  __Type__  |  __Description__  |
| ------ | ------ | ------ |
| __Text__ |string|Gets or sets the text which will be renderd in the tile.	See the[Text Tile]({%slug tilelist/tiles/text-tile%})help article for more information.|

# See Also

 * [Overview]({%slug tilelist/tiles/overview%})

 * [ContentTemplate Tile]({%slug tilelist/tiles/contenttemplate-tile%})

 * [Icon Tile]({%slug tilelist/tiles/icon-tile%})

 * [ImageAndText Tile]({%slug tilelist/tiles/imageandtext-tile%})

 * [Image Tile]({%slug tilelist/tiles/image-tile%})

 * [Text Tile]({%slug tilelist/tiles/text-tile%})

 * [Badge and Title Elements]({%slug tilelist/tiles/badge-and-title-elements%})

 * [Peek Template]({%slug tilelist/tiles/peek-template%})

 * [TileList Object]({%slug tilelist/server-side-programming/tilelist-object%})

 * [Populating a LiveTile with data]({%slug tilelist/tiles/live-tile/loading-data%})
