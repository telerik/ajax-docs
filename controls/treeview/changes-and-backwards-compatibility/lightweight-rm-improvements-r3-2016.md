---
title: Improving Lightweight Rendering for RadTreeView (R3 2016)
page_title: Improving Lightweight Rendering for RadTreeView (R3 2016) | RadTreeView for ASP.NET AJAX Documentation
description: Improving Lightweight Rendering for RadTreeView (R3 2016)
slug: treeview/changes-and-backwards-compatibility/lightweight-rm-improvements-r3-2016
tags: lightweight,improvement,changes,redermode
published: True
position: 0
---

# Improving Lightweight Rendering for RadTreeView (R3 2016)

## Introduced changes

The **R3 2016** release of the **Telerik UI for ASP.NET AJAX** suite introduces several improvements of the **Lightweight** rendering of the **RadTreeView**. As the **RadDropDownTree** uses an embedded **RadTreeView** for its drop-down, those changes apply for that control too.

The improvements introduced might cause some issues with the proper appearance of the control when custom styles are applied. The changes introduced for the structure of the nodes of the tree are listed below:

* The *&lt;div&gt;* element that represents each node used to have the *rtTop*, *rtMid* or *rtBot* class, depending on the position of the node (whether it is the first node for the current level, a middle node or the last node). In the improved rendering those classes are substituted with a single *rtOut* class.

* The *&lt;span&gt;* element with the class *rtSp*, which was used to calculate the line height for each node, has been removed.

* The *&lt;span&gt;* element with the class *rtIn* has been transformed to a *&lt;div&gt;* element.

* The icon *&lt;img&gt;* with the class *rtImg* used to be sibling, placed before the *rtIn* element, but it is now placed within the *rtIn* *&lt;div&gt;*.

* A new *&lt;span&gt;* element with the class *rtText* has been introduced to hold the text of each node.

* The class *rtChkTristate* has been added to the tri-state checkbox *&lt;span&gt;*.



## Possible Issues


### Using the Tag Selector

In cases where that *rtIn* element is customized using the tag selector (*span.rtIn*), removing the element text (*span*) from the selector will fix the possible issues.


### Styling rtOut Element

As the horizontal node line is implemented as a border of pseudo element of the *rtOut* (previous *rtTop, rtMid, rtBot*), the selectors for styling those lines should be altered from:

````CSS
.RadTreeView .rtLines .rtTop:before,
.RadTreeView .rtLines .rtMid:before,
.RadTreeView .rtLines .rtBot:before,
.RadTreeView .rtLines .rtLI:before {
    border: 2px dashed #92b4c3;
} 

````

to:

````CSS
.RadTreeView .rtLines .rtOut:before,
.RadTreeView .rtLines .rtLI:before {
    border: 2px dashed #92b4c3;
}

````

## Changes in the HTML Structure of a Node with a Two-state Checkbox

Previously, the generated structure of a tree node with a two-state checkbox was:

````HTML
<div class="rtTop ContentCssClass rtSelected SelectedCssClass">
	<span class="rtSp"></span>
	<span class="rtMinus"></span>
	<label>
		<input type="checkbox" class="rtChk">
		<img src="icon.png" alt="" class="rtImg">
		<span class="rtIn CssClass">Group A</span>
	</label>
</div>

````

It has been changed to:
````HTML
<div class="rtOut ContentCssClass rtSelected SelectedCssClass">
	<span class="rtMinus"></span>
	<input type="checkbox" class="rtChk">
	<div class="rtIn CssClass ">
		<img src="icon.png" alt="" class="rtImg">
		<span class="rtText">Group A</span>
	</div>
</div>

````


## Changes in the HTML Structure of a Node with a tri-state Checkbox

The node with a tri-state checkbox has been changed from:
````HTML
<div class="rtTop ContentCssClass rtSelected SelectedCssClass">
	<span class="rtSp"></span>
	<span class="rtMinus"></span>
	<span class="rtUnchecked"></span>
	<img src="icon.png" alt="" class="rtImg">
	<span class="rtIn CssClass">Group A</span>
</div>

````

to:
````HTML
<div class="rtOut ContentCssClass rtSelected SelectedCssClass">
	<span class="rtMinus"></span>
	<span class="rtChkTristate rtUnchecked"></span>
	<div class="rtIn CssClass ">
		<img src="icon.png" alt="" class="rtImg">
		<span class="rtText">Group A</span>
	</div>
</div>


````


 

