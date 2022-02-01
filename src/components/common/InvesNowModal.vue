<template>
    <div v-if="modelValue" class="w-full h-screen fixed top-0 left-0">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50" @click="closeModal" />

        <div class="w-full flex pt-[56px]">
            <div class="bg-white w-[756px] p-[75px] relative mx-auto">
                <InvesNowIcon
                    icon="ic-close"
                    height="14px"
                    width="14px"
                    class="cursor-pointer absolute top-[24px] right-[24px]"
                    @click="closeModal"
                />

                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InvesNowIcon from "@/components/common/InvesNowIcon.vue";

export default defineComponent({
    components: {
        InvesNowIcon,
    },

    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
    },

    setup(_, context) {
        const closeModal = () => {
            context.emit("update:modelValue", false);
        };

        return { closeModal };
    },
});
</script>
