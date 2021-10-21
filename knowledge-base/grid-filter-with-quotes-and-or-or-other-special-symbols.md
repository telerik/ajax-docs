---
title: Filter RadGrid with quotes, AND, OR or other special symbols
description: Check out how to filter RadGrid with quotes, AND, OR or other special symbols.
type: how-to
page_title: How to filter RadGrid with special symbols
slug: grid-filter-with-quotes-and-or-or-other-special-symbols
position: 
tags: RadGrid
res_type: kb
---

## Description

RadGrid control considers quotes, "AND", "OR" and other similar meaningful statements in query context as illegal when filtering. These are the default values of this collection:

````
{ " LIKE ", " AND ", " OR ", "\"", ">", "<", "<>", " NULL ", " IS " }
````

## Solution

You can remove the "AND" and "OR" statements from the forbidden filter string collection. This could be achieved in the Page_Load() event handler as following:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    GridFilterFunction.IllegalStrings = new string[] { " LIKE ", ">", "<", "<>", " NULL ", " IS " };
    RadGrid1.EnableLinqExpressions = false;
}
````

>important
Telerik does not bear responsibility when you change this collection.
>

If you are using CheckList or HeaderContext (Excel-like) filtering mode, you can additionally set the following property:

````ASPX
<telerik:RadGrid ... >
    <FilterMenu EnableTextHTMLEncoding="false"></FilterMenu>
````

 