---
title: HTML Output
page_title: HTML Output | RadLightBox for ASP.NET AJAX Documentation
description: HTML Output
slug: lightbox/appearance-and-styling/html-output
tags: html,output
published: True
position: 4
---

# HTML Output



Styles for Telerik controls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the **.RadLightBox_Default** style defines the default color and font styles for the entire control:

````CSS
.RadLightBox_Default
{
    color: #333;
    font: 12px "Segoe UI",Arial,Helvetica,sans-serif;
}
````


## HTML Output of RadLightBox

The typical HTML output of a **RadLightBox** control is the following (some HTML attributes have been removed for simplicity):

````HTML
<div id="RadLightBox1" class="RadLightBox RadLightBox_Default" style="position: fixed; left: 50%; top: 50%; z-index: 3501; width: 486px; height: 348px; margin-left: -261px; margin-top: -176px; visibility: visible;">
	<div class="rltbGlowEffect"> </div>
	<div class="rltbClose" style="">
		<button class="rltbActionButton rltbCloseButton" type="button">
			<span class="rltbIcon rltbCloseIcon"></span>
			<span class="rltbButtonText">Close</span>
		</button>
	</div>
	<div class="rltbWrapper">
		<div class="rltbItemBox">
			<input id="RadLightBox1_PrevButton" class="rltbActionButton rltbPrevButton" type="submit" style="display:none;" value="Prev" name="RadLightBox1$PrevButton" />
			<img class="rltbActiveImage" alt="LightBox Active Image" src="/RadControls-CSharp45/RadLightBox/images/1.png" style="display: inline; visibility: visible; width: 189px; height: 285px; padding-left: 139px; padding-top: 0px; padding-bottom: 0px;" />
			<input id="RadLightBox1_NextButton" class="rltbActionButton rltbNextButton" type="submit" style="display: none;" value="Next" name="RadLightBox1$NextButton" />
		</div>
		<div class="rltbDescriptionBox rltbDescBottom" style="">
			<h4 class="rltbTitle" style=""></h4>
			<div class="rltbDescription" style=""></div>
			<span class="rltbPager">Image 1 of 3</span>
			<div class="rltbToolbar">
				<button class="rltbActionButton rltbMaximizeButton" type="button" title="Maximize image" style="visibility: visible;">
					<span class="rltbIcon rltbMaximizeIcon"></span>
					<span class="rltbButtonText">Maximize image</span>
				</button>
				<button class="rltbActionButton rltbRestoreButton" type="button" title="Restore" style="display: none;">
					<span class="rltbIcon rltbRestoreIcon"></span>
					<span class="rltbButtonText">Restore image</span>
				</button>
			</div>
		</div>
	</div>
	<div id="RadLightBox1_LoadingPanel" class="RadAjax RadAjax_Default" style="display:none;">
		<div class="raDiv"> </div>
		<div class="raColor raTransp"> </div>
	</div>
	<input id="RadLightBox1_ClientState" type="hidden" name="RadLightBox1_ClientState" autocomplete="off" />
</div>
````

## CSS classes and their usage

* **div.RadLightBox.RadLightBox_SkinName** - this is the main control element, which holds the skin name. It has a couple of div elements for the close button, the image container and the loading panel. 

* **div.rltbGlowEffect** - this element doesn't contains any other elements and it is used to style the layout of RadLightBox control. 

* **div.rltbWrapper** - this is the wrapper element which holds the Item and the Description. 

* **div.rltbItemBox** - contains the image which is currently displayed in the browser.

* **input.rltbActionButton** - all action buttons have this class assigned.

* **input.rltbPrevButton** - the button which navigates to the previous image.

* **input.rltbPrevButton** - the button which navigates to the next image.

* **img.rltbActiveImage** - the currently active image.

* **div.rltbDescriptionBox** - contains all elements of the description area.

* **h4.rltbTitle** - element which holds the title of the description if there is any.

* **div.rltbDescription** - element which contains the description itself.

* **span.rltbPager** - element which contains the information about the current image index and the total number of images.

* **div.rltbToolbar** - a wrapper of the maximize button.

* **div.rltbMaximizeButton** - the button element which puts the image in fullscreen mode.

* **div.rltbRestoreButton** - the button element which closes the fullscreen mode.

# See Also

 * [Skins]({%slug lightbox/appearance-and-styling/skins%})
