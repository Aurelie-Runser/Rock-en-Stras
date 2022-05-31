<template>
    <div class="w-72 h-52 md:w-96 md:h-64 xl:w-[30rem] xl:h-80 border-4 border-gray-300">
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
