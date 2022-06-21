---
title: Accessing images from another web application on the same server
description: There are two different web applications - one is Windows authentication and RadEditor in it to upload and insert images to create posts, and the other is Forms authentication which consumes the produced content to show the images. Check the article to learn how to setup the apps so that they can access and display the images.
type: how-to
page_title: Accessing images from another web application on the same server
slug: editor-access-images-from-another-web-app-on-the-same-server
position: 
tags: 
ticketid: 1568602
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
There are two different web applications - one is Windows authentication with the RadEditor in it to upload and insert images to create posts, and the other is Forms authentication which consumes the produced content to show the images. 

* Application #1 (Win authentication) uses a RadEditor to create "posts" or "articles" that could have images within them.  Those images are currently saved/uploaded to a directory that resides in the IIS root.

* Application #2 (Forms authentication) loads the HTML from these posts created by App #1 into a Literal Control.  Whenever App #2 loads a post that contains an image, the browser asks for domain credentials.  The image will not show unless you supply proper login info.  The rest of the HTML from the post will load fine - just not the images.

Giving permission to the app pool, IIS_USRS, IUSR - even full control do not help. Tshere is no difference whether this folder has proper permissions, or none... it still prompts for credentials.

How to allow App #2 to access these images without requiring credentials?

## Solution
Here is what to do in order to resolve the credentials issue:
1. Create physical directory in a drive separate from either application.
2. Create virtual directory in both applications, pointing to the above physical directory.
3. Point the RadEditor ImageManager to this virtual directory.
4. When loading the content in app #2 (the app that does not host the RadEditor), from the IMG SRC attribute in the content, strip out the beginning of the path pointing to the root application name, leaving only the virtual directory folder name:
   * Example:  RadEditor produces this path:  "/App1/VirtualDirectory/FileName.xxx"
   * Modified to:   "VirtualDirectory/FileName.xxx"
5. App #2 now has access to the image.


More info for the stripping in point 4: If the application that reads the RadEditor posts is driven by a SQL Server View and Stored Procedure, then you simply have to modify the view with a CASE and REPLACE statement:

````SQL
CASE WHEN CHARINDEX('/App1/VirtualDirectory/', RadEditorContentFieldFromDB) > 0

THEN REPLACE(RadEditorContentFieldFromDB, '/App1/VirtualDirectory/', 'VirtualDirectory/')

ELSE RadEditorContentFieldFromDB 

END AS RadEditorContentFieldFromDB
````

Another stripping techniques is to use the String.Replace manipulation on the server before loading the saved content in the page.

## See Also
* [Upload Images to the Server]({%slug editor/functionality/dialogs/examples/upload-images-to-the-server%})
* [Upload Files to a Shared Drive]({%slug editor/functionality/dialogs/examples/upload-files-to-a-shared-drive%})
    
   