---
title: Understanding the Skin CSS File
page_title: Understanding the Skin CSS File | UI for ASP.NET AJAX Documentation
description: Understanding the Skin CSS File
slug: tabstrip/appearance-and-styling/understanding-the-skin-css-file
tags: understanding,the,skin,css,file
published: True
position: 6
---

# Understanding the Skin CSS File



Styles for RadControls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the ".rtsImg" style shown below removes the border of tab images, aligns them vertically at the top, and sets the image width:

````ASPNET
	 
	.RadTabStrip_Default .rtsImg
	{
	border:0;
	vertical-align:top;
	width: 16px;
	} 
	 
````



See the [CSS Skin FileSelectors]({%slug tabstrip/appearance-and-styling/css-skin-file-selectors%}) topic for more information on the specific CSS selectors used for __RadTabStrip__ skins.

Each style maps to a "class" attribute in an HTML tag. For example, consider the excerpt from the HTML rendering of a tab strip shown below:

````HTML
	 
	 <div id="RadTabStrip1" class="RadTabStrip RadTabStrip_Default RadTabStripTop_Default"
	  style="overflow:hidden;">
	<div class="rtsLevel rtsLevel1">
	  <ul class="rtsUL rtsScroll">
	   <li class="rtsLI rtsFirst">
	      <a class="rtsLink" href="#">
	        <span class="rtsOut"><span class="rtsIn">
	            <span class="rtsTxt">Documents A-F</span>
	        </span></span>
	      </a>
	   </li>
	   <li class="rtsLI">
	      <a class="rtsLink rtsBefore" href="#">
	        <span class="rtsOut"><span class="rtsIn">
	            <span class="rtsTxt">Documents G-L</span>
	        </span></span>
	      </a>
	    </li>
	    <li class="rtsLI">
	      <a class="rtsLink rtsSelected" href="#">
	        <span class="rtsOut"><span class="rtsIn">
	            <span class="rtsTxt">Documents M-R</span>
	         </span></span>
	     </a>
	   </li>
	   <li class="rtsLI rtsLast">
	     <a class="rtsLink rtsAfter" href="#">
	       <span class="rtsOut"><span class="rtsIn">
	           <span class="rtsTxt">Documents S-Z</span>
	        </span></span>
	     </a>
	   </li>
	  </ul>
	 </div>
	 <div class="rtsLevel rtsLevel2">
	   <ul class="rtsUL" style="display:none;">
	     <li class="rtsLI rtsFirst">
	       <a class="rtsLink" href="#">
	         <span class="rtsOut"><span class="rtsIn">
	             <span class="rtsTxt">A</span>
	         </span></span>
	      </a>
	    </li>
	    ...
	   <li class="rtsBreak"></li>
	   <li class="rtsLI rtsSeparator ">-</li>
	   <li class="rtsLI">
	     <a class="rtsLink" href="#">
	       <span class="rtsOut"><span class="rtsIn">
	         <span class="rtsTxt">D</span>
	       </span></span>
	     </a>
	   </li>
	   ...
	  </ul>
	 </div>
	 <input id="RadTabStrip1_ClientState" name="RadTabStrip1_ClientState" type="hidden" />
	</div> 
	 
````



The control is rendered as a DIV element with the class "__RadTabStrip RadTabStrip_Default RadTabStripTop_Default__". Each level of tabs in the hierarchy is rendered as another DIV element nested within the main DIV. The tabs at a level are rendered as an unordered list, where each list element is a tab.

Here is a more detailed breakdown of the rendered markup:

## Root tag

The tab strip is rendered as a __DIV__ tag. Here is an excerpt from the example above:

````HTML
	
	<div id="RadTabStrip1" class="RadTabStrip RadTabStrip_Default RadTabStripTop_Default">
	 <!-- content goes here -->
	</div> 
	
````



The __ID__ attribute of the DIV tag is set to the __ClientID__ property of the __RadTabStrip__ control. As you can see, three CSS classes have been applied: "__RadTabStrip__", "__RadTabStrip_____Default__", and "__RadTabStripTop_Default__". The "__RadTabStrip__" class is always applied. It defines the basic presentation of the tab strip which is common for all skins. The "__RadTabStrip_Default__" class is applied because the __Skin__ of the tab strip is set to __"Default"__. The "__RadTabStripTop_Default__" class is applied because the tab strip has a "HorizontalTop" orientation. If the tab strip had another orientation, this class would be replaced by "__RadTabStripBottom_Default__", "__RadTabStripLeft_Default__", or "__RadTabStripRight_Default__".

If you set the __Style__ or __CssClass__ property of the __RadTabStrip__ control they would be applied to the root menu tag:

````HTML
	     
	 <telerik:RadTabStrip runat="server" ID="RadTabStrip1" Skin="Default" CssClass="MyTabStrip" Style="position:relative; z-index: 1000">
				
````



## Level groups

Each level of tabs in the tab strip is rendered as a DIV nested inside the main DIV of the tab strip, with an unordered list (UL) nested inside that:

````HTML
	     
	 <div class="rtsLevel rtsLevel1">  <ul class="rtsUL rtsScroll">    <!-- tabs go here -->  </ul></div>
				
````





The DIV has two CSS classes applied: "__rtsLevel__" and "__rtsLevel1__". The "__rtsLevel__" class is applied to every DIV element that encapsulates a level of tabs. The "__rtsLevel1__" class is applied because this DIV renders the root level tabs. The second level of tabs has the "__rtsLevel2__" class applied instead.

The UL element has the "__rtsUL__" class applied. If scrolling is enabled, it has the "__rtsScroll__" class applied as well.

## Tabs

__RadTab__ renders as an __LI__ (list item) tag, containing an __A__(link or anchor) tag. The text of the item is rendered inside a set of __SPAN__ tags:

````HTML
	
	<li class="rtsLI">
	 <a class="rtsLink href="#">
	   <span class="rtsOut"><span class="rtsIn">
	     <span class="rtsTxt">Documents G-L</span>
	   </span></span>
	 </a>
	</li> 
	
````



The __LI__ tag has its __class__ attribute always set to "__rtsLI__". In addition, if the element represents the first tab at a level, it also gets the "__rtsFirst__" class applied, and if it represents the last tab at a level, it gets the "__rtsLast__" class applied.

The __A__ tag has its class attribute always set to "__rtsLink__". It can include additional classes depending on its state.

The __SPAN__ tags always have the attributes "__rtsOut__", __rtsIn__" and "__rtsTxt__", respectively.If the __Style__ or __CssClass__ properties of the __RadTab__ class are set they are applied to the __A__ tag. If the tab includes an image, a separate __IMG__ tag appears next to the innermost __SPAN__ tag, with the "__rtsImg__" class applied.

If the item is a separator (its __IsSeparator__ property is __True__), the __LI__ tag gets the "__rtsSeparator__" class applied. Because separators do not respond to user clicks, it has no __A__ element, and the text is not included in a __SPAN__ tag:

````HTML
	     
							<li class="rtsLI rtsSeparator ">-</li>
				
````



If a tab at a level has its __IsBreak__ property set to __True__, an additional __LI__ tag, with the "__rtsBreak__" class applied, is added to the rendered tab strip, following the break tab:

````HTML
	     
							<li class="rtsBreak"></li>
				
````



# See Also

 * [Skins]({%slug tabstrip/appearance-and-styling/skins%})

 * [Setting the CSS Class of Tabs]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%})
