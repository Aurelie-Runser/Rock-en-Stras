<template>
    <div class="relative overflow-hidden w-72 h-52 md:w-96 md:h-64 border-4 border-white skew-y-6">
        <img class="-mt-7 h-[120%] object-cover center -skew-y-6" :src=image :alt=imgalt>
    </div>
</template>


<script>

export default {
 name: "cardArtiste",
 props:{
     image:{
         type: String,
     },
     imgalt:{
         type: String,
     },
 }
}

</script>
