---
title: Adding a Custom Button to RadWindow Titlebar
description: Adding a Custom Button to RadWindow Titlebar. Check it now!
type: how-to
page_title: Adding a Custom Button to RadWindow Titlebar
slug: window-adding-a-custom-button-to-radwindow-titlebar
res_type: kb
---




## HOW-TO  
Add a custom (print) button to the titlebar of RadWindow for ASP.NET AJAX  
  
## DESCRIPTION
 The attached example shows how to implement a print button in your window titlebar. Some typical scenarios include implementing help or print button based on this functionality.  
  
## SOLUTION 
 A JavaScript function handles the OnClientShow event and creates the needed HTML elements that are added to the command buttons list. Some CSS rules apply images for the buttons and an onmousedown handler is used to trigger the custom function (printing the content page in the example).

You can find attached a sample page with the proposed implementation that you can use as base for further development. 
You can obtain the project files from here:

* [window-custom-button-radwindow.zip](files/window-custom-button-radwindow.zip)
* [window-custom-button-radwindow-after-q1-2016.zip](files/window-custom-button-radwindow-after-q1-2016.zip)
* [window-custom-button-radwindow-after-q1-2016-xhtml-10-transitional.zip](files/window-custom-button-radwindow-after-q1-2016-xhtml-10-transitional.zip)




  