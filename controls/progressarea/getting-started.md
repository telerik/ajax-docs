---
title: Getting Started
page_title: Getting Started - RadProgressArea
description: Check our Web Forms article about Getting Started.
slug: progressarea/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started



**RadProgressArea** automatically displays a progress dialog when files are uploaded. In addition, you can use it as a progress dialog for any other long process by supplying [custom progress information]({%slug progressarea/custom-progress%}) using the server-side API.

>note The progress dialog appears only if there are files being uploaded or the application supplies custom progress information.
>


In order to use **RadProgressArea**, you must do the following:

1. Register [RadUploadHttpModule and RadUploadProgressHandler]({%slug progressarea/webconfing-configuraton%}) in web.config.

1. Put a **RadProgressManager** control on the Web page. **RadProgressmanager** provides the AJAX mechanism for retrieving progress information from the application and automatically updates all **RadProgressArea** controls on the page.

1. The **RadProgressManager**'s **RefreshPeriod** property lets you control how often the **RadProgressArea** dialog updates during a file upload.

1. Put a **RadProgressArea** control on the Web page.

1. Do one (or both) of the following:

	* Add a **RadUpload**, **FileUpload**, or standard `<input type="file">` element to the Web page.

	* Add code to the codebehind to supply [custom progress information]({%slug progressarea/custom-progress%}).

## Example

The following example shows how to set up a file upload progress indicator to monitor the progress of a file upload process initiated by **RadUpload**.

````ASPNET
<telerik:radupload id="RadUpload1" runat="server" />
<telerik:radprogressarea id="RadProgressArea1" runat="server" />
<telerik:radprogressmanager id="RadProgressManager1" runat="server" />
<asp:Button ID="Button1" runat="server" Text="Submit" />
````



To monitor the progress of any other file upload control, simply replace the **RadUpload** control in the preceding example with a **FileUpload**
 control or `<input type="file">` element.
