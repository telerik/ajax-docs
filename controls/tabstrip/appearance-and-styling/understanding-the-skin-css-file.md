---
title: Understanding the Skin CSS File
page_title: Understanding the Skin CSS File | RadTabStrip for ASP.NET AJAX Documentation
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



See the [CSS Skin FileSelectors]({%slug tabstrip/appearance-and-styling/css-skin-file-selectors%}) topic for more information on the specific CSS selectors used for **RadTabStrip** skins.

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



The control is rendered as a DIV element with the class "**RadTabStrip RadTabStrip_Default RadTabStripTop_Default**". Each level of tabs in the hierarchy is rendered as another DIV element nested within the main DIV. The tabs at a level are rendered as an unordered list, where each list element is a tab.

Here is a more detailed breakdown of the rendered markup:

## Root tag

The tab strip is rendered as a **DIV** tag. Here is an excerpt from the example above:

````HTML
	
	<div id="RadTabStrip1" class="RadTabStrip RadTabStrip_Default RadTabStripTop_Default">
	 <!-- content goes here -->
	</div> 
	
````



The **ID** attribute of the DIV tag is set to the **ClientID** property of the **RadTabStrip** control. As you can see, three CSS classes have been applied: "**RadTabStrip**", "**RadTabStrip_Default**", and "**RadTabStripTop_Default**". The "**RadTabStrip**" class is always applied. It defines the basic presentation of the tab strip which is common for all skins. The "**RadTabStrip_Default**" class is applied because the **Skin** of the tab strip is set to **"Default"**. The "**RadTabStripTop_Default**" class is applied because the tab strip has a "HorizontalTop" orientation. If the tab strip had another orientation, this class would be replaced by "**RadTabStripBottom_Default**", "**RadTabStripLeft_Default**", or "**RadTabStripRight_Default**".

If you set the **Style** or **CssClass** property of the **RadTabStrip** control they would be applied to the root menu tag:

````HTML
	     
	 <telerik:RadTabStrip runat="server" ID="RadTabStrip1" Skin="Default" CssClass="MyTabStrip" Style="position:relative; z-index: 1000">
				
````



## Level groups

Each level of tabs in the tab strip is rendered as a DIV nested inside the main DIV of the tab strip, with an unordered list (UL) nested inside that:

````HTML
	     
	 <div class="rtsLevel rtsLevel1">  <ul class="rtsUL rtsScroll">    <!-- tabs go here -->  </ul></div>
				
````





The DIV has two CSS classes applied: "**rtsLevel**" and "**rtsLevel1**". The "**rtsLevel**" class is applied to every DIV element that encapsulates a level of tabs. The "**rtsLevel1**" class is applied because this DIV renders the root level tabs. The second level of tabs has the "**rtsLevel2**" class applied instead.

The UL element has the "**rtsUL**" class applied. If scrolling is enabled, it has the "**rtsScroll**" class applied as well.

## Tabs

**RadTab** renders as an **LI** (list item) tag, containing an **A**(link or anchor) tag. The text of the item is rendered inside a set of **SPAN** tags:

````HTML
	
	<li class="rtsLI">
	 <a class="rtsLink href="#">
	   <span class="rtsOut"><span class="rtsIn">
	     <span class="rtsTxt">Documents G-L</span>
	   </span></span>
	 </a>
	</li> 
	
````



The **LI** tag has its **class** attribute always set to "**rtsLI**". In addition, if the element represents the first tab at a level, it also gets the "**rtsFirst**" class applied, and if it represents the last tab at a level, it gets the "**rtsLast**" class applied.

The **A** tag has its class attribute always set to "**rtsLink**". It can include additional classes depending on its state.

The **SPAN** tags always have the attributes "**rtsOut**", **rtsIn**" and "**rtsTxt**", respectively.If the **Style** or **CssClass** properties of the **RadTab** class are set they are applied to the **A** tag. If the tab includes an image, a separate **IMG** tag appears next to the innermost **SPAN** tag, with the "**rtsImg**" class applied.

If the item is a separator (its **IsSeparator** property is **True**), the **LI** tag gets the "**rtsSeparator**" class applied. Because separators do not respond to user clicks, it has no **A** element, and the text is not included in a **SPAN** tag:

````HTML
	     
							<li class="rtsLI rtsSeparator ">-</li>
				
````



If a tab at a level has its **IsBreak** property set to **True**, an additional **LI** tag, with the "**rtsBreak**" class applied, is added to the rendered tab strip, following the break tab:

````HTML
	     
							<li class="rtsBreak"></li>
				
````



# See Also

 * [Skins]({%slug tabstrip/appearance-and-styling/skins%})

 * [Setting the CSS Class of Tabs]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%})
