---
title: Using browser modal dialog instead of RadWindow
description: Using browser modal dialog instead of RadWindow based dialogs of RadEditor. Check it now!
type: how-to
page_title: Using browser modal dialog instead of RadWindow
slug: editor-using-browser-modal-dialog-instead-of-radwindow
res_type: kb
---

   
## HOW-TO  
 Use browser modal dialog instead of RadWindow based dialogs of RadEditor
   
## DESCRIPTION  
 By default, all editor's managers use RadWindow as a dialog. The advantage of the RadWindow windows is that they will not be blocked by the browser's pop-up blockers.  
   
 However, there is a side effect that it is not possible to popup a RadWindow dialog over another RadWindow dialog, because the content area of RadWindow is an IFRAME element. In such scenarios the solution is to use the browser modal dialogs instead of RadWindow.  
   
## SOLUTION  
 All you need to do to configure the editor's dialogs to use the browser modal dialogs is to set a "**true**" parameter to the editor's **set_useClassicDialogs**() method. Here is an example:  
   
 
````ASP.NET
<script type="text/javascript">  
function OnClientLoad(editor)  
{  
    editor.set_useClassicDialogs(true);  
}  
</script>  
<telerik:RadEditor ID="RadEditor1" OnClientLoad="OnClientLoad"  runat="server"></telerik:RadEditor>  
````
 
   
 The parameter of the **set_useClassicDialogs**() metod specifies whether RadEditor will use RadWindow windows or browser popup windows for its dialogs.  

