---
title: Include Next and Previous Buttons in a CommandItemTemlate with Frozen Columns
description: Include Next and Previous Buttons in a CommandItemTemlate with Frozen Columns. Check it now!
type: how-to
page_title: Include Next and Previous Buttons in a CommandItemTemlate with Frozen Columns
slug: grid-include-next-and-previous-buttons-in-a-commanditemtemlate
res_type: kb
---


## Description
 By design, when using the [CommandItemTemplate](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/commanditem/command-item-template#command-item-template) of the RadGrid, the default command menu is hidden. Hence, the default buttons cannot be used out-of-the-box. Taking into account that the **Next** and **Previous** buttons (enabled by setting the [EnableNextPrevFrozenColumns]({%slug grid/functionality/scrolling/frozen-columns%}#next-and-prev-buttons) to `true`) are not shown as well.   
   
## Solution

In order to have the two specific buttons, simply add the corresponding `rgNext` and `rgPrev` CSS classes to the custom button element. The handlers are wired to the classes and the buttons will function as expected without any further customization. Here is an example of a `CommandItemTemplate` with the two buttons:

````ASP.NET
<CommandItemTemplate>
    <button type="submit" onclick="return false;" title="Next" class="t-button rgActionButton rgNext rgDisabled">
        <span class="t-font-icon rgIcon rgNextIcon"></span>
    </button>
    <button type="submit" onclick="return false;" title="Prev" class="t-button rgActionButton rgPrev">
        <span class="t-font-icon rgIcon rgPrevIcon"></span>
    </button>
</CommandItemTemplate>
````



