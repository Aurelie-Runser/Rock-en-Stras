<template>
    <button class="block m-5 mt-12 py-2 px-5 w-max bg-pink-300_90 border-b-pink-800 border-r-pink-800 border-b-4 border-r-4 rounded-r-3xl rounded-l-md
                    motion-safe:transition motion-safe:duration-300
                    hover:bg-black hover:border-b-gray-300 hover:border-r-gray-300
                    focus:bg-black focus:border-b-gray-300 focus:border-r-gray-300
                    text-lg">
        <span class="font-button text-white mx-auto"><slot/></span>
    </button>
</template>