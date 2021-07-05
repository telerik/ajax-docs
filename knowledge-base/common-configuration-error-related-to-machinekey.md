---
title: Configuration Error related to MachineKey
description: Configuration Error related to MachineKey. Check it now!
type: how-to
page_title: Configuration Error related to MachineKey
slug: common-configuration-error-related-to-machinekey
res_type: kb
---


### PROBLEM

An error similar to the following is thrown, and it points to the `<machineKey>` section under `<system.web>` in your *web.config*:

**When using <machineKey compatibilityMode="Framework45" /> or the MachineKey.Protect and MachineKey.Unprotect APIs, the 'validation' attribute must be one of these values: SHA1, HMACSHA256, HMACSHA384, HMACSHA512, or alg:[KeyedHashAlgorithm].**

### DESCRIPTION

The error indicates that code in the application attempted to use `MachineKey.Protect()` or `MachineKey.Unprotect()` which are cryptographic operations built-in .NET 4.5. They are, however, available for modern algorighms only, and the most common cause for the error is that the machine key set on the web application (or on the server) uses an older algorithm like *Tripple-DES*.

Some Telerik controls use cryptographic operations that can fall back to the machine key protection and can thus cause such errors. At the time of writing, they are RadAsyncUpload, RadCloudUpload, RadEditor, RadSpell, RadImageEditor, RadScriptManager, RadStyleSheetManager.

For example, a machine key like the following will cause such an error:

````web.config
<machineKey validationKey="..." decryption="3DES" compatibilityMode="Framework20SP2" decryptionKey="..." validation="3DES" />
````

### SOLUTION

There are two solutions:

- **Option 1**: Add the three Telerik-specific encryption keys to the web.config. You can find details on doing that in the [Mandatory Additions to the web.config]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig) article. Telerik recommends doing this even if you also follow Option 2.
- **Option 2**: Use a newer machine key algorithm, like HMACSHA256 and AES. Note that this may change salts and hashes across the application and is a decision that needs to be evaluated by the application developers carefully.



