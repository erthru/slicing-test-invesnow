<template>
    <div>
        <NavbarSub class="sticky top-0 z-50" />
        <NavbarMain class="sticky top-[41px] z-40" />

        <div class="overflow-x-hidden">
            <div class="flex w-full bg-white">
                <div class="w-full max-w-[1200px] pt-[109px] pb-[220px] mx-auto">
                    <div class="w-full flex">
                        <p class="font-700 text-[48px] leading-[50px] text-gray-900">
                            Menjadi Pemandu
                            <br />
                            Dalam Langkah Investasimu
                        </p>

                        <p class="ml-auto mt-auto text-[20px] text-gray-500 text-right font-600">
                            Tak perlu download aplikasi <br />transaksi langsung di sini
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex w-full bg-brand-alt-900 pb-[90px] relative">
                <InvesNowIcon icon="ic-mask-bullet" width="100%" height="100%" class="absolute top-[46px] left-[46px]" />

                <div class="w-full max-w-[1200px] pt-[109px] mx-auto">
                    <div class="flex w-full relative -mt-[280px]">
                        <InvesNowIcon icon="ic-wave-artboard" width="100%" height="100%" class="absolute bottom-0" />

                        <div class="bg-brand-alt-700 w-full pt-[59px] overflow-hidden">
                            <div class="flex w-full px-[91px]">
                                <InvesNowButton class="bg-red-500 text-white mx-auto w-full z-10" is-circle>Daftar</InvesNowButton>
                            </div>

                            <InvesNowIcon icon="ic-people-drawing" height="auto" width="100%" class="z-10 relative mt-[148px] -ml-[14px]" />
                        </div>

                        <div class="bg-brand-500 w-full pt-[59px] overflow-hidden">
                            <div class="flex w-full px-[91px]">
                                <InvesNowButton class="bg-accent-500 text-brand-alt-800 mx-auto w-full z-10" is-circle
                                    >Beli Reksa Dana</InvesNowButton
                                >
                            </div>

                            <InvesNowIcon icon="ic-people-shopping" height="auto" width="100%" class="z-10 relative mt-[127px] -ml-[10px]" />
                        </div>

                        <div class="bg-accent-500 w-full pt-[59px] overflow-hidden">
                            <div class="flex w-full px-[91px]">
                                <InvesNowButton class="bg-brand-alt-600 text-white mx-auto w-full z-10" is-circle>SBN Coming Soon</InvesNowButton>
                            </div>

                            <InvesNowIcon icon="ic-town" height="auto" width="100%" class="z-10 relative -ml-[10px]" />
                        </div>
                    </div>

                    <div class="flex w-full px-[64px] mt-[80px] items-center z-20 relative">
                        <div class="flex items-center">
                            <p class="font-600 text-[64px] leading-[77px] text-brand-500">21</p>

                            <p class="text-white font-400 leading-[27px] text-[18px] ml-[8px]">
                                Manajer Investasi <br />
                                Terverifikasi
                            </p>
                        </div>

                        <div class="flex items-center ml-[150px]">
                            <p class="font-600 text-[64px] leading-[77px] text-brand-500">102</p>

                            <p class="text-white font-400 leading-[27px] text-[18px] ml-[8px]">
                                Produk Reksa Dana <br />
                                Terdaftar
                            </p>
                        </div>

                        <div class="flex items-center ml-auto">
                            <p class="text-white font-400 leading-[27px] text-[18px]">
                                Lisensi APERD OJK <br />
                                Sejak Desember 2017
                            </p>

                            <InvesNowIcon icon="ic-ojk" width="151px" height="63px" class="ml-[8px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 flex w-full relative z-10">
                <div class="w-full max-w-[1200px] py-[60px] mx-auto">
                    <div class="py-[32px] pl-[32px] pr-[57px] bg-white flex w-full items-center">
                        <InvesNowIcon icon="ic-promo-sinarmas" width="auto" height="331px" />

                        <div class="ml-[53px]">
                            <p class="font-700 text-[30px] leading-[36px] text-gray-900">
                                Promo Window Dressing - Beli Reksa Dana Sinarmas Dapat Bonus Investasi 25rb
                            </p>

                            <p class="mt-[16px] font-400 text-[16px] leading-[24px] text-gray-800">
                                Dalam rangka Festival Window Dressing, Sinarmas Asset Management bersama dengan Invesnow lagi ada promo bonus
                                investasi reksa dana 25rb nih buat investers!
                            </p>

                            <RouterLink to="#" class="text-brand-500 text-[16px] font-700 leading-[24px] mt-[15px]">Baca Selengkapnya ></RouterLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white flex w-full relative z-10">
                <div class="w-full max-w-[1200px] pt-[93px] pb-[117px] mx-auto">
                    <p class="text-gray-900 font-700 text-[36px] leading-[43px]">
                        Beli Reksadana Langsung Dari
                        <br />
                        Website Invesnow
                    </p>

                    <p class="font-400 text-[16px] leading-[24px] text-gray-800 mt-[3px]">
                        Invesnow memudahkan Anda memilih dan membuat keputusan pembelian produk reksadana dengan menampilkan data-data historis yang
                        dibutuhkan, lengkap dengan berbagai pilihan kategori produk reksadana.
                    </p>

                    <p class="text-gray-500 font-400 text-[14px] leading-[16px] mt-[24px]">Perfoma NAV per tanggal 16 Nov 2021</p>

                    <div class="flex w-full mt-[12px] space-x-[8px]">
                        <p class="rounded-lg py-[7px] px-[12px] bg-brand-100 text-brand-800 cursor-pointer border-[1px] border-brand-500">Semua</p>

                        <p class="rounded-lg py-[7px] px-[12px] bg-gray-100 text-gray-600 cursor-pointer border-[1px] border-gray-300">
                            Reksa Dana Pasar Uang
                        </p>

                        <p class="rounded-lg py-[7px] px-[12px] bg-gray-100 text-gray-600 cursor-pointer border-[1px] border-gray-300">
                            Reksa Dana Pendapatan Tetap
                        </p>

                        <p class="rounded-lg py-[7px] px-[12px] bg-gray-100 text-gray-600 cursor-pointer border-[1px] border-gray-300">
                            Reksa Dana Saham
                        </p>

                        <p class="rounded-lg py-[7px] px-[12px] bg-gray-100 text-gray-600 cursor-pointer border-[1px] border-gray-300">
                            Reksa Dana Campuran
                        </p>

                        <p class="rounded-lg py-[7px] px-[12px] bg-gray-100 text-gray-600 cursor-pointer border-[1px] border-gray-300">Syariah</p>
                    </div>

                    <TableReksaDana class="mt-[12px]" />

                    <div class="flex w-full mt-[32px]">
                        <InvesNowIcon icon="ic-information" height="20px" width="20px" />

                        <p class="ml-[12px] font-400 text-[16px] leading-[24px] flex-1 text-blue-900 -mt-[4px]">
                            Kinerja Reksa dana yang ditampilkan pada halaman ini merupakan kinerja historis masa lalu, dan tidak mencerminkan
                            kepastian kinerja di masa yang akan datang. Urutan Reksa Dana berdasarkan kinerja Reksa Dana 1 tahun terakhir
                        </p>

                        <InvesNowButton
                            class="border-[1px] rounded-lg border-gray-300 bg-white text-gray-500 flex items-center px-[32px] ml-[120px] cursor-pointer"
                        >
                            <p>Lihat Semua</p>
                            <InvesNowIcon icon="ic-arrow-right-rounded" width="20px" height="20px" class="ml-[18px]" />
                        </InvesNowButton>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 flex w-full">
                <div class="flex flex-wrap w-full max-w-[1200px] pt-[120px] pb-[270px] mx-auto">
                    <div class="flex mx-auto items-center">
                        <InvesNowIcon icon="ic-risk-speedometer" height="303px" width="303px" />

                        <div class="ml-[130px] max-w-[410px]">
                            <p class="font-700 text-[36px] leading-[43px] text-gray-900">
                                Berinvestasi Sesuai
                                <br />
                                <span class="text-brand-500">Profil Resiko</span>
                            </p>

                            <p class="text-[16px] font-400 leading-[24px] text-gray-600">
                                Anda bisa memilih produk reksadana sesuai karakter profil resiko Anda. Apakah profil resiko rendah, moderate atau
                                agresif. Sehingga Anda bisa lebih nyaman dalam berinvestasi.
                            </p>
                        </div>
                    </div>

                    <div class="flex mx-auto items-center mt-[64px]">
                        <div class="max-w-[410px]">
                            <p class="font-700 text-[36px] leading-[43px] text-gray-900">
                                Dana Investasi Yang
                                <br />
                                Sangat <span class="text-brand-500">Terjangkau</span>
                            </p>

                            <p class="text-[16px] font-400 leading-[24px] text-gray-600">
                                Anda bisa mulai berinvestasi mulai dari Rp10.000. Jika sudah cukup nyaman, Anda bisa tingkatkan investasi semaumu.
                            </p>
                        </div>

                        <InvesNowIcon icon="ic-golds" height="157px" width="413px" class="ml-[21px]" />
                    </div>

                    <div class="flex mx-auto items-center mt-[64px]">
                        <InvesNowIcon icon="ic-pajak-baloon" height="324px" width="190px" />

                        <div class="ml-[130px] max-w-[410px]">
                            <p class="font-700 text-[36px] leading-[43px] text-gray-900">
                                Tidak Dikenakan
                                <br />
                                <span class="text-brand-500">Pajak</span>
                            </p>

                            <p class="text-[16px] font-400 leading-[24px] text-gray-600">
                                Berbeda dengan produk investasi lainnya seperti emas, properti, dan deposito. Keuntungannya, Reksadana bukan merupakan
                                objek pajak.
                            </p>
                        </div>
                    </div>

                    <div class="flex mx-auto items-center mt-[64px]">
                        <div class="max-w-[410px]">
                            <p class="font-700 text-[36px] leading-[43px] text-gray-900">
                                Keamanan
                                <br />
                                <span class="text-brand-500">Dana Investasi</span>
                            </p>

                            <p class="text-[16px] font-400 leading-[24px] text-gray-600">
                                Dana Anda aman karena dana yang Anda investasikan langsung ditransfer ke bank kustodian dan dikelola oleh Manajer
                                Investasi yang berlisensi OJK.
                            </p>
                        </div>

                        <InvesNowIcon icon="ic-brangkas" height="297px" width="357px" class="ml-[21px]" />
                    </div>
                </div>
            </div>

            <div class="bg-white flex w-full">
                <div class="flex flex-wrap w-full max-w-[1200px] pb-[64px] mx-auto">
                    <div class="-mt-[150px] pt-[57px] pb-[54px] flex flex-wrap w-full bg-brand-alt-600 rounded-lg relative shadow-2xl">
                        <InvesNowIcon icon="ic-bullet-brands" height="100%" width="100%" class="absolute top-0" />

                        <p class="w-full text-center text-white font-700 text-[36px] leading-[43px] z-10">
                            Siap untuk menumbuhkan
                            <br />
                            uangmu di masa depan ?
                        </p>

                        <p class="w-full text-center mt-[21px] font-400 text-[18px] leading-[27px] text-brand-alt-200 z-10">
                            Perjalanan Investasimu Dimulai Sekarang
                        </p>

                        <InvesNowButton class="bg-accent-500 text-black mx-auto mt-[21px] z-10">Investasi Sekarang</InvesNowButton>
                    </div>

                    <div class="w-full flex mt-[110px]">
                        <p class="font-700 text-[48px] leading-[50px] text-gray-900">
                            Segarkan Wawasan
                            <br />
                            Dengan Insight Setiap hari
                        </p>

                        <p class="ml-auto mt-auto text-[20px] text-gray-500 text-right font-600">
                            Perbanyak wawasanmu tentang reksadana, dunia
                            <br />
                            investasi dan kondisi terbaru dari market
                        </p>
                    </div>

                    <ListInsights class="mt-[57px]" />

                    <InvesNowButton
                        class="border-[1px] mt-[65px] rounded-lg border-gray-300 bg-white text-gray-500 flex items-center px-[32px] mx-auto py-[12px] cursor-pointer"
                    >
                        <p>Lihat Semua</p>
                        <InvesNowIcon icon="ic-arrow-right-rounded" width="20px" height="20px" class="ml-[18px]" />
                    </InvesNowButton>
                </div>
            </div>

            <div class="bg-gray-200 flex w-full">
                <div class="w-full max-w-[1200px] pt-[72px] pb-[83px] mx-auto">
                    <p class="w-full text-center font-700 text-[36px] leading-[43px] text-gray-900">Partner Kami</p>
                    <ListPartners class="mt-[24px]" />
                </div>
            </div>
        </div>

        <FooterDefault />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarSub from "@/components/navbars/NavbarSub.vue";
import NavbarMain from "@/components/navbars/NavbarMain.vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue";
import TableReksaDana from "@/components/tables/TableReksaDana.vue";
import ListInsights from "@/components/lists/ListInsights.vue";
import ListPartners from "@/components/lists/ListPartners.vue";
import FooterDefault from "@/components/footers/FooterDefault.vue";

export default defineComponent({
    name: "Home",

    components: {
        NavbarSub,
        NavbarMain,
        InvesNowIcon,
        TableReksaDana,
        ListInsights,
        ListPartners,
        FooterDefault,
        InvesNowButton,
    },
});
</script>
