---
title: Telerik Web UI Editor CommandList CommandName is null
description: See how to resolve the CommandName is null error
type: troubleshooting
page_title: Telerik Web UI Editor CommandList CommandName is null
slug: editor-telerik-web-ui-editor-commandlist-commandname-is-null
res_type: kb
---

## Problem

Error: Telerik.Web.UI.Editor.CommandList["CommandName"] is null

## DESCRIPTION

If RadEditor is initially hidden and then displyed using AJAX the client Telerik.Web.UI.Editor.CommandList object will be not recognized and the following error will be thrown "Telerik Web UI Editor CommandList is null".

The browser reports an error at the Telerik.Web.UI.Editor.CommandList["Save"] line:

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">  
<script type="text/javascript">  
    Telerik.Web.UI.Editor.CommandList["Save"] = function(commandName, editor, args)  
    {  
        $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("save");  
    }  
</script>  
</telerik:RadCodeBlock> 
````

##SOLUTION

The problem occurs when the RadEditor container to the page is loaded using AJAX. This is a well known limitation of the MS AJAX that will not parse <script> tags declared in the panel loaded. The following [blog post](http://blogs.telerik.com/tervelpeykov/posts/08-10-20/AJAX_Using_AJAX_to_load_a_usercontrol_that_has_JavaScript_declared_in_it.aspx) discusses it.

One alternative approach to fix the problem is to declare on your page (out of any AJAX panel):

````ASP.NET
function OnClientCommandExecuting(editor, args)  
{  
   if (args.get_commandName() == "Save")  
  {  
      $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("save");     
      args.set_cancel(true);  
  }  
} 
````

Then, just set the OnClientCommandExecuting property of RadEditor, e.g.

<telerik:RadEditor OnClientCommandExecuting="OnClientCommandExecuting" .../>

