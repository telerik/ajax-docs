---
title: CSS for Responsive Layout
page_title: CSS for Responsive Layout | UI for ASP.NET AJAX Documentation
description: CSS for Responsive Layout
slug: tilelist/appearance-and-styling/css-for-responsive-layout
tags: css,for,responsive,layout
published: True
position: 2
---

# CSS for Responsive Layout



This article shows the code that is used to achieve the [responsive layout]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%})	of the __RadTileList__ control. Comments in the CSS code explain what each rule does so that you can use them as a base	if you need to apply further modifications.

## Media Queries Trigger the TileList Layout Change

[CSS media queries](http://www.w3.org/TR/css3-mediaqueries/)are used to detect the viewport size (and its change), so that appropriate CSS rules are applied to the __RadTileList__,its HTML elements and the __Tiles__ themselves. Upon a viewport change, the __RadTileList__ is notified through a JavaScript eventso it can recalculate the available space and, if needed, reorder the tiles and change its HTML elements.

Out of the box, two resolutions are used in the media queries to trigger the two additional layouts—768px and 480px. You can see examples of the layout with each of them in the[responsive layout article]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%}).

## CSS Changes the Tiles' Layout

When the HTML of the __RadTileList__ has changed so that groups of tiles stack vertically instead of flow to the right, the CSS rules from __Example 1__come in effect to modify the tiles.

The [Viewport width units](http://dev.w3.org/csswg/css-values/#vw-unit) are used in the two special layouts to modify the tiles.The `vw` unit is relative to the viewport's width. The viewport's width is equal to 100 `vw` units.You will see them later in the CSS used to match the tiles' size to the viewport and provide zooming.

In __Example 1__, you will find rules with selectors already weighed down so that they can override the built-in ones, should you want to make a change.Comments in the code explain what each rule does.

All cascades for the responsive layout go through the `rtlistResponsive` class.

__Example 1: CSS rules that affect the RadTileList and its tiles.__

````JavaScript
			/* tablet-oriented layout:  groups stack vertically, no tile columns are used; there are maximum four square tiles per row */
			@media only screen and (max-width: 768px)
			{
			
				/* remove float, place tiles below each other instead of horizontally */
				div.RadTileList.rtlistResponsive
				{
					height: auto !important;
					width: auto !important;
					overflow-x: hidden;
				}
			
				div.RadTileList.rtlistResponsive .rtlistGroup,
				div.RadTileList.rtlistResponsive .rtlistGroupSeparator, 
				div.RadTileList.rtlistResponsive .rtlistWrapper
				{
					float: none;
					clear: both;
				}
				
				/* make the tiles wrapper use the entire viewport width */
				div.RadTileList.rtlistResponsive .rtlistWrapper
				{
					width: 100vw;
				}
			
				div.RadTileList.rtlistResponsive .rtlistScrollWrapper
				{
					width: auto !important;
				}
				
				/* group separator is now horizontal */
				div.RadTileList.rtlistResponsive .rtlistGroupSeparator
				{
					width: auto;
					height: 30px;
					margin: 10px 0;
				}
			
			
			}
			
			/* phone-oriented layout: groups stack vertically, two square tiles per row, no tile columns. Tiles are zoomed to fit. */
			@media only screen and (max-width: 480px)
			{
				/* inherit the page's font-size that is set by the developer */
				RadTileList.rtlistResponsive
				{
					font-size: inherit;
				}
			
				div.RadTileList.rtlistResponsive .rtlistWrapper, 
				div.RadTileList.rtlistResponsive .RadTile
				{
					font-size: inherit;
				}
				
				/* avoid sizing problems by forcing a box model */
				div.RadTileList.rtlistResponsive .RadTile
				{
					-moz-box-sizing: border-box;
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
				}
				
				/* zoom the image for RadImageTiles to 100% of the tile size */
				div.RadTileList.rtlistResponsive .rtileContentImage, 
				div.RadTileList.rtlistResponsive .RadImageTile .rtileIconImage
				{
					width: 100%;
					max-width: 100%;
				}
			
				/* zoom the RadIconTile contents */
				div.RadTileList.rtlistResponsive .RadTile.RadIconTile .rtileTopContent
				{
					height: 100%;
				}
				
				/* make the RadIconTile icon 50% of the tile */
				div.RadTileList.rtlistResponsive .RadTile.RadIconTile .rtileIconImage
				{
					width: 50%;
					max-width: 50%;
					margin-top: 8vw;
				}
				
				/* set size for the square tile according to the viewport size */
				div.RadTileList.rtlistResponsive .RadTile.rtileSquare
				{
					width: 46vw;
					height: 46vw;
				}
				
				/* set size for the wide tile according to the viewport size */
				div.RadTileList.rtlistResponsive .RadTile.rtileWide
				{
					width: 92vw;
					height: 46vw;
				}
			
				/* set font size for the Tiles' Title element */
				div.RadTileList.rtlistResponsive .RadTile h6.rtileTitle
				{
					font-size: 4.1vw;
				}
				/* set font size for the Tiles' Badge element */
				div.RadTileList.rtlistResponsive .RadTile .rtileBadge
				{
					font-size: 4.1vw;
				}
			}
````



# See Also

 * [Responsive Layout for RadTileList]({%slug tilelist/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

 * [CSS Media Queries](http://www.w3.org/TR/css3-mediaqueries/)

 * [Viewport Width Units](http://dev.w3.org/csswg/css-values/#vw-unit)
