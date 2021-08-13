---
title: RadWindow that postbacks and manipulates opener page on its reload
description: RadWindow that postbacks and manipulates opener page on its reload. Check it now!
type: how-to
page_title: RadWindow that postbacks and manipulates opener page on its reload
slug: window-radwindow-that-postbacks-and-manipulates-opener-page-on-its-reload
res_type: kb
---

   
 **HOW-TO**   
   
   
 Postback a RadWindow, reload it and close it on reload (the scenario when regular browser windows calls **self.close()**
 
- **Scenario #1** - common when the RadWindow opens a
    Wizard that will perform some action, such as user registration (with a
    postback to the server), and then need to close itself automatically
    without the user explicitly closing it.
- **Scenario #2**
    - similar to the above, reload the parent browser page after a postback, to
    display the changes (e.g. updated user list, for example).
- **Scenario #3** - redirect the parent browser window to a new page after a postback (e.g. in Wizard scenarios, in login scenarios) - Ajaxified in the demo.
- **Scenario #4** - perform a postback, then call a particular function defined on the parent page (useful in dialog scenarios) - Ajaxified in the demo
- **Scenario #5** - similar to Scenario #2 : perform a postback, then open the RadWindow on the page and refresh the parent page by pressing the last button on the content page. By using this approach, we will avoid the warning message that is shown
    before reloading the page (try the same steps in Scenario#2, but pressing button#2).

   
   
 
**SOLUTION** 
 
Only scenarios 1 and 2 are covered in detail below. Scenarios 3 and 4 are very similar, please review directly the source of the page **SelfClosingDialog.aspx / Dialog.aspx** in the attached project below for extra information.

1. **Include all necessary javascript to the page, e.g.**   
   ````JavaScript
   <script type="text/javascript">
   //This code is used to provide a reference to the RadWindow "wrapper"
   function GetRadWindow()
   {
      var oWindow = null;
      if (window.radWindow) oWindow = window.radWindow;//Will work in Moz in all cases, including clasic dialog
      else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;//IE (and Moz az well)
      return oWindow;
   } 

   function CloseOnReload()
   {
      GetRadWindow().Close();
   }

   function RefreshParentPage()
   {
      GetRadWindow().BrowserWindow.location.reload();
   }
   </script>
   ````
2. **Declare two *asp:Button*objects and assign (server) onclick event handlers.**
3. **In the handlers perform the needed serverside actions and then use the: **
    - ** [ClientScript.RegisterStartupScript(](http://msdn.microsoft.com/en-us/library/system.web.ui.clientscriptmanager.registerstartupscript.aspx))  function in order to load the script on the page :  
    ````C#
       protected void Button1_Click(object sender, System.EventArgs e) 
      { 
         string script = "<script>CloseOnReload()</" + "script>"; 
         ClientScript.RegisterStartupScript(this.GetType(), "CloseOnReload", script); 
      } 
    ````

    - or [ScriptManager.RegisterStartupScript()](http://msdn.microsoft.com/en-us/library/system.web.ui.scriptmanager.registerstartupscript.aspx) function: 

    ````C#
      protected void Button2_Click(object sender, System.EventArgs e) 
      { 
         string script = "<script>RefreshParentPage()</" + "script>"; 
         ScriptManager.RegisterStartupScript(this, this.GetType(), "RefreshParentPage", script, false); 
      } 
    ````


 You can find a fully working project, demonstrating the setups explained above in the attached [window-selfclosingdialog-cs.zip](files/window-selfclosingdialog-cs.zip) and [window-selfclosingdialog-vb.zip](files/window-selfclosingdialog-vb.zip) archive files.  
   
   
   

