---
title: Accessing RadControls in the master pages of Visual Studio from inner aspx/ascx pages
description: Accessing RadControls in the master pages of Visual Studio from inner aspx/ascx pages. Check it now!
type: how-to
page_title: Accessing RadControls in the master pages of Visual Studio from inner aspx/ascx pages
slug: common-accessing-radcontrols-in-the-master-pages-of-visual-studio-from-inner-aspx-ascx-pages
res_type: kb
---


## HOW-TO  
Access RadControls in the master pages of Visual Studio from inner aspx/ascx pages  
   
   
## SOLUTION    
 The ASP.NET Web Forms framework adds a specific type of page that may be used in your VS.NET projects - the master page. It acts as a common template to all your project web forms. If you need to have a RadControl in the master page and access it from a web form that uses the master page apply the following syntax:  
   
````C#
using System;  
using System.Data;  
using System.Configuration;  
using System.Collections;  
using System.Web;  
using System.Web.Security;  
using System.Web.UI;  
using System.Web.UI.WebControls;  
using System.Web.UI.WebControls.WebParts;  
using System.Web.UI.HtmlControls;  
using Telerik.Web.UI;  
 
public partial class _Default : System.Web.UI.Page  
{  
    protected void Page_Load(object sender, EventArgs e)  
    {  
        RadTabStrip myRadTabStrip = (RadTabStrip)this.Master.FindControl("RadTabStrip1");  
    }  
}  
 
````
````VB
Imports System  
Imports System.Data  
Imports System.Configuration  
Imports System.Collections  
Imports System.Web  
Imports System.Web.Security  
Imports System.Web.UI  
Imports System.Web.UI.WebControls  
Imports System.Web.UI.WebControls.WebParts  
Imports System.Web.UI.HtmlControls  
Imports Telerik.Web.UI  
 
Public Partial Class _Default  
    Inherits System.Web.UI.Page  
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)  
        Dim myRadTabStrip As RadTabStrip = DirectCast(Me.Master.FindControl("RadTabStrip1"), RadTabStrip)  
    End Sub 
End Class 
````
 

   