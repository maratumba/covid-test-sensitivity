<template>
  <v-data-table :sort-by="defaultSortBy" :sort-desc="defaultSortDesc" :items="items" :search="search" :headers="headers" disable-pagination hide-default-footer>
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
     <template
        v-slot:item.manufacturer="{ item }"
      >
        <span :class="sensitivityClass(item.ct_25_30)">{{ item.manufacturer }}%</span>
     </template>
     <template
        v-slot:item.testName="{ item }"
      >
        <span :class="sensitivityClass(item.ct_25_30)">{{ item.testName }}%</span>
     </template>
     <template
        v-slot:item.ct_17_36="{ item }"
      >
        <span :class="sensitivityClass(item.ct_17_36)">{{ getValueStr(item.ct_17_36) }}</span>
     </template>
     <template
        v-slot:item.ct_25_30="{ item }"
      >
        <span :class="'font-weight-black '  + sensitivityClass(item.ct_25_30)">{{ getValueStr(item.ct_25_30) }}</span>
     </template>
     <template
        v-slot:item.ct_gt_30="{ item }"
      >
        <span :class="sensitivityClass(item.ct_gt_30)">{{ getValueStr(item.ct_gt_30) }}</span>
     </template>
     <template
        v-slot:item.ct_lt_25="{ item }"
      >
        <span :class="sensitivityClass(item.ct_lt_25)">{{ getValueStr(item.ct_lt_25) }}</span>
     </template>
     <template
        v-slot:item.amazon_de_url="{ item }"
      >
        <a v-if="item.amazon_de_url" :href="item.amazon_de_url" target="_blank"><img style="height:1.3rem" :src="require('~/assets/a.de_logo_RGB_online_schwarz.jpg')" /></a>
     </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    sensitivityClass(val){
      if(!val) return'';
      else if(val<0.5) return "red--text text--lighten-3";
      else if(val>0.75) return "green--text text--lighten-3";
      else return "text--lighten-1";
    },
    getValueStr(val){
      if(!val) return '-';
      if(isNaN(val)) return '-';
      return (val*100).toFixed(2) + "%";
    }
  },
  data: () => ({
    search: '',
    defaultSortBy: "ct_25_30",
    defaultSortDesc: "true",
    headers: [
      {
        sortable: true,
        align: "start",
        value: "manufacturer",
        text: "Manufacturer",
      },
      {
        sortable: true,
        align: "start",
        value: "testName",
        text: "Test Name",
      },
      {
        sortable: true,
        align: "center",
        value: "ct_25_30",
        text: "CT 25-30",
      },
      {
        sortable: true,
        align: "center",
        value: "ct_lt_25",
        text: "CT < 25",
      },
      {
        sortable: true,
        align: "center",
        value: "ct_gt_30",
        text: "CT > 30",
      },
      {
        sortable: true,
        align: "center",
        value: "ct_17_36",
        text: "CT 17-36",
      },
      {
        sortable: false,
        align: "center",
        value: "amazon_de_url",
        text: "",
      },
    ]
  })
}
</script>

<style>

</style>
