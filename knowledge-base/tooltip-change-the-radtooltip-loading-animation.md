---
title: Change the RadToolTip loading animation
description: Change the RadToolTip loading animation. Check it now!
type: how-to
page_title: Change the RadToolTip loading animation
slug: tooltip-change-the-radtooltip-loading-animation
res_type: kb
---

## How to  

Change the default loading image when displaying a **RadToolTip** by using a **RadToolTipManager**   
   
## Solution
   
There are two common solutions for customizing the default loading animation - by using CSS and by using JavaScript means as explained below.  
   
 1. Use CSS  

  In order to get the desired result you should include the image you want to display in the project and then override the default image set to the tooltip by using a style, similar to the below one:  

  ````CSS
   div.radtooltip_[Selected_Skin_Name] .ToolTipContent div.LoadingSign    
    {        
        background: url(ImageUrl) no-repeat center !important;     
        width: 100%;   
        height: 100%;   
        margin: -15px;  
    } 
  ````

 2. Use JavaScript  
 
  When using JavaScript you should obtain a reference to the loading DIV element and set an image or custom text directly as shown below:  
  
  ````ASPX
  <head runat="server">  
    <title>Untitled Page</title> 
    <style type="text/css">  
    .MyLoadingSign  
    {  
        font:12px "Segoe UI", Arial, Verdana;
        padding-top: 40px;
        color:red;  
    }  
    </style> 
</head> 
<body> 
    <form id="form1" runat="server">  
 
        <script type="text/javascript">  
    function OnClientShow(sender, args)  
    {  
       var test = $telerik.getElementByClassName($get("RadToolTipWrapper_" + sender.get_id()), "rtLoading", "td");  
       test.className = 'MyLoadingSign';  
       test.innerHTML = "<center>Custom Loading text here</center>" 
    }  
        </script> 
 
        <asp:ScriptManager ID="ScriptManager1" runat="server" /> 
        <asp:HyperLink ID="link" runat="server">Show tooltip</asp:HyperLink> 
        <telerik:RadToolTipManager ID="manager" runat="server" AutoCloseDelay="100000" 
            Width="150" Height="150" OnAjaxUpdate="manager_AjaxUpdate" ManualClose="true" 
            OnClientShow="OnClientShow">  
            <TargetControls> 
                <telerik:ToolTipTargetControl TargetControlID="link" /> 
            </TargetControls> 
        </telerik:RadToolTipManager> 
    </form> 
  ````

   