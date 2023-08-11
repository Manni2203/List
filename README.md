![image](https://github.com/Manni2203/List/assets/31671007/c64cb767-e63d-400c-9ea4-66cbe23cf0d1)Steps to run this program:
Make sure you are able to run react native template project please follow https://reactnative.dev/docs/environment-setup

1.To install node packages run this in terminal of root folder of the project => npm install
2.to run android build
  2a. in root folder of project run this in terminal : npx react-native run-android
3.to run ios build
  3a. form roo directory change directory to ios and run this in terminal => pod install
  3b. change back to root directory and run =>npx react-native run-ios
https://user-images.githubusercontent.com/31671007/260125885-929e7cfb-0448-4209-aed0-257c6e9c05c7.png
https://user-images.githubusercontent.com/31671007/260125915-bba077f5-ea66-49fe-bab2-9df7d21ed66e.png
https://user-images.githubusercontent.com/31671007/260125906-f00c69c9-652b-40c5-acba-a6717f6805b9.png
Task completed:

Task 1: Simple React Native App
  a.Create a basic React Native app that meets the following requirements:

  b.The app should have a login screen with two input fields (username and password) and a "Login" button.
  c.Implement a basic authentication mechanism where the app accepts a hardcoded username and password. On successful login,            d.d.display an alert saying "Login successful." Otherwise, show an alert saying "Login failed."
  e.Styling is not the main focus of this task, but feel free to add some basic styling to make the login screen visually appealing.

Task 2: Fetch and Display Data
In this task, you'll extend the previous React Native app to fetch and display data from an API.

  a.Create a new screen that displays a list of posts obtained from this JSONPlaceholder API endpoint:                         
     https://jsonplaceholder.typicode.com/posts
  b.Each list item should show the post title and body.
  c.When a user taps on a post, navigate to a new screen that displays the full details of that post.
  d.Add a "Refresh" button on the list screen that fetches and updates the list of posts from the API.

Bonus (Optional):
If you have time and want to show off your skills, you can implement the following additional features:

  1.Add pull-to-refresh functionality on the list screen.
  2.Add pagination to the list of posts if the API supports it.

Few additional functionality include:
  a. Implemented reducer to store userData
  b. Login will persist till user logout(used async storage)
