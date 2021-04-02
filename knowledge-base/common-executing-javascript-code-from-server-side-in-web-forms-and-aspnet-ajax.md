---
title: Executing JavaScript Code from Server-side in Web Forms and ASP.NET AJAX
description: How to execute JavaScript code from Server-side in Web Forms and ASP.NET AJAX.
type: how-to
page_title: Executing JavaScript Code from Server-side
slug: common-executing-javascript-code-from-server-side-in-web-forms-and-aspnet-ajax
res_type: kb
---


## Description

Different ways to execute JavaScript from the server side in Web Form and AJAX frameworks. Calling a JavaScript function from the server is a relatively easy task. Just make sure that:

 - The code is actually inserted on the page – the easiest way is to put a simple alert() and check if it is fired.
 - The controls are rendered on the page before referencing them in your JavaScript function
 - If you are manually inserting the '&lt;script&gt;' tags – that you have set either the type (type='text/javascript') or the language (language='javascript') attributes

## Solution

>caption Simple scenario

The most suitable approach that works also when ASP.NET AJAX framework is used is registering the script via the [ScriptManager.RegisterStartupScript](https://docs.microsoft.com/en-us/dotnet/api/system.web.ui.scriptmanager.registerstartupscript?view=netframework-4.8) and leveraging the [Sys.Application.Load](https://docs.microsoft.com/en-us/previous-versions/bb383829(v=vs.140)) event for the script itself if code execution is needed after IScriptControl instances are initialized.

````ASPX
<form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager2" runat="server">
    </asp:ScriptManager>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Button ID="Button3" Text="AJAX postback and show RadAlert" runat="server" OnClick="Button3_Click" />
        </ContentTemplate>
    </asp:UpdatePanel>
</form>
````

````C#
protected void Button3_Click(object sender, EventArgs e)
{
    string scriptstring = "alert('Hello from the server-side!');";
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "myalert", scriptstring, true);
}
````

>caption Executing function on Sys.Application.Load

````ASPX
<form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager2" runat="server">
    </asp:ScriptManager>
    <script>
        function clientAlert() {
            alert("Hello, all IScriptControl instances are initialized at this point!")
        }
    </script>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Button ID="Button3" Text="AJAX postback and show RadAlert" runat="server" OnClick="Button3_Click" />
        </ContentTemplate>
    </asp:UpdatePanel>
</form>
````

````C#
protected void Button3_Click(object sender, EventArgs e)
{
    /* Here is the prettified code of the script
        *
            <script language='javascript'>
            // Attach a handler to the load event.
            Sys.Application.add_load(applicationLoadHandler);
 
            function applicationLoadHandler() {
                clientAlert();
                // Detach the handler if needed
                //Sys.Application.remove_load(applicationLoadHandler);
            }
        </script>        
        */
    string scriptTagsFormatString = "<script language='javascript'>{0}</script>";
 
    //https://stackoverflow.com/questions/3773857/escape-curly-brace-in-string-format
    string applicationLoadHandlerFormatString = "Sys.Application.add_load(applicationLoadHandler); function applicationLoadHandler() {{ {0}; /* Sys.Application.remove_load(applicationLoadHandler);*/ }}";
 
    string myFunction = "clientAlert();";
 
    string applicationLoadHandler = string.Format(applicationLoadHandlerFormatString, myFunction);
    string finalScriptString = string.Format(scriptTagsFormatString, applicationLoadHandler);
 
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "clientalert", finalScriptString, false);
}
````

Or allow the ScriptManager to register the &lt;script&gt; tag:

````C#
//string scriptTagsFormatString = "<script language='javascript'>{0}</script>";
//https://stackoverflow.com/questions/3773857/escape-curly-brace-in-string-format
string applicationLoadHandlerFormatString = "Sys.Application.add_load(applicationLoadHandler); function applicationLoadHandler() {{ {0}; /* Sys.Application.remove_load(applicationLoadHandler);*/ }}";
string myFunction = "clientAlert();";
 
string applicationLoadHandler = string.Format(applicationLoadHandlerFormatString, myFunction);
//string finalScriptString = string.Format(scriptTagsFormatString, applicationLoadHandler);
 
ScriptManager.RegisterStartupScript(Page, Page.GetType(), "clientalert", applicationLoadHandler, true);
````


>caption Execute script on Sys.Application.Load and pass parameters for it

The Sys.Application.Load does not allow passing parameters for the event handler, so we just need to call our function inside the page load handler function. 


````ASPX
<form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager2" runat="server">
    </asp:ScriptManager>
    <script>
        function alertWithParameters(text, number, boolParam) {
            if (boolParam) {
                alert(text);
            } else {
                prompt("Enter age", number);
            }
        }
    </script>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Button ID="Button3" Text="AJAX postback and show RadAlert" runat="server" OnClick="Button3_Click" />
        </ContentTemplate>
    </asp:UpdatePanel>
</form>
````

>note If you are passing string as parameter, quotes wrapping the value should be added like shown in the code below - <mark>'</mark>{0}<mark>'</mark>. Otherwise, a global variable with that name will be searched and passed as a function parameter. 
>

````C#
protected void Button3_Click(object sender, EventArgs e)
{
    //https://stackoverflow.com/questions/3773857/escape-curly-brace-in-string-format
    string applicationLoadHandlerFormatString = "Sys.Application.add_load(applicationLoadHandler); function applicationLoadHandler() {{ /{0}; /* Sys.Application.remove_load(applicationLoadHandler);*/ }}";
 
    // obtain values from business logic
    string text = "Everything is fine!";
    int number = 21;
    bool boolParam = false;
 
    string myFunction = string.Format("alertWithParameters('{0}', {1}, {2})", text, number, boolParam.ToString().ToLower());
    string applicationLoadHandler = string.Format(applicationLoadHandlerFormatString, myFunction);
 
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "clientprompt", applicationLoadHandler, true);
}
````


## See Also

* [General troubleshooting of JavaScript errors]({%slug common-general-troubleshooting-javascript-errors%})
* [Understanding AJAX Controls]({%slug understanding-ajax-controls%})

