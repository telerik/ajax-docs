---
title: Installation Troubleshooting
page_title: Installation Troubleshooting | UI for ASP.NET AJAX Documentation
description: Installation Troubleshooting
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/installation-troubleshooting
tags: installation,troubleshooting
published: True
position: 0
---

# Installation Troubleshooting



This article lists common installation problems and their solutions. You can go through the list below to see if your case is described there.You can also use the browser find command (Ctrl+F) to search for the error you get.Here is a list with the main sections:

* [Error message "This installation package could not be opened. Contact the Application vendor to verify that this is a valid windows installer package"](#error-message-this-installation-package-could-not-be-opened-contact-the-application-vendor-to-verify-that-this-is-a-valid-windows-installer-package)

* ["Installation Error" screen during the installation](#installation-error-screen-during-the-installation)

* [Error message: "A Network Error Occurred While Attempting to Read from the File"](#error-message-a-network-error-occurred-while-attempting-to-read-from-the-file)

* [Error message: "There is a problem with this Windows Installer package. A program required for this install to complete could not be run. Contact your support personnel or package vendor."](#error-message-there-is-a-problem-with-this-windows-installer-package-a-program-required-for-this-install-to-complete-could-not-be-run-contact-your-support-personnel-or-package-vendor)

## Error message "This installation package could not be opened. Contact the Application vendor to verify that this is a valid windows installer package"

**Problem:**

**Error message "This installation package could not be opened. Contact the Application vendor to verify that this is a valid windows installer package"**

**Reason:**

There are two possible reasons for this error to happen:

* The installation file got corrupt during the download

* The installation file was downloaded to a compressed folder and/or the temp folder on the machine is compressed

**Suggested solution:**

Log in to your Telerik account and download the Telerik® UI for ASP.NET Ajax installer again. An md5 hash sum calculator can be used to verify the new download is not corrupt (the [fciv](http://support.microsoft.com/default.aspx/kb/841290/) utility is such a tool). Download the installation file to a non-compressed drive.

## "Installation Error" screen during the installation

**Problem:**

**"Installation Error" screen during the installation.**

**Reason:**

The installer has encountered an unexpected error during the execution. The error could be caused by a circumstance on the particular machine.

**Suggested solution:**

Run the installation with logging enabled and send the log file via a support ticket for analysis. The log file helps detecting the problem quicker. You'll get either a suggestion on how to fix the problem, or the installer will be fixed. To start the installer with logging enabled, please, follow the steps below:

* Open a command prompt;

* Navigate to the folder, where the Telerik® UI for ASP.NET Ajax installer is located;

* Run the following command:`msiexec /i [ControlsInstallation.msiFileName] /limev Telerik.Web.UI.Install.log`



*Identified occurrences:*

* The Visual Studio reset performed by the installer did not succeed. On some machines the `[VSInstallDir]\Common7\IDE\devenv.exe /setup` command fails when called by the installer (it might not fail when the command run directly from the command-line). Steps that could help avoid this problem:

	* Delete all files in the *[VSInstallDir]\Common7\IDE\ProjectTemplatesCache*
	
	* Delete all files in the *[VSInstallDir]\Common7\IDE\ItemTemplatesCache*
	
	* Start a Visual Studio instance and run the installer without closing it

	* run the *[VSInstallDir]\Common7\IDE\devenv.exe /setup* command manually

* The automatic installation of ASP.NET AJAX Extensions 1.0 (performed by the Telerik® UI for ASP.NET Ajax installer as a prerequisite for the .NE 2.0 assemblies) did not succeed. The workaround is to download [ASP.NET AJAX 1.0](http://www.microsoft.com/downloads/details.aspx?FamilyID=ca9d90fa-e8c9-42e3-aa19-08e2c027f5d6&displaylang=en) and install it manually. Run the Telerik® UI for ASP.NET Ajax installer afterwards.



Please, check the [Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%}) section for post-installation problems.

## Error message: "A Network Error Occurred While Attempting to Read from the File"

**Problem:**

**Error message: "A Network Error Occurred While Attempting to Read from the File"**

**Reason:**

Attempt to modify or repair through an installation file with name different from the original.

Example Scenario:

* **Telerik.Web.UI_2011_1_215_Dev (1).msi** is installed;

* A repair or modify on the installation is initiated from **Telerik.Web.UI_2011_1_215_Dev.msi**;

* The wizard fails and the error message is shown.

**Suggested solution:**

Reinstall the product using the correct installation package

* Open **Add or Remove Programs** from *Control Panel;*

* Remove product installed by *Telerik.Web.UI_2011_1_215_Dev (1).msi*;

* Install *Telerik.Web.UI_2011_1_215_Dev.msi*;

## Error message: "There is a problem with this Windows Installer package. A program required for this install to complete could not be run. Contact your support personnel or package vendor."

**Problem:**

**Error message: "There is a problem with this Windows Installer package. A program required for this install to complete could not be run. Contact your support personnel or package vendor."**

**Reason:**

The Telerik® UI for ASP.NET Ajax offline documentation installation fails due to outdated root certificates ([more information on root certificates](http://support.microsoft.com/kb/931125)).

**Suggested solution 1:**

Install the latest root certificates through Windows Update

**Suggested solution 2:**

Perform a custom install and disable the documentation feature.

**Reason:**

The Telerik® UI for ASP.NET Ajax offline documentation installation fails due to a corrupted Visual Studio 2010 help system.

**Suggested solution 1:**

Resetting the Visual Studio 2010 help system:

1. Open C:\Program Files\Microsoft Help Viewer\v1.0\HelpLibManager.exe.config

1. Set the **FirstTimeRun** value to **True**

1. Open the "Help Library Manager" tool (**Visual Studio main menu -> Help -> Manage Help Settings**)

1. Select **Choose online or local help**

1. Select **I want to use local help**

1. Try viewing the VS 2010 Help (**Visual Studio main menu -> Help -> View Help**)

**Suggested solution 2:**

Perform a custom install and disable the documentation feature.

**Reason:**

Attempting to uninstall Telerik® UI for ASP.NET Ajax after the documentation has been manually removed.

**Suggested solution 1:**

Perform a repair using the original installation package and attempt another uninstall.

**Suggested solution 2:**

Perform a custom install and disable the documentation feature.
