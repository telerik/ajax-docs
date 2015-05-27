---
title: Change the RadEditor Features Scope
page_title: Change the RadEditor Features Scope | UI for ASP.NET AJAX Documentation
description: Change the RadEditor Features Scope
slug: sharepoint/2010/radeditor-web-part/configuration/change-the-radeditor-features-scope
tags: change,the,radeditor,features,scope
published: True
position: 0
---

# Change the RadEditor Features Scope





Q: How do I change the scope of the RadEditor features so they can be activated from the Site Collection features.

A: You need to remove the features, change their scope, and finally install them again:

1. Open a command prompt on the server and execute the following commands to remove the features:

	**`stsadm -o uninstallfeature -name RadEditorFeatureRichHtml -force`**

	You should see `Operation completed successfully.`

	**`C:\>stsadm -o uninstallfeature -name RadEditorFeatureRichText -force`**

	You should see `Operation completed successfully.`

1. Open the feature definition files and change the scope attribute from "Web" to "Site". The files you need to edit are:

	**`C:\Program Files\Common Files\Microsoft Shared\web server extensions\14\TEMPLATE\FEATURES\RadEditorFeatureRichHtml\Feature.xml`**

	and

	**`C:\Program Files\Common Files\Microsoft Shared\web server extensions\14\TEMPLATE\FEATURES\RadEditorFeatureRichText\Feature.xml`**

	Open them with a text editor and change the line:

	**`Scope="Web"`**

	to

	**`Scope="Site"`**

	Save the changed .xml files

1. Install the features again:

	**`stsadm -o installfeature -name RadEditorFeatureRichHtml -force`**

	You should see `Operation completed successfully.`

	**`stsadm -o installfeature -name RadEditorFeatureRichText -force`**

	You should see `Operation completed successfully.`
