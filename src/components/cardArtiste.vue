<template>
    <div class="overflow-hidden aspect-video w-[70vw] md:w-[40vw] border-4 border-gray-300 skew-y-3">
        <img class="-mt-7 w-full h-[130%] object-cover center -skew-y-3" :src=image :alt=imgalt>
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
