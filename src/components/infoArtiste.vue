<template>
    <div class="clip-info border-4 p-5 border-gray-300 bg-gray-700">
        <div>
            <h2>Date</h2>
            <h2>Scène</h2>
        </div>

        <div>
            <h2>Date</h2>
            <h2>Scène</h2>
        </div>
    </div>
</template>

<script>
import logoPetit from "../components/icons/logoPetit.vue"
import facebookIcon from "./icons/facebook.vue"
import instaIcon from "./icons/insta.vue"
import twitterIcon from "./icons/twitter.vue"

export default {
  name: "monFooter",
  data() {
    return {
    };
  },
  components: { logoPetit, facebookIcon, instaIcon, twitterIcon },
}
</script>