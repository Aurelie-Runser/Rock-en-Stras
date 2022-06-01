<template>
    <div class="aspect-[13/16] md:aspect-video w-[40vw] min-w-[200px] border-4 border-gray-300">
        <img class="w-full h-full object-cover" :src=image :alt=imgalt>
    </div>
</template>


<script>

export default {
 name: "card",
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
