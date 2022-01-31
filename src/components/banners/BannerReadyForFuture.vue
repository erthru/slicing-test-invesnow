<template>
    <div class="pt-[57px] pb-[54px] flex flex-wrap w-full bg-brand-alt-600 rounded-lg relative shadow-2xl">
        <InvesNowIcon icon="ic-bullet-brands" height="100%" width="100%" class="absolute top-0" />

        <p class="w-full text-center text-white font-700 text-[36px] leading-[43px] z-10">
            Siap untuk menumbuhkan
            <br />
            uangmu di masa depan ?
        </p>

        <p class="w-full text-center mt-[21px] font-400 text-[18px] leading-[27px] text-brand-alt-200 z-10">Perjalanan Investasimu Dimulai Sekarang</p>

        <InvesNowButton class="bg-accent-500 text-black mx-auto mt-[21px] z-10">Investasi Sekarang</InvesNowButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";

export default defineComponent({
    name: "BannerReadyForFuture",

    components: {
        InvesNowButton,
        InvesNowIcon,
    },
});
</script>
