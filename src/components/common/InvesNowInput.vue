<template>
    <input
        v-model="tempValue"
        :placeholder="placeholder"
        type="text"
        class="p-[14px] bg-white placeholder-gray-400 rounded-lg text-[14px] font-400 leading-[21px] w-full"
    />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from "vue";

export default defineComponent({
    props: {
        value: {
            type: String,
            default: "",
        },

        placeholder: {
            type: String,
            default: "",
        },
    },

    setup(props, context) {
        const state = reactive({
            tempValue: "",
        });

        onMounted(() => {
            state.tempValue = props.value;
        });

        watch(
            () => state.tempValue,
            (val) => {
                context.emit("value", val);
            }
        );

        return { state };
    },
});
</script>
