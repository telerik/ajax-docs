---
title: Activate your Telerik License with an Assembly (.dll)
description: Create an Assembly containing your License Key that can be added to the bin folder of Web site projects to activate the Telerik License.
type: how-to
page_title: Activate your Telerik License with an Assembly (.dll)
slug: common-activate-telerik-license-with-assembly
tags: activate,telerik,license,assembly,dll,class library
ticketid: 1678618
res_type: kb
---

## Environment

| Version | Product |
| ---     | ---     |
| 2025 Q1 or later | Telerik UI for ASP.NET AJAX |

## Description

I want to be able to activate the Telerik License without creating classes or adding code to the `App_Code` folder.  I want to ensure proper implementation of Telerik UI for ASP.NET AJAX licensing in a setup where an ASP.NET Web site project is used assemblies are referenced by adding the dll to the bin folder.

This knowledge base article also answers the following questions:
- Can I activate a the Telerik License using a `DLL` in the `Bin` folder?
- How to activate the Telerik License without adding any code to the `App_Code` folder?
- How to resolve assembly mismatches with Telerik.Licensing.Runtime.dll during production?  

## Solution  

### Creating a License Key Assembly

1. In Visual Studio [Create a Class Library (.NET Framework)](https://learn.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio) project and name it something like TelerikLicenseKey
2. Reference the Telerik Licensing
   - **Option 1**: Install the `Telerik.Licensing` NuGet package the project through the Nuget Package Manager
   - **Option 2**: Add a [NuGet PackageReference](https://learn.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files) to the project file (`.csproj` or `.vbproj`).
      ````XML
      <ItemGroup>
         <PackageReference Include="Telerik.Licensing" Version="[1.4.6,2.0)" />
      </ItemGroup>
      ````
3. Download your Telerik License Key:  
   - Navigate to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.  
   - Locate the Telerik UI for ASP.NET AJAX row and click the "View Key" link. Select the programming language and Copy the license key.

4. Add the License Key to the project
   - In the Class Library, add the copied License Key Script to `Properties > AssemblyInfo.cs`

5. Build the project then copy the compiled assembly e.g. `TelerikLicenseKey.dll` to the `Bin` folder of the Web site project you are aiming to activate the Telerik License for.

>This works as if adding the License key to a Class in the `App_Code\` folder, except that the Class Library will need to be maitnained separately to keep the `Telerik.Licensing.Runtime.dll` up-to-date in case the Telerik UI gets updated.

### Addressing Assembly Mismatches

If you encounter assembly mismatch errors, follow these steps:  

1. **Use Binding Redirects**:  
   - Add a binding redirect to your `web.config` to resolve mismatches between versions of `Telerik.Licensing.Runtime.dll`. Example:  
     ```xml  
     <?xml version="1.0"?>  
     <configuration>  
       <runtime>  
         <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">  
           <dependentAssembly>  
             <assemblyIdentity name="Telerik.Licensing.Runtime" publicKeyToken="98bb5b04e55c09ef" culture="neutral" />  
             <bindingRedirect oldVersion="0.0.0.0-1.6.5.0" newVersion="1.6.5.0" />  
           </dependentAssembly>  
         </assemblyBinding>  
       </runtime>  
     </configuration>  
     ```  

2. **Version Compatibility**:  
   - Ensure the `Telerik.Licensing.Runtime.dll` version referenced to the Class Library matches the Telerik version in your Web site project.

## See Also  

- [License Key Installation](https://www.telerik.com/products/aspnet-ajax/documentation/licensing/license-key#setup-your-license-key)  
- [Web Application Projects vs. Web Site Projects](https://learn.microsoft.com/en-us/previous-versions/aspnet/dd547590(v=vs.110))  
- [Adding Binding Redirects in Web.config](https://learn.microsoft.com/en-us/dotnet/framework/configure-apps/redirect-assembly-versions)  