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


Below is a comparison table between the rendering of **RadTreeView** "Classic" and **RadTreeView** for ASP.NET AJAX.


| RadTreeView "Classic" | RadTreeView for ASP.NET AJAX |
| ------ | ------ |
|&lt;div&gt;|&lt;div class="RadTreeView RadTreeView_Default"&gt;|
|&lt;div&gt;|&lt;ul class="rtUL rtLines"&gt;|
|&lt;div&gt;|&lt;li class="rtLI rtFirst"&gt;|
|&lt;img class="11" src="TopMinus.gif" /&gt;|&lt;div class="rtTop"&gt;|
|&lt;span class="TreeNode"&gt;Root&lt;/span&gt;|&lt;span class="rtSp"&gt;&lt;/span&gt;|
|&lt;/div&gt;|&lt;span class="rtMinus"&gt;&lt;/span&gt;|
|&lt;div&gt;|&lt;span class="rtIn"&gt;Root&lt;/span&gt;|
|&lt;div&gt;|&lt;/div&gt;|
|&lt;img class="4" src="MiddleLine.gif" /&gt;|&lt;ul class="rtUL"&gt;|
|&lt;img class="3" src="MiddleCrossLine.gif" /&gt;|&lt;li class="rtLI"&gt;|
|&lt;span class="TreeNode"&gt;A&lt;/span&gt;|&lt;div class="rtTop"&gt;|
|&lt;/div&gt;|&lt;span class="rtSp"&gt;&lt;/span&gt;|
|&lt;div&gt;|&lt;span class="rtIn"&gt;A&lt;/span&gt;|
|&lt;img class="4" src="MiddleLine.gif" /&gt;|&lt;/div&gt;|
|&lt;img class="3" src="MiddleCrossLine.gif" /&gt;|&lt;/li&gt;|
|&lt;span class="TreeNode"&gt;B&lt;/span&gt;|&lt;li class="rtLI"&gt;|
|&lt;/div&gt;|&lt;div class="rtMid rtSelected"&gt;|
|&lt;div&gt;|&lt;span class="rtSp"&gt;&lt;/span&gt;|
|&lt;img class="4" src="MiddleLine.gif" /&gt;|&lt;span class="rtIn"&gt;B&lt;/span&gt;|
|&lt;img class="3" src="MiddleCrossLine.gif" /&gt;|&lt;/div&gt;|
|&lt;span class="TreeNode"&gt;C&lt;/span&gt;|&lt;/li&gt;|
|&lt;/div&gt;|&lt;li class="rtLI rtLast"&gt;|
|&lt;/div&gt;|&lt;div class="rtBot"&gt;|
|&lt;div&gt;|&lt;span class="rtSp"&gt;&lt;/span&gt;|
|&lt;img class="0" src="BottomLine.gif" /&gt;|&lt;span class="rtIn"&gt;C&lt;/span&gt;|
|&lt;span class="TreeNode"&gt;Sibling&lt;/span&gt;|&lt;/div&gt;|
|&lt;/div&gt;|&lt;/li&gt;|
|&lt;/div&gt;|&lt;/ul&gt;|
|&lt;/div&gt;|&lt;/li&gt;|
||&lt;li class="rtLI rtLast"&gt;|
||&lt;div class="rtBot"&gt;|
||&lt;span class="rtSp"&gt;&lt;/span&gt;|
||&lt;span class="rtIn"&gt;Sibling&lt;/span&gt;|
||&lt;/div&gt;|
||&lt;/li&gt;|
||&lt;/ul&gt;|
||&lt;/div&gt;|

##  

As you probably would notice, **RadTreeView** for ASP.NET AJAX has a much more flexible HTML structure, allowing advanced styling.

The line images in **RadTreeView** for ASP.NET AJAX are rendered as background images of different elements; it is recommended to copy the declarations and the images from an existing skin that resembles the skin you are migrating. If you wish to to create the images on your own, you could use the following CSS rules:

````CSS
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



##  

The table below shows the mapping between the different class names in **RadTreeView** "Classic" and **RadTreeView** for ASP.NET AJAX:


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

>note **RadTreeView** for ASP.NET AJAX uses **RadMenu** as its Context Menu; therefore, the styling from the **RadMenu** skin is applied and the prefix should be **RadMenu_**{*SkinName*}.
>To make the skin selectors skin-specific, they should be prefixed with **RadTreeView_**{*SkinName*}.
>

