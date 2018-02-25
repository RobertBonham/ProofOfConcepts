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
