<template>
    <div class="w-full flex bg-gray-100 py-[12px] pl-[35px] pr-[17px] text-[14px] font-400 text-gray-600 leading-[17px]">
        <div class="flex w-full">
            <p>Customer Service:</p>

            <div class="flex space-x-[10px] ml-[34px] items-center">
                <InvesNowIcon icon="ic-whatsapp" width="15px" height="15px" />
                <p>021-27088372</p>
            </div>

            <div class="flex space-x-[10px] ml-[37px] items-center">
                <InvesNowIcon icon="ic-phone" size="15px" height="15px" />
                <p>021-22789062</p>
            </div>

            <div class="ml-auto flex">
                <RouterLink to="#">FAQ</RouterLink>
                <RouterLink to="#" class="ml-[24px]">Artikel</RouterLink>
                <RouterLink to="#" class="ml-[19px]">Contact</RouterLink>

                <div class="flex items-center ml-[31px] cursor-pointer">
                    <InvesNowIcon icon="ic-indonesia" width="15px" height="10px" />
                    <p class="ml-[6px] text-gray-800 font-700">ID</p>
                    <InvesNowIcon icon="ic-arrow-bottom" class="ml-[4px]" width="12px" height="4px" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";

export default defineComponent({
    name: "NavbarSub",

    components: {
        InvesNowIcon,
    },
});
</script>
