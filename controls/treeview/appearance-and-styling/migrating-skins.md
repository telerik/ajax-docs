---
title: Migrating Skins
page_title: Migrating Skins | RadTreeView for ASP.NET AJAX Documentation
description: Migrating Skins
slug: treeview/appearance-and-styling/migrating-skins
tags: migrating,skins
published: True
position: 0
---

# Migrating Skins



## 

###  

Below is a comparison table between the rendering of RadTreeView "Classic" and RadTreeView for ASP.NET AJAX.


| RadTreeView "Classic" | RadTreeView for ASP.NET AJAX |
| ------ | ------ |
|<div>|<div class="RadTreeView RadTreeView_Default">|
|<div>|<ul class="rtUL rtLines">|
|<div>|<li class="rtLI rtFirst">|
|<img class="11" src="TopMinus.gif" />|<div class="rtTop">|
|<span class="TreeNode">Root</span>|<span class="rtSp"></span>|
|</div>|<span class="rtMinus"></span>|
|<div>|<span class="rtIn">Root</span>|
|<div>|</div>|
|<img class="4" src="MiddleLine.gif" />|<ul class="rtUL">|
|<img class="3" src="MiddleCrossLine.gif" />|<li class="rtLI">|
|<span class="TreeNode">A</span>|<div class="rtTop">|
|</div>|<span class="rtSp"></span>|
|<div>|<span class="rtIn">A</span>|
|<img class="4" src="MiddleLine.gif" />|</div>|
|<img class="3" src="MiddleCrossLine.gif" />|</li>|
|<span class="TreeNode">B</span>|<li class="rtLI">|
|</div>|<div class="rtMid rtSelected">|
|<div>|<span class="rtSp"></span>|
|<img class="4" src="MiddleLine.gif" />|<span class="rtIn">B</span>|
|<img class="3" src="MiddleCrossLine.gif" />|</div>|
|<span class="TreeNode">C</span>|</li>|
|</div>|<li class="rtLI rtLast">|
|</div>|<div class="rtBot">|
|<div>|<span class="rtSp"></span>|
|<img class="0" src="BottomLine.gif" />|<span class="rtIn">C</span>|
|<span class="TreeNode">Sibling</span>|</div>|
|</div>|</li>|
|</div>|</ul>|
|</div>|</li>|
||<li class="rtLI rtLast">|
||<div class="rtBot">|
||<span class="rtSp"></span>|
||<span class="rtIn">Sibling</span>|
||</div>|
||</li>|
||</ul>|
||</div>|

###  

As you probably would notice, the RadTreeView for ASP.NET AJAX has a much more flexible HTML structure, allowing advanced styling.

The line images in RadTreeView for ASP.NET AJAX are rendered as background images of different elements; it is recommended to copy the declarations and the images from an existing skin that resembles the skin you are migrating. If you wish to to create the images on your own, you could use the following CSS rules:

````ASPNET
	.RadTreeView_{SkinName} .rtLines .rtLI,
	.RadTreeView_{SkinName} .rtLines .rtFirst .rtUL
	{
	   background:url(NodeSpan.gif) repeat-y 0 0;
	}
	.RadTreeView_{SkinName} .rtLines .rtFirst
	{
	   background:url(FirstNodeSpan.gif) no-repeat 0 15px;
	}
	.RadTreeView_{SkinName} .rtLines .rtFirst .rtUL
	{
	   background:url(FirstNodeSpan.gif) repeat-y 0 15px;
	}
	.RadTreeView_{SkinName} .rtLines .rtLast,
	.RadTreeView_{SkinName} .rtLines .rtLast .rtUL
	{
	   background:none;
	}
	.RadTreeView_{SkinName} .rtLines .rtTop
	{
	   background:url(TopLine.gif) 0 0 no-repeat;
	}
	.RadTreeView_{SkinName} .rtLines .rtLast .rtTop
	{
	   background:url(SingleLine.gif) 0 0 no-repeat;
	}
	.RadTreeView_{SkinName} .rtLines .rtMid
	{
	   background:url(MiddleLine.gif) 0 0 no-repeat;
	}
	.RadTreeView_{SkinName} .rtLines .rtBot
	{
	   background:url(BottomLine.gif) 0 0 no-repeat;
	} 		
````



###  

The table below shows the mapping between the different class names in RadTreeView "Classic" and RadTreeView for ASP.NET AJAX:


| RadTreeView "Classic" | RadTreeView for ASP.NET AJAX |
| ------ | ------ |
|.TreeNode|.rtIn|
|.TreeNodeOver|.rtHover .rtIn|
|.TreeNodeSelect|.rtSelected .rtIn|
|.TreeNodeDisabled|.rtDisabled .rtIn|
|.TreeNodeEdit|.rtEdit .rtIn|
|.LoadingMessage|.rtLoadingBefore, .rtLoadingAfter, .rtLoadingBelow|
|.TreeContextItem|.rmContextMenu .rmLink *(See note below)* |
|.TreeContextItemOver|.rmContextMenu .rmLink:hover *(See note below)* |

>note RadTreeView for ASP.NET AJAX uses RadMenu as its Context Menu; therefore, the styling from the RadMenu skin is applied and the prefix should be RadMenu_{SkinName}.
>To make the skin selectors skin-specific, they should be prefixed with RadTreeView_{SkinName}.
>

