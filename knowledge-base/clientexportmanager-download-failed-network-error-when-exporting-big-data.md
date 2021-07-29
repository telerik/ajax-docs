---
title: Download Failed - Network Error when exporting big data via RadClientExportManager
description: Download Failed - Network Error when exporting big data via RadClientExportManager. Check it now!
type: how-to
page_title: Download Failed - Network Error when exporting big data via RadClientExportManager
slug: clientexportmanager-download-failed-network-error-when-exporting-big-data
res_type: kb
---


### PROBLEM
 Download Failed - Network Error when exporting big data via RadClientExportManager  

### DESCRIPTION
 You might experience a Download Failed network error in Chrome when trying to export a large amount of data from the browser using the Client Export Manager.  
  
 There is a certain limit of items that can be exported. It could vary depending on the browser, its version, the operating system, so there is no specific number to be stated. The reason is that the modern browsers do not provide support for streams. This means that all the data should be kept in the memory until the file is generated, which breaks the export and causes the network error. 


### SOLUTION

The solution is to compress the pdf data using the free Pako.js library by importing it on the page:

````ASP.NET
<!-- Load Pako ZLIB library to enable PDF compression -->
<script src="https://demos.telerik.com/aspnet-ajax/Common/Scripts/pako.min.js"></script>
````

You can get the JavaScript file from: [http://demos.telerik.com/aspnet-ajax/Common/Scripts/pako.min.js](http://demos.telerik.com/aspnet-ajax/Common/Scripts/pako.min.js) or via its [GitHub repo](https://github.com/nodeca/pako).  
  
 The compression can be especially of a great help in the output file size when you are using custom TTF fonts or images with alpha channel (i.e. PNGs with transparency).  
  
 Another approach you can try is sending the file to the server: [http://docs.telerik.com/devtools/aspnet-ajax/controls/clientexportmanager/how-to/save-exported-files#use-page-method](http://docs.telerik.com/devtools/aspnet-ajax/controls/clientexportmanager/how-to/save-exported-files#use-page-method).   
  
 Instead of writing on the server, you can also output it to the response as shown in the attached example, which uses directly the underlying Kendo library and forces the proxy usage: [http://docs.telerik.com/kendo-ui/framework/save-files/introduction#force-proxy-usage](http://docs.telerik.com/kendo-ui/framework/save-files/introduction#force-proxy-usage). With this, the base64 string from the client will go to the server and the server will return the file. You can see how to configure it in more detail at: [https://demos.telerik.com/kendo-ui/pdf-export/index](https://demos.telerik.com/kendo-ui/pdf-export/index).


You can find attached [here](files/clientexportmanager-forced-proxy.zip) a basic example.




