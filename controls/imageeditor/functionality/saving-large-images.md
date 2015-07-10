---
title: Saving Large Images
page_title: Saving Large Images | RadImageEditor for ASP.NET AJAX Documentation
description: Saving Large Images
slug: imageeditor/functionality/saving-large-images
tags: saving,save,large,images,server-side,json,maxjsonlength,maxRequestLength
published: True
position: 5
---

# Saving Large Images

This article explains how to configure the control (and its parent application) in order to enable saving for large images. By default **RadImageEditor** can save images with size up to ~2MB.


## Configure the Maximum Allowed JSON Length in RadImageEditor

When **RadImageEditor** is used in enabled **CanvasMode** (which is used by default) the image inside it is loaded as a JSON string. The default max size of this string can transfer images up to about 2MB otherwise the image is not being saved properly (the image data will not be passed to the server successfully). You can increase this size by configuring the ImageEditor's **MaxJsonLength** property:

````ASP.NET
<telerik:RadImageEditor ID="RadImageEditor1" CanvasMode="Yes" runat="server" ImageUrl="~/Images/image.jpg">
    <EditableImageSettings MaxJsonLength="2147483640" />
</telerik:RadImageEditor>
````

## Configure the Maximum Allowed JSON Length for the Whole Application

You will also need to make sure that the corresponding properties for the whole application also are configured to allow requests with bigger than the default length (e.g. [maxRequestLength](https://msdn.microsoft.com/en-us/library/system.web.configuration.httpruntimesection.maxrequestlength%28v=vs.110%29.aspx) and [maxJsonLength](https://msdn.microsoft.com/en-us/library/vstudio/bb513882%28v=vs.100%29.aspx)):

````ASP.NET
<configuration>
    <system.web>
        <httpRuntime maxRequestLength="2147483640"/>
    </system.web>
    <system.web.extensions>
        <scripting>
            <webServices>
                <jsonSerialization maxJsonLength="2147483640"/>
            </webServices>
        </scripting>
    </system.web.extensions>
</configuration>
````

# See Also

 * [ImageEditor Overview]({%slug imageeditor/overview%})

 * [MSDN HttpRuntimeSection.MaxRequestLength Property](https://msdn.microsoft.com/en-us/library/system.web.configuration.httpruntimesection.maxrequestlength%28v=vs.110%29.aspx)

 * [MSDN jsonSerialization Element](https://msdn.microsoft.com/en-us/library/vstudio/bb513882%28v=vs.100%29.aspx)
