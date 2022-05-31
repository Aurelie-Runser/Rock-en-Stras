<template>
    <div class="aspect-ratio w-72 md:w-96 xl:w-[30rem] border-4 border-gray-300">
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
