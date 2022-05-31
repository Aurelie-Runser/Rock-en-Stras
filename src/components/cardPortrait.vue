<template>
    <div class="w-28 h-40 sm:w-48 sm:h-64 border-4 border-gray-300">
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
