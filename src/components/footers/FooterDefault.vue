<template>
    <div class="pb-[16px] pt-[60px] flex w-full bg-brand-alt-900">
        <div class="w-full max-w-[1200px] mx-auto">
            <div class="flex w-full">
                <div>
                    <InvesNowIcon icon="ic-logo-labeled-white" height="29px" width="146px" />
                    <p class="mt-[32px] font-400 text-[16px] leading-[24px] text-gray-400">Berizin & diawasi oleh</p>
                    <InvesNowIcon icon="ic-ojk" height="71px" width="170px" class="mt-[10px]" />
                </div>

                <div class="ml-[155px]">
                    <p class="text-gray-500 font-700 text-[12px] leading-[18px]">COMPANY</p>

                    <div class="flex flex-col space-y-[16px] mt-[20px]">
                        <RouterLink to="#" class="font-400 text-[16px] leading-[24px] text-gray-300">Tentang Kami</RouterLink>
                        <RouterLink to="#" class="font-400 text-[16px] leading-[24px] text-gray-300">Karir</RouterLink>
                        <RouterLink to="#" class="font-400 text-[16px] leading-[24px] text-gray-300">Blog</RouterLink>
                        <RouterLink to="#" class="font-400 text-[16px] leading-[24px] text-gray-300">Kontak</RouterLink>
                    </div>
                </div>

                <div class="ml-[155px]">
                    <p class="text-gray-500 font-700 text-[12px] leading-[18px]">SUPPORT</p>

                    <div class="flex flex-col space-y-[16px] mt-[20px]">
                        <RouterLink to="#" class="font-400 text-[16px] leading-[24px] text-gray-300">FAQ</RouterLink>
                        <RouterLink to="#" class="font-400 text-[16px] leading-[24px] text-gray-300">Syarat & Ketentuan</RouterLink>
                    </div>
                </div>

                <div class="ml-auto max-w-[400px]">
                    <p class="text-white font-700 text-[24px] leading-[28px]">Newsletter</p>

                    <p class="text-gray-400 font-400 text-[16px] leading-[24px] mt-[13px]">
                        Segarkan wawasan investasi Anda setiap harinya dengan berita-berita financial dari newsletter kami.
                    </p>

                    <div class="flex w-full mt-[24px]">
                        <InvesNowInput placeholder="Masukan Email Anda" />
                        <InvesNowButton class="bg-brand-500 text-white ml-[10px]">Subscribe</InvesNowButton>
                    </div>
                </div>
            </div>

            <div class="w-full h-[1px] bg-white opacity-10 mt-[32px]" />

            <div class="flex w-full mt-[16px]">
                <p class="font-400 text-[16px] leading-[24px] text-gray-400">© 2021 PT Invesnow Principal Optima</p>

                <div class="flex ml-auto space-x-[23px] items-center">
                    <InvesNowIcon icon="ic-linkedin" height="16px" width="16px" class="cursor-pointer" />
                    <InvesNowIcon icon="ic-instagram" height="16px" width="16px" class="cursor-pointer" />
                    <InvesNowIcon icon="ic-twitter" height="16px" width="16px" class="cursor-pointer" />
                    <InvesNowIcon icon="ic-facebook" height="16px" width="16px" class="cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";
import InvesNowInput from "@/components/common/InvesNowInput.vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue";

export default defineComponent({
    components: {
        InvesNowIcon,
        InvesNowInput,
        InvesNowButton,
    },
});
</script>
