---
title: Controlling the behavior of RadSplitter or a splitter pane with RadAjax
description: Controlling the behavior of RadSplitter or a splitter pane with RadAjax. Check it now!
type: how-to
page_title: Controlling the behavior of RadSplitter or a splitter pane with RadAjax
slug: splitter-controlling-the-behavior-of-radsplitter-or-a-splitter-pane-with-radajax
res_type: kb
---


## HOW-TO   
Control the behavior of RadSplitter or a splitter pane with RadAjax.  
     
   
## DESCRIPTION  
 A common goal you may want you to achieve while developing web applications with RadControls is interoperability between RadAjax and RadSplitter.   
 There are several scenarios that you may consider in such type of situations. For example, you may want to update only one RadPane of a RadSplitter object on every postback that it performs. Another case can be to update again only that RadPane when a certain control initiates a postback.   
   
 This KB article's purpose is to cover the basic logic necessary to make RadAjax and RadSplitter controls "communicate".  
   
## SOLUTION  
At the end of this article you will find a simple downloadable project for each of the four scenarios that we cover here. Below are the details:  
 
1. Consider that you have an asp page and you want to control the state of a RadSplitter or a RadSplitterPane object by means of another web control. On every postback that this certain control initiates, only the object that you specify will be updated. In this case, all you need to do is add a RadAjax manager control to your page and configure it for this particular scenario.   
   

    Let us assume that you will use a standard asp Button control to initiate AJAX request. For the two scenarios we will review, the first necessary action to perform is to set the **AjaxControlId** property in the AjaxSettings section of the RadAjaxManager to the **ID** of the Button control. 
        

    - The first scenario that we will cover is when you want to update the whole RadSplitter object. In this situation, add a AjaxUpdatedControl object and set its **ControlID** property to the **ID** of the RadSplitter. 
                

        You can find the example for this case in the [splitter-with-ajaxmanager.zip](files/splitter-with-ajaxmanager.zip) archive.
    - The other scenario that we will go through is when you intend to update a single RadPane object. Note that you **cannot** configure the RadAjaxManager to directly update the RadPane object. That is why you have to wrap the content of the RadPane in a standard asp Panel control. After that, add an AjaxUpdatedControl object to the RadAjaxManager and set its **ControlID** property to the **ID** of the Panel.
                

        The example for this case in the [splitter-pane-with-ajaxmanager.zip](files/splitter-pane-with-ajaxmanager.zip) archive.
2. Now, let us analyze another situation - you want to AJAX-enable a RadSplitter control or a single RadSplitterPane object so that all postbacks that it performs to be converted to AJAX requests. This is achievable by wrapping the target control in a RadAjaxPanel.   

    - Consider that you want to "ajaxify" the entire RadSplitter object. In this case wrap the RadSplitter object in the RadAjaxPanel.   
   

        The relevant sample for this is in the [splitter-with-ajaxpanel.zip](files/splitter-with-ajaxpanel.zip) archive.
    - For the second case - when you want to "ajaxify" a single RadSplitter pane, all you have to do is wrap the content of the RadSplitterPane object in the RadAjaxPanel.    
   

        The last demo project is zipped in the [splitter-pane-with-ajaxpanel.zip](files/splitter-pane-with-ajaxpanel.zip) archive.


