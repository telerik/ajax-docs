---
title: BaseTile Object
page_title: BaseTile Object | RadTile for ASP.NET AJAX Documentation
description: BaseTile Object
slug: tilelist/tiles/client-side-programming/basetile-object
tags: basetile,object
published: True
position: 1
---

# BaseTile Object



The **RadTiles** expose the following public methods and properties to control their behavior:

## Helper Methods


>caption Helper Methods for Finding and Casting objects

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|$telerik.findBaseTile(id, parent)|string, object|RadBaseTile|Finds a RadBaseTile instance. The first passed parameter is the string that contains ID of the RadBaseTile to find and the second one is the component or element that contains it.|
|$telerik.findContentTemplateTile(id, parent)|string, object|RadContentTemplateTile|Finds a RadContentTemplateTile instance. The first passed parameter is the string that contains ID of the RadContentTemplateTile to find and the second one is the component or element that contains it.|
|$telerik.findIconTile(id, parent)|string, object|RadIconTile|Finds a RadIconTile instance. The first passed parameter is the string that contains ID of the RadIconTile to find and the second one is the component or element that contains it.|
|$telerik.findImageAndTextTile(id, parent)|string, object|RadImageAndTextTile|Finds a RadImageAndTextTile instance. The first passed parameter is the string that contains ID of the RadImageAndTextTile to find and the second one is the component or element that contains it.|
|$telerik.findImageTile(id, parent)|string, object|RadImageTile|Finds a RadImageTile instance. The first passed parameter is the string that contains ID of the RadImageTile to find and the second one is the component or element that contains it.|
|$telerik.findLiveTile(id, parent)|string, object|RadLiveTile|Finds a RadLiveTile instance. The first passed parameter is the string that contains ID of the RadLiveTile to find and the second one is the component or element that contains it.|
|$telerik.findTextTile(id, parent)|string, object|RadTextTile|Finds a RadTextTile instance. The first passed parameter is the string that contains ID of the RadTextTile to find and the second one is the component or element that contains it.|
|$telerik.toBaseTile(object)|object|RadBaseTile|Casts an object to a RadBaseTile instance.|
|$telerik.toContentTemplateTile(object)|object|RadContentTemplateTile|Casts an object to a RadContentTemplateTile instance.|
|$telerik.toIconTile(object)|object|RadIconTile|Casts an object to a RadIconTile instance.|
|$telerik.toImageAndTextTile(object)|object|RadImageAndTextTile|Casts an object to a RadImageAndTextTile instance.|
|$telerik.toImageTile(object)|object|RadImageTile|Casts an object to a RadImageTile instance.|
|$telerik.toLiveTile(object)|object|RadLiveTile|Casts an object to a RadLiveTile instance.|
|$telerik.toTextTile(object)|object|RadTextTile|Casts an object to a RadTextTile instance.|

## RadBaseTile Common API


>caption RadBaseTile Client-Side Methods that Invoke a Certain Action

| Name | Description |
| ------ | ------ |
|clearPeekHideInterval()|Clears the time interval set by the CloseDelay property of the peek template settings.|
|clearPeekShowInterval()|Clears the time interval set by the ShowInterval property of the peek template settings.|
|clearShowHideIntervals()|Clears both time interval set by the ShowInterval and CloseDelay properties of the peek template settings.|
|hidePeekTemplate()|Hides the peek template.|
|showPeekTemplate()|Shows the peek template.|
|startPeekHideInterval()|Starts the time interval set by the CloseDelay property of the peek template settings.|
|startPeekShowInterval()|Starts the time interval set by the ShowInterval property of the peek template settings.|
|toggleSelection()|Toggles the selection state of the tile.|


>caption RadBaseTile Client-Side Property Getters/Setters

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_hidePeekTemplateOnMouseOut()||bool|Returns if the peek template should be hidden on mouse out.|
|get_id()||String|Returns the Id property of a tile.|
|get_name()||String|Returns the Name property of a tile.|
|get_navigateUrl()||String|Gets the URL of the page to navigate to, without posting the page back to the server.|
|get_peekAnimationManager()||object|Returns the PeekAnimationManager responsible for showing / hiding the peek template.|
|get_peekCloseDelay()||Int|Sets the interval after which the peek template is hidden, the interval is in milliseconds.|
|get_peekShowInterval()||Int|Returns the the interval after which the peek template is shown, the interval is in milliseconds.|
|get_selected()||bool|Returns if the tile is selected.|
|get_showPeekTemplateOnMouseOver()||bool|Returns true if the peek template should be shown on mouse over.|
|get_target()||String|Gets the target window or frame in which to display the Web page content linked to when the NavigateUrl property when the control is clicked.|
|get_tileType()||String|Returns the name of the tile type.|
|set_hidePeekTemplateOnMouseOut(value)|bool||Sets if the peek template should be hidden on mouse out.|
|set_name(value)|String||Sets the Name property of a tile.|
|set_navigateUrl(value)|String||Sets the URL of the page to navigate to, without posting the page back to the server.|
|set_peekCloseDelay(value)|Int||Sets the interval after which the peek template is hidden, the interval is in milliseconds.|
|set_peekShowInterval(value)|Int||Sets the interval after which the peek template is shown, the interval is in milliseconds.|
|set_selected(value, triggerEvents)|bool, bool||Sets the selected state of the tile. If the second passed parameter is false the selecting and selected client events are not fired.|
|set_showPeekTemplateOnMouseOver(value)|bool||Sets if the peek template should be shown on mouse over.|
|set_target(value)|String||Sets the target window or frame in which to display the Web page content linked to when the NavigateUrl property when the control is clicked.|
|setBadgeImageUrl(imageUrl)|String||Sets the **imageUrl** property of the tile's badge and updates the image in the bottom right corner of the tile.|
|setBadgePredefinedType(predefindedType)|Int||Sets the **predefinedType** property of the tile's badge and updates the type of the badge. The `Telerik.Web.UI.TileBadgeType` enum can be used instead of an integer, where: 0 = Telerik.Web.UI.TileBadgeType.**None** mode, 1 = Telerik.Web.UI.TileBadgeType.**Activity** mode, 2 = Telerik.Web.UI.TileBadgeType.**Alert** mode, 3 = Telerik.Web.UI.TileBadgeType.**Attention** mode, 4 = Telerik.Web.UI.TileBadgeType.**Available** mode, 5 = Telerik.Web.UI.TileBadgeType.**Away** mode, 6 = Telerik.Web.UI.TileBadgeType.**Busy** mode, 7 = Telerik.Web.UI.TileBadgeType.**Error** mode, 8 = Telerik.Web.UI.TileBadgeType.**NewMessage** mode, 9 = Telerik.Web.UI.TileBadgeType.**Paused** mode, 10 = Telerik.Web.UI.TileBadgeType.**Playing** mode, 11 = Telerik.Web.UI.TileBadgeType.**Unavailable** mode.|
|setBadgeValue(value)|Int||Sets the **value** property of the tile's badge and updates the number displayed in the bottom right corner of the tile.|
|setTitleImageUrl(imageUrl)|String||Updates the title image in the bottom left corner of the tile.|
|setTitleText(text)|String||Updates the title text displayed in the bottom left corner of the tile.|


>caption RadBaseTile Client-side Methods for Working With Events

| Name | Parameters | Description |
| ------ | ------ | ------ |
|add_clicked()|Function|Adds a handler for the clicked tile client event.|
|add_clicking()|Function|Adds a handler for the clicking tile client event.|
|add_selected()|Function|Adds a handler for the selected tile client event.|
|add_selecting()|Function|Adds a handler for the selecting tile client event.|
|remove_clicked()|Function|Removes a handler for the clicked tile client event.|
|remove_clicking()|Function|Removes a handler for the clicking tile client event.|
|remove_selected()|Function|Removes a handler for the selected tile client event.|
|remove_selecting()|Function|Removes a handler for the selecting tile client event.|

# See Also

 * [RadTextTile Specific API]({%slug tilelist/tiles/client-side-programming/texttile-object%})
