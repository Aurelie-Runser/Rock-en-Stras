<template>
    <div class="relative w-72 h-52 border-4 border-white border-dashed">
        <img class="h-full object-cover" :src=image alt="Le Jardin des Deux Rives à Strasbourg, le lieu du festvival">
    </div>
</template>


<script>

export default {
 name: "card",
 props:{
     image:{
         type: String,
     },
 }
}

</script>
