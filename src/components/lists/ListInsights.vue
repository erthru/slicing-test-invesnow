<template>
    <div class="flex w-full space-x-[21px]">
        <div class="w-[33%]" v-for="(item, i) in items" :key="i">
            <img :src="item.thumb" alt="thumb" class="w-full h-[229px] object-fit" />

            <div class="flex w-full mt-[40px] items-center">
                <InvesNowIcon icon="ic-date" width="13px" height="15px" />
                <p class="ml-[8px] text-[16px] font-400 leading-[24px] text-gray-500">{{ item.createdDate }}</p>

                <p class="ml-auto rounded-full text-[14px] font-700 leading-[17px] text-brand-500 bg-brand-100 py-[4px] px-[12px]">
                    {{ item.type }}
                </p>
            </div>

            <div class="mt-[18px]">
                <p class="font-700 text-[18px] leading-[25px] text-gray-900 cursor-pointer">{{ item.title }}</p>
                <p class="font-400 mt-[8px] text-[16px] leading-[24px] text-gray-600">{{ item.body }}</p>
            </div>

            <p class="cursor-pointer text-[16px] mt-[12px] font-700 leading-[24px] text-gray-400">Baca Selengkapnya ></p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";

export default defineComponent({
    name: "ListInsights",

    components: {
        InvesNowIcon,
    },

    setup() {
        const imgPath = require.context("../../assets/images", false, /\.png$/);

        const items = [
            {
                thumb: imgPath(`./insight-one.png`),
                createdDate: "6 Oct 2021",
                type: "Article",
                title: "Channel Resmi Invesnow. Wajib Tau Biar Anda Gak Salah Alamat",
                body: "Baru-baru ini terjadi modus penipuan yang sedang marak dijalankan oleh pelaku kejahatan yang mengaku sebagai pihak dari Invesnow. Jadi biar Anda gak salah alamat, kami gak bosen-bosen mengingatkan dan memberitahu channel resmi kami dan tips untuk menghindari modus penipuan.",
            },
            {
                thumb: imgPath(`./insight-two.png`),
                createdDate: "6 Oct 2021",
                type: "Article",
                title: "Should You Save Money By Not Buying Coffee? No, and Here's Why.",
                body: "If you have been following personal finance influencers or have read books on money management, you might have noticed that some of them (or maybe most) have compared buying a cup of coffee from Starbucks as an unforgivable financial sin",
            },
            {
                thumb: imgPath(`./insight-three.png`),
                createdDate: "6 Oct 2021",
                type: "Article",
                title: "Hidup Hemat Jangan Jadi Beban. Gini 10 Caranya!",
                body: "Lo masih inget gak sih nonton Doraemon atau Kapten Tsubasa di Minggu pagi sewaktu dulu. Lagi asik-asiknya liatin tendangan Drive Shot nya Tsubasa, tiba-tiba dipotong dengan bejibun iklan produk yang durasinya lebih lama dari tayangannya sendiri. Greget.",
            },
        ];

        return { items };
    },
});
</script>
