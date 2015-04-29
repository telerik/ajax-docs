---
title: Telerik Static Client Library
page_title: Telerik Static Client Library | UI for ASP.NET AJAX Documentation
description: Telerik Static Client Library
slug: controls/telerik-static-client-library
tags: telerik,static,client,library
published: True
position: 22
---

# Telerik Static Client Library



## 

To facilitate Client-side development with the controls in the Telerik UI suite, Telerik provides a library of static client-side javascript functions. This javascript object is named **$telerik**. The functions inside make a handy set of tools for tasks related to DOM element traversal and position location, browser detection, object search and others. The **$telerik** object is loaded into the window object whenever you add a UI control from the Telerik.Web.UI namespace to the page. Alternatively, if you do not use any Telerik control, but have referenced the assembly Telerik.Web.UI and still want to use **$telerik**, you can manually reference the javascript resource file embedded in the Telerik.Web.UI assembly:

````ASPNET
<asp:ScriptManager runat="server" ID="ScriptManager1">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
    </Scripts>
</asp:ScriptManager>
````

The **$telerik** object provides the following set of static properties for browser detection:

>caption  

| Name | Description |
| ------ | ------ |
| **isChrome** |Returns true if the User Agent is Google Chrome|
| **isFirefox** |Returns true if the User Agent is any version of Firefox|
| **isFirefox2** |Returns true if the User Agent is Firefox 2|
| **isFirefox3** |Returns true if the User Agent is Firefox 3|
| **isIE** |Returns true if the User Agent is Internet Explorer|
| **isIE6** |Returns true if the User Agent is Internet Explorer 6|
| **isIE7** |Returns true if the User Agent is Internet Explorer 7|
| **isIE8** |Returns true if the User Agent is Internet Explorer 8|
| **isIE9** |Returns true if the User Agent is Internet Explorer 9|
| **isOpera** |Returns true if the User Agent is Opera|
| **isOpera11** |Returns true if the User Agent is Opera11|
| **isSafari** |Returns true if the User Agent is any version of Safari|
| **isSafari2** |Returns true if the User Agent is Safari 2|
| **isSafari3** |Returns true if the User Agent is Safari 3|
| **isSafari4** |Returns true if the User Agent is Safari 4|
| **isMobileSafari** |Returns true if the User Agent is iPhone OS Mobile Safari|
| **isBlackBerry** |Returns true if the User Agent is BlackBerry|
| **isBlackBerry4** |Returns true if the User Agent is BlackBerry 4|
| **isBlackBerry5** |Returns true if the User Agent is isBlackBerry 5|
| **isBlackBerry6** |Returns true if the User Agent is isBlackBerry 6|
| **isTouchDevice** |Returns true if the current browser is running on a mobile device that supports touch capabilities|
| **quirksMode** |Returns true if the browser agent runs in quirks mode (IE only)|
| **standardsMode** |Returns true if the browser agent runs in standards mode (IE only)|

Additionally to browser detection properties, the **$telerik** object provides the **radControls** property:

>caption  

| Name | Description |
| ------ | ------ |
| **radControls** |Returns an array of all client-side objects of Telerik controls if the controls expose client objects|


The **$telerik** object provides the following set of static functions by topic:

>caption  
| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| *Element Styling* |||||
| **addCssClasses**  **removeCssClasses** | **element** (HTML DOM element) **classNames** (Array of class names)|none|Adds / Removes multiple class names to the DOM element|
| **getCurrentStyle** | **element** (DOM element) **attribute** (String) **defaultValue** (String)|String|Gets the current value of the **attribute** style of the specified **element** . If the current value is not defined, optionally returns **defaultValue** |
| **getComputedStyle** | **element** (DOM element) **attribute** (String) **defaultValue** (String)|String|Gets the computed value of the **attribute** style of the	specified **element** . If there's no computed value, optionally returns **defaultValue** |
| **getPadding** | **element** (DOM element) **boxSide** (Telerik.Web.BoxSide)|Integer|Returns the padding thickness of **element** on the given side|
| **getPaddingBox** | **element** (DOM element)|Object {top, left, bottom, right, horizontal, vertical}|Returns the box of padding sizes|
| **getVisible** | **element** (DOM element)|Boolean|Returns **true** if **element** is visible, otherwise returns **false** |
| **setVisible** | **element** (DOM element) **value** (Boolean)|none|Set the visibility of an element|
| **isBorderVisible** | **element** (DOM element) **boxSide** (Telerik.Web.BoxSide)|Boolean|Whether the current border style for an element on a specific boxSide is not 'none'.|
| **isRightToLeft** | **element** (DOM element)|Boolean|Returns true if **element** is in RTL direction, otherwise returns false|
| **mergeElementAttributes** | **source** (DOM element) **target** (DOM element) **preserve** (Boolean)|none|Merges the attributes of **source** to **target** . If under IE, the optional **preserve** specifies whether to preserve the identity of **target** or to allow modification on merging|
| **parseBorderWidth** | **borderWidth** (String)|Integer|Returns integer value of the border width in pixels out of the **borderWidth** style string|
| **parsePadding** | **padding** (String)|Integer|Returns integer value of padding in pixels out of the **padding** style string|
| **parseUnit** | **value** (String)|Object {size, type}|Returns an object with unit size and type out of **value** unit string|
| **registerSkins** | **element** (DOM element)|none|Registers all **`<link>`** style tags in **element** to the page. If no element is provided, all the **<link>** tags on page are registered|
| *Event Handler Manipulation* |||||
| **addExternalHandler**  **removeExternalHandler** | **element** (HTML DOM element) **eventName** (name of the event, e.g. "mouseover") **handler** (the event handler function)|none|Adds / Removes the event handler **handler** to the **element** 's **eventName** event. Can be used when attaching events to HTML elements in IFRAMEs where ASP.NET AJAX's **$addHandler** and **$remoevHandler** do not work|
| **cancelRawEvent** | **e** (Event object)|false|Cancels the specified event from propagating|
| *Element Animation* |||||
| **transition** | **element** (the DOM element or jQuery object that will be animated) **properties** (an object of CSS properties and values that the animation will move toward) **duration** (a string or number determining how long the animation will run) **easing** (a string indicating which easing function to use for the transition) **complete** (a function to call once the animation is complete)|None|Performs a custom animation of a set of CSS properties.|
| *Element Positioning* |||||
| **containsPoint** | **rect** (Rectangle object with properties: x, y, width, height) **x** (X coordinate of the point) **y** (Y coordinate of the point)|Boolean|Checks whether a point with coordinates **x** and **y** is contained within a **rect** . The Rectangle object needs to provide properties: x, y, width, height|
| **elementOverflowsLeft**  **elementOverflowsTop** | **element** (HTML DOM element) **cachedLocation** (Sys.UI.Point object. Optional. If a Point object is specified for this parameter, it will be accepted as the HTML element's current location)|Boolean|Checks if the specified HTML element overflows the screen with the specified screen size from left or top respectively|
| **elementOverflowsBottom**  **elementOverflowsRight** | **screenSize** (screen size object with properties: width, height) **element** (HTML DOM element) **cachedLocation** (Sys.UI.Point object. Optional. If a Point object is specified for this parameter, it will be accepted as the HTML element's current location)|Boolean|Checks if the specified HTML element overflows the screen with the specified screen size from right or bottom respectively|
| **getLocation** | **element** (DOM element)|Sys.UI.Point {x, y}|Returns the absolute location of **element** in the document|
| **setLocation** | **element** (DOM element) **point** (Object {x, y})|none|Sets the location (left, top) of **element** to **point** (x, y)|
| **getScrollOffset** | **element** (DOM element) **recursive** (Boolean)|Object {x, y}|Returns the scroll offset of **element** from its parent(s). If **recursive** , return the absolute scroll offset.|
| **isMouseOverElement** | **element** (DOM element) **event** (DOM event)|Boolean|Returns whether mouse is over **element** when **event** fires *See also isMouseOverElementEx* |
| **isMouseOverElementEx** | **element** (DOM element) **event** (DOM event)|Boolean|Returns whether mouse is over **element** when **event** fires. *This method is more sophisticated and it is recommend that you use it instead of isMouseOverElement, which exists for historical reasons.* |
| **scrollIntoView** | **element** (DOM element)|none|Scrolls the parent scrollable container to **element** 's position. An alternative flicker-free implementation to HTMLDomElement.scrollIntoView()|
| *Element Sizing* |||||
| **getBorderBox** | **element** (DOM element)|Object {top, left, bottom, right, horizontal, vertical}|Gets the border box sizes of the specified element|
| **getBorderWidth** | **element** (DOM element) **boxSide** (Telerik.Web.BoxSide)|Integer|Returns the border width of **element** on the specified box side|
| **getBounds** | **element** (DOM element)|Sys.UI.Bounds {x, y, width, height}|Gets the coordinates, width and height of the specified element|
| **setBounds** | **element** (DOM element) **bounds** (Object {x, y, width, height}|none|Sets **element** 's border-box size to **bounds** |
| **getClientBounds** |none|Sys.UI.Bounds {x, y, width, height}|Gets the width and height of the client browser window, excluding scroll bars. Return object's x and y properties are set to 0.|
| **getContentSize** | **element** (DOM element)|Object {width, height}|Gets the "content-box" size of an element|
| **setContentSize** | **element** (DOM element) **size** (Object {width, height})|none|Sets the content-box size of **element** to **size** |
| **getDocumentRelativeCursorPosition** | **e** (DOM event)|Object {left, top}|Gets the cursor position of the mouse when event **e** is fired, relative to the Document|
| **getMargin** | **element** (DOM element) **boxSide** (Telerik.Web.BoxSide)|Integer|Returns the value of the margin of **element** on the specified box side|
| **getMarginBox** | **element** (DOM element)|Object {top, left, bottom, right, horizontal, vertical}|Returns the box object with the margin sizes|
| **getOuterBounds** | **element** (DOM element)|Object {x, y, width, height}|Returns the outer bounds of **element** |
| **getOuterSize** | **element** (DOM element)|Object {width, height}|Returns the outer size of **element** |
| **getSize** | **element** (DOM element)|Object {width, height}|Returns the size of the element|
| **setSize** | **element** (DOM element) **value** (Object {width, height})|none|Sets the border-box size of **element** to **value** |
| **getViewPortSize** |none|Object {width, height}|Returns the effective size of the client viewport|
| *Element Content Manipulation* |||||
| **getOuterHtml** | **element** (DOM element)|String|Returns the outer HTML text of **element** (element's innerHTML and the element's own rendered HTML)|
| **repaintChildren** | **parentControl** (Object - Telerik control client object)|none|Repaints all children elements of **parentControl** 's container element|
| *Telerik controls client object access* |||||
| **findControl** | **parent** (HTML DOM element) **id** (String)|Object - client Telerik control object|Finds the client-side Telerik control object by provided server-side	ID of the control object in the collection of child elements of	the **parent** DOM element|
| *Element Search* |||||
| **findElement** | **parent** (HTML DOM element) **id** (String)|HTML DOM element|Finds the HTML DOM wrapper element of the Telerik control by	provided server-side ID in the collection of child elements of the **parent** DOM element|
| **getChildByClassName** | **element** (parent DOM element) **className** (CSS class name) **index** (start index in the collection of child elements)|HTML DOM element|Returns the first child element of **element** with the specified **className** , optionally starting from position **index** |
| **getChildrenByClassName** | **element** (parent DOM element) **className** (CSS class name)|Array|Returns an array of all child elements of **element** with the specified **className** |
| **getChildrenByTagName** | **element** (parent DOM element) **tagName** (String - tag name)|Array|Returns an array of all child elements of **element** with the specified tag name|
| **getElementByClassName** | **element** (DOM element) **className** (String) **tagName** (String)|DOM element|Returns the first child element of **element** with the specified **className** and optionally of type **tagName** |
| **getFirstChildByTagName** | **element** (DOM element) **tagName** (String) **index** (Integer)|DOM element|Returns the first child of **element** with the specified **tagName** , starting from **index** in the collection of child elements|
| **getPreviousHtmlNode** | **element** (DOM element)|DOM element|Gets the previous non-text HTML sibling of element|
| **getNextHtmlNode** | **element** (DOM element)|DOM element|Gets the next non-text HTML sibling of element|
| **getInvisibleParent** | **element** (DOM element)|DOM element|Returns the closest parent of **element** that has its display style set to "none", or null if no such parent is found|
| **isDescendant** | **ancestor** (DOM element) **descendant** (DOM element)|Boolean|Returns whether **descendant** is a recursive child node of **ancestor** |
| **isDescendantOrSelf** | **ancestor** (DOM element) **descendant** (DOM element)|Boolean|Returns whether **descendant** is the same as **ancestor** or a recursive child node of **ancestor** |

>note 
> The "content-box" is the size of the content area *inside* of the borders and padding of an element. It does not include the margins around the element. 


>note 
> The "border-box" is the size of the content area *outside* of the borders and padding of an element. It does not include the margins around the element. 



