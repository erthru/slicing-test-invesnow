<template>
    <div>
        <div class="flex w-full">
            <div>
                <div class="flex items-center">
                    <p class="font-700 text-[18px] leading-[25px] text-gray-900">{{ title }}</p>
                    <p v-if="insertTitle" class="ml-[4px] font-400 text-[14px] leading-[16px] text-gray-500">{{ insertTitle }}</p>
                </div>

                <p class="mt-[2px] font-400 text-[14px] leading-[16px] text-gray-500">{{ subtitle }}</p>
            </div>

            <div class="flex ml-auto items-center">
                <div class="w-[61px] h-[2px]" :style="`background-color: ${borderColor}`" />
                <p class="ml-[14px] font-500 text-[12px] leading-[20px]">{{ label }}</p>
            </div>
        </div>

        <canvas :id="id" class="w-full max-h-[269px] mt-[39px]" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Chart from "chart.js/auto";

export default defineComponent({
    props: {
        title: {
            type: String,
            default: "",
        },

        insertTitle: {
            type: String,
            default: "",
        },

        subtitle: {
            type: String,
            default: "",
        },

        label: {
            type: String,
            default: "",
        },

        labels: {
            type: Array,

            default: () => {
                return [];
            },
        },

        data: {
            type: Array,

            default: () => {
                return [];
            },
        },

        backgroundColor: {
            type: String,
            default: "rgba(0,0,0, 0.2)",
        },

        borderColor: {
            type: String,
            default: "rgba(0,0,0, 1)",
        },
    },

    setup(props) {
        const id = new Date().getTime();

        onMounted(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const ctx = document.getElementById(id).getContext("2d");

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            new Chart(ctx, {
                type: "line",

                data: {
                    labels: props.labels,

                    datasets: [
                        {
                            data: props.data,
                            backgroundColor: props.backgroundColor,
                            borderColor: props.borderColor,
                            borderWidth: 2,
                            tension: 0.5,
                        },
                    ],
                },

                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },

                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },

                        y: {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 6,
                            },
                        },
                    },
                },
            });
        });

        return { id };
    },
});
</script>
