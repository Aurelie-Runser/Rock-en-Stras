<template>
    <div class="w-28 h-40 sm:w-48 sm:h-64 border-4 border-white border-dashed">
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
