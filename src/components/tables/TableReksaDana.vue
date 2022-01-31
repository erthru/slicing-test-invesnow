<template>
    <table class="w-full bg-gray-50 text-left rounded-lg">
        <thead class="border-b-[1px] border-gray-300">
            <tr class="text-[14px] font-700 text-gray-600 leading-[17px]">
                <th class="pl-[24px] py-[12px]">Reksa Dana</th>
                <th class="py-[12px]">Jenis</th>
                <th class="text-right py-[12px]">NAV/Unit</th>
                <th class="text-right py-[12px]">AUM</th>
                <th class="pr-[24px] py-[12px] pl-[32px]">1 thn (%)</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, i) in items" :key="i" class="text-[14px] font-400 leading-[24px]">
                <td class="pl-[24px] py-[12px]">
                    <div class="flex">
                        <p class="py-[8px] w-[40px] text-center font-400 text-[16px] leading-[24px] rounded-lg bg-brand-alt-600 text-white">
                            {{ item.rdTitle.substring(0, 2).toUpperCase() }}
                        </p>

                        <div class="ml-[16px]">
                            <p class="text-brand-alt-500">{{ item.rdTitle }}</p>
                            <p class="text-gray-500 text-[12px] leading-[14px]">{{ item.rdSubtitle }}</p>
                        </div>
                    </div>
                </td>

                <td class="py-[12px]">{{ item.type }}</td>
                <td class="text-right py-[12px]">{{ item.nav }}</td>
                <td class="text-right py-[12px]">{{ item.aum }}</td>

                <td class="py-[12px] pl-[32px]">
                    <div class="flex text-green-600 items-center">
                        <InvesNowIcon icon="ic-polygon-top" width="9px" height="9px" />
                        <p class="ml-[4px]">{{ item.oneYear }}</p>
                    </div>
                </td>

                <td class="py-[12px] pr-[24px] w-[10px]">
                    <InvesNowButton class="bg-brand-alt-600 text-white">Beli</InvesNowButton>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue";

export default defineComponent({
    components: {
        InvesNowIcon,
        InvesNowButton,
    },

    setup() {
        const items = [
            {
                rdTitle: "Manulife Saham Andalan",
                rdSubtitle: "PT Manulife Aset Manajemen Indonesia",
                type: "Saham",
                nav: "2,520.3600",
                aum: "2,269,617,671,401",
                oneYear: "50.07",
            },
            {
                rdTitle: "Sucorinvest Sharia Equity Fund",
                rdSubtitle: "PT Sucorinvest Asset Management",
                type: "Saham",
                nav: "2,042.4100",
                aum: "699,126,316,798",
                oneYear: "37.37",
            },
            {
                rdTitle: "Cipta Saham Unggulan Syariah",
                rdSubtitle: "PT Ciptadana Asset Management",
                type: "Saham",
                nav: "2,172.3400",
                aum: "19,923,837,992",
                oneYear: "28.66",
            },
            {
                rdTitle: "Sucorinvest Flexi Fund",
                rdSubtitle: "PT Sucorinvest Asset Management",
                type: "Campuran",
                nav: "5,714.0100",
                aum: "225,366,418,525",
                oneYear: "27.27",
            },
            {
                rdTitle: "Eastspring Investments Value Discovery Kelas A",
                rdSubtitle: "Mega Asset Management",
                type: "Saham",
                nav: "1,333.3400",
                aum: "499,614,220,206",
                oneYear: "22.94",
            },
            {
                rdTitle: "Bahana USD Global Sharia Equities",
                rdSubtitle: "PT. Bahana TCW Investment Management",
                type: "Saham",
                nav: "1.5074",
                aum: "11,481,901",
                oneYear: "19.97",
            },
            {
                rdTitle: "Star Sustainable Equity",
                rdSubtitle: "PT. Surya Timur Alam Raya",
                type: "Saham",
                nav: "880.9794",
                aum: "24,773,565,573",
                oneYear: "19.12",
            },
            {
                rdTitle: "Sucorinvest Equity Fund",
                rdSubtitle: "PT Sucorinvest Asset Management",
                type: "Saham",
                nav: "2,448.1900",
                aum: "1,923,173,973,236",
                oneYear: "18.27",
            },
            {
                rdTitle: "HPAM Ultima Ekuitas 1",
                rdSubtitle: "Mega Asset Management",
                type: "Pendapatan Tetap",
                nav: "2,413.3100",
                aum: "316,778,100,816",
                oneYear: "17.36",
            },
            {
                rdTitle: "Manulife Dana Saham Kelas A",
                rdSubtitle: "Sinarmas Asset Management",
                type: "Indeks",
                nav: "11,812.0400",
                aum: "4,335,425,217,281",
                oneYear: "17.15",
            },
        ];

        return { items };
    },
});
</script>

<style>
table {
    border-collapse: collapse;
    border-radius: 30px;
    border-style: hidden;
    box-shadow: 0 0 0 1px #d1d5db;
}

td {
    border-bottom: 1px solid #ccc;
}
</style>
