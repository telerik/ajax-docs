---
title: Telerik.Web.CommonScripts
page_title: Client-side API Reference
description: Client-side API Reference
static: true
slug: Telerik.Web.CommonScripts
---

# Telerik.Web.CommonScripts  

## Inheritance Hierarchy

* *[Telerik.Web.CommonScripts]({%slug Telerik.Web.CommonScripts%})*

## Methods

### isIE

Returns Boolean value that indicates whether the page is opened under IE.

#### Parameters

#### Returns

`Boolean` 

### isOpera

Returns Boolean value that indicates whether the page is opened under Opera.

#### Parameters

#### Returns

`Boolean` 

### isTouchDevice

Returns Boolean value that indicates whether the page is opened under a Mobile Device.

#### Parameters

#### Returns

`Boolean` 

### isSafari

Returns Boolean value that indicates whether the page is opened under Safari.

#### Parameters

#### Returns

`Boolean`

### static addCssClasses

Adds multiple css classes to a DomElement

#### Parameters

##### element `Element`

The element to modify

##### classNames `Array`

The class names to add

#### Returns

`None` 

### static addExternalHandler

Adds the specified event handler to the element's eventName. Can be used when attaching events to HTML elements in IFRAMEs where ASP.NET AJAX's $addHandler and $removeHandler do not work

#### Parameters

##### element `Element`

The HTML DOM element to attach an event handler to

##### eventName `String`

The name of the event to attach an event handler to

##### handler `Function`

The event handler function

#### Returns

`None` 

### static addHandler

Provides a method to add a DOM event handler to the DOM element that exposes the event. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $addHandler, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.

#### Parameters

##### element `Element`

The HTML DOM element to attach an event handler to

##### eventName `String`

The name of the event to attach an event handler to

##### handler `Function`

The event handler function

##### autoRemove `Boolean`

A boolean value that determines whether the handler should be removed automatically when the element is disposed.

#### Returns

`None` 

### static addHandlers

Adds a list of DOM event handlers to the DOM element that exposes the events. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $addHandlers, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.

#### Parameters

##### element `Element`

The DOM element that exposes the events.

##### events `Object`

A dictionary of event handlers.

##### handlerOwner `Object`

The object instance that is the context for the delegates that should be created from the handlers.

##### autoRemove `Boolean`

A boolean value that determines whether the handler should be removed automatically when the element is disposed.

#### Returns

`None` 

### static cancelRawEvent

Cancels the specified event from propagating

#### Parameters

##### e `Sys.UI.DomEvent`

The event object of the event to cancel

#### Returns

`Boolean` Always returns false

### static clearHandlers

Removes all DOM event handlers from a DOM element that were added through the Sys.UI.DomEvent addHandler or the Sys.UI.DomEvent addHandlers methods. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $clearHandlers, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.

#### Parameters

##### element `Element`

The element that exposes the events.

#### Returns

`None` 

### static cloneControl

Clones the specified sourceControl RadControl client object with the optional specified type and saves it as an attribute to the HTML element representing the container DOM element of the RadControl

#### Parameters

##### sourceControl `Telerik.Web.UI.RadWebControl`

Source RadControl object to clone

##### optionalType `Function`

Optional. The type of the cloned control

##### element `Element`

The HTML DOM element of the cloned control

#### Returns

`Telerik.Web.UI.RadWebControl` The cloned RadWebControl object

### static cloneJsObject

Clones the source object to the target object and returns the cloned target object

#### Parameters

##### source `Object`

The source JS object

##### target `Object`

Optional. The target JS object

#### Returns

`Object` The cloned JS object

### static containsPoint

Tests whether a point (x,y) is contained within a rectangle

#### Parameters

##### rect `Object`

The rectangle

##### x `Number`

The x coordinate of the point

##### y `Number`

The y coordinate of the point

#### Returns

`None` 

### static elementOverflowsBottom

Checks if the specified HTML element overflows the screen with the specified screen size from bottom

#### Parameters

##### screenSize `Object`

An Object 

##### element `Element`

HTML DOM element

##### cachedLocation `Sys.UI.Point`

Optional. If a Point object is specified for this parameter

#### Returns

`Boolean` 

### static elementOverflowsLeft

Checks if the specified HTML element overflows the screen with the specified screen size from left

#### Parameters

##### element `Element`

HTML DOM element

##### cachedLocation `Sys.UI.Point`

Optional. If a Point object is specified for this parameter

#### Returns

`Boolean` 

### static elementOverflowsRight

Checks if the specified HTML element overflows the screen with the specified screen size from right

#### Parameters

##### screenSize `Object`

An Object 

##### element `Element`

HTML DOM element

##### cachedLocation `Sys.UI.Point`

Optional. If a Point object is specified for this parameter

#### Returns

`Boolean` 

### static elementOverflowsTop

Checks if the specified HTML element overflows the screen with the specified screen size from top

#### Parameters

##### element `Element`

HTML DOM element

##### cachedLocation `Sys.UI.Point`

Optional. If a Point object is specified for this parameter

#### Returns

`Boolean` 

### static findControl

Finds the client-side RadControl object by provided server-side ID of the RadControl object in the collection of child elements of the parent  DOM element

#### Parameters

##### parent `Element`

The HTML DOM element that is a parent to the container element of the control to find

##### id `String`

The ID of the control to find

#### Returns

`Sys.UI.Control` 

### static findElement

Finds the HTML DOM wrapper element of the RadControl by provided server-side ID in the collection of child elements of the parent DOM element

#### Parameters

##### parent `Element`

The HTML DOM element that is a parent to the container element of the control to find

##### id `String`

The ID of the control to find

#### Returns

`Element` 

### static fixScrollableParentBehavior_OldIE

Finds the closest scrollable parent element and changes its position to relative if static

#### Parameters

##### element `Element`

HTML DOM element

#### Returns

`None` 

### static getBorderBox

Gets the entire border box sizes.

#### Parameters

##### element `Element`

 DOM element 

#### Returns

`Object`  Element

### static getBorderWidth

Gets the border thickness of an element on a specific boxSide.

#### Parameters

##### element `Element`

 DOM element 

##### boxSide `Telerik.Web.BoxSide`

 Side of the element 

#### Returns

`Number`  Border thickness on the element

### static getBounds

Gets the coordinates, width and height of an element.

#### Parameters

##### element `Element`

HTML DOM element whose bounds to retrieve

#### Returns

`Sys.UI.Bounds`  A Bounds object with four fields

### static getChildByClassName

Returns the first child element of element with the specified className, optionally starting from position index

#### Parameters

##### element `Element`

HTML DOM element whose children to search in

##### className `String`

The class name of the child element to search for

##### index `Number`

The index of the child element in the parent

#### Returns

`Element` 

### static getChildrenByClassName

Returns an array of all child elements of element with the specified className

#### Parameters

##### element `Element`

HTML DOM element whose children to search in

##### tagName `String`

The tag name of the child elements to search for

#### Returns

`Array` 

### static getChildrenByTagName

Returns an array of all child elements of element with the specified tag name

#### Parameters

##### element `Element`

HTML DOM element whose children to search in

##### tagName `String`

The tag name of the child elements to search for

#### Returns

`Array` 

### static getClientBounds

Gets the width and height of the browser client window (excluding scrollbars)

#### Parameters

#### Returns

`Sys.UI.Bounds`  Browser

### static getComputedStyle

Gets the computed value of the attribute style of the specified element. If there's no computed value, optionally returns defaultValue

#### Parameters

##### element `Element`

HTML DOM element whose style to retrieve

##### attribute `String`

The style attribute whose value to retrieve

##### defaultValue `String`

Optional. The default value to return if there is no value set

#### Returns

`String` The value of the specified style attribute

### static getContentSize

Gets the "content-box" size of an element.

#### Parameters

##### element `Element`

 DOM element 

#### Returns

`Object`  Size of the element 

### static getCurrentStyle

Gets the current value of the attribute style of the specified element. If the current value is not defined, optionally returns defaultValue

#### Parameters

##### element `Element`

HTML DOM element whose style to retrieve

##### attribute `String`

The style attribute whose value to retrieve

##### defaultValue `String`

Optional. The default value to return if there is no value set

#### Returns

`String` The value of the specified style attribute

### static getDocumentRelativeCursorPosition

Gets the cursor position as Object {left, top} of the mouse when event e is fired, relative to the Document

#### Parameters

##### e `Sys.UI.DomEvent`

The event object of the current DOM event

#### Returns

`Object` Object 

### static getElementByClassName

Returns the first child element of element widh the specified className  and optionally of type tagName

#### Parameters

##### element `Element`

The parent HTML DOM element

##### className `String`

The class name of the element to retrieve

##### tagName `String`

Optional. The tag name of the element to retrieve

#### Returns

`Element` 

### static getFirstChildByTagName

Returns the first child of element with the specified tagName, starting from index in the collection of child elements

#### Parameters

##### element `Element`

HTML DOM element whose children to search in

##### tagName `String`

The tag name of the child element to search for

##### index `Number`

The index of the child element in the parent

#### Returns

`Element` 

### static getInvisibleParent

Returns the closest parent of element that has its display style set to "none", or null if no such parent is found

#### Parameters

##### element `Element`

HTML DOM element

#### Returns

`Element` The first invisible parent HTML element

### static getLocation

Returns the absolute location of element in the document

#### Parameters

##### element `Element`

The HTML DOM element whose position to retrieve

#### Returns

`Sys.UI.Point` A Point object contaning the location of the specified element

### static getMargin

Gets the margin thickness of an element on a specific boxSide.

#### Parameters

##### element `Element`

 DOM element 

##### boxSide `Telerik.Web.BoxSide`

 Side of the element 

#### Returns

`Number`  Margin thickness on the element

### static getMarginBox

Gets the entire margin box sizes.

#### Parameters

##### element `Element`

 DOM element 

#### Returns

`Object`  Element

### static getNextHtmlNode

Gets the next non-text HTML sibling of element

#### Parameters

##### element `Element`

HTML DOM element whose previous sibling to retrieve

#### Returns

`Element` 

### static getOuterBounds

Returns the outer bounds of an HTML DOM element

#### Parameters

##### element `Element`

HTML DOM element

#### Returns

`Sys.UI.Bounds` An object containing the outer bounds of element

### static getOuterHtml

Returns the outer HTML text of an element (element's innerHTML and its own rendered HTML)

#### Parameters

##### element `Element`

The HTML DOM element whose outer HTML text to retrieve

#### Returns

`String` 

### static getOuterSize

Returns the outer size of an HTML DOM element

#### Parameters

##### element `Element`

HTML DOM element

#### Returns

`Object` An object containing width and height of element

### static getPadding

Gets the padding thickness of an element on a specific boxSide.

#### Parameters

##### element `Element`

 DOM element 

##### boxSide `Telerik.Web.BoxSide`

 Side of the element 

#### Returns

`Number`  Padding on the element

### static getPaddingBox

Gets the entire padding box sizes.

#### Parameters

##### element `Element`

 DOM element 

#### Returns

`Object`  Element

### static getPreviousHtmlNode

Gets the previous non-text HTML sibling of element

#### Parameters

##### element `Element`

HTML DOM element whose previous sibling to retrieve

#### Returns

`Element` 

### static getScrollOffset

Returns the scroll ofset of element from its parent(s). If recursive, return the absolute scroll offset

#### Parameters

##### element `Element`

The HTML DOM element whose scroll offset to find

##### recursive `Boolean`

Indicates whether to retrieve the scroll ofset of the element recursively. If true

#### Returns

`Sys.UI.Point` 

### static getScrollableParent

Returns the closest scrollable parent element or null if no such is found.

#### Parameters

##### element `Element`

HTML DOM element

#### Returns

`Element` 

### static getScrollableParents

Returns an array of all scrollable parent elements or an empty array if Ð½Ð¾ such are found.

#### Parameters

##### element `Element`

HTML DOM element

#### Returns

`Array` 

### static getSize

Gets the "border-box" size of an element.

#### Parameters

##### element `Element`

 DOM element 

#### Returns

`Object`  Size of the element 

### static getViewPortSize

Returns the effective size of the client viewport as Object {width, height}

#### Parameters

#### Returns

`Object` An Object 

### static getVisible

Returns true if element is visible, otherwise returns false

#### Parameters

##### element `Element`

HTML DOM element whose state to retrieve

#### Returns

`Boolean` 

### static isBorderVisible

Gets whether the current border style for an element on a specific boxSide is not "none".

#### Parameters

##### element `Element`

 DOM element 

##### boxSide `Telerik.Web.BoxSide`

 Side of the element 

#### Returns

`Boolean`  Whether the current border style for an element on a specific boxSide is not 

### static isDescendant

Whether the specified element is a descendant of the ancestor

#### Parameters

##### ancestor `Element`

Ancestor node

##### descendant `Element`

Possible descendant node

#### Returns

`None` 

### static isDescendantOrSelf

Whether the specified element is a descendant of the ancestor or the same as the ancestor

#### Parameters

##### ancestor `Element`

Ancestor node

##### descendant `Element`

Possible descendant node

#### Returns

`None` 

### static isMouseOverElement

Returns whether mouse is over element when event fires. See also isMouseOverElementEx

#### Parameters

##### element `Element`

HTML DOM element

##### e `Sys.UI.DomEvent`

The event object of the current DOM event

#### Returns

`Boolean` 

### static isMouseOverElementEx

Returns whether mouse is over element when event fires. This method is more sophisticated and it is recommend that you use it instead of isMouseOverElement, which exists for historical reasons.

#### Parameters

##### element `Element`

HTML DOM element

##### e `Sys.UI.DomEvent`

The event object of the current DOM event

#### Returns

`Boolean` 

### static isRightToLeft

Returns true if element is in RTL direction, otherwise returns false

#### Parameters

##### element `Element`

HTML DOM element

#### Returns

`Boolean` 

### static mergeElementAttributes

Merges the atributes of source to target. If under IE, the optional preserve specifies whether to preserve the identity of target  or to allow modification on merging

#### Parameters

##### oSource `Element`

Source HTML element

##### oTarget `Element`

Target HTML element

##### bPreserve `Boolean`

When in IE

#### Returns

`None` 

### static parseBorderWidth

Parses a border-width string into a pixel size

#### Parameters

##### borderWidth `String`

 Type of border 

#### Returns

`Number`  Number of pixels in the border

### static parsePadding

Parses a padding string into a pixel size

#### Parameters

##### padding `String`

 Padding to parse 

#### Returns

`Number`  Number of pixels in the padding 

### static parseUnit

Parses a unit string into a unit object

#### Parameters

##### value `String`

 Value to parse 

#### Returns

`Object`  Parsed unit 

### static registerSkins

Registers all link style tags in element to the page. If no element is provided, all the link tags on page are registered

#### Parameters

##### element `Element`

HTML DOM element contaning the links

#### Returns

`None` 

### static removeCssClasses

Removes multiple css classes to a DomElement

#### Parameters

##### element `Element`

The element to modify

##### classNames `Array`

The class names to remove

#### Returns

`None` 

### static removeExternalHandler

Removes the event handler from an element's event. Can be used when attaching events to HTML elements in IFRAMEs where ASP.NET AJAX's $addHandler and $removeHandler do not work

#### Parameters

##### element `Element`

The HTML DOM element to attach an event handler to

##### eventName `String`

The name of the event to attach an event handler to

##### handler `Function`

The event handler function

#### Returns

`None` 

### static removeHandler

Removes a DOM event handler from the DOM element that exposes the event. This member is static and can be invoked without creating an instance of the class. This is basically a copy of $removeHandler, but handles correctly IE proprietary events, such as "onpropertychange", in IE9.

#### Parameters

##### element `Element`

The element that exposes the event.

##### eventName `String`

The name of the event. 

##### handler `Function`

The event handler to remove.

#### Returns

`None` 

### static repaintChildren

Repaints all children elements of an element or a control's container

#### Parameters

##### parent `Object`

#### Returns

`None` 

### static scrollIntoView

Scrolls the parent scrollable container to element's position. An alternative flicker-free implementation to HTMLDomElement.scrollIntoView()

#### Parameters

##### element `Element`

HTML DOM element to scroll into view

#### Returns

`None` 

### static setBounds

Sets the "border-box" bounds of an element

#### Parameters

##### element `Element`

 DOM element 

##### bounds `Object`

 Bounds of the element 

#### Returns

`None` 

### static setContentSize

Sets the "content-box" size of an element.

#### Parameters

##### element `Element`

 DOM element 

##### size `Object`

 Size of the element 

#### Returns

`None` 

### static setLocation

Sets the location (left, top) of element to point (x, y)

#### Parameters

##### element `Element`

The HTML DOM element whose location to set

##### point `Sys.UI.Point`

The Point object contaning the position values

#### Returns

`None` 

### static setSize

Sets the "border-box" size of an element.

#### Parameters

##### element `Element`

DOM element

##### size `Object`

Size of the element 

#### Returns

`None` 

### static setVisible

Set the visibility of an element

#### Parameters

##### element `Element`

The HTML DOM element whose visibility to set

##### value `Boolean`

A boolean value indicating whether the element should be hidden or made visible

#### Returns

`None` 

### static transition

Perform a custom animation of a set of CSS properties. The animation will be performed using CSS3 Transitions if browser supports them.

#### Parameters

##### element `Element`

The DOM element or jQuery object that will be animated.

##### properties `Object`

Object of CSS properties and values that the animation will move toward.

##### duration `Number`

String or number determining how long the animation will run

##### easing `String`

String indicating which easing function to use for the transition.

##### complete `Function`

Function to call once the animation is complete.

#### Returns

`None` 

### static useAttachEvent

A helper method that checks whether a DOM event handler should be added through addEventListener or through attachEvent, so that IE proprietary events, such as "onpropertychange", are handled correctly in IE9.

#### Parameters

##### element `Element`

The element that exposes the event.

#### Returns

`None` 

### static useDetachEvent

A helper method that checks whether a DOM event handler should be removed through removeEventListener or through detachEvent, so that IE proprietary events, such as "onpropertychange", are handled correctly in IE9.

#### Parameters

##### element `Element`

The element that exposes the event.

#### Returns

`None` 


