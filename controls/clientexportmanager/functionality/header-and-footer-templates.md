---
title: Page Templates
page_title: Page Templates - RadClientExportManager
description: Render header and footer templates on each page when you export content in PDF with RadClientExportManager for ASP.NET AJAX
slug: clientexportmanager/functionality/header-and-footer-templates
tags: header,footer,headers,export,template
published: True
position: 4
---

# Page Templates

When you request multi-page output through the `PageBreakSelector` or `paperSize`, you can additionally specify a header and footer page template.

## 

This template will be inserted into each page before producing the output. You can easily position it relatively to the page with CSS. The template can be a function, or a [Kendo UI template](https://docs.telerik.com/kendo-ui/framework/templates/overview), and it receives the number of the current page (`pageNum`) and the total number of pages (`totalPages`).

````ASP.NET
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1"></telerik:RadClientExportManager>

<input type="button" onclick="exportElement();return false;" value="export" />

<script type="text/javascript">
    function exportElement() {
        var exp = $find("<%= RadClientExportManager1.ClientID %>");
        var pdfSettings = {
            fileName: "PDF-Export",

            margin: { top: 25, left: 15, bottom: 10, right: 5 },
            paperSize: "A4",
            landscape: "Portrait",
            title: "PDF",
            author: "UserName",
            subject: "Export to PDF",
            keywords: "a keyword",
            creator: "John",
            template: $telerik.$("#page-template").html(),
            date: new Date(2015, 10, 25),
            forcePageBreak: ".page-break"
        };
        exp.exportPDF($telerik.$("#panel-container"), pdfSettings);
    }
</script>
<style>
    /*
    Make sure everything in the page template is absolutely positioned.
    All positions are relative to the page container.
    */
    .page-template > * {
        position: absolute;
        left: 20px;
        right: 20px;
        font-size: 90%;
    }

    .page-template .header {
        top: 20px;
        border-bottom: 1px solid #000;
    }

    .page-template .footer {
        bottom: 20px;
        border-top: 1px solid #000;
    }
</style>

<div id="panel-container">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis
libero, lobortis ac rutrum quis, varius a velit. Donec lacus erat,
cursus sed porta quis, adipiscing et ligula. Duis volutpat, sem pharetra
accumsan pharetra, mi ligula cursus felis, ac aliquet leo diam eget
risus. Integer facilisis, justo cursus venenatis vehicula, massa nisl
tempor sem, in ullamcorper neque mauris in orci.
    </p>
    <p class="page-break">
        Ut orci ligula, varius ac consequat in, rhoncus in dolor. Mauris
pulvinar molestie accumsan. Vestibulum ante ipsum primis in faucibus
orci luctus et ultrices posuere cubilia Curae; Aenean velit ligula,
pharetra quis aliquam sed, scelerisque sed sapien. Class aptent taciti
sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Aliquam dui mi, vulputate vitae pulvinar ac, condimentum sed eros.
    </p>
    <p class="page-break">
        Aliquam at nisl quis est adipiscing bibendum. Nam malesuada eros
facilisis arcu vulputate at aliquam nunc tempor. In commodo scelerisque
enim, eget sodales lorem condimentum rutrum. Phasellus sem metus,
ultricies at commodo in, tristique non est. Morbi vel mauris eget mauris
commodo elementum. Nam eget libero lacus, ut sollicitudin ante. Nam odio
quam, suscipit a fringilla eget, dignissim nec arcu. Donec tristique
arcu ut sapien elementum pellentesque.
    </p>
</div>
<script type="x/kendo-template" id="page-template">
<div class="page-template">
    <div class="header">
        <div style="float: right">Page #:pageNum# of #:totalPages#</div>
        This is a header.
    </div>
    <div class="footer">
        This is a footer.
        Page #:pageNum# of #:totalPages#
    </div>
</div>
</script>
````

# See Also

 * [Kendo UI Drawing API Page Templates](https://docs.telerik.com/kendo-ui/framework/drawing/pdf-output/page-templates)
 * [PDF Multi-page Export]({%slug clientexportmanager/functionality/pdf-multi-page-export %})
 * [Client-Side Programming Overview]({%slug clientexportmanager/client-side-programming/overview %})

  
    