<template>
    <div class="clip-info mx-auto my-12 p-7 flex max-w-sm basis-20 flex-initial flex-wrap gap-5 justify-center border-4 border-gray-300 bg-gray-700">
        <div>
            <h2>Vendredi 15</h2>
            <h2>Scène 1</h2>
        </div>

        <div class="flex-none grid grid-cols-2 gap-2">
            <youtubeIcon class="w-12 h-12"/>
            <instaIcon class="w-14 h-14"/>
            <facebookIcon class="w-12 h-12"/>
            <twitterIcon class="w-12 h-12"/>
        </div>
    </div>
</template>

<script>
import youtubeIcon from "../components/icons/youtubeIcon.vue"
import facebookIcon from "./icons/facebook.vue"
import instaIcon from "./icons/insta.vue"
import twitterIcon from "./icons/twitter.vue"

export default {
  name: "infoArtiste",
  data() {
    return {
    };
  },
  components: { youtubeIcon, facebookIcon, instaIcon, twitterIcon },
}
</script>