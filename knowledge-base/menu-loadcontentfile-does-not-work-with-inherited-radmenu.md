---
title: LoadContentFile does not work with inherited RadMenu
description: LoadContentFile does not work with inherited RadMenu. Check it now!
type: how-to
page_title: LoadContentFile does not work with inherited RadMenu
slug: menu-loadcontentfile-does-not-work-with-inherited-radmenu
res_type: kb
---


 
## PROBLEM
 
LoadContentFile does not work with inherited RadMenu.
 
## SOLUTION
 
The RadMenu for ASP.NET Ajax uses the built-in .NET XML serialization, which
relies on the **XmlRoot** attribute. If your custom class does not have this attribute, an exception will occur. You should modify your source like:  
   
````C#
using Telerik.Web.UI;
using System.Xml.Serialization;

namespace Tuldi
{
    [XmlRoot("Menu")]
    public class customMenu : RadMenu
    {
    }
}
````
````VB
Imports Telerik.Web.UI 
Imports System.Xml.Serialization 
 
Namespace Tuldi 
 
    <XmlRoot("Menu")> _ 
    Public Class customMenu 
        Inherits RadMenu 
    End Class 
End Namespace
````
 

   