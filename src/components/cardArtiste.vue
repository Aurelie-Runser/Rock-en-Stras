<template>
    <div class="overflow-hidden aspect-video w-72 md:w-96 xl:w-[30rem] border-4 border-gray-300 skew-y-6">
        <img class="-mt-5 md:-mt-9 w-[120%] object-cover center -skew-y-6" :src=image :alt=imgalt>
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
