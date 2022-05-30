<template>
    <div class="relative w-72 h-52 md:w-96 md:h-64 xl:w-[30rem] xl:h-80 border-4 border-white border-dashed">
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
