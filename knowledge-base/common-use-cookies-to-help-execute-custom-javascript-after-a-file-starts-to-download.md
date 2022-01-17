---
title: Use cookies to help execute custom JavaScript after a file starts to download
description: Use cookies to help execute custom JavaScript after a file starts to download. Check it now!
type: how-to
page_title: Use cookies to help execute custom JavaScript after a file starts to download
slug: use-cookies-to-help-execute-custom-javascript-after-a-file-starts-to-download
res_type: kb
---


### HOW TO

Detect when the file is ready to start downloading.

### DESCRIPTION

Usually, when a file is being downloaded, the server clears the response and responds with the file to download.

### SOLUTION

To workaround this, we can add a cookie to the response on the server and look for it in the client-side. To achieve that, before sending the request to the server, we can start checking for this cookie on a given interval of time until the cookie is present. Once the cookie is present, we will know that the server responded with the file and we can do our custom logic and clear the cookie.

>caption RadButton Markup

````ASP.NET
<telerik:RadButton runat="server" ID="RadButton1" OnClientClicking="OnClientClicking" OnClick="RadButton1_Click" Text="Download File" AutoPostBack="true" />
````

>caption OnClientClicking client-side event

````JavaScript
function OnClientClicking(sender, args) {
    pollingAPI.startPolling(function (cookieMessage) {
        alert(cookieMessage)
    }, 200);
}
````

````JavaScript
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
````

>caption The Polling (JavaScript function)

````JavaScript
var pollingAPI = (function (cookieAPI) {
    function startPolling(callbackFunction, pollingInterval) {
        var cookieName = "file-download";
        pollingInterval = pollingInterval || 500;
        cookieAPI.clearCookie(cookieName);
        
        var interval = setInterval(function () {
            var cookieMessage = cookieAPI.getCookie(cookieName);
            
            if (cookieMessage) {
                clearInterval(interval);
                // use message form server
                callbackFunction(cookieMessage)
                //console.log(cookieMessage);

                // clear cookie
                cookieAPI.clearCookie(cookieName)
            }
        }, pollingInterval);
    }

    return {
        startPolling: startPolling
    }

})(cookieAPI);
````

>caption Button's Click event

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    Response.Clear();

    //Indicate the type of data being sent
    Response.ContentType = "application/octet-stream";

    //Name the file
    Response.AddHeader("Content-Disposition", "attachment; filename=\"someFile.txt\"");

    // simulate long server processing
    Thread.Sleep(4000);
    
    Response.BinaryWrite(Encoding.UTF8.GetBytes("This is a dummy file"));

    // add cookie to know the file begins downloading
    HttpCookie myCookie = new HttpCookie("file-download");
    myCookie.Value = "The file started downloading!";
    HttpContext.Current.Response.Cookies.Add(myCookie);

    Response.End();
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Response.Clear()
    
    'Indicate the type of data being sent
    Response.ContentType = "application/octet-stream"
    
    'Name the file
    Response.AddHeader("Content-Disposition", "attachment; filename=""someFile.txt""")
    
    'simulate long server processing
    Thread.Sleep(4000)
    
    Response.BinaryWrite(Encoding.UTF8.GetBytes("This is a dummy file"))
    
    'add cookie to know the file begins downloading
    Dim myCookie As HttpCookie = New HttpCookie("file-download")
    myCookie.Value = "The file started downloading!"
    HttpContext.Current.Response.Cookies.Add(myCookie)
    
    Response.End()
End Sub
````
  

