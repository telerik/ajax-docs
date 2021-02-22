---
title: Download New Version
page_title: Download New Version
description: Check our Web Forms article about Download New Version.
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/automatic-latest-version-retrieval
tags: automatic,latest,version,retrieval
published: True
position: 7
---

# Download New Version

This article describes how to use the Telerik Visual Studio extensions to download new versions of the Telerik controls.

The Telerik Visual Studio extensions allow you to keep your projects up-to-date in two simple steps:

1. The extensions automatically notify you about new UI for ASP.NET AJAX versions. Once a new version is available, select the **UPDATE NOW** button to download it.

1. The [Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%}) allows you to quickly upgrade your projects so that they use the new version of the Telerik controls.

## How it Works

Once a day, upon loading a project containing Telerik UI for ASP.NET AJAX controls, the Telerik Visual Studio extensions check for a new version. When a new version is available, you see the **Update Available** dialog:

![Newer Version Available Notification](images/introduction-vsx_latestversionacquirer_newversionnotification.png)

>tip If you've disabled the notifications, you can use the [Options Dialog]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/visual-studio-extensions-options%}) to activate them again.

When you select **UPDATE NOW**:

1. Enter your Telerik credentials in the **Version Update** window.

    ![Latest Version Acquirer: Login](images/introduction-vsx_latestversionacquirer_login.png)

1. Select the type of Telerik controls:

   * Select **PURCHASE** if you have a subscription for the Telerik UI for ASP.NET AJAX controls.

   * Select **DOWNLOAD TRIAL** if you use the free trial.

    ![Latest Version Acquirer: Trial available](images/introduction-vsx_latestversionacquirer_trial.png)

    ![Latest Version Acquirer: Download successful](images/introduction-vsx_latestversionacquirer_success.png)

Once the download succeeds, the latest version of Telerik® UI for ASP.NET AJAX will be available for use in the [Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%}) and the [New Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%}).

>tip To download the latest version of the controls, you can also use the **GET LATEST** button that is available in:
>
> * The [Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%}).
>
> * The [Convert Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/convert-project%}).
>
> * The [New Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%}).

## Package Content

The Telerik Visual Studio extensions download the [hotfix zip files]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%}) that contain the latest Telerik binaries and any resources vital for the Telerik Web Application/Web Site project creation. These zip files get unpacked in the `%appdata%\Telerik\Updates` folder.

>If you find the list of the offered packages too long and you don't need the previous versions, you can close Visual Studio and use Windows Explorer to delete older distributions from the `%appdata%\Telerik\Updates` folder.
