---
title: Telerik Static Client Library
page_title: Telerik Static Client Library | UI for ASP.NET AJAX Documentation
description: Telerik Static Client Library
slug: controls/telerik-static-client-library
tags: telerik,static,client,library
published: True
position: 118
---

# Telerik Static Client Library



## 

To facilitate Client-side development with the controls in the Telerik UI suite, Telerik provides alibrary of static client-side javascript functions. This javascriptobject is named __$telerik__. The functions inside make a handy set of tools for tasks related to DOM element traversal and position location, browser detection, object search and others. The __$telerik__ object is loaded into the window object whenever you add a UI control from the Telerik.Web.UI namespace to the page. Alternatively, if you do not use any Telerik control, but have referenced the assembly Telerik.Web.UI and still want to use __$telerik__, you can manually reference the javascript resource file embedded in the Telerik.Web.UI assembly:

````ASPNET
	    <asp:ScriptManager runat="server" ID="ScriptManager1">
	        <Scripts>
	            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
	        </Scripts>
	    </asp:ScriptManager>
````



The __$telerik__ object provides the following set of static properties for browser detection:




>caption  

| Name | Description |
| ------ | ------ |
| __isChrome__ |Returns true if the User Agent is Google Chrome|
| __isFirefox__ |Returns true if the User Agent is any version of Firefox|
| __isFirefox2__ |Returns true if the User Agent is Firefox 2|
| __isFirefox3__ |Returns true if the User Agent is Firefox 3|
| __isIE__ |Returns true if the User Agent is Internet Explorer|
| __isIE6__ |Returns true if the User Agent is Internet Explorer 6|
| __isIE7__ |Returns true if the User Agent is Internet Explorer 7|
| __isIE8__ |Returns true if the User Agent is Internet Explorer 8|
| __isIE9__ |Returns true if the User Agent is Internet Explorer 9|
| __isOpera__ |Returns true if the User Agent is Opera|
| __isOpera11__ |Returns true if the User Agent is Opera11|
| __isSafari__ |Returns true if the User Agent is any version of Safari|
| __isSafari2__ |Returns true if the User Agent is Safari 2|
| __isSafari3__ |Returns true if the User Agent is Safari 3|
| __isSafari4__ |Returns true if the User Agent is Safari 4|
| __isMobileSafari__ |Returns true if the User Agent is iPhone OS Mobile Safari|
| __isBlackBerry__ |Returns true if the User Agent is BlackBerry|
| __isBlackBerry4__ |Returns true if the User Agent is BlackBerry 4|
| __isBlackBerry5__ |Returns true if the User Agent is isBlackBerry 5|
| __isBlackBerry6__ |Returns true if the User Agent is isBlackBerry 6|
| __isTouchDevice__ |Returns true if the current browser is running on a mobile device that supports touch capabilities|
| __quirksMode__ |Returns true if the browser agent runs in quirks mode (IE only)|
| __standardsMode__ |Returns true if the browser agent runs in standards mode (IE only)|

Additionally to browser detection properties, the __$telerik__ object provides the __radControls__ property:




>caption  

| Name | Description |
| ------ | ------ |
| __radControls__ |Returns an array of all client-side objects of Telerik controls if the controls expose client objects|



The __$telerik__ object provides the following set of static functions by topic:




>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| *Element Styling* |||||
| __addCssClasses__  __removeCssClasses__ | __element__ (HTML DOM element) __classNames__ (Array of class names)|none|Adds / Removes multiple class names to the DOM element|
| __getCurrentStyle__ | __element__ (DOM element) __attribute__ (String) __defaultValue__ (String)|String|Gets the current value of the __attribute__ style of the specified __element__ . If the current value is not defined, optionally returns __defaultValue__ |
| __getComputedStyle__ | __element__ (DOM element) __attribute__ (String) __defaultValue__ (String)|String|Gets the computed value of the __attribute__ style of the	specified __element__ . If there's no computed value, optionally returns __defaultValue__ |
| __getPadding__ | __element__ (DOM element) __boxSide__ (Telerik.Web.BoxSide)|Ingeger|Returns the padding thickness of __element__ on the given side|
| __getPaddingBox__ | __element__ (DOM element)|Object {top, left, bottom, right, horizontal, vertical}|Returns the box of padding sizes|
| __getVisible__ | __element__ (DOM element)|Boolean|Returns __true__ if __element__ is visible, otherwise returns __false__ |
| __setVisible__ | __element__ (DOM element) __value__ (Boolean)|none|Set the visibility of an element|
| __isBorderVisible__ | __element__ (DOM element) __boxSide__ (Telerik.Web.BoxSide)|Boolean|Whether the current border style for an element on a specific boxSide is not 'none'.|
| __isRightToLeft__ | __element__ (DOM element)|Boolean|Returns true if __element__ is in RTL direction, otherwise returns false|
| __mergeElementAttributes__ | __source__ (DOM element) __target__ (DOM element) __preserve__ (Boolean)|none|Merges the atributes of __source__ to __target__ . If under IE, the optional __preserve__ specifies whether to preserve the identity of __target__ or to allow modification on merging|
| __parseBorderWidth__ | __borderWidth__ (String)|Integer|Returns nteger value of the border width in pixels out of the __borderWidth__ style string|
| __parsePadding__ | __padding__ (String)|Integer|Returns integer value of padding in pixels out of the __padding__ style string|
| __parseUnit__ | __value__ (String)|Object {size, type}|Returns an object with unit size and type out of __value__ unit string|
| __registerSkins__ | __element__ (DOM element)|none|Registers all __<link>__ style tags in __element__ to the page. If no element is provided, all the __<link>__ tags on page are registered|
| *Event Handler Manipulation* |||||
| __addExternalHandler__  __removeExternalHandler__ | __element__ (HTML DOM element) __eventName__ (name of the event, e.g. "mouseover") __handler__ (the event handler function)|none|Adds / Removes the event handler __handler__ to the __element__ 's __eventName__ event. Can be used when attaching events to HTML elements in IFRAMEs where ASP.NET AJAX's __$addHandler__ and __$remoevHandler__ do not work|
| __cancelRawEvent__ | __e__ (Event object)|false|Cancels the specified event from propagating|
| *Element Animation* |||||
| __transition__ | __element__ (the DOM element or jQuery object that will be animated) __properties__ (an object of CSS properties and valuesthat the animation will move toward) __duration__ (a string or number determining how long theanimation will run) __easing__ (a string indicating which easing function touse for the transition) __complete__ (a function to call once the animationis complete)|None|Performs a custom animation of a set of CSS properties.|
| *Element Positioning* |||||
| __containsPoint__ | __rect__ (Rectangle object with properties: x, y, width, height) __x__ (X coordinate of the point) __y__ (Y coordinate of the point)|Boolean|Checks whether a point with coordinates __x__ and __y__ is contained within a __rect__ . The Rectangle object needs to provide properties: x, y, width, height|
| __elementOverflowsLeft__  __elementOverflowsTop__ | __element__ (HTML DOM element) __cachedLocation__ (Sys.UI.Point object. Optional. If a Point object is specified for this parameter, it will be accepted as the HTML element's current location)|Boolean|Checks if the specified HTML element overflows the screen with the specified screen size from left or top respectively|
| __elementOverflowsBottom__  __elementOverflowsRight__ | __screenSize__ (screen size object with properties: width, height) __element__ (HTML DOM element) __cachedLocation__ (Sys.UI.Point object. Optional. If a Point object is specified for this parameter, it will be accepted as the HTML element's current location)|Boolean|Checks if the specified HTML element overflows the screen with the specified screen size from right or bottom respectively|
| __getLocation__ | __element__ (DOM element)|Sys.UI.Point {x, y}|Returns the absolute location of __element__ in the document|
| __setLocation__ | __element__ (DOM element) __point__ (Object {x, y})|none|Sets the location (left, top) of __element__ to __point__ (x, y)|
| __getScrollOffset__ | __element__ (DOM element) __recursive__ (Boolean)|Object {x, y}|Returns the scroll ofset of __element__ from its parent(s). If __recursive__ , return the absolute scroll offset.|
| __isMouseOverElement__ | __element__ (DOM element) __event__ (DOM event)|Boolean|Returns whether mouse is over __element__ when __event__ fires *See also isMouseOverElementEx* |
| __isMouseOverElementEx__ | __element__ (DOM element) __event__ (DOM event)|Boolean|Returns whether mouse is over __element__ when __event__ fires. *This method is more sophisticated and it is recommend that you use it instead of isMouseOverElement, which exists for historical reasons.* |
| __scrollIntoView__ | __element__ (DOM element)|none|Scrolls the parent scrollable container to __element__ 's position. An alternative flicker-free implementation to HTMLDomElement.scrollIntoView()|
| *Element Sizing* |||||
| __getBorderBox__ | __element__ (DOM element)|Object {top, left, bottom, right, horizontal, vertical}|Gets the border box sizes of the specified element|
| __getBorderWidth__ | __element__ (DOM element) __boxSide__ (Telerik.Web.BoxSide)|Integer|Returns the border width of __element__ on the specified box side|
| __getBounds__ | __element__ (DOM element)|Sys.UI.Bounds {x, y, width, height}|Gets the coordinates, width and height of the specified element|
| __setBounds__ | __element__ (DOM element) __bounds__ (Object {x, y, width, height}|none|Sets __element__ 's border-box size to __bounds__ |
| __getClientBounds__ |none|Sys.UI.Bounds {x, y, width, height}|Gets the width and height of the client browser window, excluding scroll bars. Return object's x and y properties are set to 0.|
| __getContentSize__ | __element__ (DOM element)|Object {width, height}|Gets the "content-box" size of an element|
| __setContentSize__ | __element__ (DOM element) __size__ (Object {width, height})|none|Sets the content-box size of __element__ to __size__ |
| __getDocumentRelativeCursorPosition__ | __e__ (DOM event)|Object {left, top}|Gets the cursor position of the mouse when event __e__ is fired, relative to the Document|
| __getMargin__ | __element__ (DOM element) __boxSide__ (Telerik.Web.BoxSide)|Integer|Returns the value of the margin of __element__ on the specified box side|
| __getMarginBox__ | __element__ (DOM element)|Object {top, left, bottom, right, horizontal, vertical}|Returns the box object with the margin sizes|
| __getOuterBounds__ | __element__ (DOM element)|Object {x, y, width, height}|Returns the outer bounds of __element__ |
| __getOuterSize__ | __element__ (DOM element)|Object {width, height}|Returns the outer size of __element__ |
| __getSize__ | __element__ (DOM element)|Object {width, height}|Returns the size of the element|
| __setSize__ | __element__ (DOM element) __value__ (Object {width, height})|none|Sets the border-box size of __element__ to __value__ |
| __getViewPortSize__ |none|Object {width, height}|Returns the effective size of the client viewport|
| *Element Content Manipulation* |||||
| __getOuterHtml__ | __element__ (DOM element)|String|Returns the outer HTML text of __element__ (element's innerHTML and the element's own rendered HTML)|
| __repaintChildren__ | __parentControl__ (Object - Telerik control client object)|none|Repaints all children elements of __parentControl__ 's container element|
| *Telerik controls client object access* |||||
| __findControl__ | __parent__ (HTML DOM element) __id__ (String)|Object - client Telerik control object|Finds the client-side Telerik control object by provided server-side	ID of the control object in the collection of child elements of	the __parent__ DOM element|
| *Element Search* |||||
| __findElement__ | __parent__ (HTML DOM element) __id__ (String)|HTML DOM element|Finds the HTML DOM wrapper element of the Telerik control by	provided server-side ID in the collection of child elements of the __parent__ DOM element|
| __getChildByClassName__ | __element__ (parent DOM element) __className__ (CSS class name) __index__ (start index in the collection of child elements)|HTML DOM element|Returns the first child element of __element__ with the specified __className__ , optionally starting from position __index__ |
| __getChildrenByClassName__ | __element__ (parent DOM element) __className__ (CSS class name)|Array|Returns an array of all child elements of __element__ with the specified __className__ |
| __getChildrenByTagName__ | __element__ (parent DOM element) __tagName__ (String - tag name)|Array|Returns an array of all child elements of __element__ with the specified tag name|
| __getElementByClassName__ | __element__ (DOM element) __className__ (String) __tagName__ (String)|DOM element|Returns the first child element of __element__ widh the specified __className__ and optionally of type __tagName__ |
| __getFirstChildByTagName__ | __element__ (DOM element) __tagName__ (String) __index__ (Integer)|DOM element|Returns the first child of __element__ with the specified __tagName__ , starting from __index__ in the collection of child elements|
| __getPreviousHtmlNode__ | __element__ (DOM element)|DOM element|Gets the previous non-text HTML sibling of element|
| __getNextHtmlNode__ | __element__ (DOM element)|DOM element|Gets the next non-text HTML sibling of element|
| __getInvisibleParent__ | __element__ (DOM element)|DOM element|Returns the closest parent of __element__ that has its display style set to "none", or null if no such parent is found|
| __isDescendant__ | __ancestor__ (DOM element) __descendant__ (DOM element)|Boolean|Returns whether __descendant__ is a recursive child node of __ancestor__ |
| __isDescendantOrSelf__ | __ancestor__ (DOM element) __descendant__ (DOM element)|Boolean|Returns whether __descendant__ is the same as __ancestor__ or a recursive child node of __ancestor__ |

>note 



 The "content-box" is the size of the content area *inside* of the borders and padding of an element. It does not include the margins around the element. 


>note 



 The "border-box" is the size of the content area *outside* of the borders and padding of an element. It does not include the margins around the element. 







