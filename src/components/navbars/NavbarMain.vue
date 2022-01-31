<template>
    <div class="flex w-full border-b-[2px] border-gray-200 px-[32px] py-[15px] items-center relative bg-white">
        <InvesNowIcon icon="ic-logo-labeled" width="135px" height="27px" />

        <div class="ml-auto flex text-[16px] font-700 leading-[24px] space-x-[44px] items-center">
            <div>
                <div class="absolute top-0 bg-brand-500 h-[16px] w-[16px] rounded-full -mt-[8px] ml-[14px]" />
                <RouterLink class="text-gray-900" to="#">Home</RouterLink>
            </div>

            <div>
                <RouterLink class="text-gray-500" to="#">Reksa Dana</RouterLink>
            </div>

            <div>
                <RouterLink class="text-gray-500" to="#">SBN</RouterLink>
            </div>

            <InvesNowButton class="bg-brand-500 text-white">Masuk</InvesNowButton>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";
import InvesNowButton from "@/components/common/InvesNowButton.vue"

export default defineComponent({
    name: "NavbarMain",

    components: {
        InvesNowIcon,
        InvesNowButton
    },
});
</script>
