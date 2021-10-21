---
title: How to handle Backspace presses in RadComboBox when EnableLoadOnDemand and MarkFirstMatch are 'true'
description: How to handle Backspace presses in RadComboBox when EnableLoadOnDemand and MarkFirstMatch are 'true'. Check it now!
type: how-to
page_title: How to handle Backspace presses in RadComboBox when EnableLoadOnDemand and MarkFirstMatch are 'true'
slug: combobox-how-to-handle-backspace-presses-when-enableloadondemand-and-markfirstmatch-are-true-
res_type: kb
---


## How to  

Handle BACKSPACE presses in RadComboBox working in Load On Demand and with **MarkFirstMatch** set to **true**.
   
## Description  

By default, RadComboBox does handle this case. In some cases, when BACKSPACE is pressed, the last letter of the user-typed text should be deleted and Items should be filtered with the new text. This default behaviour can be seen [here](https://demos.telerik.com/aspnet-ajax/combobox/examples/populatingwithdata/autocompletesql/defaultcs.aspx).  
   
## Solution  

Handle the **OnClientItemsRequesting** and **OnClientKeyPressing** events as shown below:  

````JavaScript
var queryText = ""; 
   
function clientItemsRequesting(sender, eventArgs) 
{ 
      queryText = eventArgs.get_text(); 
} 
   
function clientKeyPressing(sender, eventArgs) 
{             
      if (eventArgs.get_domEvent().keyCode == 8) 
      { 
         var newText = queryText.substring(0, queryText.length); 

         sender.set_text(unescape(newText)); 
      } 
} 
````

 