---
title: Confirming the click on RadTabstrip by using radconfirm
description: Confirming the click on RadTabstrip by using radconfirm. Check it now!
type: how-to
page_title: Confirming the click on RadTabstrip by using radconfirm
slug: tabstrip-confirming-the-click-on-radtabstrip-by-using-radconfirm
res_type: kb
---

## How to

Confirm the clicking on a RadTabStrip's tab by using radconfirm.   
   
## Description

When user clicks on a RadTabStrip's tab, a radconfirm dialog is called which asks for confirmation. If the user confirms, the selected tab is activated.   

The main issue in this scenario is that radconfirm cannot block the execution thread (this is something that cannot be done with JavaScript) and you have to use a callback function to handle the result of the confirmation dialog. This leads to changing the logic when using radconfirm and to cancel the action first, before calling radconfirm. Then in the callback function, we need to simulate the click on the new tab.  
   
````JavaScript
var isTabClicked = "false"; 
function OnClientTabSelecting(sender, args) 
 { 
    if(isTabClicked == "false") 
    { 
        //cancel the action 
        args.set_cancel(true); 
        //get the tab which is clicked 
        var tab = args.get_tab(); 
  
        function CallBackFn(arg) 
        { 
            if(arg) 
            {     
                isTabClicked = "true"; 
                tab.click();     
            } 
         } 
         //ask the user for confirmation                
         radconfirm("Are you sure you want to select another tab?",CallBackFn);      
    } 
 } 
 function OnClientTabSelected() 
 { 
    //reset the isTabClicked variable 
    isTabClicked = "false"; 
 } 
````

````ASPX
<telerik:RadWindowManager ID="RadWindowManager1" runat="server"> 
</telerik:RadWindowManager> 
<telerik:RadTabStrip ID="RadTabStrip1" runat="server" OnClientTabSelected="OnClientTabSelected" OnClientTabSelecting="OnClientTabSelecting"> 
    <Tabs> 
        <telerik:RadTab Selected="true" runat="server" Text="Root Tab1"></telerik:RadTab> 
        <telerik:RadTab runat="server" Text="Root Tab2"> 
        </telerik:RadTab> 
    </Tabs> 
</telerik:RadTabStrip> 
````

 