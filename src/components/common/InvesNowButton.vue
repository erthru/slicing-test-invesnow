<template>
    <button :class="`py-[8px] px-[16px] font-700 ${isCircle ? 'rounded-full' : 'rounded-lg'}`">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        isCircle: {
            type: Boolean,
            default: false,
        },
    },
});
</script>
