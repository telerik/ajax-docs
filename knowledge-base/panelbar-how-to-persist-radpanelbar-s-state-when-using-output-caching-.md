---
title: How to persist RadPanelBar's state when using Output Caching?
description: How to persist RadPanelBar's state when using Output Caching?. Check it now!
type: how-to
page_title: How to persist RadPanelBar's state when using Output Caching?
slug: panelbar-how-to-persist-radpanelbar-s-state-when-using-output-caching-
res_type: kb
---
   
## How to

Persist RadPanelBar's state when using Output Caching?
   

Persisting the RadPanelBar's state requires execution of a server-side code. This execution might be prevented by the output caching. To solve the problem you could use the client-side API of the control to find the panel item corresponding to the current URL and expand its parents.   
   
   
## Example  
   
````JavaScript
function pageLoad() 
{ 
    var currentUrl = window.location.href.toLowerCase();      
    var panelbar = $find("<%= RadPanelBar1.ClientID %>");      
 
    var currentItem = null;      
    var currentItemTemp = null; 
    for (var i = 0; i < panelbar.get_allItems().length; i++)      
    {      
        if (panelbar.get_allItems()[i].get_linkElement() &&      
            currentUrl.indexOf(panelbar.get_allItems()[i].get_linkElement().href.toLowerCase()) > -1)      
        {      
            currentItem = panelbar.get_allItems()[i];   
            currentItemTemp = currentItem;    
            break;      
        }      
    }      
        
    while (currentItem && currentItem.get_parent() != panelbar)      
    {      
        currentItem.get_parent().expand();      
        currentItem = currentItem.get_parent();      
    }      
 
    if (currentItemTemp)      
    {      
        currentItemTemp.select();      
        currentItemTemp.expand();      
    }                       
}   
````

 