---
title: Change the RadEditor features scope
page_title: Change the RadEditor features scope | UI for ASP.NET AJAX Documentation
description: Change the RadEditor features scope
slug: sharepoint/2007/radeditor-for-moss/configuration/change-the-radeditor-features-scope
tags: change,the,radeditor,features,scope
published: True
position: 4
---

# Change the RadEditor features scope

Q: How do I change the scope of the RadEditor features so they can be activated from the Site Collection features.

A: You need to remove the features, change their scope, and finally install them again. First open a command prompt on the server and execute the following commands to remove the features:

`C:\>stsadm -o uninstallfeature -name RadEditorFeatureRichHtml -force`

Operation completed successfully.

`C:\>stsadm -o uninstallfeature -name RadEditorFeatureRichText -force`

Operation completed successfully.

Then open the feature definition files and change the scope attribute from "Web" to "Site". The files you need to edit are:

**C:\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\FEATURES\RadEditorFeatureRichHtml\Feature.xml**

and

**C:\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE\FEATURES\RadEditorFeatureRichText\Feature.xml**

Open them with a text editor and change the line:

**Scope="Web"**

to

**Scope="Site"**

Save the changed .xml files and install the features again:

`C:\>stsadm -o installfeature -name RadEditorFeatureRichHtml -force`

Operation completed successfully.

`C:\>stsadm -o installfeature -name RadEditorFeatureRichText -force`

Operation completed successfully.
