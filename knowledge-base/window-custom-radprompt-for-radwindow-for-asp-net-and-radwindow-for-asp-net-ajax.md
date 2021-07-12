---
title: Custom radprompt for RadWindow for ASP.NET AJAX
description: Custom radprompt for RadWindow for ASP.NET AJAX. Check it now!
type: how-to
page_title: Custom radprompt for RadWindow for ASP.NET AJAX
slug: window-custom-radprompt-for-radwindow-for-asp-net-ajax
res_type: kb
---

## HOW-TO

Custom radprompt for RadWindow for ASP.NET AJAX.

## SOLUTION
 The following KB article will show how to provide a custom radprompt dialog for your application by using RadWindow for ASP.NET AJAX. 
   
 
1. The RadWindow templates are embedded in the Telerik.Web.UI.dll file. To see what the corresponding template looks like, you can simply put a RadWindowManager in your aspx, run the page and examine the HTML dump. The templates are rendered in the RadWindowManager's structure in DIV containers with ID which consist the RadWindowManager's ID and the name of the template, e.g:  
   ````ASP.NET 
   <div id="RadWindowManager1_confirmtemplate" style="display:none;">
   ````  
 
2. The template is now not displayed in an IFRAME, but in the context of the same page. Because the template is cloned for every called dialog, you must get the unique ID of the additional elements that you have in the template in order to use them in the Javascript function.   

    What we recommend is to add the client ID of the dialog to the ID of the additional elements - this will allow you to get a reference to the correct HTML control. This approach is used in the code below
3. There are only a couple of parameters that are used:
    1. ***{0}** - radWindow client ID*
    2. ***{1}** - Text to show (in the alert, confirm, prompt);*

 
Below you can see the same structure of the radprompt dialog used in the RadWindow for ASP.NET example with the necessary changes made so it works in RadWindow for ASP.NET AJAX:

````ASP.NET 

 <form id="form1" runat="server">  
        <asp:ScriptManager ID="scriptmanager1" runat="server">  
        </asp:ScriptManager> 
 
        <script type="text/javascript">     
        function openPrompt()     
        {     
            radprompt('Please select an option',callbackFn);     
        }     
             
        function callbackFn(arg)     
        {     
            if (null != arg) alert("Argument returned " + arg);  
            else alert ("No argument was returned");     
        }     
        </script> 
 
        <telerik:RadWindowManager ID="RadWindowManager1" runat="server">  
            <PromptTemplate> 
 
                <script type="text/javascript">     
            function closePrompt(winid)     
            {           
                var select = document.getElementById('select' + winid);     
                var selectselectedValue = select.options[select.selectedIndex].value;     
    
                var confirmWnd = $find(winid);     
                confirmWnd.close(selectedValue);                 
            }     
                </script> 
 
                <div class="windowpopup radprompt">  
                    <div class="dialogtext">  
                        {1}  
                    </div> 
                    <div> 
                        <select id="select{0}">  
                            <option value="One">One</option> 
                            <option value="Two">Two</option> 
                            <option value="Three">Three</option> 
                            <option value="Four">Four</option> 
                        </select> 
                    </div> 
                    <div> 
                        <a onclick="closePrompt('{0}');" class="radwindowbutton" href="javascript:void(0);">  
                            <span class="outerspan"><span class="innerspan">##LOC[OK]##</span></span></a> 
                        <a onclick="$find('{0}').close();" class="radwindowbutton" href="javascript:void(0);">  
                            <span class="outerspan"><span class="innerspan">##LOC[Cancel]##</span></span></a> 
                    </div> 
                </div> 
                </DIV> 
            </PromptTemplate> 
        </telerik:RadWindowManager> 
        <button onclick="openPrompt(); return false;">test</button> 
    </form> 
```` 

  