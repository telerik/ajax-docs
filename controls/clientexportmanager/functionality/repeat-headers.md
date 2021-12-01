---
title: Repeated Table Headers
page_title: Repeated Table Headers - RadClientExportManager
description: Render table headers on each page when you export content in PDF with RadClientExportManager for ASP.NET AJAX
slug: clientexportmanager/functionality/repeat-headers
tags: repeat,table,headers,export
published: True
position: 4
---

# Repeated Table Headers

This help article will show how you can render recurrent table headers.

## 

If you want the `<thead>` elements of an HTML `<table>` element to be repeated on each page, set the **RepeatHeaders="true"** setting in the PdfSettings inner-tag of RadClientExportManager:

````ASPNET
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
    <PdfSettings RepeatHeaders="true" PageBreakSelector=".pageBreak" MarginRight="10mm" PaperSize="A5" Landscape="true" MarginBottom="10mm" MarginTop="10mm" MarginLeft="10mm" FileName="MyFile.pdf" />
</telerik:RadClientExportManager>
<input type="button" onclick="exportElement();return false;" value="export" />

<script type="text/javascript">
    function exportElement() {
        var exp = $find("<%= RadClientExportManager1.ClientID %>");
        exp.exportPDF($telerik.$("#grid"));
    }
</script>

<table id="grid">
    <thead>
        <tr>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>Year</th>
            <th>Category</th>
            <th>Air Conditioner</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Volvo</td>
            <td>S60</td>
            <td>2010</td>
            <td>Saloon</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Audi</td>
            <td>A4</td>
            <td>2002</td>
            <td>Saloon</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>BMW</td>
            <td>535d</td>
            <td>2006</td>
            <td>Saloon</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>BMW</td>
            <td>320d</td>
            <td>2006</td>
            <td>Saloon</td>
            <td>No</td>
        </tr>
        <tr class="pageBreak">
            <td>VW</td>
            <td>Passat</td>
            <td>2008</td>
            <td>Saloon</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Peugeot</td>
            <td>407</td>
            <td>2006</td>
            <td>Saloon</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Honda</td>
            <td>Accord</td>
            <td>2008</td>
            <td>Saloon</td>
            <td>No</td>
        </tr>
        <tr>
            <td>Alfa Romeo</td>
            <td>159</td>
            <td>2008</td>
            <td>Saloon</td>
            <td>No</td>
        </tr>
        <tr>
            <td>Nissan</td>
            <td>Almera</td>
            <td>2001</td>
            <td>Saloon</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>Mitsubishi</td>
            <td>Lancer</td>
            <td>2008</td>
            <td>Saloon</td>
            <td>Yes</td>
        </tr>
    </tbody>
</table>
````

# See Also

 * [Client-Side Programming Overview]({%slug clientexportmanager/client-side-programming/overview %})
 * [PDF Multi-page Export]({%slug clientexportmanager/functionality/pdf-multi-page-export %})
  