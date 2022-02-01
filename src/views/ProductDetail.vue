<template>
    <div>
        <NavbarDetail class="sticky top-0" />

        <div class="w-full flex mt-[32px]">
            <div class="flex w-full mx-auto max-w-[1200px]">
                <div class="w-[413px]">
                    <div class="bg-white p-[20px]">
                        <div class="flex w-full items-center">
                            <img src="@/assets/images/logo-sinarmas.png" alt="logo" class="h-[48px] w-[48px]" />

                            <div class="w-full ml-[12px]">
                                <p class="font-700 text-[18px] leading-[25px] text-gray-900">Simas Saham Maksima</p>
                                <p class="font-400 text-[14px] leading-[16px] text-gray-500">Sinarmas Asset Management</p>
                            </div>
                        </div>

                        <div class="flex w-full mt-[22px] py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Jenis Reksa Dana</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Reksa Dana Saham</p>
                        </div>

                        <div class="flex w-full py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Tanggal Peluncuran</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">22 Jan 2016</p>
                        </div>

                        <div class="flex w-full py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Min. Pembelian Awal</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Rp.100,000</p>
                        </div>

                        <div class="flex w-full py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Pembelian Selanjutnya</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Rp.100,000</p>
                        </div>

                        <div class="flex w-full py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Min. Penjualan Kembali</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Rp.100,000</p>
                        </div>

                        <div class="flex w-full pt-[12px]">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Bank Kustodian</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Bank CIMB Niaga TBK, PT</p>
                        </div>

                        <InvesNowButton class="bg-accent-500 text-black w-full mt-[32px] h-[52px]">Beli</InvesNowButton>
                    </div>

                    <div class="bg-white p-[20px] mt-[20px]">
                        <div class="flex w-full items-center">
                            <InvesNowIcon icon="ic-tag" width="20px" height="20px" />
                            <p class="ml-[12px] font-700 text-[18px] leading-[25px] text-gray-900">Biaya Transaksi</p>
                        </div>

                        <div class="flex w-full mt-[22px] py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Biaya Pembelian</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Maks. 1.5%</p>
                        </div>

                        <div class="flex w-full py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Biaya Penjualan</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Maks. 1.5%</p>
                        </div>

                        <div class="flex w-full py-[12px]">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Biaya Pengalihan</p>
                            <p class="font-700 text-[16px] leading-[24px] ml-auto text-gray-800">Maks. 1.5%</p>
                        </div>
                    </div>

                    <div class="bg-white p-[20px] mt-[20px]">
                        <div class="flex w-full items-center">
                            <InvesNowIcon icon="ic-document" width="20px" height="20px" />
                            <p class="ml-[12px] font-700 text-[18px] leading-[25px] text-gray-900">Download Dokumen</p>
                        </div>

                        <div class="flex w-full mt-[22px] py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Prospektus</p>

                            <div class="flex ml-auto items-center cursor-pointer">
                                <InvesNowIcon icon="ic-download" height="17px" width="14px" />
                                <p class="ml-[11px] font-400 text-[16px] leading-[24px] text-gray-600">Download</p>
                            </div>
                        </div>

                        <div class="flex w-full py-[12px]">
                            <p class="font-400 text-[16px] leading-[24px] text-gray-600">Fund Fact Sheet</p>

                            <div class="flex ml-auto items-center cursor-pointer">
                                <InvesNowIcon icon="ic-download" height="17px" width="14px" />
                                <p class="ml-[11px] font-400 text-[16px] leading-[24px] text-gray-600">Download</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-[20px] mt-[20px]">
                        <div class="flex w-full items-center">
                            <InvesNowIcon icon="ic-clock" width="20px" height="20px" />
                            <p class="ml-[12px] font-700 text-[18px] leading-[25px] text-gray-900">Ketentuan Transaksi</p>
                        </div>

                        <div class="w-full mt-[22px] py-[12px] border-b-[1px] border-gray-100">
                            <p class="font-700 text-[16px] leading-[24px] text-gray-900">Transaksi sebelum 13:00 WIB</p>

                            <p class="mt-[12px] text-[14px] leading-[16px] font-400 text-gray-600">
                                Batas waktu konfirmasi Pengalihan Reksa Dana paling lambat diterima dan tercatat oleh Aplikasi Invesnow adalah pukul
                                13.00 WIB untuk diproses menggunakan harga NAV/Unit dihari yang sama.
                            </p>
                        </div>

                        <div class="w-full py-[12px]">
                            <p class="font-700 text-[16px] leading-[24px] text-gray-900">Transaksi setelah 13:00 WIB</p>

                            <p class="mt-[12px] text-[14px] leading-[16px] font-400 text-gray-600">
                                Transaksi Pengalihan yang diterima dan tercatat melebihi batas waktu pukul 13.00 WIB akan diproses dengan menggunakan
                                harga NAV/Unit hari berikutnya.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="ml-[20px] w-full flex-1">
                    <div class="bg-white flex w-full px-[32px] py-[24px]">
                        <div>
                            <span class="py-[4px] rounded-full px-[12px] bg-brand-100 text-brand-500 font-700 text-[14px] leading-[16px]"
                                >NAV/Unit</span
                            >

                            <div class="flex mt-[8px]">
                                <p class="text-gray-400 font-700 text-[11px] leading-[17px]">Rp</p>
                                <p class="text-gray-900 font-700 text-[18px] leading-[25px] ml-[2px]">937,8774</p>
                            </div>
                        </div>

                        <div class="ml-auto">
                            <span class="py-[4px] rounded-full px-[12px] bg-brand-alt-100 text-brand-alt-500 font-700 text-[14px] leading-[16px]">
                                Dana Kelolaan
                            </span>

                            <div class="flex mt-[8px]">
                                <p class="text-gray-400 font-700 text-[11px] leading-[17px]">Rp</p>
                                <p class="text-gray-900 font-700 text-[18px] leading-[25px] ml-[2px]">119,499,298,643</p>
                            </div>
                        </div>

                        <div class="ml-auto">
                            <span class="py-[4px] rounded-full px-[12px] bg-accent-300 text-brand-alt-800 font-700 text-[14px] leading-[16px]"
                                >Unit Penyertaan</span
                            >

                            <div class="flex mt-[8px] items-end">
                                <p class="text-gray-900 font-700 text-[18px] leading-[25px]">126,949,471.1600</p>
                                <p class="text-gray-400 font-700 text-[11px] leading-[17px] ml-[2px]">unit</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-[20px] bg-white px-[32px] py-[24px]">
                        <InvesNowChart
                            title="Performa NAV"
                            subtitle="Per 16 Nov 2021"
                            label="Number of NAV"
                            :labels="[`Jun 20'`, 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', `Jun '21`]"
                            :data="[1000, 2900, 2700, 2000, 3600, 6000, 6800, 6400, 7700, 8600, 7800, 5800, 6100]"
                            background-color="rgba(238, 80, 63, 0.20)"
                            border-color="rgba(238, 80, 63, 1)"
                        />

                        <div class="w-full flex rounded-lg mt-[18px]">
                            <div class="bg-gray-100 text-center w-full rounded-l-lg py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">1D</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">3M</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">YTD</p>
                            </div>

                            <div class="bg-brand-500 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-white">1Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">3Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">5Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">10Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full rounded-r-lg py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">All</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-[20px] bg-white px-[32px] py-[24px]">
                        <InvesNowChart
                            title="Pertumbuhan Dana Kelolaan"
                            insert-title="(dalam satuan miliar)"
                            subtitle="Per 16 Nov 2021"
                            label="Number of AUM"
                            :labels="[`Jun 20'`, 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', `Jun '21`]"
                            :data="[1000, 2900, 2700, 2000, 3600, 6000, 6800, 6400, 7700, 8600, 7800, 5800, 6100]"
                            background-color="rgba(92, 13, 171, 0.20)"
                            border-color="rgba(92, 13, 171, 1)"
                        />

                        <div class="w-full flex rounded-lg mt-[18px]">
                            <div class="bg-gray-100 text-center w-full rounded-l-lg py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">1D</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">3M</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">YTD</p>
                            </div>

                            <div class="bg-brand-alt-500 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-white">1Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">3Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">5Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">10Y</p>
                            </div>

                            <div class="bg-gray-100 text-center w-full rounded-r-lg py-[7px] cursor-pointer">
                                <p class="font-700 text-[9px] leading-[10px] text-gray-500">All</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-blue-100 w-full flex mt-[20px] rounded-lg border-[1px] border-blue-300 p-[24px]">
                        <InvesNowIcon icon="ic-information" width="20px" height="20px" class="mt-[4px]" />

                        <p class="font-400 text-[16px] leading-[24px] text-blue-800 ml-[12px]">
                            Kinerja Reksa dana yang ditampilkan pada halaman ini merupakan kinerja historis masa lalu, dan tidak mencerminkan
                            kepastian kinerja di masa yang akan datang.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <FooterDefault class="mt-[64px]" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarDetail from "@/components/navbars/NavbarDetail.vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";
import InvesNowChart from "@/components/common/InvesNowChart.vue";
import FooterDefault from "@/components/footers/FooterDefault.vue";

export default defineComponent({
    name: "ProductDetail",

    components: {
        NavbarDetail,
        InvesNowButton,
        FooterDefault,
        InvesNowIcon,
        InvesNowChart,
    },
});
</script>

<style>
html,
body {
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}
</style>
