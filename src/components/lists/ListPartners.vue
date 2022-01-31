<template>
    <div class="flex flex-wrap w-full">
        <div v-for="(item, i) in items" :key="i" :class="`pb-[18px] w-[25%] ${(i + 1) % 4 !== 0 ? 'pr-[18px]' : ''}`">
            <div class="bg-white h-[146px] flex items-center">
                <img :src="item" alt="img" class="mx-auto" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const imgPath = require.context("../../assets/images", false, /\.png$/);

        const items = [
            imgPath("./rhb.png"),
            imgPath("./bni.png"),
            imgPath("./bahana.png"),
            imgPath("./hp.png"),
            imgPath("./ciptadana.png"),
            imgPath("./cimb.png"),
            imgPath("./sinarmas.png"),
            imgPath("./mnc.png"),
            imgPath("./manulife.png"),
            imgPath("./capital.png"),
            imgPath("./insight.png"),
            imgPath("./danareksa.png"),
            imgPath("./sucor.png"),
            imgPath("./trimegah.png"),
            imgPath("./corpus.png"),
            imgPath("./syailendra.png"),
        ];

        return { items };
    },
});
</script>
