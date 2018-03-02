##### This is just a testbed for me to try out various articles and blogs I come across, if it helps you great, but overall it's mostly meant for reference at this point.  

# ProofOfConcepts

[Using GitHub with Visual Studio 2017](https://blogs.msdn.microsoft.com/benjaminperkins/2017/04/04/setting-up-and-using-github-in-visual-studio-2017/)  
* Clone or Create Repository from Team Explorer  
* ...Do Work  
* Team Explorer -> 'Changes'  
* 'Commit All' (Put in comment)  
* 'Sync' The locally committed source to the public source on GitHub  
* 'Push' Pushes the local changes to the GitHub repository  

[Using Typescript with Asp.net MVC 5](http://www.mithunvp.com/using-typescript-with-asp-net-mvc5/)
* Make a folder for TS files and create a tsconfig.json file in it  
  {
    "compilerOptions": {
      "noImplicitAny": false,
      "noEmitOnError": true,
      "removeComments": false,
      "sourceMap": true,
      "target": "es5",    
      "outDir": "../appScriptsJS"
    },
    "exclude": [
      "node_modules",
      "wwwroot"
    ]
  }
* Create a app.ts file  
* When project builds, js files will be created in 'appScriptsJS'  

[Typescript to perform CRUD with JQUERY](https://www.codeguru.com/csharp/.net/using-typescript-to-perform-crud-operations.htm)  
[Typescript to perform CRUD without JQUERY](http://www.binaryintellect.net/articles/d50a4ea1-fd84-4165-a27f-3d6cad2e4a3d.aspx)  
[Typescript CRUD using Aurelia](http://www.dotnetfunda.com/articles/show/3345/crud-using-aurelia-fetch-client-and-webapi-20)
