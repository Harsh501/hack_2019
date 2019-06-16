
# ![pageres](https://i.imgur.com/50tfiFo.png)
Let's face it! Everyone is addicted to their smartphones in some way or the other. 
In order to help people from becoming mindless smartphone zombies, we built an app that identifies such app usage patterns and helps you to break out of the habit by suggesting you activities that are more fulfilling. 

As soon as the Apollo GraphQL's server data detects a usage patterns similar to reckless surfing of the apps such as Facebook,Instagram,Youtube ,Reddit it helps you by suggesting alternative activities as shown below.

![pageres](https://i.imgur.com/PuGw6dP.jpg)

## Installation and backend Execution

```
$ git clone https://github.com/Harsh501/hack_2019.git
$ npm install 
$ npm start 
```


## Installation and Frontend execution
Install the  APK on your android phone. 
Press start recording on the application and the app usage history starts getting populated and at the same time the back end also starts tracking app usage patterns.

![image1](https://i.imgur.com/yVHaid5.png)![image1](https://i.imgur.com/kNtPNqO.png)

## Implementation
The android app keeps querying usage data to the Apollo GraphQL server connected to a MySQL Database. 
An AWS Lambda keeps sampling these usage patterns and feeds them into a simple recurrent-Neural network. 
This network gives the probability of an app usage pattern being similar to mindless surfing. 
If the probability crosses a threshold of 0.75 then a notification is sent to the android front end. 

The mobile app queries data points from the bored api and local weather and event updates. The pushes a notification to the user suggesting him a better activity. 

The architecture of the  entire setup is described below. 

![https://i.imgur.com/saoHFzT.png](https://i.imgur.com/saoHFzT.png)



## Reference

- [When Attention is not Scarce -Detecting Boredom from Mobile Phone Usage](https://pielot.org/pubs/Pielot2015-UbiComp-Boredom-Detection.pdf) - University of Stuttgart (2016)
