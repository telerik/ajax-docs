---
title: Get reference to the Page object inside a custom FileBrowserContentProvider
description: Get reference to the Page object inside a custom FileBrowserContentProvider. Check it now!
type: how-to
page_title: Get reference to the Page object inside a custom FileBrowserContentProvider
slug: get-reference-to-the-page-object-inside-a-custom-filebrowsercontentprovider
res_type: kb
---

 ## HOW TO

Get reference to the `Page`, which hosts the RadFileExplorer control, inside a custom `FileBrowserContentProvider`.  
   
## DESCRIPTION

The `Page` object can be used in several scenarios. Two are given as example:  
 
1. Show a JavaScript message (you can call a JavaScript function declared on the page which hosts the RadFileExplorer control as well) from the code of the custom provider. This is applicable in situation where some custom logic is implemented in the StoreFile method and the file is saved based on some business logic of the application. By design the StoreFile does not provide a mechanism which can be used in order to show a message when the file is not saved. The solution is to get reference to the Page object and register a JavaScript which shows an information popup.
 
1. The second example is useful in scenarios where some additional parameters need to be passed to the implemented custom FileBrowserContentProvider. For example, if an image is uploaded using RadFileExplorer, the size of the image can be explicitly set by using the values of two TextBoxes, declared on the page.


Both scenarios are implemented in the attached projects.   
   
 ## SOLUTION  

The `Context` object is passed to the content provider. That object contains a property named `CurrentHandler`. This handler actually is the `Page` object which hosts the RadFileExplorer control. This means that the `Context.CurrentHandler` can be cast to a `Page` object:  
   
````C#
// Get the Page object which hosts the RadFileExplorer control
Page _pageContainsRadFileExplorer = HttpContext.Current.Handler as Page;
````
````VB
' Get the Page object which hosts the RadFileExplorer control
Dim _pageContainsRadFileExplorer As Page = TryCast(HttpContext.Current.Handler, Page)
````

You can find atached the projects demonstrating the described approached here:

* [ReferencePageObject_Cs.zip](files/fileexplorer-referencepageobject_cs.zip)

* [ReferencePageObject_Vb.zip](files/fileexplorer-referencepageobject_vb.zip)


