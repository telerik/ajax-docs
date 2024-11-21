---
title: ASP.NET Web Services - Quick Walkthrough
description: Quick walkthrough creating ASP.NET Web Services that can be used by various Web components to make HTTP requests.
type: how-to
page_title: ASP.NET Web Services - Quick Walkthrough
slug: common-quick-walkthrough-asp-net-web-services
position:
tags: quick, walkthrough, asp.net, web, services, asmx, wcf, pagemethods, webmethods
res_type: kb
---

Web services are components on a Web server that a client application can call by making HTTP requests across the Web. ASP.NET enables you to create custom Web services or to use built-in application services, and to call these services from any client application. For more details, check out the official documentation at [Microsoft Learn - Using ASP.NET Web Services](https://learn.microsoft.com/en-us/previous-versions/aspnet/t745kdsh(v=vs.100)).

This article provides a quick walkthrough for creating ASP.NET Web Services.

- [XML Web Service (ASMX)](#xml-web-service-asmx)
- [WCF Service (SVC)](#wcf-service-svc)
- [PageMethods](#pagemethods)

## XML Web Service (ASMX)

### Setup

To create an XML Web Service, create a file with the `.asmx` extension e.g. `WebService.asmx`. 

In Visual Studio you can Right-click on the Project then Click **Add** > **Add New Item**. In the Add New Item window, search for `ASXM` and select the file based on your Language (C#/VB) then click **Add**. 

This will create two files, `WebService.asmx` file in the project root directory, and a WebService.cs file in the `App_Code` directory.

>caption ~/WebService.asmx

```ASP.NET C#
<%@ WebService Language="C#" CodeBehind="~/App_Code/WebService.cs" Class="WebService" %>
````
```ASP.NET VB
<%@ WebService Language="VB" CodeBehind="~/App_Code/WebService.vb" Class="WebService" %>
````

>caption ~/App_Code/WebService.(cs/vb)

````C#
using System;
using System.Collections.Generic;
using System.Data;
using System.Web.Services;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{
    [WebMethod]
    public List<MyClass> MyMethod()
    {
        return new List<MyClass>()
        {
            new MyClass(){Id = 1, Title = "My Title 1" },
            new MyClass(){Id = 2, Title = "My Title 2" },
            new MyClass(){Id = 3, Title = "My Title 3" }
        };
    }

    public class MyClass
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
````
````VB
Imports System.Collections.Generic
Imports System.Web
Imports System.Web.Services
Imports System.Web.Services.Protocols

<System.Web.Script.Services.ScriptService()>
<WebService(Namespace:= "http://tempuri.org/")> _
<WebServiceBinding(ConformsTo:= WsiProfiles.BasicProfile1_1)> _
<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Public Class WebService
     Inherits System.Web.Services.WebService

    <WebMethod()>
    Public Function MyMethod() As List(Of [MyClass])
        Return New List(Of [MyClass])() From {
            New [MyClass]() With {
                .Id = 1,
                .Title = "My Title 1"
            },
            New [MyClass]() With {
                .Id = 2,
                .Title = "My Title 2"
            },
            New [MyClass]() With {
                .Id = 3,
                .Title = "My Title 3"
            }
        }
    End Function

    Public Class [MyClass]
        Public Property Id As Integer
        Public Property Title As String
    End Class

End Class
````

### Usage

Any public method attributed with `[WebMethod]` will turn into a Service and can be called from the Web by their name e.g. `WebService.asmx/MyMethod` and return the response serialized to `XML` by default. You can of course, request `JSON` by specifying the `Content-Type` in the Request Headers.

>caption Requesting `JSON` from the WebService.

````JavaScript
function myfunction() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.responseText);
        }
    }
    xhr.open('POST', 'WebService.asmx/MyMethod', true);
    xhr.setRequestHeader('Content-Type', 'application/json'); // Specify the Content-Type for the Request Header.
    xhr.send(null);
}
````

>caption Result

````JSON
{
  "d": [
    {
      "__type": "WebService+MyClass",
      "Id": 1,
      "Title": "My Title 1"
    },
    {
      "__type": "WebService+MyClass",
      "Id": 2,
      "Title": "My Title 2"
    },
    {
      "__type": "WebService+MyClass",
      "Id": 3,
      "Title": "My Title 3"
    }
  ]
}
````

## WCF Service (SVC)

### Setup

To create an WCF Service, create a file with the `.svc` extension e.g. `Service.svc`. 

In Visual Studio you can Right-click on the Project then Click **Add** > **Add New Item**. In the Add New Item window, search for `WCF` and select the file based on your Language (C#/VB) then click **Add**. 

This will create two files, `Service.svc` file in the project root directory, and a `Service.(cs/vb)` file in the `App_Code` directory.


>caption ~/Service.svc

````ASP.NET C#
<%@ ServiceHost Language="C#" Debug="true" Service="Service" CodeBehind="~/App_Code/Service.cs" %>
````
````ASP.NET VB
<%@ ServiceHost Language="VB" Debug="true" Service="Service" CodeBehind="~/App_Code/Service.vb" %>
````

>caption ~/App_code/Service.(cs/vb)

````C#
using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Activation;

[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class Service
{
    // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
    [OperationContract]
    public List<MyClass> MyMethod()
    {
        return new List<MyClass>()
        {
            new MyClass(){ Id = 1, Title = "My Title 1" },
            new MyClass(){ Id = 2, Title = "My Title 2" },
            new MyClass(){ Id = 3, Title = "My Title 3" }
        };
    }

    public class MyClass
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
````
````VB
Imports System
Imports System.Collections.Generic
Imports System.ServiceModel
Imports System.ServiceModel.Activation

<ServiceContract([Namespace]:="")>
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)>
Public Class Service
    <OperationContract>
    Public Function MyMethod() As List(Of [MyClass])
        Return New List(Of [MyClass])() From {
            New [MyClass]() With {
                .Id = 1,
                .Title = "My Title 1"
            },
            New [MyClass]() With {
                .Id = 2,
                .Title = "My Title 2"
            },
            New [MyClass]() With {
                .Id = 3,
                .Title = "My Title 3"
            }
        }
    End Function

    Public Class [MyClass]
        Public Property Id As Integer
        Public Property Title As String
    End Class
End Class
````

WCF Service also requires a few additions in the `web.config` file. Please double-check and ensure you have the following entries. 

>note Normally Visual Studio will add these records if creating the WCF Service from template, but it is worth double-checking.

````web.config
<?xml version="1.0"?>
<configuration>
  <system.serviceModel>
    <behaviors>
      <endpointBehaviors>
        <behavior name="ServiceAspNetAjaxBehavior">
          <enableWebScript />
        </behavior>
      </endpointBehaviors>
    </behaviors>
    <serviceHostingEnvironment aspNetCompatibilityEnabled="true"
      multipleSiteBindingsEnabled="true" />
    <services>
      <service name="Service">
        <endpoint address="" behaviorConfiguration="ServiceAspNetAjaxBehavior"
          binding="webHttpBinding" contract="Service" />
      </service>
    </services>
  </system.serviceModel>
</configuration>
````

### Usage

In WCF Service, methods need to be attributed with `[OperationContract]`, and similarly to the XML WebService, they can be called from the Web by their name e.g. `Service.svc/MyMethod`. By default WCF Service returns `JSON`.

>caption Requesting `JSON` from the WCF Service.

````JavaScript
function myfunction() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
    }
    xhr.open('POST', 'WebService.asmx/MyMethod', true);
    xhr.send(null);
}
````

>caption Result

````JSON
{
    "d": [
        {
            "__type": "Service.MyClass:#",
            "Id": 1,
            "Title": "My Title 1"
        },
        {
            "__type": "Service.MyClass:#",
            "Id": 2,
            "Title": "My Title 2"
        },
        {
            "__type": "Service.MyClass:#",
            "Id": 3,
            "Title": "My Title 3"
        }
    ]
}
````

## PageMethods

PageMethods are essentially Web Service methods, with the difference that you can place them in the CodeBehind file of your ASP.NET WebForms Pages.

### Setup

To be able to call static page methods as Web methods set the `EnablePageMethods` attribute of the `ScriptManager` control to `true`.

````ASP.NET
<asp:ScriptManager runat="server" EnablePageMethods="true">
</asp:ScriptManager>
````

In the CodeBehind file of your WebForms Page, create the static methods and add the `[WebMethod]` attribute to them.

````C#
public partial class Default : System.Web.UI.Page
{
    [WebMethod]
    public static List<MyClass> MyMethod()
    {
        return new List<MyClass>()
        {
            new MyClass(){ Id = 1, Title = "My Title 1" },
            new MyClass(){ Id = 2, Title = "My Title 2" },
            new MyClass(){ Id = 3, Title = "My Title 3" }
        };
    }

    public class MyClass
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
````
````VB
Public Partial Class Default
    Inherits System.Web.UI.Page

    <WebMethod>
    Public Shared Function MyMethod() As List(Of [MyClass])
        Return New List(Of [MyClass])() From {
            New [MyClass]() With {
                .Id = 1,
                .Title = "My Title 1"
            },
            New [MyClass]() With {
                .Id = 2,
                .Title = "My Title 2"
            },
            New [MyClass]() With {
                .Id = 3,
                .Title = "My Title 3"
            }
        }
    End Function

    Public Class [MyClass]
        Public Property Id As Integer
        Public Property Title As String
    End Class
End Class
````

### Usage

Public static methods located in the CodeBehind file of the WebForms pages will automatically be configured by the ScriptManager and exposed on the client under the `PageMethods` object. To call a method, will need to call `PageMethods.MethodName` function.

>caption Calling PageMethods from JavaScript.

````JavaScript
function myfunction() {
    PageMethods.MyMethod(function(response){
        console.log(response);
    });
}
````

>caption Result

````JSON
{
    "d": [
        {
            "__type": "Default+MyClass",
            "Id": 1,
            "Title": "My Title 1"
        },
        {
            "__type": "Default+MyClass",
            "Id": 2,
            "Title": "My Title 2"
        },
        {
            "__type": "Default+MyClass",
            "Id": 3,
            "Title": "My Title 3"
        }
    ]
}
````