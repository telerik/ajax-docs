---
title: ajaxRequest
page_title: ajaxRequest method
description: Client-side method to trigger a partial PostBack/AJAX request using the Telerik WebForms AjaxManager component.
slug: ajaxmanager/client-side-programming/methods/ajaxrequest
tags: telerik, webforms, ajaxmanager, client-side method, ajaxrequest
published: True
position: 0
---

# ajaxRequest() method

Client-side method to trigger a partial PostBack/AJAX request using the Telerik WebForms AjaxManager component.

## Usage

`ajaxRequest(eventArgument)` method takes one parameter.

>caption Parameters

| Parameter         | Type      | Description   |
| ---               | ---       | ---           |
| `eventArgument`   | `string`  | The `string` data you want to pass as along (e.g. text, JSON string, etc.)    |

>caption Example

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
</telerik:RadAjaxManager>

<telerik:RadButton runat="server" ID="RadButton1" Text="Make an AJAX Request" AutoPostBack="false" OnClientClicked="OnClientClicked" />

<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
    <script>
        function OnClientClicked(){
            var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
            // Trigger AJAX request without parameter
            ajaxManager.ajaxRequest('');

            // Trigger AJAX request with parameter
            ajaxManager.ajaxRequest('MyStringValue');

            // Trigger AJAX request with JSON string as parameter
            // JSON Object
            var jsonObject = {
                "field1": "value1",
                "field2": "value2",
                "field3": "value3",
            }
            // JSON String
            var jsonString = JSON.stringify(jsonObject);
            // Send JSON string as parameter
            ajaxManager.ajaxRequest(jsonString);
        }
    </script>
</telerik:RadScriptBlock>
````
````C#
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
}
````
````VB
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
End Sub
````

>note If you send a **JSON** string, you can deserialize it to an object, see [How to serialize and deserialize (marshal and unmarshal) JSON in .NET](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/how-to) and [Deserialize an Object - Newtonsoft](https://www.newtonsoft.com/json/help/html/deserializeobject.htm)

## Access the values on Server

Upon making an AJAX Request the AjaxManager triggers its [AjaxRequest]({%slug ajaxmanager/server-side-programming/events/onajaxrequest%}) Server-side event where the `e.Argument` will contain the parameter values.

>caption Example

````C#
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
    RadAjaxManager ajaxManager = (RadAjaxManager)sender;
    
    // MyStringValue
    // '{\"field1\":\"value1\",\"field2\":\"value2\",\"field3\":\"value3\"}
    string myArgument = e.Argument; 


    if (myArgument == "MyString")
    {
        // do something
    }else
    {
        // In case deserializing JSON object
        try
        {
            // Deserialize myArgument
            // do the rest
        }
        catch (Exception ex)
        {
            // Handle the exception
            // or
            // send and alert back to the client using AjaxManager
            ajaxManager.Alert(string.Format("Error: {0}\n{1}", ex.Message, "Please review the JSON string and ensure it corresponds to the Object structure you want to Deserialize into."));
        }
    }
}
````
````VB
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
    Dim ajaxManager As RadAjaxManager = CType(sender, RadAjaxManager)
    Dim myArgument As String = e.Argument

    If myArgument = "MyString" Then
        'do something
    Else
        'In case deserializing JSON object
        Try
            'Deserialize myArgument
            'do the rest
        Catch ex As Exception
            'Handle the exception
            'or
            'send and alert back to the client using AjaxManager
            ajaxManager.Alert(String.Format("Error: {0}" & vbLf & "{1}", ex.Message, "Please review the JSON string and ensure it corresponds to the Object structure you want to Deserialize into."))
        End Try
    End If
End Sub
````

## See Also

- [AjaxRequest server-side event]({%slug ajaxmanager/server-side-programming/events/onajaxrequest%})


