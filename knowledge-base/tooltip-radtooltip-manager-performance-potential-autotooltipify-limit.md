---
title: RadToolTipManager Performance - Potential AutoTooltipify Limit 
description: RadToolTipManager Performance - Potential AutoTooltipify Limit. Check it now!
type: how-to
page_title: RadToolTipManager Performance - Potential AutoTooltipify Limit
slug: tooltip-radtooltip-manager-performance-potential-autotooltipify-limit
res_type: kb
---

## Problem

RadTooltipManager causing "Application is not responding due to a long running script" on IE11 or not all controls that have title attributes get RadToolTip instances.

## Cause

 * **Cause 1:** When there is a huge amount of `TargetControls` added to the Tooltip Manager—in such a case, during the `Sys.Application.Init` event, the tooltip manager will loop through them and `$create()` a RadToolTip instance. See **Approach 5** for resolving such a situation.

 * **Cause 2:** RadToolTipManager, when `AutoTooltipify `is set to `true`, loops through all elements on the page and creates RadToolTip instances for each one with a `title `attribute. This is an expensive operation for large pages and browsers with slow performance (like certain IE versions) can show the "slow running script" warning earlier than others.
     
     Here is the process in detail:
     1. the Sys.Application.Init event is raised which calls the `$create()` statement of the `IScriptControls` and at some point it reaches the tooltip manager
     
     1. the tooltip manager, when AutoTooltipify is enabled
         1. loops through ALL nodes on the page via `document.getElementsByTagName("*")`
         1. creates a RadToolTip instance for each node with a `title` or `alt` attribute


 With very large pages, the second step may cause a performance hit for slower browsers/slower PCs.

 In some cases the browser does not properly report the number of nodes with a title or alt attribute. Here is what the tooltip manager uses (simplified snippet for illustration purposes that you can use for debugging and also evaluating the performance of the page). In such cases, the browser does not provide RadToolTipManager with the proper information and tooltips are not properly created.

 ````JavaScript
var elements = document.getElementsByTagName("*"); //get all elements on the page
var length = elements.length; //for debugging purposes
alert(length); //all HTML nodes on the page.
var elem;
//var counter = 0; //counter
var ttManager = $find("<%=RadToolTipManager1.ClientID%>");
for (i = 0; i < length; i++) {
    elem = elements[i];
    //console.log(i); //for debugging purposes ensure we pass through each node
    var title = elem.getAttribute("title");
    var alt = elem.getAttribute("alt");
    if (title || alt) {
        counter++; //count the elements that will get RadToolTips
        ttManager.createToolTip(elem); //creates the actual RadToolTip. Make sure to pass a DOM element (node), not a jQuery object wrapper
    }
}
alert(counter);//the number of elementst that were reported by the browser as having title or alt attribute
 ````

## Solution

There are several different approaches that can eliminate or alleviate the issue.

 * **Approach 1:** Disable automatic tooltip generation by setting `AutoTooltipify` to `false`. You will lose the RadToolTip instance, but the page performance will be improved.

 * **Approach 2:** Reduce the page size (e.g., enable paging in the grids, use load on demand for treeviews, combo boxes and other lists, and combine that with **Approach 3**). This may require reworking of certain page concepts.

 * **Approach 3:** Use the `AutoTooltipify `feature on demand by enabling it for a short interval and/or making the tooltip manager loop through a certain area of the page only:

 ````ASPX
 <telerik:RadToolTipManager ID="RadToolTipManager1" runat="server"  AutoTooltipify="false" />
         <script type="text/javascript">
             function createTtips() {
                 var ttManager = $find("<%=RadToolTipManager1. ClientID%>");
                 ttManager.set_autoTooltipify(true);
                 ttManager.tooltipify($get("<%=RadGrid1.ClientID%>")); // if you pass an HTML element only its children will get  RadToolTip instances. Otherwise, the entire page will  be traversed. See http://docs.telerik.com/devtools/ aspnet-ajax/controls/tooltip/client-side-programming/ radtooltipmanager-object
                 ttManager.set_autoTooltipify(false);
             }
             Sys.Application.add_load(createTtips);
             //to reduce spike in CPU utilization you can defer this a  bit, e.g.:
             //Sys.Application.add_load(function () { setTimeout (createTtips, 5000); });
         </script>
 ````

 * **Approach 4:** Use the previous code samples to loop only through certain elements that will require tooltips to reduce the chance of the browser providing wrong information and to reduce the performance hit. For example:

 ````ASPX
 <telerik:RadToolTipManager ID="RadToolTipManager1" runat="server" AutoTooltipify="false" />
 <script type="text/javascript">
     function createTtips() {
         var elements = document.getElementsByTagName("a"); //modify the selected elements otherwise (e.g., use another container  like the grid, or try jQuery)
         var length = elements.length;
         var elem;
         var ttManager = $find("<%=RadToolTipManager1.ClientID%>");
         for (i = 0; i < length; i++) {
             elem = elements[i];
             var title = elem.getAttribute("title");
             var alt = elem.getAttribute("alt");
             if (title || alt) {
                 ttManager.createToolTip(elem); //make sure to pass a DOM element (node), not a jQuery object wrapper
             }
         }
     }
     Sys.Application.add_load(createTtips);
     //to reduce spike in CPU utilization you can defer this a bit, e.g.:
     //Sys.Application.add_load(function () { setTimeout(createTtips, 5000); });
 </script>
 ````

 * **Approach 5**: If you have too many `TargetControls` items, [create the tooltips dynamically](http://demos.telerik.com/aspnet-ajax/tooltip/examples/radtooltipmanagerclientapi/defaultcs.aspx) with JavaScript only when needed, instead of populating the `TargetControls` collection. You can, for example, add `data-*` attributes to the HTML nodes the `mouseover` or `click` handler can use in order to provide a `Value` for the tooltip.


 