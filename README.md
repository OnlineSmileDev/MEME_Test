# Instructions
* Install [react-native-mixpanel](https://github.com/davodesign84/react-native-mixpanel) to be able to compile the project. You might also need to setup pods.
* Add Logo to the Splash page `~/assets/logo.png`
* After Facebook login is successful, redirect to `RegularMemeResponseScreen` if `user.hasCompletedOnboarding === true` 
* Fix the `tick` icon position on the image in `GenderInterestScreen` to be at the top right of each image section. (Test with SE and iphone 11 simulators)
* Fix the `tick` icon position on the image in `MatchDesireScreen` to be at the top right of each image section. (Test with SE and iphone 11 simulators)
* Spinning loader to show network activity in pages that need it (Reuse loader in `~/components/loader/Loader`)
* Fix `Share Image` functionality on the `RegularMemeResponseScreen` in the app when the top right icon is clicked. You should be able to share to email,sms etc
* On the HumorStyle screen, navigate to `NewMatchesPermission` when 'View my matches button is clicked'
* On User profile page, have the header show `My Profile` or `Edit Profile` depending on the tab you are currently viewing. You can use the `TopHeaderBar` component.