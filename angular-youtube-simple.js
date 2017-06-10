(function() {

class youtubeController {
    constructor() {};
    $onInit() {
        this.youtubeLink = `https://www.youtube.com/embed/${this.videoId}?`;
        if (this.playlist) {
            this.youtubeLink = this.youtubeLink + `&playlist=${this.playlist}`;
        };
        if (this.playlistId) {
            this.youtubeLink = this.youtubeLink + `listType=playlist&list=${this.playlistId}`
        }
        if (this.color && ["red","white"].includes(this.color.toLowerCase())) {
            this.youtubeLink = this.youtubeLink + `&color=${this.color.toLowerCase()}`;
        };
        if (this.turnCcOn) {
            this.youtubeLink  = this.youtubeLink + `&cc_load_policy=1`;
        };
        if (this.hideLogo) {
             this.youtubeLink  = this.youtubeLink + `&modestbranding=1`;
        };
        if (this.disablekb) {
            this.youtubeLink = this.youtubeLink + `&disablekb=1`;
        };
        if (this.relatedVideo === false) {
            // If no rel playerParams, default rel=1 will be applied
            this.youtubeLink = this.youtubeLink + `&rel=0`;
        };
        if (!this.autoplay) {
            this.youtubeLink = this.youtubeLink + `&?autoplay=1`;
        }
    };
};

let template = `
    <div class="fe-intrinsic-container">
        <iframe ng-src="{{$ctrl.youtubeLink | trustThisUrl}}" frameborder="0" allowfullscreen></iframe>
    </div>
    <style>
    .fe-intrinsic-container {
        position: relative;
        overflow: hidden;
        padding-bottom: 56.25%; /* 9/16 */
    }
    
    .fe-intrinsic-container iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    </style>
    `
let youtubeComponent = {
    bindings: {
        videoId: "@?",
        color: "@?",
        playlist: "@?",
        playlistId: "@?",
        turnCcOn: "<?",
        hideLogo: "<?",
        disablekb: "<?",
        relatedVideo: "<?",
        autoplay: "<?"        
    },
    controller: youtubeController,
    template
};

angular.module('angular-youtube-simple', [])
    .filter('trustThisUrl', ['$sce', $sce => {
        return val => {
            return $sce.trustAsResourceUrl(val);
        };
    }])
    .component('youtube', youtubeComponent);
}());
