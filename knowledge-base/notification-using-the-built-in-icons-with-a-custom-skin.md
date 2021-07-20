---
title: Using the built-in icons in RadNotification with a custom skin
description: Using the built-in icons in RadNotification with a custom skin. Check it now!
type: how-to
page_title: Using the built-in icons in RadNotification with a custom skin
slug: notification-using-the-built-in-icons-with-a-custom-skin
res_type: kb
---

## How to
   

Use the built-in **ContentIcon** and **TitleIcon** when you are not using one of the built-in skins (i.e. with a custom skin). The article applies to the Classic RenderMode only.  
   
## Description
   

The built-in icons work only for the built-in skins, as they are designed to match the look and feel of the specific skin. This means that setting them via shorthand strings like **ContentIcon="deny"** will *not* work if you are using a custom skin.  

   
## Solution
   

The easiest approach is to slice the icons Telerik provides and use them as static resources. Most skins use a common icon that you can find in [UI for ASP.NET AJAX installation folder]\Skins\Common\Notification, and Black, Vista and Windows7 have special icons under UI for ASP.NET AJAX installation folder]\Skins\[SkinName]\Notification.  
   

Alternatively, you can set the **ContentIcon** and **TitleIcon** URLs to point to the required images from the **Telerik.Web.UI.Skins assembly** like you would with a custom icon of your choice. To do so you can utilize the **GetWebResourceUrl()** method of the **SkinRegistrar** class, and add some CSS to mimic the built-in rules for the icons:  
   
   

 1. Mimic the CSS that the **RadNotification** outputs for its built-in icons:  
 
 ````CSS
.RadNotification_MyCustomSkin .rnCustomIcon
 {
     clip: rect(16px, 32px, 48px, 0pt) !important;
     position: absolute !important;
     top: -17px !important;
     margin-top: 16px !important;
 }
 /*Fix for IE7*/
 ** + HTML .RadNotification_MyCustomSkin .rnCustomIcon
 {
     width: 32px !important;
 }
 ** + HTML .RadNotification_MyCustomSkin .rnCustomIcon img
 {
     top: -16px !important;
     position: absolute !important;
 }
 ````

 2. Add a RadNotification instance to your page. For example:  
 
 ````ASPX
<telerik:RadNotification ID="RadNotification1" runat="server" EnableEmbeddedSkins="false" Skin="MyCustomSkin"
    Position="Center" VisibleOnPageLoad="true" AutoCloseDelay="0" Width="200px" Height="100px">
</telerik:RadNotification>
 ````

 3. Get the webresource URL for the icon:  

 ````C#
protected void Page_Load(object sender, EventArgs e)
 {
     //note: this code is used for demonstration purposes so you can see the logic of  building the webresource name
     //you can simplify and refactor it for your actual project, or you can simply slice the  sprites Telerik provides and use them as static resources
     if (!IsPostBack)
     {
         string baseSkin = "Default"; //set the built-in skin you want to use as base. Note  the casing - the first letter must be capital
         string icon = "info"; //use one of the built-in ones (info, delete, deny, edit, ok,  warning): http://www.telerik.com/help/aspnet-ajax/notification-embedded-icons.html
         string skinResource = baseSkin;
         //three skins have their own special icons, the rest are common
         switch (skinResource)
         {
             case "Black":
                 break;
             case "Vista":
                 break;
             case "Windows7" :
                 break;
             default:
                 skinResource = "Common";
                 break;
         }
         //build the final resource name
         skinResource = string.Format("Telerik.Web.UI.Skins.{0}.Notification.{1}.png",  skinResource, icon);
         //you can use different icons, just change the icon string to the desired one
         RadNotification1.TitleIcon = Telerik.Web.SkinRegistrar.GetWebResourceUrl(this,  typeof(Telerik.Web.UI.RadNotification), skinResource);
         RadNotification1.ContentIcon = Telerik.Web.SkinRegistrar.GetWebResourceUrl(this,  typeof(Telerik.Web.UI.RadNotification), skinResource);
     }
 }
 ````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    'note: this code is used for demonstration purposes so you can see the logic of building the webresource name
    'you can simplify and refactor it for your actual project, or you can simply slice the sprites Telerik provides and use them as static resources
    If Not IsPostBack Then
        Dim baseSkin As String = "Default"
        'set the built-in skin you want to use as base. Note the casing - the first letter must be capital
        Dim icon As String = "info"
        'use one of the built-in ones (info, delete, deny, edit, ok, warning): http://www.telerik.com/help/aspnet-ajax/notification-embedded-icons.html
        Dim skinResource As String = baseSkin
        'three skins have their own special icons, the rest are common
        Select Case skinResource
            Case "Black"
                Exit Select
            Case "Vista"
                Exit Select
            Case "Windows7"
                Exit Select
            Case Else
                skinResource = "Common"
                Exit Select
        End Select
        'build the final resource name
        skinResource = String.Format("Telerik.Web.UI.Skins.{0}.Notification.{1}.png", skinResource, icon)
        'you can use different icons, just change the icon string to the desired one
        RadNotification1.TitleIcon = Telerik.Web.SkinRegistrar.GetWebResourceUrl(Me, GetType(Telerik.Web.UI.RadNotification), skinResource)
        RadNotification1.ContentIcon = Telerik.Web.SkinRegistrar.GetWebResourceUrl(Me, GetType(Telerik.Web.UI.RadNotification), skinResource)
    End If
End Sub

 ````
  

More information on how to create a custom skin is available in [this help article]({%slug notification/appearance-and-styling/create-a-custom-skin%}).


