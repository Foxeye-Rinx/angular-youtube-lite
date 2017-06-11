# angular-youtube-lite
> Module provide responsive youtube iframe component, to help you embed youtube video in your angular application.
Designed for application which doesn't need to use Youtube API.

## Installation

`npm install --save angular-youtube-lite`

## Usage

```js
angular.module('app', ['angular-youtube-lite']);
```

According to [rscss](http://rscss.io/layouts.html) layouts definition, you should define your own video container.

```css
.custome-youtube-container {
    width: 50%;
}
```
```html
<div class="custome-youtube-container">
    <youtube video-id="zYcZC-rcYrc"></youtube>
</div>
```

The embedded video will stretch to fill your container's width size.

### Attributes

Attributes  | Description | DefaultValue | Type
--- | --- | --- | ---
video-id | Youtube video's ID | None | String
playlist | List of Youtube video's IDs, separated by commas | None | String
playlist-id | Youtube playlist's ID | None | String
hide-logo | Hide Youtube logo on embedded iframe | False | Boolean
color | Color theme of Youtube iframe, available values: ["white","red"] | "red" | String
autoplay | Autoplay video when the youtube player loaded | False | Boolean
turn-cc-on | If turn-cc-on="true", turn on CC when video start palying, else, use user's reference settings on Youtube | False | Boolean
related-video | If related-video="false", Youtube iframe doesn't show related video when video ends. | True | Boolean

For more information, checkout [demo page](https://foxeye-rinx.github.io/angular-youtube-lite/)

## Credits
Sergey Kupletsky's [CodePen](https://codepen.io/zavoloklom/pen/IGkDz)

## License

MIT