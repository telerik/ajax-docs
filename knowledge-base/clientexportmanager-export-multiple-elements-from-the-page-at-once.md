---
title: Export Multiple Elements from the Page at Once
description: Export Multiple Elements from the Page at Once. Check it now!
type: how-to
page_title: Export Multiple Elements from the Page at Once. | RadClientExportManager
slug: clientexportmanager-export-multiple-elements-from-the-page-at-once
res_type: kb
tags: export manager, telerik ajax export manager, exporting
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms ClientExportManager for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## DESCRIPTION

When [exporting parts of the page to PDF through RadClientExportManager](https://demos.telerik.com/aspnet-ajax/client-export-manager/functionality/export-html-elements/defaultcs.aspx), you can pass a single selector. In some cases you may want to export several elements at once. These multiple elements may not even be adjacent or in the same container. 

You can export them by using the [Kendo Drawing API](https://docs.telerik.com/kendo-ui/api/javascript/drawing/arc), [Kendo Drawing Group](https://docs.telerik.com/kendo-ui/api/javascript/drawing/group) and the [jQuery when()](https://api.jquery.com/jquery.when/) method to utilize the deferreds that the [drawDOM()](https://docs.telerik.com/kendo-ui/api/javascript/drawing/methods/drawdom) method from the Kendo Drawing API provides.

## SOLUTION

Here is the gist, and a full example with comments and explanations is attached below (based on the [Page for client-side export]({%slug clientexportmanager-page-for-client-side-export%}) knowledge-basae article):


````JavaScript
function exportMultipleElements() {
    var exportSettings = {
        forcePageBreak: ".pageBreak",
        paperSize: "A3",
        landscape: true
    };

    var draw = kendo.drawing;
    var $ = $telerik.$;
    //use a few deferreds at once https://api.jquery.com/jquery.when/
    //https://docs.telerik.com/kendo-ui/api/javascript/drawing/methods/drawdom
    $.when(
        draw.drawDOM($("#first"), exportSettings),
        draw.drawDOM($("#second"), exportSettings),
        draw.drawDOM($("#third"), exportSettings),
        draw.drawDOM($("#fourth"), exportSettings)
    ).then(function (group1, group2, group3, group4) {//the number of arguments matches the number of deferreds

        var group = new kendo.drawing.Group({
            pdf: {
                multiPage: true
            }
        });

        //append the first three pages with the more static content, including the chart
        group.append(group1, group2, group3);
        //append the pages from the grid in the fourth element, see the rest of the functions in the full example to see how the page break selector is appended in the DOM
        group.append.apply(group, group4.children);

        return draw.exportPDF(group, exportSettings);
    }).done(function (data) {
        kendo.saveAs({
            dataURI: data,
            fileName: "multi-element-export.pdf"
        });
    });
}
````

You can find attached [here](files/clientexportmanager-export-multiple-elements-from-the-page-at-once.zip) a basic example.
 
   
    