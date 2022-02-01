<template>
    <div class="flex w-full border-b-[2px] border-gray-200 px-[32px] py-[15px] items-center relative bg-white">
        <InvesNowIcon icon="ic-logo-labeled" width="135px" height="27px" />

        <div class="ml-auto flex text-[16px] font-400 leading-[24px] space-x-[44px] text-gray-600 items-center">
            <div>
                <RouterLink to="/">Home</RouterLink>
            </div>

            <div>
                <RouterLink to="#">Reksa Dana</RouterLink>
            </div>

            <div>
                <RouterLink to="#">Artikel</RouterLink>
            </div>

            <InvesNowButton class="bg-brand-500 text-white">Masuk/Daftar</InvesNowButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue";

export default defineComponent({
    name: "NavbarDetail",

    components: {
        InvesNowIcon,
        InvesNowButton,
    },
});
</script>
