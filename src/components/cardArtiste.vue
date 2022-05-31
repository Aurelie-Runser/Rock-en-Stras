<template>
    <div class="overflow-hidden w-72 h-52 md:w-96 md:h-64 xl:w-[30rem] xl:h-80 border-4 border-white skew-y-6">
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
