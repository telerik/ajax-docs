---
title: Localization
page_title: Localization | RadSpell for ASP.NET AJAX Documentation
description: Localization
slug: spell/accessibility-and-internationalization/localization
tags: localization
published: True
position: 3
---

# Localization

**RadSpell** could be easily localized by switching the **Language** property. This will affect the dialog labels, buttons, and error messages, not the spellchecking language.

The default installation of **RadSpell** comes with localization files for English, French and German languages. If you want to localize it for your specific language (Hebrew for example) you need to create new localization file. You can also check the [Localization section of the Code Library](https://www.telerik.com/community/code-library/aspnet-ajax/localization.aspx) to see if someone has already posted the language pack you are looking for.

Since localization is done in the standard ASP.NET way with Global Resources you need to copy the **.resx** files for **RadSpell** to your **App_GlobalResources** folder. You can find the built-in language packs in your Telerik UI installation folder (usually C:\Program Files [(x86) if on a 64bit Windows]\Telerik\UI for ASP.NET AJAX [QX YYYY]\App_GlobalResources ). You need to copy the **RadSpell.Dialog.resx** file along with the language specific files you are going to use (for example - RadSpell.Dialog.de-DE.resx).
