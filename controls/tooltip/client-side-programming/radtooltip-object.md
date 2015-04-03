---
title: RadToolTip Object
page_title: RadToolTip Object | UI for ASP.NET AJAX Documentation
description: RadToolTip Object
slug: tooltip/client-side-programming/radtooltip-object
tags: radtooltip,object
published: True
position: 1
---

# RadToolTip Object



The following table lists the most important members of the client-side __RadToolTip__ object:

## RadToolTip


>caption Public Properties

| Name | Description |
| ------ | ------ |
| __get_animation__ |Gets animation value for the tooltip. Returns an object of type __Telerik.Web.UI.ToolTipAnimation__ .|
| __get_animationDuration__ |Gets animation duration value for the tooltip in milliseconds.|
| __get_autoCloseDelay__ |Gets delay in milliseconds for the tooltip to close automatically|
| __get_content__ |Gets the current content of the tooltip|
| __get_contentElement__ |Gets the content element of the tooltip

````JavaScript
	
	            var tooltip = $find("RadToolTip3");
	            var contentElement = tooltip.get_contentElement();
	            var checkboxes = contentElement.getElementsByTagName("INPUT");
	
````

|
| __get_contentScrolling__ |Gets a new overflow value for the tooltip content area. Returns an object of type __Telerik.Web.UI.ToolTipScrolling__ |
| __get_enableShadow__ |Gets a value indicating whether the tooltip should have a shadow.|
| __get_height__ |Gets height of the tooltip|
| __get_hideDelay__ |Gets the delay in milliseconds before the tooltip is hidden.|
| __get_ignoreAltAttribute__ |Gets a value indicating whether the Alt attribute of the target should be ignored.|
| __get_modal__ |Gets whether the tooltip is displayed modally.|
| __get_manualClose__ |Gets whether the tooltip requires to be hidden manually by the user, or hides automatically|
| __get_mouseTrailing__ |Gets whether the tooltip should follows the mouse movement or not|
| __get_offsetX__ |Gets the horizontal offset relative to its target element|
| __get_offsetY__ |Gets the vertical offset relative to its target element|
| __get_overlay__ |Gets a value indicating whether the tooltip has an overlay element.|
| __get_popupElement__ |Returns a reference to the DOM object of the popup element.|
| __get_position__ |Gets the relative position to the tooltip to its target element. Returns an object of type __Telerik.Web.UI.ToolTipPosition__ .|
| __get_relativeTo__ |Gets whether the tooltip is positioned relative to the mouse or relative to the tooltip. Returns an object of type __Telerik.Web.UI.ToolTipRelativeDisplay__ .|
| __get_showCallout__ |Gets whether the tooltip callout image will be displayed|
| __get_showDelay__ |Gets delay in milliseconds for the tooltip to appear|
| __get_sticky__ |Gets whether the tooltip is hidden when the mouse leaves the target control, or the tooltip itself|
| __get_targetControl__ |Gets a reference to the tooltip target element|
| __get_targetControlID__ |Gets the target control of the tooltip|
| __get_text__ |Gets the text of the tooltip

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            alert(radToolTip.get_text());
	
````

|
| __get_title__ |Gets the title of the tooltip|
| __get_width__ |Gets width of the tooltip|
| __set_animation__ |Sets animation value for the tooltip. Requires a parameter of type __Telerik.Web.UI.ToolTipAnimation__ . The possible values of this enumerator are __None__ , __Resize__ , __Fade__ , __Slide__ , __FlyIn__ . For example: radToolTip.set_animation(Telerik.Web.UI.ToolTipAnimation.None);|
| __set_animationDuration__ |Sets animation duration value for the tooltip in milliseconds.|
| __set_autoCloseDelay__ |Sets delay in milliseconds for the tooltip to close automatically

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>"); // set the auto close delay to 5 
	            secondsradToolTip.set_autoCloseDelay(5000);
	
````

|
| __set_content__ |Sets new content to the tooltip|
| __set_contentElement__ |Sets a new content element to the tooltip|
| __set_contentScrolling__ |Sets a new overflow value for the tooltip content area. Requires a parameter of type __Telerik.Web.UI.ToolTipScrolling__ . The possible values are __Auto__ , __None__ , __X__ , __Y__ , __Both__ , __Default__ . For example: radToolTip.set_contentScrolling(Telerik.Web.UI.ToolTipScrolling.None);|
| __set_enableShadow__ |Sets a value indicating whether the tooltip should have a shadow.|
| __set_height__ |Sets new height to the tooltip|
| __set_hideDelay__ |Sets the delay in milliseconds before the tooltip is hidden.|
| __set_hideEvent__ |Sets on what event the tooltip should hide

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_hideEvent(Telerik.Web.UI.ToolTipHideEvent.ManualClose);
	
````

The __HideEvent__ property is an enum and can take the following values, which names describe the effect when they are set:

*  __Default__ 

*  __FromCode__ 

*  __LeaveTargetAndToolTip__ 

*  __LeaveToolTip__ 

*  __ManualClose__ |
| __set_ignoreAltAttribute__ |Sets a value indicating whether the Alt attribute of the target should be ignored.|
| __set_modal__ |Sets whether the tooltip is displayed modally.|
| __set_mouseTrailing__ |Sets whether the tooltip should follows the mouse movement or not|
| __set_offsetX__ |Sets a new horizontal offset relative to its target element|
| __set_offsetY__ |Sets a new vertical offset relative to its target element|
| __set_overlay__ |Sets a value indicating whether the tooltip will create an overlay element.|
| __set_position__ |Sets a new relative position to the tooltip according to its target element. Requires an object of type __Telerik.Web.UI.ToolTipPosition__ as a parameter. The possible values are __TopLeft__ , __TopCenter__ , __TopRight__ , __MiddleLeft__ , __Center__ , __MiddleRight__ , __BottomLeft__ , __BottomCenter__ , __BottomRight__ . For example: radToolTip.set_position(Telerik.Web.UI.ToolTipPosition.BottomRight);|
| __set_relativeTo__ |Sets whether the tooltip is positioned relative to the mouse or relative to the tooltip. Requires a parameter of type __Telerik.Web.UI.ToolTipRelativeDisplay__ . Its possible values are __Mouse__ , __Element__ , __BrowserWindow__ . For example: radToolTip.set_position(Telerik.Web.UI.ToolTipRelativeDisplay.Element);|
| __set_showCallout__ |Sets whether the tooltip callout image will be displayed|
| __set_showDelay__ |Sets delay in milliseconds for the tooltip to appear

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>"); // set the show delay to 2 
	            secondsradToolTip.set_showDelay(2000);
	
````

|
| __set_showEvent__ |Sets on what event the tooltip should show

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	        	radToolTip.set_showEvent(Telerik.Web.UI.ToolTipShowEvent.FromCode);
	
````

The __ShowEvent__ property is an enum and can take the following values, which names describe the effect when they are set:

*  __OnMouseOver__ 

*  __OnClick__ 

*  __OnRightClick__ 

*  __OnFocus__ 

*  __FromCode__ |
| __set_targetControl__ |Sets a new target control to the tooltip

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_targetControl(txtBoxReference);
	            setTimeout(function ()
	            {
	            	radToolTip.show();
	            }, 20);
	
````

When showing a tooltip after changing its target on the client a small timeout is needed.|
| __set_targetControlID__ |Sets a new target control to the tooltip

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_targetControlID("Button1");
	            setTimeout(function () {
	            	radToolTip.show();
	            }, 20);
	
````

When showing a tooltip after changing its target on the client a small timeout is needed.|
| __set_text__ |Sets new text to the tooltip

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_text("This is the new tool tip text to display");
	
````

|
| __set_title__ |Sets a new title to the tooltip

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_title("This is the new title");
	
````

|
| __set_width__ |Sets new width to the tooltip|


>caption Public Methods

| Name | Description |
| ------ | ------ |
| __clone__ |Creates a clone of the tooltip for another targetElement, and possibly with a different text to display.|
| __getManualCloseButton__ |Returns a reference to the DOM object of the tooltip's close button when HideEvent="ManualClose".|
| __hide__ |Hides the tooltip

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            if (radToolTip.isVisible())
	            {
	                radToolTip.hide();
	            }
	
````

|
| __isVisible__ |Returns whether the tooltip control is currently visible

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_text("This is the new tool tip text to display");
	            if (!radToolTip.isVisible())
	            {
	                radToolTip.show();
	            }
	
````

|
| __isModal__ |Returns whether the tooltip control is displaying modally.|
| __show__ |Displays the tooltip at the proper position, relative to its target control.

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_text("This is the new tool tip text to display");
	            radToolTip.show();
	
````

If the target of the tooltip has been changed with JavaScript, a small timeout is needed prior to calling show():

````JavaScript
	
	            var radToolTip = $find("<%= RadToolTip1.ClientID %>");
	            radToolTip.set_targetControlID("Button1");
	            setTimeout(function () {
	            	radToolTip.show();
	            }, 20);
	
````

|
| __showLoadingMessage__ |Displays the loading message.|
| __updateLocation__ |Calculates the tooltip position according to its targets and repositions the tooltip accordingly.|

For a live demo see [Client Side API](http://demos.telerik.com/aspnet-ajax/ToolTip/Examples/ClientSideAPI/DefaultCS.aspx).


>caption RadToolTip's static methods

| Name | Description |
| ------ | ------ |
| __getCurrent__ |Gets a reference to the tooltip element that is currently open.

````JavaScript
	
	            var activeToolTip = Telerik.Web.UI.RadToolTip.getCurrent();
	
````

|

# See Also

 * [Overview]({%slug tooltip/client-side-programming/overview%})

 * [RadToolTipManager Object]({%slug tooltip/client-side-programming/radtooltipmanager-object%})
