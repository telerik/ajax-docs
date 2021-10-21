---
title: Reposition the ShowOnFocus toolbar of RadEditor on show
description: Reposition the ShowOnFocus toolbar of RadEditor on show. Check it now!
type: how-to
page_title: Reposition the ShowOnFocus toolbar of RadEditor on show
slug: editor-reposition-the-showonfocus-toolbar-of-radeditor-on-show
res_type: kb
---

   
## HOW-TO  
 Reposition the **ShowOnFocus** toolbar of RadEditor on show  
   
## SOLUTION  
The code below demonstrates how to attach a **click** eventhandler to the editor's content area and get a reference to the RadWindow based **ShowOnFocus** toolbar. In order to set the required new position use the RadWindow's client method moveTo(), e.g.  
 
 
````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<script type="text/javascript">
    function OnClientLoad(editor, args)
    {
        var element = document.all ? editor.get_document().body : editor.get_document();
        $telerik.addExternalHandler(element, "click", function (e)
        {
            setTimeout(function ()
            {
                var oWnd = editor.get_toolAdapter().get_window(); //get reference to RadWindow based ShowOnFocus toolbar 
                oWnd.moveTo(695, 14);
            }, 0);
        });
    } 
</script>
<telerik:RadEditor runat="server" ID="RadEditor1" ToolbarMode="showOnFocus" OnClientLoad="OnClientLoad">
</telerik:RadEditor>
````
 
   


 