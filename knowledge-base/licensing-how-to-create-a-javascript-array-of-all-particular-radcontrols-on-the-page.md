---
title: How-to create a javascript array of all particular RadControls on the page
description: How-to create a javascript array of all particular RadControls on the page. Check it now!
type: how-to
page_title: How-to create a javascript array of all particular RadControls on the page
slug: licensing-how-to-create-a-javascript-array-of-all-particular-radcontrols-on-the-page
res_type: kb
---

 ## How To

Create a method which returns a javascript array containing all RadControls of a particular type (combobox, menu, treeview, etc.)  
   
   
## Solution 

Below you will see how to to create a method which returns an array of all RadTreeView controls on the page.   

The same approach could be used to return an array of all RadMenu, RadTextBox, etc. controls on the page.   
   
````JavaScript
function get_allRadTreeViews() 
{ 
    var allRadTreeViews = []; 
    var allRadControls = $telerik.radControls; 
     
    for (var i = 0; i < allRadControls.length; i++) 
    { 
        var element = allRadControls[i]; 
         
        if (Telerik.Web.UI.RadTreeView && element instanceof Telerik.Web.UI.RadTreeView) 
        { 
            Array.add(allRadTreeViews, element); 
        } 
    } 
    return allRadTreeViews; 
} 
````
 
This method iterates through the built-in `radControls` array which contains all UI for APS.NET AJAX controls on the page and checks the type of every item.  
   
Here is one simple usage of the above method:  
   
````JavaScript
function pageLoad() 
{ 
    for (var i = 0; i < get_allRadTreeViews().length; i++) 
    { 
        var tree = get_allRadTreeViews()[i]; 
        tree.get_nodes().getNode(0).select(); 
    } 
} 
````
   
   
