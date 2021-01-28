---
title: Controlling Grid Lines
page_title: Controlling Grid Lines - RadGrid
description: Check our Web Forms article about Controlling Grid Lines.
slug: grid/how-to/common/controlling-grid-lines
tags: controlling,grid,lines
published: True
position: 11
---

# Controlling Grid Lines


The GridLines ASP.NET property is used to get or set the grid line style of the Table control. However it uses an obsolete HTML attribute (rules) to control the appearance of tables. Such obsolete attributes are easily overridden by CSS styles (as in the RadGrid skin). That is why using the GridLines property can cause the cell borders in RadGrid to appear improperly. To avoid this you can override the embedded skin with a CSS rule:

**Q1 2009 and later**

div.RadGrid_[SkinName] .rgRow td,

div.RadGrid_[SkinName] .rgAltRow td,

div.RadGrid_[SkinName] .rgHeader,

div.RadGrid_[SkinName] th.rgResizeCol,

div.RadGrid_[SkinName] .rgFilterRow td

{

border-left:1px solid red;

}
