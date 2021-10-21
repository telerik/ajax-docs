---
title: Enabling Print button in Preview mode
description: Enabling Print button in Preview mode of RadEditor. Check it now!
type: how-to
page_title: Enabling Print button in Preview mode
slug: editor-enabling-print-button-in-preview-mode
res_type: kb
---

   
## HOW-TO  
 Enable Print button in Preview mode  
   
## SOLUTION  
The code below demonstrates how to enable the Print button in Preview mode of RadEditor. It checks whether the current mode of RadEditor is Preview using the [get_mode()](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/methods/get_mode) method, after that it gets a reference to the "Print" tool using the [getToolByName()](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/methods/gettoolbyname) method and enables it using the setState(0) method, e.g.  
   
````ASP.NET
<telerik:radeditor runat="server" OnClientModeChange="OnClientModeChange" ID="RadEditor1"></telerik:radeditor>
<script type="text/javascript">
   function OnClientModeChange(editor, args)
   {
       var mode = editor.get_mode();                     
       switch (mode)
       {
           case 1:
               //alert( "We are in Design mode");
               //do something
           break;
           case 2:
               //alert("We are in HTML mode");
           break;
           case 4:
               setTimeout(function()
               {
                   var tool = editor.getToolByName("Print");
                   tool.setState(0);
               }, 0);
               //alert( "We are in Preview mode");
               //do something
           break;
       }
   }
 </script>
````
 

  