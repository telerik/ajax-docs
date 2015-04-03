---
title: Understanding the Skin CSS File
page_title: Understanding the Skin CSS File | UI for ASP.NET AJAX Documentation
description: Understanding the Skin CSS File
slug: panelbar/appearance-and-styling/understanding-the-skin-css-file
tags: understanding,the,skin,css,file
published: True
position: 6
---

# Understanding the Skin CSS File



Styles for RadControls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the ".RadPanelBar_Default" style shown below loads the background image that is used for every item in a panel bar with the "Default" skin:

````ASPNET
	    .RadPanelBar_Default
	    { 
	        background: #5c5c5c url('PanelBar/background.gif') repeat-x bottom center;
	    }
````



See the [CSS Skin FileSelectors]({%slug panelbar/appearance-and-styling/css-skin-file-selectors%}) topic for more information on the specific CSS selectors used for __RadPanelBar__ skins.

Each style maps to a "class" attribute in an HTML tag. For example, consider the excerpt from the HTML rendering of a panel bar shown below:

````ASPNET
	    <div id="RadPanelBar1" class="RadPanelBar RadPanelBar_Default ">
	        <ul class="rpRootGroup">
	            <li class="rpItem rpFirst"><a href="#" class="rpLink rpExpandable"><span class="rpText">
	                One</span> </a>
	                <div class="rpSlide">
	                    <ul class="rpGroup rpLevel1 ">
	                        <li class="rpItem rpFirst"><a href="#" class="rpLink rpExpandable"><span class="rpText">
	                            i</span> </a>
	                            <div class="rpSlide">
	                                <ul class="rpGroup rpLevel2 ">
	                                    ...
	                                </ul>
	                            </div>
	                        </li>
	                        ...
	                    </ul>
	                </div>
	            </li>
	            ...
	        </ul>
	        <input id="RadPanelBar1_ClientState" name="RadPanelBar1_ClientState" type="hidden" /></div>
````



The control is rendered as a DIV element with the class "__RadPanelBar RadPanelBar_Default__". Each level of items in the hierarchy is rendered as another DIV element nested within the main DIV. The items at a level are rendered as an unordered list, where each list element is a item.

Here is a more detailed breakdown of the rendered markup:

## Root tag

The panel bar is rendered as a __DIV__ tag. Here is an excerpt from the example above:

````ASPNET
	    <div id="RadPanelBar1" class="RadPanelBar RadPanelBar_Default ">
	        <!-- content goes here -->
	    </div>
````



The __ID__ attribute of the DIV tag is set to the __ClientID__ property of the __RadPanelBar__ control. As you can see, two CSS classes have been applied: "__RadPanelBar__" and "__RadPanelBar_____Default__". The "__RadPanelBar__" class is always applied. It defines the basic presentation of the panel bar which is common for all skins. The "__RadPanelBar_Default__" class is applied because the __Skin__ of the panel bar is set to __"Default"__. If the panel bar had a right-to-left orientation, two additional classes would be applied: "__RadPanelBar_Default_rtl__" and "__rpRtl__".

If you set the __Style__ or __CssClass__ property of the __RadPanelBar__ control they would be applied to the DIV tag as well:

````ASPNET
	    <telerik:radpanelbar runat="server" id="RadPanelBar1" skin="Default" cssclass="MyPanelBar"
	        style="position: relative; z-index: 1000">
				
````



## Root level items

The root level items are rendered as an unordered list (UL) where each item is a list item (LI):

````ASPNET
	     
		<ul class="rpRootGroup">
	     <li class="rpItem rpFirst">
	       <!-- first item content -->
	     </li>
	     <li class="rpItem">
	       <!-- second item content -->
	     </li>
	     <li class="rpItem rpLast">
	       <!-- last item content -->
	     </li>
	    </ul> 
				
````



The UL element for the root items has the "__rpRootGroup__" class applied. The LI for each item has the "__rpItem__" class applied. In addition, the first item has the "__rpFirst__" class applied and the last element has the "__rpLast__" class applied.

If an item acts as a separator, it has the "__rpSeparator__" class applied to the LI element.

## Child groups

Groups of child items (which are rendered nested inside the content of the parent item), have a similar structure to the root level items:

````ASPNET
	     
		<div class="rpSlide">
	     <ul class="rpGroup rpLevel1 ">
	       <li class="rpItem rpFirst">
	         <!-- content of first child -->
	       </li>
	       <li class="rpItem">
	         <!-- content of middle child -->
	       </li>
	       <li class="rpItem rpLast">
	         <!-- content of last child -->
	       </li>
	     </ul>
	    </div>
	
				
````



The entire group is rendered as a DIV element with the "__rpSlide__" class applied. This is used for animated effects, and can be ignored for purposes of styling the panel bar.

Inside the DIV element is a UL element, similar to the one for the root group, but with the "__rpGroup__" class applied instead of "__rpRootGroup__". In addition, a class identifying the level is applied. In the example above, this is "__rpLevel1__". For level two items, it is "__rpLevel2__", and so on. If you set the __ChildGroupCssClass__ property of the parent item, this is the element that gets that class applied.

The items themselves are rendered in exactly the same way as root level items.

## Item content

Inside the LI element for each child, an item is rendered as an A element, along with a DIV element if the item has a template assigned, and another DIV if the item has child items:

````ASPNET
	     
	
	<li class="rpItem">
	 <a href="#" class="rpLink rpExpandable">
	   <img alt="" src="images/panel_First.gif" class="rpImage" />
	   <span class="rpText">i</span>
	 </a>
	 <div class="rpTemplate">
	   <!-- template content here -->
	 </div>
	 <div class="rpSlide">
	   <ul class="rpGroup rpLevel2 ">
	      <!-- next level child items here -->
	   </ul>
	 </div>
	</li> 
				
````



The A element for the item has the "__rpLink__" class applied. If the item has child items, it also gets the "__rpExpandable__" class applied (when it is unexpanded) or the "__rpExpanded__" class applied if it is expanded. If the item is selected, this element gets the "__rpSelected__" class applied. If the item is disabled, it gets the "__rpDisabled__" class applied. When clicked, it gets the "__rpClicked__" class applied. When it has focus, it gets the "__rpFocused__" class. This is also the element that gets any class assigned to the __CssClass__ property of the item.

Inside the A element for an item, the image and text of the item are rendered as IMG and SPAN elements. The image gets the "__rpImage__" class applied, and the SPAN gets the "__rpText__" class applied.

If the item has a template, this is rendered as a DIV element with the "__rpTemplate__" class assigned, which follows the A element for the item.

## Separators

Separators are rendered similarly to other elements, but without the A element, because they do not respond to user actions:

````ASPNET
	     
	<li class="rpItem rpSeparator">
	 <span class="rpText"><hr></span>
	</li> 
				
````



# See Also

 * [Skins]({%slug panelbar/appearance-and-styling/skins%})

 * [Setting  the CSS Class of Items]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%})
