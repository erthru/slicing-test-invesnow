<template>
    <div class="flex w-full relative">
        <InvesNowIcon icon="ic-wave-artboard" width="100%" height="100%" class="absolute bottom-0" />

        <div class="bg-brand-alt-700 w-full pt-[59px] overflow-hidden">
            <div class="flex w-full px-[91px]">
                <InvesNowButton class="bg-red-500 text-white mx-auto w-full z-10" is-circle>Daftar</InvesNowButton>
            </div>

            <InvesNowIcon icon="ic-people-drawing" height="auto" width="100%" class="z-10 relative mt-[148px] -ml-[14px]" />
        </div>

        <div class="bg-brand-500 w-full pt-[59px] overflow-hidden">
            <div class="flex w-full px-[91px]">
                <InvesNowButton class="bg-accent-500 text-brand-alt-800 mx-auto w-full z-10" is-circle>Beli Reksa Dana</InvesNowButton>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue";

export default defineComponent({
    name: "BannerThree",

    components: {
        InvesNowIcon,
        InvesNowButton,
    },
});
</script>
