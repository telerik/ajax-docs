---
title: Displaying a Binary Image in RadAvatar for ASP.NET AJAX
description: Learn how to display a binary image from a SQL datasource in the RadAvatar control for ASP.NET AJAX.
type: how-to
page_title: How to Display a Binary Image in RadAvatar for ASP.NET AJAX
slug: display-binary-image-radavatar-aspnet-ajax
tags: binary-image, RadAvatar, ASP.NET AJAX
res_type: kb
---

# Environment
| Property | Value |
|----------|-------|
| Product | RadBinaryImage for ASP.NET AJAX |

# Description
I want to display a binary image from a SQL datasource in the RadAvatar control for ASP.NET AJAX instead of providing a URL for the image.

# Solution
To display a binary image from a SQL datasource in the RadAvatar control, you need to serve the binary image data through a handler or a similar endpoint that can convert the binary data into a stream that the browser can interpret as an image. Here are the steps to achieve this:

1. Implement a generic handler (ImageHandler.ashx) in your project:

```csharp
<%@ WebHandler Language="C#" Class="ImageHandler" %>

using System;
using System.Web;

public class ImageHandler : IHttpHandler {
    
    public void ProcessRequest(HttpContext context) {
        // Dummy binary data for an image, in a real scenario, fetch from your database
        byte[] imageData = Convert.FromBase64String("iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAB40lEQVR4nO2T21EEMQwEr8g/DeI8PigVLMXB+qkZuTsBS2714wEAAAAAAAAAMJ3n++OZPcMM3rIHgCslhEQdFSopIaQS9kJ+VuFeib2QalgLeVWDcyXWQipiK+S/ClwrsRVSFUshd6/fsRJLIZWxE9J69W6V2AmpjpWQ3mt3qsRKyAnYCBm9cpdKbIScgoWQWdftUImFkJOQFzL7qtUrkRdyGtJCVl2zciXSQk5EVsjqK1atRFbIqUgK2XW9ipVICjkZOSG7r1atEjkhpyMlJOtalSqREgJCQrKvNPv9QEYIfCIhROU6FeaQEAJfpAtRuMrvZM+TLgSupArJvsZXZM5FIWKk\r\n"); // A small orange triangle

        context.Response.ContentType = "image/png";
        context.Response.BinaryWrite(imageData);
    }

    public bool IsReusable {
        get {
            return true;
        }
    }
}
```

2. Configure the RadAvatar control (Default.aspx) to use the image handler:

```html
<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager runat="server" />
        <img src="ImageHandler.ashx" alt="Image" />
        <asp:Image ID="Image1" runat="server" ImageUrl="ImageHandler.ashx" />
        <telerik:RadAvatar runat="server" ID="RadAvatar1" Image="ImageHandler.ashx" Type="Image"></telerik:RadAvatar>
    </form>
</body>
</html>
```

That's it! Now the RadAvatar control will display the binary image from the SQL datasource using the ImageHandler endpoint. Please note that in the code example, a dummy binary image data is used, and in a real scenario, you would fetch the binary image data from your database.

For more information, you can refer to the following StackOverflow post: [How to load image from binary data in Asp.Net?](https://stackoverflow.com/questions/4425951/how-to-load-image-from-binary-data-in-asp-net)
