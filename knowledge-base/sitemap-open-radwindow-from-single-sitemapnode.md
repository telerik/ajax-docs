---
title: Open a RadWindow from a single SiteMapNode
description: Open a RadWindow when clicking on a specific SiteMapNode of a RadSiteMap instead of navigating away
type: how-to
page_title: Open a RadWindow from a single SiteMapNode
slug: sitemap-open-radwindow-from-single-sitemapnode
position: 
tags: 
ticketid: 1509727
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2020.1.219</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadSiteMap for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Open a RadWindow when clicking on a specific SiteMapNode of a RadSiteMap instead of navigating away. 

## Solution

The easiest way is to handle the click event of the specific nodes: 
1. Add CSS class to the nodes that need to open in RadWindow in the [NodeDataBound](https://docs.telerik.com/devtools/aspnet-ajax/controls/sitemap/server-side-programming/nodedatabound) event of the SiteMap;
2. Handle the click event of the document. If the script will be loaded in the `<head>`, then it needs to be executed in the DOMContentLoaded event: [Pure JavaScript equivalent of jQuery's $.ready() - how to call a function when the page/DOM is ready for it](https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t)

````ASPNET
document.addEventListener('DOMContentLoaded', function(){
    $telerik.$(window).click(function (ev) {
        var link = $telerik.$(ev.target)
        if (link.is("a") && link.parent().hasClass("open-radwindow")) {
            // cancel the default behavior of the link click
            ev.preventDefault();

            // open window here...
            // https://docs.telerik.com/devtools/aspnet-ajax/controls/window/getting-started/opening-windows
        }
    })

}, false);
````

````C#
protected void RadSiteMap2_NodeDataBound(object sender, RadSiteMapNodeEventArgs e)
{
    // custom condition to add CSS class to nodes that need to open in RadWindow
    if (e.Node.Text == "RadEditor")
    {
        e.Node.CssClass = "open-radwindow";
    }
}
````

## See Also

* [Pure JavaScript equivalent of jQuery's $.ready() - how to call a function when the page/DOM is ready for it](https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t)

* [Open RadWindow documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/getting-started/opening-windows)

* [RadSiteMap OnNodeDataBound event article](https://docs.telerik.com/devtools/aspnet-ajax/controls/sitemap/server-side-programming/nodedatabound)

