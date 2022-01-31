<template>
    <img :src="icPath" alt="icon" class="object-cover" :style="`width: ${width}; height: ${height};`" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "InvesNowIcon",

    props: {
        icon: String,

        width: {
            type: String,
            default: "16px",
        },

        height: {
            type: String,
            default: "16px",
        },
    },

    setup(props) {
        const icPath = require.context("../../assets/icons", false, /\.svg$/);
        return { icPath: icPath(`./${props.icon}.svg`) };
    },
});
</script>
