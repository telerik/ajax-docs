---
title: Grid Based Layout 
page_title: Grid Based Layout - RadPageLayout
description: Check our Web Forms article about Grid Based Layout.
slug: pagelayout/creating-responsive-design/grid-based-layout-
tags: grid,based,layout,
published: True
position: 0
---

# Grid Based Layout 



This article provides information on the **Grid Based Layout** that we used as a base for the **RadPageLayout** control. You can find details on the structural elements of a grid system as well as how they are used in web development.

## Why are Grids Needed in Web Development?

When web designed emerged as a profession, screen resolutions were varying from 640 by 480 to 1024 by 768 pixels, with 800 by 600 being the predominant. Sites were made mostly with tables and for that reason were either fluid or "optimized" for the common resolution (read broken for the rest). With the rapid development of technology the common resolution in the early 2000’s was 1024 and the full width approach exhibited a flaw – no longer was it comfortable to have full width sites. With some adjustments for vertical scrollbar, the horizontal space was trimmed down to 1000px. However, 1000 is not an easy number. True it’s divisible by 2, 4, 5, 10, but that’s about it. Placing content in three columns has proven difficult and yielded different results in different browsers.

### Enter the Grid Systems

Since grids are in essence a series of guides (both vertical and horizontal) that define proportional placeholders for content all it was needed was to find a close to 1000 that provided a variety of factors. The closest number is 960: it can be divided without a remainder by 2, 3, 4, 5, 6, 8, 10, 12 and 16

## Elements of a Grid System

Most of the terms used in grid systems are borrowed from typography. Still the way grid frameworks are presented in HTML resembles tables and can be explained with table terms below:

* Container – the outer most container (TABLE element)

* Rows – intermediate containers used for contain columns (TR elements)

* Columns – the actual content placeholders (TD elements)

In addition to the above structural elements, a grid may define a couple of other properties:

* Column count – the width in grid units

* Gutters – outer space between columns

* Padding – inner space within columns

* Displacement – shifting the columns left or right

### Column Count and Column Width

A grid is defined by the number of columns it can have. Referring to the magic number above – 960 – columns can be any number from 12, 16, 20 or their product when multiplying by 2 or 3. There are also extreme cases of grid system which have up to 48 columns (20 pixel column width). The columns are sized in abstract units e.g. 1 grid unit is the width of the narrowest column. It’s an abstract unit, because it depends on the width of the container and the number of columns it has:

Column width = Container width / column count

80 = 960 / 12

60 = 960 / 16

Columns can be one grid unit wide or span multiple units. They can also be pushed (displaced to the right) or pulled / flushed (displaced to the left). You can have as many columns on a single row, as long as their width adds up to exactly or less of the container columns count e.g. 12 * 1 = 3 * 4 = 2 * 3 + 1 * 6 = 12 and so on. In case the sum exceeds the width of the grid, the columns will simply fall on the next line.

### HTML Structure

Having in mind that all settings or properties of a grid are applied with class names, if we are to present a typical grid with HTML it would look something like the code below:

````ASPNET
<div class=”container”> <!-- No columns set, defaulting -->
    <div class=”row”>
        <div class=”span6 push4”></div> <!-- 6 units wide, 4 units to the right -->
    </div>
</div>
````



## Fluid Grids

Fixed grids, such as base 960, are useful for a single resolution or resolution not greatly exceeding the grid base. However, they are not suitable for resolutions smaller than the base or for nesting. Reason being – pixels are used. If we substitute the pixels for percent, while maintaining the same ratio between columns and between columns and the container, we get fluid grids. That allows us to have a single grid suitable for multiple resolutions and even infinite nesting.

Column width = Container width / column count

8.3333 = 100 / 12

There is one major drawback to fluid grids – due to their percentage nature, fluid grids can not have fixed width gutters. Instead either percentage gutters or any type of column padding must be used. Another interesting detail is that grid containers must be given explicit maximum width for larger displays, otherwise the grid will stretch in the entire available space.

# See Also

 * [Overview]({%slug pagelayout/overview%})
