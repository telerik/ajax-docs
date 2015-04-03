---
title: Understanding the Skin CSS File
page_title: Understanding the Skin CSS File | UI for ASP.NET AJAX Documentation
description: Understanding the Skin CSS File
slug: menu/appearance-and-styling/understanding-the-skin-css-file
tags: understanding,the,skin,css,file
published: True
position: 8
---

# Understanding the Skin CSS File



Styles for RadControls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the ".rmGroup" style will have a solid green border and white background:

````ASPNET
	    .RadMenu_Green .rmGroup { border: 1px solid green; background-color: #fff;}
````



See the [CSS Skin FileSelectors]({%slug menu/appearance-and-styling/css-skin-file-selectors%}) topic for more information on the specific CSS selectors used for __RadMenu__ skins. You can see custom styles applied in the screenshot below:

![RadMenu Custom Skin](images/menu_cssfinal.png)

Each style maps to a "class" attribute in an HTML tag. For example, consider the HTML rendering of the menu shown above:

````HTML
	   <div id="Div1" class="RadMenu RadMenu_Green ">
	     <ul class="rmHorizontal rmRootGroup">
	       <li class="rmItem rmFirst">
	         <a href="#" class="rmLink ">
	           <span class="rmText">File</span>
	         </a>
	         <div class="rmSlide">
	           <ul class="rmVertical rmGroup rmLevel1">
	             <li class="rmItem rmFirst">
	               <a href="#" class="rmLink ">
	                 <span class="rmText">New...</span>
	               </a>
	               <div class="rmSlide">
	                 <ul class="rmVertical rmGroup rmLevel2">
	                   <li class="rmItem rmFirst">
	                     <a href="#" class="rmLink ">
	                        <span class="rmText">File</span>
	                     </a>
	                   </li>
	                   <li class="rmItem rmLast">
	                     <a href="#" class="rmLink ">
	                       <span class="rmText">Folder</span>
	                     </a>
	                   </li>
	                 </ul>
	               </div>
	             </li>
	             <li class="rmItem">
	               <a href="#" class="rmLink ">
	                 <span class="rmText">Open</span>
	               </a>
	             </li>
	             <li class="rmItem rmSeparator ">
	               <span class="rmText"></span>
	             </li>
	             <li class="rmItem rmLast">
	               <a href="#" class="rmLink ">
	                 <span class="rmText">Exit</span>
	               </a>
	             </li>
	           </ul>
	         </div>
	       </li>
	       <li class="rmItem">
	         <a href="#" class="rmLink ">
	           <span class="rmText">Edit</span>
	         </a>
	       </li>
	       <li class="rmItem rmLast">
	         <a href="#" class="rmLink rmDisabled ">
	           <span class="rmText">Help</span>
	         </a>
	       </li>
	     </ul>
	     <input id="RadMenu1_ClientState" name="RadMenu1_ClientState" type="hidden" />
	   </div> 
````



The control is rendered as a DIV element with the class "__RadMenu RadMenu_Green__". The item hierarchy is presented as nested unordered lists with links inside, all containing nested class attributes.

Here is a more detailed breakdown of the rendered markup:

## Root tag

The menu is rendered as a __DIV__ tag. Here is an excerpt from the example above:

````HTML
	    <div id="RadMenu1" class="RadMenu RadMenu_Green ">
	        <!-- menu content goes here -->
	    </div>
````



The __ID__ attribute of the DIV tag is set to the __ClientID__ property of the __RadMenu__ control. As you can see two CSS classes have been applied: "__RadMenu__" and "__RadMenu_____Green__". The "__RadMenu__" class is always applied. It defines the basic presentation of the menu which is common for all skins. The "__RadMenu_Green__" class is applied because the __Skin__ of the menu is set to __"Green"__. If the the menu does not use a skin (the __Skin__ property is set to __""__) only the "__RadMenu__" CSS class would be rendered.

If you set the __Style__ or __CssClass__ property of the RadMenu control they would be applied to the root menu tag:

````HTML
	    <telerik:RadMenu runat="server" ID="RadMenu1" Skin="Green" CssClass="MyMenu" Style="position: relative; z-index: 1000">
````



## Root item group

The root item group renders as a __UL__ (unordered list)tag:

````HTML
	        <ul class="rmHorizontal rmRootGroup">
	            <!-- root elements and their children go here -->
	        </ul>
````





It has two CSS classes applied: "__rmHorizontal__" and "__rmRootGroup__". The "__rmHorizontal__" class is applied because the __Flow__ of the __RadMenu__ is horizontal by default. If it were vertical that CSS class would be "__rmVertical__". The "__rmRootGroup__" CSS class is always rendered.

## Menu items

RadMenuItem renders as a __LI__ (list item) tag, containing an __A__(link or anchor) tag. The text of the item is rendered inside a __SPAN__ tag:

````HTML
	        <li class="rmItem">
	            <a href="#" class="rmLink ">
	                <span class="rmText">Edit</span> 
	            </a>
	            <!-- child items go here -->
	        </li>
````



The __LI__ tag has its __class__ attribute always set to "__rmItem__". The __A__ tag has its class attribute always set to "__rmLink__". The __SPAN__ tag has its class attribute always set to "__rmText__". If the __Style__ or __CssClass__ properties of the __RadMenuItem__ class are set they are applied to the __A__ tag.

If the item is the first child of its parent, the __LI__ tag also has the "__rmFirst__" CSS class applied:

````HTML
	        <li class="rmItem rmFirst">
	            <a href="#" class="rmLink ">
	                <span class="rmText">File</span>
	            </a>
	            <!-- child items go here -->
	        </li>
````



If the item is the last child of its parent, the __LI__ tag has the "__rmLast__" CSS class applied:

````HTML
	        <li class="rmItem rmLast">
	            <a href="#" class="rmLink rmDisabled ">
	                <span class="rmText">Help</span> 
	            </a>
	        </li>
````



Note that in this example, the item is disabled, so the __A__ tag has the "__rmDisabled__" class applied as well as the "__rmLink__" class.

>note If an item is the only child of its parent it has both the " __rmFirst__ " and " __rmLast__ " CSS classes.
>


If the item is a separator (its __IsSeparator__ property is __True__), the __LI__tag gets the "__rmSeparator__" class applied. Because separators do not respond to user clicks, it has no __A__element:

````HTML
	        <li class="rmItem rmSeparator ">
	            <span class="rmText"></span>
	        </li>
````



## Item States

The __Last Menu Item__ example showed a disabled item with the "__rmDisabled__" class applied to the __A__ tag. Other item states also result in additional CSS classes applied to the __A__ tag:

* __Focused items__: An item is focused when clicked or when it is selected with the keyboard (by using the TAB key or a shortcut - access key). When an item is focused one additional CSS class - "__rmFocused__" is applied to the __A__ tag.

* __Expanded items__: An item is expanded when the user hovers it with the mouse. When an item is expanded one additional CSS class - "__rmExpanded__" is applied to the __A__ tag.

* __Clicked items__: An item is clicked when the user clicks it with the mouse and keeps the mouse button pressed. When an item is in clicked state one additional CSS class - "__rmClicked__" is applied to the __A__ tag. When the user releases the mouse button, the "__rmClicked__" CSS class is removed. This CSS class is useful to visually show that a menu item is clicked.

## Child item groups

If the item has children they are rendered in an __UL__ tag within the __LI__ tag of their parent item:

````HTML
	        <div class="rmSlide">
	            <ul class="rmVertical rmGroup rmLevel1">
	                <!-- child items go here -->
	            </ul>
	        </div>
````



>note The DIV tag whose class attribute is set to "rmSlide" is used by the animation effects. It is not related with the final appearance and can be ignored.
>


The child item group has three CSS classes applied: "__rmVertical__", "__rmGroup__" and "__rmLevel1__". The "__rmVertical__" class is applied because the default item flow for child items is vertical. If it were horizontal (GroupSettings-Flow="Horizontal") that class would have been "__rmHorizontal__". The "__grGroup__" class is always applied for child item groups. The "__rmLevel1__" class is applied for all level 1 item groups. Root items are considered as level 0, their children are level 1, their children's children are level 2 and so on.

## Graphic representation of CSS Classes in the HTML output

The following diagram shows a symbolic view of the CSS classes in the rendered menu:

![RadMenu HTML Structure](images/menu_htmlstructure.png)

# See Also

 * [Appearance Skins]({%slug menu/appearance-and-styling/appearance-skins%})

 * [Setting  the CSS Class of Items]({%slug menu/appearance-and-styling/setting--the-css-class-of-items%})
