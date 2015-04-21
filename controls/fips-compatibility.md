---
title: FIPS Compatibility
page_title: FIPS Compatibility | UI for ASP.NET AJAX Documentation
description: FIPS Compatibility
slug: controls/fips-compatibility
tags: fips,compatibility
published: True
position: 120
---

# FIPS Compatibility



## FIPS

FIPS stands for Federal Information Processing Standard. This standard	imposes some restrictions on the algorithms used for encryption/decryption	and hashing. The operating systems have many different algorithm types,	but only part of them are actually FIPS compliant.

>note Starting from Q3 2011, Telerik UI for ASP.NET AJAX officially supports the FIPS standard. This includes Word and all Excel export formats, but without PDF.
>Please note that starting from Q2 2013 PDF export is FIPS compliant.
>


There are at least two ways to enforce the FIPS compliance:

* Via the security policies:Open Administrative Tools and then go to Local Security Policyapplet (or press WinKey+R and enter 'secpol.msc'). Expand LocalPolicies, Security Options and scroll down to"System cryptography: Use FIPS compliant algorithms for encryption,hashing and signing".

* By editing the corresponding registry key directly:Open the Registry Editor and then expand HKEY_LOCAL_MACHINE,System, CurrentControlSet, Control, Lsa then select theFIPSAlgorithmPolicy key. There, you will find a DWORD valuewhich should be set to 0 (0x00000000) for disabled and 1 for enabled.

Note that in NET 3.5 environment, the default ViewState validation	algorithm (SHA1) is not FIPS compliant. In this case you may need to	change the default algorithms to 3DES as shown below:

````XML
					<machineKey validationKey="AutoGenerate,IsolateApps" 
					     decryptionKey="AutoGenerate,IsolateApps" 
					     validation="3DES" 
					     decryption="3DES" />
````



This is not needed for .NET 4.0 where the default validation is set to HMACSHA256.

>note Setting __<compilation debug="true" />__ inweb.config will cause FIPS exception. You can find a possible workaround here:
>[Visual Studio 2008 cannot debug with FIPS enabled](http://forums.asp.net/t/1265047.aspx)
>


>note FIPS compliant algorithm means that it is supported by the FIPS 140 standard.
>


# See Also

 * [FIPS - Wikipedia](http://en.wikipedia.org/wiki/Federal_Information_Processing_Standard)

 * [FIPS 140 - Wikipedia](http://en.wikipedia.org/wiki/FIPS_140)

 * [machineKey Element (ASP.NET Settings Schema)](http://msdn.microsoft.com/en-us/library/w8h3skw9.aspx)

 * [FIPS 140 Evaluation](http://technet.microsoft.com/en-us/library/cc750357.aspx)

 * [The effects of enabling FIPS in Windows XP and later](http://support.microsoft.com/kb/811833)
