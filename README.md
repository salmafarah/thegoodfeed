# The Good Feed
The Good Feed is a web application that is intended to be a resource to help those struggling with mental health, more specifically those who are Muslim. The app provides general mental health and Islamic resources in the form of a feed. You can find the site here: https://salmafarah.github.io/thegoodfeed/. 

## Objective
The Good Feed was created as a project for [Ummahacks](https://www.ummahacks.com/). Our goal was to create a minimal viable product which included the following tasks: 
- Create 6 emotion pages: Fear, Anger, Sad, Happy, Anxiety, Meh
- Each page is to contain both Islamic and general resources 
- User can switch between different pages 
- Focus on design and creating a minimal and user friendly website
- A finished and useable product by the end of the hackathon 


## Inspiration
The Good Feed started as an idea to create a more positive feed in the age of social media and to eliminate the typical negative feelings that arise from using social media, such as comparison, creating feelings of inadequacy, FOMO, suppressing your feelings, information overload, and feeling lost emotionally and spiritually. During these difficult times we wanted to create a platform that would inspire hope and bring beneficial resources to people. We then expanded our original app idea to include mental health and Islamic resources. We want users to leave this app feeling much better about themselves along with more hope and connection to their faith compared to the usage of other social media platforms. 

## Users
Our user base consists of Muslims who speak English.

## What It Does
The Good Feed is a web app that asks the user how they’re feeling that day in the form of a question on the home page. Once the user chooses an emotion emoji out of the six available options, they are taken to a new page that displays a grid of images that include different quotes, books, videos, podcasts, hadiths, ayahs (verses) from the Quran, and art pertaining to the emotion selected. An emotion navigation bar is also available on each emotion page that allows users to navigate to all the other emotion pages within the app.

## Built With
HTML, CSS, ReactJS, Imgur, Lottie, Blush

## How It Was Built
### Research
The team started by brainstorming if the app was going to be a web application or a mobile application, deciding what the app should be about, the audience it would target, and how it’s going to make a difference in the Ummah. Mental health was chosen as this issue is not often discussed within our communities and is relevant to current events. Research was then done to find similar apps that were built prior to The Good Feed. There weren’t any mental health apps for the same user population. A few apps like the ‘Tappily’ and the ‘Sujood’ were used as inspiration. We also used popular social media sites, such as Instagram, Pinterest, Facebook, and Twitter, as inspiration to help make a feed that the audience was familiar with. Various mental health and Islamic websites gave us ideas on what issues and solutions should be included. Trello was used to gather resources and keep track of the progress made while building the app. To help navigate the creation of the web application, user stories were also used. A Google folder was used to hold all our documents pertaining to the project.

![](https://i.imgur.com/BklYPWK.png)

Figure: Trello Homepage

![](https://i.imgur.com/bOyZxVd.png)

Figure: UmmaHacks Board on Trello

![](https://i.imgur.com/EAyup8n.png)

Figure: Research Board on Trello

### Design
Figma was used to create a prototype of the design that was used in the app. When choosing a color theme, a unanimous decision was made to use pastel or pastel like colors. A color was chosen for every emoji represented within the app. 

![](https://i.imgur.com/IKE2XXA.png)

Figure: Basic Layout of Home Page

![](https://i.imgur.com/Gsi0qcN.png)

Figure: Basic Layout of Pages in the App



### Development
Before the app was started to develop, what languages and framework to use was discussed. The frontend of the app was built using React, JavaScript, HTML and CSS. For the backend, it was decided against using a database, since storing images in a database would have been an unnecessary layer to add when another alternative existed that simplified development, which was Imgur. Imgur stores images and provides URLs to access each image. Each team member designed a minimum of one emotion page and selectively picked the design, layout, and theme of each emotion page. After the app was developed, it was tested to make sure that it worked as expected and any bugs that were encountered was fixed. Then, the final product was deployed to GitHub, where it is located at: https://salmafarah.github.io/thegoodfeed/. 

## Website Layout
### Home Page
![](https://i.imgur.com/IhUvZ4m.png)

### About Page
![](https://i.imgur.com/nreF0xL.png)

### Anxious Page
![](https://i.imgur.com/eduJ5T8.png)

### Happy Page
![](https://i.imgur.com/aGjyUsO.png)

### Angry Page
![](https://i.imgur.com/YRA8JpN.png)

### Sad Page
![](https://i.imgur.com/1cTKj6c.png)

### Fear Page
![](https://i.imgur.com/QEB0663.png)

### Meh Page
![](https://i.imgur.com/X745xa2.png)


None of the images or resources we used belong to us and all credit is given to the content creators.

## Challenges
- 2/4 members of the team had never used Git and GitHub before 
- 3/4 members of the team had never used React
- Team members lived in different timezones: 2/4 members of the team is in EST timezone and 2/4 members of the team is in PST timezone
- 2/4 members of the team was employed and 1/4 members of the team was enrolled in summer classes
- Debugging was done virtually over Zoom calls
- Communication was entirely virtual using Zoom and Slack as the only mode of communication
- One of the team members had never worked on a group project prior to this
- Making the web app responsive on different devices
- Resizing the images and making the grids responsive at different screen sizes 
- Making the contents of the web app accessible

## Accomplishments
- Despite the different levels of experience within the team, everyone contributed to this project while teaching each other throughout the process
- All the team members learned much about web development
- Increased each of the team members’ skill set by learning new programming tools
- Very proud of the way the webapp was designed 

## Things We Learned
- Learned and gained experience executing the general git workflow
- How to successfully deal with merge conflicts
- How to create a basic project using ReactJS
- Basic terminal commands
- Which colors work well together
- Quality over quantity is the best way to go
- The importance of adding credits to images found on the Internet if it was not originally made by the team
- Balance of delegating tasks
- Staying organized by putting up ideas, research, and notes in one place

## Next Steps and Goals
1. We plan on adding more features in the future, such as the following:
2. Use a database, rather than Imgur, to store images, which will allow the creation of a more dynamic feed
3. Creating a more dynamic grid layout, that’s responsive at any screen size or device.
4. Rather than loading a new page for every emotion, have one page that loads the appropriate emotion grid without reloading the whole page
5. Add a “Resources” tab to include mental health organizations that cater to the general public and Muslims in the West after they’ve been vetted
