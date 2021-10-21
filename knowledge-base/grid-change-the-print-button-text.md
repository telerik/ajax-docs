---
title: Change the Print Button Text
description: Change the Print Button Text
type: how-to
page_title: Change the Print Button Text - RadGrid
slug: grid-change-the-print-button-text
res_type: kb
---


## DESCRIPTION

RadGrid provides the PrintGridText property which sets the title and value attributes of the rendered button element and determines what will appear in the ToolTip Text of the button. Its default value is "Print RadGrid". The difference with the rest of the buttons like the RefreshButton is that the PrintButton does not have any text initially and it does not render a second span element, contrary to the other built-in buttons in the CommandItem.

## SOLUTION

If you prefer to set a Text next to the Print Icon, you can use the following approach to achieve that:

````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridCommandItem)
    {
        GridCommandItem commandItem = e.Item as GridCommandItem;
        ElasticButton printButton = commandItem.FindControl("PrintButton") as ElasticButton;
        printButton.FirstSpanInnerText = " Success";
        printButton.Width = 150;
    }
}
````

Align the icon and text in the same line

````CSS
html body .RadGrid .rgPrintIcon,
html body .RadGrid .rgPrintIcon::before {
    display: inline;
}
````
 
