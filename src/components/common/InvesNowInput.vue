<template>
    <input
        :placeholder="placeholder"
        type="text"
        class="p-[14px] bg-white placeholder-gray-400 rounded-lg text-[14px] font-400 leading-[21px] w-full"
    />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        placeholder: {
            type: String,
            default: "",
        },
    },
});
</script>
