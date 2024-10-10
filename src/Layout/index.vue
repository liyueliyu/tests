<template>
  <Layout class="!h-[100vh]">
    <LayoutSider
      width="60"
      class="!bg-[#f8f9fc]"
      style="border-right: 1px solid #c9ceda"
    ></LayoutSider>
    <Layout>
      <LayoutHeader
        class="!h-[60px] !bg-white"
        style="border-bottom: 1px solid #c9ceda"
      >
      </LayoutHeader>
      <Layout>
        <LayoutContent class="!p-[10px] !box-border">
          <RouterView></RouterView>
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
</template>
<script setup>
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
} from "ant-design-vue";
</script>
<style scoped></style>
