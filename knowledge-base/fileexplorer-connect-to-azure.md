---
title: Connect to Azure
description: Setup Azure FileBrowserContentProvider. Check it now!
type: how-to
page_title: Connect to Azure
slug: fileexplorer-connect-to-azure
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
            <td>RadFileExplorer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## DESCRIPTION 

Connecting the RadFileExplorer control to the Windows Azure Storage

## SOLUTION  

Modify the AppSettings section in the web.config file in order to declare the storage and the container.

````XML
<appSettings>
    <add key="DataConnectionString" value="UseDevelopmentStorage=true"/>
    <add key="TelerikContainer" value="body"/>
</appSettings>
````

* [Azure FileBrowserContentProvider.zip](files/fileexplorer-AzureFileBrowserContentProvider.zip)



