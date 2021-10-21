---
title: RadPageLayout throws IndexOutOfBounds exception when iterating over LayoutRowCollection.
description: RadPageLayout throws IndexOutOfBounds exception when iterating over LayoutRowCollection.. Check it now!
type: how-to
page_title: RadPageLayout throws IndexOutOfBounds exception when iterating over LayoutRowCollection.
slug: pagelayout-throws-indexoutofbounds-exception
res_type: kb
---


## PROBLEM

RadPageLayout throws `IndexOutOfBounds` exception when iterating over `LayoutRowCollection`.

## DESCRIPTION

When I try to use a For Each loop to iterate over the `LayoutRowCollection`, I receive an `IndexOutOfBounds` error.

## SOLUTION

The RadPageLayout component does not fully implement the `GetEnumerator()` method from the IEnumerable interface. As an result, an iterator can not be built automatically which leads to issues while using a `For Each `loop.

To work around this issue - a traditional `For` loop can be used. The code below demonstrates how to loop over all rows and columns of a RadPageLayout to do work or locate information.


````C#
for (int row = 0; row <= RadpageLayout1.Rows.Count - 1; row++)
{
    for (int col = 0; col <= RadpageLayout1.Rows.Item(row).Columns.Count - 1; col++)
    {
        // Do Work
    }
}
````
````VB
For row As Integer = 0 To RadpageLayout1.Rows.Count - 1
    For col As Integer = 0 To RadpageLayout1.Rows.Item(row).Columns.Count - 1
        'Do Work
    Next
Next
````


  


