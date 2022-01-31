<template>
    <div class="py-[32px] pl-[32px] pr-[57px] bg-white flex w-full items-center">
        <InvesNowIcon icon="ic-promo-sinarmas" width="auto" height="331px" />

        <div class="ml-[53px]">
            <p class="font-700 text-[30px] leading-[36px] text-gray-900">
                Promo Window Dressing - Beli Reksa Dana Sinarmas Dapat Bonus Investasi 25rb
            </p>

            <p class="mt-[16px] font-400 text-[16px] leading-[24px] text-gray-800">
                Dalam rangka Festival Window Dressing, Sinarmas Asset Management bersama dengan Invesnow lagi ada promo bonus investasi reksa dana
                25rb nih buat investers!
            </p>

            <RouterLink to="#" class="text-brand-500 text-[16px] font-700 leading-[24px] mt-[15px]">Baca Selengkapnya ></RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";

export default defineComponent({
    name: "BannerSinasmasPromo",

    components: {
        InvesNowIcon,
    },
});
</script>
