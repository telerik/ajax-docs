---
title: Change the value of the FrameDuration property depending on the content of the currently shown item in RadRotator
description: Change the value of the FrameDuration property depending on the content of the currently shown item in RadRotator. Check it now!
type: how-to
page_title: Change the value of the FrameDuration property depending on the content of the currently shown item in RadRotator
slug: rotator-change-the-value-of-the-frameduration-property-depending-on-the-content-of-the-currently-shown-item
res_type: kb
---

## How to

Change the value of the FrameDuration property depending on the content of the currently shown item. This is especially useful when you show text content and the texts inside the RadRotator's items have different lengths.  
   
   
## Description

The example shows how to use the RadRotator's client-side API in order to change its behavior dynamically. The provided code changes the value of the FrameDuration property based on the length of the text which is currently shown in RadRotator control.  
   
## Solution

The OnClientItemShown event is used in order to get the text shown inside the RadRotator control:  

 1. First attach a handler to the event:
 
 ````ASPX
 <telerik:RadRotator ID="RadRotator1" runat="server" DataSourceID="xmlDataSource1"
    FrameDuration="2000" ScrollDirection="Up" Height="190px" Width="178px" OnClientItemShown="OnClientItemShown">
 ````
 
 2. Implement the handler:  

 ````JavaScript
function OnClientItemShown(oRotator, args)
 {
     var wrapperElement = getWrapperElement(args.get_item());
     // The div that wraps the text
     var textContainer = $telerik.$("#textContent", wrapperElement);
     var content = textContainer.text();
     var textlength = content.length;
  
     /*
         Approximately one second for every 20 characters ==>
         textlength
     */
     var calculatedFrameDuration = 1000 * (textlength / 20); // Milliseconds
     calculatedFrameDuration = Math.ceil(calculatedFrameDuration); // Round the number upwards
     var textToShow = String.format("Frame will stay {0} milliseconds", calculatedFrameDuration);
     $telerik.$("#FrameDurationViewer").text(textToShow);
     oRotator.set_frameDuration(calculatedFrameDuration);// Change the frame duration
 }
 ````

 3. The `getWrapperElement` method returns the DIV that wraps the content of the currently shown RadRotator item:  

 ````JavaScript
function getWrapperElement(rotatorItem)
 {
     var itemElem = rotatorItem.get_element();
     var wrapper = itemElem.firstChild;
     return wrapper;
 }
 ````

 