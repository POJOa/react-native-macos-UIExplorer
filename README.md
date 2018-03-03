# react-native-macos-UIExplorer
I don't know if I've missed something , but there's no straight and clean way to make UIExplorer example in Official repo work.     
So I integrated UIExplorer with the cli-generated skeleton app , and it compiles.      

# Known issues    
 Hey you like doges? He's from Reykjavik, ICELANDIC. 
![Reykjavik Doge](https://wx2.sinaimg.cn/large/005yrqtrgy1fopar3pf4zj31kw23vhdu.jpg)
---
**OKAY LET'S BE SERIOUS.**    
 ## HANDLE REJECTED PROMISES 
 People can barely believe they got betrayed if others promised something.     
 It must be handled in our case or you'll receive an orange complaint , probably no way to disarm it. **HOW CAN I CLOSE THE ORANGE BANNER BY THE WAY!**      
 ![banner](https://wx4.sinaimg.cn/mw690/005yrqtrly1fozqmcbws1j31kw13earm.jpg)
 ## SPECIFY ROOT DIRS
I understand we should place .js files to a seperate folder.    
**BUT JESUS HOW?**    

I see , we may change it in AppDelegate.m. But I'm too lazy to implement the change.    
`jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.macos" fallbackResource:nil];`

![rootdir](https://wx3.sinaimg.cn/mw690/005yrqtrly1fozqmc5simj30wc0cawgw.jpg)
