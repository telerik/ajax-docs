---
title: How do I position the items in the Command menu on the right side of the grid?
description: How do I position the items in the Command menu on the right side of the grid?. Check it now!
type: how-to
page_title: How do I position the items in the Command menu on the right side of the grid?
slug: grid-position-the-command-menu-items-on-the-right
res_type: kb
---


## Description
 When the `CommandItem` menu is enabled, by default the buttons are positioned on the left side, and the **Refresh** button - on the right side.       
         
## Solution

Apply CSS styles in order to position the items on the right side as follows:

````CSS
<style>
    div.RadGrid .rgCommandCellLeft {
        float: right;    /* Position the buttons on the right side */
    }
    div.RadGrid .rgCommandCellRight {
        float: left;    /* Position the Refresh button on the left side */
    }
</style>
````



