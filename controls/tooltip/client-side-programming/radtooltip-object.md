---
title: RadToolTip Object
page_title: RadToolTip Object | RadTooltip for ASP.NET AJAX Documentation
description: RadToolTip Object
slug: tooltip/client-side-programming/radtooltip-object
tags: radtooltip,object
published: True
position: 1
---

# RadToolTip Object



The following table lists the most important members of the client-side **RadToolTip** object:

## RadToolTip


>caption Public Properties

| Name | Description |
| ------ | ------ |
| **get_animation** |Gets animation value for the tooltip. Returns an object of type **Telerik.Web.UI.ToolTipAnimation** .|
| **get_animationDuration** |Gets animation duration value for the tooltip in milliseconds.|
| **get_autoCloseDelay** |Gets delay in milliseconds for the tooltip to close automatically|
| **get_content** |Gets the current content of the tooltip|
| **get_contentElement** |Gets the content element of the tooltip. See **Example 1**.|
| **get_contentScrolling** |Gets a new overflow value for the tooltip content area. Returns an object of type **Telerik.Web.UI.ToolTipScrolling** |
| **get_enableShadow** |Gets a value indicating whether the tooltip should have a shadow.|
| **get_height** |Gets height of the tooltip|
| **get_hideDelay** |Gets the delay in milliseconds before the tooltip is hidden.|
| **get_ignoreAltAttribute** |Gets a value indicating whether the Alt attribute of the target should be ignored.|
| **get_modal** |Gets whether the tooltip is modal.|
| **get_manualClose** |Gets whether the tooltip requires to be hidden manually by the user, or hides automatically|
| **get_mouseTrailing** |Gets whether the tooltip should follows the mouse movement or not|
| **get_offsetX** |Gets the horizontal offset relative to its target element|
| **get_offsetY** |Gets the vertical offset relative to its target element|
| **get_overlay** |Gets a value indicating whether the tooltip has an overlay element.|
| **get_popupElement** |Returns a reference to the DOM object of the popup element.|
| **get_position** |Gets the relative position to the tooltip to its target element. Returns an object of type **Telerik.Web.UI.ToolTipPosition**.|
| **get_relativeTo** |Gets whether the tooltip is positioned relative to the mouse or relative to the tooltip. Returns an object of type **Telerik.Web.UI.ToolTipRelativeDisplay** .|
| **get_showCallout** |Gets whether the tooltip callout image will be displayed|
| **get_showDelay** |Gets delay in milliseconds for the tooltip to appear|
| **get_sticky** |Gets whether the tooltip is hidden when the mouse leaves the target control, or the tooltip itself|
| **get_targetControl** |Gets a reference to the tooltip target element|
| **get_targetControlID** |Gets the target control of the tooltip|
| **get_text** |Gets the text of the tooltip. See **Example 2**.|
| **get_title** |Gets the title of the tooltip|
| **get_width** |Gets width of the tooltip|
| **set_animation** |Sets animation value for the tooltip. Requires a parameter of type **Telerik.Web.UI.ToolTipAnimation** . The possible values of this enumerator are **None** , **Resize** , **Fade** , **Slide** , **FlyIn** . For example: `radToolTip.set_animation(Telerik.Web.UI.ToolTipAnimation.None);`.|
| **set_animationDuration** |Sets animation duration value for the tooltip in milliseconds.|
| **set_autoCloseDelay** |Sets delay in milliseconds for the tooltip to close automatically. See **Example 3**.|
| **set_content** |Sets new content to the tooltip|
| **set_contentElement** |Sets a new content element to the tooltip|
| **set_contentScrolling** |Sets a new overflow value for the tooltip content area. Requires a parameter of type **Telerik.Web.UI.ToolTipScrolling** . The possible values are **Auto** , **None** , **X** , **Y** , **Both** , **Default**. For example: `radToolTip.set_contentScrolling(Telerik.Web.UI.ToolTipScrolling.None);`.|
| **set_enableShadow** |Sets a value indicating whether the tooltip should have a shadow.|
| **set_height** |Sets new height to the tooltip|
| **set_hideDelay** |Sets the delay in milliseconds before the tooltip is hidden.|
| **set_hideEvent** |Sets on what event the tooltip should hide (see **Example 4**). The **HideEvent** property is an enum and can take the following values, which names describe the effect when they are set: **Default**, **FromCode**, **LeaveTargetAndToolTip**, **LeaveToolTip**, **ManualClose**. |
| **set_ignoreAltAttribute** |Sets a value indicating whether the Alt attribute of the target should be ignored.|
| **set_modal** |Sets whether the tooltip is displayed modally.|
| **set_mouseTrailing** |Sets whether the tooltip should follows the mouse movement or not|
| **set_offsetX** |Sets a new horizontal offset relative to its target element|
| **set_offsetY** |Sets a new vertical offset relative to its target element|
| **set_overlay** |Sets a value indicating whether the tooltip will create an overlay element.|
| **set_position** |Sets a new relative position to the tooltip according to its target element. Requires an object of type **Telerik.Web.UI.ToolTipPosition** as a parameter. The possible values are **TopLeft** , **TopCenter** , **TopRight** , **MiddleLeft** , **Center** , **MiddleRight** , **BottomLeft** , **BottomCenter** , **BottomRight** . For example: `radToolTip.set_position(Telerik.Web.UI.ToolTipPosition.BottomRight);`.|
| **set_relativeTo** |Sets whether the tooltip is positioned relative to the mouse or relative to the tooltip. Requires a parameter of type **Telerik.Web.UI.ToolTipRelativeDisplay** . Its possible values are **Mouse** , **Element** , **BrowserWindow** . For example: `radToolTip.set_position(Telerik.Web.UI.ToolTipRelativeDisplay.Element);`.|
| **set_showCallout** |Sets whether the tooltip callout image will be displayed|
| **set_showDelay** |Sets delay in milliseconds for the tooltip to appear. See **Example 5**.|
| **set_showEvent** |Sets on what event the tooltip should show (see **Example 6**). The **ShowEvent** property is an enum and can take the following values, which names describe the effect when they are set: **OnMouseOver**, **OnClick**, **OnRightClick**, **OnFocus**, **FromCode**. |
| **set_targetControl** |Sets a new target control to the tooltip. When showing a tooltip after changing its target on the client a small timeout is needed. See **Example 7**.|
| **set_targetControlID** |Sets a new target control to the tooltip. When showing a tooltip after changing its target on the client a small timeout is needed. See **Example 8**.|
| **set_text** |Sets new text to the tooltip. See **Example 9**.|
| **set_title** |Sets a new title to the tooltip. See **Example 10**.|
| **set_width** |Sets new width to the tooltip|




**Example 1**: Get the content element of a tooltip so you can access all checkboxes inside.
````JavaScript
var tooltip = $find("RadToolTip3");
var contentElement = tooltip.get_contentElement();
var checkboxes = contentElement.getElementsByTagName("INPUT");
````

**Example 2**: Get a tooltip text.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
alert(radToolTip.get_text());
````

**Example 3**: Set the time after which a tooltip will close automatically.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>"); // set the auto close delay to 5 seconds 
secondsradToolTip.set_autoCloseDelay(5000);
````

**Example 4**: Set the user action that will close a tooltip.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_hideEvent(Telerik.Web.UI.ToolTipHideEvent.ManualClose);
````

**Example 5**: Set the time that will pass before the user action that shows the tooltip and the actual tooltip showing.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>"); // set the show delay to 2 seconds
secondsradToolTip.set_showDelay(2000);
````

**Example 6**: Set the user action that will show the tooltip
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_showEvent(Telerik.Web.UI.ToolTipShowEvent.FromCode); //will be shown only via an API call
````

**Example 7**: Showing a tooltip after a new target has been set.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_targetControl(txtBoxReference);
setTimeout(function ()
{
	radToolTip.show();
}, 20);
````

**Example 8**: Showing a tooltip after a new target has been set.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_targetControlID("Button1");
setTimeout(function () {
	radToolTip.show();
}, 20);
````

**Example 9**: Setting new text in a tooltip.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_text("This is the new tool tip text to display");
````

**Example 10**: Setting a new title to a tooltip.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_title("This is the new title");
````



>caption Public Methods

| Name | Description |
| ------ | ------ |
| **clone** |Creates a clone of the tooltip for another targetElement, and possibly with a different text to display.|
| **getManualCloseButton** |Returns a reference to the DOM object of the tooltip's close button when HideEvent="ManualClose".|
| **hide** |Hides the tooltip. See **Example 11**.|
| **isVisible** |Returns whether the tooltip control is currently visible. See **Example 12**.|
| **isModal** |Returns whether the tooltip control is displaying modally.|
| **show** |Displays the tooltip at the proper position, relative to its target control. See **Example 13**. If the target of the tooltip has been changed with JavaScript, a small timeout is needed prior to calling `show()` (see **Example 14**).|
| **showLoadingMessage** |Displays the loading message.|
| **updateLocation** |Calculates the tooltip position according to its targets and repositions the tooltip accordingly.|

For a live demo see [Client Side API](https://demos.telerik.com/aspnet-ajax/ToolTip/Examples/ClientSideAPI/DefaultCS.aspx).



**Example 11**: Hiding a tooltip.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
if (radToolTip.isVisible())
{
	radToolTip.hide();
}
````

**Example 12**: Showing a tooltip with a new text.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_text("This is the new tool tip text to display");
if (!radToolTip.isVisible())
{
    radToolTip.show();
}
````

**Example 13**: Show a tooltip.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_text("This is the new tool tip text to display");
radToolTip.show();
````

**Example 14**: Show a tooltip after its target has been changed.
````JavaScript
var radToolTip = $find("<%= RadToolTip1.ClientID %>");
radToolTip.set_targetControlID("Button1");
setTimeout(function () {
	radToolTip.show();
}, 20);
````


>caption RadToolTip's static methods

| Name | Description |
| ------ | ------ |
| **getCurrent** |Gets a reference to the tooltip element that is currently open. See **Example 15**.|


**Example 15**: Getting the currently shown tooltip, if any.
````JavaScript
var activeToolTip = Telerik.Web.UI.RadToolTip.getCurrent();
````


# See Also

 * [Overview]({%slug tooltip/client-side-programming/overview%})

 * [RadToolTipManager Object]({%slug tooltip/client-side-programming/radtooltipmanager-object%})
