---
title: Show messages to user after response from saving the RadSpreadsheet
description: Show messages to user after response from saving the RadSpreadsheet. Check it now!
type: how-to
page_title: Show messages to user after response from saving the RadSpreadsheet
slug: spreadsheet-show-messages-to-user-after-response-from-saving-the-spreadsheet
res_type: kb
---

## How to

Show messages to the user when the response from the Save operation is returned.

## Solution

The \_onCallbackResponse and \_onCallbackError functions of the Telerik.Web.UI.RadSpreadsheet object should be overridden as follows. These overrides should be placed immediately after the ScriptManager.   
  
>caption \*\* UPDATE: 15-Oct-2018 \*\*  

Cookies can be used to carry the message from the SaveWorkbook method of the custom provider.

````C#
public override void SaveWorkbook(Workbook workbook)
{
    string message = string.Empty;
    HttpCookie myCookie = new HttpCookie("spreadsheet-savemessage");
    try
    {
        //throw new Exception("Something failed furing the save operation");
        // some operation to save the data
 
        message += "Saved successfully!";
    }
    catch (Exception ex)
    {
        message += ex.Message;
             
        throw;
    }
    finally
    {
        myCookie.Value = message;
        HttpContext.Current.Response.Cookies.Add(myCookie);
    }
}
````

````JavaScript
// https://www.telerik.com/support/kb/aspnet-ajax/details/use-cookies-to-help-execute-custom-javascript-after-a-file-starts-to-download
var cookieAPI = (function (undefined) {
    function clearCookie(cookieName) {
        setCookie(cookieName, "", new Date());
    }

    // https://www.w3schools.com/js/js_cookies.asp
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    return {
        getCookie: getCookie,
        setCookie: setCookie,
        clearCookie: clearCookie
    }
})();

Telerik.Web.UI.RadSpreadsheet.prototype._onCallbackResponse = function (response, context) {
    // callback ended        
    // the response should be "OK"
        
    alert(cookieAPI.getCookie("spreadsheet-savemessage"));
    cookieAPI.clearCookie("spreadsheet-savemessage")
}

Telerik.Web.UI.RadSpreadsheet.prototype._onCallbackError = function (error, context) {
    alert(cookieAPI.getCookie("spreadsheet-savemessage"));
    cookieAPI.clearCookie("spreadsheet-savemessage");
}
````

\*\* END UPDATE: 15-Oct-2018 \*\*

````JavaScript
Telerik.Web.UI.RadSpreadsheet.prototype._onCallbackResponse = function (response, context) {
    // callback ended         
    // the response should be "OK"
    alert("Saved successfully");
}

Telerik.Web.UI.RadSpreadsheet.prototype._onCallbackError = function (error, context) {
    // callback ended
    var errorMessage;
    if (error.get_message)
    {
        // AJAX Exception
        errorMessage = error.get_message();
    }
    else
    {
        // ASP.NET callback return error messages in the following form:
        // <exception message><eventValidationLength>|<eventValidationString> e.g.
        // Object reference not set to an instance of an object.56|/wEWAwLM2oLGBwLs0bLrBgLs0fbZDC3VMN/DL8xzHgo9Pw1ztfesraLy
        errorMessage = error.replace(/(\d*\|.*)/,"");
    }

    alert(errorMessage);
}
````

This code will alert "Saved successfully" when the saving went okay and will alert the error message if something failed, for example, "Something failed during the save operation!" if there is an error or you throw it manually, for example, in your custom provider:

````C#
public override void SaveWorkbook(Workbook workbook)
{
    // simulate a server error and send a custom message to the client
    throw new ArgumentException("Something failed during the save operation!");
}
````

## See Also

- [Spreadsheet CustomProvider]({%slug spreadsheet/data-binding/providers/custom-database-provider%})

- [Use cookies to help execute custom JavaScript after a file starts to download](https://www.telerik.com/support/kb/aspnet-ajax/details/use-cookies-to-help-execute-custom-javascript-after-a-file-starts-to-download)


