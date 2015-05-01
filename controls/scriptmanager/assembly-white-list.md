---
title: Assembly White List
page_title: Assembly White List | RadScriptManager for ASP.NET AJAX Documentation
description: Assembly White List
slug: scriptmanager/assembly-white-list
tags: assembly,white,list
published: True
position: 6
---

# Assembly White List



## 

Below, you can find the answers of some questions related to the assembly whitelist and why you should use it:

**Q:** What is assembly white list?

**A:** Assembly white is a list of assemblies defined by the developer, which can be used by RadScriptManager for cross checking the assemblies that are about to be loaded through the Telerik.Web.UI.WebResource.axd handler.



**Q:** Why should I use it?

**A:** You may want to use assembly whitelist if you want to be 100% sure that malicious requests cannot load unwanted assemblies on the server.



**Q:** How can I set assembly whitelist?

**A:** You can either use the AssemblyWhiteList collection of RadScriptManager or use the Assembly White List provider that we provide. The provider will look into a specific file, pointed by the developer, which contains the fully qualified names of the assemblies to be put in the whitelist.



**Q:** Can I create my own provider, to obtain the list, for example, from a DCOM permission list?

**A:** Yes you can. Simply inherit our base provider and implement the abstract methods.
