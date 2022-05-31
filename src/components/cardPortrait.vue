<template>
    <div class="relative w-36 h-52 md:w-48 md:h-64 xl:w-60 xl:h-80 border-4 border-white border-dashed">
        <img class="h-full object-cover" :src=image :alt=imgalt>
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
