<template>
    <button :class="`py-[8px] px-[16px] font-700 ${isCircle ? 'rounded-full' : 'rounded-lg'}`" @click="onClick">
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

    setup(_, context) {
        const onClick = () => {
            context.emit("click");
        };

        return {
            onClick,
        };
    },
});
</script>
