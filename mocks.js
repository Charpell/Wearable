
  const activity = [
      {
          time: "Wednesday,  April 22, 20",
          steps: "200",
          miles: ".01",
          minutes: "3"
      },
      {
        time: "Thursday,  April 23, 20",
        steps: "100",
        miles: ".02",
        minutes: "4"
    },
    {
        time: "Friday, April 22, 20",
        steps: "200",
        miles: ".01",
        minutes: "3"
    },
  ]

  const images = [
      require("./assets/Derrick.png"),
      require("./assets/Dumbell.png"),
      require("./assets/Eric.png"),
      require("./assets/jane.png"),
      require("./assets/Josie.png"),
      require("./assets/lion.png"),
      require("./assets/medal.png"),
      require("./assets/Mountain_climber.png"),
      require("./assets/Rocket.png"),
      require("./assets/Steve.png"),
      require("./assets/trophy.png")
  ]

  const users = [
      {
          picture: require("./assets/Josie.png"),
          name: "Mary",
          steps: "9087 Steps",
          avg: "Avg HR 95",
          time: "1 minute and 9 seconds"
      },
      {
        picture: require("./assets/Steve.png"),
        name: "Steve",
        steps: "6430 Steps",
        avg: "Avg HR 78",
        time: "2 minutes"
    },
    {
        picture: require("./assets/Eric.png"),
        name: "Eric",
        steps: "4000 Steps",
        avg: "Avg HR 132",
        time: "3 minute and 10 seconds"
    }
  ]
  
  const user = {
    avatar: require('./assets/icon.png')
  };
  
  export { user, activity, images, users }